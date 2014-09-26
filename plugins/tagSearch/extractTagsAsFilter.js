/*\created: 20140110061443770
creator: Danielo Rodriguez
modified: 20140415014136920
modifier: Danielo
tags: macros
title: $:/plugins/danielo/tagSearch/macros/extractTagsAsFilter.js
type: application/javascript
module-type: macro
\*/
(function(){

/*jslint node: true, browser: true */
/*global $tw: false */
"use strict";

/*
Information about this macro
This is developed to .
*/

exports.name = "extractTagsAsFilter";

exports.params = [
	{ name: "tiddlerName" }
];

/*
Run the macro
*/
exports.run = function(tiddlerName) {
   var tiddler=$tw.wiki.getTiddler(tiddlerName);
    var result="";
    if(tiddler && tiddler.fields.tags)
    {
        var tags=tiddler.fields.tags;
        for(var i=0; i<tags.length; i++)
            result+="tag["+tags[i]+"]";
    }

return result;
}

})();