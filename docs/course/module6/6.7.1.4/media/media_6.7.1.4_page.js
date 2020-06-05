loadScript("../../../common/scripts/swfobject.js", registerSWF);
loadScript("../../../common/scripts/templates/slide/DragDropSlide.js");


function registerSWF(){
    swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}

var STAGE_WIDTH = 470;
var STAGE_HEIGHT = 400;

function getData()
{
    var template_type = "DRAG_DROP";
    var buttonStyle = {normalSkinImage:"../../../common/images/drag_normal.png",
        overSkinImage:"../../../common/images/drop_normal.png",
        dropNormalSkinImage:"../../../common/images/drop_normal.png",
        normalTextStyle:'#FFFFFF',
        overTextStyle:'#006699',
        cornorRadius:5,
        selected:0};

    var buttons = [{compId:"ID_ds_a1",
        x:8,
        y:260,
        width:130,
        height:30,
	tag:2,
        size:9,
        textAlign:"center"},
		{compId:"ID_ds_a2",
        x:8,
        y:296,
        width:130,
        height:30,
	tag:2,
        size:9,
        textAlign:"center"},
		{compId:"ID_ds_t1",
        x:153,
        y:260,
        width:130,
        height:30,
	tag:4,
        size:10,
        textAlign:"center"},
		{compId:"ID_ds_n1",
        x:153,
        y:296,
        width:130,
        height:30,
        size:10,
	tag:3,
        textAlign:"center"},
		{compId:"ID_ds_n2",
        x:153,
        y:331,
        width:130,
        height:30,
        size:10,
	tag:3,
        textAlign:"center"},
	{compId:"ID_ds_i1",
        x:298.05,
        y:260,
	tag:1,
        width:129.95,
        height:30,
        size:10,
        textAlign:"center"},
		{compId:"ID_ds_a3",
        x:298,
        y:296,
        width:129.95,
	tag:2,
        height:30,
        size:10,
        textAlign:"center"}
			];
    var dropBox = [{compId:"ID_s2_drop01",
            x:54.05,
            y:67.45,
            width:130,
            height:30,
            size:10,
            answer:1,           
        textAlign:"center"},
        {compId:"ID_s2_drop02",
            x:54.05,
            y:177.45,
            width:130,
            height:30,
            size:10,
            answer:3,
            textAlign:"center"},
        {compId:"ID_s2_drop03",
            x:54.05,
            y:210.45,
            width:130,
            height:30,
            size:10,
            answer:3,
            textAlign:"center"},
        {compId:"ID_s2_drop04",
            x:252,
            y:67.45,
            width:130,
            height:30,
            size:10,
            answer:2,
            textAlign:"center"},
        {compId:"ID_s2_drop05",
            x:252,
            y:101.45,
            width:130,
            height:30,
            size:10,
            answer:2,
            textAlign:"center"},
			{compId:"ID_s2_drop06",
            x:252,
            y:136.45,
            width:130,
            height:30,
            size:10,
            answer:2,
            textAlign:"center"},
			{compId:"ID_s2_drop06",
            x:252,
            y:210.45,
            width:130,
            height:30,
            size:10,
            answer:4,
            textAlign:"center"}
			];

    var buttonObject = {style:buttonStyle,
        buttons:buttons};

    var commonTexts = [];
    var slide_2_texts = [{compId:"ID_inst",
							x:5,
							y:379, 
							width:460,
							height:17,
							size:12,
							textAlign:"left"},
			{compId:"ID_s2_title",
            x:3,
            y:2,
            width:430,
            height:17,
            size:16,
            textAlign:"center"},
		{compId:"ID_header01",
        x:63,
        y:48.5,
        width:104,
        height:17,
        size:12,
        textAlign:"center"},
		{compId:"ID_header02",
        x:265,
        y:48.5,
        width:104,
        height:17,
        size:12,
        textAlign:"center"},
		{compId:"ID_header03",
        x:63,
        y:158.5,
        width:104,
        height:17,
        size:12,
        textAlign:"center"},
		{compId:"ID_header04",
        x:265,
        y:191.5,
        width:104,
        height:17,
        size:12,
        textAlign:"center"}];
    var dropObject = {style:buttonStyle,dropBox:dropBox};

    var slide_2_images = [{compId:"ID_image01",
        name:"../../../common/images/dd_bg.png",
        x:7,
        y:41,
        width:425,
        height:210,
        size:12,
        textAlign:"left"},
	{compId:"ID_image02",
        name:"../../../common/images/question_icon.png",
        x:35,
        y:340,
        width:28,
        height:39,
	    clickable:1,
        size:12,
        textAlign:"left"}];
    var submit_buttons = [{compId:"ID_CHECK",
        x:357.05,
        y:333,
        width:59.95,
        height:21,
        size:10,
        normalSkinImage:"../../../common/images/btn_normal.png",
        textAlign:"center"},
        {compId:"ID_RESET",
            x:357,
            y:362,
            width:60,
            height:21,
            size:10,
            normalSkinImage:"../../../common/images/btn_normal.png",
            textAlign:"center"}
    ];
    var feedbackObj = [{compId:"ID_FEEDBACK",
        x:100,
        y:134,
        width:172,
        height:23,
        size:12,
        image:"../../../common/images/feedback.png",
        textAlign:"center"}];
     var helpObj = [{compId:"ID_HELP",
        x:0,
        y:0,
        width:572,
        height:399,
        size:12,
        image:"../../../common/images/instruction_bg.png",
        textAlign:"center"},
	{compId:"ID_CONTINUE",
        x:160,
        y:340,
        width:272,
        height:23,
        size:12,
        image:"../../../common/images/btn_normal.png",
        textAlign:"center"}
	];
    var instobj = {ansType:"many-one", helpObj:helpObj};
    
    return {templateType:template_type,
        textObject:commonTexts,
        buttonObject:buttonObject,
        slideObject:slide_2_texts,
        slideImages:slide_2_images,
        dropObject:dropObject,
        submitObject:submit_buttons,
        feedbackObj:feedbackObj,
		instobj:instobj
    };

}


