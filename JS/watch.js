$(document).ready(function() {
    $("#myBtn").click(function() {
        var display = $("#more").css("display");
        if (display == "none") {
            $("#myBtn").html("عرض عناصر اقل");
            $("#dots").css({ "display": "none" });
            $("#more").css({ "display": "inline" });
        }
        else{
            $("#myBtn").html("عرض المزيد");
            $("#dots").css({ "display": "inline" });
            $("#more").css({ "display": "none" });

        }
    });

    $(".reply").click(function() {
        $(this).parents("div.row").next("div.card").toggle();
    });
});