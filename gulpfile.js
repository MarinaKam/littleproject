'use strict';

const gulp = require('gulp');
const babel = require('gulp-babel');
const plumber = require('gulp-plumber');
const scss = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const streamCombiner = require('stream-combiner2');
const concat = require('gulp-concat');
const _if = require('gulp-if');
const cleanCSS = require('gulp-clean-css');
const cssmin = require('gulp-minify-css');
const cssnano = require('gulp-cssnano');
const sourcemaps = require('gulp-sourcemaps');
const rename = require('gulp-rename');
const rigger = require('gulp-rigger');
const newer = require('gulp-newer');
const del = require('del');
const rev = require('gulp-rev');
const revReplace = require('gulp-rev-replace');
const notify = require('gulp-notify');
const jshint = require('gulp-jshint');
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');
const pngquant = require('imagemin-pngquant');
const browserSync = require('browser-sync');

const reload = browserSync.reload;
const isDevelopment = !process.env.NODE_ENV || process.env.NODE_ENV == 'development';
const combine = streamCombiner.obj;
const path = {
    src: 'src',
    dest: 'public'
};

const config = {
    server: {
        baseDir: path.dest
    },
    tunnel: true,
    host: 'localhost',
    port: 3000,
    logPrefix: "Frontend_Devil"
};


gulp.task('styles', function() {
        gulp.src(`${path.src}/**/main.scss`)
            .pipe(plumber({
                errorHandler: notify.onError(err => ({
                    title: 'SCSS',
                    message: err.message
                }))
            }))
            .pipe(_if(isDevelopment, sourcemaps.init()))
            .pipe(scss())
            .pipe(autoprefixer('last 2 version'))
            .pipe(cssmin({keepBreaks: true}))
            // .pipe(cssmin())
            .pipe(_if(!isDevelopment, cssnano()))
            .pipe(_if(!isDevelopment, cleanCSS()))
            .pipe(_if(isDevelopment, rev()))
            .pipe(concat('style.css'))
            .pipe(_if(isDevelopment, sourcemaps.write()))
            .pipe(plumber.stop())
            .pipe(gulp.dest(`${path.dest}/css/`))
            .pipe(rename({ suffix: '.min' }))
            .pipe(_if(isDevelopment, rev.manifest('css.json')))
            .pipe(_if(isDevelopment, gulp.dest('manifest')))
            .pipe(notify({ message: 'Styles task completed' }))
            .pipe(reload({stream: true}));
});

gulp.task('clean', () => del([`${path.dest}/**/*.**`, 'manifest']));

gulp.task('htmls', () => {
        gulp.src(`${path.src}/index.html`)
            .pipe(plumber({
                errorHandler: notify.onError(err => ({
                    title: 'HTML',
                    message: err.message
                }))
            }))
            .pipe(_if(isDevelopment, revReplace({
            manifest: gulp.src('manifest/css.json', { allowEmpty: true})
        })))
            .pipe(rigger())
            .pipe(plumber.stop())
            .pipe(newer(`${path.dest}/`))
            .pipe(gulp.dest(`${path.dest}/`))
            .pipe(notify({ message: 'Html task completed' }))
            .pipe(reload({stream: true}));
});

gulp.task('scripts', function() {
    combine(
        gulp.src(`${path.src}/js/*.js`),
        babel({
            presets: ['es2015']
        }),
        jshint(),
        jshint.reporter('default'),
        rigger(),
        _if(isDevelopment, sourcemaps.init()),
        uglify(),
        _if(isDevelopment, sourcemaps.write()),
        gulp.dest(`${path.dest}/js/`),
        reload({stream: true})
    ).on('error', notify.onError());
});

gulp.task('images', () => {
    gulp.src(`${path.src}/img/*.{png,jpg,svg}`)
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant({quality: '65-80', speed: 4})],
            interlaced: true
        }))
        .pipe(gulp.dest(`${path.dest}/css/img/`))
        .pipe(_if(!isDevelopment, combine(rev.manifest('src.json'), gulp.dest('manifest'))))
        .pipe(reload({stream: true}));
});

gulp.task('build', ['clean', 'htmls', 'styles', 'scripts', 'images']);

gulp.task('watch', () => {
    gulp.watch(`${path.src}/**/*.scss`, ['styles']);
    gulp.watch(`${path.src}/index.html`, ['htmls']);
    gulp.watch(`${path.src}/**/*.js`, ['scripts']);
    gulp.watch(`${path.src}/img/*.{png,jpg,svg}`, ['images']);
    // gulp.watch(`${dirs.src}/**/*.*`, gulp.series('src'));
});

gulp.task('server', function () {
    browserSync(config);
});

gulp.task('dev', ['build', 'serve', 'watch']);
gulp.task('default', ['build', 'server', 'watch']);
