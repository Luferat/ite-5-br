loadScript("../../../common/scripts/swfobject.js", registerSWF);
//loadScript("../../../common/scripts/templates/slide/MultiBarSlide.js"); 

function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}


var STAGE_WIDTH = 470;
var STAGE_HEIGHT = 400;

function getData()
{
	var template_type = "MULTI_BAR";
	var commonTexts = [{compId:"ID_inst",
							x:4.95,
							y:379, 
							width:460,
							height:17,
							size:12,
							textAlign:"left"}];
	
	var slide_1_type = "TABLE";
	var slide_1_tables = [{compId:"ID_table_01",
							x:30,
							y:27}];				
	var slide_1_texts = [{compId:"ID_title",
							x:18,
							y:2,
							width:430,
							height:17,
                            size:16,
							textAlign:"center"}];								
	var slide_1_object = {templateType:slide_1_type,
							x:0,
							y:0,
							tables:slide_1_tables,
							texts:slide_1_texts};
	
	var slide_2_type = "TABLE";
	var slide_2_tables = [{compId:"ID_table_02",
							x:30,
							y:27}];				
	var slide_2_texts = [{compId:"ID_title",
							x:18,
							y:2,
							width:430,
							height:17,
                            size:16,
							textAlign:"center"}];								
	var slide_2_object = {templateType:slide_2_type,
							x:0,
							y:0,
							tables:slide_2_tables,
							texts:slide_2_texts};
	
	var slide_3_type = "TABLE";
	var slide_3_tables = [{compId:"ID_table_03",
							x:25,
							y:60}];				
	var slide_3_texts = [{compId:"ID_title",
							x:18,
							y:2,
							width:430,
							height:17,
                            size:16,
							textAlign:"center"}];								
	var slide_3_object = {templateType:slide_3_type,
							x:0,
							y:0,
							tables:slide_3_tables,
							texts:slide_3_texts};	
							
	var slide_4_type = "TABLE";
	var slide_4_tables = [{compId:"ID_table_04",
							x:30,
							y:27}];				
	var slide_4_texts = [{compId:"ID_title",
							x:18,
							y:2,
							width:430,
							height:17,
                            size:16,
							textAlign:"center"}];								
	var slide_4_object = {templateType:slide_4_type,
							x:0,
							y:0,
							tables:slide_4_tables,
							texts:slide_4_texts};			
											
	var slides = [slide_1_object,slide_2_object,slide_3_object,slide_4_object];
						
	return {templateType:template_type,
			textObject:commonTexts,
			slideObject:slides};
	
}

