(function () {
    let $link = $('a[href="#"]');

    $link.click(function(e) {
        $(this).addClass('activeLink').parents().siblings(this).find('a').removeClass('activeLink');
        e.preventDefault();
    });

    $('.sandwich').click(function() {
        $( this ).toggleClass( "active" );
        $('.menu__hidden').toggleClass('active');
    });

    $('#navigation ul li ul').hide()
        .prev().click(function (event) {
        $(this).not($(this).next().slideToggle());
    });
    $(".accordeon dd").hide().prev().click(function() {
        $(this).parents(".accordeon").find("dd").not(this).slideUp().prev().removeClass("active");
        $(this).next().not(":visible").slideDown().prev().addClass("active");
    });

    $('.form').submit(function () {

        let error = "";
        if ($("#name").val() == "") {
            error += " The Name field is required! <br>";
        }
        if ($("#email").val() == "") {
            error += " The Email field is required! <br>";
        }

        if (error !== "") {
            $('#error').html('<div class="error">' +
                '<p> There were error(s) in your form: </p>' + error + '</div>');
            return false;
        } else {

            return true;
        }

    });
})();
