'use strict';

(function () {
    var $link = $('a[href="#"]');
    var $linkChoice = $('.nav__sub-menu');
    var $isChecked = false;

    $link.click(function (e) {
        $(this).addClass('activeLink').parents().siblings(this).find('a').removeClass('activeLink');
        e.preventDefault();
    });

    $('.sandwich').click(function () {
        $(this).toggleClass("active");
        $('.menu__hidden').toggleClass('active');
    });

    $linkChoice.on('click', '.usd', function (e) {
        if ($isChecked) {
            $('.euro').html('<i class="fa fa-euro" aria-hidden="true"></i>euro<i class="fa fa-caret-down" aria-hidden="true"></i>');
            $('.usd').html('<i class="fa fa-usd" aria-hidden="true"></i>usd');
        } else {
            $('.euro').html('<i class="fa fa-usd" aria-hidden="true"></i>usd<i class="fa fa-caret-down" aria-hidden="true"></i>');
            $('.usd').html('<i class="fa fa-euro" aria-hidden="true"></i>euro');
        }
        $isChecked = !$isChecked;
    });

    $linkChoice.on('click', '.lang', function () {
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

    $('#navigation ul li ul').hide().prev().click(function (event) {
        $(this).not($(this).next().slideToggle());
    });
    $(".accordeon dd").hide().prev().click(function () {
        $(this).parents(".accordeon").find("dd").not(this).slideUp().prev().removeClass("active");
        $(this).next().not(":visible").slideDown().prev().addClass("active");
    });

    $('form').submit(function (e) {
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJzY3JpcHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG4oZnVuY3Rpb24gKCkge1xuICAgIHZhciAkbGluayA9ICQoJ2FbaHJlZj1cIiNcIl0nKTtcbiAgICB2YXIgJGxpbmtDaG9pY2UgPSAkKCcubmF2X19zdWItbWVudScpO1xuICAgIHZhciAkaXNDaGVja2VkID0gZmFsc2U7XG5cbiAgICAkbGluay5jbGljayhmdW5jdGlvbiAoZSkge1xuICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmVMaW5rJykucGFyZW50cygpLnNpYmxpbmdzKHRoaXMpLmZpbmQoJ2EnKS5yZW1vdmVDbGFzcygnYWN0aXZlTGluaycpO1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfSk7XG5cbiAgICAkKCcuc2FuZHdpY2gnKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgICQodGhpcykudG9nZ2xlQ2xhc3MoXCJhY3RpdmVcIik7XG4gICAgICAgICQoJy5tZW51X19oaWRkZW4nKS50b2dnbGVDbGFzcygnYWN0aXZlJyk7XG4gICAgfSk7XG5cbiAgICAkbGlua0Nob2ljZS5vbignY2xpY2snLCAnLnVzZCcsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGlmICgkaXNDaGVja2VkKSB7XG4gICAgICAgICAgICAkKCcuZXVybycpLmh0bWwoJzxpIGNsYXNzPVwiZmEgZmEtZXVyb1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT5ldXJvPGkgY2xhc3M9XCJmYSBmYS1jYXJldC1kb3duXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPicpO1xuICAgICAgICAgICAgJCgnLnVzZCcpLmh0bWwoJzxpIGNsYXNzPVwiZmEgZmEtdXNkXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPnVzZCcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJCgnLmV1cm8nKS5odG1sKCc8aSBjbGFzcz1cImZhIGZhLXVzZFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT51c2Q8aSBjbGFzcz1cImZhIGZhLWNhcmV0LWRvd25cIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+Jyk7XG4gICAgICAgICAgICAkKCcudXNkJykuaHRtbCgnPGkgY2xhc3M9XCJmYSBmYS1ldXJvXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPmV1cm8nKTtcbiAgICAgICAgfVxuICAgICAgICAkaXNDaGVja2VkID0gISRpc0NoZWNrZWQ7XG4gICAgfSk7XG5cbiAgICAkbGlua0Nob2ljZS5vbignY2xpY2snLCAnLmxhbmcnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICgkKHRoaXMpLnRleHQoKSA9PT0gJ9GD0LrRgCcpIHtcbiAgICAgICAgICAgICQoJy5lbmcnKS5odG1sKCc8aSBjbGFzcz1cImZhIGZhLWdsb2JlXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPtGD0LrRgDxpIGNsYXNzPVwiZmEgZmEtY2FyZXQtZG93blwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT4nKTtcbiAgICAgICAgICAgICQoJy51a3InKS50ZXh0KCdlbmcnKTtcbiAgICAgICAgICAgICQoJy5ycycpLnRleHQoJ9GA0YPRgScpO1xuICAgICAgICB9IGVsc2UgaWYgKCQodGhpcykudGV4dCgpID09PSAn0YDRg9GBJykge1xuICAgICAgICAgICAgJCgnLmVuZycpLmh0bWwoJzxpIGNsYXNzPVwiZmEgZmEtZ2xvYmVcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+0YDRg9GBPGkgY2xhc3M9XCJmYSBmYS1jYXJldC1kb3duXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPicpO1xuICAgICAgICAgICAgJCgnLnVrcicpLnRleHQoJ9GD0LrRgCcpO1xuICAgICAgICAgICAgJCgnLnJzJykudGV4dCgnZW5nJyk7XG4gICAgICAgIH0gZWxzZSBpZiAoJCh0aGlzKS50ZXh0KCkgPT09ICdlbmcnKSB7XG4gICAgICAgICAgICAkKCcuZW5nJykuaHRtbCgnPGkgY2xhc3M9XCJmYSBmYS1nbG9iZVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT5lbmc8aSBjbGFzcz1cImZhIGZhLWNhcmV0LWRvd25cIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+Jyk7XG4gICAgICAgICAgICAkKCcudWtyJykudGV4dCgn0YPQutGAJyk7XG4gICAgICAgICAgICAkKCcucnMnKS50ZXh0KCfRgNGD0YEnKTtcbiAgICAgICAgfSBlbHNlIGlmICgkKHRoaXMpLnRleHQoKSA9PT0gJ9GA0YPRgScpIHtcbiAgICAgICAgICAgICQoJy5lbmcnKS5odG1sKCc8aSBjbGFzcz1cImZhIGZhLWdsb2JlXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPtGA0YPRgTxpIGNsYXNzPVwiZmEgZmEtY2FyZXQtZG93blwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT4nKTtcbiAgICAgICAgICAgICQoJy51a3InKS50ZXh0KCfRg9C60YAnKTtcbiAgICAgICAgICAgICQoJy5ycycpLnRleHQoJ2VuZycpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJCgnLmVuZycpLmh0bWwoJzxpIGNsYXNzPVwiZmEgZmEtZ2xvYmVcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+ZW5nPGkgY2xhc3M9XCJmYSBmYS1jYXJldC1kb3duXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPicpO1xuICAgICAgICAgICAgJCgnLnVrcicpLnRleHQoJ9GD0LrRgCcpO1xuICAgICAgICAgICAgJCgnLnJzJykudGV4dCgn0YDRg9GBJyk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgICQoJyNuYXZpZ2F0aW9uIHVsIGxpIHVsJykuaGlkZSgpLnByZXYoKS5jbGljayhmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgJCh0aGlzKS5ub3QoJCh0aGlzKS5uZXh0KCkuc2xpZGVUb2dnbGUoKSk7XG4gICAgfSk7XG4gICAgJChcIi5hY2NvcmRlb24gZGRcIikuaGlkZSgpLnByZXYoKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgICQodGhpcykucGFyZW50cyhcIi5hY2NvcmRlb25cIikuZmluZChcImRkXCIpLm5vdCh0aGlzKS5zbGlkZVVwKCkucHJldigpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpO1xuICAgICAgICAkKHRoaXMpLm5leHQoKS5ub3QoXCI6dmlzaWJsZVwiKS5zbGlkZURvd24oKS5wcmV2KCkuYWRkQ2xhc3MoXCJhY3RpdmVcIik7XG4gICAgfSk7XG5cbiAgICAkKCdmb3JtJykuc3VibWl0KGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgLy8gbGV0IGVycm9yID0gXCJcIjtcbiAgICAgICAgLy8gaWYgKCQoXCIjbmFtZVwiKS52YWwoKSA9PSBcIlwiKSB7XG4gICAgICAgIC8vICAgICBlcnJvciArPSBcIiBUaGUgTmFtZSBmaWVsZCBpcyByZXF1aXJlZCEgPGJyPlwiO1xuICAgICAgICAvLyB9XG4gICAgICAgIC8vIGlmICgkKFwiI2VtYWlsXCIpLnZhbCgpID09IFwiXCIpIHtcbiAgICAgICAgLy8gICAgIGVycm9yICs9IFwiIFRoZSBFbWFpbCBmaWVsZCBpcyByZXF1aXJlZCEgPGJyPlwiO1xuICAgICAgICAvLyB9XG4gICAgICAgIC8vXG4gICAgICAgIC8vIGlmIChlcnJvciAhPT0gXCJcIikge1xuICAgICAgICAvLyAgICAgJCgnI2Vycm9yJykuaHRtbCgnPGRpdiBpZD1cImVycm9yXCI+JyArXG4gICAgICAgIC8vICAgICAgICAgJzxwPjxzdHJvbmc+IFRoZXJlIHdlcmUgZXJyb3IocykgaW4geW91ciBmb3JtOiA8L3N0cm9uZz48L3A+JyArIGVycm9yICsgJzwvZGl2PicpO1xuICAgICAgICAvLyB9XG5cbiAgICAgICAgJCgnZm9ybScpLnVuYmluZCgnc3VibWl0Jykuc3VibWl0KCk7XG4gICAgfSk7XG59KSgpOyJdLCJmaWxlIjoic2NyaXB0LmpzIn0=
