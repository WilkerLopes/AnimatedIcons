function createIcons(icon) {
    var engrenagem = "<svg class='boxIcone' viewBox='0 0 512 512'><path d='M262.29,192.31a64,64,0,1,0,57.4,57.4A64.13,64.13,0,0,0,262.29,192.31ZM416.39,256a154.34,154.34,0,0,1-1.53,20.79l45.21,35.46A10.81,10.81,0,0,1,462.52,326l-42.77,74a10.81,10.81,0,0,1-13.14,4.59l-44.9-18.08a16.11,16.11,0,0,0-15.17,1.75A164.48,164.48,0,0,1,325,400.8a15.94,15.94,0,0,0-8.82,12.14l-6.73,47.89A11.08,11.08,0,0,1,298.77,470H213.23a11.11,11.11,0,0,1-10.69-8.87l-6.72-47.82a16.07,16.07,0,0,0-9-12.22,155.3,155.3,0,0,1-21.46-12.57,16,16,0,0,0-15.11-1.71l-44.89,18.07a10.81,10.81,0,0,1-13.14-4.58l-42.77-74a10.8,10.8,0,0,1,2.45-13.75l38.21-30a16.05,16.05,0,0,0,6-14.08c-.36-4.17-.58-8.33-.58-12.5s.21-8.27.58-12.35a16,16,0,0,0-6.07-13.94l-38.19-30A10.81,10.81,0,0,1,49.48,186l42.77-74a10.81,10.81,0,0,1,13.14-4.59l44.9,18.08a16.11,16.11,0,0,0,15.17-1.75A164.48,164.48,0,0,1,187,111.2a15.94,15.94,0,0,0,8.82-12.14l6.73-47.89A11.08,11.08,0,0,1,213.23,42h85.54a11.11,11.11,0,0,1,10.69,8.87l6.72,47.82a16.07,16.07,0,0,0,9,12.22,155.3,155.3,0,0,1,21.46,12.57,16,16,0,0,0,15.11,1.71l44.89-18.07a10.81,10.81,0,0,1,13.14,4.58l42.77,74a10.8,10.8,0,0,1-2.45,13.75l-38.21,30a16.05,16.05,0,0,0-6.05,14.08C416.17,247.67,416.39,251.83,416.39,256Z' /></svg>";
    var perfil = "<div class='boxIcone'><div class='circleHead'></div><div class='circleBody'></div></div>";
    var artigo = "<div class='boxIcone'><div class='paper'><div class='boxSup'></div><div class='lineTitle'></div><div class='LineText'></div><div class='LineText'></div><div class='LineText'></div><div class='LineText'></div></div></div>";
    var menuVolta2 = "<div class='boxIcone'><div class='bar1'></div><div class='bar2'></div><div class='bar3'></div></div>";
    var menuVolta3 = "<div class='boxIcone'><div class='bar1'></div><div class='bar2'></div><div class='bar3'></div></div>";
    var menuFechar = "<div class='boxIcone'><div class='bar1'></div><div class='bar2'></div><div class='bar3'></div></div>";
    var playPausar = "<div class='boxIcone'><div class='bar1'></div><div class='bar2'></div><div class='bar3'></div></div>";

    switch (icon) {
        case "engrenagem":
            return engrenagem;
        case "perfil":
            return perfil;
            break;
        case "artigo":
            return artigo;
            break;
        case "menuVolta2":
            return menuVolta2;
            break;
        case "menuVolta3":
            return menuVolta3;
            break;
        case "menuFechar":
            return menuFechar;
            break;
        case "playPausar":
            return playPausar;
            break;
    }
}

function invertColor(hex) {
    if (hex.indexOf('#') === 0) {
        hex = hex.slice(1);
    }
    // convert 3-digit hex to 6-digits.
    if (hex.length === 3) {
        hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
    }
    if (hex.length !== 6) {
        throw new Error('Invalid HEX color.');
    }
    // invert color components
    var r = (255 - parseInt(hex.slice(0, 2), 16)).toString(16),
        g = (255 - parseInt(hex.slice(2, 4), 16)).toString(16),
        b = (255 - parseInt(hex.slice(4, 6), 16)).toString(16);
    // pad each with zeros and return
    return '#' + padZero(r) + padZero(g) + padZero(b);
}

function padZero(str, len) {
    len = len || 2;
    var zeros = new Array(len).join('0');
    return (zeros + str).slice(-len);
}

(function($) {
    $.fn.extend({
        animationsIcons: function(corBase, corActive, corActiveInvert) {
            if (corBase) {
                $(":root").css({ "--corBase": corBase });
            }
            if (corActive) {
                $(":root").css({ "--corActive": corActive });
            }
            if (corActiveInvert == true) {
                $(":root").css({ "--corActiveInvert": invertColor(corActive) });
            } else if (corActiveInvert != false) {
                $(":root").css({ "--corActiveInvert": corActiveInvert });
            }

            return this.each(function() {
                var icon = ($(this).text());
                $(this).html(createIcons(icon)).addClass(icon);
            });
        }
    });
})(jQuery);

$(".animated-icons").click(function() {
    $(".animated-icons").removeClass("active");
    $(this).toggleClass("active");
});
