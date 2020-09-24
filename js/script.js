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