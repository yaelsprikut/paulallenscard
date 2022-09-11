/**
 * Created by Kupletsky Sergey on 16.09.14.
 *
 * Hierarchical timing
 * Add specific delay for CSS3-animation to elements.
 */
const $ = require('jquery')
function loadDashboardScripts() {
    console.log('load script')
    const speed = 2000
    const container = $('.display-animation')
    container.each(function () {
        const elements = $(this).children()
        elements.each(function () {
            const elementOffset = $(this).offset()
            const offset = elementOffset.left * 0.8 + elementOffset.top
            const delay = parseFloat(offset / speed).toFixed(2)
            $(this)
                .css('-webkit-animation-delay', delay + 's')
                .css('-o-animation-delay', delay + 's')
                .css('animation-delay', delay + 's')
                .addClass('animated')
        })
    })
    $('.ripple-effect').click(function (e) {
        const rippler = $(this)

        // create .ink element if it doesn't exist
        if (rippler.find('.ink').length == 0) {
            rippler.append("<span class='ink'></span>")
        }

        const ink = rippler.find('.ink')

        // prevent quick double clicks
        ink.removeClass('animate')

        // set .ink diametr
        if (!ink.height() && !ink.width()) {
            const d = Math.max(rippler.outerWidth(), rippler.outerHeight())
            ink.css({ height: d, width: d })
        }

        // get click coordinates
        const x = e.pageX - rippler.offset().left - ink.width() / 2
        const y = e.pageY - rippler.offset().top - ink.height() / 2

        // set .ink position and add class .animate
        ink.css({
            top: y + 'px',
            left: x + 'px',
        }).addClass('animate')
    })
}
setTimeout(function () {
    loadDashboardScripts()
}, 500)
