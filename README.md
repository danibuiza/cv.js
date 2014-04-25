cv.js (in progress) (the objective is just to learn how to use jquery)
=====

dependencies:
-jquery, google-maps, jquery-ui-maps

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
- zoom in the maps
- zooming in and out in the map does not work, some africa region is shown in the background...
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
- slider menu



bugs:
iexplorer:
- internet explorer does not load correctly, everything is expanded on loading
- div with map is visible with a grey background at the loading
- maps are not shown
- load html does not work -> load will be deleted
- somehow works now, probably something to do with the cache
- hover() method jquery does not work properly on IE? cannot believe it...

chrome:
-load html does not work -> probably load cannot be used


