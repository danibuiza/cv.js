cv.js (in progress) (the objective is just to learn how to use jquery)
=====

dependencies:
-jquery, google-maps, jquery-ui-maps, requirejs

info:
-Jquery based tool to generate cvs


demo (in ie works not so good...I am working on that)
- http://danibuiza.github.io/cv.js/cv/

main use cases and data model features:
- create a personal cv
- cv contains sections
- section contains attributes
- all these can generate a json or an html with the content of a cv
- search engine to retrieve cvs by passed parameters or labels
- possibility to search by any kind of parameter or text -> return meta data with information about the content searched

- extras to play with maps and some jquery effects

still todo:
DONE - zoom in the maps
- add marker with some info in the point center
- rebrush styles and structure
- add pdf to download that slides
- email? links?
- experience tests?
- university tests?
- currently it is completely beta
- generate json and html properly
- css to generated content
- store cv in memory or db
- retrieve list of cvs
- search engine
- put more info
DONE more or less - slider menu



bugs:
all:
- minimize browser and things are ugly
- elements loose control when minimizing
- zooming in and out in the map does not work, some africa region is shown in the background...


iexplorer:
- minimize browser and things are ugly
DONE - internet explorer does not load correctly, everything is expanded on loading
DONE - div with map is visible with a grey background at the loading
DONE - maps are not shown
DONE - load html does not work -> load will be deleted
DONE - somehow works now, probably something to do with the cache
DONE - hover() method jquery does not work properly on IE? cannot believe it...-> probably the problem is just that someths were cached

chrome:
DONE -load html does not work -> probably load cannot be used in chrome locally



hacks/requirejs:

in order to load google maps properly something like this has to be done in the file where the maps are used:

require(['http://maps.googleapis.com/maps/api/js?sensor=true&callback=gmapsLoaded']);

gmapsLoaded should be initialized using jquery.Deferred()

couple of changes in the ui map library in order to make it work with require.js:
    -google.maps.MVCObject not recognized, so commented
    - passed google as dependency via require
