var wordsBoxOne = ["gratuitos", "leves", "animados", "pensados"];
var wordsBoxTwo = ["interativo", "elegante", "chamativo", "animado"];

$(function() {
    $("#iconSearch").keyup(function() {
        var iconsearch = $(this).val();

        $("#iconsList li").show();
        $("#iconsList li").each(function() {
            if ($(this).text().toUpperCase().indexOf(iconsearch.toUpperCase()) < 0)
                $(this).hide();
        });
    });
});

$(document).ready(function() {
    var i1 = 0;
    var i2 = 0;

    setInterval(() => {
        let text = wordsBoxOne[i1].split("");
        let printText = "";

        for (let p = 0; p <= (text.length) - 1; p++) {
            setTimeout(() => {
                printText += text[p];
                $(".escrita01").text(printText);
            }, 75 * p);
        };

        if (i1 < (wordsBoxOne.length) - 1) {
            i1++;
        } else {
            i1 = 0;
        }
    }, 1500);

    setInterval(() => {
        let text = wordsBoxTwo[i2].split("");
        let printText = "";

        for (let p = 0; p <= (text.length) - 1; p++) {
            setTimeout(() => {
                printText += text[p];
                $(".escrita02").text(printText);
            }, 75 * p);
        };
        if (i2 < (wordsBoxTwo.length) - 1) {
            i2++;
        } else {
            i2 = 0;
        }
    }, 1500);
});


$(window).scroll(function() {
    $('.box-fixed').toggleClass('fixed row', $(this).scrollTop() > $('.banner').height());
});


function copyToClipboard(element) {
    var $temp = $("<textarea>");
    var brRegex = /<br\s*[\/]?>/gi;
    $("body").append($temp);
    $temp.val($(element).text().replace(brRegex, "\r\n")).select();
    document.execCommand("copy");
    $temp.remove();
    M.toast({ html: 'Copiado' })
}