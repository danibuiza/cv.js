/**
 * Created by dgutierrez-diez on 22.04.14.
 */

$(function()
{

    var addSection = function(title, showTitle, subTitles)
    {
        section = "";
        if (showTitle != false) {
            section += "<div id=\"title\" class=\"title\"><p class=\"header\">" + title + "</p>";
            $.each(subTitles, function(index, value)
            {
                section += "<div class = \"section\"><p><label class=\"subTitle\">" + value + "</label><input class=\"record\"></p></div>";
            });
            section += "</div>";

            $(".cv").append(section);
        }
        else{
            $.each(subTitles, function(index, value)
            {
                section += "<div class = \"section\"><p><label class=\"subTitle\">" + value + "</label><input class=\"record\"></p></div>";
            });
            $(section).appendTo(".cv").find("#"+title);
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

        addSection("IT", true, ["description"]);

        addSection("Hobbies", true, ["description"]);

    };

    $(".menu :button").click(function()
    {
        addCVTemplate();

        addGenerateButton();

    });

    $(document).on("click", ".generate", function(event, data)
    {
        jsonContent = {};
        htmlContent = "";
        j = 0;

        $(".cv").find(".title").each(function(index, value)
        {
            currentJsonContent = new Object();

            $(this).children(".header").each(function(index2, value2)
            {
                htmlContent += "<p>" + value2.innerHTML + "</p>";

                currentJsonContent.title = value2.innerHTML;
            });

            i = 0;
            currentJsonContent.records = {};
            $(this).find(".subTitle").each(function(index2, value2)
            {

                label = value2.innerHTML;
                recordValue = $(this).next().val();

                htmlContent += "<p>" + label + " " + recordValue + "</p>";

                var record = new Object();
                record.label = label;
                record.recordValue = recordValue;
                currentJsonContent.records[i++] = record;
            });

            jsonContent[j++] = currentJsonContent;
        });

        console.log(htmlContent);

        console.log(JSON.stringify(jsonContent));

    });

})
;
