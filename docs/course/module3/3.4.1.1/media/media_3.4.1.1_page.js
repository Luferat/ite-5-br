//loadScript("../../../common/scripts/templates/slide/ImageSlideNew.js");
function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}

var STAGE_WIDTH = 470;
var STAGE_HEIGHT = 400;

function getData()
{
    var template_type = "IMAGE";

    var slide_images = [{name:"3_4_1_1.jpg",
        x:65.05,
        y:20,
        width:340,
        height:340,
        type:"STD"}];

    var slide_texts = [];

    var slide_object = {images:slide_images,
        texts:slide_texts};

    return {templateType:template_type,
        slideObject:slide_object};

}

loadScript("../../../common/scripts/swfobject.js", registerSWF);