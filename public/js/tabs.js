'use strict';

(function ($) {
    $(function () {

        $('ul.tabs__caption').on('click', 'li:not(.active)', function () {
            $(this).addClass('active').siblings().removeClass('active').closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
        });
    });
})(jQuery);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJ0YWJzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuKGZ1bmN0aW9uICgkKSB7XG4gICAgJChmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgJCgndWwudGFic19fY2FwdGlvbicpLm9uKCdjbGljaycsICdsaTpub3QoLmFjdGl2ZSknLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmUnKS5zaWJsaW5ncygpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKS5jbG9zZXN0KCdkaXYudGFicycpLmZpbmQoJ2Rpdi50YWJzX19jb250ZW50JykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpLmVxKCQodGhpcykuaW5kZXgoKSkuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICB9KTtcbiAgICB9KTtcbn0pKGpRdWVyeSk7Il0sImZpbGUiOiJ0YWJzLmpzIn0=
