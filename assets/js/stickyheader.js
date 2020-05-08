/**
 * Sticky header script for Windsurf Attitude
 *
 * Copyright © 2017 Vincent Besançon <besancon.vincent@gmail.com>
 *                  Windsurf Attitude <https://windsurf-attitude.com>
 * See LICENSE.
 **/

$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 390) {
            $('body').addClass("stick_on_scroll");
        } else {
            $('body').removeClass("stick_on_scroll");
        }
    });
});
