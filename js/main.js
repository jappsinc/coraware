/* * iSOON - Ideal Coming Soon Template
 *
 * This is a premium product available exclusively at this address http://themeforest.net/user/madeon08/portfolio
 *
 * The demo files are minified/crypted for copyright reasons, you will find them, expanded, commented and coded accurately in your download pack.
 *
 * Thanks for your support!
 *
 */
function selectedfield() {
    var e = document.getElementById("reason");
    "placeholder" !== e.options[e.selectedIndex].value && $("#reason").removeClass("no-selection")
}

function menubutton() {
    $("#menu-access i").is(".ion-close-round") && ($("#menu-access i").removeClass("ion-close-round").addClass("ion-navicon-round").toggleClass("rotateIn"), setTimeout(function() {
        $("#menu-access i").removeClass("rotateIn")
    }, 620))
}

function menuclosing() {
    $("#menu , #fullpage , .holdscroll , #fp-nav , #menu-access").removeClass("menu-opened")
}
$(window).load(function() {
    "use strict";
    $("#right-block-top , #right-block-bottom , #fullpage , #fp-nav , #menu-access , .social-footer").css("opacity", "0"), $("#fullpage").css("top", "100vh"), setTimeout(function() {
        $("#loading").fadeOut()
    }, 1e3), setTimeout(function() {
        $("#fullpage").css({
            top: "0",
            opacity: "1"
        }), $("#right-block-top").addClass("animated-quick fadeInUp").css("opacity", "1")
    }, 1500), setTimeout(function() {
        $("#right-block-bottom").addClass("animated-quick fadeInUp").css("opacity", "1")
    }, 1600), setTimeout(function() {
        $("#fp-nav , #menu-access , .social-footer").css("opacity", "1"), $("#right-block-bottom , #right-block-top").removeClass("animated-middle fadeInUp")
    }, 2210)
}), $("#menu-access").on("mouseenter mouseleave", function() {
    $(this).toggleClass("hovered")
}), $(".form-control").on("focusin focusout", function() {
    $(this).siblings(".icon-fields").toggleClass("active")
}), $(document).ready(function() {
    "use strict";
    $("#fullpage").fullpage({
        anchors: ["1", "2", "3", "4", "5"],
        navigationTooltips: ["Home", "The Virus", "The Stats", "The Authorities", "Checklist"],
        showActiveTooltip: !1,
        menu: "#menu",
        css3: !0,
        scrollingSpeed: 800,
        responsiveWidth: 1025
    }),
      $("#gallery-1").on("click", function() {
        $.swipebox([{
            href: "img/gallery-1.jpg",
            title: "Carefully designed"
        }, {
            href: "img/gallery-2.jpg",
            title: "Colors of life"
        }, {
            href: "img/gallery-3.jpg",
            title: "Where the energy is"
        }])
    }), $("#gallery-2").on("click", function() {
        $.swipebox([{
            href: "img/gallery-2.jpg",
            title: "Carefully designed"
        }, {
            href: "img/gallery-3.jpg",
            title: "Colors of life"
        }, {
            href: "img/gallery-1.jpg",
            title: "Where the energy is"
        }])
    }), $(window).on("click", function(e) {
        "fp-nav" === e.target.id || $("#menu-access , #fp-nav li, #fp-nav a").find(e.target).length || (menuclosing(), menubutton())
    }), $("#menu-access").on("click", function(e) {
        e.stopPropagation(), $("#menu , #fullpage , #fp-nav").toggleClass("menu-opened"), $("#menu-access i").toggleClass("ion-close-round ion-navicon-round rotateIn"), setTimeout(function() {
            $("#menu-access i").removeClass("rotateIn")
        }, 620)
    }), $(document).on("keyup", function(e) {
        27 == e.keyCode && (menuclosing(), menubutton())
    }), 1025 > $(window).width() && ($("#right-block").insertAfter("#section0"), $("a#anchor").attr("href", "#right-block"), $("a").on("click", function() {
        return $("html, body").animate({
            scrollTop: $($(this).attr("href")).offset().top
        }, 500), !1
    })), /Android/i.test(navigator.userAgent) || $(window).resize(function() {
        1025 > $(window).width() ? ($("#right-block").insertAfter("#section0"), $("a#anchor").attr("href", "#right-block")) : ($("#right-block").insertAfter("#fullpage"), $("a#anchor").attr("href", "#2"))
    }), $("#carousel-services").addClass("slide"), $("#notifyMe").notifyMe()
});
