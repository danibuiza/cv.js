/**
 * Created by dgutierrez-diez on 22.04.14.
 */


$(function()
{

    var professional_experience = { "Interactive Data" : "IDMS", "Accenture" : "Accenture", "Indra Group" : "Indra", "MGM Group" : "MGM", "Hidrocantabrico, EDP Group" : "EDP" };

    $('.slider-arrow').click(function()
    {
        if ($(this).css("margin-right") == "200px") {
            $('.panel').animate({"margin-right" : '-=200'}, 700);
            $('.slider-arrow').animate({"margin-right" : '-=200'});
            $(".panel_links").hide(700);
        }
        else {
            $('.panel').animate({"margin-right" : '+=200'}, 700);
            $('.slider-arrow').animate({"margin-right" : '+=200'}, 700);
            $(".panel_links").show(700);
        }
    });

    $(".footer").toggle().appendTo($(".menu_and_content"));

    $(document).find(".photo").click(function()
    {
        console.log("photo");

        $("#map_canvas").hide();
        $("#image_dani").toggle();
    });

    $("#image_dani").click(function(){
       console.log("image dani");
        $("#image_dani").toggle();
    });

    $(".title_1").click(function()
    {
        $(".title_2_content").toggle();
    });

    $(".title_2").click(function()
    {
        $(this).parent().find(".title_2_content").toggle();
    });

    $(".professional_experience").mouseout(function()
    {
        console.log($(this).text());

        $("#summary_preview").hide();
    });

    $(".professional_experience").mouseover(function()
    {
        console.log($(this).text());

        $("#summary_preview").show().html(professional_experience[$(this).text().substr($(this).text().indexOf("- ") + 2)]);

        console.log(professional_experience[$(this).text().substr($(this).text().indexOf("- ") + 2)]);

    });

    $("#text_preview").click(function()
    {
        console.log($(this).text());

        var address = $(this).text();
        var geocoder = new google.maps.Geocoder();
        geocoder.geocode({ 'address' : address}, function(results, status)
        {

            if (status == google.maps.GeocoderStatus.OK) {
                var latitude = results[0].geometry.location.lat();
                var longitude = results[0].geometry.location.lng();
                yourStartLatLng = new google.maps.LatLng(latitude, longitude);
                $('#map_canvas').gmap('destroy');

                $('#map_canvas').gmap({'center' : yourStartLatLng, 'zoom' : 15});

                $("#image_dani").hide();

                $("#map_canvas").toggle().gmap('refresh');

            }
        });
    });

    $(".place").mouseout(function()
    {
        $("#map_canvas").hide();

    });

    $(".place").mouseover(function()
    {

        $("#text_preview").html("where is " + $(this).text() + "? click here!").addClass("content");
    });

    $(".date").mouseover(function()
    {
        console.log($(this).text());
        $("#text_preview").html("what happened on " + $(this).text() + "?").addClass("content");

    });

    $(".sentence").hover(function()
    {
        console.log($(this).text());
        $("#text_preview").html($(this).text()).addClass("content");

    });

    $(".link").hover(function()
    {
        console.log($(this).text());
        $("#text_preview").html("do you want to open " + $(this).text() + "?");

    });

    $(".email").hover(function()
    {
        console.log($(this).text());
        $("#text_preview").html("do you want to send an email to " + $(this).text() + "?");

    });
});
