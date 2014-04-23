/**
 * Created by dgutierrez-diez on 22.04.14.
 */


$(function()
{
    $(".footer").show().appendTo($(".menu_and_content"));

    $(".title_1").click(function()
    {
        $(".title_2_content").toggle();
    });

    $(".title_2").click(function()
    {
        $(this).parent().find(".title_2_content").toggle();
    });

    $(".place").hover(function()
    {
        console.log($(this).text());

        $(".preview").html("where is " + $(this).text() + "?").addClass("content");
        ;

    })

    $(".date").hover(function()
    {
        console.log($(this).text());

        $(".preview").html("what happened on " + $(this).text() + "?").addClass("content");
        ;

    })

    $(".sentence").hover(function()
    {
        console.log($(this).text());

        $(".preview").html($(this).text()).addClass("content");

    })

    $(".link").hover(function()
    {
        console.log($(this).text());

        $(".preview").html("do you want to open " + $(this).text() + "?");

    })

    $(".email").hover(function()
    {
        console.log($(this).text());

        $(".preview").html("do you want to send an email to " + $(this).text() + "?");

    })
});
