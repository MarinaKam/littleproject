<?php
define( "TITLE", "UAhost" );
?>
<!doctype html>
<!--<html lang="en">-->
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo( 'charset' ); ?>">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="icon" type="image/png" sizes="32x32" href="<?php echo get_template_directory_uri(); ?>/images/favicon-96x96.png">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">
    <?php wp_head(); ?>
    <!--    <link rel="stylesheet" href="--><?php //echo get_template_directory_uri(); ?><!--/style.css">-->
    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>-->
    <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
    <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <!--[endif]-->
    <title><?php the_title(); ?></title>

</head>
<body  <?php body_class(); ?>>
<div class="wrapper">
    <header class="support clear">
        <section class="support__nav">
            <div class="support__info">
                <p class="support__info-text">24/7 підтримка - </p>
                <a href="tel:+389999999" class="support__info-link"><i class="fa fa-phone" aria-hidden="true"></i>+38(999)999-99-99</a>
            </div>
            <ul class="support__menu">
                <li class="menu__item email"><a href="mailto:email@email.com" class="menu__item-link" target="_blank"><i class="fa fa-envelope" aria-hidden="true"></i>email@email.com</a></li>
                <li class="menu__item skype"><a href="skype:NZeraF?chat" class="menu__item-link"><i class="fa fa-skype" aria-hidden="true"></i>website.com</a></li>
            </ul>
        </section>
        <section class="nav__wrapper">
            <!-- menu__button -->
            <section class="menu__button">
                <span class="sandwich">
                    <span class="sw-topper"></span>
                    <span class="sw-bottom"></span>
                    <span class="sw-footer"></span>
                </span>
                <nav class="menu__hidden">
                    <ul class="hidden__list">
                        <li class="hidden__item"><a href="#" class="hidden__link">Web Хостинг</a></li>
                        <li class="hidden__item"><a href="#" class="hidden__link">VPS Хостинг</a></li>
                        <li class="hidden__item"><a href="#" class="hidden__link">Cloud VPS</a></li>
                        <li class="hidden__item"><a href="#" class="hidden__link">Виділені сервери</a></li>
                        <li class="hidden__item"><a href="#" class="hidden__link">Docker Контейнер</a></li>
                    </ul>
                </nav>
            </section> <!-- menu__button END-->
            <nav class="main__nav">
                <nav class="nav">
                    <div class="nav__logo"><a href="<?php echo esc_url(home_url('/'))?>" class="nav__logo-link">UA<span>host.com</span></a></div>
                    <?php
                    wp_nav_menu(array(
                        'theme_location'  => 'primary',
                        'container'       => false,
                        'container_id'    => false,
                        'menu_class'      => 'nav__menu',
                        'menu-item'      => 'nav__item nav__item-link',
                        'echo' => true
                    ));

                    ?>
                    <!--                    <ul class="nav__menu">-->
                    <!--<!--                        --><?php ////wp_nav_menu( array( "theme_location" => 'nav__menu' ) ) ?>
                    <!--                        <li class="nav__item"><a href="#" class="nav__item-link">Web Хостинг</a></li>-->
                    <!--                        <li class="nav__item"><a href="#" class="nav__item-link">VPS Хостинг</a></li>-->
                    <!--                        <li class="nav__item"><a href="#" class="nav__item-link">Cloud VPS</a></li>-->
                    <!--                        <li class="nav__item"><a href="#" class="nav__item-link">Виділені сервери</a></li>-->
                    <!--                        <li class="nav__item"><a href="#" class="nav__item-link">Docker Контейнер</a></li>-->
                    <!--                    </ul>-->
                </nav>
                <div class="nav__btn">
                    <a href="#" class="nav__btn-link login">Логін</a>
                    <a href="#" class="nav__btn-link sign">Реєстрація</a>
                </div>
            </nav>
        </section>
    </header>

