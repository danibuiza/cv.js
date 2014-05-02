/**
 * Created by dgutierrez-diez on 02.05.14.
 */

requirejs.config({
    baseUrl : '../js',
    paths: {
        'jquery': 'https://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min',
        'jquery-ui': 'https://code.jquery.com/ui/1.10.4/jquery-ui',
        'google': 'http://maps.googleapis.com/maps/api/js?sensor=true',
        'ui-map': 'jquery.ui.map'
    },
    "shim": {
        "ui-map": ["jquery"],
        "ui-map": ["google"]
    }
});

requirejs(["mycv"]);
