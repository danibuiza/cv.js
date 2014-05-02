/**
 * Created by dgutierrez-diez on 22.04.14.
 */


requirejs(['jquery', 'ui-map'],
    function(jquery, uimaps)
    {


        _mapsLoaded = jquery.Deferred()

        window.gmapsLoaded = function() {
            delete window.gmapsLoaded;
            _mapsLoaded.resolve();
        };

        require(['http://maps.googleapis.com/maps/api/js?sensor=true&callback=gmapsLoaded']);



        function GoogleMaps()
            {
            _mapsLoaded.done(_.bind(function() {
                this.init();
            }, this));

            }

        GoogleMaps.prototype.init = function()
        {

        };

        GoogleMaps.prototype.createMap = function(container)
        {
            _mapsLoaded.done(_.bind(function() {
                // create the maps object
            }, this));

        };

        GoogleMaps.prototype.search = function(searchText)
        {
            _mapsLoaded.done(_.bind(function() {
                // create the maps object
            }, this));

        };

        GoogleMaps.prototype.placeMarker = function(options)
        {
            _mapsLoaded.done(_.bind(function() {
                // create the maps object
            }, this));

        };

        var professional_experience = { "Interactive Data" : "IDMS", "Accenture" : "Accenture", "Indra Group" : "Indra", "MGM Group" : "MGM", "Hidrocantabrico, EDP Group" : "EDP" };

        jquery('.slider-arrow').click(function()
        {
            if (jquery(this).css("margin-right") == "200px") {
                jquery('.panel').animate({"margin-right" : '-=200'}, 700);
                jquery('.slider-arrow').animate({"margin-right" : '-=200'});
                jquery(".panel_links").hide(700);
            }
            else {
                jquery('.panel').animate({"margin-right" : '+=200'}, 700);
                jquery('.slider-arrow').animate({"margin-right" : '+=200'}, 700);
                jquery(".panel_links").show(700);
            }
        });

        jquery(".footer").toggle().appendTo(jquery(".menu_and_content"));

        jquery(document).find(".photo").click(function()
        {
            console.log("photo");

            jquery("#map_canvas").hide();
            jquery("#image_dani").toggle();
        });

        jquery("#image_dani").click(function()
        {
            console.log("image dani");
            jquery("#image_dani").toggle();
        });

        jquery(".title_1").click(function()
        {
            jquery(".title_2_content").toggle();
        });

        jquery(".title_2").click(function()
        {
            jquery(this).parent().find(".title_2_content").toggle();
        });

        jquery(".professional_experience").mouseout(function()
        {
            console.log(jquery(this).text());

            jquery("#summary_preview").hide();
        });

        jquery(".professional_experience").mouseover(function()
        {
            console.log(jquery(this).text());

            jquery("#summary_preview").show().html(professional_experience[jquery(this).text().substr(jquery(this).text().indexOf("- ") + 2)]);

            console.log(professional_experience[jquery(this).text().substr(jquery(this).text().indexOf("- ") + 2)]);

        });

        jquery("#text_preview").click(function()
        {
            console.log(jquery(this).text());

            var address = jquery(this).text();
            var geocoder = new google.maps.Geocoder();
            geocoder.geocode({ 'address' : address}, function(results, status)
            {

                if (status == google.maps.GeocoderStatus.OK) {
                    var latitude = results[0].geometry.location.lat();
                    var longitude = results[0].geometry.location.lng();

                    console.log("latitude "+ latitude);
                    yourStartLatLng = new google.maps.LatLng(latitude, longitude);
                    jquery('#map_canvas').gmap('destroy');

                    jquery('#map_canvas').gmap({'center' : yourStartLatLng, 'zoom' : 15});

                    jquery("#image_dani").hide();

                    jquery("#map_canvas").toggle().gmap('refresh');

                }
            });
        });

        jquery(".place").mouseout(function()
        {
            jquery("#map_canvas").hide();

        });

        jquery(".place").mouseover(function()
        {

            jquery("#text_preview").html("where is " + jquery(this).text() + "? click here!").addClass("content");
        });

        jquery(".date").mouseover(function()
        {
            console.log(jquery(this).text());
            jquery("#text_preview").html("what happened on " + jquery(this).text() + "?").addClass("content");

        });

        jquery(".sentence").hover(function()
        {
            console.log(jquery(this).text());
            jquery("#text_preview").html(jquery(this).text()).addClass("content");

        });

        jquery(".link").hover(function()
        {
            console.log(jquery(this).text());
            jquery("#text_preview").html("do you want to open " + jquery(this).text() + "?");

        });

        jquery(".email").hover(function()
        {
            console.log(jquery(this).text());
            jquery("#text_preview").html("do you want to send an email to " + jquery(this).text() + "?");

        });
    });
