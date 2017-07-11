(function () {
    let $link = $('a[href="#"]');
    let $linkChoice = $('.nav__sub-menu');
    let $isChecked = false;

    $link.click(function(e) {
        $(this).addClass('activeLink').parents().siblings(this).find('a').removeClass('activeLink');
        e.preventDefault();
    });

    $('.sandwich').click(function() {
        $( this ).toggleClass( "active" );
        $('.menu__hidden').toggleClass('active');
    });

    $linkChoice.on('click', '.usd', function(e) {
        if ($isChecked) {
            $('.euro').html('<i class="fa fa-euro" aria-hidden="true"></i>euro<i class="fa fa-caret-down" aria-hidden="true"></i>');
            $('.usd').html('<i class="fa fa-usd" aria-hidden="true"></i>usd');
        } else {
            $('.euro').html('<i class="fa fa-usd" aria-hidden="true"></i>usd<i class="fa fa-caret-down" aria-hidden="true"></i>');
            $('.usd').html('<i class="fa fa-euro" aria-hidden="true"></i>euro');
        }
        $isChecked = !$isChecked;
    });

    $linkChoice.on('click', '.lang', function(){
        if ($(this).text() === 'укр') {
            $('.eng').html('<i class="fa fa-globe" aria-hidden="true"></i>укр<i class="fa fa-caret-down" aria-hidden="true"></i>');
            $('.ukr').text('eng');
            $('.rs').text('рус');
        } else if ($(this).text() === 'рус') {
            $('.eng').html('<i class="fa fa-globe" aria-hidden="true"></i>рус<i class="fa fa-caret-down" aria-hidden="true"></i>');
            $('.ukr').text('укр');
            $('.rs').text('eng');
        } else if ($(this).text() === 'eng') {
            $('.eng').html('<i class="fa fa-globe" aria-hidden="true"></i>eng<i class="fa fa-caret-down" aria-hidden="true"></i>');
            $('.ukr').text('укр');
            $('.rs').text('рус');
        } else if ($(this).text() === 'рус') {
            $('.eng').html('<i class="fa fa-globe" aria-hidden="true"></i>рус<i class="fa fa-caret-down" aria-hidden="true"></i>');
            $('.ukr').text('укр');
            $('.rs').text('eng');
        } else {
            $('.eng').html('<i class="fa fa-globe" aria-hidden="true"></i>eng<i class="fa fa-caret-down" aria-hidden="true"></i>');
            $('.ukr').text('укр');
            $('.rs').text('рус');
        }
    });

    $('#navigation ul li ul').hide()
        .prev().click(function (event) {
        $(this).not($(this).next().slideToggle());
    });
    $(".accordeon dd").hide().prev().click(function() {
        $(this).parents(".accordeon").find("dd").not(this).slideUp().prev().removeClass("active");
        $(this).next().not(":visible").slideDown().prev().addClass("active");
    });

    $('form').submit((e) => {
        e.preventDefault();
        // let error = "";
        // if ($("#name").val() == "") {
        //     error += " The Name field is required! <br>";
        // }
        // if ($("#email").val() == "") {
        //     error += " The Email field is required! <br>";
        // }
        //
        // if (error !== "") {
        //     $('#error').html('<div id="error">' +
        //         '<p><strong> There were error(s) in your form: </strong></p>' + error + '</div>');
        // }

        $('form').unbind('submit').submit();
    });

})();
