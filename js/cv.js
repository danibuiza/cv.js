/**
 * Created by dgutierrez-diez on 22.04.14.
 */

$(function()
{

    var addSection = function(title, showTitle, subTitles)
    {
        console.log(title);
        if (showTitle != false) {
            $(".cv").append("<div class=\"title\"> <p>" + title + "</p>");
        }

        console.log(subTitles);
        $.each(subTitles, function(index, value)
        {
            console.log(index + ":" + value);
            $(".cv").append("<div class=\"section\"><p><label class=\"subTitle\">" + value + "</label><input class=\"record\"></p></div>");
        });

        if (showTitle != false) {
            $(".cv").append("</div>");
        }
    };

    var addGenerateButton = function()
    {
        $(".cv").append("<div class=\"generate\"><p > Generate!!</p></div>");
    };

    var addCVTemplate = function()
    {

        addSection("Personal Data", true, ["name", "email", "url"]);

        addSection("Academics", true, ["university", "degree", "description"]);

        addSection("Professional Experience", true, ["company", "position", "date_from", "date_to"]);

        addSection("Professional Experience", false, ["company", "position", "date_from", "date_to"]);

        addSection("Languages", true, ["language", "level"]);

        addSection("Languages", false, ["language", "level"]);

        addSection("Languages", false, ["language", "level"]);

        addSection("IT", true, ["descritpion"]);

        addSection("Hobbies", true, ["description"]);

    };

    $(".menu :button").click(function()
    {
        addCVTemplate();

        addGenerateButton();

    });

    $(document).on("click", ".generate", function(event, data)
    {

        $(".cv").find(":input").each(function(index, value)
        {
            if ($(this).val() != "")
                content += ";" + $(this).val();

        });

        return JSON.stringify(content);

    });

})
;
