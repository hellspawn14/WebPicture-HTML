$('#paletteName').text("ArchimateModel");
$('#tools').append('<h5 id="HEAD_64beebb7" class="marketing-header-canvas" style="text-align:left;color:white; background-color:#181818;border-top:1px solid #808080"><i class="fa fa-bars" style="margin-left:5px"></i> relationsGroup</h5><div id="GROUP_64beebb7" style="background-color:#F0F0F0; overflow-y: auto; height:70px"></div>');
Tipped.create('#HEAD_64beebb7', 'Connectors', {
    position: 'right'
});
var GRAPH_64beebb7 = new joint.dia.Graph;
var PAPER_64beebb7 = new joint.dia.Paper({
    el: $('#GROUP_64beebb7'),
    gridSize: 10,
    height: $('#GROUP_64beebb7').height(),
    width: $('#tools').width(),
    gridSize: 1,
    model: GRAPH_64beebb7,
    interactive: false
});
var ICON_7813cb11 = new joint.shapes.basic.Image({
    position: {
        x: 10,
        y: 10
    },
    size: {
        width: 50,
        height: 50
    },
    attrs: {
        text: {
            text: 'Group',
            'ref-y': 0.5,
            'ref-x': 150
        },
        image: {
            type: 'Group',
            'xlink:href': 'file:///Users/hellspawn/Documents/Uniandes/Tesis/Repositorios/WebPicture-Java/co.edu.uniandes.picture.webpicture/WebContent/Editors/8e8745eb-bb31-423d-80f4-1ae5e15fba3d/Images/Group.gif',
            width: 100,
            height: 100,
        },
    },
});
GRAPH_64beebb7.addCell(ICON_7813cb11);
$('#tools').append('<h5 id="HEAD_bcec031" class="marketing-header-canvas" style="text-align:left;color:white; background-color:#181818;border-top:1px solid #808080"><i class="fa fa-bars" style="margin-left:5px"></i> AppPalette</h5><div id="GROUP_bcec031" style="background-color:#F0F0F0; overflow-y: auto; height:490px"></div>');
Tipped.create('#HEAD_bcec031', 'Application Layer', {
    position: 'right'
});
var GRAPH_bcec031 = new joint.dia.Graph;
var PAPER_bcec031 = new joint.dia.Paper({
    el: $('#GROUP_bcec031'),
    gridSize: 10,
    height: $('#GROUP_bcec031').height(),
    width: $('#tools').width(),
    gridSize: 1,
    model: GRAPH_bcec031,
    interactive: false
});
var ICON_21005f6c = new joint.shapes.basic.Image({
    position: {
        x: 10,
        y: 10
    },
    size: {
        width: 50,
        height: 50
    },
    attrs: {
        text: {
            text: 'ApplicationComponent',
            'ref-y': 0.5,
            'ref-x': 150
        },
        image: {
            type: 'ApplicationComponent',
            'xlink:href': 'file:///Users/hellspawn/Documents/Uniandes/Tesis/Repositorios/WebPicture-Java/co.edu.uniandes.picture.webpicture/WebContent/Editors/8e8745eb-bb31-423d-80f4-1ae5e15fba3d/Images/ApplicationComponentIcon.gif',
            width: 100,
            height: 100,
        },
    },
});
GRAPH_bcec031.addCell(ICON_21005f6c);
var ICON_32f0fba8 = new joint.shapes.basic.Image({
    position: {
        x: 10,
        y: 70
    },
    size: {
        width: 50,
        height: 50
    },
    attrs: {
        text: {
            text: 'ApplicationCollaboration',
            'ref-y': 0.5,
            'ref-x': 150
        },
        image: {
            type: 'ApplicationCollaboration',
            'xlink:href': 'file:///Users/hellspawn/Documents/Uniandes/Tesis/Repositorios/WebPicture-Java/co.edu.uniandes.picture.webpicture/WebContent/Editors/8e8745eb-bb31-423d-80f4-1ae5e15fba3d/Images/ApplicationCollaborationIcon.gif',
            width: 100,
            height: 100,
        },
    },
});
GRAPH_bcec031.addCell(ICON_32f0fba8);
var ICON_545de5a4 = new joint.shapes.basic.Image({
    position: {
        x: 10,
        y: 130
    },
    size: {
        width: 50,
        height: 50
    },
    attrs: {
        text: {
            text: 'ApplicationInterface',
            'ref-y': 0.5,
            'ref-x': 150
        },
        image: {
            type: 'ApplicationInterface',
            'xlink:href': 'file:///Users/hellspawn/Documents/Uniandes/Tesis/Repositorios/WebPicture-Java/co.edu.uniandes.picture.webpicture/WebContent/Editors/8e8745eb-bb31-423d-80f4-1ae5e15fba3d/Images/ApplicationInterfaceIcon.gif',
            width: 100,
            height: 100,
        },
    },
});
GRAPH_bcec031.addCell(ICON_545de5a4);
var ICON_29ef6856 = new joint.shapes.basic.Image({
    position: {
        x: 10,
        y: 190
    },
    size: {
        width: 50,
        height: 50
    },
    attrs: {
        text: {
            text: 'DataObject',
            'ref-y': 0.5,
            'ref-x': 150
        },
        image: {
            type: 'DataObject',
            'xlink:href': 'file:///Users/hellspawn/Documents/Uniandes/Tesis/Repositorios/WebPicture-Java/co.edu.uniandes.picture.webpicture/WebContent/Editors/8e8745eb-bb31-423d-80f4-1ae5e15fba3d/Images/DataObjectIcon.gif',
            width: 100,
            height: 100,
        },
    },
});
GRAPH_bcec031.addCell(ICON_29ef6856);
var ICON_ab7a938 = new joint.shapes.basic.Image({
    position: {
        x: 10,
        y: 250
    },
    size: {
        width: 50,
        height: 50
    },
    attrs: {
        text: {
            text: 'ApplicationFunction',
            'ref-y': 0.5,
            'ref-x': 150
        },
        image: {
            type: 'ApplicationFunction',
            'xlink:href': 'file:///Users/hellspawn/Documents/Uniandes/Tesis/Repositorios/WebPicture-Java/co.edu.uniandes.picture.webpicture/WebContent/Editors/8e8745eb-bb31-423d-80f4-1ae5e15fba3d/Images/ApplicationFunctionIcon.gif',
            width: 100,
            height: 100,
        },
    },
});
GRAPH_bcec031.addCell(ICON_ab7a938);
var ICON_3faf2e7d = new joint.shapes.basic.Image({
    position: {
        x: 10,
        y: 310
    },
    size: {
        width: 50,
        height: 50
    },
    attrs: {
        text: {
            text: 'ApplicationInteraction',
            'ref-y': 0.5,
            'ref-x': 150
        },
        image: {
            type: 'ApplicationInteraction',
            'xlink:href': 'file:///Users/hellspawn/Documents/Uniandes/Tesis/Repositorios/WebPicture-Java/co.edu.uniandes.picture.webpicture/WebContent/Editors/8e8745eb-bb31-423d-80f4-1ae5e15fba3d/Images/ApplicationInteractionIcon.gif',
            width: 100,
            height: 100,
        },
    },
});
GRAPH_bcec031.addCell(ICON_3faf2e7d);
var ICON_4648ce9 = new joint.shapes.basic.Image({
    position: {
        x: 10,
        y: 370
    },
    size: {
        width: 50,
        height: 50
    },
    attrs: {
        text: {
            text: 'ApplicationService',
            'ref-y': 0.5,
            'ref-x': 150
        },
        image: {
            type: 'ApplicationService',
            'xlink:href': 'file:///Users/hellspawn/Documents/Uniandes/Tesis/Repositorios/WebPicture-Java/co.edu.uniandes.picture.webpicture/WebContent/Editors/8e8745eb-bb31-423d-80f4-1ae5e15fba3d/Images/ApplicationServiceIcon.gif',
            width: 100,
            height: 100,
        },
    },
});
GRAPH_bcec031.addCell(ICON_4648ce9);
$('#tools').append('<h5 id="HEAD_569bf9eb" class="marketing-header-canvas" style="text-align:left;color:white; background-color:#181818;border-top:1px solid #808080"><i class="fa fa-bars" style="margin-left:5px"></i> ArchimatePalette</h5><div id="GROUP_569bf9eb" style="background-color:#F0F0F0; overflow-y: auto; height:1050px"></div>');
Tipped.create('#HEAD_569bf9eb', 'Archimate Business Palette', {
    position: 'right'
});
var GRAPH_569bf9eb = new joint.dia.Graph;
var PAPER_569bf9eb = new joint.dia.Paper({
    el: $('#GROUP_569bf9eb'),
    gridSize: 10,
    height: $('#GROUP_569bf9eb').height(),
    width: $('#tools').width(),
    gridSize: 1,
    model: GRAPH_569bf9eb,
    interactive: false
});
var ICON_61526469 = new joint.shapes.basic.Image({
    position: {
        x: 10,
        y: 10
    },
    size: {
        width: 50,
        height: 50
    },
    attrs: {
        text: {
            text: 'Product',
            'ref-y': 0.5,
            'ref-x': 150
        },
        image: {
            type: 'Product',
            'xlink:href': 'file:///Users/hellspawn/Documents/Uniandes/Tesis/Repositorios/WebPicture-Java/co.edu.uniandes.picture.webpicture/WebContent/Editors/8e8745eb-bb31-423d-80f4-1ae5e15fba3d/Images/ProductIcon.gif',
            width: 100,
            height: 100,
        },
    },
});
GRAPH_569bf9eb.addCell(ICON_61526469);
var ICON_274872f8 = new joint.shapes.basic.Image({
    position: {
        x: 10,
        y: 70
    },
    size: {
        width: 50,
        height: 50
    },
    attrs: {
        text: {
            text: 'Contract',
            'ref-y': 0.5,
            'ref-x': 150
        },
        image: {
            type: 'Contract',
            'xlink:href': 'file:///Users/hellspawn/Documents/Uniandes/Tesis/Repositorios/WebPicture-Java/co.edu.uniandes.picture.webpicture/WebContent/Editors/8e8745eb-bb31-423d-80f4-1ae5e15fba3d/Images/ContractIcon.gif',
            width: 100,
            height: 100,
        },
    },
});
GRAPH_569bf9eb.addCell(ICON_274872f8);
var ICON_76ba13c = new joint.shapes.basic.Image({
    position: {
        x: 10,
        y: 130
    },
    size: {
        width: 50,
        height: 50
    },
    attrs: {
        text: {
            text: 'Meaning',
            'ref-y': 0.5,
            'ref-x': 150
        },
        image: {
            type: 'Meaning',
            'xlink:href': 'file:///Users/hellspawn/Documents/Uniandes/Tesis/Repositorios/WebPicture-Java/co.edu.uniandes.picture.webpicture/WebContent/Editors/8e8745eb-bb31-423d-80f4-1ae5e15fba3d/Images/MeaningIcon.gif',
            width: 100,
            height: 100,
        },
    },
});
GRAPH_569bf9eb.addCell(ICON_76ba13c);
var ICON_eb6449b = new joint.shapes.basic.Image({
    position: {
        x: 10,
        y: 190
    },
    size: {
        width: 50,
        height: 50
    },
    attrs: {
        text: {
            text: 'Representation',
            'ref-y': 0.5,
            'ref-x': 150
        },
        image: {
            type: 'Representation',
            'xlink:href': 'file:///Users/hellspawn/Documents/Uniandes/Tesis/Repositorios/WebPicture-Java/co.edu.uniandes.picture.webpicture/WebContent/Editors/8e8745eb-bb31-423d-80f4-1ae5e15fba3d/Images/RepresentationIcon.gif',
            width: 100,
            height: 100,
        },
    },
});
GRAPH_569bf9eb.addCell(ICON_eb6449b);
var ICON_7c351808 = new joint.shapes.basic.Image({
    position: {
        x: 10,
        y: 250
    },
    size: {
        width: 50,
        height: 50
    },
    attrs: {
        text: {
            text: 'BusinessObject',
            'ref-y': 0.5,
            'ref-x': 150
        },
        image: {
            type: 'BusinessObject',
            'xlink:href': 'file:///Users/hellspawn/Documents/Uniandes/Tesis/Repositorios/WebPicture-Java/co.edu.uniandes.picture.webpicture/WebContent/Editors/8e8745eb-bb31-423d-80f4-1ae5e15fba3d/Images/BusinessObjectIcon.gif',
            width: 100,
            height: 100,
        },
    },
});
GRAPH_569bf9eb.addCell(ICON_7c351808);
var ICON_180e6ac4 = new joint.shapes.basic.Image({
    position: {
        x: 10,
        y: 310
    },
    size: {
        width: 50,
        height: 50
    },
    attrs: {
        text: {
            text: 'BusinessService',
            'ref-y': 0.5,
            'ref-x': 150
        },
        image: {
            type: 'BusinessService',
            'xlink:href': 'file:///Users/hellspawn/Documents/Uniandes/Tesis/Repositorios/WebPicture-Java/co.edu.uniandes.picture.webpicture/WebContent/Editors/8e8745eb-bb31-423d-80f4-1ae5e15fba3d/Images/BusinessServiceIcon.gif',
            width: 100,
            height: 100,
        },
    },
});
GRAPH_569bf9eb.addCell(ICON_180e6ac4);
var ICON_42b64ab8 = new joint.shapes.basic.Image({
    position: {
        x: 10,
        y: 370
    },
    size: {
        width: 50,
        height: 50
    },
    attrs: {
        text: {
            text: 'BusinessProcess',
            'ref-y': 0.5,
            'ref-x': 150
        },
        image: {
            type: 'BusinessProcess',
            'xlink:href': 'file:///Users/hellspawn/Documents/Uniandes/Tesis/Repositorios/WebPicture-Java/co.edu.uniandes.picture.webpicture/WebContent/Editors/8e8745eb-bb31-423d-80f4-1ae5e15fba3d/Images/BusinessProcessIcon.gif',
            width: 100,
            height: 100,
        },
    },
});
GRAPH_569bf9eb.addCell(ICON_42b64ab8);
var ICON_7e985ce9 = new joint.shapes.basic.Image({
    position: {
        x: 10,
        y: 430
    },
    size: {
        width: 50,
        height: 50
    },
    attrs: {
        text: {
            text: 'BusinessFunction',
            'ref-y': 0.5,
            'ref-x': 150
        },
        image: {
            type: 'BusinessFunction',
            'xlink:href': 'file:///Users/hellspawn/Documents/Uniandes/Tesis/Repositorios/WebPicture-Java/co.edu.uniandes.picture.webpicture/WebContent/Editors/8e8745eb-bb31-423d-80f4-1ae5e15fba3d/Images/BusinessFunctionIcon.gif',
            width: 100,
            height: 100,
        },
    },
});
GRAPH_569bf9eb.addCell(ICON_7e985ce9);
var ICON_2a39fe6a = new joint.shapes.basic.Image({
    position: {
        x: 10,
        y: 490
    },
    size: {
        width: 50,
        height: 50
    },
    attrs: {
        text: {
            text: 'BusinessInteraction',
            'ref-y': 0.5,
            'ref-x': 150
        },
        image: {
            type: 'BusinessInteraction',
            'xlink:href': 'file:///Users/hellspawn/Documents/Uniandes/Tesis/Repositorios/WebPicture-Java/co.edu.uniandes.picture.webpicture/WebContent/Editors/8e8745eb-bb31-423d-80f4-1ae5e15fba3d/Images/BusinessInteractionIcon.gif',
            width: 100,
            height: 100,
        },
    },
});
GRAPH_569bf9eb.addCell(ICON_2a39fe6a);
var ICON_410ae9a3 = new joint.shapes.basic.Image({
    position: {
        x: 10,
        y: 550
    },
    size: {
        width: 50,
        height: 50
    },
    attrs: {
        text: {
            text: 'BusinessEvent',
            'ref-y': 0.5,
            'ref-x': 150
        },
        image: {
            type: 'BusinessEvent',
            'xlink:href': 'file:///Users/hellspawn/Documents/Uniandes/Tesis/Repositorios/WebPicture-Java/co.edu.uniandes.picture.webpicture/WebContent/Editors/8e8745eb-bb31-423d-80f4-1ae5e15fba3d/Images/BusinessEventIcon.gif',
            width: 100,
            height: 100,
        },
    },
});
GRAPH_569bf9eb.addCell(ICON_410ae9a3);
var ICON_319988b0 = new joint.shapes.basic.Image({
    position: {
        x: 10,
        y: 610
    },
    size: {
        width: 50,
        height: 50
    },
    attrs: {
        text: {
            text: 'Location',
            'ref-y': 0.5,
            'ref-x': 150
        },
        image: {
            type: 'Location',
            'xlink:href': 'file:///Users/hellspawn/Documents/Uniandes/Tesis/Repositorios/WebPicture-Java/co.edu.uniandes.picture.webpicture/WebContent/Editors/8e8745eb-bb31-423d-80f4-1ae5e15fba3d/Images/LocationIcon.gif',
            width: 100,
            height: 100,
        },
    },
});
GRAPH_569bf9eb.addCell(ICON_319988b0);
var ICON_d5ae57e = new joint.shapes.basic.Image({
    position: {
        x: 10,
        y: 670
    },
    size: {
        width: 50,
        height: 50
    },
    attrs: {
        text: {
            text: 'BusinessInterface',
            'ref-y': 0.5,
            'ref-x': 150
        },
        image: {
            type: 'BusinessInterface',
            'xlink:href': 'file:///Users/hellspawn/Documents/Uniandes/Tesis/Repositorios/WebPicture-Java/co.edu.uniandes.picture.webpicture/WebContent/Editors/8e8745eb-bb31-423d-80f4-1ae5e15fba3d/Images/BusinessInterfaceIcon.gif',
            width: 100,
            height: 100,
        },
    },
});
GRAPH_569bf9eb.addCell(ICON_d5ae57e);
var ICON_68759011 = new joint.shapes.basic.Image({
    position: {
        x: 10,
        y: 730
    },
    size: {
        width: 50,
        height: 50
    },
    attrs: {
        text: {
            text: 'BusinessRole',
            'ref-y': 0.5,
            'ref-x': 150
        },
        image: {
            type: 'BusinessRole',
            'xlink:href': 'file:///Users/hellspawn/Documents/Uniandes/Tesis/Repositorios/WebPicture-Java/co.edu.uniandes.picture.webpicture/WebContent/Editors/8e8745eb-bb31-423d-80f4-1ae5e15fba3d/Images/BusinessRoleIcon.gif',
            width: 100,
            height: 100,
        },
    },
});
GRAPH_569bf9eb.addCell(ICON_68759011);
var ICON_7e242b4d = new joint.shapes.basic.Image({
    position: {
        x: 10,
        y: 790
    },
    size: {
        width: 50,
        height: 50
    },
    attrs: {
        text: {
            text: 'BusinessCollaboration',
            'ref-y': 0.5,
            'ref-x': 150
        },
        image: {
            type: 'BusinessCollaboration',
            'xlink:href': 'file:///Users/hellspawn/Documents/Uniandes/Tesis/Repositorios/WebPicture-Java/co.edu.uniandes.picture.webpicture/WebContent/Editors/8e8745eb-bb31-423d-80f4-1ae5e15fba3d/Images/BusinessCollaborationIcon.gif',
            width: 100,
            height: 100,
        },
    },
});
GRAPH_569bf9eb.addCell(ICON_7e242b4d);
var ICON_305f031 = new joint.shapes.basic.Image({
    position: {
        x: 10,
        y: 850
    },
    size: {
        width: 50,
        height: 50
    },
    attrs: {
        text: {
            text: 'BusinessActor',
            'ref-y': 0.5,
            'ref-x': 150
        },
        image: {
            type: 'BusinessActor',
            'xlink:href': 'file:///Users/hellspawn/Documents/Uniandes/Tesis/Repositorios/WebPicture-Java/co.edu.uniandes.picture.webpicture/WebContent/Editors/8e8745eb-bb31-423d-80f4-1ae5e15fba3d/Images/actor.gif',
            width: 100,
            height: 100,
        },
    },
});
GRAPH_569bf9eb.addCell(ICON_305f031);
$('#tools').append('<h5 id="HEAD_592e843a" class="marketing-header-canvas" style="text-align:left;color:white; background-color:#181818;border-top:1px solid #808080"><i class="fa fa-bars" style="margin-left:5px"></i> ElementsPalette</h5><div id="GROUP_592e843a" style="background-color:#F0F0F0; overflow-y: auto; height:560px"></div>');
Tipped.create('#HEAD_592e843a', 'Technology Elements', {
    position: 'right'
});
var GRAPH_592e843a = new joint.dia.Graph;
var PAPER_592e843a = new joint.dia.Paper({
    el: $('#GROUP_592e843a'),
    gridSize: 10,
    height: $('#GROUP_592e843a').height(),
    width: $('#tools').width(),
    gridSize: 1,
    model: GRAPH_592e843a,
    interactive: false
});
var ICON_1d1f7216 = new joint.shapes.basic.Image({
    position: {
        x: 10,
        y: 10
    },
    size: {
        width: 50,
        height: 50
    },
    attrs: {
        text: {
            text: 'Node',
            'ref-y': 0.5,
            'ref-x': 150
        },
        image: {
            type: 'Node',
            'xlink:href': 'file:///Users/hellspawn/Documents/Uniandes/Tesis/Repositorios/WebPicture-Java/co.edu.uniandes.picture.webpicture/WebContent/Editors/8e8745eb-bb31-423d-80f4-1ae5e15fba3d/Images/NodeIcon.gif',
            width: 100,
            height: 100,
        },
    },
});
GRAPH_592e843a.addCell(ICON_1d1f7216);
var ICON_423e4cbb = new joint.shapes.basic.Image({
    position: {
        x: 10,
        y: 70
    },
    size: {
        width: 50,
        height: 50
    },
    attrs: {
        text: {
            text: 'Device',
            'ref-y': 0.5,
            'ref-x': 150
        },
        image: {
            type: 'Device',
            'xlink:href': 'file:///Users/hellspawn/Documents/Uniandes/Tesis/Repositorios/WebPicture-Java/co.edu.uniandes.picture.webpicture/WebContent/Editors/8e8745eb-bb31-423d-80f4-1ae5e15fba3d/Images/DeviceIcon.gif',
            width: 100,
            height: 100,
        },
    },
});
GRAPH_592e843a.addCell(ICON_423e4cbb);
var ICON_6e16b8b5 = new joint.shapes.basic.Image({
    position: {
        x: 10,
        y: 130
    },
    size: {
        width: 50,
        height: 50
    },
    attrs: {
        text: {
            text: 'SystemSoftware',
            'ref-y': 0.5,
            'ref-x': 150
        },
        image: {
            type: 'SystemSoftware',
            'xlink:href': 'file:///Users/hellspawn/Documents/Uniandes/Tesis/Repositorios/WebPicture-Java/co.edu.uniandes.picture.webpicture/WebContent/Editors/8e8745eb-bb31-423d-80f4-1ae5e15fba3d/Images/SystemSoftwareIcon.gif',
            width: 100,
            height: 100,
        },
    },
});
GRAPH_592e843a.addCell(ICON_6e16b8b5);
var ICON_43b4fe19 = new joint.shapes.basic.Image({
    position: {
        x: 10,
        y: 190
    },
    size: {
        width: 50,
        height: 50
    },
    attrs: {
        text: {
            text: 'InfrastructureInterface',
            'ref-y': 0.5,
            'ref-x': 150
        },
        image: {
            type: 'InfrastructureInterface',
            'xlink:href': 'file:///Users/hellspawn/Documents/Uniandes/Tesis/Repositorios/WebPicture-Java/co.edu.uniandes.picture.webpicture/WebContent/Editors/8e8745eb-bb31-423d-80f4-1ae5e15fba3d/Images/InfrastructureInterfaceIcon.gif',
            width: 100,
            height: 100,
        },
    },
});
GRAPH_592e843a.addCell(ICON_43b4fe19);
var ICON_25ddbbbb = new joint.shapes.basic.Image({
    position: {
        x: 10,
        y: 250
    },
    size: {
        width: 50,
        height: 50
    },
    attrs: {
        text: {
            text: 'Network',
            'ref-y': 0.5,
            'ref-x': 150
        },
        image: {
            type: 'Network',
            'xlink:href': 'file:///Users/hellspawn/Documents/Uniandes/Tesis/Repositorios/WebPicture-Java/co.edu.uniandes.picture.webpicture/WebContent/Editors/8e8745eb-bb31-423d-80f4-1ae5e15fba3d/Images/NetworkIcon.gif',
            width: 100,
            height: 100,
        },
    },
});
GRAPH_592e843a.addCell(ICON_25ddbbbb);
var ICON_1536602f = new joint.shapes.basic.Image({
    position: {
        x: 10,
        y: 310
    },
    size: {
        width: 50,
        height: 50
    },
    attrs: {
        text: {
            text: 'CommunicationPath',
            'ref-y': 0.5,
            'ref-x': 150
        },
        image: {
            type: 'CommunicationPath',
            'xlink:href': 'file:///Users/hellspawn/Documents/Uniandes/Tesis/Repositorios/WebPicture-Java/co.edu.uniandes.picture.webpicture/WebContent/Editors/8e8745eb-bb31-423d-80f4-1ae5e15fba3d/Images/CommunicationPathIcon.gif',
            width: 100,
            height: 100,
        },
    },
});
GRAPH_592e843a.addCell(ICON_1536602f);
var ICON_4ebea12c = new joint.shapes.basic.Image({
    position: {
        x: 10,
        y: 370
    },
    size: {
        width: 50,
        height: 50
    },
    attrs: {
        text: {
            text: 'InfrastructureService',
            'ref-y': 0.5,
            'ref-x': 150
        },
        image: {
            type: 'InfrastructureService',
            'xlink:href': 'file:///Users/hellspawn/Documents/Uniandes/Tesis/Repositorios/WebPicture-Java/co.edu.uniandes.picture.webpicture/WebContent/Editors/8e8745eb-bb31-423d-80f4-1ae5e15fba3d/Images/InfrastructureServiceIcon.gif',
            width: 100,
            height: 100,
        },
    },
});
GRAPH_592e843a.addCell(ICON_4ebea12c);
var ICON_2a1edad4 = new joint.shapes.basic.Image({
    position: {
        x: 10,
        y: 430
    },
    size: {
        width: 50,
        height: 50
    },
    attrs: {
        text: {
            text: 'Artifact',
            'ref-y': 0.5,
            'ref-x': 150
        },
        image: {
            type: 'Artifact',
            'xlink:href': 'file:///Users/hellspawn/Documents/Uniandes/Tesis/Repositorios/WebPicture-Java/co.edu.uniandes.picture.webpicture/WebContent/Editors/8e8745eb-bb31-423d-80f4-1ae5e15fba3d/Images/ArtifactIcon.gif',
            width: 100,
            height: 100,
        },
    },
});
GRAPH_592e843a.addCell(ICON_2a1edad4);
$('#tools').append('<h5 id="HEAD_6256ac4f" class="marketing-header-canvas" style="text-align:left;color:white; background-color:#181818;border-top:1px solid #808080"><i class="fa fa-bars" style="margin-left:5px"></i> ElementsMPalette</h5><div id="GROUP_6256ac4f" style="background-color:#F0F0F0; overflow-y: auto; height:490px"></div>');
Tipped.create('#HEAD_6256ac4f', 'Motivational Elements', {
    position: 'right'
});
var GRAPH_6256ac4f = new joint.dia.Graph;
var PAPER_6256ac4f = new joint.dia.Paper({
    el: $('#GROUP_6256ac4f'),
    gridSize: 10,
    height: $('#GROUP_6256ac4f').height(),
    width: $('#tools').width(),
    gridSize: 1,
    model: GRAPH_6256ac4f,
    interactive: false
});
var ICON_44c79f32 = new joint.shapes.basic.Image({
    position: {
        x: 10,
        y: 10
    },
    size: {
        width: 50,
        height: 50
    },
    attrs: {
        text: {
            text: 'Stakeholder',
            'ref-y': 0.5,
            'ref-x': 150
        },
        image: {
            type: 'Stakeholder',
            'xlink:href': 'file:///Users/hellspawn/Documents/Uniandes/Tesis/Repositorios/WebPicture-Java/co.edu.uniandes.picture.webpicture/WebContent/Editors/8e8745eb-bb31-423d-80f4-1ae5e15fba3d/Images/Stakeholder.gif',
            width: 100,
            height: 100,
        },
    },
});
GRAPH_6256ac4f.addCell(ICON_44c79f32);
var ICON_7fcbe147 = new joint.shapes.basic.Image({
    position: {
        x: 10,
        y: 70
    },
    size: {
        width: 50,
        height: 50
    },
    attrs: {
        text: {
            text: 'Driver',
            'ref-y': 0.5,
            'ref-x': 150
        },
        image: {
            type: 'Driver',
            'xlink:href': 'file:///Users/hellspawn/Documents/Uniandes/Tesis/Repositorios/WebPicture-Java/co.edu.uniandes.picture.webpicture/WebContent/Editors/8e8745eb-bb31-423d-80f4-1ae5e15fba3d/Images/Driver.gif',
            width: 100,
            height: 100,
        },
    },
});
GRAPH_6256ac4f.addCell(ICON_7fcbe147);
var ICON_235f4c10 = new joint.shapes.basic.Image({
    position: {
        x: 10,
        y: 130
    },
    size: {
        width: 50,
        height: 50
    },
    attrs: {
        text: {
            text: 'Assessment',
            'ref-y': 0.5,
            'ref-x': 150
        },
        image: {
            type: 'Assessment',
            'xlink:href': 'file:///Users/hellspawn/Documents/Uniandes/Tesis/Repositorios/WebPicture-Java/co.edu.uniandes.picture.webpicture/WebContent/Editors/8e8745eb-bb31-423d-80f4-1ae5e15fba3d/Images/Assessment.gif',
            width: 100,
            height: 100,
        },
    },
});
GRAPH_6256ac4f.addCell(ICON_235f4c10);
var ICON_743cb8e0 = new joint.shapes.basic.Image({
    position: {
        x: 10,
        y: 190
    },
    size: {
        width: 50,
        height: 50
    },
    attrs: {
        text: {
            text: 'Goal',
            'ref-y': 0.5,
            'ref-x': 150
        },
        image: {
            type: 'Goal',
            'xlink:href': 'file:///Users/hellspawn/Documents/Uniandes/Tesis/Repositorios/WebPicture-Java/co.edu.uniandes.picture.webpicture/WebContent/Editors/8e8745eb-bb31-423d-80f4-1ae5e15fba3d/Images/Goal.gif',
            width: 100,
            height: 100,
        },
    },
});
GRAPH_6256ac4f.addCell(ICON_743cb8e0);
var ICON_c7a975a = new joint.shapes.basic.Image({
    position: {
        x: 10,
        y: 250
    },
    size: {
        width: 50,
        height: 50
    },
    attrs: {
        text: {
            text: 'Requirement',
            'ref-y': 0.5,
            'ref-x': 150
        },
        image: {
            type: 'Requirement',
            'xlink:href': 'file:///Users/hellspawn/Documents/Uniandes/Tesis/Repositorios/WebPicture-Java/co.edu.uniandes.picture.webpicture/WebContent/Editors/8e8745eb-bb31-423d-80f4-1ae5e15fba3d/Images/Requirement.gif',
            width: 100,
            height: 100,
        },
    },
});
GRAPH_6256ac4f.addCell(ICON_c7a975a);
var ICON_2c1b9e4b = new joint.shapes.basic.Image({
    position: {
        x: 10,
        y: 310
    },
    size: {
        width: 50,
        height: 50
    },
    attrs: {
        text: {
            text: 'Constraint',
            'ref-y': 0.5,
            'ref-x': 150
        },
        image: {
            type: 'Constraint',
            'xlink:href': 'file:///Users/hellspawn/Documents/Uniandes/Tesis/Repositorios/WebPicture-Java/co.edu.uniandes.picture.webpicture/WebContent/Editors/8e8745eb-bb31-423d-80f4-1ae5e15fba3d/Images/Constraint.gif',
            width: 100,
            height: 100,
        },
    },
});
GRAPH_6256ac4f.addCell(ICON_2c1b9e4b);
var ICON_757d6814 = new joint.shapes.basic.Image({
    position: {
        x: 10,
        y: 370
    },
    size: {
        width: 50,
        height: 50
    },
    attrs: {
        text: {
            text: 'Principle',
            'ref-y': 0.5,
            'ref-x': 150
        },
        image: {
            type: 'Principle',
            'xlink:href': 'file:///Users/hellspawn/Documents/Uniandes/Tesis/Repositorios/WebPicture-Java/co.edu.uniandes.picture.webpicture/WebContent/Editors/8e8745eb-bb31-423d-80f4-1ae5e15fba3d/Images/Principle.gif',
            width: 100,
            height: 100,
        },
    },
});
GRAPH_6256ac4f.addCell(ICON_757d6814);
$('#tools').append('<h5 id="HEAD_649725e3" class="marketing-header-canvas" style="text-align:left;color:white; background-color:#181818;border-top:1px solid #808080"><i class="fa fa-bars" style="margin-left:5px"></i> ElementsIAMPalette</h5><div id="GROUP_649725e3" style="background-color:#F0F0F0; overflow-y: auto; height:280px"></div>');
Tipped.create('#HEAD_649725e3', 'Implementation & Migration', {
    position: 'right'
});
var GRAPH_649725e3 = new joint.dia.Graph;
var PAPER_649725e3 = new joint.dia.Paper({
    el: $('#GROUP_649725e3'),
    gridSize: 10,
    height: $('#GROUP_649725e3').height(),
    width: $('#tools').width(),
    gridSize: 1,
    model: GRAPH_649725e3,
    interactive: false
});
var ICON_3c0fae6c = new joint.shapes.basic.Image({
    position: {
        x: 10,
        y: 10
    },
    size: {
        width: 50,
        height: 50
    },
    attrs: {
        text: {
            text: 'WorkPackage',
            'ref-y': 0.5,
            'ref-x': 150
        },
        image: {
            type: 'WorkPackage',
            'xlink:href': 'file:///Users/hellspawn/Documents/Uniandes/Tesis/Repositorios/WebPicture-Java/co.edu.uniandes.picture.webpicture/WebContent/Editors/8e8745eb-bb31-423d-80f4-1ae5e15fba3d/Images/WorkPackage.gif',
            width: 100,
            height: 100,
        },
    },
});
GRAPH_649725e3.addCell(ICON_3c0fae6c);
var ICON_4c168660 = new joint.shapes.basic.Image({
    position: {
        x: 10,
        y: 70
    },
    size: {
        width: 50,
        height: 50
    },
    attrs: {
        text: {
            text: 'Deliverable',
            'ref-y': 0.5,
            'ref-x': 150
        },
        image: {
            type: 'Deliverable',
            'xlink:href': 'file:///Users/hellspawn/Documents/Uniandes/Tesis/Repositorios/WebPicture-Java/co.edu.uniandes.picture.webpicture/WebContent/Editors/8e8745eb-bb31-423d-80f4-1ae5e15fba3d/Images/Deliverable.gif',
            width: 100,
            height: 100,
        },
    },
});
GRAPH_649725e3.addCell(ICON_4c168660);
var ICON_52b56a3e = new joint.shapes.basic.Image({
    position: {
        x: 10,
        y: 130
    },
    size: {
        width: 50,
        height: 50
    },
    attrs: {
        text: {
            text: 'Plateau',
            'ref-y': 0.5,
            'ref-x': 150
        },
        image: {
            type: 'Plateau',
            'xlink:href': 'file:///Users/hellspawn/Documents/Uniandes/Tesis/Repositorios/WebPicture-Java/co.edu.uniandes.picture.webpicture/WebContent/Editors/8e8745eb-bb31-423d-80f4-1ae5e15fba3d/Images/Plateau.gif',
            width: 100,
            height: 100,
        },
    },
});
GRAPH_649725e3.addCell(ICON_52b56a3e);
var ICON_fd0e5b6 = new joint.shapes.basic.Image({
    position: {
        x: 10,
        y: 190
    },
    size: {
        width: 50,
        height: 50
    },
    attrs: {
        text: {
            text: 'Gap',
            'ref-y': 0.5,
            'ref-x': 150
        },
        image: {
            type: 'Gap',
            'xlink:href': 'file:///Users/hellspawn/Documents/Uniandes/Tesis/Repositorios/WebPicture-Java/co.edu.uniandes.picture.webpicture/WebContent/Editors/8e8745eb-bb31-423d-80f4-1ae5e15fba3d/Images/Gap.gif',
            width: 100,
            height: 100,
        },
    },
});
GRAPH_649725e3.addCell(ICON_fd0e5b6);
var graph = new joint.dia.Graph;
var paper = new joint.dia.Paper({
    el: $('#modelCanvas'),
    gridSize: 10,
    height: $('#modelCanvas').height(),
    width: $('#modelCanvas').width(),
    gridSize: 1,
    model: graph,
    validateConnection: function (cellViewS, magnetS, cellViewT, magnetT, end, linkView) {
        var VAL_4eed46ee = (magnetS && magnetS.getAttribute('type') === 'ArchimateElement') && (magnetT && magnetT.getAttribute('type') === 'ArchimateElement');
        var VAL_36b0fcd5 = (magnetS && magnetS.getAttribute('type') === 'ArchimateElement') && (magnetT && magnetT.getAttribute('type') === 'Product');
        var VAL_4fad94a7 = (magnetS && magnetS.getAttribute('type') === 'ArchimateElement') && (magnetT && magnetT.getAttribute('type') === 'BusinessObject');
        var VAL_475835b1 = (magnetS && magnetS.getAttribute('type') === 'ArchimateElement') && (magnetT && magnetT.getAttribute('type') === 'Meaning');
        var VAL_6326d182 = (magnetS && magnetS.getAttribute('type') === 'ArchimateElement') && (magnetT && magnetT.getAttribute('type') === 'Representation');
        var VAL_5241cf67 = (magnetS && magnetS.getAttribute('type') === 'ArchimateElement') && (magnetT && magnetT.getAttribute('type') === 'BusinessService');
        var VAL_716a7124 = (magnetS && magnetS.getAttribute('type') === 'ArchimateElement') && (magnetT && magnetT.getAttribute('type') === 'BusinessProcess');
        var VAL_77192705 = (magnetS && magnetS.getAttribute('type') === 'ArchimateElement') && (magnetT && magnetT.getAttribute('type') === 'BusinessFunction');
        var VAL_226642a5 = (magnetS && magnetS.getAttribute('type') === 'ArchimateElement') && (magnetT && magnetT.getAttribute('type') === 'BusinessInteraction');
        var VAL_7e809b79 = (magnetS && magnetS.getAttribute('type') === 'ArchimateElement') && (magnetT && magnetT.getAttribute('type') === 'BusinessEvent');
        var VAL_5cc126dc = (magnetS && magnetS.getAttribute('type') === 'ArchimateElement') && (magnetT && magnetT.getAttribute('type') === 'Location');
        var VAL_625e134e = (magnetS && magnetS.getAttribute('type') === 'ArchimateElement') && (magnetT && magnetT.getAttribute('type') === 'BusinessInterface');
        var VAL_72bd06ca = (magnetS && magnetS.getAttribute('type') === 'ArchimateElement') && (magnetT && magnetT.getAttribute('type') === 'BusinessRole');
        var VAL_89c10b7 = (magnetS && magnetS.getAttribute('type') === 'ArchimateElement') && (magnetT && magnetT.getAttribute('type') === 'BusinessCollaboration');
        var VAL_5dbe30be = (magnetS && magnetS.getAttribute('type') === 'ArchimateElement') && (magnetT && magnetT.getAttribute('type') === 'BusinessActor');
        var VAL_4fe89c24 = (magnetS && magnetS.getAttribute('type') === 'ArchimateElement') && (magnetT && magnetT.getAttribute('type') === 'DataObject');
        var VAL_55795845 = (magnetS && magnetS.getAttribute('type') === 'ArchimateElement') && (magnetT && magnetT.getAttribute('type') === 'ApplicationService');
        var VAL_3d08f3f5 = (magnetS && magnetS.getAttribute('type') === 'ArchimateElement') && (magnetT && magnetT.getAttribute('type') === 'ApplicationFunction');
        var VAL_119f1f2a = (magnetS && magnetS.getAttribute('type') === 'ArchimateElement') && (magnetT && magnetT.getAttribute('type') === 'ApplicationInteraction');
        var VAL_1a1da881 = (magnetS && magnetS.getAttribute('type') === 'ArchimateElement') && (magnetT && magnetT.getAttribute('type') === 'ApplicationInterface');
        var VAL_5b970f7 = (magnetS && magnetS.getAttribute('type') === 'ArchimateElement') && (magnetT && magnetT.getAttribute('type') === 'ApplicationComponent');
        var VAL_7fd4acee = (magnetS && magnetS.getAttribute('type') === 'ArchimateElement') && (magnetT && magnetT.getAttribute('type') === 'ApplicationCollaboration');
        var VAL_165b8a71 = (magnetS && magnetS.getAttribute('type') === 'ArchimateElement') && (magnetT && magnetT.getAttribute('type') === 'Artifact');
        var VAL_6175619b = (magnetS && magnetS.getAttribute('type') === 'ArchimateElement') && (magnetT && magnetT.getAttribute('type') === 'InfrastructureService');
        var VAL_2f058b8a = (magnetS && magnetS.getAttribute('type') === 'ArchimateElement') && (magnetT && magnetT.getAttribute('type') === 'InfrastructureInterface');
        var VAL_756cf158 = (magnetS && magnetS.getAttribute('type') === 'ArchimateElement') && (magnetT && magnetT.getAttribute('type') === 'Node');
        var VAL_3f2ef586 = (magnetS && magnetS.getAttribute('type') === 'ArchimateElement') && (magnetT && magnetT.getAttribute('type') === 'SystemSoftware');
        var VAL_751d3241 = (magnetS && magnetS.getAttribute('type') === 'ArchimateElement') && (magnetT && magnetT.getAttribute('type') === 'Device');
        var VAL_76c7beb3 = (magnetS && magnetS.getAttribute('type') === 'ArchimateElement') && (magnetT && magnetT.getAttribute('type') === 'CommunicationPath');
        var VAL_64337702 = (magnetS && magnetS.getAttribute('type') === 'ArchimateElement') && (magnetT && magnetT.getAttribute('type') === 'Network');
        var VAL_2cf92cc7 = (magnetS && magnetS.getAttribute('type') === 'ArchimateElement') && (magnetT && magnetT.getAttribute('type') === 'Stakeholder');
        var VAL_30ea8c23 = (magnetS && magnetS.getAttribute('type') === 'ArchimateElement') && (magnetT && magnetT.getAttribute('type') === 'Driver');
        var VAL_7b139eab = (magnetS && magnetS.getAttribute('type') === 'ArchimateElement') && (magnetT && magnetT.getAttribute('type') === 'Assessment');
        var VAL_4e76dac = (magnetS && magnetS.getAttribute('type') === 'ArchimateElement') && (magnetT && magnetT.getAttribute('type') === 'Goal');
        var VAL_611df6e3 = (magnetS && magnetS.getAttribute('type') === 'ArchimateElement') && (magnetT && magnetT.getAttribute('type') === 'Requirement');
        var VAL_5f2f577 = (magnetS && magnetS.getAttribute('type') === 'ArchimateElement') && (magnetT && magnetT.getAttribute('type') === 'Constraint');
        var VAL_6273c5a4 = (magnetS && magnetS.getAttribute('type') === 'ArchimateElement') && (magnetT && magnetT.getAttribute('type') === 'Principle');
        var VAL_5d465e4b = (magnetS && magnetS.getAttribute('type') === 'ArchimateElement') && (magnetT && magnetT.getAttribute('type') === 'WorkPackage');
        var VAL_53e211ee = (magnetS && magnetS.getAttribute('type') === 'ArchimateElement') && (magnetT && magnetT.getAttribute('type') === 'Deliverable');
        var VAL_41a90fa8 = (magnetS && magnetS.getAttribute('type') === 'ArchimateElement') && (magnetT && magnetT.getAttribute('type') === 'Plateau');
        var VAL_3d8bbcdc = (magnetS && magnetS.getAttribute('type') === 'ArchimateElement') && (magnetT && magnetT.getAttribute('type') === 'Gap');
        var VAL_52500920 = (magnetS && magnetS.getAttribute('type') === 'Product') && (magnetT && magnetT.getAttribute('type') === 'ArchimateElement');
        var VAL_117e0fe5 = (magnetS && magnetS.getAttribute('type') === 'Product') && (magnetT && magnetT.getAttribute('type') === 'Product');
        var VAL_18a3962d = (magnetS && magnetS.getAttribute('type') === 'Product') && (magnetT && magnetT.getAttribute('type') === 'BusinessObject');
        var VAL_78aea4b9 = (magnetS && magnetS.getAttribute('type') === 'Product') && (magnetT && magnetT.getAttribute('type') === 'Meaning');
        var VAL_2a65bb85 = (magnetS && magnetS.getAttribute('type') === 'Product') && (magnetT && magnetT.getAttribute('type') === 'Representation');
        var VAL_4b85880b = (magnetS && magnetS.getAttribute('type') === 'Product') && (magnetT && magnetT.getAttribute('type') === 'BusinessService');
        var VAL_4f936da8 = (magnetS && magnetS.getAttribute('type') === 'Product') && (magnetT && magnetT.getAttribute('type') === 'BusinessProcess');
        var VAL_4215838f = (magnetS && magnetS.getAttribute('type') === 'Product') && (magnetT && magnetT.getAttribute('type') === 'BusinessFunction');
        var VAL_452ba1db = (magnetS && magnetS.getAttribute('type') === 'Product') && (magnetT && magnetT.getAttribute('type') === 'BusinessInteraction');
        var VAL_2289aca5 = (magnetS && magnetS.getAttribute('type') === 'Product') && (magnetT && magnetT.getAttribute('type') === 'BusinessEvent');
        var VAL_76a36b71 = (magnetS && magnetS.getAttribute('type') === 'Product') && (magnetT && magnetT.getAttribute('type') === 'Location');
        var VAL_184497d1 = (magnetS && magnetS.getAttribute('type') === 'Product') && (magnetT && magnetT.getAttribute('type') === 'BusinessInterface');
        var VAL_f9d87b = (magnetS && magnetS.getAttribute('type') === 'Product') && (magnetT && magnetT.getAttribute('type') === 'BusinessRole');
        var VAL_6ffab045 = (magnetS && magnetS.getAttribute('type') === 'Product') && (magnetT && magnetT.getAttribute('type') === 'BusinessCollaboration');
        var VAL_26fb628 = (magnetS && magnetS.getAttribute('type') === 'Product') && (magnetT && magnetT.getAttribute('type') === 'BusinessActor');
        var VAL_3e2943ab = (magnetS && magnetS.getAttribute('type') === 'Product') && (magnetT && magnetT.getAttribute('type') === 'DataObject');
        var VAL_70dd7e15 = (magnetS && magnetS.getAttribute('type') === 'Product') && (magnetT && magnetT.getAttribute('type') === 'ApplicationService');
        var VAL_4a9f80d3 = (magnetS && magnetS.getAttribute('type') === 'Product') && (magnetT && magnetT.getAttribute('type') === 'ApplicationFunction');
        var VAL_35beb15e = (magnetS && magnetS.getAttribute('type') === 'Product') && (magnetT && magnetT.getAttribute('type') === 'ApplicationInteraction');
        var VAL_41fe9859 = (magnetS && magnetS.getAttribute('type') === 'Product') && (magnetT && magnetT.getAttribute('type') === 'ApplicationInterface');
        var VAL_5ac86ba5 = (magnetS && magnetS.getAttribute('type') === 'Product') && (magnetT && magnetT.getAttribute('type') === 'ApplicationComponent');
        var VAL_6c67e137 = (magnetS && magnetS.getAttribute('type') === 'Product') && (magnetT && magnetT.getAttribute('type') === 'ApplicationCollaboration');
        var VAL_2c9399a4 = (magnetS && magnetS.getAttribute('type') === 'Product') && (magnetT && magnetT.getAttribute('type') === 'Artifact');
        var VAL_191ae03f = (magnetS && magnetS.getAttribute('type') === 'Product') && (magnetT && magnetT.getAttribute('type') === 'InfrastructureService');
        var VAL_9635fa = (magnetS && magnetS.getAttribute('type') === 'Product') && (magnetT && magnetT.getAttribute('type') === 'InfrastructureInterface');
        var VAL_53ab0286 = (magnetS && magnetS.getAttribute('type') === 'Product') && (magnetT && magnetT.getAttribute('type') === 'Node');
        var VAL_63c5efee = (magnetS && magnetS.getAttribute('type') === 'Product') && (magnetT && magnetT.getAttribute('type') === 'SystemSoftware');
        var VAL_2d10e0b1 = (magnetS && magnetS.getAttribute('type') === 'Product') && (magnetT && magnetT.getAttribute('type') === 'Device');
        var VAL_1c98290c = (magnetS && magnetS.getAttribute('type') === 'Product') && (magnetT && magnetT.getAttribute('type') === 'CommunicationPath');
        var VAL_172ca72b = (magnetS && magnetS.getAttribute('type') === 'Product') && (magnetT && magnetT.getAttribute('type') === 'Network');
        var VAL_5bda80bf = (magnetS && magnetS.getAttribute('type') === 'Product') && (magnetT && magnetT.getAttribute('type') === 'Stakeholder');
        var VAL_71e5f61d = (magnetS && magnetS.getAttribute('type') === 'Product') && (magnetT && magnetT.getAttribute('type') === 'Driver');
        var VAL_2ce86164 = (magnetS && magnetS.getAttribute('type') === 'Product') && (magnetT && magnetT.getAttribute('type') === 'Assessment');
        var VAL_5e8f9e2d = (magnetS && magnetS.getAttribute('type') === 'Product') && (magnetT && magnetT.getAttribute('type') === 'Goal');
        var VAL_51df223b = (magnetS && magnetS.getAttribute('type') === 'Product') && (magnetT && magnetT.getAttribute('type') === 'Requirement');
        var VAL_fd46303 = (magnetS && magnetS.getAttribute('type') === 'Product') && (magnetT && magnetT.getAttribute('type') === 'Constraint');
        var VAL_60d8c0dc = (magnetS && magnetS.getAttribute('type') === 'Product') && (magnetT && magnetT.getAttribute('type') === 'Principle');
        var VAL_4204541c = (magnetS && magnetS.getAttribute('type') === 'Product') && (magnetT && magnetT.getAttribute('type') === 'WorkPackage');
        var VAL_6a62689d = (magnetS && magnetS.getAttribute('type') === 'Product') && (magnetT && magnetT.getAttribute('type') === 'Deliverable');
        var VAL_4602c2a9 = (magnetS && magnetS.getAttribute('type') === 'Product') && (magnetT && magnetT.getAttribute('type') === 'Plateau');
        var VAL_60fa3495 = (magnetS && magnetS.getAttribute('type') === 'Product') && (magnetT && magnetT.getAttribute('type') === 'Gap');
        var VAL_3e2822 = (magnetS && magnetS.getAttribute('type') === 'Contract') && (magnetT && magnetT.getAttribute('type') === 'ArchimateElement');
        var VAL_79e18e38 = (magnetS && magnetS.getAttribute('type') === 'Contract') && (magnetT && magnetT.getAttribute('type') === 'Product');
        var VAL_29a60c27 = (magnetS && magnetS.getAttribute('type') === 'Contract') && (magnetT && magnetT.getAttribute('type') === 'BusinessObject');
        var VAL_1849db1a = (magnetS && magnetS.getAttribute('type') === 'Contract') && (magnetT && magnetT.getAttribute('type') === 'Meaning');
        var VAL_69c79f09 = (magnetS && magnetS.getAttribute('type') === 'Contract') && (magnetT && magnetT.getAttribute('type') === 'Representation');
        var VAL_1ca25c47 = (magnetS && magnetS.getAttribute('type') === 'Contract') && (magnetT && magnetT.getAttribute('type') === 'BusinessService');
        var VAL_5fcacc0 = (magnetS && magnetS.getAttribute('type') === 'Contract') && (magnetT && magnetT.getAttribute('type') === 'BusinessProcess');
        var VAL_533b266e = (magnetS && magnetS.getAttribute('type') === 'Contract') && (magnetT && magnetT.getAttribute('type') === 'BusinessFunction');
        var VAL_6d1d4d7 = (magnetS && magnetS.getAttribute('type') === 'Contract') && (magnetT && magnetT.getAttribute('type') === 'BusinessInteraction');
        var VAL_89ff02e = (magnetS && magnetS.getAttribute('type') === 'Contract') && (magnetT && magnetT.getAttribute('type') === 'BusinessEvent');
        var VAL_6865c751 = (magnetS && magnetS.getAttribute('type') === 'Contract') && (magnetT && magnetT.getAttribute('type') === 'Location');
        var VAL_62679465 = (magnetS && magnetS.getAttribute('type') === 'Contract') && (magnetT && magnetT.getAttribute('type') === 'BusinessInterface');
        var VAL_6a988392 = (magnetS && magnetS.getAttribute('type') === 'Contract') && (magnetT && magnetT.getAttribute('type') === 'BusinessRole');
        var VAL_1d71006f = (magnetS && magnetS.getAttribute('type') === 'Contract') && (magnetT && magnetT.getAttribute('type') === 'BusinessCollaboration');
        var VAL_5b6813df = (magnetS && magnetS.getAttribute('type') === 'Contract') && (magnetT && magnetT.getAttribute('type') === 'BusinessActor');
        var VAL_5f2606b = (magnetS && magnetS.getAttribute('type') === 'Contract') && (magnetT && magnetT.getAttribute('type') === 'DataObject');
        var VAL_2b58f754 = (magnetS && magnetS.getAttribute('type') === 'Contract') && (magnetT && magnetT.getAttribute('type') === 'ApplicationService');
        var VAL_3ebff828 = (magnetS && magnetS.getAttribute('type') === 'Contract') && (magnetT && magnetT.getAttribute('type') === 'ApplicationFunction');
        var VAL_2552f2cb = (magnetS && magnetS.getAttribute('type') === 'Contract') && (magnetT && magnetT.getAttribute('type') === 'ApplicationInteraction');
        var VAL_33352f32 = (magnetS && magnetS.getAttribute('type') === 'Contract') && (magnetT && magnetT.getAttribute('type') === 'ApplicationInterface');
        var VAL_5f3b9c57 = (magnetS && magnetS.getAttribute('type') === 'Contract') && (magnetT && magnetT.getAttribute('type') === 'ApplicationComponent');
        var VAL_1e044120 = (magnetS && magnetS.getAttribute('type') === 'Contract') && (magnetT && magnetT.getAttribute('type') === 'ApplicationCollaboration');
        var VAL_2cf23c81 = (magnetS && magnetS.getAttribute('type') === 'Contract') && (magnetT && magnetT.getAttribute('type') === 'Artifact');
        var VAL_3624da92 = (magnetS && magnetS.getAttribute('type') === 'Contract') && (magnetT && magnetT.getAttribute('type') === 'InfrastructureService');
        var VAL_35fe2125 = (magnetS && magnetS.getAttribute('type') === 'Contract') && (magnetT && magnetT.getAttribute('type') === 'InfrastructureInterface');
        var VAL_94f6bfb = (magnetS && magnetS.getAttribute('type') === 'Contract') && (magnetT && magnetT.getAttribute('type') === 'Node');
        var VAL_34645867 = (magnetS && magnetS.getAttribute('type') === 'Contract') && (magnetT && magnetT.getAttribute('type') === 'SystemSoftware');
        var VAL_2484f433 = (magnetS && magnetS.getAttribute('type') === 'Contract') && (magnetT && magnetT.getAttribute('type') === 'Device');
        var VAL_60b71e8f = (magnetS && magnetS.getAttribute('type') === 'Contract') && (magnetT && magnetT.getAttribute('type') === 'CommunicationPath');
        var VAL_1255b1d1 = (magnetS && magnetS.getAttribute('type') === 'Contract') && (magnetT && magnetT.getAttribute('type') === 'Network');
        var VAL_464649c = (magnetS && magnetS.getAttribute('type') === 'Contract') && (magnetT && magnetT.getAttribute('type') === 'Stakeholder');
        var VAL_7c22d4f = (magnetS && magnetS.getAttribute('type') === 'Contract') && (magnetT && magnetT.getAttribute('type') === 'Driver');
        var VAL_5f59185e = (magnetS && magnetS.getAttribute('type') === 'Contract') && (magnetT && magnetT.getAttribute('type') === 'Assessment');
        var VAL_60bdf15d = (magnetS && magnetS.getAttribute('type') === 'Contract') && (magnetT && magnetT.getAttribute('type') === 'Goal');
        var VAL_47da3952 = (magnetS && magnetS.getAttribute('type') === 'Contract') && (magnetT && magnetT.getAttribute('type') === 'Requirement');
        var VAL_51e4ccb3 = (magnetS && magnetS.getAttribute('type') === 'Contract') && (magnetT && magnetT.getAttribute('type') === 'Constraint');
        var VAL_46e8a539 = (magnetS && magnetS.getAttribute('type') === 'Contract') && (magnetT && magnetT.getAttribute('type') === 'Principle');
        var VAL_495083a0 = (magnetS && magnetS.getAttribute('type') === 'Contract') && (magnetT && magnetT.getAttribute('type') === 'WorkPackage');
        var VAL_5fd62371 = (magnetS && magnetS.getAttribute('type') === 'Contract') && (magnetT && magnetT.getAttribute('type') === 'Deliverable');
        var VAL_28a0fd6c = (magnetS && magnetS.getAttribute('type') === 'Contract') && (magnetT && magnetT.getAttribute('type') === 'Plateau');
        var VAL_2b62442c = (magnetS && magnetS.getAttribute('type') === 'Contract') && (magnetT && magnetT.getAttribute('type') === 'Gap');
        var VAL_66629f63 = (magnetS && magnetS.getAttribute('type') === 'BusinessObject') && (magnetT && magnetT.getAttribute('type') === 'ArchimateElement');
        var VAL_841e575 = (magnetS && magnetS.getAttribute('type') === 'BusinessObject') && (magnetT && magnetT.getAttribute('type') === 'Product');
        var VAL_27a5328c = (magnetS && magnetS.getAttribute('type') === 'BusinessObject') && (magnetT && magnetT.getAttribute('type') === 'BusinessObject');
        var VAL_1e5f4170 = (magnetS && magnetS.getAttribute('type') === 'BusinessObject') && (magnetT && magnetT.getAttribute('type') === 'Meaning');
        var VAL_6c345c5f = (magnetS && magnetS.getAttribute('type') === 'BusinessObject') && (magnetT && magnetT.getAttribute('type') === 'Representation');
        var VAL_6b5966e1 = (magnetS && magnetS.getAttribute('type') === 'BusinessObject') && (magnetT && magnetT.getAttribute('type') === 'BusinessService');
        var VAL_65e61854 = (magnetS && magnetS.getAttribute('type') === 'BusinessObject') && (magnetT && magnetT.getAttribute('type') === 'BusinessProcess');
        var VAL_1568159 = (magnetS && magnetS.getAttribute('type') === 'BusinessObject') && (magnetT && magnetT.getAttribute('type') === 'BusinessFunction');
        var VAL_4fcee388 = (magnetS && magnetS.getAttribute('type') === 'BusinessObject') && (magnetT && magnetT.getAttribute('type') === 'BusinessInteraction');
        var VAL_6f80fafe = (magnetS && magnetS.getAttribute('type') === 'BusinessObject') && (magnetT && magnetT.getAttribute('type') === 'BusinessEvent');
        var VAL_3af17be2 = (magnetS && magnetS.getAttribute('type') === 'BusinessObject') && (magnetT && magnetT.getAttribute('type') === 'Location');
        var VAL_f9879ac = (magnetS && magnetS.getAttribute('type') === 'BusinessObject') && (magnetT && magnetT.getAttribute('type') === 'BusinessInterface');
        var VAL_37f21974 = (magnetS && magnetS.getAttribute('type') === 'BusinessObject') && (magnetT && magnetT.getAttribute('type') === 'BusinessRole');
        var VAL_5f4d427e = (magnetS && magnetS.getAttribute('type') === 'BusinessObject') && (magnetT && magnetT.getAttribute('type') === 'BusinessCollaboration');
        var VAL_6e521c1e = (magnetS && magnetS.getAttribute('type') === 'BusinessObject') && (magnetT && magnetT.getAttribute('type') === 'BusinessActor');
        var VAL_224b4d61 = (magnetS && magnetS.getAttribute('type') === 'BusinessObject') && (magnetT && magnetT.getAttribute('type') === 'DataObject');
        var VAL_5d5d9e5 = (magnetS && magnetS.getAttribute('type') === 'BusinessObject') && (magnetT && magnetT.getAttribute('type') === 'ApplicationService');
        var VAL_303e3593 = (magnetS && magnetS.getAttribute('type') === 'BusinessObject') && (magnetT && magnetT.getAttribute('type') === 'ApplicationFunction');
        var VAL_4ef27d66 = (magnetS && magnetS.getAttribute('type') === 'BusinessObject') && (magnetT && magnetT.getAttribute('type') === 'ApplicationInteraction');
        var VAL_362a019c = (magnetS && magnetS.getAttribute('type') === 'BusinessObject') && (magnetT && magnetT.getAttribute('type') === 'ApplicationInterface');
        var VAL_1d9bec4d = (magnetS && magnetS.getAttribute('type') === 'BusinessObject') && (magnetT && magnetT.getAttribute('type') === 'ApplicationComponent');
        var VAL_5c48c0c0 = (magnetS && magnetS.getAttribute('type') === 'BusinessObject') && (magnetT && magnetT.getAttribute('type') === 'ApplicationCollaboration');
        var VAL_10c8f62 = (magnetS && magnetS.getAttribute('type') === 'BusinessObject') && (magnetT && magnetT.getAttribute('type') === 'Artifact');
        var VAL_674c583e = (magnetS && magnetS.getAttribute('type') === 'BusinessObject') && (magnetT && magnetT.getAttribute('type') === 'InfrastructureService');
        var VAL_25f7391e = (magnetS && magnetS.getAttribute('type') === 'BusinessObject') && (magnetT && magnetT.getAttribute('type') === 'InfrastructureInterface');
        var VAL_3f23a3a0 = (magnetS && magnetS.getAttribute('type') === 'BusinessObject') && (magnetT && magnetT.getAttribute('type') === 'Node');
        var VAL_5ab14cb9 = (magnetS && magnetS.getAttribute('type') === 'BusinessObject') && (magnetT && magnetT.getAttribute('type') === 'SystemSoftware');
        var VAL_5fb97279 = (magnetS && magnetS.getAttribute('type') === 'BusinessObject') && (magnetT && magnetT.getAttribute('type') === 'Device');
        var VAL_439a8f59 = (magnetS && magnetS.getAttribute('type') === 'BusinessObject') && (magnetT && magnetT.getAttribute('type') === 'CommunicationPath');
        var VAL_61861a29 = (magnetS && magnetS.getAttribute('type') === 'BusinessObject') && (magnetT && magnetT.getAttribute('type') === 'Network');
        var VAL_31024624 = (magnetS && magnetS.getAttribute('type') === 'BusinessObject') && (magnetT && magnetT.getAttribute('type') === 'Stakeholder');
        var VAL_25bcd0c7 = (magnetS && magnetS.getAttribute('type') === 'BusinessObject') && (magnetT && magnetT.getAttribute('type') === 'Driver');
        var VAL_32cb636e = (magnetS && magnetS.getAttribute('type') === 'BusinessObject') && (magnetT && magnetT.getAttribute('type') === 'Assessment');
        var VAL_63cd604c = (magnetS && magnetS.getAttribute('type') === 'BusinessObject') && (magnetT && magnetT.getAttribute('type') === 'Goal');
        var VAL_40dd3977 = (magnetS && magnetS.getAttribute('type') === 'BusinessObject') && (magnetT && magnetT.getAttribute('type') === 'Requirement');
        var VAL_3a4e343 = (magnetS && magnetS.getAttribute('type') === 'BusinessObject') && (magnetT && magnetT.getAttribute('type') === 'Constraint');
        var VAL_6a1d204a = (magnetS && magnetS.getAttribute('type') === 'BusinessObject') && (magnetT && magnetT.getAttribute('type') === 'Principle');
        var VAL_62dae245 = (magnetS && magnetS.getAttribute('type') === 'BusinessObject') && (magnetT && magnetT.getAttribute('type') === 'WorkPackage');
        var VAL_4b6579e8 = (magnetS && magnetS.getAttribute('type') === 'BusinessObject') && (magnetT && magnetT.getAttribute('type') === 'Deliverable');
        var VAL_6fff253c = (magnetS && magnetS.getAttribute('type') === 'BusinessObject') && (magnetT && magnetT.getAttribute('type') === 'Plateau');
        var VAL_6c6357f9 = (magnetS && magnetS.getAttribute('type') === 'BusinessObject') && (magnetT && magnetT.getAttribute('type') === 'Gap');
        var VAL_591e58fa = (magnetS && magnetS.getAttribute('type') === 'Meaning') && (magnetT && magnetT.getAttribute('type') === 'ArchimateElement');
        var VAL_3954d008 = (magnetS && magnetS.getAttribute('type') === 'Meaning') && (magnetT && magnetT.getAttribute('type') === 'Product');
        var VAL_2f94c4db = (magnetS && magnetS.getAttribute('type') === 'Meaning') && (magnetT && magnetT.getAttribute('type') === 'BusinessObject');
        var VAL_593e824f = (magnetS && magnetS.getAttribute('type') === 'Meaning') && (magnetT && magnetT.getAttribute('type') === 'Meaning');
        var VAL_72ccd81a = (magnetS && magnetS.getAttribute('type') === 'Meaning') && (magnetT && magnetT.getAttribute('type') === 'Representation');
        var VAL_6d8792db = (magnetS && magnetS.getAttribute('type') === 'Meaning') && (magnetT && magnetT.getAttribute('type') === 'BusinessService');
        var VAL_64bc21ac = (magnetS && magnetS.getAttribute('type') === 'Meaning') && (magnetT && magnetT.getAttribute('type') === 'BusinessProcess');
        var VAL_493dfb8e = (magnetS && magnetS.getAttribute('type') === 'Meaning') && (magnetT && magnetT.getAttribute('type') === 'BusinessFunction');
        var VAL_5d25e6bb = (magnetS && magnetS.getAttribute('type') === 'Meaning') && (magnetT && magnetT.getAttribute('type') === 'BusinessInteraction');
        var VAL_ce5a68e = (magnetS && magnetS.getAttribute('type') === 'Meaning') && (magnetT && magnetT.getAttribute('type') === 'BusinessEvent');
        var VAL_9d157ff = (magnetS && magnetS.getAttribute('type') === 'Meaning') && (magnetT && magnetT.getAttribute('type') === 'Location');
        var VAL_2f162cc0 = (magnetS && magnetS.getAttribute('type') === 'Meaning') && (magnetT && magnetT.getAttribute('type') === 'BusinessInterface');
        var VAL_5df417a7 = (magnetS && magnetS.getAttribute('type') === 'Meaning') && (magnetT && magnetT.getAttribute('type') === 'BusinessRole');
        var VAL_7c041b41 = (magnetS && magnetS.getAttribute('type') === 'Meaning') && (magnetT && magnetT.getAttribute('type') === 'BusinessCollaboration');
        var VAL_7f69d591 = (magnetS && magnetS.getAttribute('type') === 'Meaning') && (magnetT && magnetT.getAttribute('type') === 'BusinessActor');
        var VAL_61078690 = (magnetS && magnetS.getAttribute('type') === 'Meaning') && (magnetT && magnetT.getAttribute('type') === 'DataObject');
        var VAL_1cb3ec38 = (magnetS && magnetS.getAttribute('type') === 'Meaning') && (magnetT && magnetT.getAttribute('type') === 'ApplicationService');
        var VAL_403132fc = (magnetS && magnetS.getAttribute('type') === 'Meaning') && (magnetT && magnetT.getAttribute('type') === 'ApplicationFunction');
        var VAL_71c5b236 = (magnetS && magnetS.getAttribute('type') === 'Meaning') && (magnetT && magnetT.getAttribute('type') === 'ApplicationInteraction');
        var VAL_2cab9998 = (magnetS && magnetS.getAttribute('type') === 'Meaning') && (magnetT && magnetT.getAttribute('type') === 'ApplicationInterface');
        var VAL_2f7a7219 = (magnetS && magnetS.getAttribute('type') === 'Meaning') && (magnetT && magnetT.getAttribute('type') === 'ApplicationComponent');
        var VAL_669513d8 = (magnetS && magnetS.getAttribute('type') === 'Meaning') && (magnetT && magnetT.getAttribute('type') === 'ApplicationCollaboration');
        var VAL_3a1d593e = (magnetS && magnetS.getAttribute('type') === 'Meaning') && (magnetT && magnetT.getAttribute('type') === 'Artifact');
        var VAL_4a8a60bc = (magnetS && magnetS.getAttribute('type') === 'Meaning') && (magnetT && magnetT.getAttribute('type') === 'InfrastructureService');
        var VAL_361c294e = (magnetS && magnetS.getAttribute('type') === 'Meaning') && (magnetT && magnetT.getAttribute('type') === 'InfrastructureInterface');
        var VAL_7859e786 = (magnetS && magnetS.getAttribute('type') === 'Meaning') && (magnetT && magnetT.getAttribute('type') === 'Node');
        var VAL_285d851a = (magnetS && magnetS.getAttribute('type') === 'Meaning') && (magnetT && magnetT.getAttribute('type') === 'SystemSoftware');
        var VAL_314b8f2d = (magnetS && magnetS.getAttribute('type') === 'Meaning') && (magnetT && magnetT.getAttribute('type') === 'Device');
        var VAL_664a9613 = (magnetS && magnetS.getAttribute('type') === 'Meaning') && (magnetT && magnetT.getAttribute('type') === 'CommunicationPath');
        var VAL_5118388b = (magnetS && magnetS.getAttribute('type') === 'Meaning') && (magnetT && magnetT.getAttribute('type') === 'Network');
        var VAL_15a902e7 = (magnetS && magnetS.getAttribute('type') === 'Meaning') && (magnetT && magnetT.getAttribute('type') === 'Stakeholder');
        var VAL_7876d598 = (magnetS && magnetS.getAttribute('type') === 'Meaning') && (magnetT && magnetT.getAttribute('type') === 'Driver');
        var VAL_4a3e3e8b = (magnetS && magnetS.getAttribute('type') === 'Meaning') && (magnetT && magnetT.getAttribute('type') === 'Assessment');
        var VAL_5af28b27 = (magnetS && magnetS.getAttribute('type') === 'Meaning') && (magnetT && magnetT.getAttribute('type') === 'Goal');
        var VAL_71104a4 = (magnetS && magnetS.getAttribute('type') === 'Meaning') && (magnetT && magnetT.getAttribute('type') === 'Requirement');
        var VAL_4985cbcb = (magnetS && magnetS.getAttribute('type') === 'Meaning') && (magnetT && magnetT.getAttribute('type') === 'Constraint');
        var VAL_72f46e16 = (magnetS && magnetS.getAttribute('type') === 'Meaning') && (magnetT && magnetT.getAttribute('type') === 'Principle');
        var VAL_3c9168dc = (magnetS && magnetS.getAttribute('type') === 'Meaning') && (magnetT && magnetT.getAttribute('type') === 'WorkPackage');
        var VAL_332a7fce = (magnetS && magnetS.getAttribute('type') === 'Meaning') && (magnetT && magnetT.getAttribute('type') === 'Deliverable');
        var VAL_549621f3 = (magnetS && magnetS.getAttribute('type') === 'Meaning') && (magnetT && magnetT.getAttribute('type') === 'Plateau');
        var VAL_54361a9 = (magnetS && magnetS.getAttribute('type') === 'Meaning') && (magnetT && magnetT.getAttribute('type') === 'Gap');
        var VAL_32232e55 = (magnetS && magnetS.getAttribute('type') === 'Representation') && (magnetT && magnetT.getAttribute('type') === 'ArchimateElement');
        var VAL_5217f3d0 = (magnetS && magnetS.getAttribute('type') === 'Representation') && (magnetT && magnetT.getAttribute('type') === 'Product');
        var VAL_37ebc9d8 = (magnetS && magnetS.getAttribute('type') === 'Representation') && (magnetT && magnetT.getAttribute('type') === 'BusinessObject');
        var VAL_293bb8a5 = (magnetS && magnetS.getAttribute('type') === 'Representation') && (magnetT && magnetT.getAttribute('type') === 'Meaning');
        var VAL_2416a51 = (magnetS && magnetS.getAttribute('type') === 'Representation') && (magnetT && magnetT.getAttribute('type') === 'Representation');
        var VAL_6fa590ba = (magnetS && magnetS.getAttribute('type') === 'Representation') && (magnetT && magnetT.getAttribute('type') === 'BusinessService');
        var VAL_6e9319f = (magnetS && magnetS.getAttribute('type') === 'Representation') && (magnetT && magnetT.getAttribute('type') === 'BusinessProcess');
        var VAL_72e34f77 = (magnetS && magnetS.getAttribute('type') === 'Representation') && (magnetT && magnetT.getAttribute('type') === 'BusinessFunction');
        var VAL_7bf9b098 = (magnetS && magnetS.getAttribute('type') === 'Representation') && (magnetT && magnetT.getAttribute('type') === 'BusinessInteraction');
        var VAL_389adf1d = (magnetS && magnetS.getAttribute('type') === 'Representation') && (magnetT && magnetT.getAttribute('type') === 'BusinessEvent');
        var VAL_77307458 = (magnetS && magnetS.getAttribute('type') === 'Representation') && (magnetT && magnetT.getAttribute('type') === 'Location');
        var VAL_1fc0053e = (magnetS && magnetS.getAttribute('type') === 'Representation') && (magnetT && magnetT.getAttribute('type') === 'BusinessInterface');
        var VAL_290b1b2e = (magnetS && magnetS.getAttribute('type') === 'Representation') && (magnetT && magnetT.getAttribute('type') === 'BusinessRole');
        var VAL_47874b25 = (magnetS && magnetS.getAttribute('type') === 'Representation') && (magnetT && magnetT.getAttribute('type') === 'BusinessCollaboration');
        var VAL_33617539 = (magnetS && magnetS.getAttribute('type') === 'Representation') && (magnetT && magnetT.getAttribute('type') === 'BusinessActor');
        var VAL_2c177f9e = (magnetS && magnetS.getAttribute('type') === 'Representation') && (magnetT && magnetT.getAttribute('type') === 'DataObject');
        var VAL_5db4c359 = (magnetS && magnetS.getAttribute('type') === 'Representation') && (magnetT && magnetT.getAttribute('type') === 'ApplicationService');
        var VAL_209775a9 = (magnetS && magnetS.getAttribute('type') === 'Representation') && (magnetT && magnetT.getAttribute('type') === 'ApplicationFunction');
        var VAL_18e7143f = (magnetS && magnetS.getAttribute('type') === 'Representation') && (magnetT && magnetT.getAttribute('type') === 'ApplicationInteraction');
        var VAL_f9b7332 = (magnetS && magnetS.getAttribute('type') === 'Representation') && (magnetT && magnetT.getAttribute('type') === 'ApplicationInterface');
        var VAL_74cec793 = (magnetS && magnetS.getAttribute('type') === 'Representation') && (magnetT && magnetT.getAttribute('type') === 'ApplicationComponent');
        var VAL_6fefce9e = (magnetS && magnetS.getAttribute('type') === 'Representation') && (magnetT && magnetT.getAttribute('type') === 'ApplicationCollaboration');
        var VAL_4f8969b0 = (magnetS && magnetS.getAttribute('type') === 'Representation') && (magnetT && magnetT.getAttribute('type') === 'Artifact');
        var VAL_1bdf8190 = (magnetS && magnetS.getAttribute('type') === 'Representation') && (magnetT && magnetT.getAttribute('type') === 'InfrastructureService');
        var VAL_192f2f27 = (magnetS && magnetS.getAttribute('type') === 'Representation') && (magnetT && magnetT.getAttribute('type') === 'InfrastructureInterface');
        var VAL_8a589a2 = (magnetS && magnetS.getAttribute('type') === 'Representation') && (magnetT && magnetT.getAttribute('type') === 'Node');
        var VAL_c65a5ef = (magnetS && magnetS.getAttribute('type') === 'Representation') && (magnetT && magnetT.getAttribute('type') === 'SystemSoftware');
        var VAL_6b5176f2 = (magnetS && magnetS.getAttribute('type') === 'Representation') && (magnetT && magnetT.getAttribute('type') === 'Device');
        var VAL_b672aa8 = (magnetS && magnetS.getAttribute('type') === 'Representation') && (magnetT && magnetT.getAttribute('type') === 'CommunicationPath');
        var VAL_2fab4aff = (magnetS && magnetS.getAttribute('type') === 'Representation') && (magnetT && magnetT.getAttribute('type') === 'Network');
        var VAL_ec0c838 = (magnetS && magnetS.getAttribute('type') === 'Representation') && (magnetT && magnetT.getAttribute('type') === 'Stakeholder');
        var VAL_6e46d9f4 = (magnetS && magnetS.getAttribute('type') === 'Representation') && (magnetT && magnetT.getAttribute('type') === 'Driver');
        var VAL_5cc69cfe = (magnetS && magnetS.getAttribute('type') === 'Representation') && (magnetT && magnetT.getAttribute('type') === 'Assessment');
        var VAL_29cfd92b = (magnetS && magnetS.getAttribute('type') === 'Representation') && (magnetT && magnetT.getAttribute('type') === 'Goal');
        var VAL_21c64522 = (magnetS && magnetS.getAttribute('type') === 'Representation') && (magnetT && magnetT.getAttribute('type') === 'Requirement');
        var VAL_7997b197 = (magnetS && magnetS.getAttribute('type') === 'Representation') && (magnetT && magnetT.getAttribute('type') === 'Constraint');
        var VAL_11dee337 = (magnetS && magnetS.getAttribute('type') === 'Representation') && (magnetT && magnetT.getAttribute('type') === 'Principle');
        var VAL_460f76a6 = (magnetS && magnetS.getAttribute('type') === 'Representation') && (magnetT && magnetT.getAttribute('type') === 'WorkPackage');
        var VAL_55f3c410 = (magnetS && magnetS.getAttribute('type') === 'Representation') && (magnetT && magnetT.getAttribute('type') === 'Deliverable');
        var VAL_11acdc30 = (magnetS && magnetS.getAttribute('type') === 'Representation') && (magnetT && magnetT.getAttribute('type') === 'Plateau');
        var VAL_770d4269 = (magnetS && magnetS.getAttribute('type') === 'Representation') && (magnetT && magnetT.getAttribute('type') === 'Gap');
        var VAL_4a8ab068 = (magnetS && magnetS.getAttribute('type') === 'BusinessService') && (magnetT && magnetT.getAttribute('type') === 'ArchimateElement');
        var VAL_1922e6d = (magnetS && magnetS.getAttribute('type') === 'BusinessService') && (magnetT && magnetT.getAttribute('type') === 'Product');
        var VAL_76a82f33 = (magnetS && magnetS.getAttribute('type') === 'BusinessService') && (magnetT && magnetT.getAttribute('type') === 'BusinessObject');
        var VAL_6bab2585 = (magnetS && magnetS.getAttribute('type') === 'BusinessService') && (magnetT && magnetT.getAttribute('type') === 'Meaning');
        var VAL_74bdc168 = (magnetS && magnetS.getAttribute('type') === 'BusinessService') && (magnetT && magnetT.getAttribute('type') === 'Representation');
        var VAL_644c78d4 = (magnetS && magnetS.getAttribute('type') === 'BusinessService') && (magnetT && magnetT.getAttribute('type') === 'BusinessService');
        var VAL_532a02d9 = (magnetS && magnetS.getAttribute('type') === 'BusinessService') && (magnetT && magnetT.getAttribute('type') === 'BusinessProcess');
        var VAL_611f8234 = (magnetS && magnetS.getAttribute('type') === 'BusinessService') && (magnetT && magnetT.getAttribute('type') === 'BusinessFunction');
        var VAL_7bb3a9fe = (magnetS && magnetS.getAttribute('type') === 'BusinessService') && (magnetT && magnetT.getAttribute('type') === 'BusinessInteraction');
        var VAL_7cbee484 = (magnetS && magnetS.getAttribute('type') === 'BusinessService') && (magnetT && magnetT.getAttribute('type') === 'BusinessEvent');
        var VAL_7f811d00 = (magnetS && magnetS.getAttribute('type') === 'BusinessService') && (magnetT && magnetT.getAttribute('type') === 'Location');
        var VAL_62923ee6 = (magnetS && magnetS.getAttribute('type') === 'BusinessService') && (magnetT && magnetT.getAttribute('type') === 'BusinessInterface');
        var VAL_4089713 = (magnetS && magnetS.getAttribute('type') === 'BusinessService') && (magnetT && magnetT.getAttribute('type') === 'BusinessRole');
        var VAL_f19c9d2 = (magnetS && magnetS.getAttribute('type') === 'BusinessService') && (magnetT && magnetT.getAttribute('type') === 'BusinessCollaboration');
        var VAL_7807ac2c = (magnetS && magnetS.getAttribute('type') === 'BusinessService') && (magnetT && magnetT.getAttribute('type') === 'BusinessActor');
        var VAL_b91d8c4 = (magnetS && magnetS.getAttribute('type') === 'BusinessService') && (magnetT && magnetT.getAttribute('type') === 'DataObject');
        var VAL_4b6166aa = (magnetS && magnetS.getAttribute('type') === 'BusinessService') && (magnetT && magnetT.getAttribute('type') === 'ApplicationService');
        var VAL_a77614d = (magnetS && magnetS.getAttribute('type') === 'BusinessService') && (magnetT && magnetT.getAttribute('type') === 'ApplicationFunction');
        var VAL_4fd4cae3 = (magnetS && magnetS.getAttribute('type') === 'BusinessService') && (magnetT && magnetT.getAttribute('type') === 'ApplicationInteraction');
        var VAL_4a067c25 = (magnetS && magnetS.getAttribute('type') === 'BusinessService') && (magnetT && magnetT.getAttribute('type') === 'ApplicationInterface');
        var VAL_a1217f9 = (magnetS && magnetS.getAttribute('type') === 'BusinessService') && (magnetT && magnetT.getAttribute('type') === 'ApplicationComponent');
        var VAL_3bde62ff = (magnetS && magnetS.getAttribute('type') === 'BusinessService') && (magnetT && magnetT.getAttribute('type') === 'ApplicationCollaboration');
        var VAL_523424b5 = (magnetS && magnetS.getAttribute('type') === 'BusinessService') && (magnetT && magnetT.getAttribute('type') === 'Artifact');
        var VAL_2baa8d82 = (magnetS && magnetS.getAttribute('type') === 'BusinessService') && (magnetT && magnetT.getAttribute('type') === 'InfrastructureService');
        var VAL_319dead1 = (magnetS && magnetS.getAttribute('type') === 'BusinessService') && (magnetT && magnetT.getAttribute('type') === 'InfrastructureInterface');
        var VAL_791cbf87 = (magnetS && magnetS.getAttribute('type') === 'BusinessService') && (magnetT && magnetT.getAttribute('type') === 'Node');
        var VAL_a7e2d9d = (magnetS && magnetS.getAttribute('type') === 'BusinessService') && (magnetT && magnetT.getAttribute('type') === 'SystemSoftware');
        var VAL_754777cd = (magnetS && magnetS.getAttribute('type') === 'BusinessService') && (magnetT && magnetT.getAttribute('type') === 'Device');
        var VAL_2b52c0d6 = (magnetS && magnetS.getAttribute('type') === 'BusinessService') && (magnetT && magnetT.getAttribute('type') === 'CommunicationPath');
        var VAL_372ea2bc = (magnetS && magnetS.getAttribute('type') === 'BusinessService') && (magnetT && magnetT.getAttribute('type') === 'Network');
        var VAL_4cc76301 = (magnetS && magnetS.getAttribute('type') === 'BusinessService') && (magnetT && magnetT.getAttribute('type') === 'Stakeholder');
        var VAL_2f08c4b = (magnetS && magnetS.getAttribute('type') === 'BusinessService') && (magnetT && magnetT.getAttribute('type') === 'Driver');
        var VAL_3f19b8b3 = (magnetS && magnetS.getAttribute('type') === 'BusinessService') && (magnetT && magnetT.getAttribute('type') === 'Assessment');
        var VAL_7de0c6ae = (magnetS && magnetS.getAttribute('type') === 'BusinessService') && (magnetT && magnetT.getAttribute('type') === 'Goal');
        var VAL_a486d78 = (magnetS && magnetS.getAttribute('type') === 'BusinessService') && (magnetT && magnetT.getAttribute('type') === 'Requirement');
        var VAL_cdc3aae = (magnetS && magnetS.getAttribute('type') === 'BusinessService') && (magnetT && magnetT.getAttribute('type') === 'Constraint');
        var VAL_7ef2d7a6 = (magnetS && magnetS.getAttribute('type') === 'BusinessService') && (magnetT && magnetT.getAttribute('type') === 'Principle');
        var VAL_5dcbb60 = (magnetS && magnetS.getAttribute('type') === 'BusinessService') && (magnetT && magnetT.getAttribute('type') === 'WorkPackage');
        var VAL_4c36250e = (magnetS && magnetS.getAttribute('type') === 'BusinessService') && (magnetT && magnetT.getAttribute('type') === 'Deliverable');
        var VAL_21526f6c = (magnetS && magnetS.getAttribute('type') === 'BusinessService') && (magnetT && magnetT.getAttribute('type') === 'Plateau');
        var VAL_49f5c307 = (magnetS && magnetS.getAttribute('type') === 'BusinessService') && (magnetT && magnetT.getAttribute('type') === 'Gap');
        var VAL_299266e2 = (magnetS && magnetS.getAttribute('type') === 'BusinessProcess') && (magnetT && magnetT.getAttribute('type') === 'ArchimateElement');
        var VAL_5471388b = (magnetS && magnetS.getAttribute('type') === 'BusinessProcess') && (magnetT && magnetT.getAttribute('type') === 'Product');
        var VAL_66ea1466 = (magnetS && magnetS.getAttribute('type') === 'BusinessProcess') && (magnetT && magnetT.getAttribute('type') === 'BusinessObject');
        var VAL_1601e47 = (magnetS && magnetS.getAttribute('type') === 'BusinessProcess') && (magnetT && magnetT.getAttribute('type') === 'Meaning');
        var VAL_3bffddff = (magnetS && magnetS.getAttribute('type') === 'BusinessProcess') && (magnetT && magnetT.getAttribute('type') === 'Representation');
        var VAL_66971f6b = (magnetS && magnetS.getAttribute('type') === 'BusinessProcess') && (magnetT && magnetT.getAttribute('type') === 'BusinessService');
        var VAL_50687efb = (magnetS && magnetS.getAttribute('type') === 'BusinessProcess') && (magnetT && magnetT.getAttribute('type') === 'BusinessProcess');
        var VAL_517bd097 = (magnetS && magnetS.getAttribute('type') === 'BusinessProcess') && (magnetT && magnetT.getAttribute('type') === 'BusinessFunction');
        var VAL_142eef62 = (magnetS && magnetS.getAttribute('type') === 'BusinessProcess') && (magnetT && magnetT.getAttribute('type') === 'BusinessInteraction');
        var VAL_4a9cc6cb = (magnetS && magnetS.getAttribute('type') === 'BusinessProcess') && (magnetT && magnetT.getAttribute('type') === 'BusinessEvent');
        var VAL_5990e6c5 = (magnetS && magnetS.getAttribute('type') === 'BusinessProcess') && (magnetT && magnetT.getAttribute('type') === 'Location');
        var VAL_56e07a08 = (magnetS && magnetS.getAttribute('type') === 'BusinessProcess') && (magnetT && magnetT.getAttribute('type') === 'BusinessInterface');
        var VAL_35d6ca49 = (magnetS && magnetS.getAttribute('type') === 'BusinessProcess') && (magnetT && magnetT.getAttribute('type') === 'BusinessRole');
        var VAL_1950e8a6 = (magnetS && magnetS.getAttribute('type') === 'BusinessProcess') && (magnetT && magnetT.getAttribute('type') === 'BusinessCollaboration');
        var VAL_47289387 = (magnetS && magnetS.getAttribute('type') === 'BusinessProcess') && (magnetT && magnetT.getAttribute('type') === 'BusinessActor');
        var VAL_12cd9150 = (magnetS && magnetS.getAttribute('type') === 'BusinessProcess') && (magnetT && magnetT.getAttribute('type') === 'DataObject');
        var VAL_114a85c2 = (magnetS && magnetS.getAttribute('type') === 'BusinessProcess') && (magnetT && magnetT.getAttribute('type') === 'ApplicationService');
        var VAL_f415a95 = (magnetS && magnetS.getAttribute('type') === 'BusinessProcess') && (magnetT && magnetT.getAttribute('type') === 'ApplicationFunction');
        var VAL_cf65451 = (magnetS && magnetS.getAttribute('type') === 'BusinessProcess') && (magnetT && magnetT.getAttribute('type') === 'ApplicationInteraction');
        var VAL_724f138e = (magnetS && magnetS.getAttribute('type') === 'BusinessProcess') && (magnetT && magnetT.getAttribute('type') === 'ApplicationInterface');
        var VAL_37eeec90 = (magnetS && magnetS.getAttribute('type') === 'BusinessProcess') && (magnetT && magnetT.getAttribute('type') === 'ApplicationComponent');
        var VAL_32fe9d0a = (magnetS && magnetS.getAttribute('type') === 'BusinessProcess') && (magnetT && magnetT.getAttribute('type') === 'ApplicationCollaboration');
        var VAL_c9413d8 = (magnetS && magnetS.getAttribute('type') === 'BusinessProcess') && (magnetT && magnetT.getAttribute('type') === 'Artifact');
        var VAL_64da2a7 = (magnetS && magnetS.getAttribute('type') === 'BusinessProcess') && (magnetT && magnetT.getAttribute('type') === 'InfrastructureService');
        var VAL_46074492 = (magnetS && magnetS.getAttribute('type') === 'BusinessProcess') && (magnetT && magnetT.getAttribute('type') === 'InfrastructureInterface');
        var VAL_d78795 = (magnetS && magnetS.getAttribute('type') === 'BusinessProcess') && (magnetT && magnetT.getAttribute('type') === 'Node');
        var VAL_2c715e84 = (magnetS && magnetS.getAttribute('type') === 'BusinessProcess') && (magnetT && magnetT.getAttribute('type') === 'SystemSoftware');
        var VAL_47428937 = (magnetS && magnetS.getAttribute('type') === 'BusinessProcess') && (magnetT && magnetT.getAttribute('type') === 'Device');
        var VAL_3b9d6699 = (magnetS && magnetS.getAttribute('type') === 'BusinessProcess') && (magnetT && magnetT.getAttribute('type') === 'CommunicationPath');
        var VAL_7caa550 = (magnetS && magnetS.getAttribute('type') === 'BusinessProcess') && (magnetT && magnetT.getAttribute('type') === 'Network');
        var VAL_21694e53 = (magnetS && magnetS.getAttribute('type') === 'BusinessProcess') && (magnetT && magnetT.getAttribute('type') === 'Stakeholder');
        var VAL_72b16078 = (magnetS && magnetS.getAttribute('type') === 'BusinessProcess') && (magnetT && magnetT.getAttribute('type') === 'Driver');
        var VAL_22c86919 = (magnetS && magnetS.getAttribute('type') === 'BusinessProcess') && (magnetT && magnetT.getAttribute('type') === 'Assessment');
        var VAL_70fab835 = (magnetS && magnetS.getAttribute('type') === 'BusinessProcess') && (magnetT && magnetT.getAttribute('type') === 'Goal');
        var VAL_1b0a7baf = (magnetS && magnetS.getAttribute('type') === 'BusinessProcess') && (magnetT && magnetT.getAttribute('type') === 'Requirement');
        var VAL_62417a16 = (magnetS && magnetS.getAttribute('type') === 'BusinessProcess') && (magnetT && magnetT.getAttribute('type') === 'Constraint');
        var VAL_32057e6 = (magnetS && magnetS.getAttribute('type') === 'BusinessProcess') && (magnetT && magnetT.getAttribute('type') === 'Principle');
        var VAL_26be6ca7 = (magnetS && magnetS.getAttribute('type') === 'BusinessProcess') && (magnetT && magnetT.getAttribute('type') === 'WorkPackage');
        var VAL_6ea1bcdc = (magnetS && magnetS.getAttribute('type') === 'BusinessProcess') && (magnetT && magnetT.getAttribute('type') === 'Deliverable');
        var VAL_759fad4 = (magnetS && magnetS.getAttribute('type') === 'BusinessProcess') && (magnetT && magnetT.getAttribute('type') === 'Plateau');
        var VAL_64712be = (magnetS && magnetS.getAttribute('type') === 'BusinessProcess') && (magnetT && magnetT.getAttribute('type') === 'Gap');
        var VAL_53499d85 = (magnetS && magnetS.getAttribute('type') === 'BusinessFunction') && (magnetT && magnetT.getAttribute('type') === 'ArchimateElement');
        var VAL_30ed9c6c = (magnetS && magnetS.getAttribute('type') === 'BusinessFunction') && (magnetT && magnetT.getAttribute('type') === 'Product');
        var VAL_782a4fff = (magnetS && magnetS.getAttribute('type') === 'BusinessFunction') && (magnetT && magnetT.getAttribute('type') === 'BusinessObject');
        var VAL_46c670a6 = (magnetS && magnetS.getAttribute('type') === 'BusinessFunction') && (magnetT && magnetT.getAttribute('type') === 'Meaning');
        var VAL_59fc684e = (magnetS && magnetS.getAttribute('type') === 'BusinessFunction') && (magnetT && magnetT.getAttribute('type') === 'Representation');
        var VAL_5ae81e1 = (magnetS && magnetS.getAttribute('type') === 'BusinessFunction') && (magnetT && magnetT.getAttribute('type') === 'BusinessService');
        var VAL_2fd1731c = (magnetS && magnetS.getAttribute('type') === 'BusinessFunction') && (magnetT && magnetT.getAttribute('type') === 'BusinessProcess');
        var VAL_5ae76500 = (magnetS && magnetS.getAttribute('type') === 'BusinessFunction') && (magnetT && magnetT.getAttribute('type') === 'BusinessFunction');
        var VAL_6063d80a = (magnetS && magnetS.getAttribute('type') === 'BusinessFunction') && (magnetT && magnetT.getAttribute('type') === 'BusinessInteraction');
        var VAL_1133ec6e = (magnetS && magnetS.getAttribute('type') === 'BusinessFunction') && (magnetT && magnetT.getAttribute('type') === 'BusinessEvent');
        var VAL_355e34c7 = (magnetS && magnetS.getAttribute('type') === 'BusinessFunction') && (magnetT && magnetT.getAttribute('type') === 'Location');
        var VAL_54709809 = (magnetS && magnetS.getAttribute('type') === 'BusinessFunction') && (magnetT && magnetT.getAttribute('type') === 'BusinessInterface');
        var VAL_2a2da905 = (magnetS && magnetS.getAttribute('type') === 'BusinessFunction') && (magnetT && magnetT.getAttribute('type') === 'BusinessRole');
        var VAL_24f360b2 = (magnetS && magnetS.getAttribute('type') === 'BusinessFunction') && (magnetT && magnetT.getAttribute('type') === 'BusinessCollaboration');
        var VAL_60cf80e7 = (magnetS && magnetS.getAttribute('type') === 'BusinessFunction') && (magnetT && magnetT.getAttribute('type') === 'BusinessActor');
        var VAL_302fec27 = (magnetS && magnetS.getAttribute('type') === 'BusinessFunction') && (magnetT && magnetT.getAttribute('type') === 'DataObject');
        var VAL_770d0ea6 = (magnetS && magnetS.getAttribute('type') === 'BusinessFunction') && (magnetT && magnetT.getAttribute('type') === 'ApplicationService');
        var VAL_48c40605 = (magnetS && magnetS.getAttribute('type') === 'BusinessFunction') && (magnetT && magnetT.getAttribute('type') === 'ApplicationFunction');
        var VAL_54107f42 = (magnetS && magnetS.getAttribute('type') === 'BusinessFunction') && (magnetT && magnetT.getAttribute('type') === 'ApplicationInteraction');
        var VAL_1b11ef33 = (magnetS && magnetS.getAttribute('type') === 'BusinessFunction') && (magnetT && magnetT.getAttribute('type') === 'ApplicationInterface');
        var VAL_476aac9 = (magnetS && magnetS.getAttribute('type') === 'BusinessFunction') && (magnetT && magnetT.getAttribute('type') === 'ApplicationComponent');
        var VAL_6cea706c = (magnetS && magnetS.getAttribute('type') === 'BusinessFunction') && (magnetT && magnetT.getAttribute('type') === 'ApplicationCollaboration');
        var VAL_3bd7f8dc = (magnetS && magnetS.getAttribute('type') === 'BusinessFunction') && (magnetT && magnetT.getAttribute('type') === 'Artifact');
        var VAL_2f2bf0e2 = (magnetS && magnetS.getAttribute('type') === 'BusinessFunction') && (magnetT && magnetT.getAttribute('type') === 'InfrastructureService');
        var VAL_1eba372c = (magnetS && magnetS.getAttribute('type') === 'BusinessFunction') && (magnetT && magnetT.getAttribute('type') === 'InfrastructureInterface');
        var VAL_21ec5d87 = (magnetS && magnetS.getAttribute('type') === 'BusinessFunction') && (magnetT && magnetT.getAttribute('type') === 'Node');
        var VAL_25f9407e = (magnetS && magnetS.getAttribute('type') === 'BusinessFunction') && (magnetT && magnetT.getAttribute('type') === 'SystemSoftware');
        var VAL_552518c3 = (magnetS && magnetS.getAttribute('type') === 'BusinessFunction') && (magnetT && magnetT.getAttribute('type') === 'Device');
        var VAL_1a69561c = (magnetS && magnetS.getAttribute('type') === 'BusinessFunction') && (magnetT && magnetT.getAttribute('type') === 'CommunicationPath');
        var VAL_59aa20b3 = (magnetS && magnetS.getAttribute('type') === 'BusinessFunction') && (magnetT && magnetT.getAttribute('type') === 'Network');
        var VAL_363f6148 = (magnetS && magnetS.getAttribute('type') === 'BusinessFunction') && (magnetT && magnetT.getAttribute('type') === 'Stakeholder');
        var VAL_4b21844c = (magnetS && magnetS.getAttribute('type') === 'BusinessFunction') && (magnetT && magnetT.getAttribute('type') === 'Driver');
        var VAL_1b28f282 = (magnetS && magnetS.getAttribute('type') === 'BusinessFunction') && (magnetT && magnetT.getAttribute('type') === 'Assessment');
        var VAL_138fe6ec = (magnetS && magnetS.getAttribute('type') === 'BusinessFunction') && (magnetT && magnetT.getAttribute('type') === 'Goal');
        var VAL_5e77f0f4 = (magnetS && magnetS.getAttribute('type') === 'BusinessFunction') && (magnetT && magnetT.getAttribute('type') === 'Requirement');
        var VAL_19b30c92 = (magnetS && magnetS.getAttribute('type') === 'BusinessFunction') && (magnetT && magnetT.getAttribute('type') === 'Constraint');
        var VAL_455351c4 = (magnetS && magnetS.getAttribute('type') === 'BusinessFunction') && (magnetT && magnetT.getAttribute('type') === 'Principle');
        var VAL_29876704 = (magnetS && magnetS.getAttribute('type') === 'BusinessFunction') && (magnetT && magnetT.getAttribute('type') === 'WorkPackage');
        var VAL_4816c290 = (magnetS && magnetS.getAttribute('type') === 'BusinessFunction') && (magnetT && magnetT.getAttribute('type') === 'Deliverable');
        var VAL_4940809c = (magnetS && magnetS.getAttribute('type') === 'BusinessFunction') && (magnetT && magnetT.getAttribute('type') === 'Plateau');
        var VAL_16423501 = (magnetS && magnetS.getAttribute('type') === 'BusinessFunction') && (magnetT && magnetT.getAttribute('type') === 'Gap');
        var VAL_4efcf8a = (magnetS && magnetS.getAttribute('type') === 'BusinessInteraction') && (magnetT && magnetT.getAttribute('type') === 'ArchimateElement');
        var VAL_7a138fc5 = (magnetS && magnetS.getAttribute('type') === 'BusinessInteraction') && (magnetT && magnetT.getAttribute('type') === 'Product');
        var VAL_379ab47b = (magnetS && magnetS.getAttribute('type') === 'BusinessInteraction') && (magnetT && magnetT.getAttribute('type') === 'BusinessObject');
        var VAL_307765b4 = (magnetS && magnetS.getAttribute('type') === 'BusinessInteraction') && (magnetT && magnetT.getAttribute('type') === 'Meaning');
        var VAL_4a9e6faf = (magnetS && magnetS.getAttribute('type') === 'BusinessInteraction') && (magnetT && magnetT.getAttribute('type') === 'Representation');
        var VAL_2c95ac9e = (magnetS && magnetS.getAttribute('type') === 'BusinessInteraction') && (magnetT && magnetT.getAttribute('type') === 'BusinessService');
        var VAL_4e4efc1b = (magnetS && magnetS.getAttribute('type') === 'BusinessInteraction') && (magnetT && magnetT.getAttribute('type') === 'BusinessProcess');
        var VAL_459f7aa3 = (magnetS && magnetS.getAttribute('type') === 'BusinessInteraction') && (magnetT && magnetT.getAttribute('type') === 'BusinessFunction');
        var VAL_7cc586a8 = (magnetS && magnetS.getAttribute('type') === 'BusinessInteraction') && (magnetT && magnetT.getAttribute('type') === 'BusinessInteraction');
        var VAL_7db534f2 = (magnetS && magnetS.getAttribute('type') === 'BusinessInteraction') && (magnetT && magnetT.getAttribute('type') === 'BusinessEvent');
        var VAL_44a2b17b = (magnetS && magnetS.getAttribute('type') === 'BusinessInteraction') && (magnetT && magnetT.getAttribute('type') === 'Location');
        var VAL_7a56812e = (magnetS && magnetS.getAttribute('type') === 'BusinessInteraction') && (magnetT && magnetT.getAttribute('type') === 'BusinessInterface');
        var VAL_2a76b80a = (magnetS && magnetS.getAttribute('type') === 'BusinessInteraction') && (magnetT && magnetT.getAttribute('type') === 'BusinessRole');
        var VAL_7eb01b12 = (magnetS && magnetS.getAttribute('type') === 'BusinessInteraction') && (magnetT && magnetT.getAttribute('type') === 'BusinessCollaboration');
        var VAL_2f4854d6 = (magnetS && magnetS.getAttribute('type') === 'BusinessInteraction') && (magnetT && magnetT.getAttribute('type') === 'BusinessActor');
        var VAL_61d9efe0 = (magnetS && magnetS.getAttribute('type') === 'BusinessInteraction') && (magnetT && magnetT.getAttribute('type') === 'DataObject');
        var VAL_7e70bd39 = (magnetS && magnetS.getAttribute('type') === 'BusinessInteraction') && (magnetT && magnetT.getAttribute('type') === 'ApplicationService');
        var VAL_e6516e = (magnetS && magnetS.getAttribute('type') === 'BusinessInteraction') && (magnetT && magnetT.getAttribute('type') === 'ApplicationFunction');
        var VAL_6de54b40 = (magnetS && magnetS.getAttribute('type') === 'BusinessInteraction') && (magnetT && magnetT.getAttribute('type') === 'ApplicationInteraction');
        var VAL_43ed0ff3 = (magnetS && magnetS.getAttribute('type') === 'BusinessInteraction') && (magnetT && magnetT.getAttribute('type') === 'ApplicationInterface');
        var VAL_388ffbc2 = (magnetS && magnetS.getAttribute('type') === 'BusinessInteraction') && (magnetT && magnetT.getAttribute('type') === 'ApplicationComponent');
        var VAL_a50b09c = (magnetS && magnetS.getAttribute('type') === 'BusinessInteraction') && (magnetT && magnetT.getAttribute('type') === 'ApplicationCollaboration');
        var VAL_4da855dd = (magnetS && magnetS.getAttribute('type') === 'BusinessInteraction') && (magnetT && magnetT.getAttribute('type') === 'Artifact');
        var VAL_6691490c = (magnetS && magnetS.getAttribute('type') === 'BusinessInteraction') && (magnetT && magnetT.getAttribute('type') === 'InfrastructureService');
        var VAL_2187fff7 = (magnetS && magnetS.getAttribute('type') === 'BusinessInteraction') && (magnetT && magnetT.getAttribute('type') === 'InfrastructureInterface');
        var VAL_2e5c7f0b = (magnetS && magnetS.getAttribute('type') === 'BusinessInteraction') && (magnetT && magnetT.getAttribute('type') === 'Node');
        var VAL_21d5c1a0 = (magnetS && magnetS.getAttribute('type') === 'BusinessInteraction') && (magnetT && magnetT.getAttribute('type') === 'SystemSoftware');
        var VAL_4de025bf = (magnetS && magnetS.getAttribute('type') === 'BusinessInteraction') && (magnetT && magnetT.getAttribute('type') === 'Device');
        var VAL_538613b3 = (magnetS && magnetS.getAttribute('type') === 'BusinessInteraction') && (magnetT && magnetT.getAttribute('type') === 'CommunicationPath');
        var VAL_1eef9aef = (magnetS && magnetS.getAttribute('type') === 'BusinessInteraction') && (magnetT && magnetT.getAttribute('type') === 'Network');
        var VAL_11389053 = (magnetS && magnetS.getAttribute('type') === 'BusinessInteraction') && (magnetT && magnetT.getAttribute('type') === 'Stakeholder');
        var VAL_5db99216 = (magnetS && magnetS.getAttribute('type') === 'BusinessInteraction') && (magnetT && magnetT.getAttribute('type') === 'Driver');
        var VAL_3ec11999 = (magnetS && magnetS.getAttribute('type') === 'BusinessInteraction') && (magnetT && magnetT.getAttribute('type') === 'Assessment');
        var VAL_5c1bd44c = (magnetS && magnetS.getAttribute('type') === 'BusinessInteraction') && (magnetT && magnetT.getAttribute('type') === 'Goal');
        var VAL_9f46d94 = (magnetS && magnetS.getAttribute('type') === 'BusinessInteraction') && (magnetT && magnetT.getAttribute('type') === 'Requirement');
        var VAL_18cc679e = (magnetS && magnetS.getAttribute('type') === 'BusinessInteraction') && (magnetT && magnetT.getAttribute('type') === 'Constraint');
        var VAL_2e77b8cf = (magnetS && magnetS.getAttribute('type') === 'BusinessInteraction') && (magnetT && magnetT.getAttribute('type') === 'Principle');
        var VAL_2c4ca0f9 = (magnetS && magnetS.getAttribute('type') === 'BusinessInteraction') && (magnetT && magnetT.getAttribute('type') === 'WorkPackage');
        var VAL_67ef029 = (magnetS && magnetS.getAttribute('type') === 'BusinessInteraction') && (magnetT && magnetT.getAttribute('type') === 'Deliverable');
        var VAL_7df587ef = (magnetS && magnetS.getAttribute('type') === 'BusinessInteraction') && (magnetT && magnetT.getAttribute('type') === 'Plateau');
        var VAL_6e57e95e = (magnetS && magnetS.getAttribute('type') === 'BusinessInteraction') && (magnetT && magnetT.getAttribute('type') === 'Gap');
        var VAL_2755d705 = (magnetS && magnetS.getAttribute('type') === 'BusinessEvent') && (magnetT && magnetT.getAttribute('type') === 'ArchimateElement');
        var VAL_56db847e = (magnetS && magnetS.getAttribute('type') === 'BusinessEvent') && (magnetT && magnetT.getAttribute('type') === 'Product');
        var VAL_740abb5 = (magnetS && magnetS.getAttribute('type') === 'BusinessEvent') && (magnetT && magnetT.getAttribute('type') === 'BusinessObject');
        var VAL_560cbf1a = (magnetS && magnetS.getAttribute('type') === 'BusinessEvent') && (magnetT && magnetT.getAttribute('type') === 'Meaning');
        var VAL_5fe8b721 = (magnetS && magnetS.getAttribute('type') === 'BusinessEvent') && (magnetT && magnetT.getAttribute('type') === 'Representation');
        var VAL_551a20d6 = (magnetS && magnetS.getAttribute('type') === 'BusinessEvent') && (magnetT && magnetT.getAttribute('type') === 'BusinessService');
        var VAL_578524c3 = (magnetS && magnetS.getAttribute('type') === 'BusinessEvent') && (magnetT && magnetT.getAttribute('type') === 'BusinessProcess');
        var VAL_64c2b546 = (magnetS && magnetS.getAttribute('type') === 'BusinessEvent') && (magnetT && magnetT.getAttribute('type') === 'BusinessFunction');
        var VAL_7e094740 = (magnetS && magnetS.getAttribute('type') === 'BusinessEvent') && (magnetT && magnetT.getAttribute('type') === 'BusinessInteraction');
        var VAL_7a11c4c7 = (magnetS && magnetS.getAttribute('type') === 'BusinessEvent') && (magnetT && magnetT.getAttribute('type') === 'BusinessEvent');
        var VAL_4cc547a = (magnetS && magnetS.getAttribute('type') === 'BusinessEvent') && (magnetT && magnetT.getAttribute('type') === 'Location');
        var VAL_7555b920 = (magnetS && magnetS.getAttribute('type') === 'BusinessEvent') && (magnetT && magnetT.getAttribute('type') === 'BusinessInterface');
        var VAL_4152d38d = (magnetS && magnetS.getAttribute('type') === 'BusinessEvent') && (magnetT && magnetT.getAttribute('type') === 'BusinessRole');
        var VAL_3591009c = (magnetS && magnetS.getAttribute('type') === 'BusinessEvent') && (magnetT && magnetT.getAttribute('type') === 'BusinessCollaboration');
        var VAL_5398edd0 = (magnetS && magnetS.getAttribute('type') === 'BusinessEvent') && (magnetT && magnetT.getAttribute('type') === 'BusinessActor');
        var VAL_b5cc23a = (magnetS && magnetS.getAttribute('type') === 'BusinessEvent') && (magnetT && magnetT.getAttribute('type') === 'DataObject');
        var VAL_5cc5b667 = (magnetS && magnetS.getAttribute('type') === 'BusinessEvent') && (magnetT && magnetT.getAttribute('type') === 'ApplicationService');
        var VAL_61edc883 = (magnetS && magnetS.getAttribute('type') === 'BusinessEvent') && (magnetT && magnetT.getAttribute('type') === 'ApplicationFunction');
        var VAL_758f4f03 = (magnetS && magnetS.getAttribute('type') === 'BusinessEvent') && (magnetT && magnetT.getAttribute('type') === 'ApplicationInteraction');
        var VAL_182f1e9a = (magnetS && magnetS.getAttribute('type') === 'BusinessEvent') && (magnetT && magnetT.getAttribute('type') === 'ApplicationInterface');
        var VAL_6928f576 = (magnetS && magnetS.getAttribute('type') === 'BusinessEvent') && (magnetT && magnetT.getAttribute('type') === 'ApplicationComponent');
        var VAL_660e9100 = (magnetS && magnetS.getAttribute('type') === 'BusinessEvent') && (magnetT && magnetT.getAttribute('type') === 'ApplicationCollaboration');
        var VAL_69f63d95 = (magnetS && magnetS.getAttribute('type') === 'BusinessEvent') && (magnetT && magnetT.getAttribute('type') === 'Artifact');
        var VAL_9cd25ff = (magnetS && magnetS.getAttribute('type') === 'BusinessEvent') && (magnetT && magnetT.getAttribute('type') === 'InfrastructureService');
        var VAL_27e0f2f5 = (magnetS && magnetS.getAttribute('type') === 'BusinessEvent') && (magnetT && magnetT.getAttribute('type') === 'InfrastructureInterface');
        var VAL_3574e198 = (magnetS && magnetS.getAttribute('type') === 'BusinessEvent') && (magnetT && magnetT.getAttribute('type') === 'Node');
        var VAL_6db66836 = (magnetS && magnetS.getAttribute('type') === 'BusinessEvent') && (magnetT && magnetT.getAttribute('type') === 'SystemSoftware');
        var VAL_db44aa2 = (magnetS && magnetS.getAttribute('type') === 'BusinessEvent') && (magnetT && magnetT.getAttribute('type') === 'Device');
        var VAL_2de366bb = (magnetS && magnetS.getAttribute('type') === 'BusinessEvent') && (magnetT && magnetT.getAttribute('type') === 'CommunicationPath');
        var VAL_3f093abe = (magnetS && magnetS.getAttribute('type') === 'BusinessEvent') && (magnetT && magnetT.getAttribute('type') === 'Network');
        var VAL_61a002b1 = (magnetS && magnetS.getAttribute('type') === 'BusinessEvent') && (magnetT && magnetT.getAttribute('type') === 'Stakeholder');
        var VAL_4eeea57d = (magnetS && magnetS.getAttribute('type') === 'BusinessEvent') && (magnetT && magnetT.getAttribute('type') === 'Driver');
        var VAL_780ec4a5 = (magnetS && magnetS.getAttribute('type') === 'BusinessEvent') && (magnetT && magnetT.getAttribute('type') === 'Assessment');
        var VAL_e24ddd0 = (magnetS && magnetS.getAttribute('type') === 'BusinessEvent') && (magnetT && magnetT.getAttribute('type') === 'Goal');
        var VAL_6f70f32f = (magnetS && magnetS.getAttribute('type') === 'BusinessEvent') && (magnetT && magnetT.getAttribute('type') === 'Requirement');
        var VAL_548e76f1 = (magnetS && magnetS.getAttribute('type') === 'BusinessEvent') && (magnetT && magnetT.getAttribute('type') === 'Constraint');
        var VAL_5aabbb29 = (magnetS && magnetS.getAttribute('type') === 'BusinessEvent') && (magnetT && magnetT.getAttribute('type') === 'Principle');
        var VAL_72c927f1 = (magnetS && magnetS.getAttribute('type') === 'BusinessEvent') && (magnetT && magnetT.getAttribute('type') === 'WorkPackage');
        var VAL_1ac85b0c = (magnetS && magnetS.getAttribute('type') === 'BusinessEvent') && (magnetT && magnetT.getAttribute('type') === 'Deliverable');
        var VAL_3dd69f5a = (magnetS && magnetS.getAttribute('type') === 'BusinessEvent') && (magnetT && magnetT.getAttribute('type') === 'Plateau');
        var VAL_3aa3193a = (magnetS && magnetS.getAttribute('type') === 'BusinessEvent') && (magnetT && magnetT.getAttribute('type') === 'Gap');
        var VAL_1ee4730 = (magnetS && magnetS.getAttribute('type') === 'Location') && (magnetT && magnetT.getAttribute('type') === 'ArchimateElement');
        var VAL_59a67c3a = (magnetS && magnetS.getAttribute('type') === 'Location') && (magnetT && magnetT.getAttribute('type') === 'Product');
        var VAL_5003041b = (magnetS && magnetS.getAttribute('type') === 'Location') && (magnetT && magnetT.getAttribute('type') === 'BusinessObject');
        var VAL_724bade8 = (magnetS && magnetS.getAttribute('type') === 'Location') && (magnetT && magnetT.getAttribute('type') === 'Meaning');
        var VAL_16fb356 = (magnetS && magnetS.getAttribute('type') === 'Location') && (magnetT && magnetT.getAttribute('type') === 'Representation');
        var VAL_6bc248ed = (magnetS && magnetS.getAttribute('type') === 'Location') && (magnetT && magnetT.getAttribute('type') === 'BusinessService');
        var VAL_23a9ba52 = (magnetS && magnetS.getAttribute('type') === 'Location') && (magnetT && magnetT.getAttribute('type') === 'BusinessProcess');
        var VAL_ca27722 = (magnetS && magnetS.getAttribute('type') === 'Location') && (magnetT && magnetT.getAttribute('type') === 'BusinessFunction');
        var VAL_70ab80e3 = (magnetS && magnetS.getAttribute('type') === 'Location') && (magnetT && magnetT.getAttribute('type') === 'BusinessInteraction');
        var VAL_9573b3b = (magnetS && magnetS.getAttribute('type') === 'Location') && (magnetT && magnetT.getAttribute('type') === 'BusinessEvent');
        var VAL_67427b69 = (magnetS && magnetS.getAttribute('type') === 'Location') && (magnetT && magnetT.getAttribute('type') === 'Location');
        var VAL_78461bc4 = (magnetS && magnetS.getAttribute('type') === 'Location') && (magnetT && magnetT.getAttribute('type') === 'BusinessInterface');
        var VAL_544630b7 = (magnetS && magnetS.getAttribute('type') === 'Location') && (magnetT && magnetT.getAttribute('type') === 'BusinessRole');
        var VAL_64f857e7 = (magnetS && magnetS.getAttribute('type') === 'Location') && (magnetT && magnetT.getAttribute('type') === 'BusinessCollaboration');
        var VAL_1095f122 = (magnetS && magnetS.getAttribute('type') === 'Location') && (magnetT && magnetT.getAttribute('type') === 'BusinessActor');
        var VAL_58c540cf = (magnetS && magnetS.getAttribute('type') === 'Location') && (magnetT && magnetT.getAttribute('type') === 'DataObject');
        var VAL_3d6300e8 = (magnetS && magnetS.getAttribute('type') === 'Location') && (magnetT && magnetT.getAttribute('type') === 'ApplicationService');
        var VAL_1b822fcc = (magnetS && magnetS.getAttribute('type') === 'Location') && (magnetT && magnetT.getAttribute('type') === 'ApplicationFunction');
        var VAL_24a1c17f = (magnetS && magnetS.getAttribute('type') === 'Location') && (magnetT && magnetT.getAttribute('type') === 'ApplicationInteraction');
        var VAL_56102e1c = (magnetS && magnetS.getAttribute('type') === 'Location') && (magnetT && magnetT.getAttribute('type') === 'ApplicationInterface');
        var VAL_73511076 = (magnetS && magnetS.getAttribute('type') === 'Location') && (magnetT && magnetT.getAttribute('type') === 'ApplicationComponent');
        var VAL_7927bd9f = (magnetS && magnetS.getAttribute('type') === 'Location') && (magnetT && magnetT.getAttribute('type') === 'ApplicationCollaboration');
        var VAL_532721fd = (magnetS && magnetS.getAttribute('type') === 'Location') && (magnetT && magnetT.getAttribute('type') === 'Artifact');
        var VAL_410954b = (magnetS && magnetS.getAttribute('type') === 'Location') && (magnetT && magnetT.getAttribute('type') === 'InfrastructureService');
        var VAL_7fb9f71f = (magnetS && magnetS.getAttribute('type') === 'Location') && (magnetT && magnetT.getAttribute('type') === 'InfrastructureInterface');
        var VAL_3b366632 = (magnetS && magnetS.getAttribute('type') === 'Location') && (magnetT && magnetT.getAttribute('type') === 'Node');
        var VAL_51f49060 = (magnetS && magnetS.getAttribute('type') === 'Location') && (magnetT && magnetT.getAttribute('type') === 'SystemSoftware');
        var VAL_514eedd8 = (magnetS && magnetS.getAttribute('type') === 'Location') && (magnetT && magnetT.getAttribute('type') === 'Device');
        var VAL_617fe9e1 = (magnetS && magnetS.getAttribute('type') === 'Location') && (magnetT && magnetT.getAttribute('type') === 'CommunicationPath');
        var VAL_6970140a = (magnetS && magnetS.getAttribute('type') === 'Location') && (magnetT && magnetT.getAttribute('type') === 'Network');
        var VAL_1cf2fed4 = (magnetS && magnetS.getAttribute('type') === 'Location') && (magnetT && magnetT.getAttribute('type') === 'Stakeholder');
        var VAL_3af4e0bf = (magnetS && magnetS.getAttribute('type') === 'Location') && (magnetT && magnetT.getAttribute('type') === 'Driver');
        var VAL_245a26e1 = (magnetS && magnetS.getAttribute('type') === 'Location') && (magnetT && magnetT.getAttribute('type') === 'Assessment');
        var VAL_4d63b624 = (magnetS && magnetS.getAttribute('type') === 'Location') && (magnetT && magnetT.getAttribute('type') === 'Goal');
        var VAL_466cf502 = (magnetS && magnetS.getAttribute('type') === 'Location') && (magnetT && magnetT.getAttribute('type') === 'Requirement');
        var VAL_5b800468 = (magnetS && magnetS.getAttribute('type') === 'Location') && (magnetT && magnetT.getAttribute('type') === 'Constraint');
        var VAL_2e185cd7 = (magnetS && magnetS.getAttribute('type') === 'Location') && (magnetT && magnetT.getAttribute('type') === 'Principle');
        var VAL_7e1a1da6 = (magnetS && magnetS.getAttribute('type') === 'Location') && (magnetT && magnetT.getAttribute('type') === 'WorkPackage');
        var VAL_5f7f2382 = (magnetS && magnetS.getAttribute('type') === 'Location') && (magnetT && magnetT.getAttribute('type') === 'Deliverable');
        var VAL_407cf41 = (magnetS && magnetS.getAttribute('type') === 'Location') && (magnetT && magnetT.getAttribute('type') === 'Plateau');
        var VAL_6815c5f2 = (magnetS && magnetS.getAttribute('type') === 'Location') && (magnetT && magnetT.getAttribute('type') === 'Gap');
        var VAL_46cc127b = (magnetS && magnetS.getAttribute('type') === 'BusinessInterface') && (magnetT && magnetT.getAttribute('type') === 'ArchimateElement');
        var VAL_60094a13 = (magnetS && magnetS.getAttribute('type') === 'BusinessInterface') && (magnetT && magnetT.getAttribute('type') === 'Product');
        var VAL_5aceec94 = (magnetS && magnetS.getAttribute('type') === 'BusinessInterface') && (magnetT && magnetT.getAttribute('type') === 'BusinessObject');
        var VAL_1c32886a = (magnetS && magnetS.getAttribute('type') === 'BusinessInterface') && (magnetT && magnetT.getAttribute('type') === 'Meaning');
        var VAL_3a4b0e5d = (magnetS && magnetS.getAttribute('type') === 'BusinessInterface') && (magnetT && magnetT.getAttribute('type') === 'Representation');
        var VAL_10b892d5 = (magnetS && magnetS.getAttribute('type') === 'BusinessInterface') && (magnetT && magnetT.getAttribute('type') === 'BusinessService');
        var VAL_3d3f761a = (magnetS && magnetS.getAttribute('type') === 'BusinessInterface') && (magnetT && magnetT.getAttribute('type') === 'BusinessProcess');
        var VAL_3546d80f = (magnetS && magnetS.getAttribute('type') === 'BusinessInterface') && (magnetT && magnetT.getAttribute('type') === 'BusinessFunction');
        var VAL_579d011c = (magnetS && magnetS.getAttribute('type') === 'BusinessInterface') && (magnetT && magnetT.getAttribute('type') === 'BusinessInteraction');
        var VAL_3670f00 = (magnetS && magnetS.getAttribute('type') === 'BusinessInterface') && (magnetT && magnetT.getAttribute('type') === 'BusinessEvent');
        var VAL_452e26d0 = (magnetS && magnetS.getAttribute('type') === 'BusinessInterface') && (magnetT && magnetT.getAttribute('type') === 'Location');
        var VAL_46ab18da = (magnetS && magnetS.getAttribute('type') === 'BusinessInterface') && (magnetT && magnetT.getAttribute('type') === 'BusinessInterface');
        var VAL_790174f2 = (magnetS && magnetS.getAttribute('type') === 'BusinessInterface') && (magnetT && magnetT.getAttribute('type') === 'BusinessRole');
        var VAL_42257bdd = (magnetS && magnetS.getAttribute('type') === 'BusinessInterface') && (magnetT && magnetT.getAttribute('type') === 'BusinessCollaboration');
        var VAL_7689ddef = (magnetS && magnetS.getAttribute('type') === 'BusinessInterface') && (magnetT && magnetT.getAttribute('type') === 'BusinessActor');
        var VAL_687a762c = (magnetS && magnetS.getAttribute('type') === 'BusinessInterface') && (magnetT && magnetT.getAttribute('type') === 'DataObject');
        var VAL_1a2e2935 = (magnetS && magnetS.getAttribute('type') === 'BusinessInterface') && (magnetT && magnetT.getAttribute('type') === 'ApplicationService');
        var VAL_733c423e = (magnetS && magnetS.getAttribute('type') === 'BusinessInterface') && (magnetT && magnetT.getAttribute('type') === 'ApplicationFunction');
        var VAL_4b629f13 = (magnetS && magnetS.getAttribute('type') === 'BusinessInterface') && (magnetT && magnetT.getAttribute('type') === 'ApplicationInteraction');
        var VAL_70925b45 = (magnetS && magnetS.getAttribute('type') === 'BusinessInterface') && (magnetT && magnetT.getAttribute('type') === 'ApplicationInterface');
        var VAL_1b9ea3e3 = (magnetS && magnetS.getAttribute('type') === 'BusinessInterface') && (magnetT && magnetT.getAttribute('type') === 'ApplicationComponent');
        var VAL_aa22f1c = (magnetS && magnetS.getAttribute('type') === 'BusinessInterface') && (magnetT && magnetT.getAttribute('type') === 'ApplicationCollaboration');
        var VAL_55e7a35c = (magnetS && magnetS.getAttribute('type') === 'BusinessInterface') && (magnetT && magnetT.getAttribute('type') === 'Artifact');
        var VAL_37cd92d6 = (magnetS && magnetS.getAttribute('type') === 'BusinessInterface') && (magnetT && magnetT.getAttribute('type') === 'InfrastructureService');
        var VAL_5922ae77 = (magnetS && magnetS.getAttribute('type') === 'BusinessInterface') && (magnetT && magnetT.getAttribute('type') === 'InfrastructureInterface');
        var VAL_4263b080 = (magnetS && magnetS.getAttribute('type') === 'BusinessInterface') && (magnetT && magnetT.getAttribute('type') === 'Node');
        var VAL_2af616d3 = (magnetS && magnetS.getAttribute('type') === 'BusinessInterface') && (magnetT && magnetT.getAttribute('type') === 'SystemSoftware');
        var VAL_71f67a79 = (magnetS && magnetS.getAttribute('type') === 'BusinessInterface') && (magnetT && magnetT.getAttribute('type') === 'Device');
        var VAL_3deb2326 = (magnetS && magnetS.getAttribute('type') === 'BusinessInterface') && (magnetT && magnetT.getAttribute('type') === 'CommunicationPath');
        var VAL_62d363ab = (magnetS && magnetS.getAttribute('type') === 'BusinessInterface') && (magnetT && magnetT.getAttribute('type') === 'Network');
        var VAL_7889a1ac = (magnetS && magnetS.getAttribute('type') === 'BusinessInterface') && (magnetT && magnetT.getAttribute('type') === 'Stakeholder');
        var VAL_3aee3976 = (magnetS && magnetS.getAttribute('type') === 'BusinessInterface') && (magnetT && magnetT.getAttribute('type') === 'Driver');
        var VAL_5ef8df1e = (magnetS && magnetS.getAttribute('type') === 'BusinessInterface') && (magnetT && magnetT.getAttribute('type') === 'Assessment');
        var VAL_27cf3151 = (magnetS && magnetS.getAttribute('type') === 'BusinessInterface') && (magnetT && magnetT.getAttribute('type') === 'Goal');
        var VAL_127e70c5 = (magnetS && magnetS.getAttribute('type') === 'BusinessInterface') && (magnetT && magnetT.getAttribute('type') === 'Requirement');
        var VAL_5910de75 = (magnetS && magnetS.getAttribute('type') === 'BusinessInterface') && (magnetT && magnetT.getAttribute('type') === 'Constraint');
        var VAL_4108fa66 = (magnetS && magnetS.getAttribute('type') === 'BusinessInterface') && (magnetT && magnetT.getAttribute('type') === 'Principle');
        var VAL_1f130eaf = (magnetS && magnetS.getAttribute('type') === 'BusinessInterface') && (magnetT && magnetT.getAttribute('type') === 'WorkPackage');
        var VAL_7e0aadd0 = (magnetS && magnetS.getAttribute('type') === 'BusinessInterface') && (magnetT && magnetT.getAttribute('type') === 'Deliverable');
        var VAL_21362712 = (magnetS && magnetS.getAttribute('type') === 'BusinessInterface') && (magnetT && magnetT.getAttribute('type') === 'Plateau');
        var VAL_27eb3298 = (magnetS && magnetS.getAttribute('type') === 'BusinessInterface') && (magnetT && magnetT.getAttribute('type') === 'Gap');
        var VAL_200a26bc = (magnetS && magnetS.getAttribute('type') === 'BusinessRole') && (magnetT && magnetT.getAttribute('type') === 'ArchimateElement');
        var VAL_bc57b40 = (magnetS && magnetS.getAttribute('type') === 'BusinessRole') && (magnetT && magnetT.getAttribute('type') === 'Product');
        var VAL_1b5bc39d = (magnetS && magnetS.getAttribute('type') === 'BusinessRole') && (magnetT && magnetT.getAttribute('type') === 'BusinessObject');
        var VAL_655a5d9c = (magnetS && magnetS.getAttribute('type') === 'BusinessRole') && (magnetT && magnetT.getAttribute('type') === 'Meaning');
        var VAL_1494b84d = (magnetS && magnetS.getAttribute('type') === 'BusinessRole') && (magnetT && magnetT.getAttribute('type') === 'Representation');
        var VAL_34abdee4 = (magnetS && magnetS.getAttribute('type') === 'BusinessRole') && (magnetT && magnetT.getAttribute('type') === 'BusinessService');
        var VAL_71a9b4c7 = (magnetS && magnetS.getAttribute('type') === 'BusinessRole') && (magnetT && magnetT.getAttribute('type') === 'BusinessProcess');
        var VAL_4628b1d3 = (magnetS && magnetS.getAttribute('type') === 'BusinessRole') && (magnetT && magnetT.getAttribute('type') === 'BusinessFunction');
        var VAL_77cf3f8b = (magnetS && magnetS.getAttribute('type') === 'BusinessRole') && (magnetT && magnetT.getAttribute('type') === 'BusinessInteraction');
        var VAL_1df98368 = (magnetS && magnetS.getAttribute('type') === 'BusinessRole') && (magnetT && magnetT.getAttribute('type') === 'BusinessEvent');
        var VAL_21ca139c = (magnetS && magnetS.getAttribute('type') === 'BusinessRole') && (magnetT && magnetT.getAttribute('type') === 'Location');
        var VAL_226f885f = (magnetS && magnetS.getAttribute('type') === 'BusinessRole') && (magnetT && magnetT.getAttribute('type') === 'BusinessInterface');
        var VAL_2cd2c8fe = (magnetS && magnetS.getAttribute('type') === 'BusinessRole') && (magnetT && magnetT.getAttribute('type') === 'BusinessRole');
        var VAL_7d61eccf = (magnetS && magnetS.getAttribute('type') === 'BusinessRole') && (magnetT && magnetT.getAttribute('type') === 'BusinessCollaboration');
        var VAL_cc6460c = (magnetS && magnetS.getAttribute('type') === 'BusinessRole') && (magnetT && magnetT.getAttribute('type') === 'BusinessActor');
        var VAL_52350abb = (magnetS && magnetS.getAttribute('type') === 'BusinessRole') && (magnetT && magnetT.getAttribute('type') === 'DataObject');
        var VAL_681aad3b = (magnetS && magnetS.getAttribute('type') === 'BusinessRole') && (magnetT && magnetT.getAttribute('type') === 'ApplicationService');
        var VAL_1a6f2363 = (magnetS && magnetS.getAttribute('type') === 'BusinessRole') && (magnetT && magnetT.getAttribute('type') === 'ApplicationFunction');
        var VAL_2427e004 = (magnetS && magnetS.getAttribute('type') === 'BusinessRole') && (magnetT && magnetT.getAttribute('type') === 'ApplicationInteraction');
        var VAL_5ebd56e9 = (magnetS && magnetS.getAttribute('type') === 'BusinessRole') && (magnetT && magnetT.getAttribute('type') === 'ApplicationInterface');
        var VAL_63f34b70 = (magnetS && magnetS.getAttribute('type') === 'BusinessRole') && (magnetT && magnetT.getAttribute('type') === 'ApplicationComponent');
        var VAL_641856 = (magnetS && magnetS.getAttribute('type') === 'BusinessRole') && (magnetT && magnetT.getAttribute('type') === 'ApplicationCollaboration');
        var VAL_1b58ff9e = (magnetS && magnetS.getAttribute('type') === 'BusinessRole') && (magnetT && magnetT.getAttribute('type') === 'Artifact');
        var VAL_2f66e802 = (magnetS && magnetS.getAttribute('type') === 'BusinessRole') && (magnetT && magnetT.getAttribute('type') === 'InfrastructureService');
        var VAL_56b78e55 = (magnetS && magnetS.getAttribute('type') === 'BusinessRole') && (magnetT && magnetT.getAttribute('type') === 'InfrastructureInterface');
        var VAL_76318a7d = (magnetS && magnetS.getAttribute('type') === 'BusinessRole') && (magnetT && magnetT.getAttribute('type') === 'Node');
        var VAL_2a492f2a = (magnetS && magnetS.getAttribute('type') === 'BusinessRole') && (magnetT && magnetT.getAttribute('type') === 'SystemSoftware');
        var VAL_3277e499 = (magnetS && magnetS.getAttribute('type') === 'BusinessRole') && (magnetT && magnetT.getAttribute('type') === 'Device');
        var VAL_585811a4 = (magnetS && magnetS.getAttribute('type') === 'BusinessRole') && (magnetT && magnetT.getAttribute('type') === 'CommunicationPath');
        var VAL_22c01ab0 = (magnetS && magnetS.getAttribute('type') === 'BusinessRole') && (magnetT && magnetT.getAttribute('type') === 'Network');
        var VAL_411341bd = (magnetS && magnetS.getAttribute('type') === 'BusinessRole') && (magnetT && magnetT.getAttribute('type') === 'Stakeholder');
        var VAL_4c4d362a = (magnetS && magnetS.getAttribute('type') === 'BusinessRole') && (magnetT && magnetT.getAttribute('type') === 'Driver');
        var VAL_5400db36 = (magnetS && magnetS.getAttribute('type') === 'BusinessRole') && (magnetT && magnetT.getAttribute('type') === 'Assessment');
        var VAL_76b74e9c = (magnetS && magnetS.getAttribute('type') === 'BusinessRole') && (magnetT && magnetT.getAttribute('type') === 'Goal');
        var VAL_2d72f75e = (magnetS && magnetS.getAttribute('type') === 'BusinessRole') && (magnetT && magnetT.getAttribute('type') === 'Requirement');
        var VAL_8ab78bc = (magnetS && magnetS.getAttribute('type') === 'BusinessRole') && (magnetT && magnetT.getAttribute('type') === 'Constraint');
        var VAL_5aa0dbf4 = (magnetS && magnetS.getAttribute('type') === 'BusinessRole') && (magnetT && magnetT.getAttribute('type') === 'Principle');
        var VAL_16afbd92 = (magnetS && magnetS.getAttribute('type') === 'BusinessRole') && (magnetT && magnetT.getAttribute('type') === 'WorkPackage');
        var VAL_2c5d601e = (magnetS && magnetS.getAttribute('type') === 'BusinessRole') && (magnetT && magnetT.getAttribute('type') === 'Deliverable');
        var VAL_7fe083b1 = (magnetS && magnetS.getAttribute('type') === 'BusinessRole') && (magnetT && magnetT.getAttribute('type') === 'Plateau');
        var VAL_23c388c2 = (magnetS && magnetS.getAttribute('type') === 'BusinessRole') && (magnetT && magnetT.getAttribute('type') === 'Gap');
        var VAL_486be205 = (magnetS && magnetS.getAttribute('type') === 'BusinessCollaboration') && (magnetT && magnetT.getAttribute('type') === 'ArchimateElement');
        var VAL_f713686 = (magnetS && magnetS.getAttribute('type') === 'BusinessCollaboration') && (magnetT && magnetT.getAttribute('type') === 'Product');
        var VAL_74f7d1d2 = (magnetS && magnetS.getAttribute('type') === 'BusinessCollaboration') && (magnetT && magnetT.getAttribute('type') === 'BusinessObject');
        var VAL_4b4dd216 = (magnetS && magnetS.getAttribute('type') === 'BusinessCollaboration') && (magnetT && magnetT.getAttribute('type') === 'Meaning');
        var VAL_5ca17ab0 = (magnetS && magnetS.getAttribute('type') === 'BusinessCollaboration') && (magnetT && magnetT.getAttribute('type') === 'Representation');
        var VAL_5a62b2a4 = (magnetS && magnetS.getAttribute('type') === 'BusinessCollaboration') && (magnetT && magnetT.getAttribute('type') === 'BusinessService');
        var VAL_1051817b = (magnetS && magnetS.getAttribute('type') === 'BusinessCollaboration') && (magnetT && magnetT.getAttribute('type') === 'BusinessProcess');
        var VAL_35293c05 = (magnetS && magnetS.getAttribute('type') === 'BusinessCollaboration') && (magnetT && magnetT.getAttribute('type') === 'BusinessFunction');
        var VAL_620aa4ea = (magnetS && magnetS.getAttribute('type') === 'BusinessCollaboration') && (magnetT && magnetT.getAttribute('type') === 'BusinessInteraction');
        var VAL_2db2dd9d = (magnetS && magnetS.getAttribute('type') === 'BusinessCollaboration') && (magnetT && magnetT.getAttribute('type') === 'BusinessEvent');
        var VAL_3174cb09 = (magnetS && magnetS.getAttribute('type') === 'BusinessCollaboration') && (magnetT && magnetT.getAttribute('type') === 'Location');
        var VAL_4d411036 = (magnetS && magnetS.getAttribute('type') === 'BusinessCollaboration') && (magnetT && magnetT.getAttribute('type') === 'BusinessInterface');
        var VAL_7adbd080 = (magnetS && magnetS.getAttribute('type') === 'BusinessCollaboration') && (magnetT && magnetT.getAttribute('type') === 'BusinessRole');
        var VAL_41beb473 = (magnetS && magnetS.getAttribute('type') === 'BusinessCollaboration') && (magnetT && magnetT.getAttribute('type') === 'BusinessCollaboration');
        var VAL_560513ce = (magnetS && magnetS.getAttribute('type') === 'BusinessCollaboration') && (magnetT && magnetT.getAttribute('type') === 'BusinessActor');
        var VAL_13006998 = (magnetS && magnetS.getAttribute('type') === 'BusinessCollaboration') && (magnetT && magnetT.getAttribute('type') === 'DataObject');
        var VAL_37fbe4a8 = (magnetS && magnetS.getAttribute('type') === 'BusinessCollaboration') && (magnetT && magnetT.getAttribute('type') === 'ApplicationService');
        var VAL_352c308 = (magnetS && magnetS.getAttribute('type') === 'BusinessCollaboration') && (magnetT && magnetT.getAttribute('type') === 'ApplicationFunction');
        var VAL_7d373bcf = (magnetS && magnetS.getAttribute('type') === 'BusinessCollaboration') && (magnetT && magnetT.getAttribute('type') === 'ApplicationInteraction');
        var VAL_6d6bc158 = (magnetS && magnetS.getAttribute('type') === 'BusinessCollaboration') && (magnetT && magnetT.getAttribute('type') === 'ApplicationInterface');
        var VAL_5dda6f9 = (magnetS && magnetS.getAttribute('type') === 'BusinessCollaboration') && (magnetT && magnetT.getAttribute('type') === 'ApplicationComponent');
        var VAL_10027fc9 = (magnetS && magnetS.getAttribute('type') === 'BusinessCollaboration') && (magnetT && magnetT.getAttribute('type') === 'ApplicationCollaboration');
        var VAL_54afd745 = (magnetS && magnetS.getAttribute('type') === 'BusinessCollaboration') && (magnetT && magnetT.getAttribute('type') === 'Artifact');
        var VAL_677dbd89 = (magnetS && magnetS.getAttribute('type') === 'BusinessCollaboration') && (magnetT && magnetT.getAttribute('type') === 'InfrastructureService');
        var VAL_fff25f1 = (magnetS && magnetS.getAttribute('type') === 'BusinessCollaboration') && (magnetT && magnetT.getAttribute('type') === 'InfrastructureInterface');
        var VAL_c00fff0 = (magnetS && magnetS.getAttribute('type') === 'BusinessCollaboration') && (magnetT && magnetT.getAttribute('type') === 'Node');
        var VAL_263f04ca = (magnetS && magnetS.getAttribute('type') === 'BusinessCollaboration') && (magnetT && magnetT.getAttribute('type') === 'SystemSoftware');
        var VAL_2ca47471 = (magnetS && magnetS.getAttribute('type') === 'BusinessCollaboration') && (magnetT && magnetT.getAttribute('type') === 'Device');
        var VAL_5a021cb9 = (magnetS && magnetS.getAttribute('type') === 'BusinessCollaboration') && (magnetT && magnetT.getAttribute('type') === 'CommunicationPath');
        var VAL_51768776 = (magnetS && magnetS.getAttribute('type') === 'BusinessCollaboration') && (magnetT && magnetT.getAttribute('type') === 'Network');
        var VAL_f31c0c6 = (magnetS && magnetS.getAttribute('type') === 'BusinessCollaboration') && (magnetT && magnetT.getAttribute('type') === 'Stakeholder');
        var VAL_b93aad = (magnetS && magnetS.getAttribute('type') === 'BusinessCollaboration') && (magnetT && magnetT.getAttribute('type') === 'Driver');
        var VAL_4a9419d7 = (magnetS && magnetS.getAttribute('type') === 'BusinessCollaboration') && (magnetT && magnetT.getAttribute('type') === 'Assessment');
        var VAL_2f3c6ac4 = (magnetS && magnetS.getAttribute('type') === 'BusinessCollaboration') && (magnetT && magnetT.getAttribute('type') === 'Goal');
        var VAL_2e8ab815 = (magnetS && magnetS.getAttribute('type') === 'BusinessCollaboration') && (magnetT && magnetT.getAttribute('type') === 'Requirement');
        var VAL_67af833b = (magnetS && magnetS.getAttribute('type') === 'BusinessCollaboration') && (magnetT && magnetT.getAttribute('type') === 'Constraint');
        var VAL_d1f74b8 = (magnetS && magnetS.getAttribute('type') === 'BusinessCollaboration') && (magnetT && magnetT.getAttribute('type') === 'Principle');
        var VAL_41394595 = (magnetS && magnetS.getAttribute('type') === 'BusinessCollaboration') && (magnetT && magnetT.getAttribute('type') === 'WorkPackage');
        var VAL_3a0807b7 = (magnetS && magnetS.getAttribute('type') === 'BusinessCollaboration') && (magnetT && magnetT.getAttribute('type') === 'Deliverable');
        var VAL_21a5fd96 = (magnetS && magnetS.getAttribute('type') === 'BusinessCollaboration') && (magnetT && magnetT.getAttribute('type') === 'Plateau');
        var VAL_5769e7ae = (magnetS && magnetS.getAttribute('type') === 'BusinessCollaboration') && (magnetT && magnetT.getAttribute('type') === 'Gap');
        var VAL_5c77053b = (magnetS && magnetS.getAttribute('type') === 'BusinessActor') && (magnetT && magnetT.getAttribute('type') === 'ArchimateElement');
        var VAL_26b894bd = (magnetS && magnetS.getAttribute('type') === 'BusinessActor') && (magnetT && magnetT.getAttribute('type') === 'Product');
        var VAL_287f94b1 = (magnetS && magnetS.getAttribute('type') === 'BusinessActor') && (magnetT && magnetT.getAttribute('type') === 'BusinessObject');
        var VAL_30b34287 = (magnetS && magnetS.getAttribute('type') === 'BusinessActor') && (magnetT && magnetT.getAttribute('type') === 'Meaning');
        var VAL_5489c777 = (magnetS && magnetS.getAttribute('type') === 'BusinessActor') && (magnetT && magnetT.getAttribute('type') === 'Representation');
        var VAL_3676ac27 = (magnetS && magnetS.getAttribute('type') === 'BusinessActor') && (magnetT && magnetT.getAttribute('type') === 'BusinessService');
        var VAL_62f87c44 = (magnetS && magnetS.getAttribute('type') === 'BusinessActor') && (magnetT && magnetT.getAttribute('type') === 'BusinessProcess');
        var VAL_48f5bde6 = (magnetS && magnetS.getAttribute('type') === 'BusinessActor') && (magnetT && magnetT.getAttribute('type') === 'BusinessFunction');
        var VAL_525d79f0 = (magnetS && magnetS.getAttribute('type') === 'BusinessActor') && (magnetT && magnetT.getAttribute('type') === 'BusinessInteraction');
        var VAL_5149f008 = (magnetS && magnetS.getAttribute('type') === 'BusinessActor') && (magnetT && magnetT.getAttribute('type') === 'BusinessEvent');
        var VAL_7072bc39 = (magnetS && magnetS.getAttribute('type') === 'BusinessActor') && (magnetT && magnetT.getAttribute('type') === 'Location');
        var VAL_158d255c = (magnetS && magnetS.getAttribute('type') === 'BusinessActor') && (magnetT && magnetT.getAttribute('type') === 'BusinessInterface');
        var VAL_2ca65ce4 = (magnetS && magnetS.getAttribute('type') === 'BusinessActor') && (magnetT && magnetT.getAttribute('type') === 'BusinessRole');
        var VAL_327120c8 = (magnetS && magnetS.getAttribute('type') === 'BusinessActor') && (magnetT && magnetT.getAttribute('type') === 'BusinessCollaboration');
        var VAL_5707c1cb = (magnetS && magnetS.getAttribute('type') === 'BusinessActor') && (magnetT && magnetT.getAttribute('type') === 'BusinessActor');
        var VAL_2b5cb9b2 = (magnetS && magnetS.getAttribute('type') === 'BusinessActor') && (magnetT && magnetT.getAttribute('type') === 'DataObject');
        var VAL_35038141 = (magnetS && magnetS.getAttribute('type') === 'BusinessActor') && (magnetT && magnetT.getAttribute('type') === 'ApplicationService');
        var VAL_ecf9049 = (magnetS && magnetS.getAttribute('type') === 'BusinessActor') && (magnetT && magnetT.getAttribute('type') === 'ApplicationFunction');
        var VAL_672f11c2 = (magnetS && magnetS.getAttribute('type') === 'BusinessActor') && (magnetT && magnetT.getAttribute('type') === 'ApplicationInteraction');
        var VAL_2970a5bc = (magnetS && magnetS.getAttribute('type') === 'BusinessActor') && (magnetT && magnetT.getAttribute('type') === 'ApplicationInterface');
        var VAL_50305a = (magnetS && magnetS.getAttribute('type') === 'BusinessActor') && (magnetT && magnetT.getAttribute('type') === 'ApplicationComponent');
        var VAL_72efb5c1 = (magnetS && magnetS.getAttribute('type') === 'BusinessActor') && (magnetT && magnetT.getAttribute('type') === 'ApplicationCollaboration');
        var VAL_6d511b5f = (magnetS && magnetS.getAttribute('type') === 'BusinessActor') && (magnetT && magnetT.getAttribute('type') === 'Artifact');
        var VAL_41200e0c = (magnetS && magnetS.getAttribute('type') === 'BusinessActor') && (magnetT && magnetT.getAttribute('type') === 'InfrastructureService');
        var VAL_40f33492 = (magnetS && magnetS.getAttribute('type') === 'BusinessActor') && (magnetT && magnetT.getAttribute('type') === 'InfrastructureInterface');
        var VAL_4fbdc0f0 = (magnetS && magnetS.getAttribute('type') === 'BusinessActor') && (magnetT && magnetT.getAttribute('type') === 'Node');
        var VAL_2ad3a1bb = (magnetS && magnetS.getAttribute('type') === 'BusinessActor') && (magnetT && magnetT.getAttribute('type') === 'SystemSoftware');
        var VAL_6bc28a83 = (magnetS && magnetS.getAttribute('type') === 'BusinessActor') && (magnetT && magnetT.getAttribute('type') === 'Device');
        var VAL_324c64cd = (magnetS && magnetS.getAttribute('type') === 'BusinessActor') && (magnetT && magnetT.getAttribute('type') === 'CommunicationPath');
        var VAL_13579834 = (magnetS && magnetS.getAttribute('type') === 'BusinessActor') && (magnetT && magnetT.getAttribute('type') === 'Network');
        var VAL_24be2d9c = (magnetS && magnetS.getAttribute('type') === 'BusinessActor') && (magnetT && magnetT.getAttribute('type') === 'Stakeholder');
        var VAL_5bd73d1a = (magnetS && magnetS.getAttribute('type') === 'BusinessActor') && (magnetT && magnetT.getAttribute('type') === 'Driver');
        var VAL_aec50a1 = (magnetS && magnetS.getAttribute('type') === 'BusinessActor') && (magnetT && magnetT.getAttribute('type') === 'Assessment');
        var VAL_2555fff0 = (magnetS && magnetS.getAttribute('type') === 'BusinessActor') && (magnetT && magnetT.getAttribute('type') === 'Goal');
        var VAL_70d2e40b = (magnetS && magnetS.getAttribute('type') === 'BusinessActor') && (magnetT && magnetT.getAttribute('type') === 'Requirement');
        var VAL_120f38e6 = (magnetS && magnetS.getAttribute('type') === 'BusinessActor') && (magnetT && magnetT.getAttribute('type') === 'Constraint');
        var VAL_7a0e1b5e = (magnetS && magnetS.getAttribute('type') === 'BusinessActor') && (magnetT && magnetT.getAttribute('type') === 'Principle');
        var VAL_702ed190 = (magnetS && magnetS.getAttribute('type') === 'BusinessActor') && (magnetT && magnetT.getAttribute('type') === 'WorkPackage');
        var VAL_173b9122 = (magnetS && magnetS.getAttribute('type') === 'BusinessActor') && (magnetT && magnetT.getAttribute('type') === 'Deliverable');
        var VAL_7c18432b = (magnetS && magnetS.getAttribute('type') === 'BusinessActor') && (magnetT && magnetT.getAttribute('type') === 'Plateau');
        var VAL_7646731d = (magnetS && magnetS.getAttribute('type') === 'BusinessActor') && (magnetT && magnetT.getAttribute('type') === 'Gap');
        var VAL_70e29e14 = (magnetS && magnetS.getAttribute('type') === 'DataObject') && (magnetT && magnetT.getAttribute('type') === 'ArchimateElement');
        var VAL_3b1bb3ab = (magnetS && magnetS.getAttribute('type') === 'DataObject') && (magnetT && magnetT.getAttribute('type') === 'Product');
        var VAL_5a4bef8 = (magnetS && magnetS.getAttribute('type') === 'DataObject') && (magnetT && magnetT.getAttribute('type') === 'BusinessObject');
        var VAL_40bffbca = (magnetS && magnetS.getAttribute('type') === 'DataObject') && (magnetT && magnetT.getAttribute('type') === 'Meaning');
        var VAL_2449cff7 = (magnetS && magnetS.getAttribute('type') === 'DataObject') && (magnetT && magnetT.getAttribute('type') === 'Representation');
        var VAL_42a9a63e = (magnetS && magnetS.getAttribute('type') === 'DataObject') && (magnetT && magnetT.getAttribute('type') === 'BusinessService');
        var VAL_62da83ed = (magnetS && magnetS.getAttribute('type') === 'DataObject') && (magnetT && magnetT.getAttribute('type') === 'BusinessProcess');
        var VAL_5d8445d7 = (magnetS && magnetS.getAttribute('type') === 'DataObject') && (magnetT && magnetT.getAttribute('type') === 'BusinessFunction');
        var VAL_37d80fe7 = (magnetS && magnetS.getAttribute('type') === 'DataObject') && (magnetT && magnetT.getAttribute('type') === 'BusinessInteraction');
        var VAL_384fc774 = (magnetS && magnetS.getAttribute('type') === 'DataObject') && (magnetT && magnetT.getAttribute('type') === 'BusinessEvent');
        var VAL_e3cee7b = (magnetS && magnetS.getAttribute('type') === 'DataObject') && (magnetT && magnetT.getAttribute('type') === 'Location');
        var VAL_71e9a896 = (magnetS && magnetS.getAttribute('type') === 'DataObject') && (magnetT && magnetT.getAttribute('type') === 'BusinessInterface');
        var VAL_6b9267b = (magnetS && magnetS.getAttribute('type') === 'DataObject') && (magnetT && magnetT.getAttribute('type') === 'BusinessRole');
        var VAL_408b35bf = (magnetS && magnetS.getAttribute('type') === 'DataObject') && (magnetT && magnetT.getAttribute('type') === 'BusinessCollaboration');
        var VAL_29ad44e3 = (magnetS && magnetS.getAttribute('type') === 'DataObject') && (magnetT && magnetT.getAttribute('type') === 'BusinessActor');
        var VAL_15bcf458 = (magnetS && magnetS.getAttribute('type') === 'DataObject') && (magnetT && magnetT.getAttribute('type') === 'DataObject');
        var VAL_5af9926a = (magnetS && magnetS.getAttribute('type') === 'DataObject') && (magnetT && magnetT.getAttribute('type') === 'ApplicationService');
        var VAL_43c67247 = (magnetS && magnetS.getAttribute('type') === 'DataObject') && (magnetT && magnetT.getAttribute('type') === 'ApplicationFunction');
        var VAL_fac80 = (magnetS && magnetS.getAttribute('type') === 'DataObject') && (magnetT && magnetT.getAttribute('type') === 'ApplicationInteraction');
        var VAL_726386ed = (magnetS && magnetS.getAttribute('type') === 'DataObject') && (magnetT && magnetT.getAttribute('type') === 'ApplicationInterface');
        var VAL_649f2009 = (magnetS && magnetS.getAttribute('type') === 'DataObject') && (magnetT && magnetT.getAttribute('type') === 'ApplicationComponent');
        var VAL_14bb2297 = (magnetS && magnetS.getAttribute('type') === 'DataObject') && (magnetT && magnetT.getAttribute('type') === 'ApplicationCollaboration');
        var VAL_69adf72c = (magnetS && magnetS.getAttribute('type') === 'DataObject') && (magnetT && magnetT.getAttribute('type') === 'Artifact');
        var VAL_797501a = (magnetS && magnetS.getAttribute('type') === 'DataObject') && (magnetT && magnetT.getAttribute('type') === 'InfrastructureService');
        var VAL_1a15b789 = (magnetS && magnetS.getAttribute('type') === 'DataObject') && (magnetT && magnetT.getAttribute('type') === 'InfrastructureInterface');
        var VAL_57f791c6 = (magnetS && magnetS.getAttribute('type') === 'DataObject') && (magnetT && magnetT.getAttribute('type') === 'Node');
        var VAL_51650883 = (magnetS && magnetS.getAttribute('type') === 'DataObject') && (magnetT && magnetT.getAttribute('type') === 'SystemSoftware');
        var VAL_6c4f9535 = (magnetS && magnetS.getAttribute('type') === 'DataObject') && (magnetT && magnetT.getAttribute('type') === 'Device');
        var VAL_5bd1ceca = (magnetS && magnetS.getAttribute('type') === 'DataObject') && (magnetT && magnetT.getAttribute('type') === 'CommunicationPath');
        var VAL_30c31dd7 = (magnetS && magnetS.getAttribute('type') === 'DataObject') && (magnetT && magnetT.getAttribute('type') === 'Network');
        var VAL_499b2a5c = (magnetS && magnetS.getAttribute('type') === 'DataObject') && (magnetT && magnetT.getAttribute('type') === 'Stakeholder');
        var VAL_596df867 = (magnetS && magnetS.getAttribute('type') === 'DataObject') && (magnetT && magnetT.getAttribute('type') === 'Driver');
        var VAL_c1fca1e = (magnetS && magnetS.getAttribute('type') === 'DataObject') && (magnetT && magnetT.getAttribute('type') === 'Assessment');
        var VAL_241a53ef = (magnetS && magnetS.getAttribute('type') === 'DataObject') && (magnetT && magnetT.getAttribute('type') === 'Goal');
        var VAL_344344fa = (magnetS && magnetS.getAttribute('type') === 'DataObject') && (magnetT && magnetT.getAttribute('type') === 'Requirement');
        var VAL_2db2cd5 = (magnetS && magnetS.getAttribute('type') === 'DataObject') && (magnetT && magnetT.getAttribute('type') === 'Constraint');
        var VAL_70e659aa = (magnetS && magnetS.getAttribute('type') === 'DataObject') && (magnetT && magnetT.getAttribute('type') === 'Principle');
        var VAL_615f972 = (magnetS && magnetS.getAttribute('type') === 'DataObject') && (magnetT && magnetT.getAttribute('type') === 'WorkPackage');
        var VAL_285f09de = (magnetS && magnetS.getAttribute('type') === 'DataObject') && (magnetT && magnetT.getAttribute('type') === 'Deliverable');
        var VAL_73393584 = (magnetS && magnetS.getAttribute('type') === 'DataObject') && (magnetT && magnetT.getAttribute('type') === 'Plateau');
        var VAL_31500940 = (magnetS && magnetS.getAttribute('type') === 'DataObject') && (magnetT && magnetT.getAttribute('type') === 'Gap');
        var VAL_1827a871 = (magnetS && magnetS.getAttribute('type') === 'ApplicationService') && (magnetT && magnetT.getAttribute('type') === 'ArchimateElement');
        var VAL_48e64352 = (magnetS && magnetS.getAttribute('type') === 'ApplicationService') && (magnetT && magnetT.getAttribute('type') === 'Product');
        var VAL_7249dadf = (magnetS && magnetS.getAttribute('type') === 'ApplicationService') && (magnetT && magnetT.getAttribute('type') === 'BusinessObject');
        var VAL_4362d7df = (magnetS && magnetS.getAttribute('type') === 'ApplicationService') && (magnetT && magnetT.getAttribute('type') === 'Meaning');
        var VAL_66238be2 = (magnetS && magnetS.getAttribute('type') === 'ApplicationService') && (magnetT && magnetT.getAttribute('type') === 'Representation');
        var VAL_1c25b8a7 = (magnetS && magnetS.getAttribute('type') === 'ApplicationService') && (magnetT && magnetT.getAttribute('type') === 'BusinessService');
        var VAL_200606de = (magnetS && magnetS.getAttribute('type') === 'ApplicationService') && (magnetT && magnetT.getAttribute('type') === 'BusinessProcess');
        var VAL_750fe12e = (magnetS && magnetS.getAttribute('type') === 'ApplicationService') && (magnetT && magnetT.getAttribute('type') === 'BusinessFunction');
        var VAL_f8908f6 = (magnetS && magnetS.getAttribute('type') === 'ApplicationService') && (magnetT && magnetT.getAttribute('type') === 'BusinessInteraction');
        var VAL_3e587920 = (magnetS && magnetS.getAttribute('type') === 'ApplicationService') && (magnetT && magnetT.getAttribute('type') === 'BusinessEvent');
        var VAL_2ef8a8c3 = (magnetS && magnetS.getAttribute('type') === 'ApplicationService') && (magnetT && magnetT.getAttribute('type') === 'Location');
        var VAL_24f43aa3 = (magnetS && magnetS.getAttribute('type') === 'ApplicationService') && (magnetT && magnetT.getAttribute('type') === 'BusinessInterface');
        var VAL_63fd4873 = (magnetS && magnetS.getAttribute('type') === 'ApplicationService') && (magnetT && magnetT.getAttribute('type') === 'BusinessRole');
        var VAL_1e11bc55 = (magnetS && magnetS.getAttribute('type') === 'ApplicationService') && (magnetT && magnetT.getAttribute('type') === 'BusinessCollaboration');
        var VAL_7544a1e4 = (magnetS && magnetS.getAttribute('type') === 'ApplicationService') && (magnetT && magnetT.getAttribute('type') === 'BusinessActor');
        var VAL_70e0accd = (magnetS && magnetS.getAttribute('type') === 'ApplicationService') && (magnetT && magnetT.getAttribute('type') === 'DataObject');
        var VAL_7957dc72 = (magnetS && magnetS.getAttribute('type') === 'ApplicationService') && (magnetT && magnetT.getAttribute('type') === 'ApplicationService');
        var VAL_6ab72419 = (magnetS && magnetS.getAttribute('type') === 'ApplicationService') && (magnetT && magnetT.getAttribute('type') === 'ApplicationFunction');
        var VAL_3aacf32a = (magnetS && magnetS.getAttribute('type') === 'ApplicationService') && (magnetT && magnetT.getAttribute('type') === 'ApplicationInteraction');
        var VAL_4fdfa676 = (magnetS && magnetS.getAttribute('type') === 'ApplicationService') && (magnetT && magnetT.getAttribute('type') === 'ApplicationInterface');
        var VAL_82c57b3 = (magnetS && magnetS.getAttribute('type') === 'ApplicationService') && (magnetT && magnetT.getAttribute('type') === 'ApplicationComponent');
        var VAL_5be82d43 = (magnetS && magnetS.getAttribute('type') === 'ApplicationService') && (magnetT && magnetT.getAttribute('type') === 'ApplicationCollaboration');
        var VAL_600b0b7 = (magnetS && magnetS.getAttribute('type') === 'ApplicationService') && (magnetT && magnetT.getAttribute('type') === 'Artifact');
        var VAL_345e5a17 = (magnetS && magnetS.getAttribute('type') === 'ApplicationService') && (magnetT && magnetT.getAttribute('type') === 'InfrastructureService');
        var VAL_5ea502e0 = (magnetS && magnetS.getAttribute('type') === 'ApplicationService') && (magnetT && magnetT.getAttribute('type') === 'InfrastructureInterface');
        var VAL_443dbe42 = (magnetS && magnetS.getAttribute('type') === 'ApplicationService') && (magnetT && magnetT.getAttribute('type') === 'Node');
        var VAL_473b3b7a = (magnetS && magnetS.getAttribute('type') === 'ApplicationService') && (magnetT && magnetT.getAttribute('type') === 'SystemSoftware');
        var VAL_1734f68 = (magnetS && magnetS.getAttribute('type') === 'ApplicationService') && (magnetT && magnetT.getAttribute('type') === 'Device');
        var VAL_77b7ffa4 = (magnetS && magnetS.getAttribute('type') === 'ApplicationService') && (magnetT && magnetT.getAttribute('type') === 'CommunicationPath');
        var VAL_5ed190be = (magnetS && magnetS.getAttribute('type') === 'ApplicationService') && (magnetT && magnetT.getAttribute('type') === 'Network');
        var VAL_402f80f5 = (magnetS && magnetS.getAttribute('type') === 'ApplicationService') && (magnetT && magnetT.getAttribute('type') === 'Stakeholder');
        var VAL_5bbc9f97 = (magnetS && magnetS.getAttribute('type') === 'ApplicationService') && (magnetT && magnetT.getAttribute('type') === 'Driver');
        var VAL_133e019b = (magnetS && magnetS.getAttribute('type') === 'ApplicationService') && (magnetT && magnetT.getAttribute('type') === 'Assessment');
        var VAL_41382722 = (magnetS && magnetS.getAttribute('type') === 'ApplicationService') && (magnetT && magnetT.getAttribute('type') === 'Goal');
        var VAL_7dac3fd8 = (magnetS && magnetS.getAttribute('type') === 'ApplicationService') && (magnetT && magnetT.getAttribute('type') === 'Requirement');
        var VAL_425357dd = (magnetS && magnetS.getAttribute('type') === 'ApplicationService') && (magnetT && magnetT.getAttribute('type') === 'Constraint');
        var VAL_2102a4d5 = (magnetS && magnetS.getAttribute('type') === 'ApplicationService') && (magnetT && magnetT.getAttribute('type') === 'Principle');
        var VAL_210386e0 = (magnetS && magnetS.getAttribute('type') === 'ApplicationService') && (magnetT && magnetT.getAttribute('type') === 'WorkPackage');
        var VAL_3d4d3fe7 = (magnetS && magnetS.getAttribute('type') === 'ApplicationService') && (magnetT && magnetT.getAttribute('type') === 'Deliverable');
        var VAL_65f87a2c = (magnetS && magnetS.getAttribute('type') === 'ApplicationService') && (magnetT && magnetT.getAttribute('type') === 'Plateau');
        var VAL_51684e4a = (magnetS && magnetS.getAttribute('type') === 'ApplicationService') && (magnetT && magnetT.getAttribute('type') === 'Gap');
        var VAL_6ce1f601 = (magnetS && magnetS.getAttribute('type') === 'ApplicationFunction') && (magnetT && magnetT.getAttribute('type') === 'ArchimateElement');
        var VAL_38875e7d = (magnetS && magnetS.getAttribute('type') === 'ApplicationFunction') && (magnetT && magnetT.getAttribute('type') === 'Product');
        var VAL_1e886a5b = (magnetS && magnetS.getAttribute('type') === 'ApplicationFunction') && (magnetT && magnetT.getAttribute('type') === 'BusinessObject');
        var VAL_d816dde = (magnetS && magnetS.getAttribute('type') === 'ApplicationFunction') && (magnetT && magnetT.getAttribute('type') === 'Meaning');
        var VAL_6e33c391 = (magnetS && magnetS.getAttribute('type') === 'ApplicationFunction') && (magnetT && magnetT.getAttribute('type') === 'Representation');
        var VAL_6c451c9c = (magnetS && magnetS.getAttribute('type') === 'ApplicationFunction') && (magnetT && magnetT.getAttribute('type') === 'BusinessService');
        var VAL_31c269fd = (magnetS && magnetS.getAttribute('type') === 'ApplicationFunction') && (magnetT && magnetT.getAttribute('type') === 'BusinessProcess');
        var VAL_372b0d86 = (magnetS && magnetS.getAttribute('type') === 'ApplicationFunction') && (magnetT && magnetT.getAttribute('type') === 'BusinessFunction');
        var VAL_47747fb9 = (magnetS && magnetS.getAttribute('type') === 'ApplicationFunction') && (magnetT && magnetT.getAttribute('type') === 'BusinessInteraction');
        var VAL_3113a37 = (magnetS && magnetS.getAttribute('type') === 'ApplicationFunction') && (magnetT && magnetT.getAttribute('type') === 'BusinessEvent');
        var VAL_213e3629 = (magnetS && magnetS.getAttribute('type') === 'ApplicationFunction') && (magnetT && magnetT.getAttribute('type') === 'Location');
        var VAL_4e9658b5 = (magnetS && magnetS.getAttribute('type') === 'ApplicationFunction') && (magnetT && magnetT.getAttribute('type') === 'BusinessInterface');
        var VAL_2a7b6f69 = (magnetS && magnetS.getAttribute('type') === 'ApplicationFunction') && (magnetT && magnetT.getAttribute('type') === 'BusinessRole');
        var VAL_20312893 = (magnetS && magnetS.getAttribute('type') === 'ApplicationFunction') && (magnetT && magnetT.getAttribute('type') === 'BusinessCollaboration');
        var VAL_70eecdc2 = (magnetS && magnetS.getAttribute('type') === 'ApplicationFunction') && (magnetT && magnetT.getAttribute('type') === 'BusinessActor');
        var VAL_c41709a = (magnetS && magnetS.getAttribute('type') === 'ApplicationFunction') && (magnetT && magnetT.getAttribute('type') === 'DataObject');
        var VAL_7db0565c = (magnetS && magnetS.getAttribute('type') === 'ApplicationFunction') && (magnetT && magnetT.getAttribute('type') === 'ApplicationService');
        var VAL_54ec8cc9 = (magnetS && magnetS.getAttribute('type') === 'ApplicationFunction') && (magnetT && magnetT.getAttribute('type') === 'ApplicationFunction');
        var VAL_52eacb4b = (magnetS && magnetS.getAttribute('type') === 'ApplicationFunction') && (magnetT && magnetT.getAttribute('type') === 'ApplicationInteraction');
        var VAL_5528a42c = (magnetS && magnetS.getAttribute('type') === 'ApplicationFunction') && (magnetT && magnetT.getAttribute('type') === 'ApplicationInterface');
        var VAL_2a551a63 = (magnetS && magnetS.getAttribute('type') === 'ApplicationFunction') && (magnetT && magnetT.getAttribute('type') === 'ApplicationComponent');
        var VAL_1a6f5124 = (magnetS && magnetS.getAttribute('type') === 'ApplicationFunction') && (magnetT && magnetT.getAttribute('type') === 'ApplicationCollaboration');
        var VAL_1edb61b1 = (magnetS && magnetS.getAttribute('type') === 'ApplicationFunction') && (magnetT && magnetT.getAttribute('type') === 'Artifact');
        var VAL_ec2bf82 = (magnetS && magnetS.getAttribute('type') === 'ApplicationFunction') && (magnetT && magnetT.getAttribute('type') === 'InfrastructureService');
        var VAL_cc62a3b = (magnetS && magnetS.getAttribute('type') === 'ApplicationFunction') && (magnetT && magnetT.getAttribute('type') === 'InfrastructureInterface');
        var VAL_6cc0bcf6 = (magnetS && magnetS.getAttribute('type') === 'ApplicationFunction') && (magnetT && magnetT.getAttribute('type') === 'Node');
        var VAL_29539e36 = (magnetS && magnetS.getAttribute('type') === 'ApplicationFunction') && (magnetT && magnetT.getAttribute('type') === 'SystemSoftware');
        var VAL_32f61a31 = (magnetS && magnetS.getAttribute('type') === 'ApplicationFunction') && (magnetT && magnetT.getAttribute('type') === 'Device');
        var VAL_f5c79a6 = (magnetS && magnetS.getAttribute('type') === 'ApplicationFunction') && (magnetT && magnetT.getAttribute('type') === 'CommunicationPath');
        var VAL_669253b7 = (magnetS && magnetS.getAttribute('type') === 'ApplicationFunction') && (magnetT && magnetT.getAttribute('type') === 'Network');
        var VAL_5305c37d = (magnetS && magnetS.getAttribute('type') === 'ApplicationFunction') && (magnetT && magnetT.getAttribute('type') === 'Stakeholder');
        var VAL_51a06cbe = (magnetS && magnetS.getAttribute('type') === 'ApplicationFunction') && (magnetT && magnetT.getAttribute('type') === 'Driver');
        var VAL_3dddbe65 = (magnetS && magnetS.getAttribute('type') === 'ApplicationFunction') && (magnetT && magnetT.getAttribute('type') === 'Assessment');
        var VAL_49a64d82 = (magnetS && magnetS.getAttribute('type') === 'ApplicationFunction') && (magnetT && magnetT.getAttribute('type') === 'Goal');
        var VAL_344561e0 = (magnetS && magnetS.getAttribute('type') === 'ApplicationFunction') && (magnetT && magnetT.getAttribute('type') === 'Requirement');
        var VAL_66d23e4a = (magnetS && magnetS.getAttribute('type') === 'ApplicationFunction') && (magnetT && magnetT.getAttribute('type') === 'Constraint');
        var VAL_36ac8a63 = (magnetS && magnetS.getAttribute('type') === 'ApplicationFunction') && (magnetT && magnetT.getAttribute('type') === 'Principle');
        var VAL_4d9d1b69 = (magnetS && magnetS.getAttribute('type') === 'ApplicationFunction') && (magnetT && magnetT.getAttribute('type') === 'WorkPackage');
        var VAL_52c8295b = (magnetS && magnetS.getAttribute('type') === 'ApplicationFunction') && (magnetT && magnetT.getAttribute('type') === 'Deliverable');
        var VAL_251f7d26 = (magnetS && magnetS.getAttribute('type') === 'ApplicationFunction') && (magnetT && magnetT.getAttribute('type') === 'Plateau');
        var VAL_77b21474 = (magnetS && magnetS.getAttribute('type') === 'ApplicationFunction') && (magnetT && magnetT.getAttribute('type') === 'Gap');
        var VAL_52d10fb8 = (magnetS && magnetS.getAttribute('type') === 'ApplicationInteraction') && (magnetT && magnetT.getAttribute('type') === 'ArchimateElement');
        var VAL_41c07648 = (magnetS && magnetS.getAttribute('type') === 'ApplicationInteraction') && (magnetT && magnetT.getAttribute('type') === 'Product');
        var VAL_1fe8d51b = (magnetS && magnetS.getAttribute('type') === 'ApplicationInteraction') && (magnetT && magnetT.getAttribute('type') === 'BusinessObject');
        var VAL_781e7326 = (magnetS && magnetS.getAttribute('type') === 'ApplicationInteraction') && (magnetT && magnetT.getAttribute('type') === 'Meaning');
        var VAL_22680f52 = (magnetS && magnetS.getAttribute('type') === 'ApplicationInteraction') && (magnetT && magnetT.getAttribute('type') === 'Representation');
        var VAL_60d84f61 = (magnetS && magnetS.getAttribute('type') === 'ApplicationInteraction') && (magnetT && magnetT.getAttribute('type') === 'BusinessService');
        var VAL_39c11e6c = (magnetS && magnetS.getAttribute('type') === 'ApplicationInteraction') && (magnetT && magnetT.getAttribute('type') === 'BusinessProcess');
        var VAL_324dcd31 = (magnetS && magnetS.getAttribute('type') === 'ApplicationInteraction') && (magnetT && magnetT.getAttribute('type') === 'BusinessFunction');
        var VAL_503d56b5 = (magnetS && magnetS.getAttribute('type') === 'ApplicationInteraction') && (magnetT && magnetT.getAttribute('type') === 'BusinessInteraction');
        var VAL_72bca894 = (magnetS && magnetS.getAttribute('type') === 'ApplicationInteraction') && (magnetT && magnetT.getAttribute('type') === 'BusinessEvent');
        var VAL_433ffad1 = (magnetS && magnetS.getAttribute('type') === 'ApplicationInteraction') && (magnetT && magnetT.getAttribute('type') === 'Location');
        var VAL_1fc793c2 = (magnetS && magnetS.getAttribute('type') === 'ApplicationInteraction') && (magnetT && magnetT.getAttribute('type') === 'BusinessInterface');
        var VAL_2575f671 = (magnetS && magnetS.getAttribute('type') === 'ApplicationInteraction') && (magnetT && magnetT.getAttribute('type') === 'BusinessRole');
        var VAL_329a1243 = (magnetS && magnetS.getAttribute('type') === 'ApplicationInteraction') && (magnetT && magnetT.getAttribute('type') === 'BusinessCollaboration');
        var VAL_ecf9fb3 = (magnetS && magnetS.getAttribute('type') === 'ApplicationInteraction') && (magnetT && magnetT.getAttribute('type') === 'BusinessActor');
        var VAL_2d35442b = (magnetS && magnetS.getAttribute('type') === 'ApplicationInteraction') && (magnetT && magnetT.getAttribute('type') === 'DataObject');
        var VAL_27f9e982 = (magnetS && magnetS.getAttribute('type') === 'ApplicationInteraction') && (magnetT && magnetT.getAttribute('type') === 'ApplicationService');
        var VAL_4593ff34 = (magnetS && magnetS.getAttribute('type') === 'ApplicationInteraction') && (magnetT && magnetT.getAttribute('type') === 'ApplicationFunction');
        var VAL_37d3d232 = (magnetS && magnetS.getAttribute('type') === 'ApplicationInteraction') && (magnetT && magnetT.getAttribute('type') === 'ApplicationInteraction');
        var VAL_30c0ccff = (magnetS && magnetS.getAttribute('type') === 'ApplicationInteraction') && (magnetT && magnetT.getAttribute('type') === 'ApplicationInterface');
        var VAL_581d969c = (magnetS && magnetS.getAttribute('type') === 'ApplicationInteraction') && (magnetT && magnetT.getAttribute('type') === 'ApplicationComponent');
        var VAL_22db8f4 = (magnetS && magnetS.getAttribute('type') === 'ApplicationInteraction') && (magnetT && magnetT.getAttribute('type') === 'ApplicationCollaboration');
        var VAL_2b46a8c1 = (magnetS && magnetS.getAttribute('type') === 'ApplicationInteraction') && (magnetT && magnetT.getAttribute('type') === 'Artifact');
        var VAL_1d572e62 = (magnetS && magnetS.getAttribute('type') === 'ApplicationInteraction') && (magnetT && magnetT.getAttribute('type') === 'InfrastructureService');
        var VAL_29caf222 = (magnetS && magnetS.getAttribute('type') === 'ApplicationInteraction') && (magnetT && magnetT.getAttribute('type') === 'InfrastructureInterface');
        var VAL_46cf05f7 = (magnetS && magnetS.getAttribute('type') === 'ApplicationInteraction') && (magnetT && magnetT.getAttribute('type') === 'Node');
        var VAL_5851bd4f = (magnetS && magnetS.getAttribute('type') === 'ApplicationInteraction') && (magnetT && magnetT.getAttribute('type') === 'SystemSoftware');
        var VAL_7cd1ac19 = (magnetS && magnetS.getAttribute('type') === 'ApplicationInteraction') && (magnetT && magnetT.getAttribute('type') === 'Device');
        var VAL_2f40a43 = (magnetS && magnetS.getAttribute('type') === 'ApplicationInteraction') && (magnetT && magnetT.getAttribute('type') === 'CommunicationPath');
        var VAL_3caa4757 = (magnetS && magnetS.getAttribute('type') === 'ApplicationInteraction') && (magnetT && magnetT.getAttribute('type') === 'Network');
        var VAL_69c43e48 = (magnetS && magnetS.getAttribute('type') === 'ApplicationInteraction') && (magnetT && magnetT.getAttribute('type') === 'Stakeholder');
        var VAL_1804f60d = (magnetS && magnetS.getAttribute('type') === 'ApplicationInteraction') && (magnetT && magnetT.getAttribute('type') === 'Driver');
        var VAL_3a80515c = (magnetS && magnetS.getAttribute('type') === 'ApplicationInteraction') && (magnetT && magnetT.getAttribute('type') === 'Assessment');
        var VAL_547e29a4 = (magnetS && magnetS.getAttribute('type') === 'ApplicationInteraction') && (magnetT && magnetT.getAttribute('type') === 'Goal');
        var VAL_1c807b1d = (magnetS && magnetS.getAttribute('type') === 'ApplicationInteraction') && (magnetT && magnetT.getAttribute('type') === 'Requirement');
        var VAL_238b521e = (magnetS && magnetS.getAttribute('type') === 'ApplicationInteraction') && (magnetT && magnetT.getAttribute('type') === 'Constraint');
        var VAL_1b39fd82 = (magnetS && magnetS.getAttribute('type') === 'ApplicationInteraction') && (magnetT && magnetT.getAttribute('type') === 'Principle');
        var VAL_3e2fc448 = (magnetS && magnetS.getAttribute('type') === 'ApplicationInteraction') && (magnetT && magnetT.getAttribute('type') === 'WorkPackage');
        var VAL_21680803 = (magnetS && magnetS.getAttribute('type') === 'ApplicationInteraction') && (magnetT && magnetT.getAttribute('type') === 'Deliverable');
        var VAL_588ab592 = (magnetS && magnetS.getAttribute('type') === 'ApplicationInteraction') && (magnetT && magnetT.getAttribute('type') === 'Plateau');
        var VAL_c8b96ec = (magnetS && magnetS.getAttribute('type') === 'ApplicationInteraction') && (magnetT && magnetT.getAttribute('type') === 'Gap');
        var VAL_4cc61eb1 = (magnetS && magnetS.getAttribute('type') === 'ApplicationInterface') && (magnetT && magnetT.getAttribute('type') === 'ArchimateElement');
        var VAL_2d8f2f3a = (magnetS && magnetS.getAttribute('type') === 'ApplicationInterface') && (magnetT && magnetT.getAttribute('type') === 'Product');
        var VAL_2024293c = (magnetS && magnetS.getAttribute('type') === 'ApplicationInterface') && (magnetT && magnetT.getAttribute('type') === 'BusinessObject');
        var VAL_7048f722 = (magnetS && magnetS.getAttribute('type') === 'ApplicationInterface') && (magnetT && magnetT.getAttribute('type') === 'Meaning');
        var VAL_c074c0c = (magnetS && magnetS.getAttribute('type') === 'ApplicationInterface') && (magnetT && magnetT.getAttribute('type') === 'Representation');
        var VAL_58a55449 = (magnetS && magnetS.getAttribute('type') === 'ApplicationInterface') && (magnetT && magnetT.getAttribute('type') === 'BusinessService');
        var VAL_5949eba8 = (magnetS && magnetS.getAttribute('type') === 'ApplicationInterface') && (magnetT && magnetT.getAttribute('type') === 'BusinessProcess');
        var VAL_6e0ff644 = (magnetS && magnetS.getAttribute('type') === 'ApplicationInterface') && (magnetT && magnetT.getAttribute('type') === 'BusinessFunction');
        var VAL_58dea0a5 = (magnetS && magnetS.getAttribute('type') === 'ApplicationInterface') && (magnetT && magnetT.getAttribute('type') === 'BusinessInteraction');
        var VAL_2a2bb0eb = (magnetS && magnetS.getAttribute('type') === 'ApplicationInterface') && (magnetT && magnetT.getAttribute('type') === 'BusinessEvent');
        var VAL_3c291aad = (magnetS && magnetS.getAttribute('type') === 'ApplicationInterface') && (magnetT && magnetT.getAttribute('type') === 'Location');
        var VAL_2d0566ba = (magnetS && magnetS.getAttribute('type') === 'ApplicationInterface') && (magnetT && magnetT.getAttribute('type') === 'BusinessInterface');
        var VAL_733037 = (magnetS && magnetS.getAttribute('type') === 'ApplicationInterface') && (magnetT && magnetT.getAttribute('type') === 'BusinessRole');
        var VAL_7728643a = (magnetS && magnetS.getAttribute('type') === 'ApplicationInterface') && (magnetT && magnetT.getAttribute('type') === 'BusinessCollaboration');
        var VAL_320e400 = (magnetS && magnetS.getAttribute('type') === 'ApplicationInterface') && (magnetT && magnetT.getAttribute('type') === 'BusinessActor');
        var VAL_5167268 = (magnetS && magnetS.getAttribute('type') === 'ApplicationInterface') && (magnetT && magnetT.getAttribute('type') === 'DataObject');
        var VAL_1cfd1875 = (magnetS && magnetS.getAttribute('type') === 'ApplicationInterface') && (magnetT && magnetT.getAttribute('type') === 'ApplicationService');
        var VAL_28c0b664 = (magnetS && magnetS.getAttribute('type') === 'ApplicationInterface') && (magnetT && magnetT.getAttribute('type') === 'ApplicationFunction');
        var VAL_2c444798 = (magnetS && magnetS.getAttribute('type') === 'ApplicationInterface') && (magnetT && magnetT.getAttribute('type') === 'ApplicationInteraction');
        var VAL_1af7f54a = (magnetS && magnetS.getAttribute('type') === 'ApplicationInterface') && (magnetT && magnetT.getAttribute('type') === 'ApplicationInterface');
        var VAL_6ebd78d1 = (magnetS && magnetS.getAttribute('type') === 'ApplicationInterface') && (magnetT && magnetT.getAttribute('type') === 'ApplicationComponent');
        var VAL_436390f4 = (magnetS && magnetS.getAttribute('type') === 'ApplicationInterface') && (magnetT && magnetT.getAttribute('type') === 'ApplicationCollaboration');
        var VAL_4d157787 = (magnetS && magnetS.getAttribute('type') === 'ApplicationInterface') && (magnetT && magnetT.getAttribute('type') === 'Artifact');
        var VAL_68ed96ca = (magnetS && magnetS.getAttribute('type') === 'ApplicationInterface') && (magnetT && magnetT.getAttribute('type') === 'InfrastructureService');
        var VAL_6d1310f6 = (magnetS && magnetS.getAttribute('type') === 'ApplicationInterface') && (magnetT && magnetT.getAttribute('type') === 'InfrastructureInterface');
        var VAL_3228d990 = (magnetS && magnetS.getAttribute('type') === 'ApplicationInterface') && (magnetT && magnetT.getAttribute('type') === 'Node');
        var VAL_54e7391d = (magnetS && magnetS.getAttribute('type') === 'ApplicationInterface') && (magnetT && magnetT.getAttribute('type') === 'SystemSoftware');
        var VAL_50b8ae8d = (magnetS && magnetS.getAttribute('type') === 'ApplicationInterface') && (magnetT && magnetT.getAttribute('type') === 'Device');
        var VAL_255990cc = (magnetS && magnetS.getAttribute('type') === 'ApplicationInterface') && (magnetT && magnetT.getAttribute('type') === 'CommunicationPath');
        var VAL_51c929ae = (magnetS && magnetS.getAttribute('type') === 'ApplicationInterface') && (magnetT && magnetT.getAttribute('type') === 'Network');
        var VAL_3c8bdd5b = (magnetS && magnetS.getAttribute('type') === 'ApplicationInterface') && (magnetT && magnetT.getAttribute('type') === 'Stakeholder');
        var VAL_29d2d081 = (magnetS && magnetS.getAttribute('type') === 'ApplicationInterface') && (magnetT && magnetT.getAttribute('type') === 'Driver');
        var VAL_40e4ea87 = (magnetS && magnetS.getAttribute('type') === 'ApplicationInterface') && (magnetT && magnetT.getAttribute('type') === 'Assessment');
        var VAL_58783f6c = (magnetS && magnetS.getAttribute('type') === 'ApplicationInterface') && (magnetT && magnetT.getAttribute('type') === 'Goal');
        var VAL_3a7b503d = (magnetS && magnetS.getAttribute('type') === 'ApplicationInterface') && (magnetT && magnetT.getAttribute('type') === 'Requirement');
        var VAL_512d92b = (magnetS && magnetS.getAttribute('type') === 'ApplicationInterface') && (magnetT && magnetT.getAttribute('type') === 'Constraint');
        var VAL_62c5bbdc = (magnetS && magnetS.getAttribute('type') === 'ApplicationInterface') && (magnetT && magnetT.getAttribute('type') === 'Principle');
        var VAL_7bdf6bb7 = (magnetS && magnetS.getAttribute('type') === 'ApplicationInterface') && (magnetT && magnetT.getAttribute('type') === 'WorkPackage');
        var VAL_1bc53649 = (magnetS && magnetS.getAttribute('type') === 'ApplicationInterface') && (magnetT && magnetT.getAttribute('type') === 'Deliverable');
        var VAL_88d6f9b = (magnetS && magnetS.getAttribute('type') === 'ApplicationInterface') && (magnetT && magnetT.getAttribute('type') === 'Plateau');
        var VAL_47d93e0d = (magnetS && magnetS.getAttribute('type') === 'ApplicationInterface') && (magnetT && magnetT.getAttribute('type') === 'Gap');
        var VAL_475b7792 = (magnetS && magnetS.getAttribute('type') === 'ApplicationComponent') && (magnetT && magnetT.getAttribute('type') === 'ArchimateElement');
        var VAL_751e664e = (magnetS && magnetS.getAttribute('type') === 'ApplicationComponent') && (magnetT && magnetT.getAttribute('type') === 'Product');
        var VAL_160c3ec1 = (magnetS && magnetS.getAttribute('type') === 'ApplicationComponent') && (magnetT && magnetT.getAttribute('type') === 'BusinessObject');
        var VAL_182b435b = (magnetS && magnetS.getAttribute('type') === 'ApplicationComponent') && (magnetT && magnetT.getAttribute('type') === 'Meaning');
        var VAL_4d0402b = (magnetS && magnetS.getAttribute('type') === 'ApplicationComponent') && (magnetT && magnetT.getAttribute('type') === 'Representation');
        var VAL_2fa7ae9 = (magnetS && magnetS.getAttribute('type') === 'ApplicationComponent') && (magnetT && magnetT.getAttribute('type') === 'BusinessService');
        var VAL_7577b641 = (magnetS && magnetS.getAttribute('type') === 'ApplicationComponent') && (magnetT && magnetT.getAttribute('type') === 'BusinessProcess');
        var VAL_3704122f = (magnetS && magnetS.getAttribute('type') === 'ApplicationComponent') && (magnetT && magnetT.getAttribute('type') === 'BusinessFunction');
        var VAL_3153ddfc = (magnetS && magnetS.getAttribute('type') === 'ApplicationComponent') && (magnetT && magnetT.getAttribute('type') === 'BusinessInteraction');
        var VAL_60afd40d = (magnetS && magnetS.getAttribute('type') === 'ApplicationComponent') && (magnetT && magnetT.getAttribute('type') === 'BusinessEvent');
        var VAL_28a2a3e7 = (magnetS && magnetS.getAttribute('type') === 'ApplicationComponent') && (magnetT && magnetT.getAttribute('type') === 'Location');
        var VAL_3f2049b6 = (magnetS && magnetS.getAttribute('type') === 'ApplicationComponent') && (magnetT && magnetT.getAttribute('type') === 'BusinessInterface');
        var VAL_10b3df93 = (magnetS && magnetS.getAttribute('type') === 'ApplicationComponent') && (magnetT && magnetT.getAttribute('type') === 'BusinessRole');
        var VAL_ea27e34 = (magnetS && magnetS.getAttribute('type') === 'ApplicationComponent') && (magnetT && magnetT.getAttribute('type') === 'BusinessCollaboration');
        var VAL_33a2499c = (magnetS && magnetS.getAttribute('type') === 'ApplicationComponent') && (magnetT && magnetT.getAttribute('type') === 'BusinessActor');
        var VAL_e72dba7 = (magnetS && magnetS.getAttribute('type') === 'ApplicationComponent') && (magnetT && magnetT.getAttribute('type') === 'DataObject');
        var VAL_33c2bd = (magnetS && magnetS.getAttribute('type') === 'ApplicationComponent') && (magnetT && magnetT.getAttribute('type') === 'ApplicationService');
        var VAL_1dfd5f51 = (magnetS && magnetS.getAttribute('type') === 'ApplicationComponent') && (magnetT && magnetT.getAttribute('type') === 'ApplicationFunction');
        var VAL_3c321bdb = (magnetS && magnetS.getAttribute('type') === 'ApplicationComponent') && (magnetT && magnetT.getAttribute('type') === 'ApplicationInteraction');
        var VAL_24855019 = (magnetS && magnetS.getAttribute('type') === 'ApplicationComponent') && (magnetT && magnetT.getAttribute('type') === 'ApplicationInterface');
        var VAL_3abd581e = (magnetS && magnetS.getAttribute('type') === 'ApplicationComponent') && (magnetT && magnetT.getAttribute('type') === 'ApplicationComponent');
        var VAL_4d4d8fcf = (magnetS && magnetS.getAttribute('type') === 'ApplicationComponent') && (magnetT && magnetT.getAttribute('type') === 'ApplicationCollaboration');
        var VAL_610db97e = (magnetS && magnetS.getAttribute('type') === 'ApplicationComponent') && (magnetT && magnetT.getAttribute('type') === 'Artifact');
        var VAL_6f0628de = (magnetS && magnetS.getAttribute('type') === 'ApplicationComponent') && (magnetT && magnetT.getAttribute('type') === 'InfrastructureService');
        var VAL_3fabf088 = (magnetS && magnetS.getAttribute('type') === 'ApplicationComponent') && (magnetT && magnetT.getAttribute('type') === 'InfrastructureInterface');
        var VAL_1e392345 = (magnetS && magnetS.getAttribute('type') === 'ApplicationComponent') && (magnetT && magnetT.getAttribute('type') === 'Node');
        var VAL_12f3afb5 = (magnetS && magnetS.getAttribute('type') === 'ApplicationComponent') && (magnetT && magnetT.getAttribute('type') === 'SystemSoftware');
        var VAL_4ced35ed = (magnetS && magnetS.getAttribute('type') === 'ApplicationComponent') && (magnetT && magnetT.getAttribute('type') === 'Device');
        var VAL_2c22a348 = (magnetS && magnetS.getAttribute('type') === 'ApplicationComponent') && (magnetT && magnetT.getAttribute('type') === 'CommunicationPath');
        var VAL_7bd69e82 = (magnetS && magnetS.getAttribute('type') === 'ApplicationComponent') && (magnetT && magnetT.getAttribute('type') === 'Network');
        var VAL_74d7184a = (magnetS && magnetS.getAttribute('type') === 'ApplicationComponent') && (magnetT && magnetT.getAttribute('type') === 'Stakeholder');
        var VAL_51b01960 = (magnetS && magnetS.getAttribute('type') === 'ApplicationComponent') && (magnetT && magnetT.getAttribute('type') === 'Driver');
        var VAL_6831d8fd = (magnetS && magnetS.getAttribute('type') === 'ApplicationComponent') && (magnetT && magnetT.getAttribute('type') === 'Assessment');
        var VAL_27dc79f7 = (magnetS && magnetS.getAttribute('type') === 'ApplicationComponent') && (magnetT && magnetT.getAttribute('type') === 'Goal');
        var VAL_6b85300e = (magnetS && magnetS.getAttribute('type') === 'ApplicationComponent') && (magnetT && magnetT.getAttribute('type') === 'Requirement');
        var VAL_3aaf4f07 = (magnetS && magnetS.getAttribute('type') === 'ApplicationComponent') && (magnetT && magnetT.getAttribute('type') === 'Constraint');
        var VAL_5cbf9e9f = (magnetS && magnetS.getAttribute('type') === 'ApplicationComponent') && (magnetT && magnetT.getAttribute('type') === 'Principle');
        var VAL_18e8473e = (magnetS && magnetS.getAttribute('type') === 'ApplicationComponent') && (magnetT && magnetT.getAttribute('type') === 'WorkPackage');
        var VAL_5a2f016d = (magnetS && magnetS.getAttribute('type') === 'ApplicationComponent') && (magnetT && magnetT.getAttribute('type') === 'Deliverable');
        var VAL_1a38ba58 = (magnetS && magnetS.getAttribute('type') === 'ApplicationComponent') && (magnetT && magnetT.getAttribute('type') === 'Plateau');
        var VAL_3ad394e6 = (magnetS && magnetS.getAttribute('type') === 'ApplicationComponent') && (magnetT && magnetT.getAttribute('type') === 'Gap');
        var VAL_6058e535 = (magnetS && magnetS.getAttribute('type') === 'ApplicationCollaboration') && (magnetT && magnetT.getAttribute('type') === 'ArchimateElement');
        var VAL_42deb43a = (magnetS && magnetS.getAttribute('type') === 'ApplicationCollaboration') && (magnetT && magnetT.getAttribute('type') === 'Product');
        var VAL_1deb2c43 = (magnetS && magnetS.getAttribute('type') === 'ApplicationCollaboration') && (magnetT && magnetT.getAttribute('type') === 'BusinessObject');
        var VAL_3bb9efbc = (magnetS && magnetS.getAttribute('type') === 'ApplicationCollaboration') && (magnetT && magnetT.getAttribute('type') === 'Meaning');
        var VAL_1cefc4b3 = (magnetS && magnetS.getAttribute('type') === 'ApplicationCollaboration') && (magnetT && magnetT.getAttribute('type') === 'Representation');
        var VAL_2b27cc70 = (magnetS && magnetS.getAttribute('type') === 'ApplicationCollaboration') && (magnetT && magnetT.getAttribute('type') === 'BusinessService');
        var VAL_6f6a7463 = (magnetS && magnetS.getAttribute('type') === 'ApplicationCollaboration') && (magnetT && magnetT.getAttribute('type') === 'BusinessProcess');
        var VAL_1bdaa23d = (magnetS && magnetS.getAttribute('type') === 'ApplicationCollaboration') && (magnetT && magnetT.getAttribute('type') === 'BusinessFunction');
        var VAL_79f227a9 = (magnetS && magnetS.getAttribute('type') === 'ApplicationCollaboration') && (magnetT && magnetT.getAttribute('type') === 'BusinessInteraction');
        var VAL_6ca320ab = (magnetS && magnetS.getAttribute('type') === 'ApplicationCollaboration') && (magnetT && magnetT.getAttribute('type') === 'BusinessEvent');
        var VAL_50d68830 = (magnetS && magnetS.getAttribute('type') === 'ApplicationCollaboration') && (magnetT && magnetT.getAttribute('type') === 'Location');
        var VAL_1e53135d = (magnetS && magnetS.getAttribute('type') === 'ApplicationCollaboration') && (magnetT && magnetT.getAttribute('type') === 'BusinessInterface');
        var VAL_7674a051 = (magnetS && magnetS.getAttribute('type') === 'ApplicationCollaboration') && (magnetT && magnetT.getAttribute('type') === 'BusinessRole');
        var VAL_3a7704c = (magnetS && magnetS.getAttribute('type') === 'ApplicationCollaboration') && (magnetT && magnetT.getAttribute('type') === 'BusinessCollaboration');
        var VAL_6754ef00 = (magnetS && magnetS.getAttribute('type') === 'ApplicationCollaboration') && (magnetT && magnetT.getAttribute('type') === 'BusinessActor');
        var VAL_619bd14c = (magnetS && magnetS.getAttribute('type') === 'ApplicationCollaboration') && (magnetT && magnetT.getAttribute('type') === 'DataObject');
        var VAL_323e8306 = (magnetS && magnetS.getAttribute('type') === 'ApplicationCollaboration') && (magnetT && magnetT.getAttribute('type') === 'ApplicationService');
        var VAL_a23a01d = (magnetS && magnetS.getAttribute('type') === 'ApplicationCollaboration') && (magnetT && magnetT.getAttribute('type') === 'ApplicationFunction');
        var VAL_4acf72b6 = (magnetS && magnetS.getAttribute('type') === 'ApplicationCollaboration') && (magnetT && magnetT.getAttribute('type') === 'ApplicationInteraction');
        var VAL_7561db12 = (magnetS && magnetS.getAttribute('type') === 'ApplicationCollaboration') && (magnetT && magnetT.getAttribute('type') === 'ApplicationInterface');
        var VAL_3301500b = (magnetS && magnetS.getAttribute('type') === 'ApplicationCollaboration') && (magnetT && magnetT.getAttribute('type') === 'ApplicationComponent');
        var VAL_24b52d3e = (magnetS && magnetS.getAttribute('type') === 'ApplicationCollaboration') && (magnetT && magnetT.getAttribute('type') === 'ApplicationCollaboration');
        var VAL_15deb1dc = (magnetS && magnetS.getAttribute('type') === 'ApplicationCollaboration') && (magnetT && magnetT.getAttribute('type') === 'Artifact');
        var VAL_6e9c413e = (magnetS && magnetS.getAttribute('type') === 'ApplicationCollaboration') && (magnetT && magnetT.getAttribute('type') === 'InfrastructureService');
        var VAL_57a4d5ee = (magnetS && magnetS.getAttribute('type') === 'ApplicationCollaboration') && (magnetT && magnetT.getAttribute('type') === 'InfrastructureInterface');
        var VAL_5af5def9 = (magnetS && magnetS.getAttribute('type') === 'ApplicationCollaboration') && (magnetT && magnetT.getAttribute('type') === 'Node');
        var VAL_3a45c42a = (magnetS && magnetS.getAttribute('type') === 'ApplicationCollaboration') && (magnetT && magnetT.getAttribute('type') === 'SystemSoftware');
        var VAL_36dce7ed = (magnetS && magnetS.getAttribute('type') === 'ApplicationCollaboration') && (magnetT && magnetT.getAttribute('type') === 'Device');
        var VAL_47a64f7d = (magnetS && magnetS.getAttribute('type') === 'ApplicationCollaboration') && (magnetT && magnetT.getAttribute('type') === 'CommunicationPath');
        var VAL_33d05366 = (magnetS && magnetS.getAttribute('type') === 'ApplicationCollaboration') && (magnetT && magnetT.getAttribute('type') === 'Network');
        var VAL_27a0a5a2 = (magnetS && magnetS.getAttribute('type') === 'ApplicationCollaboration') && (magnetT && magnetT.getAttribute('type') === 'Stakeholder');
        var VAL_7692cd34 = (magnetS && magnetS.getAttribute('type') === 'ApplicationCollaboration') && (magnetT && magnetT.getAttribute('type') === 'Driver');
        var VAL_33aa93c = (magnetS && magnetS.getAttribute('type') === 'ApplicationCollaboration') && (magnetT && magnetT.getAttribute('type') === 'Assessment');
        var VAL_32c0915e = (magnetS && magnetS.getAttribute('type') === 'ApplicationCollaboration') && (magnetT && magnetT.getAttribute('type') === 'Goal');
        var VAL_106faf11 = (magnetS && magnetS.getAttribute('type') === 'ApplicationCollaboration') && (magnetT && magnetT.getAttribute('type') === 'Requirement');
        var VAL_70f43b45 = (magnetS && magnetS.getAttribute('type') === 'ApplicationCollaboration') && (magnetT && magnetT.getAttribute('type') === 'Constraint');
        var VAL_26d10f2e = (magnetS && magnetS.getAttribute('type') === 'ApplicationCollaboration') && (magnetT && magnetT.getAttribute('type') === 'Principle');
        var VAL_10ad20cb = (magnetS && magnetS.getAttribute('type') === 'ApplicationCollaboration') && (magnetT && magnetT.getAttribute('type') === 'WorkPackage');
        var VAL_7dd712e8 = (magnetS && magnetS.getAttribute('type') === 'ApplicationCollaboration') && (magnetT && magnetT.getAttribute('type') === 'Deliverable');
        var VAL_2c282004 = (magnetS && magnetS.getAttribute('type') === 'ApplicationCollaboration') && (magnetT && magnetT.getAttribute('type') === 'Plateau');
        var VAL_22ee2d0 = (magnetS && magnetS.getAttribute('type') === 'ApplicationCollaboration') && (magnetT && magnetT.getAttribute('type') === 'Gap');
        var VAL_7bfc3126 = (magnetS && magnetS.getAttribute('type') === 'Artifact') && (magnetT && magnetT.getAttribute('type') === 'ArchimateElement');
        var VAL_3e792ce3 = (magnetS && magnetS.getAttribute('type') === 'Artifact') && (magnetT && magnetT.getAttribute('type') === 'Product');
        var VAL_53bc1328 = (magnetS && magnetS.getAttribute('type') === 'Artifact') && (magnetT && magnetT.getAttribute('type') === 'BusinessObject');
        var VAL_26f143ed = (magnetS && magnetS.getAttribute('type') === 'Artifact') && (magnetT && magnetT.getAttribute('type') === 'Meaning');
        var VAL_3c1e3314 = (magnetS && magnetS.getAttribute('type') === 'Artifact') && (magnetT && magnetT.getAttribute('type') === 'Representation');
        var VAL_4b770e40 = (magnetS && magnetS.getAttribute('type') === 'Artifact') && (magnetT && magnetT.getAttribute('type') === 'BusinessService');
        var VAL_78e16155 = (magnetS && magnetS.getAttribute('type') === 'Artifact') && (magnetT && magnetT.getAttribute('type') === 'BusinessProcess');
        var VAL_54a3ab8f = (magnetS && magnetS.getAttribute('type') === 'Artifact') && (magnetT && magnetT.getAttribute('type') === 'BusinessFunction');
        var VAL_1968a49c = (magnetS && magnetS.getAttribute('type') === 'Artifact') && (magnetT && magnetT.getAttribute('type') === 'BusinessInteraction');
        var VAL_6a1ebcff = (magnetS && magnetS.getAttribute('type') === 'Artifact') && (magnetT && magnetT.getAttribute('type') === 'BusinessEvent');
        var VAL_19868320 = (magnetS && magnetS.getAttribute('type') === 'Artifact') && (magnetT && magnetT.getAttribute('type') === 'Location');
        var VAL_50b0bc4c = (magnetS && magnetS.getAttribute('type') === 'Artifact') && (magnetT && magnetT.getAttribute('type') === 'BusinessInterface');
        var VAL_c20be82 = (magnetS && magnetS.getAttribute('type') === 'Artifact') && (magnetT && magnetT.getAttribute('type') === 'BusinessRole');
        var VAL_13c612bd = (magnetS && magnetS.getAttribute('type') === 'Artifact') && (magnetT && magnetT.getAttribute('type') === 'BusinessCollaboration');
        var VAL_3ef41c66 = (magnetS && magnetS.getAttribute('type') === 'Artifact') && (magnetT && magnetT.getAttribute('type') === 'BusinessActor');
        var VAL_6b739528 = (magnetS && magnetS.getAttribute('type') === 'Artifact') && (magnetT && magnetT.getAttribute('type') === 'DataObject');
        var VAL_622ef26a = (magnetS && magnetS.getAttribute('type') === 'Artifact') && (magnetT && magnetT.getAttribute('type') === 'ApplicationService');
        var VAL_41de5768 = (magnetS && magnetS.getAttribute('type') === 'Artifact') && (magnetT && magnetT.getAttribute('type') === 'ApplicationFunction');
        var VAL_5f577419 = (magnetS && magnetS.getAttribute('type') === 'Artifact') && (magnetT && magnetT.getAttribute('type') === 'ApplicationInteraction');
        var VAL_28fa700e = (magnetS && magnetS.getAttribute('type') === 'Artifact') && (magnetT && magnetT.getAttribute('type') === 'ApplicationInterface');
        var VAL_3d526ad9 = (magnetS && magnetS.getAttribute('type') === 'Artifact') && (magnetT && magnetT.getAttribute('type') === 'ApplicationComponent');
        var VAL_e041f0c = (magnetS && magnetS.getAttribute('type') === 'Artifact') && (magnetT && magnetT.getAttribute('type') === 'ApplicationCollaboration');
        var VAL_6a175569 = (magnetS && magnetS.getAttribute('type') === 'Artifact') && (magnetT && magnetT.getAttribute('type') === 'Artifact');
        var VAL_11963225 = (magnetS && magnetS.getAttribute('type') === 'Artifact') && (magnetT && magnetT.getAttribute('type') === 'InfrastructureService');
        var VAL_3f3c966c = (magnetS && magnetS.getAttribute('type') === 'Artifact') && (magnetT && magnetT.getAttribute('type') === 'InfrastructureInterface');
        var VAL_11ee02f8 = (magnetS && magnetS.getAttribute('type') === 'Artifact') && (magnetT && magnetT.getAttribute('type') === 'Node');
        var VAL_4102b1b1 = (magnetS && magnetS.getAttribute('type') === 'Artifact') && (magnetT && magnetT.getAttribute('type') === 'SystemSoftware');
        var VAL_61a5b4ae = (magnetS && magnetS.getAttribute('type') === 'Artifact') && (magnetT && magnetT.getAttribute('type') === 'Device');
        var VAL_3a71c100 = (magnetS && magnetS.getAttribute('type') === 'Artifact') && (magnetT && magnetT.getAttribute('type') === 'CommunicationPath');
        var VAL_5b69fd74 = (magnetS && magnetS.getAttribute('type') === 'Artifact') && (magnetT && magnetT.getAttribute('type') === 'Network');
        var VAL_f325091 = (magnetS && magnetS.getAttribute('type') === 'Artifact') && (magnetT && magnetT.getAttribute('type') === 'Stakeholder');
        var VAL_437e951d = (magnetS && magnetS.getAttribute('type') === 'Artifact') && (magnetT && magnetT.getAttribute('type') === 'Driver');
        var VAL_77b325b3 = (magnetS && magnetS.getAttribute('type') === 'Artifact') && (magnetT && magnetT.getAttribute('type') === 'Assessment');
        var VAL_63a5e46c = (magnetS && magnetS.getAttribute('type') === 'Artifact') && (magnetT && magnetT.getAttribute('type') === 'Goal');
        var VAL_7e8e8651 = (magnetS && magnetS.getAttribute('type') === 'Artifact') && (magnetT && magnetT.getAttribute('type') === 'Requirement');
        var VAL_49ef32e0 = (magnetS && magnetS.getAttribute('type') === 'Artifact') && (magnetT && magnetT.getAttribute('type') === 'Constraint');
        var VAL_271f18d3 = (magnetS && magnetS.getAttribute('type') === 'Artifact') && (magnetT && magnetT.getAttribute('type') === 'Principle');
        var VAL_6bd51ed8 = (magnetS && magnetS.getAttribute('type') === 'Artifact') && (magnetT && magnetT.getAttribute('type') === 'WorkPackage');
        var VAL_61e3a1fd = (magnetS && magnetS.getAttribute('type') === 'Artifact') && (magnetT && magnetT.getAttribute('type') === 'Deliverable');
        var VAL_51abf713 = (magnetS && magnetS.getAttribute('type') === 'Artifact') && (magnetT && magnetT.getAttribute('type') === 'Plateau');
        var VAL_eadb475 = (magnetS && magnetS.getAttribute('type') === 'Artifact') && (magnetT && magnetT.getAttribute('type') === 'Gap');
        var VAL_4d4d48a6 = (magnetS && magnetS.getAttribute('type') === 'InfrastructureService') && (magnetT && magnetT.getAttribute('type') === 'ArchimateElement');
        var VAL_315df4bb = (magnetS && magnetS.getAttribute('type') === 'InfrastructureService') && (magnetT && magnetT.getAttribute('type') === 'Product');
        var VAL_3fc08eec = (magnetS && magnetS.getAttribute('type') === 'InfrastructureService') && (magnetT && magnetT.getAttribute('type') === 'BusinessObject');
        var VAL_5cad8b7d = (magnetS && magnetS.getAttribute('type') === 'InfrastructureService') && (magnetT && magnetT.getAttribute('type') === 'Meaning');
        var VAL_7b02e036 = (magnetS && magnetS.getAttribute('type') === 'InfrastructureService') && (magnetT && magnetT.getAttribute('type') === 'Representation');
        var VAL_25243bc1 = (magnetS && magnetS.getAttribute('type') === 'InfrastructureService') && (magnetT && magnetT.getAttribute('type') === 'BusinessService');
        var VAL_1e287667 = (magnetS && magnetS.getAttribute('type') === 'InfrastructureService') && (magnetT && magnetT.getAttribute('type') === 'BusinessProcess');
        var VAL_2e6ee0bc = (magnetS && magnetS.getAttribute('type') === 'InfrastructureService') && (magnetT && magnetT.getAttribute('type') === 'BusinessFunction');
        var VAL_4201a617 = (magnetS && magnetS.getAttribute('type') === 'InfrastructureService') && (magnetT && magnetT.getAttribute('type') === 'BusinessInteraction');
        var VAL_467f77a5 = (magnetS && magnetS.getAttribute('type') === 'InfrastructureService') && (magnetT && magnetT.getAttribute('type') === 'BusinessEvent');
        var VAL_1bb9aa43 = (magnetS && magnetS.getAttribute('type') === 'InfrastructureService') && (magnetT && magnetT.getAttribute('type') === 'Location');
        var VAL_420bc288 = (magnetS && magnetS.getAttribute('type') === 'InfrastructureService') && (magnetT && magnetT.getAttribute('type') === 'BusinessInterface');
        var VAL_df5f5c0 = (magnetS && magnetS.getAttribute('type') === 'InfrastructureService') && (magnetT && magnetT.getAttribute('type') === 'BusinessRole');
        var VAL_308a6984 = (magnetS && magnetS.getAttribute('type') === 'InfrastructureService') && (magnetT && magnetT.getAttribute('type') === 'BusinessCollaboration');
        var VAL_66b72664 = (magnetS && magnetS.getAttribute('type') === 'InfrastructureService') && (magnetT && magnetT.getAttribute('type') === 'BusinessActor');
        var VAL_7a34b7b8 = (magnetS && magnetS.getAttribute('type') === 'InfrastructureService') && (magnetT && magnetT.getAttribute('type') === 'DataObject');
        var VAL_58cd06cb = (magnetS && magnetS.getAttribute('type') === 'InfrastructureService') && (magnetT && magnetT.getAttribute('type') === 'ApplicationService');
        var VAL_3be8821f = (magnetS && magnetS.getAttribute('type') === 'InfrastructureService') && (magnetT && magnetT.getAttribute('type') === 'ApplicationFunction');
        var VAL_64b31700 = (magnetS && magnetS.getAttribute('type') === 'InfrastructureService') && (magnetT && magnetT.getAttribute('type') === 'ApplicationInteraction');
        var VAL_3b65e559 = (magnetS && magnetS.getAttribute('type') === 'InfrastructureService') && (magnetT && magnetT.getAttribute('type') === 'ApplicationInterface');
        var VAL_bae47a0 = (magnetS && magnetS.getAttribute('type') === 'InfrastructureService') && (magnetT && magnetT.getAttribute('type') === 'ApplicationComponent');
        var VAL_74a9c4b0 = (magnetS && magnetS.getAttribute('type') === 'InfrastructureService') && (magnetT && magnetT.getAttribute('type') === 'ApplicationCollaboration');
        var VAL_85ec632 = (magnetS && magnetS.getAttribute('type') === 'InfrastructureService') && (magnetT && magnetT.getAttribute('type') === 'Artifact');
        var VAL_1c05a54d = (magnetS && magnetS.getAttribute('type') === 'InfrastructureService') && (magnetT && magnetT.getAttribute('type') === 'InfrastructureService');
        var VAL_65ef722a = (magnetS && magnetS.getAttribute('type') === 'InfrastructureService') && (magnetT && magnetT.getAttribute('type') === 'InfrastructureInterface');
        var VAL_5fd9b663 = (magnetS && magnetS.getAttribute('type') === 'InfrastructureService') && (magnetT && magnetT.getAttribute('type') === 'Node');
        var VAL_214894fc = (magnetS && magnetS.getAttribute('type') === 'InfrastructureService') && (magnetT && magnetT.getAttribute('type') === 'SystemSoftware');
        var VAL_10567255 = (magnetS && magnetS.getAttribute('type') === 'InfrastructureService') && (magnetT && magnetT.getAttribute('type') === 'Device');
        var VAL_e362c57 = (magnetS && magnetS.getAttribute('type') === 'InfrastructureService') && (magnetT && magnetT.getAttribute('type') === 'CommunicationPath');
        var VAL_1c4ee95c = (magnetS && magnetS.getAttribute('type') === 'InfrastructureService') && (magnetT && magnetT.getAttribute('type') === 'Network');
        var VAL_79c4715d = (magnetS && magnetS.getAttribute('type') === 'InfrastructureService') && (magnetT && magnetT.getAttribute('type') === 'Stakeholder');
        var VAL_5aa360ea = (magnetS && magnetS.getAttribute('type') === 'InfrastructureService') && (magnetT && magnetT.getAttribute('type') === 'Driver');
        var VAL_6548bb7d = (magnetS && magnetS.getAttribute('type') === 'InfrastructureService') && (magnetT && magnetT.getAttribute('type') === 'Assessment');
        var VAL_e27ba81 = (magnetS && magnetS.getAttribute('type') === 'InfrastructureService') && (magnetT && magnetT.getAttribute('type') === 'Goal');
        var VAL_54336c81 = (magnetS && magnetS.getAttribute('type') === 'InfrastructureService') && (magnetT && magnetT.getAttribute('type') === 'Requirement');
        var VAL_1556f2dd = (magnetS && magnetS.getAttribute('type') === 'InfrastructureService') && (magnetT && magnetT.getAttribute('type') === 'Constraint');
        var VAL_35e52059 = (magnetS && magnetS.getAttribute('type') === 'InfrastructureService') && (magnetT && magnetT.getAttribute('type') === 'Principle');
        var VAL_62577d6 = (magnetS && magnetS.getAttribute('type') === 'InfrastructureService') && (magnetT && magnetT.getAttribute('type') === 'WorkPackage');
        var VAL_49bd54f7 = (magnetS && magnetS.getAttribute('type') === 'InfrastructureService') && (magnetT && magnetT.getAttribute('type') === 'Deliverable');
        var VAL_6b5f8707 = (magnetS && magnetS.getAttribute('type') === 'InfrastructureService') && (magnetT && magnetT.getAttribute('type') === 'Plateau');
        var VAL_772485dd = (magnetS && magnetS.getAttribute('type') === 'InfrastructureService') && (magnetT && magnetT.getAttribute('type') === 'Gap');
        var VAL_5a12c728 = (magnetS && magnetS.getAttribute('type') === 'InfrastructureInterface') && (magnetT && magnetT.getAttribute('type') === 'ArchimateElement');
        var VAL_79ab3a71 = (magnetS && magnetS.getAttribute('type') === 'InfrastructureInterface') && (magnetT && magnetT.getAttribute('type') === 'Product');
        var VAL_6e5bfdfc = (magnetS && magnetS.getAttribute('type') === 'InfrastructureInterface') && (magnetT && magnetT.getAttribute('type') === 'BusinessObject');
        var VAL_3d829787 = (magnetS && magnetS.getAttribute('type') === 'InfrastructureInterface') && (magnetT && magnetT.getAttribute('type') === 'Meaning');
        var VAL_71652c98 = (magnetS && magnetS.getAttribute('type') === 'InfrastructureInterface') && (magnetT && magnetT.getAttribute('type') === 'Representation');
        var VAL_51bde877 = (magnetS && magnetS.getAttribute('type') === 'InfrastructureInterface') && (magnetT && magnetT.getAttribute('type') === 'BusinessService');
        var VAL_60b85ba1 = (magnetS && magnetS.getAttribute('type') === 'InfrastructureInterface') && (magnetT && magnetT.getAttribute('type') === 'BusinessProcess');
        var VAL_492fc69e = (magnetS && magnetS.getAttribute('type') === 'InfrastructureInterface') && (magnetT && magnetT.getAttribute('type') === 'BusinessFunction');
        var VAL_117632cf = (magnetS && magnetS.getAttribute('type') === 'InfrastructureInterface') && (magnetT && magnetT.getAttribute('type') === 'BusinessInteraction');
        var VAL_2fb68ec6 = (magnetS && magnetS.getAttribute('type') === 'InfrastructureInterface') && (magnetT && magnetT.getAttribute('type') === 'BusinessEvent');
        var VAL_d71adc2 = (magnetS && magnetS.getAttribute('type') === 'InfrastructureInterface') && (magnetT && magnetT.getAttribute('type') === 'Location');
        var VAL_3add81c4 = (magnetS && magnetS.getAttribute('type') === 'InfrastructureInterface') && (magnetT && magnetT.getAttribute('type') === 'BusinessInterface');
        var VAL_1a1d3c1a = (magnetS && magnetS.getAttribute('type') === 'InfrastructureInterface') && (magnetT && magnetT.getAttribute('type') === 'BusinessRole');
        var VAL_1c65121 = (magnetS && magnetS.getAttribute('type') === 'InfrastructureInterface') && (magnetT && magnetT.getAttribute('type') === 'BusinessCollaboration');
        var VAL_159e366 = (magnetS && magnetS.getAttribute('type') === 'InfrastructureInterface') && (magnetT && magnetT.getAttribute('type') === 'BusinessActor');
        var VAL_57dc9128 = (magnetS && magnetS.getAttribute('type') === 'InfrastructureInterface') && (magnetT && magnetT.getAttribute('type') === 'DataObject');
        var VAL_24528a25 = (magnetS && magnetS.getAttribute('type') === 'InfrastructureInterface') && (magnetT && magnetT.getAttribute('type') === 'ApplicationService');
        var VAL_17ae98d7 = (magnetS && magnetS.getAttribute('type') === 'InfrastructureInterface') && (magnetT && magnetT.getAttribute('type') === 'ApplicationFunction');
        var VAL_59221b97 = (magnetS && magnetS.getAttribute('type') === 'InfrastructureInterface') && (magnetT && magnetT.getAttribute('type') === 'ApplicationInteraction');
        var VAL_6ac4944a = (magnetS && magnetS.getAttribute('type') === 'InfrastructureInterface') && (magnetT && magnetT.getAttribute('type') === 'ApplicationInterface');
        var VAL_5a772895 = (magnetS && magnetS.getAttribute('type') === 'InfrastructureInterface') && (magnetT && magnetT.getAttribute('type') === 'ApplicationComponent');
        var VAL_39fc6b2c = (magnetS && magnetS.getAttribute('type') === 'InfrastructureInterface') && (magnetT && magnetT.getAttribute('type') === 'ApplicationCollaboration');
        var VAL_704b2127 = (magnetS && magnetS.getAttribute('type') === 'InfrastructureInterface') && (magnetT && magnetT.getAttribute('type') === 'Artifact');
        var VAL_3ee39da0 = (magnetS && magnetS.getAttribute('type') === 'InfrastructureInterface') && (magnetT && magnetT.getAttribute('type') === 'InfrastructureService');
        var VAL_5d332969 = (magnetS && magnetS.getAttribute('type') === 'InfrastructureInterface') && (magnetT && magnetT.getAttribute('type') === 'InfrastructureInterface');
        var VAL_7cc9ce8 = (magnetS && magnetS.getAttribute('type') === 'InfrastructureInterface') && (magnetT && magnetT.getAttribute('type') === 'Node');
        var VAL_2e27d72f = (magnetS && magnetS.getAttribute('type') === 'InfrastructureInterface') && (magnetT && magnetT.getAttribute('type') === 'SystemSoftware');
        var VAL_c0b41d6 = (magnetS && magnetS.getAttribute('type') === 'InfrastructureInterface') && (magnetT && magnetT.getAttribute('type') === 'Device');
        var VAL_4837595f = (magnetS && magnetS.getAttribute('type') === 'InfrastructureInterface') && (magnetT && magnetT.getAttribute('type') === 'CommunicationPath');
        var VAL_2bffa76d = (magnetS && magnetS.getAttribute('type') === 'InfrastructureInterface') && (magnetT && magnetT.getAttribute('type') === 'Network');
        var VAL_3b718392 = (magnetS && magnetS.getAttribute('type') === 'InfrastructureInterface') && (magnetT && magnetT.getAttribute('type') === 'Stakeholder');
        var VAL_6d2260db = (magnetS && magnetS.getAttribute('type') === 'InfrastructureInterface') && (magnetT && magnetT.getAttribute('type') === 'Driver');
        var VAL_1f2d2181 = (magnetS && magnetS.getAttribute('type') === 'InfrastructureInterface') && (magnetT && magnetT.getAttribute('type') === 'Assessment');
        var VAL_49bf29c6 = (magnetS && magnetS.getAttribute('type') === 'InfrastructureInterface') && (magnetT && magnetT.getAttribute('type') === 'Goal');
        var VAL_7ee55e70 = (magnetS && magnetS.getAttribute('type') === 'InfrastructureInterface') && (magnetT && magnetT.getAttribute('type') === 'Requirement');
        var VAL_3fcdcf = (magnetS && magnetS.getAttribute('type') === 'InfrastructureInterface') && (magnetT && magnetT.getAttribute('type') === 'Constraint');
        var VAL_7668d560 = (magnetS && magnetS.getAttribute('type') === 'InfrastructureInterface') && (magnetT && magnetT.getAttribute('type') === 'Principle');
        var VAL_46292372 = (magnetS && magnetS.getAttribute('type') === 'InfrastructureInterface') && (magnetT && magnetT.getAttribute('type') === 'WorkPackage');
        var VAL_126be319 = (magnetS && magnetS.getAttribute('type') === 'InfrastructureInterface') && (magnetT && magnetT.getAttribute('type') === 'Deliverable');
        var VAL_6c44052e = (magnetS && magnetS.getAttribute('type') === 'InfrastructureInterface') && (magnetT && magnetT.getAttribute('type') === 'Plateau');
        var VAL_5c371e13 = (magnetS && magnetS.getAttribute('type') === 'InfrastructureInterface') && (magnetT && magnetT.getAttribute('type') === 'Gap');
        var VAL_530a8454 = (magnetS && magnetS.getAttribute('type') === 'Node') && (magnetT && magnetT.getAttribute('type') === 'ArchimateElement');
        var VAL_1e34c607 = (magnetS && magnetS.getAttribute('type') === 'Node') && (magnetT && magnetT.getAttribute('type') === 'Product');
        var VAL_5215cd9a = (magnetS && magnetS.getAttribute('type') === 'Node') && (magnetT && magnetT.getAttribute('type') === 'BusinessObject');
        var VAL_36b6964d = (magnetS && magnetS.getAttribute('type') === 'Node') && (magnetT && magnetT.getAttribute('type') === 'Meaning');
        var VAL_31198ceb = (magnetS && magnetS.getAttribute('type') === 'Node') && (magnetT && magnetT.getAttribute('type') === 'Representation');
        var VAL_9257031 = (magnetS && magnetS.getAttribute('type') === 'Node') && (magnetT && magnetT.getAttribute('type') === 'BusinessService');
        var VAL_75201592 = (magnetS && magnetS.getAttribute('type') === 'Node') && (magnetT && magnetT.getAttribute('type') === 'BusinessProcess');
        var VAL_7726e185 = (magnetS && magnetS.getAttribute('type') === 'Node') && (magnetT && magnetT.getAttribute('type') === 'BusinessFunction');
        var VAL_aa5455e = (magnetS && magnetS.getAttribute('type') === 'Node') && (magnetT && magnetT.getAttribute('type') === 'BusinessInteraction');
        var VAL_282308c3 = (magnetS && magnetS.getAttribute('type') === 'Node') && (magnetT && magnetT.getAttribute('type') === 'BusinessEvent');
        var VAL_5dda14d0 = (magnetS && magnetS.getAttribute('type') === 'Node') && (magnetT && magnetT.getAttribute('type') === 'Location');
        var VAL_1db0ec27 = (magnetS && magnetS.getAttribute('type') === 'Node') && (magnetT && magnetT.getAttribute('type') === 'BusinessInterface');
        var VAL_3d9fc57a = (magnetS && magnetS.getAttribute('type') === 'Node') && (magnetT && magnetT.getAttribute('type') === 'BusinessRole');
        var VAL_d4ab71a = (magnetS && magnetS.getAttribute('type') === 'Node') && (magnetT && magnetT.getAttribute('type') === 'BusinessCollaboration');
        var VAL_3b4ef7 = (magnetS && magnetS.getAttribute('type') === 'Node') && (magnetT && magnetT.getAttribute('type') === 'BusinessActor');
        var VAL_1af05b03 = (magnetS && magnetS.getAttribute('type') === 'Node') && (magnetT && magnetT.getAttribute('type') === 'DataObject');
        var VAL_5987e932 = (magnetS && magnetS.getAttribute('type') === 'Node') && (magnetT && magnetT.getAttribute('type') === 'ApplicationService');
        var VAL_1ad777f = (magnetS && magnetS.getAttribute('type') === 'Node') && (magnetT && magnetT.getAttribute('type') === 'ApplicationFunction');
        var VAL_5bbbdd4b = (magnetS && magnetS.getAttribute('type') === 'Node') && (magnetT && magnetT.getAttribute('type') === 'ApplicationInteraction');
        var VAL_438bad7c = (magnetS && magnetS.getAttribute('type') === 'Node') && (magnetT && magnetT.getAttribute('type') === 'ApplicationInterface');
        var VAL_25230246 = (magnetS && magnetS.getAttribute('type') === 'Node') && (magnetT && magnetT.getAttribute('type') === 'ApplicationComponent');
        var VAL_4fdf8f12 = (magnetS && magnetS.getAttribute('type') === 'Node') && (magnetT && magnetT.getAttribute('type') === 'ApplicationCollaboration');
        var VAL_4a8b5227 = (magnetS && magnetS.getAttribute('type') === 'Node') && (magnetT && magnetT.getAttribute('type') === 'Artifact');
        var VAL_54f5f647 = (magnetS && magnetS.getAttribute('type') === 'Node') && (magnetT && magnetT.getAttribute('type') === 'InfrastructureService');
        var VAL_6979efad = (magnetS && magnetS.getAttribute('type') === 'Node') && (magnetT && magnetT.getAttribute('type') === 'InfrastructureInterface');
        var VAL_5a6d5a8f = (magnetS && magnetS.getAttribute('type') === 'Node') && (magnetT && magnetT.getAttribute('type') === 'Node');
        var VAL_4a67318f = (magnetS && magnetS.getAttribute('type') === 'Node') && (magnetT && magnetT.getAttribute('type') === 'SystemSoftware');
        var VAL_315ba14a = (magnetS && magnetS.getAttribute('type') === 'Node') && (magnetT && magnetT.getAttribute('type') === 'Device');
        var VAL_17f9344b = (magnetS && magnetS.getAttribute('type') === 'Node') && (magnetT && magnetT.getAttribute('type') === 'CommunicationPath');
        var VAL_27f0ad19 = (magnetS && magnetS.getAttribute('type') === 'Node') && (magnetT && magnetT.getAttribute('type') === 'Network');
        var VAL_54e81b21 = (magnetS && magnetS.getAttribute('type') === 'Node') && (magnetT && magnetT.getAttribute('type') === 'Stakeholder');
        var VAL_38d5b107 = (magnetS && magnetS.getAttribute('type') === 'Node') && (magnetT && magnetT.getAttribute('type') === 'Driver');
        var VAL_6650813a = (magnetS && magnetS.getAttribute('type') === 'Node') && (magnetT && magnetT.getAttribute('type') === 'Assessment');
        var VAL_44ea608c = (magnetS && magnetS.getAttribute('type') === 'Node') && (magnetT && magnetT.getAttribute('type') === 'Goal');
        var VAL_50cf5a23 = (magnetS && magnetS.getAttribute('type') === 'Node') && (magnetT && magnetT.getAttribute('type') === 'Requirement');
        var VAL_450794b4 = (magnetS && magnetS.getAttribute('type') === 'Node') && (magnetT && magnetT.getAttribute('type') === 'Constraint');
        var VAL_273c947f = (magnetS && magnetS.getAttribute('type') === 'Node') && (magnetT && magnetT.getAttribute('type') === 'Principle');
        var VAL_30457e14 = (magnetS && magnetS.getAttribute('type') === 'Node') && (magnetT && magnetT.getAttribute('type') === 'WorkPackage');
        var VAL_1af1347d = (magnetS && magnetS.getAttribute('type') === 'Node') && (magnetT && magnetT.getAttribute('type') === 'Deliverable');
        var VAL_632aa1a3 = (magnetS && magnetS.getAttribute('type') === 'Node') && (magnetT && magnetT.getAttribute('type') === 'Plateau');
        var VAL_20765ed5 = (magnetS && magnetS.getAttribute('type') === 'Node') && (magnetT && magnetT.getAttribute('type') === 'Gap');
        var VAL_3b582111 = (magnetS && magnetS.getAttribute('type') === 'SystemSoftware') && (magnetT && magnetT.getAttribute('type') === 'ArchimateElement');
        var VAL_2899a8db = (magnetS && magnetS.getAttribute('type') === 'SystemSoftware') && (magnetT && magnetT.getAttribute('type') === 'Product');
        var VAL_1e8823d2 = (magnetS && magnetS.getAttribute('type') === 'SystemSoftware') && (magnetT && magnetT.getAttribute('type') === 'BusinessObject');
        var VAL_c1a4620 = (magnetS && magnetS.getAttribute('type') === 'SystemSoftware') && (magnetT && magnetT.getAttribute('type') === 'Meaning');
        var VAL_76b0ae1b = (magnetS && magnetS.getAttribute('type') === 'SystemSoftware') && (magnetT && magnetT.getAttribute('type') === 'Representation');
        var VAL_130a0f66 = (magnetS && magnetS.getAttribute('type') === 'SystemSoftware') && (magnetT && magnetT.getAttribute('type') === 'BusinessService');
        var VAL_4c432866 = (magnetS && magnetS.getAttribute('type') === 'SystemSoftware') && (magnetT && magnetT.getAttribute('type') === 'BusinessProcess');
        var VAL_12365c88 = (magnetS && magnetS.getAttribute('type') === 'SystemSoftware') && (magnetT && magnetT.getAttribute('type') === 'BusinessFunction');
        var VAL_6105f8a3 = (magnetS && magnetS.getAttribute('type') === 'SystemSoftware') && (magnetT && magnetT.getAttribute('type') === 'BusinessInteraction');
        var VAL_2237bada = (magnetS && magnetS.getAttribute('type') === 'SystemSoftware') && (magnetT && magnetT.getAttribute('type') === 'BusinessEvent');
        var VAL_77e2a6e2 = (magnetS && magnetS.getAttribute('type') === 'SystemSoftware') && (magnetT && magnetT.getAttribute('type') === 'Location');
        var VAL_5710768a = (magnetS && magnetS.getAttribute('type') === 'SystemSoftware') && (magnetT && magnetT.getAttribute('type') === 'BusinessInterface');
        var VAL_199e4c2b = (magnetS && magnetS.getAttribute('type') === 'SystemSoftware') && (magnetT && magnetT.getAttribute('type') === 'BusinessRole');
        var VAL_6e0d4a8 = (magnetS && magnetS.getAttribute('type') === 'SystemSoftware') && (magnetT && magnetT.getAttribute('type') === 'BusinessCollaboration');
        var VAL_64d7b720 = (magnetS && magnetS.getAttribute('type') === 'SystemSoftware') && (magnetT && magnetT.getAttribute('type') === 'BusinessActor');
        var VAL_30272916 = (magnetS && magnetS.getAttribute('type') === 'SystemSoftware') && (magnetT && magnetT.getAttribute('type') === 'DataObject');
        var VAL_5bb3d42d = (magnetS && magnetS.getAttribute('type') === 'SystemSoftware') && (magnetT && magnetT.getAttribute('type') === 'ApplicationService');
        var VAL_5bf61e67 = (magnetS && magnetS.getAttribute('type') === 'SystemSoftware') && (magnetT && magnetT.getAttribute('type') === 'ApplicationFunction');
        var VAL_2c1dc8e = (magnetS && magnetS.getAttribute('type') === 'SystemSoftware') && (magnetT && magnetT.getAttribute('type') === 'ApplicationInteraction');
        var VAL_b273a59 = (magnetS && magnetS.getAttribute('type') === 'SystemSoftware') && (magnetT && magnetT.getAttribute('type') === 'ApplicationInterface');
        var VAL_4e7095ac = (magnetS && magnetS.getAttribute('type') === 'SystemSoftware') && (magnetT && magnetT.getAttribute('type') === 'ApplicationComponent');
        var VAL_251ebf23 = (magnetS && magnetS.getAttribute('type') === 'SystemSoftware') && (magnetT && magnetT.getAttribute('type') === 'ApplicationCollaboration');
        var VAL_29b732a2 = (magnetS && magnetS.getAttribute('type') === 'SystemSoftware') && (magnetT && magnetT.getAttribute('type') === 'Artifact');
        var VAL_1b70203f = (magnetS && magnetS.getAttribute('type') === 'SystemSoftware') && (magnetT && magnetT.getAttribute('type') === 'InfrastructureService');
        var VAL_51671b08 = (magnetS && magnetS.getAttribute('type') === 'SystemSoftware') && (magnetT && magnetT.getAttribute('type') === 'InfrastructureInterface');
        var VAL_15051a0 = (magnetS && magnetS.getAttribute('type') === 'SystemSoftware') && (magnetT && magnetT.getAttribute('type') === 'Node');
        var VAL_1162410a = (magnetS && magnetS.getAttribute('type') === 'SystemSoftware') && (magnetT && magnetT.getAttribute('type') === 'SystemSoftware');
        var VAL_b09fac1 = (magnetS && magnetS.getAttribute('type') === 'SystemSoftware') && (magnetT && magnetT.getAttribute('type') === 'Device');
        var VAL_62df0ff3 = (magnetS && magnetS.getAttribute('type') === 'SystemSoftware') && (magnetT && magnetT.getAttribute('type') === 'CommunicationPath');
        var VAL_61019f59 = (magnetS && magnetS.getAttribute('type') === 'SystemSoftware') && (magnetT && magnetT.getAttribute('type') === 'Network');
        var VAL_62e8f862 = (magnetS && magnetS.getAttribute('type') === 'SystemSoftware') && (magnetT && magnetT.getAttribute('type') === 'Stakeholder');
        var VAL_26f3d90c = (magnetS && magnetS.getAttribute('type') === 'SystemSoftware') && (magnetT && magnetT.getAttribute('type') === 'Driver');
        var VAL_3c49fab6 = (magnetS && magnetS.getAttribute('type') === 'SystemSoftware') && (magnetT && magnetT.getAttribute('type') === 'Assessment');
        var VAL_515f4131 = (magnetS && magnetS.getAttribute('type') === 'SystemSoftware') && (magnetT && magnetT.getAttribute('type') === 'Goal');
        var VAL_74518890 = (magnetS && magnetS.getAttribute('type') === 'SystemSoftware') && (magnetT && magnetT.getAttribute('type') === 'Requirement');
        var VAL_4c5204af = (magnetS && magnetS.getAttribute('type') === 'SystemSoftware') && (magnetT && magnetT.getAttribute('type') === 'Constraint');
        var VAL_3f3ddbd9 = (magnetS && magnetS.getAttribute('type') === 'SystemSoftware') && (magnetT && magnetT.getAttribute('type') === 'Principle');
        var VAL_14c053c6 = (magnetS && magnetS.getAttribute('type') === 'SystemSoftware') && (magnetT && magnetT.getAttribute('type') === 'WorkPackage');
        var VAL_6c2d4cc6 = (magnetS && magnetS.getAttribute('type') === 'SystemSoftware') && (magnetT && magnetT.getAttribute('type') === 'Deliverable');
        var VAL_30865a90 = (magnetS && magnetS.getAttribute('type') === 'SystemSoftware') && (magnetT && magnetT.getAttribute('type') === 'Plateau');
        var VAL_6134ac4a = (magnetS && magnetS.getAttribute('type') === 'SystemSoftware') && (magnetT && magnetT.getAttribute('type') === 'Gap');
        var VAL_777c9dc9 = (magnetS && magnetS.getAttribute('type') === 'Device') && (magnetT && magnetT.getAttribute('type') === 'ArchimateElement');
        var VAL_71b1a49c = (magnetS && magnetS.getAttribute('type') === 'Device') && (magnetT && magnetT.getAttribute('type') === 'Product');
        var VAL_73e132e0 = (magnetS && magnetS.getAttribute('type') === 'Device') && (magnetT && magnetT.getAttribute('type') === 'BusinessObject');
        var VAL_3773862a = (magnetS && magnetS.getAttribute('type') === 'Device') && (magnetT && magnetT.getAttribute('type') === 'Meaning');
        var VAL_2472c7d8 = (magnetS && magnetS.getAttribute('type') === 'Device') && (magnetT && magnetT.getAttribute('type') === 'Representation');
        var VAL_589b028e = (magnetS && magnetS.getAttribute('type') === 'Device') && (magnetT && magnetT.getAttribute('type') === 'BusinessService');
        var VAL_22175d4f = (magnetS && magnetS.getAttribute('type') === 'Device') && (magnetT && magnetT.getAttribute('type') === 'BusinessProcess');
        var VAL_9fecdf1 = (magnetS && magnetS.getAttribute('type') === 'Device') && (magnetT && magnetT.getAttribute('type') === 'BusinessFunction');
        var VAL_3b809711 = (magnetS && magnetS.getAttribute('type') === 'Device') && (magnetT && magnetT.getAttribute('type') === 'BusinessInteraction');
        var VAL_3b0f7d9d = (magnetS && magnetS.getAttribute('type') === 'Device') && (magnetT && magnetT.getAttribute('type') === 'BusinessEvent');
        var VAL_236ab296 = (magnetS && magnetS.getAttribute('type') === 'Device') && (magnetT && magnetT.getAttribute('type') === 'Location');
        var VAL_5c84624f = (magnetS && magnetS.getAttribute('type') === 'Device') && (magnetT && magnetT.getAttribute('type') === 'BusinessInterface');
        var VAL_63034ed1 = (magnetS && magnetS.getAttribute('type') === 'Device') && (magnetT && magnetT.getAttribute('type') === 'BusinessRole');
        var VAL_232024b9 = (magnetS && magnetS.getAttribute('type') === 'Device') && (magnetT && magnetT.getAttribute('type') === 'BusinessCollaboration');
        var VAL_55a8dc49 = (magnetS && magnetS.getAttribute('type') === 'Device') && (magnetT && magnetT.getAttribute('type') === 'BusinessActor');
        var VAL_2a415aa9 = (magnetS && magnetS.getAttribute('type') === 'Device') && (magnetT && magnetT.getAttribute('type') === 'DataObject');
        var VAL_53cdecf6 = (magnetS && magnetS.getAttribute('type') === 'Device') && (magnetT && magnetT.getAttribute('type') === 'ApplicationService');
        var VAL_71ea1fda = (magnetS && magnetS.getAttribute('type') === 'Device') && (magnetT && magnetT.getAttribute('type') === 'ApplicationFunction');
        var VAL_62b3df3a = (magnetS && magnetS.getAttribute('type') === 'Device') && (magnetT && magnetT.getAttribute('type') === 'ApplicationInteraction');
        var VAL_420745d7 = (magnetS && magnetS.getAttribute('type') === 'Device') && (magnetT && magnetT.getAttribute('type') === 'ApplicationInterface');
        var VAL_7e11ab3d = (magnetS && magnetS.getAttribute('type') === 'Device') && (magnetT && magnetT.getAttribute('type') === 'ApplicationComponent');
        var VAL_5fa47fea = (magnetS && magnetS.getAttribute('type') === 'Device') && (magnetT && magnetT.getAttribute('type') === 'ApplicationCollaboration');
        var VAL_2392212b = (magnetS && magnetS.getAttribute('type') === 'Device') && (magnetT && magnetT.getAttribute('type') === 'Artifact');
        var VAL_5b43e173 = (magnetS && magnetS.getAttribute('type') === 'Device') && (magnetT && magnetT.getAttribute('type') === 'InfrastructureService');
        var VAL_28f8e165 = (magnetS && magnetS.getAttribute('type') === 'Device') && (magnetT && magnetT.getAttribute('type') === 'InfrastructureInterface');
        var VAL_545f80bf = (magnetS && magnetS.getAttribute('type') === 'Device') && (magnetT && magnetT.getAttribute('type') === 'Node');
        var VAL_66f66866 = (magnetS && magnetS.getAttribute('type') === 'Device') && (magnetT && magnetT.getAttribute('type') === 'SystemSoftware');
        var VAL_22fa55b2 = (magnetS && magnetS.getAttribute('type') === 'Device') && (magnetT && magnetT.getAttribute('type') === 'Device');
        var VAL_4d666b41 = (magnetS && magnetS.getAttribute('type') === 'Device') && (magnetT && magnetT.getAttribute('type') === 'CommunicationPath');
        var VAL_6594402a = (magnetS && magnetS.getAttribute('type') === 'Device') && (magnetT && magnetT.getAttribute('type') === 'Network');
        var VAL_30f4b1a6 = (magnetS && magnetS.getAttribute('type') === 'Device') && (magnetT && magnetT.getAttribute('type') === 'Stakeholder');
        var VAL_405325cf = (magnetS && magnetS.getAttribute('type') === 'Device') && (magnetT && magnetT.getAttribute('type') === 'Driver');
        var VAL_3e1162e7 = (magnetS && magnetS.getAttribute('type') === 'Device') && (magnetT && magnetT.getAttribute('type') === 'Assessment');
        var VAL_79c3f01f = (magnetS && magnetS.getAttribute('type') === 'Device') && (magnetT && magnetT.getAttribute('type') === 'Goal');
        var VAL_6c2f1700 = (magnetS && magnetS.getAttribute('type') === 'Device') && (magnetT && magnetT.getAttribute('type') === 'Requirement');
        var VAL_350b3a17 = (magnetS && magnetS.getAttribute('type') === 'Device') && (magnetT && magnetT.getAttribute('type') === 'Constraint');
        var VAL_38600b = (magnetS && magnetS.getAttribute('type') === 'Device') && (magnetT && magnetT.getAttribute('type') === 'Principle');
        var VAL_669d2b1b = (magnetS && magnetS.getAttribute('type') === 'Device') && (magnetT && magnetT.getAttribute('type') === 'WorkPackage');
        var VAL_721eb7df = (magnetS && magnetS.getAttribute('type') === 'Device') && (magnetT && magnetT.getAttribute('type') === 'Deliverable');
        var VAL_1ea9f009 = (magnetS && magnetS.getAttribute('type') === 'Device') && (magnetT && magnetT.getAttribute('type') === 'Plateau');
        var VAL_5d52e3ef = (magnetS && magnetS.getAttribute('type') === 'Device') && (magnetT && magnetT.getAttribute('type') === 'Gap');
        var VAL_5298dead = (magnetS && magnetS.getAttribute('type') === 'CommunicationPath') && (magnetT && magnetT.getAttribute('type') === 'ArchimateElement');
        var VAL_553f3b6e = (magnetS && magnetS.getAttribute('type') === 'CommunicationPath') && (magnetT && magnetT.getAttribute('type') === 'Product');
        var VAL_4c7a078 = (magnetS && magnetS.getAttribute('type') === 'CommunicationPath') && (magnetT && magnetT.getAttribute('type') === 'BusinessObject');
        var VAL_4e406694 = (magnetS && magnetS.getAttribute('type') === 'CommunicationPath') && (magnetT && magnetT.getAttribute('type') === 'Meaning');
        var VAL_5ab9b447 = (magnetS && magnetS.getAttribute('type') === 'CommunicationPath') && (magnetT && magnetT.getAttribute('type') === 'Representation');
        var VAL_76f10035 = (magnetS && magnetS.getAttribute('type') === 'CommunicationPath') && (magnetT && magnetT.getAttribute('type') === 'BusinessService');
        var VAL_4f8caaf3 = (magnetS && magnetS.getAttribute('type') === 'CommunicationPath') && (magnetT && magnetT.getAttribute('type') === 'BusinessProcess');
        var VAL_2b50150 = (magnetS && magnetS.getAttribute('type') === 'CommunicationPath') && (magnetT && magnetT.getAttribute('type') === 'BusinessFunction');
        var VAL_15b986cd = (magnetS && magnetS.getAttribute('type') === 'CommunicationPath') && (magnetT && magnetT.getAttribute('type') === 'BusinessInteraction');
        var VAL_6bb7cce7 = (magnetS && magnetS.getAttribute('type') === 'CommunicationPath') && (magnetT && magnetT.getAttribute('type') === 'BusinessEvent');
        var VAL_41c62850 = (magnetS && magnetS.getAttribute('type') === 'CommunicationPath') && (magnetT && magnetT.getAttribute('type') === 'Location');
        var VAL_6b530eb9 = (magnetS && magnetS.getAttribute('type') === 'CommunicationPath') && (magnetT && magnetT.getAttribute('type') === 'BusinessInterface');
        var VAL_328572f0 = (magnetS && magnetS.getAttribute('type') === 'CommunicationPath') && (magnetT && magnetT.getAttribute('type') === 'BusinessRole');
        var VAL_678040b3 = (magnetS && magnetS.getAttribute('type') === 'CommunicationPath') && (magnetT && magnetT.getAttribute('type') === 'BusinessCollaboration');
        var VAL_17f460bb = (magnetS && magnetS.getAttribute('type') === 'CommunicationPath') && (magnetT && magnetT.getAttribute('type') === 'BusinessActor');
        var VAL_64a1923a = (magnetS && magnetS.getAttribute('type') === 'CommunicationPath') && (magnetT && magnetT.getAttribute('type') === 'DataObject');
        var VAL_7d2a6eac = (magnetS && magnetS.getAttribute('type') === 'CommunicationPath') && (magnetT && magnetT.getAttribute('type') === 'ApplicationService');
        var VAL_18ca3c62 = (magnetS && magnetS.getAttribute('type') === 'CommunicationPath') && (magnetT && magnetT.getAttribute('type') === 'ApplicationFunction');
        var VAL_2c0f7678 = (magnetS && magnetS.getAttribute('type') === 'CommunicationPath') && (magnetT && magnetT.getAttribute('type') === 'ApplicationInteraction');
        var VAL_44d70181 = (magnetS && magnetS.getAttribute('type') === 'CommunicationPath') && (magnetT && magnetT.getAttribute('type') === 'ApplicationInterface');
        var VAL_6aa648b9 = (magnetS && magnetS.getAttribute('type') === 'CommunicationPath') && (magnetT && magnetT.getAttribute('type') === 'ApplicationComponent');
        var VAL_23c650a3 = (magnetS && magnetS.getAttribute('type') === 'CommunicationPath') && (magnetT && magnetT.getAttribute('type') === 'ApplicationCollaboration');
        var VAL_742d4e15 = (magnetS && magnetS.getAttribute('type') === 'CommunicationPath') && (magnetT && magnetT.getAttribute('type') === 'Artifact');
        var VAL_88a8218 = (magnetS && magnetS.getAttribute('type') === 'CommunicationPath') && (magnetT && magnetT.getAttribute('type') === 'InfrastructureService');
        var VAL_50b1f030 = (magnetS && magnetS.getAttribute('type') === 'CommunicationPath') && (magnetT && magnetT.getAttribute('type') === 'InfrastructureInterface');
        var VAL_4163f1cd = (magnetS && magnetS.getAttribute('type') === 'CommunicationPath') && (magnetT && magnetT.getAttribute('type') === 'Node');
        var VAL_5fa05212 = (magnetS && magnetS.getAttribute('type') === 'CommunicationPath') && (magnetT && magnetT.getAttribute('type') === 'SystemSoftware');
        var VAL_3e681bc = (magnetS && magnetS.getAttribute('type') === 'CommunicationPath') && (magnetT && magnetT.getAttribute('type') === 'Device');
        var VAL_5c09d180 = (magnetS && magnetS.getAttribute('type') === 'CommunicationPath') && (magnetT && magnetT.getAttribute('type') === 'CommunicationPath');
        var VAL_23aae55 = (magnetS && magnetS.getAttribute('type') === 'CommunicationPath') && (magnetT && magnetT.getAttribute('type') === 'Network');
        var VAL_5f574cc2 = (magnetS && magnetS.getAttribute('type') === 'CommunicationPath') && (magnetT && magnetT.getAttribute('type') === 'Stakeholder');
        var VAL_680bddf5 = (magnetS && magnetS.getAttribute('type') === 'CommunicationPath') && (magnetT && magnetT.getAttribute('type') === 'Driver');
        var VAL_7a9c84a5 = (magnetS && magnetS.getAttribute('type') === 'CommunicationPath') && (magnetT && magnetT.getAttribute('type') === 'Assessment');
        var VAL_2d83c5a5 = (magnetS && magnetS.getAttribute('type') === 'CommunicationPath') && (magnetT && magnetT.getAttribute('type') === 'Goal');
        var VAL_48d7ad8b = (magnetS && magnetS.getAttribute('type') === 'CommunicationPath') && (magnetT && magnetT.getAttribute('type') === 'Requirement');
        var VAL_7e053511 = (magnetS && magnetS.getAttribute('type') === 'CommunicationPath') && (magnetT && magnetT.getAttribute('type') === 'Constraint');
        var VAL_60222fd8 = (magnetS && magnetS.getAttribute('type') === 'CommunicationPath') && (magnetT && magnetT.getAttribute('type') === 'Principle');
        var VAL_53bf7094 = (magnetS && magnetS.getAttribute('type') === 'CommunicationPath') && (magnetT && magnetT.getAttribute('type') === 'WorkPackage');
        var VAL_26f1249d = (magnetS && magnetS.getAttribute('type') === 'CommunicationPath') && (magnetT && magnetT.getAttribute('type') === 'Deliverable');
        var VAL_710b30ef = (magnetS && magnetS.getAttribute('type') === 'CommunicationPath') && (magnetT && magnetT.getAttribute('type') === 'Plateau');
        var VAL_a68df9 = (magnetS && magnetS.getAttribute('type') === 'CommunicationPath') && (magnetT && magnetT.getAttribute('type') === 'Gap');
        var VAL_28b576a9 = (magnetS && magnetS.getAttribute('type') === 'Network') && (magnetT && magnetT.getAttribute('type') === 'ArchimateElement');
        var VAL_7cf7aee = (magnetS && magnetS.getAttribute('type') === 'Network') && (magnetT && magnetT.getAttribute('type') === 'Product');
        var VAL_2f6bbeb0 = (magnetS && magnetS.getAttribute('type') === 'Network') && (magnetT && magnetT.getAttribute('type') === 'BusinessObject');
        var VAL_1b1637e1 = (magnetS && magnetS.getAttribute('type') === 'Network') && (magnetT && magnetT.getAttribute('type') === 'Meaning');
        var VAL_18151a14 = (magnetS && magnetS.getAttribute('type') === 'Network') && (magnetT && magnetT.getAttribute('type') === 'Representation');
        var VAL_64711bf2 = (magnetS && magnetS.getAttribute('type') === 'Network') && (magnetT && magnetT.getAttribute('type') === 'BusinessService');
        var VAL_169da7f2 = (magnetS && magnetS.getAttribute('type') === 'Network') && (magnetT && magnetT.getAttribute('type') === 'BusinessProcess');
        var VAL_3c1e23ff = (magnetS && magnetS.getAttribute('type') === 'Network') && (magnetT && magnetT.getAttribute('type') === 'BusinessFunction');
        var VAL_ceb4bd2 = (magnetS && magnetS.getAttribute('type') === 'Network') && (magnetT && magnetT.getAttribute('type') === 'BusinessInteraction');
        var VAL_60297f36 = (magnetS && magnetS.getAttribute('type') === 'Network') && (magnetT && magnetT.getAttribute('type') === 'BusinessEvent');
        var VAL_1bf0f6f6 = (magnetS && magnetS.getAttribute('type') === 'Network') && (magnetT && magnetT.getAttribute('type') === 'Location');
        var VAL_56bc3fac = (magnetS && magnetS.getAttribute('type') === 'Network') && (magnetT && magnetT.getAttribute('type') === 'BusinessInterface');
        var VAL_df4b72 = (magnetS && magnetS.getAttribute('type') === 'Network') && (magnetT && magnetT.getAttribute('type') === 'BusinessRole');
        var VAL_2ba45490 = (magnetS && magnetS.getAttribute('type') === 'Network') && (magnetT && magnetT.getAttribute('type') === 'BusinessCollaboration');
        var VAL_37ff4054 = (magnetS && magnetS.getAttribute('type') === 'Network') && (magnetT && magnetT.getAttribute('type') === 'BusinessActor');
        var VAL_894858 = (magnetS && magnetS.getAttribute('type') === 'Network') && (magnetT && magnetT.getAttribute('type') === 'DataObject');
        var VAL_7af707e0 = (magnetS && magnetS.getAttribute('type') === 'Network') && (magnetT && magnetT.getAttribute('type') === 'ApplicationService');
        var VAL_737edcfa = (magnetS && magnetS.getAttribute('type') === 'Network') && (magnetT && magnetT.getAttribute('type') === 'ApplicationFunction');
        var VAL_3ecedf21 = (magnetS && magnetS.getAttribute('type') === 'Network') && (magnetT && magnetT.getAttribute('type') === 'ApplicationInteraction');
        var VAL_74cf8b28 = (magnetS && magnetS.getAttribute('type') === 'Network') && (magnetT && magnetT.getAttribute('type') === 'ApplicationInterface');
        var VAL_36c54a56 = (magnetS && magnetS.getAttribute('type') === 'Network') && (magnetT && magnetT.getAttribute('type') === 'ApplicationComponent');
        var VAL_3359c978 = (magnetS && magnetS.getAttribute('type') === 'Network') && (magnetT && magnetT.getAttribute('type') === 'ApplicationCollaboration');
        var VAL_7ba63fe5 = (magnetS && magnetS.getAttribute('type') === 'Network') && (magnetT && magnetT.getAttribute('type') === 'Artifact');
        var VAL_73386d72 = (magnetS && magnetS.getAttribute('type') === 'Network') && (magnetT && magnetT.getAttribute('type') === 'InfrastructureService');
        var VAL_6f330eb9 = (magnetS && magnetS.getAttribute('type') === 'Network') && (magnetT && magnetT.getAttribute('type') === 'InfrastructureInterface');
        var VAL_125c082e = (magnetS && magnetS.getAttribute('type') === 'Network') && (magnetT && magnetT.getAttribute('type') === 'Node');
        var VAL_584f5497 = (magnetS && magnetS.getAttribute('type') === 'Network') && (magnetT && magnetT.getAttribute('type') === 'SystemSoftware');
        var VAL_68ace111 = (magnetS && magnetS.getAttribute('type') === 'Network') && (magnetT && magnetT.getAttribute('type') === 'Device');
        var VAL_1f9d6c7b = (magnetS && magnetS.getAttribute('type') === 'Network') && (magnetT && magnetT.getAttribute('type') === 'CommunicationPath');
        var VAL_6df20ade = (magnetS && magnetS.getAttribute('type') === 'Network') && (magnetT && magnetT.getAttribute('type') === 'Network');
        var VAL_4fbb001b = (magnetS && magnetS.getAttribute('type') === 'Network') && (magnetT && magnetT.getAttribute('type') === 'Stakeholder');
        var VAL_4010d494 = (magnetS && magnetS.getAttribute('type') === 'Network') && (magnetT && magnetT.getAttribute('type') === 'Driver');
        var VAL_341a8659 = (magnetS && magnetS.getAttribute('type') === 'Network') && (magnetT && magnetT.getAttribute('type') === 'Assessment');
        var VAL_4943defe = (magnetS && magnetS.getAttribute('type') === 'Network') && (magnetT && magnetT.getAttribute('type') === 'Goal');
        var VAL_5eefa415 = (magnetS && magnetS.getAttribute('type') === 'Network') && (magnetT && magnetT.getAttribute('type') === 'Requirement');
        var VAL_181d7f28 = (magnetS && magnetS.getAttribute('type') === 'Network') && (magnetT && magnetT.getAttribute('type') === 'Constraint');
        var VAL_78d50a3c = (magnetS && magnetS.getAttribute('type') === 'Network') && (magnetT && magnetT.getAttribute('type') === 'Principle');
        var VAL_2fb69ff6 = (magnetS && magnetS.getAttribute('type') === 'Network') && (magnetT && magnetT.getAttribute('type') === 'WorkPackage');
        var VAL_cda4919 = (magnetS && magnetS.getAttribute('type') === 'Network') && (magnetT && magnetT.getAttribute('type') === 'Deliverable');
        var VAL_7f4d9395 = (magnetS && magnetS.getAttribute('type') === 'Network') && (magnetT && magnetT.getAttribute('type') === 'Plateau');
        var VAL_2f19f2aa = (magnetS && magnetS.getAttribute('type') === 'Network') && (magnetT && magnetT.getAttribute('type') === 'Gap');
        var VAL_344b8190 = (magnetS && magnetS.getAttribute('type') === 'Stakeholder') && (magnetT && magnetT.getAttribute('type') === 'ArchimateElement');
        var VAL_6a078481 = (magnetS && magnetS.getAttribute('type') === 'Stakeholder') && (magnetT && magnetT.getAttribute('type') === 'Product');
        var VAL_79c5636f = (magnetS && magnetS.getAttribute('type') === 'Stakeholder') && (magnetT && magnetT.getAttribute('type') === 'BusinessObject');
        var VAL_1929425f = (magnetS && magnetS.getAttribute('type') === 'Stakeholder') && (magnetT && magnetT.getAttribute('type') === 'Meaning');
        var VAL_718607eb = (magnetS && magnetS.getAttribute('type') === 'Stakeholder') && (magnetT && magnetT.getAttribute('type') === 'Representation');
        var VAL_27f3b6d6 = (magnetS && magnetS.getAttribute('type') === 'Stakeholder') && (magnetT && magnetT.getAttribute('type') === 'BusinessService');
        var VAL_757f675c = (magnetS && magnetS.getAttribute('type') === 'Stakeholder') && (magnetT && magnetT.getAttribute('type') === 'BusinessProcess');
        var VAL_2617f816 = (magnetS && magnetS.getAttribute('type') === 'Stakeholder') && (magnetT && magnetT.getAttribute('type') === 'BusinessFunction');
        var VAL_676f0a60 = (magnetS && magnetS.getAttribute('type') === 'Stakeholder') && (magnetT && magnetT.getAttribute('type') === 'BusinessInteraction');
        var VAL_5d10455d = (magnetS && magnetS.getAttribute('type') === 'Stakeholder') && (magnetT && magnetT.getAttribute('type') === 'BusinessEvent');
        var VAL_535b8c24 = (magnetS && magnetS.getAttribute('type') === 'Stakeholder') && (magnetT && magnetT.getAttribute('type') === 'Location');
        var VAL_4a951911 = (magnetS && magnetS.getAttribute('type') === 'Stakeholder') && (magnetT && magnetT.getAttribute('type') === 'BusinessInterface');
        var VAL_55b62629 = (magnetS && magnetS.getAttribute('type') === 'Stakeholder') && (magnetT && magnetT.getAttribute('type') === 'BusinessRole');
        var VAL_a53bb6f = (magnetS && magnetS.getAttribute('type') === 'Stakeholder') && (magnetT && magnetT.getAttribute('type') === 'BusinessCollaboration');
        var VAL_5e63cad = (magnetS && magnetS.getAttribute('type') === 'Stakeholder') && (magnetT && magnetT.getAttribute('type') === 'BusinessActor');
        var VAL_6759f091 = (magnetS && magnetS.getAttribute('type') === 'Stakeholder') && (magnetT && magnetT.getAttribute('type') === 'DataObject');
        var VAL_33a053d = (magnetS && magnetS.getAttribute('type') === 'Stakeholder') && (magnetT && magnetT.getAttribute('type') === 'ApplicationService');
        var VAL_14a54ef6 = (magnetS && magnetS.getAttribute('type') === 'Stakeholder') && (magnetT && magnetT.getAttribute('type') === 'ApplicationFunction');
        var VAL_20921b9b = (magnetS && magnetS.getAttribute('type') === 'Stakeholder') && (magnetT && magnetT.getAttribute('type') === 'ApplicationInteraction');
        var VAL_867ba60 = (magnetS && magnetS.getAttribute('type') === 'Stakeholder') && (magnetT && magnetT.getAttribute('type') === 'ApplicationInterface');
        var VAL_5ba745bc = (magnetS && magnetS.getAttribute('type') === 'Stakeholder') && (magnetT && magnetT.getAttribute('type') === 'ApplicationComponent');
        var VAL_654b72c0 = (magnetS && magnetS.getAttribute('type') === 'Stakeholder') && (magnetT && magnetT.getAttribute('type') === 'ApplicationCollaboration');
        var VAL_55b5e331 = (magnetS && magnetS.getAttribute('type') === 'Stakeholder') && (magnetT && magnetT.getAttribute('type') === 'Artifact');
        var VAL_6034e75d = (magnetS && magnetS.getAttribute('type') === 'Stakeholder') && (magnetT && magnetT.getAttribute('type') === 'InfrastructureService');
        var VAL_15fc442 = (magnetS && magnetS.getAttribute('type') === 'Stakeholder') && (magnetT && magnetT.getAttribute('type') === 'InfrastructureInterface');
        var VAL_3f3c7bdb = (magnetS && magnetS.getAttribute('type') === 'Stakeholder') && (magnetT && magnetT.getAttribute('type') === 'Node');
        var VAL_456abb66 = (magnetS && magnetS.getAttribute('type') === 'Stakeholder') && (magnetT && magnetT.getAttribute('type') === 'SystemSoftware');
        var VAL_2a3a299 = (magnetS && magnetS.getAttribute('type') === 'Stakeholder') && (magnetT && magnetT.getAttribute('type') === 'Device');
        var VAL_7da10b5b = (magnetS && magnetS.getAttribute('type') === 'Stakeholder') && (magnetT && magnetT.getAttribute('type') === 'CommunicationPath');
        var VAL_219f4597 = (magnetS && magnetS.getAttribute('type') === 'Stakeholder') && (magnetT && magnetT.getAttribute('type') === 'Network');
        var VAL_31be6b49 = (magnetS && magnetS.getAttribute('type') === 'Stakeholder') && (magnetT && magnetT.getAttribute('type') === 'Stakeholder');
        var VAL_2e16b08d = (magnetS && magnetS.getAttribute('type') === 'Stakeholder') && (magnetT && magnetT.getAttribute('type') === 'Driver');
        var VAL_5b989dc7 = (magnetS && magnetS.getAttribute('type') === 'Stakeholder') && (magnetT && magnetT.getAttribute('type') === 'Assessment');
        var VAL_70d8de = (magnetS && magnetS.getAttribute('type') === 'Stakeholder') && (magnetT && magnetT.getAttribute('type') === 'Goal');
        var VAL_42561fba = (magnetS && magnetS.getAttribute('type') === 'Stakeholder') && (magnetT && magnetT.getAttribute('type') === 'Requirement');
        var VAL_595f4da5 = (magnetS && magnetS.getAttribute('type') === 'Stakeholder') && (magnetT && magnetT.getAttribute('type') === 'Constraint');
        var VAL_46b695ec = (magnetS && magnetS.getAttribute('type') === 'Stakeholder') && (magnetT && magnetT.getAttribute('type') === 'Principle');
        var VAL_408613cc = (magnetS && magnetS.getAttribute('type') === 'Stakeholder') && (magnetT && magnetT.getAttribute('type') === 'WorkPackage');
        var VAL_325f7fa9 = (magnetS && magnetS.getAttribute('type') === 'Stakeholder') && (magnetT && magnetT.getAttribute('type') === 'Deliverable');
        var VAL_11ce2e22 = (magnetS && magnetS.getAttribute('type') === 'Stakeholder') && (magnetT && magnetT.getAttribute('type') === 'Plateau');
        var VAL_63a5d002 = (magnetS && magnetS.getAttribute('type') === 'Stakeholder') && (magnetT && magnetT.getAttribute('type') === 'Gap');
        var VAL_13cda7c9 = (magnetS && magnetS.getAttribute('type') === 'Driver') && (magnetT && magnetT.getAttribute('type') === 'ArchimateElement');
        var VAL_5aa6202e = (magnetS && magnetS.getAttribute('type') === 'Driver') && (magnetT && magnetT.getAttribute('type') === 'Product');
        var VAL_3af9aa66 = (magnetS && magnetS.getAttribute('type') === 'Driver') && (magnetT && magnetT.getAttribute('type') === 'BusinessObject');
        var VAL_771158fb = (magnetS && magnetS.getAttribute('type') === 'Driver') && (magnetT && magnetT.getAttribute('type') === 'Meaning');
        var VAL_91c4a3f = (magnetS && magnetS.getAttribute('type') === 'Driver') && (magnetT && magnetT.getAttribute('type') === 'Representation');
        var VAL_62d0ac62 = (magnetS && magnetS.getAttribute('type') === 'Driver') && (magnetT && magnetT.getAttribute('type') === 'BusinessService');
        var VAL_150d80c4 = (magnetS && magnetS.getAttribute('type') === 'Driver') && (magnetT && magnetT.getAttribute('type') === 'BusinessProcess');
        var VAL_6826c41e = (magnetS && magnetS.getAttribute('type') === 'Driver') && (magnetT && magnetT.getAttribute('type') === 'BusinessFunction');
        var VAL_3003697 = (magnetS && magnetS.getAttribute('type') === 'Driver') && (magnetT && magnetT.getAttribute('type') === 'BusinessInteraction');
        var VAL_64d43929 = (magnetS && magnetS.getAttribute('type') === 'Driver') && (magnetT && magnetT.getAttribute('type') === 'BusinessEvent');
        var VAL_1d269ed7 = (magnetS && magnetS.getAttribute('type') === 'Driver') && (magnetT && magnetT.getAttribute('type') === 'Location');
        var VAL_437ebf59 = (magnetS && magnetS.getAttribute('type') === 'Driver') && (magnetT && magnetT.getAttribute('type') === 'BusinessInterface');
        var VAL_41c89d2f = (magnetS && magnetS.getAttribute('type') === 'Driver') && (magnetT && magnetT.getAttribute('type') === 'BusinessRole');
        var VAL_410e94e = (magnetS && magnetS.getAttribute('type') === 'Driver') && (magnetT && magnetT.getAttribute('type') === 'BusinessCollaboration');
        var VAL_2d691f3d = (magnetS && magnetS.getAttribute('type') === 'Driver') && (magnetT && magnetT.getAttribute('type') === 'BusinessActor');
        var VAL_1bdbf9be = (magnetS && magnetS.getAttribute('type') === 'Driver') && (magnetT && magnetT.getAttribute('type') === 'DataObject');
        var VAL_1e7f2e0f = (magnetS && magnetS.getAttribute('type') === 'Driver') && (magnetT && magnetT.getAttribute('type') === 'ApplicationService');
        var VAL_1da6ee17 = (magnetS && magnetS.getAttribute('type') === 'Driver') && (magnetT && magnetT.getAttribute('type') === 'ApplicationFunction');
        var VAL_78d39a69 = (magnetS && magnetS.getAttribute('type') === 'Driver') && (magnetT && magnetT.getAttribute('type') === 'ApplicationInteraction');
        var VAL_3c818ac4 = (magnetS && magnetS.getAttribute('type') === 'Driver') && (magnetT && magnetT.getAttribute('type') === 'ApplicationInterface');
        var VAL_5b69d40d = (magnetS && magnetS.getAttribute('type') === 'Driver') && (magnetT && magnetT.getAttribute('type') === 'ApplicationComponent');
        var VAL_71154f21 = (magnetS && magnetS.getAttribute('type') === 'Driver') && (magnetT && magnetT.getAttribute('type') === 'ApplicationCollaboration');
        var VAL_15f193b8 = (magnetS && magnetS.getAttribute('type') === 'Driver') && (magnetT && magnetT.getAttribute('type') === 'Artifact');
        var VAL_2516fc68 = (magnetS && magnetS.getAttribute('type') === 'Driver') && (magnetT && magnetT.getAttribute('type') === 'InfrastructureService');
        var VAL_304a9d7b = (magnetS && magnetS.getAttribute('type') === 'Driver') && (magnetT && magnetT.getAttribute('type') === 'InfrastructureInterface');
        var VAL_6bfdb014 = (magnetS && magnetS.getAttribute('type') === 'Driver') && (magnetT && magnetT.getAttribute('type') === 'Node');
        var VAL_72889280 = (magnetS && magnetS.getAttribute('type') === 'Driver') && (magnetT && magnetT.getAttribute('type') === 'SystemSoftware');
        var VAL_606fc505 = (magnetS && magnetS.getAttribute('type') === 'Driver') && (magnetT && magnetT.getAttribute('type') === 'Device');
        var VAL_4aa3d36 = (magnetS && magnetS.getAttribute('type') === 'Driver') && (magnetT && magnetT.getAttribute('type') === 'CommunicationPath');
        var VAL_2d140a7 = (magnetS && magnetS.getAttribute('type') === 'Driver') && (magnetT && magnetT.getAttribute('type') === 'Network');
        var VAL_347bdeef = (magnetS && magnetS.getAttribute('type') === 'Driver') && (magnetT && magnetT.getAttribute('type') === 'Stakeholder');
        var VAL_2aa27288 = (magnetS && magnetS.getAttribute('type') === 'Driver') && (magnetT && magnetT.getAttribute('type') === 'Driver');
        var VAL_7f34a967 = (magnetS && magnetS.getAttribute('type') === 'Driver') && (magnetT && magnetT.getAttribute('type') === 'Assessment');
        var VAL_77e80a5e = (magnetS && magnetS.getAttribute('type') === 'Driver') && (magnetT && magnetT.getAttribute('type') === 'Goal');
        var VAL_1d8e2eea = (magnetS && magnetS.getAttribute('type') === 'Driver') && (magnetT && magnetT.getAttribute('type') === 'Requirement');
        var VAL_240139e1 = (magnetS && magnetS.getAttribute('type') === 'Driver') && (magnetT && magnetT.getAttribute('type') === 'Constraint');
        var VAL_7ea4d397 = (magnetS && magnetS.getAttribute('type') === 'Driver') && (magnetT && magnetT.getAttribute('type') === 'Principle');
        var VAL_49298ce7 = (magnetS && magnetS.getAttribute('type') === 'Driver') && (magnetT && magnetT.getAttribute('type') === 'WorkPackage');
        var VAL_253c1256 = (magnetS && magnetS.getAttribute('type') === 'Driver') && (magnetT && magnetT.getAttribute('type') === 'Deliverable');
        var VAL_8dfe921 = (magnetS && magnetS.getAttribute('type') === 'Driver') && (magnetT && magnetT.getAttribute('type') === 'Plateau');
        var VAL_503fbbc6 = (magnetS && magnetS.getAttribute('type') === 'Driver') && (magnetT && magnetT.getAttribute('type') === 'Gap');
        var VAL_55f45b92 = (magnetS && magnetS.getAttribute('type') === 'Assessment') && (magnetT && magnetT.getAttribute('type') === 'ArchimateElement');
        var VAL_109f5dd8 = (magnetS && magnetS.getAttribute('type') === 'Assessment') && (magnetT && magnetT.getAttribute('type') === 'Product');
        var VAL_67fe380b = (magnetS && magnetS.getAttribute('type') === 'Assessment') && (magnetT && magnetT.getAttribute('type') === 'BusinessObject');
        var VAL_4a325eb9 = (magnetS && magnetS.getAttribute('type') === 'Assessment') && (magnetT && magnetT.getAttribute('type') === 'Meaning');
        var VAL_3dedb4a6 = (magnetS && magnetS.getAttribute('type') === 'Assessment') && (magnetT && magnetT.getAttribute('type') === 'Representation');
        var VAL_57f64f5e = (magnetS && magnetS.getAttribute('type') === 'Assessment') && (magnetT && magnetT.getAttribute('type') === 'BusinessService');
        var VAL_415e0bcb = (magnetS && magnetS.getAttribute('type') === 'Assessment') && (magnetT && magnetT.getAttribute('type') === 'BusinessProcess');
        var VAL_194152cf = (magnetS && magnetS.getAttribute('type') === 'Assessment') && (magnetT && magnetT.getAttribute('type') === 'BusinessFunction');
        var VAL_49d98dc5 = (magnetS && magnetS.getAttribute('type') === 'Assessment') && (magnetT && magnetT.getAttribute('type') === 'BusinessInteraction');
        var VAL_2c30b71f = (magnetS && magnetS.getAttribute('type') === 'Assessment') && (magnetT && magnetT.getAttribute('type') === 'BusinessEvent');
        var VAL_1d81e101 = (magnetS && magnetS.getAttribute('type') === 'Assessment') && (magnetT && magnetT.getAttribute('type') === 'Location');
        var VAL_ec50f54 = (magnetS && magnetS.getAttribute('type') === 'Assessment') && (magnetT && magnetT.getAttribute('type') === 'BusinessInterface');
        var VAL_bf71cec = (magnetS && magnetS.getAttribute('type') === 'Assessment') && (magnetT && magnetT.getAttribute('type') === 'BusinessRole');
        var VAL_22d6cac2 = (magnetS && magnetS.getAttribute('type') === 'Assessment') && (magnetT && magnetT.getAttribute('type') === 'BusinessCollaboration');
        var VAL_30cdae70 = (magnetS && magnetS.getAttribute('type') === 'Assessment') && (magnetT && magnetT.getAttribute('type') === 'BusinessActor');
        var VAL_1654a892 = (magnetS && magnetS.getAttribute('type') === 'Assessment') && (magnetT && magnetT.getAttribute('type') === 'DataObject');
        var VAL_2577d6c8 = (magnetS && magnetS.getAttribute('type') === 'Assessment') && (magnetT && magnetT.getAttribute('type') === 'ApplicationService');
        var VAL_3163987e = (magnetS && magnetS.getAttribute('type') === 'Assessment') && (magnetT && magnetT.getAttribute('type') === 'ApplicationFunction');
        var VAL_6c000e0c = (magnetS && magnetS.getAttribute('type') === 'Assessment') && (magnetT && magnetT.getAttribute('type') === 'ApplicationInteraction');
        var VAL_5f233b26 = (magnetS && magnetS.getAttribute('type') === 'Assessment') && (magnetT && magnetT.getAttribute('type') === 'ApplicationInterface');
        var VAL_44f9779c = (magnetS && magnetS.getAttribute('type') === 'Assessment') && (magnetT && magnetT.getAttribute('type') === 'ApplicationComponent');
        var VAL_6974a715 = (magnetS && magnetS.getAttribute('type') === 'Assessment') && (magnetT && magnetT.getAttribute('type') === 'ApplicationCollaboration');
        var VAL_5e8a459 = (magnetS && magnetS.getAttribute('type') === 'Assessment') && (magnetT && magnetT.getAttribute('type') === 'Artifact');
        var VAL_43d455c9 = (magnetS && magnetS.getAttribute('type') === 'Assessment') && (magnetT && magnetT.getAttribute('type') === 'InfrastructureService');
        var VAL_4c9e9fb8 = (magnetS && magnetS.getAttribute('type') === 'Assessment') && (magnetT && magnetT.getAttribute('type') === 'InfrastructureInterface');
        var VAL_9ec531 = (magnetS && magnetS.getAttribute('type') === 'Assessment') && (magnetT && magnetT.getAttribute('type') === 'Node');
        var VAL_40147317 = (magnetS && magnetS.getAttribute('type') === 'Assessment') && (magnetT && magnetT.getAttribute('type') === 'SystemSoftware');
        var VAL_210f0cc1 = (magnetS && magnetS.getAttribute('type') === 'Assessment') && (magnetT && magnetT.getAttribute('type') === 'Device');
        var VAL_19542407 = (magnetS && magnetS.getAttribute('type') === 'Assessment') && (magnetT && magnetT.getAttribute('type') === 'CommunicationPath');
        var VAL_6f95cd51 = (magnetS && magnetS.getAttribute('type') === 'Assessment') && (magnetT && magnetT.getAttribute('type') === 'Network');
        var VAL_c7a977f = (magnetS && magnetS.getAttribute('type') === 'Assessment') && (magnetT && magnetT.getAttribute('type') === 'Stakeholder');
        var VAL_55caeb35 = (magnetS && magnetS.getAttribute('type') === 'Assessment') && (magnetT && magnetT.getAttribute('type') === 'Driver');
        var VAL_6d868997 = (magnetS && magnetS.getAttribute('type') === 'Assessment') && (magnetT && magnetT.getAttribute('type') === 'Assessment');
        var VAL_2c383e33 = (magnetS && magnetS.getAttribute('type') === 'Assessment') && (magnetT && magnetT.getAttribute('type') === 'Goal');
        var VAL_74a195a4 = (magnetS && magnetS.getAttribute('type') === 'Assessment') && (magnetT && magnetT.getAttribute('type') === 'Requirement');
        var VAL_76304b46 = (magnetS && magnetS.getAttribute('type') === 'Assessment') && (magnetT && magnetT.getAttribute('type') === 'Constraint');
        var VAL_2fa3be26 = (magnetS && magnetS.getAttribute('type') === 'Assessment') && (magnetT && magnetT.getAttribute('type') === 'Principle');
        var VAL_4287d447 = (magnetS && magnetS.getAttribute('type') === 'Assessment') && (magnetT && magnetT.getAttribute('type') === 'WorkPackage');
        var VAL_3af37506 = (magnetS && magnetS.getAttribute('type') === 'Assessment') && (magnetT && magnetT.getAttribute('type') === 'Deliverable');
        var VAL_4e6d7365 = (magnetS && magnetS.getAttribute('type') === 'Assessment') && (magnetT && magnetT.getAttribute('type') === 'Plateau');
        var VAL_7c0da600 = (magnetS && magnetS.getAttribute('type') === 'Assessment') && (magnetT && magnetT.getAttribute('type') === 'Gap');
        var VAL_d4602a = (magnetS && magnetS.getAttribute('type') === 'Goal') && (magnetT && magnetT.getAttribute('type') === 'ArchimateElement');
        var VAL_21ae6e73 = (magnetS && magnetS.getAttribute('type') === 'Goal') && (magnetT && magnetT.getAttribute('type') === 'Product');
        var VAL_47dd778 = (magnetS && magnetS.getAttribute('type') === 'Goal') && (magnetT && magnetT.getAttribute('type') === 'BusinessObject');
        var VAL_15515c51 = (magnetS && magnetS.getAttribute('type') === 'Goal') && (magnetT && magnetT.getAttribute('type') === 'Meaning');
        var VAL_36a7abe1 = (magnetS && magnetS.getAttribute('type') === 'Goal') && (magnetT && magnetT.getAttribute('type') === 'Representation');
        var VAL_64a896b0 = (magnetS && magnetS.getAttribute('type') === 'Goal') && (magnetT && magnetT.getAttribute('type') === 'BusinessService');
        var VAL_e044b4a = (magnetS && magnetS.getAttribute('type') === 'Goal') && (magnetT && magnetT.getAttribute('type') === 'BusinessProcess');
        var VAL_11a82d0f = (magnetS && magnetS.getAttribute('type') === 'Goal') && (magnetT && magnetT.getAttribute('type') === 'BusinessFunction');
        var VAL_1adb7478 = (magnetS && magnetS.getAttribute('type') === 'Goal') && (magnetT && magnetT.getAttribute('type') === 'BusinessInteraction');
        var VAL_3ae66c85 = (magnetS && magnetS.getAttribute('type') === 'Goal') && (magnetT && magnetT.getAttribute('type') === 'BusinessEvent');
        var VAL_16943e88 = (magnetS && magnetS.getAttribute('type') === 'Goal') && (magnetT && magnetT.getAttribute('type') === 'Location');
        var VAL_4604b900 = (magnetS && magnetS.getAttribute('type') === 'Goal') && (magnetT && magnetT.getAttribute('type') === 'BusinessInterface');
        var VAL_73d6d0c = (magnetS && magnetS.getAttribute('type') === 'Goal') && (magnetT && magnetT.getAttribute('type') === 'BusinessRole');
        var VAL_e36bb2a = (magnetS && magnetS.getAttribute('type') === 'Goal') && (magnetT && magnetT.getAttribute('type') === 'BusinessCollaboration');
        var VAL_3961a41a = (magnetS && magnetS.getAttribute('type') === 'Goal') && (magnetT && magnetT.getAttribute('type') === 'BusinessActor');
        var VAL_5a4ed68f = (magnetS && magnetS.getAttribute('type') === 'Goal') && (magnetT && magnetT.getAttribute('type') === 'DataObject');
        var VAL_367795c7 = (magnetS && magnetS.getAttribute('type') === 'Goal') && (magnetT && magnetT.getAttribute('type') === 'ApplicationService');
        var VAL_d2387c8 = (magnetS && magnetS.getAttribute('type') === 'Goal') && (magnetT && magnetT.getAttribute('type') === 'ApplicationFunction');
        var VAL_3956b302 = (magnetS && magnetS.getAttribute('type') === 'Goal') && (magnetT && magnetT.getAttribute('type') === 'ApplicationInteraction');
        var VAL_1500e009 = (magnetS && magnetS.getAttribute('type') === 'Goal') && (magnetT && magnetT.getAttribute('type') === 'ApplicationInterface');
        var VAL_1fd386c3 = (magnetS && magnetS.getAttribute('type') === 'Goal') && (magnetT && magnetT.getAttribute('type') === 'ApplicationComponent');
        var VAL_edf4f36 = (magnetS && magnetS.getAttribute('type') === 'Goal') && (magnetT && magnetT.getAttribute('type') === 'ApplicationCollaboration');
        var VAL_29d334c = (magnetS && magnetS.getAttribute('type') === 'Goal') && (magnetT && magnetT.getAttribute('type') === 'Artifact');
        var VAL_100f9bbe = (magnetS && magnetS.getAttribute('type') === 'Goal') && (magnetT && magnetT.getAttribute('type') === 'InfrastructureService');
        var VAL_13e9f2e2 = (magnetS && magnetS.getAttribute('type') === 'Goal') && (magnetT && magnetT.getAttribute('type') === 'InfrastructureInterface');
        var VAL_673bb956 = (magnetS && magnetS.getAttribute('type') === 'Goal') && (magnetT && magnetT.getAttribute('type') === 'Node');
        var VAL_cd7f1ae = (magnetS && magnetS.getAttribute('type') === 'Goal') && (magnetT && magnetT.getAttribute('type') === 'SystemSoftware');
        var VAL_60e949e1 = (magnetS && magnetS.getAttribute('type') === 'Goal') && (magnetT && magnetT.getAttribute('type') === 'Device');
        var VAL_3c4bc9fc = (magnetS && magnetS.getAttribute('type') === 'Goal') && (magnetT && magnetT.getAttribute('type') === 'CommunicationPath');
        var VAL_680362a = (magnetS && magnetS.getAttribute('type') === 'Goal') && (magnetT && magnetT.getAttribute('type') === 'Network');
        var VAL_3569edd5 = (magnetS && magnetS.getAttribute('type') === 'Goal') && (magnetT && magnetT.getAttribute('type') === 'Stakeholder');
        var VAL_1f651cd8 = (magnetS && magnetS.getAttribute('type') === 'Goal') && (magnetT && magnetT.getAttribute('type') === 'Driver');
        var VAL_7d0332e1 = (magnetS && magnetS.getAttribute('type') === 'Goal') && (magnetT && magnetT.getAttribute('type') === 'Assessment');
        var VAL_7a356a0d = (magnetS && magnetS.getAttribute('type') === 'Goal') && (magnetT && magnetT.getAttribute('type') === 'Goal');
        var VAL_c827db = (magnetS && magnetS.getAttribute('type') === 'Goal') && (magnetT && magnetT.getAttribute('type') === 'Requirement');
        var VAL_377c68c6 = (magnetS && magnetS.getAttribute('type') === 'Goal') && (magnetT && magnetT.getAttribute('type') === 'Constraint');
        var VAL_538cd0f2 = (magnetS && magnetS.getAttribute('type') === 'Goal') && (magnetT && magnetT.getAttribute('type') === 'Principle');
        var VAL_238ad8c = (magnetS && magnetS.getAttribute('type') === 'Goal') && (magnetT && magnetT.getAttribute('type') === 'WorkPackage');
        var VAL_430fa4ef = (magnetS && magnetS.getAttribute('type') === 'Goal') && (magnetT && magnetT.getAttribute('type') === 'Deliverable');
        var VAL_1761de10 = (magnetS && magnetS.getAttribute('type') === 'Goal') && (magnetT && magnetT.getAttribute('type') === 'Plateau');
        var VAL_22df874e = (magnetS && magnetS.getAttribute('type') === 'Goal') && (magnetT && magnetT.getAttribute('type') === 'Gap');
        var VAL_654c1a54 = (magnetS && magnetS.getAttribute('type') === 'Requirement') && (magnetT && magnetT.getAttribute('type') === 'ArchimateElement');
        var VAL_5bdaf2ce = (magnetS && magnetS.getAttribute('type') === 'Requirement') && (magnetT && magnetT.getAttribute('type') === 'Product');
        var VAL_42d236fb = (magnetS && magnetS.getAttribute('type') === 'Requirement') && (magnetT && magnetT.getAttribute('type') === 'BusinessObject');
        var VAL_1ce93c18 = (magnetS && magnetS.getAttribute('type') === 'Requirement') && (magnetT && magnetT.getAttribute('type') === 'Meaning');
        var VAL_19f21b6b = (magnetS && magnetS.getAttribute('type') === 'Requirement') && (magnetT && magnetT.getAttribute('type') === 'Representation');
        var VAL_1532c619 = (magnetS && magnetS.getAttribute('type') === 'Requirement') && (magnetT && magnetT.getAttribute('type') === 'BusinessService');
        var VAL_46044faa = (magnetS && magnetS.getAttribute('type') === 'Requirement') && (magnetT && magnetT.getAttribute('type') === 'BusinessProcess');
        var VAL_1358b28e = (magnetS && magnetS.getAttribute('type') === 'Requirement') && (magnetT && magnetT.getAttribute('type') === 'BusinessFunction');
        var VAL_1a78dacd = (magnetS && magnetS.getAttribute('type') === 'Requirement') && (magnetT && magnetT.getAttribute('type') === 'BusinessInteraction');
        var VAL_19f9d595 = (magnetS && magnetS.getAttribute('type') === 'Requirement') && (magnetT && magnetT.getAttribute('type') === 'BusinessEvent');
        var VAL_7de4a01f = (magnetS && magnetS.getAttribute('type') === 'Requirement') && (magnetT && magnetT.getAttribute('type') === 'Location');
        var VAL_2bfeb1ef = (magnetS && magnetS.getAttribute('type') === 'Requirement') && (magnetT && magnetT.getAttribute('type') === 'BusinessInterface');
        var VAL_778ca8ef = (magnetS && magnetS.getAttribute('type') === 'Requirement') && (magnetT && magnetT.getAttribute('type') === 'BusinessRole');
        var VAL_208e9ef6 = (magnetS && magnetS.getAttribute('type') === 'Requirement') && (magnetT && magnetT.getAttribute('type') === 'BusinessCollaboration');
        var VAL_78b236a0 = (magnetS && magnetS.getAttribute('type') === 'Requirement') && (magnetT && magnetT.getAttribute('type') === 'BusinessActor');
        var VAL_261d8190 = (magnetS && magnetS.getAttribute('type') === 'Requirement') && (magnetT && magnetT.getAttribute('type') === 'DataObject');
        var VAL_34448e6c = (magnetS && magnetS.getAttribute('type') === 'Requirement') && (magnetT && magnetT.getAttribute('type') === 'ApplicationService');
        var VAL_60e9df3c = (magnetS && magnetS.getAttribute('type') === 'Requirement') && (magnetT && magnetT.getAttribute('type') === 'ApplicationFunction');
        var VAL_907f2b7 = (magnetS && magnetS.getAttribute('type') === 'Requirement') && (magnetT && magnetT.getAttribute('type') === 'ApplicationInteraction');
        var VAL_435ce306 = (magnetS && magnetS.getAttribute('type') === 'Requirement') && (magnetT && magnetT.getAttribute('type') === 'ApplicationInterface');
        var VAL_537b32ef = (magnetS && magnetS.getAttribute('type') === 'Requirement') && (magnetT && magnetT.getAttribute('type') === 'ApplicationComponent');
        var VAL_7dc51783 = (magnetS && magnetS.getAttribute('type') === 'Requirement') && (magnetT && magnetT.getAttribute('type') === 'ApplicationCollaboration');
        var VAL_4b61d0c6 = (magnetS && magnetS.getAttribute('type') === 'Requirement') && (magnetT && magnetT.getAttribute('type') === 'Artifact');
        var VAL_6f815e7f = (magnetS && magnetS.getAttribute('type') === 'Requirement') && (magnetT && magnetT.getAttribute('type') === 'InfrastructureService');
        var VAL_65e7f52a = (magnetS && magnetS.getAttribute('type') === 'Requirement') && (magnetT && magnetT.getAttribute('type') === 'InfrastructureInterface');
        var VAL_304b9f1a = (magnetS && magnetS.getAttribute('type') === 'Requirement') && (magnetT && magnetT.getAttribute('type') === 'Node');
        var VAL_75699e35 = (magnetS && magnetS.getAttribute('type') === 'Requirement') && (magnetT && magnetT.getAttribute('type') === 'SystemSoftware');
        var VAL_107e5441 = (magnetS && magnetS.getAttribute('type') === 'Requirement') && (magnetT && magnetT.getAttribute('type') === 'Device');
        var VAL_4aeaadc1 = (magnetS && magnetS.getAttribute('type') === 'Requirement') && (magnetT && magnetT.getAttribute('type') === 'CommunicationPath');
        var VAL_263558c9 = (magnetS && magnetS.getAttribute('type') === 'Requirement') && (magnetT && magnetT.getAttribute('type') === 'Network');
        var VAL_1f14f20c = (magnetS && magnetS.getAttribute('type') === 'Requirement') && (magnetT && magnetT.getAttribute('type') === 'Stakeholder');
        var VAL_7daa61f3 = (magnetS && magnetS.getAttribute('type') === 'Requirement') && (magnetT && magnetT.getAttribute('type') === 'Driver');
        var VAL_62315f22 = (magnetS && magnetS.getAttribute('type') === 'Requirement') && (magnetT && magnetT.getAttribute('type') === 'Assessment');
        var VAL_6e4ea0bd = (magnetS && magnetS.getAttribute('type') === 'Requirement') && (magnetT && magnetT.getAttribute('type') === 'Goal');
        var VAL_56f2bbea = (magnetS && magnetS.getAttribute('type') === 'Requirement') && (magnetT && magnetT.getAttribute('type') === 'Requirement');
        var VAL_78f9ed3e = (magnetS && magnetS.getAttribute('type') === 'Requirement') && (magnetT && magnetT.getAttribute('type') === 'Constraint');
        var VAL_1059754c = (magnetS && magnetS.getAttribute('type') === 'Requirement') && (magnetT && magnetT.getAttribute('type') === 'Principle');
        var VAL_b0964b2 = (magnetS && magnetS.getAttribute('type') === 'Requirement') && (magnetT && magnetT.getAttribute('type') === 'WorkPackage');
        var VAL_48e7b3d2 = (magnetS && magnetS.getAttribute('type') === 'Requirement') && (magnetT && magnetT.getAttribute('type') === 'Deliverable');
        var VAL_7f4037ed = (magnetS && magnetS.getAttribute('type') === 'Requirement') && (magnetT && magnetT.getAttribute('type') === 'Plateau');
        var VAL_24e8de5c = (magnetS && magnetS.getAttribute('type') === 'Requirement') && (magnetT && magnetT.getAttribute('type') === 'Gap');
        var VAL_64040287 = (magnetS && magnetS.getAttribute('type') === 'Constraint') && (magnetT && magnetT.getAttribute('type') === 'ArchimateElement');
        var VAL_110844f6 = (magnetS && magnetS.getAttribute('type') === 'Constraint') && (magnetT && magnetT.getAttribute('type') === 'Product');
        var VAL_6f89f665 = (magnetS && magnetS.getAttribute('type') === 'Constraint') && (magnetT && magnetT.getAttribute('type') === 'BusinessObject');
        var VAL_df1cff6 = (magnetS && magnetS.getAttribute('type') === 'Constraint') && (magnetT && magnetT.getAttribute('type') === 'Meaning');
        var VAL_4925f4f5 = (magnetS && magnetS.getAttribute('type') === 'Constraint') && (magnetT && magnetT.getAttribute('type') === 'Representation');
        var VAL_1ad926d3 = (magnetS && magnetS.getAttribute('type') === 'Constraint') && (magnetT && magnetT.getAttribute('type') === 'BusinessService');
        var VAL_3a43d133 = (magnetS && magnetS.getAttribute('type') === 'Constraint') && (magnetT && magnetT.getAttribute('type') === 'BusinessProcess');
        var VAL_39ce27f2 = (magnetS && magnetS.getAttribute('type') === 'Constraint') && (magnetT && magnetT.getAttribute('type') === 'BusinessFunction');
        var VAL_5f2afe62 = (magnetS && magnetS.getAttribute('type') === 'Constraint') && (magnetT && magnetT.getAttribute('type') === 'BusinessInteraction');
        var VAL_c96a4ea = (magnetS && magnetS.getAttribute('type') === 'Constraint') && (magnetT && magnetT.getAttribute('type') === 'BusinessEvent');
        var VAL_28782602 = (magnetS && magnetS.getAttribute('type') === 'Constraint') && (magnetT && magnetT.getAttribute('type') === 'Location');
        var VAL_60c16548 = (magnetS && magnetS.getAttribute('type') === 'Constraint') && (magnetT && magnetT.getAttribute('type') === 'BusinessInterface');
        var VAL_68105edc = (magnetS && magnetS.getAttribute('type') === 'Constraint') && (magnetT && magnetT.getAttribute('type') === 'BusinessRole');
        var VAL_511816c0 = (magnetS && magnetS.getAttribute('type') === 'Constraint') && (magnetT && magnetT.getAttribute('type') === 'BusinessCollaboration');
        var VAL_38b972d7 = (magnetS && magnetS.getAttribute('type') === 'Constraint') && (magnetT && magnetT.getAttribute('type') === 'BusinessActor');
        var VAL_5339bbad = (magnetS && magnetS.getAttribute('type') === 'Constraint') && (magnetT && magnetT.getAttribute('type') === 'DataObject');
        var VAL_3935e9a8 = (magnetS && magnetS.getAttribute('type') === 'Constraint') && (magnetT && magnetT.getAttribute('type') === 'ApplicationService');
        var VAL_288a4658 = (magnetS && magnetS.getAttribute('type') === 'Constraint') && (magnetT && magnetT.getAttribute('type') === 'ApplicationFunction');
        var VAL_5b56b654 = (magnetS && magnetS.getAttribute('type') === 'Constraint') && (magnetT && magnetT.getAttribute('type') === 'ApplicationInteraction');
        var VAL_452c8a40 = (magnetS && magnetS.getAttribute('type') === 'Constraint') && (magnetT && magnetT.getAttribute('type') === 'ApplicationInterface');
        var VAL_534243e4 = (magnetS && magnetS.getAttribute('type') === 'Constraint') && (magnetT && magnetT.getAttribute('type') === 'ApplicationComponent');
        var VAL_29006752 = (magnetS && magnetS.getAttribute('type') === 'Constraint') && (magnetT && magnetT.getAttribute('type') === 'ApplicationCollaboration');
        var VAL_470a9030 = (magnetS && magnetS.getAttribute('type') === 'Constraint') && (magnetT && magnetT.getAttribute('type') === 'Artifact');
        var VAL_66d57c1b = (magnetS && magnetS.getAttribute('type') === 'Constraint') && (magnetT && magnetT.getAttribute('type') === 'InfrastructureService');
        var VAL_27494e46 = (magnetS && magnetS.getAttribute('type') === 'Constraint') && (magnetT && magnetT.getAttribute('type') === 'InfrastructureInterface');
        var VAL_d59970a = (magnetS && magnetS.getAttribute('type') === 'Constraint') && (magnetT && magnetT.getAttribute('type') === 'Node');
        var VAL_1e411d81 = (magnetS && magnetS.getAttribute('type') === 'Constraint') && (magnetT && magnetT.getAttribute('type') === 'SystemSoftware');
        var VAL_53b98ff6 = (magnetS && magnetS.getAttribute('type') === 'Constraint') && (magnetT && magnetT.getAttribute('type') === 'Device');
        var VAL_3e6fd0b9 = (magnetS && magnetS.getAttribute('type') === 'Constraint') && (magnetT && magnetT.getAttribute('type') === 'CommunicationPath');
        var VAL_7fcff1b9 = (magnetS && magnetS.getAttribute('type') === 'Constraint') && (magnetT && magnetT.getAttribute('type') === 'Network');
        var VAL_697446d4 = (magnetS && magnetS.getAttribute('type') === 'Constraint') && (magnetT && magnetT.getAttribute('type') === 'Stakeholder');
        var VAL_76adb233 = (magnetS && magnetS.getAttribute('type') === 'Constraint') && (magnetT && magnetT.getAttribute('type') === 'Driver');
        var VAL_36074e47 = (magnetS && magnetS.getAttribute('type') === 'Constraint') && (magnetT && magnetT.getAttribute('type') === 'Assessment');
        var VAL_36453307 = (magnetS && magnetS.getAttribute('type') === 'Constraint') && (magnetT && magnetT.getAttribute('type') === 'Goal');
        var VAL_7dcc91fd = (magnetS && magnetS.getAttribute('type') === 'Constraint') && (magnetT && magnetT.getAttribute('type') === 'Requirement');
        var VAL_66eb985d = (magnetS && magnetS.getAttribute('type') === 'Constraint') && (magnetT && magnetT.getAttribute('type') === 'Constraint');
        var VAL_6a9287b1 = (magnetS && magnetS.getAttribute('type') === 'Constraint') && (magnetT && magnetT.getAttribute('type') === 'Principle');
        var VAL_75504cef = (magnetS && magnetS.getAttribute('type') === 'Constraint') && (magnetT && magnetT.getAttribute('type') === 'WorkPackage');
        var VAL_6c8a68c1 = (magnetS && magnetS.getAttribute('type') === 'Constraint') && (magnetT && magnetT.getAttribute('type') === 'Deliverable');
        var VAL_56193c7d = (magnetS && magnetS.getAttribute('type') === 'Constraint') && (magnetT && magnetT.getAttribute('type') === 'Plateau');
        var VAL_28c88600 = (magnetS && magnetS.getAttribute('type') === 'Constraint') && (magnetT && magnetT.getAttribute('type') === 'Gap');
        var VAL_5f8890c2 = (magnetS && magnetS.getAttribute('type') === 'Principle') && (magnetT && magnetT.getAttribute('type') === 'ArchimateElement');
        var VAL_607b2792 = (magnetS && magnetS.getAttribute('type') === 'Principle') && (magnetT && magnetT.getAttribute('type') === 'Product');
        var VAL_7f9e1534 = (magnetS && magnetS.getAttribute('type') === 'Principle') && (magnetT && magnetT.getAttribute('type') === 'BusinessObject');
        var VAL_138a7441 = (magnetS && magnetS.getAttribute('type') === 'Principle') && (magnetT && magnetT.getAttribute('type') === 'Meaning');
        var VAL_81ff872 = (magnetS && magnetS.getAttribute('type') === 'Principle') && (magnetT && magnetT.getAttribute('type') === 'Representation');
        var VAL_31611954 = (magnetS && magnetS.getAttribute('type') === 'Principle') && (magnetT && magnetT.getAttribute('type') === 'BusinessService');
        var VAL_3e598df9 = (magnetS && magnetS.getAttribute('type') === 'Principle') && (magnetT && magnetT.getAttribute('type') === 'BusinessProcess');
        var VAL_7e31ce0f = (magnetS && magnetS.getAttribute('type') === 'Principle') && (magnetT && magnetT.getAttribute('type') === 'BusinessFunction');
        var VAL_99a65d3 = (magnetS && magnetS.getAttribute('type') === 'Principle') && (magnetT && magnetT.getAttribute('type') === 'BusinessInteraction');
        var VAL_3088660d = (magnetS && magnetS.getAttribute('type') === 'Principle') && (magnetT && magnetT.getAttribute('type') === 'BusinessEvent');
        var VAL_42cc13a0 = (magnetS && magnetS.getAttribute('type') === 'Principle') && (magnetT && magnetT.getAttribute('type') === 'Location');
        var VAL_32fdec40 = (magnetS && magnetS.getAttribute('type') === 'Principle') && (magnetT && magnetT.getAttribute('type') === 'BusinessInterface');
        var VAL_6813a331 = (magnetS && magnetS.getAttribute('type') === 'Principle') && (magnetT && magnetT.getAttribute('type') === 'BusinessRole');
        var VAL_1bd81830 = (magnetS && magnetS.getAttribute('type') === 'Principle') && (magnetT && magnetT.getAttribute('type') === 'BusinessCollaboration');
        var VAL_39ab59f8 = (magnetS && magnetS.getAttribute('type') === 'Principle') && (magnetT && magnetT.getAttribute('type') === 'BusinessActor');
        var VAL_64e92d61 = (magnetS && magnetS.getAttribute('type') === 'Principle') && (magnetT && magnetT.getAttribute('type') === 'DataObject');
        var VAL_111610e6 = (magnetS && magnetS.getAttribute('type') === 'Principle') && (magnetT && magnetT.getAttribute('type') === 'ApplicationService');
        var VAL_4ad4936c = (magnetS && magnetS.getAttribute('type') === 'Principle') && (magnetT && magnetT.getAttribute('type') === 'ApplicationFunction');
        var VAL_29d37757 = (magnetS && magnetS.getAttribute('type') === 'Principle') && (magnetT && magnetT.getAttribute('type') === 'ApplicationInteraction');
        var VAL_4fcc529 = (magnetS && magnetS.getAttribute('type') === 'Principle') && (magnetT && magnetT.getAttribute('type') === 'ApplicationInterface');
        var VAL_25cc7470 = (magnetS && magnetS.getAttribute('type') === 'Principle') && (magnetT && magnetT.getAttribute('type') === 'ApplicationComponent');
        var VAL_4beddc56 = (magnetS && magnetS.getAttribute('type') === 'Principle') && (magnetT && magnetT.getAttribute('type') === 'ApplicationCollaboration');
        var VAL_79b663b3 = (magnetS && magnetS.getAttribute('type') === 'Principle') && (magnetT && magnetT.getAttribute('type') === 'Artifact');
        var VAL_1b812421 = (magnetS && magnetS.getAttribute('type') === 'Principle') && (magnetT && magnetT.getAttribute('type') === 'InfrastructureService');
        var VAL_5d28bcd5 = (magnetS && magnetS.getAttribute('type') === 'Principle') && (magnetT && magnetT.getAttribute('type') === 'InfrastructureInterface');
        var VAL_7882c44a = (magnetS && magnetS.getAttribute('type') === 'Principle') && (magnetT && magnetT.getAttribute('type') === 'Node');
        var VAL_32639b12 = (magnetS && magnetS.getAttribute('type') === 'Principle') && (magnetT && magnetT.getAttribute('type') === 'SystemSoftware');
        var VAL_20d11153 = (magnetS && magnetS.getAttribute('type') === 'Principle') && (magnetT && magnetT.getAttribute('type') === 'Device');
        var VAL_3887cf88 = (magnetS && magnetS.getAttribute('type') === 'Principle') && (magnetT && magnetT.getAttribute('type') === 'CommunicationPath');
        var VAL_5649ec46 = (magnetS && magnetS.getAttribute('type') === 'Principle') && (magnetT && magnetT.getAttribute('type') === 'Network');
        var VAL_78dc4696 = (magnetS && magnetS.getAttribute('type') === 'Principle') && (magnetT && magnetT.getAttribute('type') === 'Stakeholder');
        var VAL_502f8b57 = (magnetS && magnetS.getAttribute('type') === 'Principle') && (magnetT && magnetT.getAttribute('type') === 'Driver');
        var VAL_5652f555 = (magnetS && magnetS.getAttribute('type') === 'Principle') && (magnetT && magnetT.getAttribute('type') === 'Assessment');
        var VAL_4fe01805 = (magnetS && magnetS.getAttribute('type') === 'Principle') && (magnetT && magnetT.getAttribute('type') === 'Goal');
        var VAL_55120f99 = (magnetS && magnetS.getAttribute('type') === 'Principle') && (magnetT && magnetT.getAttribute('type') === 'Requirement');
        var VAL_794b435f = (magnetS && magnetS.getAttribute('type') === 'Principle') && (magnetT && magnetT.getAttribute('type') === 'Constraint');
        var VAL_38f2e97e = (magnetS && magnetS.getAttribute('type') === 'Principle') && (magnetT && magnetT.getAttribute('type') === 'Principle');
        var VAL_779dfe55 = (magnetS && magnetS.getAttribute('type') === 'Principle') && (magnetT && magnetT.getAttribute('type') === 'WorkPackage');
        var VAL_323659f8 = (magnetS && magnetS.getAttribute('type') === 'Principle') && (magnetT && magnetT.getAttribute('type') === 'Deliverable');
        var VAL_1144a55a = (magnetS && magnetS.getAttribute('type') === 'Principle') && (magnetT && magnetT.getAttribute('type') === 'Plateau');
        var VAL_3e521715 = (magnetS && magnetS.getAttribute('type') === 'Principle') && (magnetT && magnetT.getAttribute('type') === 'Gap');
        var VAL_26a529dc = (magnetS && magnetS.getAttribute('type') === 'WorkPackage') && (magnetT && magnetT.getAttribute('type') === 'ArchimateElement');
        var VAL_265c5d69 = (magnetS && magnetS.getAttribute('type') === 'WorkPackage') && (magnetT && magnetT.getAttribute('type') === 'Product');
        var VAL_1286528d = (magnetS && magnetS.getAttribute('type') === 'WorkPackage') && (magnetT && magnetT.getAttribute('type') === 'BusinessObject');
        var VAL_3cc20577 = (magnetS && magnetS.getAttribute('type') === 'WorkPackage') && (magnetT && magnetT.getAttribute('type') === 'Meaning');
        var VAL_33a630fa = (magnetS && magnetS.getAttribute('type') === 'WorkPackage') && (magnetT && magnetT.getAttribute('type') === 'Representation');
        var VAL_775594f2 = (magnetS && magnetS.getAttribute('type') === 'WorkPackage') && (magnetT && magnetT.getAttribute('type') === 'BusinessService');
        var VAL_5767b2af = (magnetS && magnetS.getAttribute('type') === 'WorkPackage') && (magnetT && magnetT.getAttribute('type') === 'BusinessProcess');
        var VAL_7b22ec89 = (magnetS && magnetS.getAttribute('type') === 'WorkPackage') && (magnetT && magnetT.getAttribute('type') === 'BusinessFunction');
        var VAL_790132f7 = (magnetS && magnetS.getAttribute('type') === 'WorkPackage') && (magnetT && magnetT.getAttribute('type') === 'BusinessInteraction');
        var VAL_2228db21 = (magnetS && magnetS.getAttribute('type') === 'WorkPackage') && (magnetT && magnetT.getAttribute('type') === 'BusinessEvent');
        var VAL_48b0e701 = (magnetS && magnetS.getAttribute('type') === 'WorkPackage') && (magnetT && magnetT.getAttribute('type') === 'Location');
        var VAL_241a0c3a = (magnetS && magnetS.getAttribute('type') === 'WorkPackage') && (magnetT && magnetT.getAttribute('type') === 'BusinessInterface');
        var VAL_547c04c4 = (magnetS && magnetS.getAttribute('type') === 'WorkPackage') && (magnetT && magnetT.getAttribute('type') === 'BusinessRole');
        var VAL_30e92cb9 = (magnetS && magnetS.getAttribute('type') === 'WorkPackage') && (magnetT && magnetT.getAttribute('type') === 'BusinessCollaboration');
        var VAL_7fae4d4a = (magnetS && magnetS.getAttribute('type') === 'WorkPackage') && (magnetT && magnetT.getAttribute('type') === 'BusinessActor');
        var VAL_ba1f559 = (magnetS && magnetS.getAttribute('type') === 'WorkPackage') && (magnetT && magnetT.getAttribute('type') === 'DataObject');
        var VAL_3f4f9acd = (magnetS && magnetS.getAttribute('type') === 'WorkPackage') && (magnetT && magnetT.getAttribute('type') === 'ApplicationService');
        var VAL_46baf579 = (magnetS && magnetS.getAttribute('type') === 'WorkPackage') && (magnetT && magnetT.getAttribute('type') === 'ApplicationFunction');
        var VAL_4bf324f9 = (magnetS && magnetS.getAttribute('type') === 'WorkPackage') && (magnetT && magnetT.getAttribute('type') === 'ApplicationInteraction');
        var VAL_4f7c0be3 = (magnetS && magnetS.getAttribute('type') === 'WorkPackage') && (magnetT && magnetT.getAttribute('type') === 'ApplicationInterface');
        var VAL_ca66933 = (magnetS && magnetS.getAttribute('type') === 'WorkPackage') && (magnetT && magnetT.getAttribute('type') === 'ApplicationComponent');
        var VAL_1d2644e3 = (magnetS && magnetS.getAttribute('type') === 'WorkPackage') && (magnetT && magnetT.getAttribute('type') === 'ApplicationCollaboration');
        var VAL_4fa06f52 = (magnetS && magnetS.getAttribute('type') === 'WorkPackage') && (magnetT && magnetT.getAttribute('type') === 'Artifact');
        var VAL_602c4656 = (magnetS && magnetS.getAttribute('type') === 'WorkPackage') && (magnetT && magnetT.getAttribute('type') === 'InfrastructureService');
        var VAL_5ffc5491 = (magnetS && magnetS.getAttribute('type') === 'WorkPackage') && (magnetT && magnetT.getAttribute('type') === 'InfrastructureInterface');
        var VAL_705202d1 = (magnetS && magnetS.getAttribute('type') === 'WorkPackage') && (magnetT && magnetT.getAttribute('type') === 'Node');
        var VAL_3c443976 = (magnetS && magnetS.getAttribute('type') === 'WorkPackage') && (magnetT && magnetT.getAttribute('type') === 'SystemSoftware');
        var VAL_3e58d65e = (magnetS && magnetS.getAttribute('type') === 'WorkPackage') && (magnetT && magnetT.getAttribute('type') === 'Device');
        var VAL_3bd55d8 = (magnetS && magnetS.getAttribute('type') === 'WorkPackage') && (magnetT && magnetT.getAttribute('type') === 'CommunicationPath');
        var VAL_63998bf4 = (magnetS && magnetS.getAttribute('type') === 'WorkPackage') && (magnetT && magnetT.getAttribute('type') === 'Network');
        var VAL_7e0b9178 = (magnetS && magnetS.getAttribute('type') === 'WorkPackage') && (magnetT && magnetT.getAttribute('type') === 'Stakeholder');
        var VAL_61942c1 = (magnetS && magnetS.getAttribute('type') === 'WorkPackage') && (magnetT && magnetT.getAttribute('type') === 'Driver');
        var VAL_6f63c44f = (magnetS && magnetS.getAttribute('type') === 'WorkPackage') && (magnetT && magnetT.getAttribute('type') === 'Assessment');
        var VAL_408a247c = (magnetS && magnetS.getAttribute('type') === 'WorkPackage') && (magnetT && magnetT.getAttribute('type') === 'Goal');
        var VAL_62a8fd44 = (magnetS && magnetS.getAttribute('type') === 'WorkPackage') && (magnetT && magnetT.getAttribute('type') === 'Requirement');
        var VAL_2e6ba49a = (magnetS && magnetS.getAttribute('type') === 'WorkPackage') && (magnetT && magnetT.getAttribute('type') === 'Constraint');
        var VAL_5f5b5ca4 = (magnetS && magnetS.getAttribute('type') === 'WorkPackage') && (magnetT && magnetT.getAttribute('type') === 'Principle');
        var VAL_4ee33af7 = (magnetS && magnetS.getAttribute('type') === 'WorkPackage') && (magnetT && magnetT.getAttribute('type') === 'WorkPackage');
        var VAL_6b04acb2 = (magnetS && magnetS.getAttribute('type') === 'WorkPackage') && (magnetT && magnetT.getAttribute('type') === 'Deliverable');
        var VAL_18388a3c = (magnetS && magnetS.getAttribute('type') === 'WorkPackage') && (magnetT && magnetT.getAttribute('type') === 'Plateau');
        var VAL_1d035be3 = (magnetS && magnetS.getAttribute('type') === 'WorkPackage') && (magnetT && magnetT.getAttribute('type') === 'Gap');
        var VAL_4a60ee36 = (magnetS && magnetS.getAttribute('type') === 'Deliverable') && (magnetT && magnetT.getAttribute('type') === 'ArchimateElement');
        var VAL_4cfbaf4 = (magnetS && magnetS.getAttribute('type') === 'Deliverable') && (magnetT && magnetT.getAttribute('type') === 'Product');
        var VAL_58faa93b = (magnetS && magnetS.getAttribute('type') === 'Deliverable') && (magnetT && magnetT.getAttribute('type') === 'BusinessObject');
        var VAL_5f212d84 = (magnetS && magnetS.getAttribute('type') === 'Deliverable') && (magnetT && magnetT.getAttribute('type') === 'Meaning');
        var VAL_127d7908 = (magnetS && magnetS.getAttribute('type') === 'Deliverable') && (magnetT && magnetT.getAttribute('type') === 'Representation');
        var VAL_6b9c69a9 = (magnetS && magnetS.getAttribute('type') === 'Deliverable') && (magnetT && magnetT.getAttribute('type') === 'BusinessService');
        var VAL_6622a690 = (magnetS && magnetS.getAttribute('type') === 'Deliverable') && (magnetT && magnetT.getAttribute('type') === 'BusinessProcess');
        var VAL_30b9eadd = (magnetS && magnetS.getAttribute('type') === 'Deliverable') && (magnetT && magnetT.getAttribute('type') === 'BusinessFunction');
        var VAL_497570fb = (magnetS && magnetS.getAttribute('type') === 'Deliverable') && (magnetT && magnetT.getAttribute('type') === 'BusinessInteraction');
        var VAL_412c995d = (magnetS && magnetS.getAttribute('type') === 'Deliverable') && (magnetT && magnetT.getAttribute('type') === 'BusinessEvent');
        var VAL_3249a1ce = (magnetS && magnetS.getAttribute('type') === 'Deliverable') && (magnetT && magnetT.getAttribute('type') === 'Location');
        var VAL_4dd94a58 = (magnetS && magnetS.getAttribute('type') === 'Deliverable') && (magnetT && magnetT.getAttribute('type') === 'BusinessInterface');
        var VAL_2f4919b0 = (magnetS && magnetS.getAttribute('type') === 'Deliverable') && (magnetT && magnetT.getAttribute('type') === 'BusinessRole');
        var VAL_a8a8b75 = (magnetS && magnetS.getAttribute('type') === 'Deliverable') && (magnetT && magnetT.getAttribute('type') === 'BusinessCollaboration');
        var VAL_75b21c3b = (magnetS && magnetS.getAttribute('type') === 'Deliverable') && (magnetT && magnetT.getAttribute('type') === 'BusinessActor');
        var VAL_72be135f = (magnetS && magnetS.getAttribute('type') === 'Deliverable') && (magnetT && magnetT.getAttribute('type') === 'DataObject');
        var VAL_155d1021 = (magnetS && magnetS.getAttribute('type') === 'Deliverable') && (magnetT && magnetT.getAttribute('type') === 'ApplicationService');
        var VAL_4bd2f0dc = (magnetS && magnetS.getAttribute('type') === 'Deliverable') && (magnetT && magnetT.getAttribute('type') === 'ApplicationFunction');
        var VAL_2e647e59 = (magnetS && magnetS.getAttribute('type') === 'Deliverable') && (magnetT && magnetT.getAttribute('type') === 'ApplicationInteraction');
        var VAL_2c42b421 = (magnetS && magnetS.getAttribute('type') === 'Deliverable') && (magnetT && magnetT.getAttribute('type') === 'ApplicationInterface');
        var VAL_51e37590 = (magnetS && magnetS.getAttribute('type') === 'Deliverable') && (magnetT && magnetT.getAttribute('type') === 'ApplicationComponent');
        var VAL_deb3b60 = (magnetS && magnetS.getAttribute('type') === 'Deliverable') && (magnetT && magnetT.getAttribute('type') === 'ApplicationCollaboration');
        var VAL_701a32 = (magnetS && magnetS.getAttribute('type') === 'Deliverable') && (magnetT && magnetT.getAttribute('type') === 'Artifact');
        var VAL_39aa45a1 = (magnetS && magnetS.getAttribute('type') === 'Deliverable') && (magnetT && magnetT.getAttribute('type') === 'InfrastructureService');
        var VAL_73aff8f1 = (magnetS && magnetS.getAttribute('type') === 'Deliverable') && (magnetT && magnetT.getAttribute('type') === 'InfrastructureInterface');
        var VAL_27cbfddf = (magnetS && magnetS.getAttribute('type') === 'Deliverable') && (magnetT && magnetT.getAttribute('type') === 'Node');
        var VAL_27ead29e = (magnetS && magnetS.getAttribute('type') === 'Deliverable') && (magnetT && magnetT.getAttribute('type') === 'SystemSoftware');
        var VAL_4c060c8f = (magnetS && magnetS.getAttribute('type') === 'Deliverable') && (magnetT && magnetT.getAttribute('type') === 'Device');
        var VAL_40620d8e = (magnetS && magnetS.getAttribute('type') === 'Deliverable') && (magnetT && magnetT.getAttribute('type') === 'CommunicationPath');
        var VAL_383f3558 = (magnetS && magnetS.getAttribute('type') === 'Deliverable') && (magnetT && magnetT.getAttribute('type') === 'Network');
        var VAL_49b07ee3 = (magnetS && magnetS.getAttribute('type') === 'Deliverable') && (magnetT && magnetT.getAttribute('type') === 'Stakeholder');
        var VAL_352e612e = (magnetS && magnetS.getAttribute('type') === 'Deliverable') && (magnetT && magnetT.getAttribute('type') === 'Driver');
        var VAL_65f00478 = (magnetS && magnetS.getAttribute('type') === 'Deliverable') && (magnetT && magnetT.getAttribute('type') === 'Assessment');
        var VAL_2424686b = (magnetS && magnetS.getAttribute('type') === 'Deliverable') && (magnetT && magnetT.getAttribute('type') === 'Goal');
        var VAL_6ea94d6a = (magnetS && magnetS.getAttribute('type') === 'Deliverable') && (magnetT && magnetT.getAttribute('type') === 'Requirement');
        var VAL_28486680 = (magnetS && magnetS.getAttribute('type') === 'Deliverable') && (magnetT && magnetT.getAttribute('type') === 'Constraint');
        var VAL_4d7e7435 = (magnetS && magnetS.getAttribute('type') === 'Deliverable') && (magnetT && magnetT.getAttribute('type') === 'Principle');
        var VAL_4a1e3ac1 = (magnetS && magnetS.getAttribute('type') === 'Deliverable') && (magnetT && magnetT.getAttribute('type') === 'WorkPackage');
        var VAL_6e78fcf5 = (magnetS && magnetS.getAttribute('type') === 'Deliverable') && (magnetT && magnetT.getAttribute('type') === 'Deliverable');
        var VAL_56febdc = (magnetS && magnetS.getAttribute('type') === 'Deliverable') && (magnetT && magnetT.getAttribute('type') === 'Plateau');
        var VAL_3b8ee898 = (magnetS && magnetS.getAttribute('type') === 'Deliverable') && (magnetT && magnetT.getAttribute('type') === 'Gap');
        var VAL_7d151a = (magnetS && magnetS.getAttribute('type') === 'Plateau') && (magnetT && magnetT.getAttribute('type') === 'ArchimateElement');
        var VAL_294bdeb4 = (magnetS && magnetS.getAttribute('type') === 'Plateau') && (magnetT && magnetT.getAttribute('type') === 'Product');
        var VAL_5300f14a = (magnetS && magnetS.getAttribute('type') === 'Plateau') && (magnetT && magnetT.getAttribute('type') === 'BusinessObject');
        var VAL_1f86099a = (magnetS && magnetS.getAttribute('type') === 'Plateau') && (magnetT && magnetT.getAttribute('type') === 'Meaning');
        var VAL_77bb0ab5 = (magnetS && magnetS.getAttribute('type') === 'Plateau') && (magnetT && magnetT.getAttribute('type') === 'Representation');
        var VAL_f2c488 = (magnetS && magnetS.getAttribute('type') === 'Plateau') && (magnetT && magnetT.getAttribute('type') === 'BusinessService');
        var VAL_54acff7d = (magnetS && magnetS.getAttribute('type') === 'Plateau') && (magnetT && magnetT.getAttribute('type') === 'BusinessProcess');
        var VAL_7bc9e6ab = (magnetS && magnetS.getAttribute('type') === 'Plateau') && (magnetT && magnetT.getAttribute('type') === 'BusinessFunction');
        var VAL_5488b5c5 = (magnetS && magnetS.getAttribute('type') === 'Plateau') && (magnetT && magnetT.getAttribute('type') === 'BusinessInteraction');
        var VAL_4248ed58 = (magnetS && magnetS.getAttribute('type') === 'Plateau') && (magnetT && magnetT.getAttribute('type') === 'BusinessEvent');
        var VAL_712ca57b = (magnetS && magnetS.getAttribute('type') === 'Plateau') && (magnetT && magnetT.getAttribute('type') === 'Location');
        var VAL_4564e94b = (magnetS && magnetS.getAttribute('type') === 'Plateau') && (magnetT && magnetT.getAttribute('type') === 'BusinessInterface');
        var VAL_54534abf = (magnetS && magnetS.getAttribute('type') === 'Plateau') && (magnetT && magnetT.getAttribute('type') === 'BusinessRole');
        var VAL_51745f40 = (magnetS && magnetS.getAttribute('type') === 'Plateau') && (magnetT && magnetT.getAttribute('type') === 'BusinessCollaboration');
        var VAL_45673f68 = (magnetS && magnetS.getAttribute('type') === 'Plateau') && (magnetT && magnetT.getAttribute('type') === 'BusinessActor');
        var VAL_27abb83e = (magnetS && magnetS.getAttribute('type') === 'Plateau') && (magnetT && magnetT.getAttribute('type') === 'DataObject');
        var VAL_69e308c6 = (magnetS && magnetS.getAttribute('type') === 'Plateau') && (magnetT && magnetT.getAttribute('type') === 'ApplicationService');
        var VAL_1a1ed4e5 = (magnetS && magnetS.getAttribute('type') === 'Plateau') && (magnetT && magnetT.getAttribute('type') === 'ApplicationFunction');
        var VAL_667e34b1 = (magnetS && magnetS.getAttribute('type') === 'Plateau') && (magnetT && magnetT.getAttribute('type') === 'ApplicationInteraction');
        var VAL_1c6e0a08 = (magnetS && magnetS.getAttribute('type') === 'Plateau') && (magnetT && magnetT.getAttribute('type') === 'ApplicationInterface');
        var VAL_6dba847b = (magnetS && magnetS.getAttribute('type') === 'Plateau') && (magnetT && magnetT.getAttribute('type') === 'ApplicationComponent');
        var VAL_1efdcd5 = (magnetS && magnetS.getAttribute('type') === 'Plateau') && (magnetT && magnetT.getAttribute('type') === 'ApplicationCollaboration');
        var VAL_1623bbe5 = (magnetS && magnetS.getAttribute('type') === 'Plateau') && (magnetT && magnetT.getAttribute('type') === 'Artifact');
        var VAL_7af1cd63 = (magnetS && magnetS.getAttribute('type') === 'Plateau') && (magnetT && magnetT.getAttribute('type') === 'InfrastructureService');
        var VAL_4351171a = (magnetS && magnetS.getAttribute('type') === 'Plateau') && (magnetT && magnetT.getAttribute('type') === 'InfrastructureInterface');
        var VAL_3c2772d1 = (magnetS && magnetS.getAttribute('type') === 'Plateau') && (magnetT && magnetT.getAttribute('type') === 'Node');
        var VAL_37d00a23 = (magnetS && magnetS.getAttribute('type') === 'Plateau') && (magnetT && magnetT.getAttribute('type') === 'SystemSoftware');
        var VAL_433e536f = (magnetS && magnetS.getAttribute('type') === 'Plateau') && (magnetT && magnetT.getAttribute('type') === 'Device');
        var VAL_89c65d5 = (magnetS && magnetS.getAttribute('type') === 'Plateau') && (magnetT && magnetT.getAttribute('type') === 'CommunicationPath');
        var VAL_faa3fed = (magnetS && magnetS.getAttribute('type') === 'Plateau') && (magnetT && magnetT.getAttribute('type') === 'Network');
        var VAL_381cad29 = (magnetS && magnetS.getAttribute('type') === 'Plateau') && (magnetT && magnetT.getAttribute('type') === 'Stakeholder');
        var VAL_988246e = (magnetS && magnetS.getAttribute('type') === 'Plateau') && (magnetT && magnetT.getAttribute('type') === 'Driver');
        var VAL_62515a47 = (magnetS && magnetS.getAttribute('type') === 'Plateau') && (magnetT && magnetT.getAttribute('type') === 'Assessment');
        var VAL_3c5a54b7 = (magnetS && magnetS.getAttribute('type') === 'Plateau') && (magnetT && magnetT.getAttribute('type') === 'Goal');
        var VAL_61f2c3f0 = (magnetS && magnetS.getAttribute('type') === 'Plateau') && (magnetT && magnetT.getAttribute('type') === 'Requirement');
        var VAL_291120f4 = (magnetS && magnetS.getAttribute('type') === 'Plateau') && (magnetT && magnetT.getAttribute('type') === 'Constraint');
        var VAL_417ad4f3 = (magnetS && magnetS.getAttribute('type') === 'Plateau') && (magnetT && magnetT.getAttribute('type') === 'Principle');
        var VAL_2f6bcf87 = (magnetS && magnetS.getAttribute('type') === 'Plateau') && (magnetT && magnetT.getAttribute('type') === 'WorkPackage');
        var VAL_58f174d9 = (magnetS && magnetS.getAttribute('type') === 'Plateau') && (magnetT && magnetT.getAttribute('type') === 'Deliverable');
        var VAL_78c7f9b3 = (magnetS && magnetS.getAttribute('type') === 'Plateau') && (magnetT && magnetT.getAttribute('type') === 'Plateau');
        var VAL_6f8d7714 = (magnetS && magnetS.getAttribute('type') === 'Plateau') && (magnetT && magnetT.getAttribute('type') === 'Gap');
        var VAL_1e6b9a95 = (magnetS && magnetS.getAttribute('type') === 'Gap') && (magnetT && magnetT.getAttribute('type') === 'ArchimateElement');
        var VAL_4d6f623d = (magnetS && magnetS.getAttribute('type') === 'Gap') && (magnetT && magnetT.getAttribute('type') === 'Product');
        var VAL_aa21042 = (magnetS && magnetS.getAttribute('type') === 'Gap') && (magnetT && magnetT.getAttribute('type') === 'BusinessObject');
        var VAL_e93f3d5 = (magnetS && magnetS.getAttribute('type') === 'Gap') && (magnetT && magnetT.getAttribute('type') === 'Meaning');
        var VAL_4cee7fa0 = (magnetS && magnetS.getAttribute('type') === 'Gap') && (magnetT && magnetT.getAttribute('type') === 'Representation');
        var VAL_7a26928a = (magnetS && magnetS.getAttribute('type') === 'Gap') && (magnetT && magnetT.getAttribute('type') === 'BusinessService');
        var VAL_601cbd8c = (magnetS && magnetS.getAttribute('type') === 'Gap') && (magnetT && magnetT.getAttribute('type') === 'BusinessProcess');
        var VAL_7180e701 = (magnetS && magnetS.getAttribute('type') === 'Gap') && (magnetT && magnetT.getAttribute('type') === 'BusinessFunction');
        var VAL_4e2c95ee = (magnetS && magnetS.getAttribute('type') === 'Gap') && (magnetT && magnetT.getAttribute('type') === 'BusinessInteraction');
        var VAL_d0ec63 = (magnetS && magnetS.getAttribute('type') === 'Gap') && (magnetT && magnetT.getAttribute('type') === 'BusinessEvent');
        var VAL_5a5c128 = (magnetS && magnetS.getAttribute('type') === 'Gap') && (magnetT && magnetT.getAttribute('type') === 'Location');
        var VAL_73eb8672 = (magnetS && magnetS.getAttribute('type') === 'Gap') && (magnetT && magnetT.getAttribute('type') === 'BusinessInterface');
        var VAL_5942ee04 = (magnetS && magnetS.getAttribute('type') === 'Gap') && (magnetT && magnetT.getAttribute('type') === 'BusinessRole');
        var VAL_5e76a2bb = (magnetS && magnetS.getAttribute('type') === 'Gap') && (magnetT && magnetT.getAttribute('type') === 'BusinessCollaboration');
        var VAL_757194dc = (magnetS && magnetS.getAttribute('type') === 'Gap') && (magnetT && magnetT.getAttribute('type') === 'BusinessActor');
        var VAL_5a865416 = (magnetS && magnetS.getAttribute('type') === 'Gap') && (magnetT && magnetT.getAttribute('type') === 'DataObject');
        var VAL_14faa38c = (magnetS && magnetS.getAttribute('type') === 'Gap') && (magnetT && magnetT.getAttribute('type') === 'ApplicationService');
        var VAL_7ff2b8d2 = (magnetS && magnetS.getAttribute('type') === 'Gap') && (magnetT && magnetT.getAttribute('type') === 'ApplicationFunction');
        var VAL_6dc1484 = (magnetS && magnetS.getAttribute('type') === 'Gap') && (magnetT && magnetT.getAttribute('type') === 'ApplicationInteraction');
        var VAL_6e92c6ad = (magnetS && magnetS.getAttribute('type') === 'Gap') && (magnetT && magnetT.getAttribute('type') === 'ApplicationInterface');
        var VAL_2fb5fe30 = (magnetS && magnetS.getAttribute('type') === 'Gap') && (magnetT && magnetT.getAttribute('type') === 'ApplicationComponent');
        var VAL_456be73c = (magnetS && magnetS.getAttribute('type') === 'Gap') && (magnetT && magnetT.getAttribute('type') === 'ApplicationCollaboration');
        var VAL_2375b321 = (magnetS && magnetS.getAttribute('type') === 'Gap') && (magnetT && magnetT.getAttribute('type') === 'Artifact');
        var VAL_5baaae4c = (magnetS && magnetS.getAttribute('type') === 'Gap') && (magnetT && magnetT.getAttribute('type') === 'InfrastructureService');
        var VAL_5b6e8f77 = (magnetS && magnetS.getAttribute('type') === 'Gap') && (magnetT && magnetT.getAttribute('type') === 'InfrastructureInterface');
        var VAL_41a6d121 = (magnetS && magnetS.getAttribute('type') === 'Gap') && (magnetT && magnetT.getAttribute('type') === 'Node');
        var VAL_4f449e8f = (magnetS && magnetS.getAttribute('type') === 'Gap') && (magnetT && magnetT.getAttribute('type') === 'SystemSoftware');
        var VAL_411291e5 = (magnetS && magnetS.getAttribute('type') === 'Gap') && (magnetT && magnetT.getAttribute('type') === 'Device');
        var VAL_6e28bb87 = (magnetS && magnetS.getAttribute('type') === 'Gap') && (magnetT && magnetT.getAttribute('type') === 'CommunicationPath');
        var VAL_19f040ba = (magnetS && magnetS.getAttribute('type') === 'Gap') && (magnetT && magnetT.getAttribute('type') === 'Network');
        var VAL_72ab05ed = (magnetS && magnetS.getAttribute('type') === 'Gap') && (magnetT && magnetT.getAttribute('type') === 'Stakeholder');
        var VAL_27e32fe4 = (magnetS && magnetS.getAttribute('type') === 'Gap') && (magnetT && magnetT.getAttribute('type') === 'Driver');
        var VAL_c3c4c1c = (magnetS && magnetS.getAttribute('type') === 'Gap') && (magnetT && magnetT.getAttribute('type') === 'Assessment');
        var VAL_17d238b1 = (magnetS && magnetS.getAttribute('type') === 'Gap') && (magnetT && magnetT.getAttribute('type') === 'Goal');
        var VAL_3d7cc3cb = (magnetS && magnetS.getAttribute('type') === 'Gap') && (magnetT && magnetT.getAttribute('type') === 'Requirement');
        var VAL_35e478f = (magnetS && magnetS.getAttribute('type') === 'Gap') && (magnetT && magnetT.getAttribute('type') === 'Constraint');
        var VAL_6d6cb754 = (magnetS && magnetS.getAttribute('type') === 'Gap') && (magnetT && magnetT.getAttribute('type') === 'Principle');
        var VAL_6b7d1df8 = (magnetS && magnetS.getAttribute('type') === 'Gap') && (magnetT && magnetT.getAttribute('type') === 'WorkPackage');
        var VAL_3044e9c7 = (magnetS && magnetS.getAttribute('type') === 'Gap') && (magnetT && magnetT.getAttribute('type') === 'Deliverable');
        var VAL_41d7b27f = (magnetS && magnetS.getAttribute('type') === 'Gap') && (magnetT && magnetT.getAttribute('type') === 'Plateau');
        var VAL_49096b06 = (magnetS && magnetS.getAttribute('type') === 'Gap') && (magnetT && magnetT.getAttribute('type') === 'Gap');
        return VAL_4eed46ee || VAL_36b0fcd5 || VAL_4fad94a7 || VAL_475835b1 || VAL_6326d182 || VAL_5241cf67 || VAL_716a7124 || VAL_77192705 || VAL_226642a5 || VAL_7e809b79 || VAL_5cc126dc || VAL_625e134e || VAL_72bd06ca || VAL_89c10b7 || VAL_5dbe30be || VAL_4fe89c24 || VAL_55795845 || VAL_3d08f3f5 || VAL_119f1f2a || VAL_1a1da881 || VAL_5b970f7 || VAL_7fd4acee || VAL_165b8a71 || VAL_6175619b || VAL_2f058b8a || VAL_756cf158 || VAL_3f2ef586 || VAL_751d3241 || VAL_76c7beb3 || VAL_64337702 || VAL_2cf92cc7 || VAL_30ea8c23 || VAL_7b139eab || VAL_4e76dac || VAL_611df6e3 || VAL_5f2f577 || VAL_6273c5a4 || VAL_5d465e4b || VAL_53e211ee || VAL_41a90fa8 || VAL_3d8bbcdc || VAL_52500920 || VAL_117e0fe5 || VAL_18a3962d || VAL_78aea4b9 || VAL_2a65bb85 || VAL_4b85880b || VAL_4f936da8 || VAL_4215838f || VAL_452ba1db || VAL_2289aca5 || VAL_76a36b71 || VAL_184497d1 || VAL_f9d87b || VAL_6ffab045 || VAL_26fb628 || VAL_3e2943ab || VAL_70dd7e15 || VAL_4a9f80d3 || VAL_35beb15e || VAL_41fe9859 || VAL_5ac86ba5 || VAL_6c67e137 || VAL_2c9399a4 || VAL_191ae03f || VAL_9635fa || VAL_53ab0286 || VAL_63c5efee || VAL_2d10e0b1 || VAL_1c98290c || VAL_172ca72b || VAL_5bda80bf || VAL_71e5f61d || VAL_2ce86164 || VAL_5e8f9e2d || VAL_51df223b || VAL_fd46303 || VAL_60d8c0dc || VAL_4204541c || VAL_6a62689d || VAL_4602c2a9 || VAL_60fa3495 || VAL_3e2822 || VAL_79e18e38 || VAL_29a60c27 || VAL_1849db1a || VAL_69c79f09 || VAL_1ca25c47 || VAL_5fcacc0 || VAL_533b266e || VAL_6d1d4d7 || VAL_89ff02e || VAL_6865c751 || VAL_62679465 || VAL_6a988392 || VAL_1d71006f || VAL_5b6813df || VAL_5f2606b || VAL_2b58f754 || VAL_3ebff828 || VAL_2552f2cb || VAL_33352f32 || VAL_5f3b9c57 || VAL_1e044120 || VAL_2cf23c81 || VAL_3624da92 || VAL_35fe2125 || VAL_94f6bfb || VAL_34645867 || VAL_2484f433 || VAL_60b71e8f || VAL_1255b1d1 || VAL_464649c || VAL_7c22d4f || VAL_5f59185e || VAL_60bdf15d || VAL_47da3952 || VAL_51e4ccb3 || VAL_46e8a539 || VAL_495083a0 || VAL_5fd62371 || VAL_28a0fd6c || VAL_2b62442c || VAL_66629f63 || VAL_841e575 || VAL_27a5328c || VAL_1e5f4170 || VAL_6c345c5f || VAL_6b5966e1 || VAL_65e61854 || VAL_1568159 || VAL_4fcee388 || VAL_6f80fafe || VAL_3af17be2 || VAL_f9879ac || VAL_37f21974 || VAL_5f4d427e || VAL_6e521c1e || VAL_224b4d61 || VAL_5d5d9e5 || VAL_303e3593 || VAL_4ef27d66 || VAL_362a019c || VAL_1d9bec4d || VAL_5c48c0c0 || VAL_10c8f62 || VAL_674c583e || VAL_25f7391e || VAL_3f23a3a0 || VAL_5ab14cb9 || VAL_5fb97279 || VAL_439a8f59 || VAL_61861a29 || VAL_31024624 || VAL_25bcd0c7 || VAL_32cb636e || VAL_63cd604c || VAL_40dd3977 || VAL_3a4e343 || VAL_6a1d204a || VAL_62dae245 || VAL_4b6579e8 || VAL_6fff253c || VAL_6c6357f9 || VAL_591e58fa || VAL_3954d008 || VAL_2f94c4db || VAL_593e824f || VAL_72ccd81a || VAL_6d8792db || VAL_64bc21ac || VAL_493dfb8e || VAL_5d25e6bb || VAL_ce5a68e || VAL_9d157ff || VAL_2f162cc0 || VAL_5df417a7 || VAL_7c041b41 || VAL_7f69d591 || VAL_61078690 || VAL_1cb3ec38 || VAL_403132fc || VAL_71c5b236 || VAL_2cab9998 || VAL_2f7a7219 || VAL_669513d8 || VAL_3a1d593e || VAL_4a8a60bc || VAL_361c294e || VAL_7859e786 || VAL_285d851a || VAL_314b8f2d || VAL_664a9613 || VAL_5118388b || VAL_15a902e7 || VAL_7876d598 || VAL_4a3e3e8b || VAL_5af28b27 || VAL_71104a4 || VAL_4985cbcb || VAL_72f46e16 || VAL_3c9168dc || VAL_332a7fce || VAL_549621f3 || VAL_54361a9 || VAL_32232e55 || VAL_5217f3d0 || VAL_37ebc9d8 || VAL_293bb8a5 || VAL_2416a51 || VAL_6fa590ba || VAL_6e9319f || VAL_72e34f77 || VAL_7bf9b098 || VAL_389adf1d || VAL_77307458 || VAL_1fc0053e || VAL_290b1b2e || VAL_47874b25 || VAL_33617539 || VAL_2c177f9e || VAL_5db4c359 || VAL_209775a9 || VAL_18e7143f || VAL_f9b7332 || VAL_74cec793 || VAL_6fefce9e || VAL_4f8969b0 || VAL_1bdf8190 || VAL_192f2f27 || VAL_8a589a2 || VAL_c65a5ef || VAL_6b5176f2 || VAL_b672aa8 || VAL_2fab4aff || VAL_ec0c838 || VAL_6e46d9f4 || VAL_5cc69cfe || VAL_29cfd92b || VAL_21c64522 || VAL_7997b197 || VAL_11dee337 || VAL_460f76a6 || VAL_55f3c410 || VAL_11acdc30 || VAL_770d4269 || VAL_4a8ab068 || VAL_1922e6d || VAL_76a82f33 || VAL_6bab2585 || VAL_74bdc168 || VAL_644c78d4 || VAL_532a02d9 || VAL_611f8234 || VAL_7bb3a9fe || VAL_7cbee484 || VAL_7f811d00 || VAL_62923ee6 || VAL_4089713 || VAL_f19c9d2 || VAL_7807ac2c || VAL_b91d8c4 || VAL_4b6166aa || VAL_a77614d || VAL_4fd4cae3 || VAL_4a067c25 || VAL_a1217f9 || VAL_3bde62ff || VAL_523424b5 || VAL_2baa8d82 || VAL_319dead1 || VAL_791cbf87 || VAL_a7e2d9d || VAL_754777cd || VAL_2b52c0d6 || VAL_372ea2bc || VAL_4cc76301 || VAL_2f08c4b || VAL_3f19b8b3 || VAL_7de0c6ae || VAL_a486d78 || VAL_cdc3aae || VAL_7ef2d7a6 || VAL_5dcbb60 || VAL_4c36250e || VAL_21526f6c || VAL_49f5c307 || VAL_299266e2 || VAL_5471388b || VAL_66ea1466 || VAL_1601e47 || VAL_3bffddff || VAL_66971f6b || VAL_50687efb || VAL_517bd097 || VAL_142eef62 || VAL_4a9cc6cb || VAL_5990e6c5 || VAL_56e07a08 || VAL_35d6ca49 || VAL_1950e8a6 || VAL_47289387 || VAL_12cd9150 || VAL_114a85c2 || VAL_f415a95 || VAL_cf65451 || VAL_724f138e || VAL_37eeec90 || VAL_32fe9d0a || VAL_c9413d8 || VAL_64da2a7 || VAL_46074492 || VAL_d78795 || VAL_2c715e84 || VAL_47428937 || VAL_3b9d6699 || VAL_7caa550 || VAL_21694e53 || VAL_72b16078 || VAL_22c86919 || VAL_70fab835 || VAL_1b0a7baf || VAL_62417a16 || VAL_32057e6 || VAL_26be6ca7 || VAL_6ea1bcdc || VAL_759fad4 || VAL_64712be || VAL_53499d85 || VAL_30ed9c6c || VAL_782a4fff || VAL_46c670a6 || VAL_59fc684e || VAL_5ae81e1 || VAL_2fd1731c || VAL_5ae76500 || VAL_6063d80a || VAL_1133ec6e || VAL_355e34c7 || VAL_54709809 || VAL_2a2da905 || VAL_24f360b2 || VAL_60cf80e7 || VAL_302fec27 || VAL_770d0ea6 || VAL_48c40605 || VAL_54107f42 || VAL_1b11ef33 || VAL_476aac9 || VAL_6cea706c || VAL_3bd7f8dc || VAL_2f2bf0e2 || VAL_1eba372c || VAL_21ec5d87 || VAL_25f9407e || VAL_552518c3 || VAL_1a69561c || VAL_59aa20b3 || VAL_363f6148 || VAL_4b21844c || VAL_1b28f282 || VAL_138fe6ec || VAL_5e77f0f4 || VAL_19b30c92 || VAL_455351c4 || VAL_29876704 || VAL_4816c290 || VAL_4940809c || VAL_16423501 || VAL_4efcf8a || VAL_7a138fc5 || VAL_379ab47b || VAL_307765b4 || VAL_4a9e6faf || VAL_2c95ac9e || VAL_4e4efc1b || VAL_459f7aa3 || VAL_7cc586a8 || VAL_7db534f2 || VAL_44a2b17b || VAL_7a56812e || VAL_2a76b80a || VAL_7eb01b12 || VAL_2f4854d6 || VAL_61d9efe0 || VAL_7e70bd39 || VAL_e6516e || VAL_6de54b40 || VAL_43ed0ff3 || VAL_388ffbc2 || VAL_a50b09c || VAL_4da855dd || VAL_6691490c || VAL_2187fff7 || VAL_2e5c7f0b || VAL_21d5c1a0 || VAL_4de025bf || VAL_538613b3 || VAL_1eef9aef || VAL_11389053 || VAL_5db99216 || VAL_3ec11999 || VAL_5c1bd44c || VAL_9f46d94 || VAL_18cc679e || VAL_2e77b8cf || VAL_2c4ca0f9 || VAL_67ef029 || VAL_7df587ef || VAL_6e57e95e || VAL_2755d705 || VAL_56db847e || VAL_740abb5 || VAL_560cbf1a || VAL_5fe8b721 || VAL_551a20d6 || VAL_578524c3 || VAL_64c2b546 || VAL_7e094740 || VAL_7a11c4c7 || VAL_4cc547a || VAL_7555b920 || VAL_4152d38d || VAL_3591009c || VAL_5398edd0 || VAL_b5cc23a || VAL_5cc5b667 || VAL_61edc883 || VAL_758f4f03 || VAL_182f1e9a || VAL_6928f576 || VAL_660e9100 || VAL_69f63d95 || VAL_9cd25ff || VAL_27e0f2f5 || VAL_3574e198 || VAL_6db66836 || VAL_db44aa2 || VAL_2de366bb || VAL_3f093abe || VAL_61a002b1 || VAL_4eeea57d || VAL_780ec4a5 || VAL_e24ddd0 || VAL_6f70f32f || VAL_548e76f1 || VAL_5aabbb29 || VAL_72c927f1 || VAL_1ac85b0c || VAL_3dd69f5a || VAL_3aa3193a || VAL_1ee4730 || VAL_59a67c3a || VAL_5003041b || VAL_724bade8 || VAL_16fb356 || VAL_6bc248ed || VAL_23a9ba52 || VAL_ca27722 || VAL_70ab80e3 || VAL_9573b3b || VAL_67427b69 || VAL_78461bc4 || VAL_544630b7 || VAL_64f857e7 || VAL_1095f122 || VAL_58c540cf || VAL_3d6300e8 || VAL_1b822fcc || VAL_24a1c17f || VAL_56102e1c || VAL_73511076 || VAL_7927bd9f || VAL_532721fd || VAL_410954b || VAL_7fb9f71f || VAL_3b366632 || VAL_51f49060 || VAL_514eedd8 || VAL_617fe9e1 || VAL_6970140a || VAL_1cf2fed4 || VAL_3af4e0bf || VAL_245a26e1 || VAL_4d63b624 || VAL_466cf502 || VAL_5b800468 || VAL_2e185cd7 || VAL_7e1a1da6 || VAL_5f7f2382 || VAL_407cf41 || VAL_6815c5f2 || VAL_46cc127b || VAL_60094a13 || VAL_5aceec94 || VAL_1c32886a || VAL_3a4b0e5d || VAL_10b892d5 || VAL_3d3f761a || VAL_3546d80f || VAL_579d011c || VAL_3670f00 || VAL_452e26d0 || VAL_46ab18da || VAL_790174f2 || VAL_42257bdd || VAL_7689ddef || VAL_687a762c || VAL_1a2e2935 || VAL_733c423e || VAL_4b629f13 || VAL_70925b45 || VAL_1b9ea3e3 || VAL_aa22f1c || VAL_55e7a35c || VAL_37cd92d6 || VAL_5922ae77 || VAL_4263b080 || VAL_2af616d3 || VAL_71f67a79 || VAL_3deb2326 || VAL_62d363ab || VAL_7889a1ac || VAL_3aee3976 || VAL_5ef8df1e || VAL_27cf3151 || VAL_127e70c5 || VAL_5910de75 || VAL_4108fa66 || VAL_1f130eaf || VAL_7e0aadd0 || VAL_21362712 || VAL_27eb3298 || VAL_200a26bc || VAL_bc57b40 || VAL_1b5bc39d || VAL_655a5d9c || VAL_1494b84d || VAL_34abdee4 || VAL_71a9b4c7 || VAL_4628b1d3 || VAL_77cf3f8b || VAL_1df98368 || VAL_21ca139c || VAL_226f885f || VAL_2cd2c8fe || VAL_7d61eccf || VAL_cc6460c || VAL_52350abb || VAL_681aad3b || VAL_1a6f2363 || VAL_2427e004 || VAL_5ebd56e9 || VAL_63f34b70 || VAL_641856 || VAL_1b58ff9e || VAL_2f66e802 || VAL_56b78e55 || VAL_76318a7d || VAL_2a492f2a || VAL_3277e499 || VAL_585811a4 || VAL_22c01ab0 || VAL_411341bd || VAL_4c4d362a || VAL_5400db36 || VAL_76b74e9c || VAL_2d72f75e || VAL_8ab78bc || VAL_5aa0dbf4 || VAL_16afbd92 || VAL_2c5d601e || VAL_7fe083b1 || VAL_23c388c2 || VAL_486be205 || VAL_f713686 || VAL_74f7d1d2 || VAL_4b4dd216 || VAL_5ca17ab0 || VAL_5a62b2a4 || VAL_1051817b || VAL_35293c05 || VAL_620aa4ea || VAL_2db2dd9d || VAL_3174cb09 || VAL_4d411036 || VAL_7adbd080 || VAL_41beb473 || VAL_560513ce || VAL_13006998 || VAL_37fbe4a8 || VAL_352c308 || VAL_7d373bcf || VAL_6d6bc158 || VAL_5dda6f9 || VAL_10027fc9 || VAL_54afd745 || VAL_677dbd89 || VAL_fff25f1 || VAL_c00fff0 || VAL_263f04ca || VAL_2ca47471 || VAL_5a021cb9 || VAL_51768776 || VAL_f31c0c6 || VAL_b93aad || VAL_4a9419d7 || VAL_2f3c6ac4 || VAL_2e8ab815 || VAL_67af833b || VAL_d1f74b8 || VAL_41394595 || VAL_3a0807b7 || VAL_21a5fd96 || VAL_5769e7ae || VAL_5c77053b || VAL_26b894bd || VAL_287f94b1 || VAL_30b34287 || VAL_5489c777 || VAL_3676ac27 || VAL_62f87c44 || VAL_48f5bde6 || VAL_525d79f0 || VAL_5149f008 || VAL_7072bc39 || VAL_158d255c || VAL_2ca65ce4 || VAL_327120c8 || VAL_5707c1cb || VAL_2b5cb9b2 || VAL_35038141 || VAL_ecf9049 || VAL_672f11c2 || VAL_2970a5bc || VAL_50305a || VAL_72efb5c1 || VAL_6d511b5f || VAL_41200e0c || VAL_40f33492 || VAL_4fbdc0f0 || VAL_2ad3a1bb || VAL_6bc28a83 || VAL_324c64cd || VAL_13579834 || VAL_24be2d9c || VAL_5bd73d1a || VAL_aec50a1 || VAL_2555fff0 || VAL_70d2e40b || VAL_120f38e6 || VAL_7a0e1b5e || VAL_702ed190 || VAL_173b9122 || VAL_7c18432b || VAL_7646731d || VAL_70e29e14 || VAL_3b1bb3ab || VAL_5a4bef8 || VAL_40bffbca || VAL_2449cff7 || VAL_42a9a63e || VAL_62da83ed || VAL_5d8445d7 || VAL_37d80fe7 || VAL_384fc774 || VAL_e3cee7b || VAL_71e9a896 || VAL_6b9267b || VAL_408b35bf || VAL_29ad44e3 || VAL_15bcf458 || VAL_5af9926a || VAL_43c67247 || VAL_fac80 || VAL_726386ed || VAL_649f2009 || VAL_14bb2297 || VAL_69adf72c || VAL_797501a || VAL_1a15b789 || VAL_57f791c6 || VAL_51650883 || VAL_6c4f9535 || VAL_5bd1ceca || VAL_30c31dd7 || VAL_499b2a5c || VAL_596df867 || VAL_c1fca1e || VAL_241a53ef || VAL_344344fa || VAL_2db2cd5 || VAL_70e659aa || VAL_615f972 || VAL_285f09de || VAL_73393584 || VAL_31500940 || VAL_1827a871 || VAL_48e64352 || VAL_7249dadf || VAL_4362d7df || VAL_66238be2 || VAL_1c25b8a7 || VAL_200606de || VAL_750fe12e || VAL_f8908f6 || VAL_3e587920 || VAL_2ef8a8c3 || VAL_24f43aa3 || VAL_63fd4873 || VAL_1e11bc55 || VAL_7544a1e4 || VAL_70e0accd || VAL_7957dc72 || VAL_6ab72419 || VAL_3aacf32a || VAL_4fdfa676 || VAL_82c57b3 || VAL_5be82d43 || VAL_600b0b7 || VAL_345e5a17 || VAL_5ea502e0 || VAL_443dbe42 || VAL_473b3b7a || VAL_1734f68 || VAL_77b7ffa4 || VAL_5ed190be || VAL_402f80f5 || VAL_5bbc9f97 || VAL_133e019b || VAL_41382722 || VAL_7dac3fd8 || VAL_425357dd || VAL_2102a4d5 || VAL_210386e0 || VAL_3d4d3fe7 || VAL_65f87a2c || VAL_51684e4a || VAL_6ce1f601 || VAL_38875e7d || VAL_1e886a5b || VAL_d816dde || VAL_6e33c391 || VAL_6c451c9c || VAL_31c269fd || VAL_372b0d86 || VAL_47747fb9 || VAL_3113a37 || VAL_213e3629 || VAL_4e9658b5 || VAL_2a7b6f69 || VAL_20312893 || VAL_70eecdc2 || VAL_c41709a || VAL_7db0565c || VAL_54ec8cc9 || VAL_52eacb4b || VAL_5528a42c || VAL_2a551a63 || VAL_1a6f5124 || VAL_1edb61b1 || VAL_ec2bf82 || VAL_cc62a3b || VAL_6cc0bcf6 || VAL_29539e36 || VAL_32f61a31 || VAL_f5c79a6 || VAL_669253b7 || VAL_5305c37d || VAL_51a06cbe || VAL_3dddbe65 || VAL_49a64d82 || VAL_344561e0 || VAL_66d23e4a || VAL_36ac8a63 || VAL_4d9d1b69 || VAL_52c8295b || VAL_251f7d26 || VAL_77b21474 || VAL_52d10fb8 || VAL_41c07648 || VAL_1fe8d51b || VAL_781e7326 || VAL_22680f52 || VAL_60d84f61 || VAL_39c11e6c || VAL_324dcd31 || VAL_503d56b5 || VAL_72bca894 || VAL_433ffad1 || VAL_1fc793c2 || VAL_2575f671 || VAL_329a1243 || VAL_ecf9fb3 || VAL_2d35442b || VAL_27f9e982 || VAL_4593ff34 || VAL_37d3d232 || VAL_30c0ccff || VAL_581d969c || VAL_22db8f4 || VAL_2b46a8c1 || VAL_1d572e62 || VAL_29caf222 || VAL_46cf05f7 || VAL_5851bd4f || VAL_7cd1ac19 || VAL_2f40a43 || VAL_3caa4757 || VAL_69c43e48 || VAL_1804f60d || VAL_3a80515c || VAL_547e29a4 || VAL_1c807b1d || VAL_238b521e || VAL_1b39fd82 || VAL_3e2fc448 || VAL_21680803 || VAL_588ab592 || VAL_c8b96ec || VAL_4cc61eb1 || VAL_2d8f2f3a || VAL_2024293c || VAL_7048f722 || VAL_c074c0c || VAL_58a55449 || VAL_5949eba8 || VAL_6e0ff644 || VAL_58dea0a5 || VAL_2a2bb0eb || VAL_3c291aad || VAL_2d0566ba || VAL_733037 || VAL_7728643a || VAL_320e400 || VAL_5167268 || VAL_1cfd1875 || VAL_28c0b664 || VAL_2c444798 || VAL_1af7f54a || VAL_6ebd78d1 || VAL_436390f4 || VAL_4d157787 || VAL_68ed96ca || VAL_6d1310f6 || VAL_3228d990 || VAL_54e7391d || VAL_50b8ae8d || VAL_255990cc || VAL_51c929ae || VAL_3c8bdd5b || VAL_29d2d081 || VAL_40e4ea87 || VAL_58783f6c || VAL_3a7b503d || VAL_512d92b || VAL_62c5bbdc || VAL_7bdf6bb7 || VAL_1bc53649 || VAL_88d6f9b || VAL_47d93e0d || VAL_475b7792 || VAL_751e664e || VAL_160c3ec1 || VAL_182b435b || VAL_4d0402b || VAL_2fa7ae9 || VAL_7577b641 || VAL_3704122f || VAL_3153ddfc || VAL_60afd40d || VAL_28a2a3e7 || VAL_3f2049b6 || VAL_10b3df93 || VAL_ea27e34 || VAL_33a2499c || VAL_e72dba7 || VAL_33c2bd || VAL_1dfd5f51 || VAL_3c321bdb || VAL_24855019 || VAL_3abd581e || VAL_4d4d8fcf || VAL_610db97e || VAL_6f0628de || VAL_3fabf088 || VAL_1e392345 || VAL_12f3afb5 || VAL_4ced35ed || VAL_2c22a348 || VAL_7bd69e82 || VAL_74d7184a || VAL_51b01960 || VAL_6831d8fd || VAL_27dc79f7 || VAL_6b85300e || VAL_3aaf4f07 || VAL_5cbf9e9f || VAL_18e8473e || VAL_5a2f016d || VAL_1a38ba58 || VAL_3ad394e6 || VAL_6058e535 || VAL_42deb43a || VAL_1deb2c43 || VAL_3bb9efbc || VAL_1cefc4b3 || VAL_2b27cc70 || VAL_6f6a7463 || VAL_1bdaa23d || VAL_79f227a9 || VAL_6ca320ab || VAL_50d68830 || VAL_1e53135d || VAL_7674a051 || VAL_3a7704c || VAL_6754ef00 || VAL_619bd14c || VAL_323e8306 || VAL_a23a01d || VAL_4acf72b6 || VAL_7561db12 || VAL_3301500b || VAL_24b52d3e || VAL_15deb1dc || VAL_6e9c413e || VAL_57a4d5ee || VAL_5af5def9 || VAL_3a45c42a || VAL_36dce7ed || VAL_47a64f7d || VAL_33d05366 || VAL_27a0a5a2 || VAL_7692cd34 || VAL_33aa93c || VAL_32c0915e || VAL_106faf11 || VAL_70f43b45 || VAL_26d10f2e || VAL_10ad20cb || VAL_7dd712e8 || VAL_2c282004 || VAL_22ee2d0 || VAL_7bfc3126 || VAL_3e792ce3 || VAL_53bc1328 || VAL_26f143ed || VAL_3c1e3314 || VAL_4b770e40 || VAL_78e16155 || VAL_54a3ab8f || VAL_1968a49c || VAL_6a1ebcff || VAL_19868320 || VAL_50b0bc4c || VAL_c20be82 || VAL_13c612bd || VAL_3ef41c66 || VAL_6b739528 || VAL_622ef26a || VAL_41de5768 || VAL_5f577419 || VAL_28fa700e || VAL_3d526ad9 || VAL_e041f0c || VAL_6a175569 || VAL_11963225 || VAL_3f3c966c || VAL_11ee02f8 || VAL_4102b1b1 || VAL_61a5b4ae || VAL_3a71c100 || VAL_5b69fd74 || VAL_f325091 || VAL_437e951d || VAL_77b325b3 || VAL_63a5e46c || VAL_7e8e8651 || VAL_49ef32e0 || VAL_271f18d3 || VAL_6bd51ed8 || VAL_61e3a1fd || VAL_51abf713 || VAL_eadb475 || VAL_4d4d48a6 || VAL_315df4bb || VAL_3fc08eec || VAL_5cad8b7d || VAL_7b02e036 || VAL_25243bc1 || VAL_1e287667 || VAL_2e6ee0bc || VAL_4201a617 || VAL_467f77a5 || VAL_1bb9aa43 || VAL_420bc288 || VAL_df5f5c0 || VAL_308a6984 || VAL_66b72664 || VAL_7a34b7b8 || VAL_58cd06cb || VAL_3be8821f || VAL_64b31700 || VAL_3b65e559 || VAL_bae47a0 || VAL_74a9c4b0 || VAL_85ec632 || VAL_1c05a54d || VAL_65ef722a || VAL_5fd9b663 || VAL_214894fc || VAL_10567255 || VAL_e362c57 || VAL_1c4ee95c || VAL_79c4715d || VAL_5aa360ea || VAL_6548bb7d || VAL_e27ba81 || VAL_54336c81 || VAL_1556f2dd || VAL_35e52059 || VAL_62577d6 || VAL_49bd54f7 || VAL_6b5f8707 || VAL_772485dd || VAL_5a12c728 || VAL_79ab3a71 || VAL_6e5bfdfc || VAL_3d829787 || VAL_71652c98 || VAL_51bde877 || VAL_60b85ba1 || VAL_492fc69e || VAL_117632cf || VAL_2fb68ec6 || VAL_d71adc2 || VAL_3add81c4 || VAL_1a1d3c1a || VAL_1c65121 || VAL_159e366 || VAL_57dc9128 || VAL_24528a25 || VAL_17ae98d7 || VAL_59221b97 || VAL_6ac4944a || VAL_5a772895 || VAL_39fc6b2c || VAL_704b2127 || VAL_3ee39da0 || VAL_5d332969 || VAL_7cc9ce8 || VAL_2e27d72f || VAL_c0b41d6 || VAL_4837595f || VAL_2bffa76d || VAL_3b718392 || VAL_6d2260db || VAL_1f2d2181 || VAL_49bf29c6 || VAL_7ee55e70 || VAL_3fcdcf || VAL_7668d560 || VAL_46292372 || VAL_126be319 || VAL_6c44052e || VAL_5c371e13 || VAL_530a8454 || VAL_1e34c607 || VAL_5215cd9a || VAL_36b6964d || VAL_31198ceb || VAL_9257031 || VAL_75201592 || VAL_7726e185 || VAL_aa5455e || VAL_282308c3 || VAL_5dda14d0 || VAL_1db0ec27 || VAL_3d9fc57a || VAL_d4ab71a || VAL_3b4ef7 || VAL_1af05b03 || VAL_5987e932 || VAL_1ad777f || VAL_5bbbdd4b || VAL_438bad7c || VAL_25230246 || VAL_4fdf8f12 || VAL_4a8b5227 || VAL_54f5f647 || VAL_6979efad || VAL_5a6d5a8f || VAL_4a67318f || VAL_315ba14a || VAL_17f9344b || VAL_27f0ad19 || VAL_54e81b21 || VAL_38d5b107 || VAL_6650813a || VAL_44ea608c || VAL_50cf5a23 || VAL_450794b4 || VAL_273c947f || VAL_30457e14 || VAL_1af1347d || VAL_632aa1a3 || VAL_20765ed5 || VAL_3b582111 || VAL_2899a8db || VAL_1e8823d2 || VAL_c1a4620 || VAL_76b0ae1b || VAL_130a0f66 || VAL_4c432866 || VAL_12365c88 || VAL_6105f8a3 || VAL_2237bada || VAL_77e2a6e2 || VAL_5710768a || VAL_199e4c2b || VAL_6e0d4a8 || VAL_64d7b720 || VAL_30272916 || VAL_5bb3d42d || VAL_5bf61e67 || VAL_2c1dc8e || VAL_b273a59 || VAL_4e7095ac || VAL_251ebf23 || VAL_29b732a2 || VAL_1b70203f || VAL_51671b08 || VAL_15051a0 || VAL_1162410a || VAL_b09fac1 || VAL_62df0ff3 || VAL_61019f59 || VAL_62e8f862 || VAL_26f3d90c || VAL_3c49fab6 || VAL_515f4131 || VAL_74518890 || VAL_4c5204af || VAL_3f3ddbd9 || VAL_14c053c6 || VAL_6c2d4cc6 || VAL_30865a90 || VAL_6134ac4a || VAL_777c9dc9 || VAL_71b1a49c || VAL_73e132e0 || VAL_3773862a || VAL_2472c7d8 || VAL_589b028e || VAL_22175d4f || VAL_9fecdf1 || VAL_3b809711 || VAL_3b0f7d9d || VAL_236ab296 || VAL_5c84624f || VAL_63034ed1 || VAL_232024b9 || VAL_55a8dc49 || VAL_2a415aa9 || VAL_53cdecf6 || VAL_71ea1fda || VAL_62b3df3a || VAL_420745d7 || VAL_7e11ab3d || VAL_5fa47fea || VAL_2392212b || VAL_5b43e173 || VAL_28f8e165 || VAL_545f80bf || VAL_66f66866 || VAL_22fa55b2 || VAL_4d666b41 || VAL_6594402a || VAL_30f4b1a6 || VAL_405325cf || VAL_3e1162e7 || VAL_79c3f01f || VAL_6c2f1700 || VAL_350b3a17 || VAL_38600b || VAL_669d2b1b || VAL_721eb7df || VAL_1ea9f009 || VAL_5d52e3ef || VAL_5298dead || VAL_553f3b6e || VAL_4c7a078 || VAL_4e406694 || VAL_5ab9b447 || VAL_76f10035 || VAL_4f8caaf3 || VAL_2b50150 || VAL_15b986cd || VAL_6bb7cce7 || VAL_41c62850 || VAL_6b530eb9 || VAL_328572f0 || VAL_678040b3 || VAL_17f460bb || VAL_64a1923a || VAL_7d2a6eac || VAL_18ca3c62 || VAL_2c0f7678 || VAL_44d70181 || VAL_6aa648b9 || VAL_23c650a3 || VAL_742d4e15 || VAL_88a8218 || VAL_50b1f030 || VAL_4163f1cd || VAL_5fa05212 || VAL_3e681bc || VAL_5c09d180 || VAL_23aae55 || VAL_5f574cc2 || VAL_680bddf5 || VAL_7a9c84a5 || VAL_2d83c5a5 || VAL_48d7ad8b || VAL_7e053511 || VAL_60222fd8 || VAL_53bf7094 || VAL_26f1249d || VAL_710b30ef || VAL_a68df9 || VAL_28b576a9 || VAL_7cf7aee || VAL_2f6bbeb0 || VAL_1b1637e1 || VAL_18151a14 || VAL_64711bf2 || VAL_169da7f2 || VAL_3c1e23ff || VAL_ceb4bd2 || VAL_60297f36 || VAL_1bf0f6f6 || VAL_56bc3fac || VAL_df4b72 || VAL_2ba45490 || VAL_37ff4054 || VAL_894858 || VAL_7af707e0 || VAL_737edcfa || VAL_3ecedf21 || VAL_74cf8b28 || VAL_36c54a56 || VAL_3359c978 || VAL_7ba63fe5 || VAL_73386d72 || VAL_6f330eb9 || VAL_125c082e || VAL_584f5497 || VAL_68ace111 || VAL_1f9d6c7b || VAL_6df20ade || VAL_4fbb001b || VAL_4010d494 || VAL_341a8659 || VAL_4943defe || VAL_5eefa415 || VAL_181d7f28 || VAL_78d50a3c || VAL_2fb69ff6 || VAL_cda4919 || VAL_7f4d9395 || VAL_2f19f2aa || VAL_344b8190 || VAL_6a078481 || VAL_79c5636f || VAL_1929425f || VAL_718607eb || VAL_27f3b6d6 || VAL_757f675c || VAL_2617f816 || VAL_676f0a60 || VAL_5d10455d || VAL_535b8c24 || VAL_4a951911 || VAL_55b62629 || VAL_a53bb6f || VAL_5e63cad || VAL_6759f091 || VAL_33a053d || VAL_14a54ef6 || VAL_20921b9b || VAL_867ba60 || VAL_5ba745bc || VAL_654b72c0 || VAL_55b5e331 || VAL_6034e75d || VAL_15fc442 || VAL_3f3c7bdb || VAL_456abb66 || VAL_2a3a299 || VAL_7da10b5b || VAL_219f4597 || VAL_31be6b49 || VAL_2e16b08d || VAL_5b989dc7 || VAL_70d8de || VAL_42561fba || VAL_595f4da5 || VAL_46b695ec || VAL_408613cc || VAL_325f7fa9 || VAL_11ce2e22 || VAL_63a5d002 || VAL_13cda7c9 || VAL_5aa6202e || VAL_3af9aa66 || VAL_771158fb || VAL_91c4a3f || VAL_62d0ac62 || VAL_150d80c4 || VAL_6826c41e || VAL_3003697 || VAL_64d43929 || VAL_1d269ed7 || VAL_437ebf59 || VAL_41c89d2f || VAL_410e94e || VAL_2d691f3d || VAL_1bdbf9be || VAL_1e7f2e0f || VAL_1da6ee17 || VAL_78d39a69 || VAL_3c818ac4 || VAL_5b69d40d || VAL_71154f21 || VAL_15f193b8 || VAL_2516fc68 || VAL_304a9d7b || VAL_6bfdb014 || VAL_72889280 || VAL_606fc505 || VAL_4aa3d36 || VAL_2d140a7 || VAL_347bdeef || VAL_2aa27288 || VAL_7f34a967 || VAL_77e80a5e || VAL_1d8e2eea || VAL_240139e1 || VAL_7ea4d397 || VAL_49298ce7 || VAL_253c1256 || VAL_8dfe921 || VAL_503fbbc6 || VAL_55f45b92 || VAL_109f5dd8 || VAL_67fe380b || VAL_4a325eb9 || VAL_3dedb4a6 || VAL_57f64f5e || VAL_415e0bcb || VAL_194152cf || VAL_49d98dc5 || VAL_2c30b71f || VAL_1d81e101 || VAL_ec50f54 || VAL_bf71cec || VAL_22d6cac2 || VAL_30cdae70 || VAL_1654a892 || VAL_2577d6c8 || VAL_3163987e || VAL_6c000e0c || VAL_5f233b26 || VAL_44f9779c || VAL_6974a715 || VAL_5e8a459 || VAL_43d455c9 || VAL_4c9e9fb8 || VAL_9ec531 || VAL_40147317 || VAL_210f0cc1 || VAL_19542407 || VAL_6f95cd51 || VAL_c7a977f || VAL_55caeb35 || VAL_6d868997 || VAL_2c383e33 || VAL_74a195a4 || VAL_76304b46 || VAL_2fa3be26 || VAL_4287d447 || VAL_3af37506 || VAL_4e6d7365 || VAL_7c0da600 || VAL_d4602a || VAL_21ae6e73 || VAL_47dd778 || VAL_15515c51 || VAL_36a7abe1 || VAL_64a896b0 || VAL_e044b4a || VAL_11a82d0f || VAL_1adb7478 || VAL_3ae66c85 || VAL_16943e88 || VAL_4604b900 || VAL_73d6d0c || VAL_e36bb2a || VAL_3961a41a || VAL_5a4ed68f || VAL_367795c7 || VAL_d2387c8 || VAL_3956b302 || VAL_1500e009 || VAL_1fd386c3 || VAL_edf4f36 || VAL_29d334c || VAL_100f9bbe || VAL_13e9f2e2 || VAL_673bb956 || VAL_cd7f1ae || VAL_60e949e1 || VAL_3c4bc9fc || VAL_680362a || VAL_3569edd5 || VAL_1f651cd8 || VAL_7d0332e1 || VAL_7a356a0d || VAL_c827db || VAL_377c68c6 || VAL_538cd0f2 || VAL_238ad8c || VAL_430fa4ef || VAL_1761de10 || VAL_22df874e || VAL_654c1a54 || VAL_5bdaf2ce || VAL_42d236fb || VAL_1ce93c18 || VAL_19f21b6b || VAL_1532c619 || VAL_46044faa || VAL_1358b28e || VAL_1a78dacd || VAL_19f9d595 || VAL_7de4a01f || VAL_2bfeb1ef || VAL_778ca8ef || VAL_208e9ef6 || VAL_78b236a0 || VAL_261d8190 || VAL_34448e6c || VAL_60e9df3c || VAL_907f2b7 || VAL_435ce306 || VAL_537b32ef || VAL_7dc51783 || VAL_4b61d0c6 || VAL_6f815e7f || VAL_65e7f52a || VAL_304b9f1a || VAL_75699e35 || VAL_107e5441 || VAL_4aeaadc1 || VAL_263558c9 || VAL_1f14f20c || VAL_7daa61f3 || VAL_62315f22 || VAL_6e4ea0bd || VAL_56f2bbea || VAL_78f9ed3e || VAL_1059754c || VAL_b0964b2 || VAL_48e7b3d2 || VAL_7f4037ed || VAL_24e8de5c || VAL_64040287 || VAL_110844f6 || VAL_6f89f665 || VAL_df1cff6 || VAL_4925f4f5 || VAL_1ad926d3 || VAL_3a43d133 || VAL_39ce27f2 || VAL_5f2afe62 || VAL_c96a4ea || VAL_28782602 || VAL_60c16548 || VAL_68105edc || VAL_511816c0 || VAL_38b972d7 || VAL_5339bbad || VAL_3935e9a8 || VAL_288a4658 || VAL_5b56b654 || VAL_452c8a40 || VAL_534243e4 || VAL_29006752 || VAL_470a9030 || VAL_66d57c1b || VAL_27494e46 || VAL_d59970a || VAL_1e411d81 || VAL_53b98ff6 || VAL_3e6fd0b9 || VAL_7fcff1b9 || VAL_697446d4 || VAL_76adb233 || VAL_36074e47 || VAL_36453307 || VAL_7dcc91fd || VAL_66eb985d || VAL_6a9287b1 || VAL_75504cef || VAL_6c8a68c1 || VAL_56193c7d || VAL_28c88600 || VAL_5f8890c2 || VAL_607b2792 || VAL_7f9e1534 || VAL_138a7441 || VAL_81ff872 || VAL_31611954 || VAL_3e598df9 || VAL_7e31ce0f || VAL_99a65d3 || VAL_3088660d || VAL_42cc13a0 || VAL_32fdec40 || VAL_6813a331 || VAL_1bd81830 || VAL_39ab59f8 || VAL_64e92d61 || VAL_111610e6 || VAL_4ad4936c || VAL_29d37757 || VAL_4fcc529 || VAL_25cc7470 || VAL_4beddc56 || VAL_79b663b3 || VAL_1b812421 || VAL_5d28bcd5 || VAL_7882c44a || VAL_32639b12 || VAL_20d11153 || VAL_3887cf88 || VAL_5649ec46 || VAL_78dc4696 || VAL_502f8b57 || VAL_5652f555 || VAL_4fe01805 || VAL_55120f99 || VAL_794b435f || VAL_38f2e97e || VAL_779dfe55 || VAL_323659f8 || VAL_1144a55a || VAL_3e521715 || VAL_26a529dc || VAL_265c5d69 || VAL_1286528d || VAL_3cc20577 || VAL_33a630fa || VAL_775594f2 || VAL_5767b2af || VAL_7b22ec89 || VAL_790132f7 || VAL_2228db21 || VAL_48b0e701 || VAL_241a0c3a || VAL_547c04c4 || VAL_30e92cb9 || VAL_7fae4d4a || VAL_ba1f559 || VAL_3f4f9acd || VAL_46baf579 || VAL_4bf324f9 || VAL_4f7c0be3 || VAL_ca66933 || VAL_1d2644e3 || VAL_4fa06f52 || VAL_602c4656 || VAL_5ffc5491 || VAL_705202d1 || VAL_3c443976 || VAL_3e58d65e || VAL_3bd55d8 || VAL_63998bf4 || VAL_7e0b9178 || VAL_61942c1 || VAL_6f63c44f || VAL_408a247c || VAL_62a8fd44 || VAL_2e6ba49a || VAL_5f5b5ca4 || VAL_4ee33af7 || VAL_6b04acb2 || VAL_18388a3c || VAL_1d035be3 || VAL_4a60ee36 || VAL_4cfbaf4 || VAL_58faa93b || VAL_5f212d84 || VAL_127d7908 || VAL_6b9c69a9 || VAL_6622a690 || VAL_30b9eadd || VAL_497570fb || VAL_412c995d || VAL_3249a1ce || VAL_4dd94a58 || VAL_2f4919b0 || VAL_a8a8b75 || VAL_75b21c3b || VAL_72be135f || VAL_155d1021 || VAL_4bd2f0dc || VAL_2e647e59 || VAL_2c42b421 || VAL_51e37590 || VAL_deb3b60 || VAL_701a32 || VAL_39aa45a1 || VAL_73aff8f1 || VAL_27cbfddf || VAL_27ead29e || VAL_4c060c8f || VAL_40620d8e || VAL_383f3558 || VAL_49b07ee3 || VAL_352e612e || VAL_65f00478 || VAL_2424686b || VAL_6ea94d6a || VAL_28486680 || VAL_4d7e7435 || VAL_4a1e3ac1 || VAL_6e78fcf5 || VAL_56febdc || VAL_3b8ee898 || VAL_7d151a || VAL_294bdeb4 || VAL_5300f14a || VAL_1f86099a || VAL_77bb0ab5 || VAL_f2c488 || VAL_54acff7d || VAL_7bc9e6ab || VAL_5488b5c5 || VAL_4248ed58 || VAL_712ca57b || VAL_4564e94b || VAL_54534abf || VAL_51745f40 || VAL_45673f68 || VAL_27abb83e || VAL_69e308c6 || VAL_1a1ed4e5 || VAL_667e34b1 || VAL_1c6e0a08 || VAL_6dba847b || VAL_1efdcd5 || VAL_1623bbe5 || VAL_7af1cd63 || VAL_4351171a || VAL_3c2772d1 || VAL_37d00a23 || VAL_433e536f || VAL_89c65d5 || VAL_faa3fed || VAL_381cad29 || VAL_988246e || VAL_62515a47 || VAL_3c5a54b7 || VAL_61f2c3f0 || VAL_291120f4 || VAL_417ad4f3 || VAL_2f6bcf87 || VAL_58f174d9 || VAL_78c7f9b3 || VAL_6f8d7714 || VAL_1e6b9a95 || VAL_4d6f623d || VAL_aa21042 || VAL_e93f3d5 || VAL_4cee7fa0 || VAL_7a26928a || VAL_601cbd8c || VAL_7180e701 || VAL_4e2c95ee || VAL_d0ec63 || VAL_5a5c128 || VAL_73eb8672 || VAL_5942ee04 || VAL_5e76a2bb || VAL_757194dc || VAL_5a865416 || VAL_14faa38c || VAL_7ff2b8d2 || VAL_6dc1484 || VAL_6e92c6ad || VAL_2fb5fe30 || VAL_456be73c || VAL_2375b321 || VAL_5baaae4c || VAL_5b6e8f77 || VAL_41a6d121 || VAL_4f449e8f || VAL_411291e5 || VAL_6e28bb87 || VAL_19f040ba || VAL_72ab05ed || VAL_27e32fe4 || VAL_c3c4c1c || VAL_17d238b1 || VAL_3d7cc3cb || VAL_35e478f || VAL_6d6cb754 || VAL_6b7d1df8 || VAL_3044e9c7 || VAL_41d7b27f || VAL_49096b06;
    }
});
var GRPH_7c7d3c46 = new joint.shapes.basic.Image({
    position: {
        x: 100,
        y: 100
    },
    size: {
        width: 601,
        height: 251
    },
    attrs: {
        text: {
            text: 'groupName',
            'ref-y': 0.5,
            'ref-x': 0.5,
        },
        image: {
            magnet: true,
            type: 'Group',
            opacity: 0.5,
            'xlink:href': 'file:///Users/hellspawn/Documents/Uniandes/Tesis/Repositorios/WebPicture-Java/co.edu.uniandes.picture.webpicture/WebContent/Editors/8e8745eb-bb31-423d-80f4-1ae5e15fba3d/Images/group.svg',
            width: 50,
            height: 50,
        },
    },
});
var GRPH_482d776b = new joint.shapes.basic.Image({
    position: {
        x: 100,
        y: 100
    },
    size: {
        width: 64,
        height: 54
    },
    attrs: {
        text: {
            text: 'elementName',
            'ref-y': 0.5,
            'ref-x': 0.5,
        },
        image: {
            magnet: true,
            type: 'Product',
            opacity: 1.0,
            'xlink:href': 'file:///Users/hellspawn/Documents/Uniandes/Tesis/Repositorios/WebPicture-Java/co.edu.uniandes.picture.webpicture/WebContent/Editors/8e8745eb-bb31-423d-80f4-1ae5e15fba3d/Images/iconiconProductImage.svg',
            width: 50,
            height: 50,
        },
    },
});
var GRPH_297ea53a = new joint.shapes.basic.Image({
    position: {
        x: 100,
        y: 100
    },
    size: {
        width: 64,
        height: 54
    },
    attrs: {
        text: {
            text: 'elementName',
            'ref-y': 0.5,
            'ref-x': 0.5,
        },
        image: {
            magnet: true,
            type: 'Contract',
            opacity: 1.0,
            'xlink:href': 'file:///Users/hellspawn/Documents/Uniandes/Tesis/Repositorios/WebPicture-Java/co.edu.uniandes.picture.webpicture/WebContent/Editors/8e8745eb-bb31-423d-80f4-1ae5e15fba3d/Images/iconiconContractImage.svg',
            width: 50,
            height: 50,
        },
    },
});
var GRPH_acb0951 = new joint.shapes.basic.Image({
    position: {
        x: 100,
        y: 100
    },
    size: {
        width: 64,
        height: 54
    },
    attrs: {
        text: {
            text: 'elementName',
            'ref-y': 0.5,
            'ref-x': 0.5,
        },
        image: {
            magnet: true,
            type: 'BusinessObject',
            opacity: 1.0,
            'xlink:href': 'file:///Users/hellspawn/Documents/Uniandes/Tesis/Repositorios/WebPicture-Java/co.edu.uniandes.picture.webpicture/WebContent/Editors/8e8745eb-bb31-423d-80f4-1ae5e15fba3d/Images/iconiconProductImage.svg',
            width: 50,
            height: 50,
        },
    },
});
var GRPH_4052274f = new joint.shapes.org.Member({
    position: {
        x: 100,
        y: 100
    },
    size: {
        width: 67,
        height: 67
    },
    attrs: {
        '.card': {
            fill: '#F1F1B5',
            magnet: true,
            type: 'Meaning',
            rx: 10,
            ry: 10,
            'stroke-width': 3,
            stroke: '#FFFFFF',
            'stroke-dasharray': '0,0'
        },
        image: {
            'xlink:href': 'file:///Users/hellspawn/Documents/Uniandes/Tesis/Repositorios/WebPicture-Java/co.edu.uniandes.picture.webpicture/WebContent/Editors/8e8745eb-bb31-423d-80f4-1ae5e15fba3d/Images/iconiconCloud.svg',
            'width': 64,
            'height': 64,
            'ref-x': 0.04477611940298507,
            'ref-y': 0.04477611940298507
        },
        '.name': {
            text: 'elementName',
            'ref-y': 0.5
        },
    }
});
var GRPH_132ddbab = new joint.shapes.org.Member({
    position: {
        x: 100,
        y: 100
    },
    size: {
        width: 65,
        height: 65
    },
    attrs: {
        '.card': {
            fill: '#F1F1B5',
            magnet: true,
            type: 'Representation',
            rx: 0,
            ry: 0,
            'stroke-width': 3,
            stroke: '#FFFFFF',
            'stroke-dasharray': '0,0'
        },
        image: {
            'xlink:href': 'file:///Users/hellspawn/Documents/Uniandes/Tesis/Repositorios/WebPicture-Java/co.edu.uniandes.picture.webpicture/WebContent/Editors/8e8745eb-bb31-423d-80f4-1ae5e15fba3d/Images/iconiconrepresentation.svg',
            'width': 64,
            'height': 64,
            'ref-x': 0.015384615384615385,
            'ref-y': 0.015384615384615385
        },
        '.name': {
            text: 'elementName',
            'ref-y': -10.0
        },
    }
});
var GRPH_5bf22f18 = new joint.shapes.basic.Rect({
    position: {
        x: 100,
        y: 100
    },
    size: {
        width: 140,
        height: 62
    },
    attrs: {
        text: {
            text: 'elementName',
            'ref-y': 0.5
        },
        rect: {
            fill: '#F1F1B5',
            opacity: 1.0,
            magnet: true,
            type: 'BusinessService',
            rx: 29,
            ry: 45,
            'stroke-width': 1,
            stroke: '#000000',
            'stroke-dasharray': '1,1'
        },
    }
});
var GRPH_267f474e = new joint.shapes.org.Member({
    position: {
        x: 100,
        y: 100
    },
    size: {
        width: 140,
        height: 60
    },
    attrs: {
        '.card': {
            fill: '#F1F1B5',
            magnet: true,
            type: 'BusinessProcess',
            rx: 10,
            ry: 10,
            'stroke-width': 2,
            stroke: '#000000',
            'stroke-dasharray': '0,0'
        },
        image: {
            'xlink:href': 'file:///Users/hellspawn/Documents/Uniandes/Tesis/Repositorios/WebPicture-Java/co.edu.uniandes.picture.webpicture/WebContent/Editors/8e8745eb-bb31-423d-80f4-1ae5e15fba3d/Images/iconiconProcessIcon2.svg',
            'width': 16,
            'height': 16,
            'ref-x': 0.8785714285714286,
            'ref-y': 0.03333333333333333
        },
        '.name': {
            text: 'elementName',
            'ref-y': 0.5
        },
    }
});
var GRPH_7a7471ce = new joint.shapes.org.Member({
    position: {
        x: 100,
        y: 100
    },
    size: {
        width: 140,
        height: 60
    },
    attrs: {
        '.card': {
            fill: '#F1F1B5',
            magnet: true,
            type: 'BusinessFunction',
            rx: 10,
            ry: 10,
            'stroke-width': 1,
            stroke: '#000000',
            'stroke-dasharray': '1,1'
        },
        image: {
            'xlink:href': 'file:///Users/hellspawn/Documents/Uniandes/Tesis/Repositorios/WebPicture-Java/co.edu.uniandes.picture.webpicture/WebContent/Editors/8e8745eb-bb31-423d-80f4-1ae5e15fba3d/Images/iconiconfunctionIcon.svg',
            'width': 16,
            'height': 16,
            'ref-x': 0.8785714285714286,
            'ref-y': 0.03333333333333333
        },
        '.name': {
            text: 'elementName',
            'ref-y': 0.5
        },
    }
});
var GRPH_28276e50 = new joint.shapes.org.Member({
    position: {
        x: 100,
        y: 100
    },
    size: {
        width: 140,
        height: 60
    },
    attrs: {
        '.card': {
            fill: '#F1F1B5',
            magnet: true,
            type: 'BusinessInteraction',
            rx: 10,
            ry: 10,
            'stroke-width': 1,
            stroke: '#000000',
            'stroke-dasharray': '1,1'
        },
        image: {
            'xlink:href': 'file:///Users/hellspawn/Documents/Uniandes/Tesis/Repositorios/WebPicture-Java/co.edu.uniandes.picture.webpicture/WebContent/Editors/8e8745eb-bb31-423d-80f4-1ae5e15fba3d/Images/iconiconInteractionIcon.svg',
            'width': 16,
            'height': 16,
            'ref-x': 0.8785714285714286,
            'ref-y': 0.03333333333333333
        },
        '.name': {
            text: 'elementName',
            'ref-y': 0.5
        },
    }
});
var GRPH_62e70ea3 = new joint.shapes.basic.Image({
    position: {
        x: 100,
        y: 100
    },
    size: {
        width: 85,
        height: 65
    },
    attrs: {
        text: {
            text: 'elementName',
            'ref-y': -10.0,
            'ref-x': 0.5,
        },
        image: {
            magnet: true,
            type: 'BusinessEvent',
            opacity: 1.0,
            'xlink:href': 'file:///Users/hellspawn/Documents/Uniandes/Tesis/Repositorios/WebPicture-Java/co.edu.uniandes.picture.webpicture/WebContent/Editors/8e8745eb-bb31-423d-80f4-1ae5e15fba3d/Images/iconiconeventFigure.svg',
            width: 50,
            height: 50,
        },
    },
});
var GRPH_3efe7086 = new joint.shapes.org.Member({
    position: {
        x: 100,
        y: 100
    },
    size: {
        width: 56,
        height: 87
    },
    attrs: {
        '.card': {
            fill: '#FFFFFF',
            magnet: true,
            type: 'Location',
            rx: 10,
            ry: 10,
            'stroke-width': 3,
            stroke: '#FFFFFF',
            'stroke-dasharray': '0,0'
        },
        image: {
            'xlink:href': 'file:///Users/hellspawn/Documents/Uniandes/Tesis/Repositorios/WebPicture-Java/co.edu.uniandes.picture.webpicture/WebContent/Editors/8e8745eb-bb31-423d-80f4-1ae5e15fba3d/Images/iconiconlocation.svg',
            'width': 56,
            'height': 87,
            'ref-x': 0.017857142857142856,
            'ref-y': 0.011494252873563218
        },
        '.name': {
            text: 'elementName',
            'ref-y': -10.0
        },
    }
});
var GRPH_675d8c96 = new joint.shapes.org.Member({
    position: {
        x: 100,
        y: 100
    },
    size: {
        width: 140,
        height: 60
    },
    attrs: {
        '.card': {
            fill: '#F1F1B5',
            magnet: true,
            type: 'BusinessInterface',
            rx: 10,
            ry: 10,
            'stroke-width': 2,
            stroke: '#000000',
            'stroke-dasharray': '0,0'
        },
        image: {
            'xlink:href': 'file:///Users/hellspawn/Documents/Uniandes/Tesis/Repositorios/WebPicture-Java/co.edu.uniandes.picture.webpicture/WebContent/Editors/8e8745eb-bb31-423d-80f4-1ae5e15fba3d/Images/iconiconInterfaceIcon.svg',
            'width': 25,
            'height': 16,
            'ref-x': 0.8142857142857143,
            'ref-y': 0.03333333333333333
        },
        '.name': {
            text: 'elementName',
            'ref-y': 0.5
        },
    }
});
var GRPH_63648ee9 = new joint.shapes.org.Member({
    position: {
        x: 100,
        y: 100
    },
    size: {
        width: 140,
        height: 60
    },
    attrs: {
        '.card': {
            fill: '#F1F1B5',
            magnet: true,
            type: 'BusinessRole',
            rx: 10,
            ry: 10,
            'stroke-width': 2,
            stroke: '#000000',
            'stroke-dasharray': '0,0'
        },
        image: {
            'xlink:href': 'file:///Users/hellspawn/Documents/Uniandes/Tesis/Repositorios/WebPicture-Java/co.edu.uniandes.picture.webpicture/WebContent/Editors/8e8745eb-bb31-423d-80f4-1ae5e15fba3d/Images/iconiconroleIcon.svg',
            'width': 16,
            'height': 16,
            'ref-x': 0.8785714285714286,
            'ref-y': 0.03333333333333333
        },
        '.name': {
            text: 'elementName',
            'ref-y': 0.5
        },
    }
});
var GRPH_2ed3b1f5 = new joint.shapes.org.Member({
    position: {
        x: 100,
        y: 100
    },
    size: {
        width: 140,
        height: 60
    },
    attrs: {
        '.card': {
            fill: '#F1F1B5',
            magnet: true,
            type: 'BusinessCollaboration',
            rx: 10,
            ry: 10,
            'stroke-width': 1,
            stroke: '#000000',
            'stroke-dasharray': '1,1'
        },
        image: {
            'xlink:href': 'file:///Users/hellspawn/Documents/Uniandes/Tesis/Repositorios/WebPicture-Java/co.edu.uniandes.picture.webpicture/WebContent/Editors/8e8745eb-bb31-423d-80f4-1ae5e15fba3d/Images/iconiconcollaboarationIconF.svg',
            'width': 24,
            'height': 16,
            'ref-x': 0.8142857142857143,
            'ref-y': 0.03333333333333333
        },
        '.name': {
            text: 'elementName',
            'ref-y': 0.5
        },
    }
});
var GRPH_741b3bc3 = new joint.shapes.org.Member({
    position: {
        x: 100,
        y: 100
    },
    size: {
        width: 140,
        height: 60
    },
    attrs: {
        '.card': {
            fill: '#F1F1B5',
            magnet: true,
            type: 'BusinessActor',
            rx: 10,
            ry: 10,
            'stroke-width': 2,
            stroke: '#000000',
            'stroke-dasharray': '0,0'
        },
        image: {
            'xlink:href': 'file:///Users/hellspawn/Documents/Uniandes/Tesis/Repositorios/WebPicture-Java/co.edu.uniandes.picture.webpicture/WebContent/Editors/8e8745eb-bb31-423d-80f4-1ae5e15fba3d/Images/iconiconActorIcon.svg',
            'width': 16,
            'height': 16,
            'ref-x': 0.8785714285714286,
            'ref-y': 0.03333333333333333
        },
        '.name': {
            text: 'elementName',
            'ref-y': 0.5
        },
    }
});
var GRPH_2a3591c5 = new joint.shapes.basic.Image({
    position: {
        x: 100,
        y: 100
    },
    size: {
        width: 70,
        height: 50
    },
    attrs: {
        text: {
            text: 'elementName',
            'ref-y': 0.5,
            'ref-x': 0.5,
        },
        image: {
            magnet: true,
            type: 'DataObject',
            opacity: 0.5,
            'xlink:href': 'file:///Users/hellspawn/Documents/Uniandes/Tesis/Repositorios/WebPicture-Java/co.edu.uniandes.picture.webpicture/WebContent/Editors/8e8745eb-bb31-423d-80f4-1ae5e15fba3d/Images/iconDataObject.svg',
            width: 50,
            height: 50,
        },
    },
});
var GRPH_34a75079 = new joint.shapes.basic.Rect({
    position: {
        x: 100,
        y: 100
    },
    size: {
        width: 92,
        height: 52
    },
    attrs: {
        text: {
            text: 'elementName',
            'ref-y': 0.5
        },
        rect: {
            fill: '#75EBEB',
            opacity: 0.5,
            magnet: true,
            type: 'ApplicationService',
            rx: 29,
            ry: 45,
            'stroke-width': 2,
            stroke: '#000000',
            'stroke-dasharray': '0,0'
        },
    }
});
var GRPH_346a361 = new joint.shapes.org.Member({
    position: {
        x: 100,
        y: 100
    },
    size: {
        width: 140,
        height: 60
    },
    attrs: {
        '.card': {
            fill: '#75EBEB',
            magnet: true,
            type: 'ApplicationFunction',
            rx: 10,
            ry: 10,
            'stroke-width': 1,
            stroke: '#000000',
            'stroke-dasharray': '1,1'
        },
        image: {
            'xlink:href': 'file:///Users/hellspawn/Documents/Uniandes/Tesis/Repositorios/WebPicture-Java/co.edu.uniandes.picture.webpicture/WebContent/Editors/8e8745eb-bb31-423d-80f4-1ae5e15fba3d/Images/iconiconfunctionIcon.svg',
            'width': 16,
            'height': 16,
            'ref-x': 0.8785714285714286,
            'ref-y': 0.03333333333333333
        },
        '.name': {
            text: 'elementName',
            'ref-y': 0.5
        },
    }
});
var GRPH_107ed6fc = new joint.shapes.org.Member({
    position: {
        x: 100,
        y: 100
    },
    size: {
        width: 140,
        height: 60
    },
    attrs: {
        '.card': {
            fill: '#75EBEB',
            magnet: true,
            type: 'ApplicationInteraction',
            rx: 10,
            ry: 10,
            'stroke-width': 1,
            stroke: '#000000',
            'stroke-dasharray': '1,1'
        },
        image: {
            'xlink:href': 'file:///Users/hellspawn/Documents/Uniandes/Tesis/Repositorios/WebPicture-Java/co.edu.uniandes.picture.webpicture/WebContent/Editors/8e8745eb-bb31-423d-80f4-1ae5e15fba3d/Images/iconiconInteractionIcon.svg',
            'width': 16,
            'height': 16,
            'ref-x': 0.8785714285714286,
            'ref-y': 0.03333333333333333
        },
        '.name': {
            text: 'elementName',
            'ref-y': 0.5
        },
    }
});
var GRPH_1643d68f = new joint.shapes.org.Member({
    position: {
        x: 100,
        y: 100
    },
    size: {
        width: 140,
        height: 60
    },
    attrs: {
        '.card': {
            fill: '#75EBEB',
            magnet: true,
            type: 'ApplicationInterface',
            rx: 10,
            ry: 10,
            'stroke-width': 2,
            stroke: '#000000',
            'stroke-dasharray': '0,0'
        },
        image: {
            'xlink:href': 'file:///Users/hellspawn/Documents/Uniandes/Tesis/Repositorios/WebPicture-Java/co.edu.uniandes.picture.webpicture/WebContent/Editors/8e8745eb-bb31-423d-80f4-1ae5e15fba3d/Images/iconiconInterfaceIcon.svg',
            'width': 25,
            'height': 16,
            'ref-x': 0.8142857142857143,
            'ref-y': 0.03333333333333333
        },
        '.name': {
            text: 'elementName',
            'ref-y': 0.5
        },
    }
});
var GRPH_186978a6 = new joint.shapes.org.Member({
    position: {
        x: 100,
        y: 100
    },
    size: {
        width: 100,
        height: 100
    },
    attrs: {
        '.card': {
            fill: '#75EBEB',
            magnet: true,
            type: 'ApplicationComponent',
            rx: 10,
            ry: 10,
            'stroke-width': 2,
            stroke: '#FFFFFF',
            'stroke-dasharray': '0,0'
        },
        image: {
            'xlink:href': 'file:///Users/hellspawn/Documents/Uniandes/Tesis/Repositorios/WebPicture-Java/co.edu.uniandes.picture.webpicture/WebContent/Editors/8e8745eb-bb31-423d-80f4-1ae5e15fba3d/Images/iconiconApplicationComponent.svg',
            'width': 99,
            'height': 99,
            'ref-x': 0.01,
            'ref-y': 0.01
        },
        '.name': {
            text: 'elementName',
            'ref-y': -10.0
        },
    }
});
var GRPH_631e06ab = new joint.shapes.org.Member({
    position: {
        x: 100,
        y: 100
    },
    size: {
        width: 140,
        height: 60
    },
    attrs: {
        '.card': {
            fill: '#75EBEB',
            magnet: true,
            type: 'ApplicationCollaboration',
            rx: 10,
            ry: 10,
            'stroke-width': 1,
            stroke: '#000000',
            'stroke-dasharray': '1,1'
        },
        image: {
            'xlink:href': 'file:///Users/hellspawn/Documents/Uniandes/Tesis/Repositorios/WebPicture-Java/co.edu.uniandes.picture.webpicture/WebContent/Editors/8e8745eb-bb31-423d-80f4-1ae5e15fba3d/Images/iconiconcollaboarationIconF.svg',
            'width': 24,
            'height': 16,
            'ref-x': 0.8214285714285714,
            'ref-y': 0.03333333333333333
        },
        '.name': {
            text: 'elementName',
            'ref-y': 0.5
        },
    }
});
var GRPH_3a320ade = new joint.shapes.org.Member({
    position: {
        x: 100,
        y: 100
    },
    size: {
        width: 140,
        height: 65
    },
    attrs: {
        '.card': {
            fill: '#74E874',
            magnet: true,
            type: 'Artifact',
            rx: 10,
            ry: 10,
            'stroke-width': 2,
            stroke: '#000000',
            'stroke-dasharray': '0,0'
        },
        image: {
            'xlink:href': 'file:///Users/hellspawn/Documents/Uniandes/Tesis/Repositorios/WebPicture-Java/co.edu.uniandes.picture.webpicture/WebContent/Editors/8e8745eb-bb31-423d-80f4-1ae5e15fba3d/Images/iconiconArtifactIcon.svg',
            'width': 16,
            'height': 16,
            'ref-x': 0.8785714285714286,
            'ref-y': 0.03076923076923077
        },
        '.name': {
            text: 'elementName',
            'ref-y': 0.5
        },
    }
});
var GRPH_24faea88 = new joint.shapes.basic.Rect({
    position: {
        x: 100,
        y: 100
    },
    size: {
        width: 140,
        height: 65
    },
    attrs: {
        text: {
            text: 'elementName',
            'ref-y': 0.5
        },
        rect: {
            fill: '#74E874',
            opacity: 1.0,
            magnet: true,
            type: 'InfrastructureService',
            rx: 29,
            ry: 45,
            'stroke-width': 2,
            stroke: '#000000',
            'stroke-dasharray': '0,0'
        },
    }
});
var GRPH_3185fa6b = new joint.shapes.org.Member({
    position: {
        x: 100,
        y: 100
    },
    size: {
        width: 140,
        height: 65
    },
    attrs: {
        '.card': {
            fill: '#74E874',
            magnet: true,
            type: 'InfrastructureInterface',
            rx: 10,
            ry: 10,
            'stroke-width': 2,
            stroke: '#000000',
            'stroke-dasharray': '0,0'
        },
        image: {
            'xlink:href': 'file:///Users/hellspawn/Documents/Uniandes/Tesis/Repositorios/WebPicture-Java/co.edu.uniandes.picture.webpicture/WebContent/Editors/8e8745eb-bb31-423d-80f4-1ae5e15fba3d/Images/iconiconinterfaceIconSmall.svg',
            'width': 16,
            'height': 16,
            'ref-x': 0.8785714285714286,
            'ref-y': 0.03076923076923077
        },
        '.name': {
            text: 'elementName',
            'ref-y': 0.5
        },
    }
});
var GRPH_68d6972f = new joint.shapes.org.Member({
    position: {
        x: 100,
        y: 100
    },
    size: {
        width: 140,
        height: 65
    },
    attrs: {
        '.card': {
            fill: '#74E874',
            magnet: true,
            type: 'Node',
            rx: 10,
            ry: 10,
            'stroke-width': 2,
            stroke: '#000000',
            'stroke-dasharray': '0,0'
        },
        image: {
            'xlink:href': 'file:///Users/hellspawn/Documents/Uniandes/Tesis/Repositorios/WebPicture-Java/co.edu.uniandes.picture.webpicture/WebContent/Editors/8e8745eb-bb31-423d-80f4-1ae5e15fba3d/Images/iconiconNodeIcon.svg',
            'width': 16,
            'height': 16,
            'ref-x': 0.8785714285714286,
            'ref-y': 0.03076923076923077
        },
        '.name': {
            text: 'elementName',
            'ref-y': 0.5
        },
    }
});
var GRPH_7651218e = new joint.shapes.org.Member({
    position: {
        x: 100,
        y: 100
    },
    size: {
        width: 140,
        height: 65
    },
    attrs: {
        '.card': {
            fill: '#74E874',
            magnet: true,
            type: 'SystemSoftware',
            rx: 10,
            ry: 10,
            'stroke-width': 2,
            stroke: '#000000',
            'stroke-dasharray': '0,0'
        },
        image: {
            'xlink:href': 'file:///Users/hellspawn/Documents/Uniandes/Tesis/Repositorios/WebPicture-Java/co.edu.uniandes.picture.webpicture/WebContent/Editors/8e8745eb-bb31-423d-80f4-1ae5e15fba3d/Images/iconiconSystemSWIcon.svg',
            'width': 16,
            'height': 16,
            'ref-x': 0.8785714285714286,
            'ref-y': 0.03076923076923077
        },
        '.name': {
            text: 'elementName',
            'ref-y': 0.5
        },
    }
});
var GRPH_45be7cd5 = new joint.shapes.org.Member({
    position: {
        x: 100,
        y: 100
    },
    size: {
        width: 140,
        height: 65
    },
    attrs: {
        '.card': {
            fill: '#74E874',
            magnet: true,
            type: 'Device',
            rx: 10,
            ry: 10,
            'stroke-width': 2,
            stroke: '#000000',
            'stroke-dasharray': '0,0'
        },
        image: {
            'xlink:href': 'file:///Users/hellspawn/Documents/Uniandes/Tesis/Repositorios/WebPicture-Java/co.edu.uniandes.picture.webpicture/WebContent/Editors/8e8745eb-bb31-423d-80f4-1ae5e15fba3d/Images/iconicondeviceIIcon.svg',
            'width': 16,
            'height': 16,
            'ref-x': 0.8785714285714286,
            'ref-y': 0.03076923076923077
        },
        '.name': {
            text: 'elementName',
            'ref-y': 0.5
        },
    }
});
var GRPH_5b58ed3c = new joint.shapes.org.Member({
    position: {
        x: 100,
        y: 100
    },
    size: {
        width: 70,
        height: 50
    },
    attrs: {
        '.card': {
            fill: '#74E874',
            magnet: true,
            type: 'CommunicationPath',
            rx: 10,
            ry: 10,
            'stroke-width': 2,
            stroke: '#000000',
            'stroke-dasharray': '0,0'
        },
        image: {
            'xlink:href': 'file:///Users/hellspawn/Documents/Uniandes/Tesis/Repositorios/WebPicture-Java/co.edu.uniandes.picture.webpicture/WebContent/Editors/8e8745eb-bb31-423d-80f4-1ae5e15fba3d/Images/iconiconComunicationPath.svg',
            'width': 70,
            'height': 50,
            'ref-x': 0.014285714285714285,
            'ref-y': 0.02
        },
        '.name': {
            text: 'elementName',
            'ref-y': 0.5
        },
    }
});
var GRPH_6d366c9b = new joint.shapes.org.Member({
    position: {
        x: 100,
        y: 100
    },
    size: {
        width: 140,
        height: 65
    },
    attrs: {
        '.card': {
            fill: '#74E874',
            magnet: true,
            type: 'Network',
            rx: 10,
            ry: 10,
            'stroke-width': 2,
            stroke: '#000000',
            'stroke-dasharray': '0,0'
        },
        image: {
            'xlink:href': 'file:///Users/hellspawn/Documents/Uniandes/Tesis/Repositorios/WebPicture-Java/co.edu.uniandes.picture.webpicture/WebContent/Editors/8e8745eb-bb31-423d-80f4-1ae5e15fba3d/Images/iconiconNetworkIcon.svg',
            'width': 16,
            'height': 16,
            'ref-x': 0.8785714285714286,
            'ref-y': 0.03076923076923077
        },
        '.name': {
            text: 'elementName',
            'ref-y': 0.5
        },
    }
});
var GRPH_24fb6a80 = new joint.shapes.org.Member({
    position: {
        x: 100,
        y: 100
    },
    size: {
        width: 140,
        height: 60
    },
    attrs: {
        '.card': {
            fill: '#FECCFF',
            magnet: true,
            type: 'Stakeholder',
            rx: 10,
            ry: 10,
            'stroke-width': 2,
            stroke: '#000000',
            'stroke-dasharray': '0,0'
        },
        image: {
            'xlink:href': 'file:///Users/hellspawn/Documents/Uniandes/Tesis/Repositorios/WebPicture-Java/co.edu.uniandes.picture.webpicture/WebContent/Editors/8e8745eb-bb31-423d-80f4-1ae5e15fba3d/Images/iconiconroleIcon.svg',
            'width': 16,
            'height': 16,
            'ref-x': 0.8785714285714286,
            'ref-y': 0.03333333333333333
        },
        '.name': {
            text: 'elementName',
            'ref-y': 0.5
        },
    }
});
var GRPH_48c35007 = new joint.shapes.org.Member({
    position: {
        x: 100,
        y: 100
    },
    size: {
        width: 140,
        height: 60
    },
    attrs: {
        '.card': {
            fill: '#FECCFF',
            magnet: true,
            type: 'Driver',
            rx: 10,
            ry: 10,
            'stroke-width': 2,
            stroke: '#000000',
            'stroke-dasharray': '0,0'
        },
        image: {
            'xlink:href': 'file:///Users/hellspawn/Documents/Uniandes/Tesis/Repositorios/WebPicture-Java/co.edu.uniandes.picture.webpicture/WebContent/Editors/8e8745eb-bb31-423d-80f4-1ae5e15fba3d/Images/driverIcon.svg',
            'width': 16,
            'height': 16,
            'ref-x': 0.8785714285714286,
            'ref-y': 0.03333333333333333
        },
        '.name': {
            text: 'elementName',
            'ref-y': 0.5
        },
    }
});
var GRPH_72a85671 = new joint.shapes.org.Member({
    position: {
        x: 100,
        y: 100
    },
    size: {
        width: 140,
        height: 60
    },
    attrs: {
        '.card': {
            fill: '#FECCFF',
            magnet: true,
            type: 'Assessment',
            rx: 10,
            ry: 10,
            'stroke-width': 2,
            stroke: '#000000',
            'stroke-dasharray': '0,0'
        },
        image: {
            'xlink:href': 'file:///Users/hellspawn/Documents/Uniandes/Tesis/Repositorios/WebPicture-Java/co.edu.uniandes.picture.webpicture/WebContent/Editors/8e8745eb-bb31-423d-80f4-1ae5e15fba3d/Images/AssessmentIcon.svg',
            'width': 16,
            'height': 16,
            'ref-x': 0.8785714285714286,
            'ref-y': 0.03333333333333333
        },
        '.name': {
            text: 'elementName',
            'ref-y': 0.5
        },
    }
});
var GRPH_6722db6e = new joint.shapes.org.Member({
    position: {
        x: 100,
        y: 100
    },
    size: {
        width: 140,
        height: 60
    },
    attrs: {
        '.card': {
            fill: '#CCCCFE',
            magnet: true,
            type: 'Goal',
            rx: 10,
            ry: 10,
            'stroke-width': 2,
            stroke: '#000000',
            'stroke-dasharray': '0,0'
        },
        image: {
            'xlink:href': 'file:///Users/hellspawn/Documents/Uniandes/Tesis/Repositorios/WebPicture-Java/co.edu.uniandes.picture.webpicture/WebContent/Editors/8e8745eb-bb31-423d-80f4-1ae5e15fba3d/Images/GoalIcon.svg',
            'width': 16,
            'height': 16,
            'ref-x': 0.8785714285714286,
            'ref-y': 0.03333333333333333
        },
        '.name': {
            text: 'elementName',
            'ref-y': 0.5
        },
    }
});
var GRPH_18f20260 = new joint.shapes.org.Member({
    position: {
        x: 100,
        y: 100
    },
    size: {
        width: 140,
        height: 60
    },
    attrs: {
        '.card': {
            fill: '#CCCCFE',
            magnet: true,
            type: 'Requirement',
            rx: 10,
            ry: 10,
            'stroke-width': 2,
            stroke: '#000000',
            'stroke-dasharray': '0,0'
        },
        image: {
            'xlink:href': 'file:///Users/hellspawn/Documents/Uniandes/Tesis/Repositorios/WebPicture-Java/co.edu.uniandes.picture.webpicture/WebContent/Editors/8e8745eb-bb31-423d-80f4-1ae5e15fba3d/Images/RequirementIcon.svg',
            'width': 16,
            'height': 16,
            'ref-x': 0.8785714285714286,
            'ref-y': 0.03333333333333333
        },
        '.name': {
            text: 'elementName',
            'ref-y': 0.5
        },
    }
});
var GRPH_4ae33a11 = new joint.shapes.org.Member({
    position: {
        x: 100,
        y: 100
    },
    size: {
        width: 140,
        height: 60
    },
    attrs: {
        '.card': {
            fill: '#CCCCFE',
            magnet: true,
            type: 'Constraint',
            rx: 10,
            ry: 10,
            'stroke-width': 2,
            stroke: '#000000',
            'stroke-dasharray': '0,0'
        },
        image: {
            'xlink:href': 'file:///Users/hellspawn/Documents/Uniandes/Tesis/Repositorios/WebPicture-Java/co.edu.uniandes.picture.webpicture/WebContent/Editors/8e8745eb-bb31-423d-80f4-1ae5e15fba3d/Images/ConstraintIcon.svg',
            'width': 16,
            'height': 16,
            'ref-x': 0.8785714285714286,
            'ref-y': 0.03333333333333333
        },
        '.name': {
            text: 'elementName',
            'ref-y': 0.5
        },
    }
});
var GRPH_7a48e6e2 = new joint.shapes.org.Member({
    position: {
        x: 100,
        y: 100
    },
    size: {
        width: 140,
        height: 60
    },
    attrs: {
        '.card': {
            fill: '#CCCCFE',
            magnet: true,
            type: 'Principle',
            rx: 10,
            ry: 10,
            'stroke-width': 2,
            stroke: '#000000',
            'stroke-dasharray': '0,0'
        },
        image: {
            'xlink:href': 'file:///Users/hellspawn/Documents/Uniandes/Tesis/Repositorios/WebPicture-Java/co.edu.uniandes.picture.webpicture/WebContent/Editors/8e8745eb-bb31-423d-80f4-1ae5e15fba3d/Images/PrincipleIcon.svg',
            'width': 16,
            'height': 16,
            'ref-x': 0.8785714285714286,
            'ref-y': 0.03333333333333333
        },
        '.name': {
            text: 'elementName',
            'ref-y': 0.5
        },
    }
});
var GRPH_b40bb6e = new joint.shapes.basic.Rect({
    position: {
        x: 100,
        y: 100
    },
    size: {
        width: 140,
        height: 60
    },
    attrs: {
        text: {
            text: 'elementName',
            'ref-y': 0.5
        },
        rect: {
            fill: '#FFDEE2',
            opacity: 0.5,
            magnet: true,
            type: 'WorkPackage',
            rx: 10,
            ry: 10,
            'stroke-width': 2,
            stroke: '#000000',
            'stroke-dasharray': '0,0'
        },
    }
});
var GRPH_3a94964 = new joint.shapes.org.Member({
    position: {
        x: 100,
        y: 100
    },
    size: {
        width: 65,
        height: 65
    },
    attrs: {
        '.card': {
            fill: '#FFDEE2',
            magnet: true,
            type: 'Deliverable',
            rx: 0,
            ry: 0,
            'stroke-width': 3,
            stroke: '#FFFFFF',
            'stroke-dasharray': '0,0'
        },
        image: {
            'xlink:href': 'file:///Users/hellspawn/Documents/Uniandes/Tesis/Repositorios/WebPicture-Java/co.edu.uniandes.picture.webpicture/WebContent/Editors/8e8745eb-bb31-423d-80f4-1ae5e15fba3d/Images/iconiconrepresentation.svg',
            'width': 64,
            'height': 64,
            'ref-x': 0.015384615384615385,
            'ref-y': 0.015384615384615385
        },
        '.name': {
            text: 'elementName',
            'ref-y': -10.0
        },
    }
});
var GRPH_5049d8b2 = new joint.shapes.org.Member({
    position: {
        x: 100,
        y: 100
    },
    size: {
        width: 140,
        height: 60
    },
    attrs: {
        '.card': {
            fill: '#CCCCFE',
            magnet: true,
            type: 'Plateau',
            rx: 10,
            ry: 10,
            'stroke-width': 2,
            stroke: '#000000',
            'stroke-dasharray': '0,0'
        },
        image: {
            'xlink:href': 'file:///Users/hellspawn/Documents/Uniandes/Tesis/Repositorios/WebPicture-Java/co.edu.uniandes.picture.webpicture/WebContent/Editors/8e8745eb-bb31-423d-80f4-1ae5e15fba3d/Images/PlateauIcon.svg',
            'width': 16,
            'height': 16,
            'ref-x': 0.8785714285714286,
            'ref-y': 0.03333333333333333
        },
        '.name': {
            text: 'elementName',
            'ref-y': 0.5
        },
    }
});
var GRPH_6d0b5baf = new joint.shapes.org.Member({
    position: {
        x: 100,
        y: 100
    },
    size: {
        width: 140,
        height: 60
    },
    attrs: {
        '.card': {
            fill: '#CCCCFE',
            magnet: true,
            type: 'Gap',
            rx: 10,
            ry: 10,
            'stroke-width': 2,
            stroke: '#000000',
            'stroke-dasharray': '0,0'
        },
        image: {
            'xlink:href': 'file:///Users/hellspawn/Documents/Uniandes/Tesis/Repositorios/WebPicture-Java/co.edu.uniandes.picture.webpicture/WebContent/Editors/8e8745eb-bb31-423d-80f4-1ae5e15fba3d/Images/.svg',
            'width': 16,
            'height': 16,
            'ref-x': 0.8785714285714286,
            'ref-y': 0.03333333333333333
        },
        '.name': {
            text: 'elementName',
            'ref-y': 0.5
        },
    }
});
PAPER_64beebb7.on('cell:pointerdown', function (cell, evt) {
    elementOnDragStart(cell, evt);
});
PAPER_bcec031.on('cell:pointerdown', function (cell, evt) {
    elementOnDragStart(cell, evt);
});
PAPER_569bf9eb.on('cell:pointerdown', function (cell, evt) {
    elementOnDragStart(cell, evt);
});
PAPER_592e843a.on('cell:pointerdown', function (cell, evt) {
    elementOnDragStart(cell, evt);
});
PAPER_6256ac4f.on('cell:pointerdown', function (cell, evt) {
    elementOnDragStart(cell, evt);
});
PAPER_649725e3.on('cell:pointerdown', function (cell, evt) {
    elementOnDragStart(cell, evt);
});

function elementOnDragStart(cellView, event) {
    $('.paper-drag').show();
    $('tools').addClass('dragging');
    flyPaper.$el.addClass('dragging');
    $(document.body).append(flyPaper.$el);
    var elType = cellView.model.attr(getElementInstance(cellView.model));
    if (elType == 'Group') {
        elementClone = GRPH_7c7d3c46.clone();
        cloneBBox = GRPH_7c7d3c46.getBBox();
    }
    if (elType == 'Product') {
        elementClone = GRPH_482d776b.clone();
        cloneBBox = GRPH_482d776b.getBBox();
    }
    if (elType == 'Contract') {
        elementClone = GRPH_297ea53a.clone();
        cloneBBox = GRPH_297ea53a.getBBox();
    }
    if (elType == 'BusinessObject') {
        elementClone = GRPH_acb0951.clone();
        cloneBBox = GRPH_acb0951.getBBox();
    }
    if (elType == 'Meaning') {
        elementClone = GRPH_4052274f.clone();
        cloneBBox = GRPH_4052274f.getBBox();
    }
    if (elType == 'Representation') {
        elementClone = GRPH_132ddbab.clone();
        cloneBBox = GRPH_132ddbab.getBBox();
    }
    if (elType == 'BusinessService') {
        elementClone = GRPH_5bf22f18.clone();
        cloneBBox = GRPH_5bf22f18.getBBox();
    }
    if (elType == 'BusinessProcess') {
        elementClone = GRPH_267f474e.clone();
        cloneBBox = GRPH_267f474e.getBBox();
    }
    if (elType == 'BusinessFunction') {
        elementClone = GRPH_7a7471ce.clone();
        cloneBBox = GRPH_7a7471ce.getBBox();
    }
    if (elType == 'BusinessInteraction') {
        elementClone = GRPH_28276e50.clone();
        cloneBBox = GRPH_28276e50.getBBox();
    }
    if (elType == 'BusinessEvent') {
        elementClone = GRPH_62e70ea3.clone();
        cloneBBox = GRPH_62e70ea3.getBBox();
    }
    if (elType == 'Location') {
        elementClone = GRPH_3efe7086.clone();
        cloneBBox = GRPH_3efe7086.getBBox();
    }
    if (elType == 'BusinessInterface') {
        elementClone = GRPH_675d8c96.clone();
        cloneBBox = GRPH_675d8c96.getBBox();
    }
    if (elType == 'BusinessRole') {
        elementClone = GRPH_63648ee9.clone();
        cloneBBox = GRPH_63648ee9.getBBox();
    }
    if (elType == 'BusinessCollaboration') {
        elementClone = GRPH_2ed3b1f5.clone();
        cloneBBox = GRPH_2ed3b1f5.getBBox();
    }
    if (elType == 'BusinessActor') {
        elementClone = GRPH_741b3bc3.clone();
        cloneBBox = GRPH_741b3bc3.getBBox();
    }
    if (elType == 'DataObject') {
        elementClone = GRPH_2a3591c5.clone();
        cloneBBox = GRPH_2a3591c5.getBBox();
    }
    if (elType == 'ApplicationService') {
        elementClone = GRPH_34a75079.clone();
        cloneBBox = GRPH_34a75079.getBBox();
    }
    if (elType == 'ApplicationFunction') {
        elementClone = GRPH_346a361.clone();
        cloneBBox = GRPH_346a361.getBBox();
    }
    if (elType == 'ApplicationInteraction') {
        elementClone = GRPH_107ed6fc.clone();
        cloneBBox = GRPH_107ed6fc.getBBox();
    }
    if (elType == 'ApplicationInterface') {
        elementClone = GRPH_1643d68f.clone();
        cloneBBox = GRPH_1643d68f.getBBox();
    }
    if (elType == 'ApplicationComponent') {
        elementClone = GRPH_186978a6.clone();
        cloneBBox = GRPH_186978a6.getBBox();
    }
    if (elType == 'ApplicationCollaboration') {
        elementClone = GRPH_631e06ab.clone();
        cloneBBox = GRPH_631e06ab.getBBox();
    }
    if (elType == 'Artifact') {
        elementClone = GRPH_3a320ade.clone();
        cloneBBox = GRPH_3a320ade.getBBox();
    }
    if (elType == 'InfrastructureService') {
        elementClone = GRPH_24faea88.clone();
        cloneBBox = GRPH_24faea88.getBBox();
    }
    if (elType == 'InfrastructureInterface') {
        elementClone = GRPH_3185fa6b.clone();
        cloneBBox = GRPH_3185fa6b.getBBox();
    }
    if (elType == 'Node') {
        elementClone = GRPH_68d6972f.clone();
        cloneBBox = GRPH_68d6972f.getBBox();
    }
    if (elType == 'SystemSoftware') {
        elementClone = GRPH_7651218e.clone();
        cloneBBox = GRPH_7651218e.getBBox();
    }
    if (elType == 'Device') {
        elementClone = GRPH_45be7cd5.clone();
        cloneBBox = GRPH_45be7cd5.getBBox();
    }
    if (elType == 'CommunicationPath') {
        elementClone = GRPH_5b58ed3c.clone();
        cloneBBox = GRPH_5b58ed3c.getBBox();
    }
    if (elType == 'Network') {
        elementClone = GRPH_6d366c9b.clone();
        cloneBBox = GRPH_6d366c9b.getBBox();
    }
    if (elType == 'Stakeholder') {
        elementClone = GRPH_24fb6a80.clone();
        cloneBBox = GRPH_24fb6a80.getBBox();
    }
    if (elType == 'Driver') {
        elementClone = GRPH_48c35007.clone();
        cloneBBox = GRPH_48c35007.getBBox();
    }
    if (elType == 'Assessment') {
        elementClone = GRPH_72a85671.clone();
        cloneBBox = GRPH_72a85671.getBBox();
    }
    if (elType == 'Goal') {
        elementClone = GRPH_6722db6e.clone();
        cloneBBox = GRPH_6722db6e.getBBox();
    }
    if (elType == 'Requirement') {
        elementClone = GRPH_18f20260.clone();
        cloneBBox = GRPH_18f20260.getBBox();
    }
    if (elType == 'Constraint') {
        elementClone = GRPH_4ae33a11.clone();
        cloneBBox = GRPH_4ae33a11.getBBox();
    }
    if (elType == 'Principle') {
        elementClone = GRPH_7a48e6e2.clone();
        cloneBBox = GRPH_7a48e6e2.getBBox();
    }
    if (elType == 'WorkPackage') {
        elementClone = GRPH_b40bb6e.clone();
        cloneBBox = GRPH_b40bb6e.getBBox();
    }
    if (elType == 'Deliverable') {
        elementClone = GRPH_3a94964.clone();
        cloneBBox = GRPH_3a94964.getBBox();
    }
    if (elType == 'Plateau') {
        elementClone = GRPH_5049d8b2.clone();
        cloneBBox = GRPH_5049d8b2.getBBox();
    }
    if (elType == 'Gap') {
        elementClone = GRPH_6d0b5baf.clone();
        cloneBBox = GRPH_6d0b5baf.getBBox();
    }
    var padding = 10;
    var shift = g.point(cloneBBox.x - elementClone.get('position').x, cloneBBox.y - elementClone.get('position').y);
    elementClone.set('position', {
        x: -shift.x + padding,
        y: -shift.y + padding
    });
    flyGraph.addCell(elementClone);
    flyPaper.setDimensions(cloneBBox.width + 2 * padding, cloneBBox.height + 2 * padding);
    var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
    flyPaper.$el.offset({
        left: event.clientX - cloneBBox.width / 2,
        top: event.clientY + scrollTop - cloneBBox.height / 2
    });
}

function replaceLink(oldLink, src, trg) {}
paper.on('cell:pointerup', function (cellView, evt, x, y) {
    if (cellView.model instanceof joint.dia.Link) {
        updateDiagram();
    } else {
        var cell = cellView.model;
        var cellViewsBelow = paper.findViewsFromPoint(cell.getBBox().center());
        if (cellViewsBelow.length) {
            var cellViewBelow = _.find(cellViewsBelow, function (c) {
                return c.model.id !== cell.id
            });
            if (cellViewBelow && cellViewBelow.model.get('parent') !== cell.id) {
                var father = graph.getCell(cellViewBelow.model.id);
                var son = graph.getCell(cell.id);
                var child = son.attr(getElementInstance(son));
                var parent = father.attr(getElementInstance(father));
                var VAL_4a183d02 = parent == 'ArchimateElement' && child == 'ArchimateElement';
                var VAL_5d05ef57 = parent == 'ArchimateElement' && child == 'Product';
                var VAL_213deac2 = parent == 'ArchimateElement' && child == 'BusinessObject';
                var VAL_23eee4b8 = parent == 'ArchimateElement' && child == 'Meaning';
                var VAL_28952dea = parent == 'ArchimateElement' && child == 'Representation';
                var VAL_5a9800f8 = parent == 'ArchimateElement' && child == 'BusinessService';
                var VAL_143d9a93 = parent == 'ArchimateElement' && child == 'BusinessProcess';
                var VAL_40226788 = parent == 'ArchimateElement' && child == 'BusinessFunction';
                var VAL_4159e81b = parent == 'ArchimateElement' && child == 'BusinessInteraction';
                var VAL_5b5caf08 = parent == 'ArchimateElement' && child == 'BusinessEvent';
                var VAL_23cd4ff2 = parent == 'ArchimateElement' && child == 'Location';
                var VAL_70807224 = parent == 'ArchimateElement' && child == 'BusinessInterface';
                var VAL_7e97551f = parent == 'ArchimateElement' && child == 'BusinessRole';
                var VAL_400d912a = parent == 'ArchimateElement' && child == 'BusinessCollaboration';
                var VAL_9f6e406 = parent == 'ArchimateElement' && child == 'BusinessActor';
                var VAL_7a94b64e = parent == 'ArchimateElement' && child == 'DataObject';
                var VAL_3e6f3bae = parent == 'ArchimateElement' && child == 'ApplicationService';
                var VAL_12477988 = parent == 'ArchimateElement' && child == 'ApplicationFunction';
                var VAL_2caf6912 = parent == 'ArchimateElement' && child == 'ApplicationInteraction';
                var VAL_73d69c0f = parent == 'ArchimateElement' && child == 'ApplicationInterface';
                var VAL_34237b90 = parent == 'ArchimateElement' && child == 'ApplicationComponent';
                var VAL_1d01dfa5 = parent == 'ArchimateElement' && child == 'ApplicationCollaboration';
                var VAL_4a31c2ee = parent == 'ArchimateElement' && child == 'Artifact';
                var VAL_d400943 = parent == 'ArchimateElement' && child == 'InfrastructureService';
                var VAL_22101c80 = parent == 'ArchimateElement' && child == 'InfrastructureInterface';
                var VAL_31ff1390 = parent == 'ArchimateElement' && child == 'Node';
                var VAL_759d81f3 = parent == 'ArchimateElement' && child == 'SystemSoftware';
                var VAL_781a9412 = parent == 'ArchimateElement' && child == 'Device';
                var VAL_5a4c638d = parent == 'ArchimateElement' && child == 'CommunicationPath';
                var VAL_13e698c7 = parent == 'ArchimateElement' && child == 'Network';
                var VAL_aed0151 = parent == 'ArchimateElement' && child == 'Stakeholder';
                var VAL_267bbe1a = parent == 'ArchimateElement' && child == 'Driver';
                var VAL_1f12e153 = parent == 'ArchimateElement' && child == 'Assessment';
                var VAL_389562d6 = parent == 'ArchimateElement' && child == 'Goal';
                var VAL_5a101b1c = parent == 'ArchimateElement' && child == 'Requirement';
                var VAL_2160e52a = parent == 'ArchimateElement' && child == 'Constraint';
                var VAL_29f0802c = parent == 'ArchimateElement' && child == 'Principle';
                var VAL_3a60c416 = parent == 'ArchimateElement' && child == 'WorkPackage';
                var VAL_60f2e0bd = parent == 'ArchimateElement' && child == 'Deliverable';
                var VAL_469d003c = parent == 'ArchimateElement' && child == 'Plateau';
                var VAL_6b410923 = parent == 'ArchimateElement' && child == 'Gap';
                var VAL_57bd2029 = parent == 'Group' && child == 'ArchimateElement';
                var VAL_203dd56b = parent == 'Group' && child == 'Product';
                var VAL_e8fadb0 = parent == 'Group' && child == 'BusinessObject';
                var VAL_6d64b553 = parent == 'Group' && child == 'Meaning';
                var VAL_53667cbe = parent == 'Group' && child == 'Representation';
                var VAL_1d3e6d34 = parent == 'Group' && child == 'BusinessService';
                var VAL_6eafb10e = parent == 'Group' && child == 'BusinessProcess';
                var VAL_26a94fa5 = parent == 'Group' && child == 'BusinessFunction';
                var VAL_464a4442 = parent == 'Group' && child == 'BusinessInteraction';
                var VAL_2873d672 = parent == 'Group' && child == 'BusinessEvent';
                var VAL_3bc735b3 = parent == 'Group' && child == 'Location';
                var VAL_577f9109 = parent == 'Group' && child == 'BusinessInterface';
                var VAL_4303b7f0 = parent == 'Group' && child == 'BusinessRole';
                var VAL_757529a4 = parent == 'Group' && child == 'BusinessCollaboration';
                var VAL_779de014 = parent == 'Group' && child == 'BusinessActor';
                var VAL_5c41d037 = parent == 'Group' && child == 'DataObject';
                var VAL_2234078 = parent == 'Group' && child == 'ApplicationService';
                var VAL_5ec77191 = parent == 'Group' && child == 'ApplicationFunction';
                var VAL_4642b71d = parent == 'Group' && child == 'ApplicationInteraction';
                var VAL_1450078a = parent == 'Group' && child == 'ApplicationInterface';
                var VAL_c68a5f8 = parent == 'Group' && child == 'ApplicationComponent';
                var VAL_69c6161d = parent == 'Group' && child == 'ApplicationCollaboration';
                var VAL_3aefae67 = parent == 'Group' && child == 'Artifact';
                var VAL_2e1792e7 = parent == 'Group' && child == 'InfrastructureService';
                var VAL_6719a5b8 = parent == 'Group' && child == 'InfrastructureInterface';
                var VAL_3eb631b8 = parent == 'Group' && child == 'Node';
                var VAL_796d3c9f = parent == 'Group' && child == 'SystemSoftware';
                var VAL_6bff19ff = parent == 'Group' && child == 'Device';
                var VAL_41e1455d = parent == 'Group' && child == 'CommunicationPath';
                var VAL_4e558728 = parent == 'Group' && child == 'Network';
                var VAL_5eccd3b9 = parent == 'Group' && child == 'Stakeholder';
                var VAL_4d6f197e = parent == 'Group' && child == 'Driver';
                var VAL_6ef7623 = parent == 'Group' && child == 'Assessment';
                var VAL_64e1dd11 = parent == 'Group' && child == 'Goal';
                var VAL_5c089b2f = parent == 'Group' && child == 'Requirement';
                var VAL_6999cd39 = parent == 'Group' && child == 'Constraint';
                var VAL_14bae047 = parent == 'Group' && child == 'Principle';
                var VAL_7ed9ae94 = parent == 'Group' && child == 'WorkPackage';
                var VAL_66908383 = parent == 'Group' && child == 'Deliverable';
                var VAL_41477a6d = parent == 'Group' && child == 'Plateau';
                var VAL_2bc12da = parent == 'Group' && child == 'Gap';
                var VAL_3122b117 = parent == 'Product' && child == 'ArchimateElement';
                var VAL_534ca02b = parent == 'Product' && child == 'Product';
                var VAL_29a23c3d = parent == 'Product' && child == 'BusinessObject';
                var VAL_4b6ac111 = parent == 'Product' && child == 'Meaning';
                var VAL_6fe46b62 = parent == 'Product' && child == 'Representation';
                var VAL_591fd34d = parent == 'Product' && child == 'BusinessService';
                var VAL_61e45f87 = parent == 'Product' && child == 'BusinessProcess';
                var VAL_7c9b78e3 = parent == 'Product' && child == 'BusinessFunction';
                var VAL_3068b369 = parent == 'Product' && child == 'BusinessInteraction';
                var VAL_17ca8b92 = parent == 'Product' && child == 'BusinessEvent';
                var VAL_5491f68b = parent == 'Product' && child == 'Location';
                var VAL_736ac09a = parent == 'Product' && child == 'BusinessInterface';
                var VAL_6ecd665 = parent == 'Product' && child == 'BusinessRole';
                var VAL_45394b31 = parent == 'Product' && child == 'BusinessCollaboration';
                var VAL_1ec7d8b3 = parent == 'Product' && child == 'BusinessActor';
                var VAL_3b0ca5e1 = parent == 'Product' && child == 'DataObject';
                var VAL_5bb3131b = parent == 'Product' && child == 'ApplicationService';
                var VAL_54dcbb9f = parent == 'Product' && child == 'ApplicationFunction';
                var VAL_74fef3f7 = parent == 'Product' && child == 'ApplicationInteraction';
                var VAL_2a037324 = parent == 'Product' && child == 'ApplicationInterface';
                var VAL_69eb86b4 = parent == 'Product' && child == 'ApplicationComponent';
                var VAL_585ac855 = parent == 'Product' && child == 'ApplicationCollaboration';
                var VAL_5bb8f9e2 = parent == 'Product' && child == 'Artifact';
                var VAL_6a933be2 = parent == 'Product' && child == 'InfrastructureService';
                var VAL_5f78de22 = parent == 'Product' && child == 'InfrastructureInterface';
                var VAL_516ebdf8 = parent == 'Product' && child == 'Node';
                var VAL_4d8539de = parent == 'Product' && child == 'SystemSoftware';
                var VAL_3eba57a7 = parent == 'Product' && child == 'Device';
                var VAL_272a179c = parent == 'Product' && child == 'CommunicationPath';
                var VAL_30feffc = parent == 'Product' && child == 'Network';
                var VAL_67207d8a = parent == 'Product' && child == 'Stakeholder';
                var VAL_bcb09a6 = parent == 'Product' && child == 'Driver';
                var VAL_7c2a69b4 = parent == 'Product' && child == 'Assessment';
                var VAL_a619c2 = parent == 'Product' && child == 'Goal';
                var VAL_648ee871 = parent == 'Product' && child == 'Requirement';
                var VAL_375b5b7f = parent == 'Product' && child == 'Constraint';
                var VAL_1813f3e9 = parent == 'Product' && child == 'Principle';
                var VAL_28cb9120 = parent == 'Product' && child == 'WorkPackage';
                var VAL_3b152928 = parent == 'Product' && child == 'Deliverable';
                var VAL_56781d96 = parent == 'Product' && child == 'Plateau';
                var VAL_5173200b = parent == 'Product' && child == 'Gap';
                var VAL_25c5e994 = parent == 'Contract' && child == 'ArchimateElement';
                var VAL_378bd86d = parent == 'Contract' && child == 'Product';
                var VAL_2189e7a7 = parent == 'Contract' && child == 'BusinessObject';
                var VAL_69b2f8e5 = parent == 'Contract' && child == 'Meaning';
                var VAL_6331250e = parent == 'Contract' && child == 'Representation';
                var VAL_a10c1b5 = parent == 'Contract' && child == 'BusinessService';
                var VAL_644abb8f = parent == 'Contract' && child == 'BusinessProcess';
                var VAL_1a411233 = parent == 'Contract' && child == 'BusinessFunction';
                var VAL_70325d20 = parent == 'Contract' && child == 'BusinessInteraction';
                var VAL_7c2327fa = parent == 'Contract' && child == 'BusinessEvent';
                var VAL_4d847d32 = parent == 'Contract' && child == 'Location';
                var VAL_5f462e3b = parent == 'Contract' && child == 'BusinessInterface';
                var VAL_3d7fa3ae = parent == 'Contract' && child == 'BusinessRole';
                var VAL_58065f0c = parent == 'Contract' && child == 'BusinessCollaboration';
                var VAL_3605c4d3 = parent == 'Contract' && child == 'BusinessActor';
                var VAL_585c13de = parent == 'Contract' && child == 'DataObject';
                var VAL_187eb9a8 = parent == 'Contract' && child == 'ApplicationService';
                var VAL_726a6b94 = parent == 'Contract' && child == 'ApplicationFunction';
                var VAL_6ad11a56 = parent == 'Contract' && child == 'ApplicationInteraction';
                var VAL_522b2631 = parent == 'Contract' && child == 'ApplicationInterface';
                var VAL_3ff57625 = parent == 'Contract' && child == 'ApplicationComponent';
                var VAL_1ee29c84 = parent == 'Contract' && child == 'ApplicationCollaboration';
                var VAL_7c8326a4 = parent == 'Contract' && child == 'Artifact';
                var VAL_77128dab = parent == 'Contract' && child == 'InfrastructureService';
                var VAL_63429932 = parent == 'Contract' && child == 'InfrastructureInterface';
                var VAL_69ce2f62 = parent == 'Contract' && child == 'Node';
                var VAL_c9d82f9 = parent == 'Contract' && child == 'SystemSoftware';
                var VAL_6f012914 = parent == 'Contract' && child == 'Device';
                var VAL_18fdb6cf = parent == 'Contract' && child == 'CommunicationPath';
                var VAL_d02f8d = parent == 'Contract' && child == 'Network';
                var VAL_60baef24 = parent == 'Contract' && child == 'Stakeholder';
                var VAL_61533ae = parent == 'Contract' && child == 'Driver';
                var VAL_732bb66d = parent == 'Contract' && child == 'Assessment';
                var VAL_720653c2 = parent == 'Contract' && child == 'Goal';
                var VAL_45f24169 = parent == 'Contract' && child == 'Requirement';
                var VAL_6ad5923a = parent == 'Contract' && child == 'Constraint';
                var VAL_4463d9d3 = parent == 'Contract' && child == 'Principle';
                var VAL_43b0ade = parent == 'Contract' && child == 'WorkPackage';
                var VAL_5395ea39 = parent == 'Contract' && child == 'Deliverable';
                var VAL_1517f633 = parent == 'Contract' && child == 'Plateau';
                var VAL_4fe01803 = parent == 'Contract' && child == 'Gap';
                var VAL_13d186db = parent == 'BusinessObject' && child == 'ArchimateElement';
                var VAL_6f6962ba = parent == 'BusinessObject' && child == 'Product';
                var VAL_4565a70a = parent == 'BusinessObject' && child == 'BusinessObject';
                var VAL_a0a9fa5 = parent == 'BusinessObject' && child == 'Meaning';
                var VAL_15723761 = parent == 'BusinessObject' && child == 'Representation';
                var VAL_312afbc7 = parent == 'BusinessObject' && child == 'BusinessService';
                var VAL_599f571f = parent == 'BusinessObject' && child == 'BusinessProcess';
                var VAL_7b60c3e = parent == 'BusinessObject' && child == 'BusinessFunction';
                var VAL_3fbfa96 = parent == 'BusinessObject' && child == 'BusinessInteraction';
                var VAL_6569dded = parent == 'BusinessObject' && child == 'BusinessEvent';
                var VAL_466d49f0 = parent == 'BusinessObject' && child == 'Location';
                var VAL_710d7aff = parent == 'BusinessObject' && child == 'BusinessInterface';
                var VAL_2d7e1102 = parent == 'BusinessObject' && child == 'BusinessRole';
                var VAL_65327f5 = parent == 'BusinessObject' && child == 'BusinessCollaboration';
                var VAL_2adddc06 = parent == 'BusinessObject' && child == 'BusinessActor';
                var VAL_301d8120 = parent == 'BusinessObject' && child == 'DataObject';
                var VAL_6d367020 = parent == 'BusinessObject' && child == 'ApplicationService';
                var VAL_72458efc = parent == 'BusinessObject' && child == 'ApplicationFunction';
                var VAL_36bc415e = parent == 'BusinessObject' && child == 'ApplicationInteraction';
                var VAL_6a74d228 = parent == 'BusinessObject' && child == 'ApplicationInterface';
                var VAL_349d0836 = parent == 'BusinessObject' && child == 'ApplicationComponent';
                var VAL_6a714237 = parent == 'BusinessObject' && child == 'ApplicationCollaboration';
                var VAL_3e134896 = parent == 'BusinessObject' && child == 'Artifact';
                var VAL_72ba28ee = parent == 'BusinessObject' && child == 'InfrastructureService';
                var VAL_2e3a5237 = parent == 'BusinessObject' && child == 'InfrastructureInterface';
                var VAL_4ebadd3d = parent == 'BusinessObject' && child == 'Node';
                var VAL_6ac97b84 = parent == 'BusinessObject' && child == 'SystemSoftware';
                var VAL_4917d36b = parent == 'BusinessObject' && child == 'Device';
                var VAL_35c09b94 = parent == 'BusinessObject' && child == 'CommunicationPath';
                var VAL_2d0bfb24 = parent == 'BusinessObject' && child == 'Network';
                var VAL_c3fa05a = parent == 'BusinessObject' && child == 'Stakeholder';
                var VAL_7b44b63d = parent == 'BusinessObject' && child == 'Driver';
                var VAL_4a699efa = parent == 'BusinessObject' && child == 'Assessment';
                var VAL_38499e48 = parent == 'BusinessObject' && child == 'Goal';
                var VAL_4905c46b = parent == 'BusinessObject' && child == 'Requirement';
                var VAL_17ae7628 = parent == 'BusinessObject' && child == 'Constraint';
                var VAL_1136b469 = parent == 'BusinessObject' && child == 'Principle';
                var VAL_6579c3d9 = parent == 'BusinessObject' && child == 'WorkPackage';
                var VAL_2b87581 = parent == 'BusinessObject' && child == 'Deliverable';
                var VAL_66434cc8 = parent == 'BusinessObject' && child == 'Plateau';
                var VAL_42f22995 = parent == 'BusinessObject' && child == 'Gap';
                var VAL_693e4d19 = parent == 'Meaning' && child == 'ArchimateElement';
                var VAL_286b39c2 = parent == 'Meaning' && child == 'Product';
                var VAL_5432050b = parent == 'Meaning' && child == 'BusinessObject';
                var VAL_75f2099 = parent == 'Meaning' && child == 'Meaning';
                var VAL_1c12f3ee = parent == 'Meaning' && child == 'Representation';
                var VAL_6d467c87 = parent == 'Meaning' && child == 'BusinessService';
                var VAL_29182679 = parent == 'Meaning' && child == 'BusinessProcess';
                var VAL_57bd802b = parent == 'Meaning' && child == 'BusinessFunction';
                var VAL_5cbb84b1 = parent == 'Meaning' && child == 'BusinessInteraction';
                var VAL_2c779e5 = parent == 'Meaning' && child == 'BusinessEvent';
                var VAL_6a84bc2a = parent == 'Meaning' && child == 'Location';
                var VAL_5183d589 = parent == 'Meaning' && child == 'BusinessInterface';
                var VAL_511d5d04 = parent == 'Meaning' && child == 'BusinessRole';
                var VAL_682c1e93 = parent == 'Meaning' && child == 'BusinessCollaboration';
                var VAL_27068a50 = parent == 'Meaning' && child == 'BusinessActor';
                var VAL_68e62ca4 = parent == 'Meaning' && child == 'DataObject';
                var VAL_5328a9c1 = parent == 'Meaning' && child == 'ApplicationService';
                var VAL_5b78fdb1 = parent == 'Meaning' && child == 'ApplicationFunction';
                var VAL_48bfb884 = parent == 'Meaning' && child == 'ApplicationInteraction';
                var VAL_11653e3b = parent == 'Meaning' && child == 'ApplicationInterface';
                var VAL_715fb77 = parent == 'Meaning' && child == 'ApplicationComponent';
                var VAL_1b9c1b51 = parent == 'Meaning' && child == 'ApplicationCollaboration';
                var VAL_2e52fb3e = parent == 'Meaning' && child == 'Artifact';
                var VAL_16fe9c29 = parent == 'Meaning' && child == 'InfrastructureService';
                var VAL_3e9803c2 = parent == 'Meaning' && child == 'InfrastructureInterface';
                var VAL_4525d1d3 = parent == 'Meaning' && child == 'Node';
                var VAL_7c974942 = parent == 'Meaning' && child == 'SystemSoftware';
                var VAL_1eea9d2d = parent == 'Meaning' && child == 'Device';
                var VAL_60921b21 = parent == 'Meaning' && child == 'CommunicationPath';
                var VAL_bd2f5a9 = parent == 'Meaning' && child == 'Network';
                var VAL_4d4960c8 = parent == 'Meaning' && child == 'Stakeholder';
                var VAL_7808fb9 = parent == 'Meaning' && child == 'Driver';
                var VAL_773bd77b = parent == 'Meaning' && child == 'Assessment';
                var VAL_6b580b88 = parent == 'Meaning' && child == 'Goal';
                var VAL_6d91790b = parent == 'Meaning' && child == 'Requirement';
                var VAL_6e6fce47 = parent == 'Meaning' && child == 'Constraint';
                var VAL_47c64cfe = parent == 'Meaning' && child == 'Principle';
                var VAL_6ce90bc5 = parent == 'Meaning' && child == 'WorkPackage';
                var VAL_a567e72 = parent == 'Meaning' && child == 'Deliverable';
                var VAL_1a5b8489 = parent == 'Meaning' && child == 'Plateau';
                var VAL_6f8f8a80 = parent == 'Meaning' && child == 'Gap';
                var VAL_4b1c0397 = parent == 'Representation' && child == 'ArchimateElement';
                var VAL_72805168 = parent == 'Representation' && child == 'Product';
                var VAL_34b9fc7d = parent == 'Representation' && child == 'BusinessObject';
                var VAL_27f1bbe0 = parent == 'Representation' && child == 'Meaning';
                var VAL_cda0432 = parent == 'Representation' && child == 'Representation';
                var VAL_7c211fd0 = parent == 'Representation' && child == 'BusinessService';
                var VAL_7004e3d = parent == 'Representation' && child == 'BusinessProcess';
                var VAL_2d84cb86 = parent == 'Representation' && child == 'BusinessFunction';
                var VAL_71a3a190 = parent == 'Representation' && child == 'BusinessInteraction';
                var VAL_588ffeb = parent == 'Representation' && child == 'BusinessEvent';
                var VAL_7c28c1 = parent == 'Representation' && child == 'Location';
                var VAL_baf1bb3 = parent == 'Representation' && child == 'BusinessInterface';
                var VAL_67ec8477 = parent == 'Representation' && child == 'BusinessRole';
                var VAL_25d958c6 = parent == 'Representation' && child == 'BusinessCollaboration';
                var VAL_4482469c = parent == 'Representation' && child == 'BusinessActor';
                var VAL_3703bf3c = parent == 'Representation' && child == 'DataObject';
                var VAL_34cf5a97 = parent == 'Representation' && child == 'ApplicationService';
                var VAL_5b3f3ba0 = parent == 'Representation' && child == 'ApplicationFunction';
                var VAL_ddf20fd = parent == 'Representation' && child == 'ApplicationInteraction';
                var VAL_278f8425 = parent == 'Representation' && child == 'ApplicationInterface';
                var VAL_695a69a1 = parent == 'Representation' && child == 'ApplicationComponent';
                var VAL_4b1abd11 = parent == 'Representation' && child == 'ApplicationCollaboration';
                var VAL_3f36b447 = parent == 'Representation' && child == 'Artifact';
                var VAL_6443b128 = parent == 'Representation' && child == 'InfrastructureService';
                var VAL_5eeedb60 = parent == 'Representation' && child == 'InfrastructureInterface';
                var VAL_40021799 = parent == 'Representation' && child == 'Node';
                var VAL_4a1c0752 = parent == 'Representation' && child == 'SystemSoftware';
                var VAL_332f25c8 = parent == 'Representation' && child == 'Device';
                var VAL_1b32cd16 = parent == 'Representation' && child == 'CommunicationPath';
                var VAL_4bdcaf36 = parent == 'Representation' && child == 'Network';
                var VAL_61d01788 = parent == 'Representation' && child == 'Stakeholder';
                var VAL_2b9b7f1f = parent == 'Representation' && child == 'Driver';
                var VAL_264c5d07 = parent == 'Representation' && child == 'Assessment';
                var VAL_847f3e7 = parent == 'Representation' && child == 'Goal';
                var VAL_69cac930 = parent == 'Representation' && child == 'Requirement';
                var VAL_19593091 = parent == 'Representation' && child == 'Constraint';
                var VAL_5d39f2d8 = parent == 'Representation' && child == 'Principle';
                var VAL_6ad6fa53 = parent == 'Representation' && child == 'WorkPackage';
                var VAL_55ea2d70 = parent == 'Representation' && child == 'Deliverable';
                var VAL_5e742e4 = parent == 'Representation' && child == 'Plateau';
                var VAL_175acfb2 = parent == 'Representation' && child == 'Gap';
                var VAL_4a03bb68 = parent == 'BusinessService' && child == 'ArchimateElement';
                var VAL_4e868ef5 = parent == 'BusinessService' && child == 'Product';
                var VAL_71c905a3 = parent == 'BusinessService' && child == 'BusinessObject';
                var VAL_30af7377 = parent == 'BusinessService' && child == 'Meaning';
                var VAL_67a056f1 = parent == 'BusinessService' && child == 'Representation';
                var VAL_1dab9dd6 = parent == 'BusinessService' && child == 'BusinessService';
                var VAL_247667dd = parent == 'BusinessService' && child == 'BusinessProcess';
                var VAL_6f099cef = parent == 'BusinessService' && child == 'BusinessFunction';
                var VAL_afb5821 = parent == 'BusinessService' && child == 'BusinessInteraction';
                var VAL_4bff2185 = parent == 'BusinessService' && child == 'BusinessEvent';
                var VAL_5c20ffa8 = parent == 'BusinessService' && child == 'Location';
                var VAL_7fedfe27 = parent == 'BusinessService' && child == 'BusinessInterface';
                var VAL_2f879bab = parent == 'BusinessService' && child == 'BusinessRole';
                var VAL_1d4664d7 = parent == 'BusinessService' && child == 'BusinessCollaboration';
                var VAL_46c00568 = parent == 'BusinessService' && child == 'BusinessActor';
                var VAL_56ccd751 = parent == 'BusinessService' && child == 'DataObject';
                var VAL_458544e0 = parent == 'BusinessService' && child == 'ApplicationService';
                var VAL_6bcbf05b = parent == 'BusinessService' && child == 'ApplicationFunction';
                var VAL_2d66530f = parent == 'BusinessService' && child == 'ApplicationInteraction';
                var VAL_1d207fad = parent == 'BusinessService' && child == 'ApplicationInterface';
                var VAL_72ed9aad = parent == 'BusinessService' && child == 'ApplicationComponent';
                var VAL_4690f583 = parent == 'BusinessService' && child == 'ApplicationCollaboration';
                var VAL_59712875 = parent == 'BusinessService' && child == 'Artifact';
                var VAL_47b2e9e1 = parent == 'BusinessService' && child == 'InfrastructureService';
                var VAL_59942b48 = parent == 'BusinessService' && child == 'InfrastructureInterface';
                var VAL_1869f114 = parent == 'BusinessService' && child == 'Node';
                var VAL_488b50ec = parent == 'BusinessService' && child == 'SystemSoftware';
                var VAL_18a645fd = parent == 'BusinessService' && child == 'Device';
                var VAL_6090f3ca = parent == 'BusinessService' && child == 'CommunicationPath';
                var VAL_37a64f9d = parent == 'BusinessService' && child == 'Network';
                var VAL_25b865b5 = parent == 'BusinessService' && child == 'Stakeholder';
                var VAL_f9b5552 = parent == 'BusinessService' && child == 'Driver';
                var VAL_6872f9c8 = parent == 'BusinessService' && child == 'Assessment';
                var VAL_6d2d99fc = parent == 'BusinessService' && child == 'Goal';
                var VAL_bdecc21 = parent == 'BusinessService' && child == 'Requirement';
                var VAL_5e3a39cd = parent == 'BusinessService' && child == 'Constraint';
                var VAL_21f9277b = parent == 'BusinessService' && child == 'Principle';
                var VAL_201aa8c1 = parent == 'BusinessService' && child == 'WorkPackage';
                var VAL_5d58c727 = parent == 'BusinessService' && child == 'Deliverable';
                var VAL_52a36910 = parent == 'BusinessService' && child == 'Plateau';
                var VAL_3a095ec0 = parent == 'BusinessService' && child == 'Gap';
                var VAL_4f20a5e0 = parent == 'BusinessProcess' && child == 'ArchimateElement';
                var VAL_54da32dc = parent == 'BusinessProcess' && child == 'Product';
                var VAL_1d782abe = parent == 'BusinessProcess' && child == 'BusinessObject';
                var VAL_6df7988f = parent == 'BusinessProcess' && child == 'Meaning';
                var VAL_27b22f74 = parent == 'BusinessProcess' && child == 'Representation';
                var VAL_22fba58c = parent == 'BusinessProcess' && child == 'BusinessService';
                var VAL_7e8a46b7 = parent == 'BusinessProcess' && child == 'BusinessProcess';
                var VAL_2fe88a09 = parent == 'BusinessProcess' && child == 'BusinessFunction';
                var VAL_1917d90f = parent == 'BusinessProcess' && child == 'BusinessInteraction';
                var VAL_66bfd864 = parent == 'BusinessProcess' && child == 'BusinessEvent';
                var VAL_4aac85fa = parent == 'BusinessProcess' && child == 'Location';
                var VAL_21fff664 = parent == 'BusinessProcess' && child == 'BusinessInterface';
                var VAL_6079cf5 = parent == 'BusinessProcess' && child == 'BusinessRole';
                var VAL_1e6308a9 = parent == 'BusinessProcess' && child == 'BusinessCollaboration';
                var VAL_30cecdca = parent == 'BusinessProcess' && child == 'BusinessActor';
                var VAL_6edc4161 = parent == 'BusinessProcess' && child == 'DataObject';
                var VAL_5486887b = parent == 'BusinessProcess' && child == 'ApplicationService';
                var VAL_5226e402 = parent == 'BusinessProcess' && child == 'ApplicationFunction';
                var VAL_1440c311 = parent == 'BusinessProcess' && child == 'ApplicationInteraction';
                var VAL_189b5fb1 = parent == 'BusinessProcess' && child == 'ApplicationInterface';
                var VAL_783ec989 = parent == 'BusinessProcess' && child == 'ApplicationComponent';
                var VAL_1ddd3478 = parent == 'BusinessProcess' && child == 'ApplicationCollaboration';
                var VAL_f973499 = parent == 'BusinessProcess' && child == 'Artifact';
                var VAL_4d33940d = parent == 'BusinessProcess' && child == 'InfrastructureService';
                var VAL_43cf6ea3 = parent == 'BusinessProcess' && child == 'InfrastructureInterface';
                var VAL_37c5fc56 = parent == 'BusinessProcess' && child == 'Node';
                var VAL_1c025cb = parent == 'BusinessProcess' && child == 'SystemSoftware';
                var VAL_50825a02 = parent == 'BusinessProcess' && child == 'Device';
                var VAL_68809cc7 = parent == 'BusinessProcess' && child == 'CommunicationPath';
                var VAL_703feacd = parent == 'BusinessProcess' && child == 'Network';
                var VAL_7051777c = parent == 'BusinessProcess' && child == 'Stakeholder';
                var VAL_3241713e = parent == 'BusinessProcess' && child == 'Driver';
                var VAL_5ecba515 = parent == 'BusinessProcess' && child == 'Assessment';
                var VAL_512d4583 = parent == 'BusinessProcess' && child == 'Goal';
                var VAL_2abc224d = parent == 'BusinessProcess' && child == 'Requirement';
                var VAL_13cd7ea5 = parent == 'BusinessProcess' && child == 'Constraint';
                var VAL_102d92c4 = parent == 'BusinessProcess' && child == 'Principle';
                var VAL_2b97cc1f = parent == 'BusinessProcess' && child == 'WorkPackage';
                var VAL_60723d6a = parent == 'BusinessProcess' && child == 'Deliverable';
                var VAL_18324f97 = parent == 'BusinessProcess' && child == 'Plateau';
                var VAL_64f555e7 = parent == 'BusinessProcess' && child == 'Gap';
                var VAL_71178a52 = parent == 'BusinessFunction' && child == 'ArchimateElement';
                var VAL_ff6077 = parent == 'BusinessFunction' && child == 'Product';
                var VAL_abbc908 = parent == 'BusinessFunction' && child == 'BusinessObject';
                var VAL_44afefd5 = parent == 'BusinessFunction' && child == 'Meaning';
                var VAL_9a7a808 = parent == 'BusinessFunction' && child == 'Representation';
                var VAL_72209d93 = parent == 'BusinessFunction' && child == 'BusinessService';
                var VAL_2687f956 = parent == 'BusinessFunction' && child == 'BusinessProcess';
                var VAL_1ded7b14 = parent == 'BusinessFunction' && child == 'BusinessFunction';
                var VAL_29be7749 = parent == 'BusinessFunction' && child == 'BusinessInteraction';
                var VAL_5f84abe8 = parent == 'BusinessFunction' && child == 'BusinessEvent';
                var VAL_4650a407 = parent == 'BusinessFunction' && child == 'Location';
                var VAL_30135202 = parent == 'BusinessFunction' && child == 'BusinessInterface';
                var VAL_6a4d7f76 = parent == 'BusinessFunction' && child == 'BusinessRole';
                var VAL_10ec523c = parent == 'BusinessFunction' && child == 'BusinessCollaboration';
                var VAL_53dfacba = parent == 'BusinessFunction' && child == 'BusinessActor';
                var VAL_79767781 = parent == 'BusinessFunction' && child == 'DataObject';
                var VAL_78411116 = parent == 'BusinessFunction' && child == 'ApplicationService';
                var VAL_aced190 = parent == 'BusinessFunction' && child == 'ApplicationFunction';
                var VAL_245a060f = parent == 'BusinessFunction' && child == 'ApplicationInteraction';
                var VAL_6edaa77a = parent == 'BusinessFunction' && child == 'ApplicationInterface';
                var VAL_1e63d216 = parent == 'BusinessFunction' && child == 'ApplicationComponent';
                var VAL_62ddd21b = parent == 'BusinessFunction' && child == 'ApplicationCollaboration';
                var VAL_16c3ca31 = parent == 'BusinessFunction' && child == 'Artifact';
                var VAL_2d195ee4 = parent == 'BusinessFunction' && child == 'InfrastructureService';
                var VAL_2d6aca33 = parent == 'BusinessFunction' && child == 'InfrastructureInterface';
                var VAL_21ab988f = parent == 'BusinessFunction' && child == 'Node';
                var VAL_29314cc9 = parent == 'BusinessFunction' && child == 'SystemSoftware';
                var VAL_4e38d975 = parent == 'BusinessFunction' && child == 'Device';
                var VAL_35f8a9d3 = parent == 'BusinessFunction' && child == 'CommunicationPath';
                var VAL_48ea2003 = parent == 'BusinessFunction' && child == 'Network';
                var VAL_6b1e7ad3 = parent == 'BusinessFunction' && child == 'Stakeholder';
                var VAL_63e5e5b4 = parent == 'BusinessFunction' && child == 'Driver';
                var VAL_13a37e2a = parent == 'BusinessFunction' && child == 'Assessment';
                var VAL_a50ae65 = parent == 'BusinessFunction' && child == 'Goal';
                var VAL_1280851e = parent == 'BusinessFunction' && child == 'Requirement';
                var VAL_5e840abf = parent == 'BusinessFunction' && child == 'Constraint';
                var VAL_56de6d6b = parent == 'BusinessFunction' && child == 'Principle';
                var VAL_5972d253 = parent == 'BusinessFunction' && child == 'WorkPackage';
                var VAL_4fcc0416 = parent == 'BusinessFunction' && child == 'Deliverable';
                var VAL_31e32ea2 = parent == 'BusinessFunction' && child == 'Plateau';
                var VAL_1473b8c0 = parent == 'BusinessFunction' && child == 'Gap';
                var VAL_5b5c0057 = parent == 'BusinessInteraction' && child == 'ArchimateElement';
                var VAL_749f539e = parent == 'BusinessInteraction' && child == 'Product';
                var VAL_5ca1f591 = parent == 'BusinessInteraction' && child == 'BusinessObject';
                var VAL_551de37d = parent == 'BusinessInteraction' && child == 'Meaning';
                var VAL_6ef81f31 = parent == 'BusinessInteraction' && child == 'Representation';
                var VAL_6075b2d3 = parent == 'BusinessInteraction' && child == 'BusinessService';
                var VAL_33abde31 = parent == 'BusinessInteraction' && child == 'BusinessProcess';
                var VAL_997d532 = parent == 'BusinessInteraction' && child == 'BusinessFunction';
                var VAL_273842a6 = parent == 'BusinessInteraction' && child == 'BusinessInteraction';
                var VAL_6a969fb8 = parent == 'BusinessInteraction' && child == 'BusinessEvent';
                var VAL_7a18e8d = parent == 'BusinessInteraction' && child == 'Location';
                var VAL_3028e50e = parent == 'BusinessInteraction' && child == 'BusinessInterface';
                var VAL_5560bcdf = parent == 'BusinessInteraction' && child == 'BusinessRole';
                var VAL_b558294 = parent == 'BusinessInteraction' && child == 'BusinessCollaboration';
                var VAL_bb095 = parent == 'BusinessInteraction' && child == 'BusinessActor';
                var VAL_777c350f = parent == 'BusinessInteraction' && child == 'DataObject';
                var VAL_27aae97b = parent == 'BusinessInteraction' && child == 'ApplicationService';
                var VAL_4c9e38 = parent == 'BusinessInteraction' && child == 'ApplicationFunction';
                var VAL_5d1e09bc = parent == 'BusinessInteraction' && child == 'ApplicationInteraction';
                var VAL_4bdc8b5d = parent == 'BusinessInteraction' && child == 'ApplicationInterface';
                var VAL_3bcd426c = parent == 'BusinessInteraction' && child == 'ApplicationComponent';
                var VAL_5f14a673 = parent == 'BusinessInteraction' && child == 'ApplicationCollaboration';
                var VAL_726a17c4 = parent == 'BusinessInteraction' && child == 'Artifact';
                var VAL_5dc3fcb7 = parent == 'BusinessInteraction' && child == 'InfrastructureService';
                var VAL_c4c0b41 = parent == 'BusinessInteraction' && child == 'InfrastructureInterface';
                var VAL_76911385 = parent == 'BusinessInteraction' && child == 'Node';
                var VAL_5467eea4 = parent == 'BusinessInteraction' && child == 'SystemSoftware';
                var VAL_160396db = parent == 'BusinessInteraction' && child == 'Device';
                var VAL_7a799159 = parent == 'BusinessInteraction' && child == 'CommunicationPath';
                var VAL_40ab8a8 = parent == 'BusinessInteraction' && child == 'Network';
                var VAL_6ff37443 = parent == 'BusinessInteraction' && child == 'Stakeholder';
                var VAL_65cc8228 = parent == 'BusinessInteraction' && child == 'Driver';
                var VAL_53093491 = parent == 'BusinessInteraction' && child == 'Assessment';
                var VAL_21719a0 = parent == 'BusinessInteraction' && child == 'Goal';
                var VAL_76b224cd = parent == 'BusinessInteraction' && child == 'Requirement';
                var VAL_77ee25f1 = parent == 'BusinessInteraction' && child == 'Constraint';
                var VAL_6dd93a21 = parent == 'BusinessInteraction' && child == 'Principle';
                var VAL_57b9e423 = parent == 'BusinessInteraction' && child == 'WorkPackage';
                var VAL_304a3655 = parent == 'BusinessInteraction' && child == 'Deliverable';
                var VAL_368d5c00 = parent == 'BusinessInteraction' && child == 'Plateau';
                var VAL_12a160c2 = parent == 'BusinessInteraction' && child == 'Gap';
                var VAL_aa10649 = parent == 'BusinessEvent' && child == 'ArchimateElement';
                var VAL_6b3871d6 = parent == 'BusinessEvent' && child == 'Product';
                var VAL_37095ded = parent == 'BusinessEvent' && child == 'BusinessObject';
                var VAL_2eb79cbe = parent == 'BusinessEvent' && child == 'Meaning';
                var VAL_2ca6546f = parent == 'BusinessEvent' && child == 'Representation';
                var VAL_43826ec = parent == 'BusinessEvent' && child == 'BusinessService';
                var VAL_7923f5b3 = parent == 'BusinessEvent' && child == 'BusinessProcess';
                var VAL_6b63d445 = parent == 'BusinessEvent' && child == 'BusinessFunction';
                var VAL_7578e06a = parent == 'BusinessEvent' && child == 'BusinessInteraction';
                var VAL_30b2b76f = parent == 'BusinessEvent' && child == 'BusinessEvent';
                var VAL_56da52a7 = parent == 'BusinessEvent' && child == 'Location';
                var VAL_23ee75c5 = parent == 'BusinessEvent' && child == 'BusinessInterface';
                var VAL_11a7ba62 = parent == 'BusinessEvent' && child == 'BusinessRole';
                var VAL_340b7ef6 = parent == 'BusinessEvent' && child == 'BusinessCollaboration';
                var VAL_30404dba = parent == 'BusinessEvent' && child == 'BusinessActor';
                var VAL_6050462a = parent == 'BusinessEvent' && child == 'DataObject';
                var VAL_4c0884e8 = parent == 'BusinessEvent' && child == 'ApplicationService';
                var VAL_231baf51 = parent == 'BusinessEvent' && child == 'ApplicationFunction';
                var VAL_11841b15 = parent == 'BusinessEvent' && child == 'ApplicationInteraction';
                var VAL_73877e19 = parent == 'BusinessEvent' && child == 'ApplicationInterface';
                var VAL_7b208b45 = parent == 'BusinessEvent' && child == 'ApplicationComponent';
                var VAL_5bfc257 = parent == 'BusinessEvent' && child == 'ApplicationCollaboration';
                var VAL_34523d46 = parent == 'BusinessEvent' && child == 'Artifact';
                var VAL_7cedfa63 = parent == 'BusinessEvent' && child == 'InfrastructureService';
                var VAL_3e83c18 = parent == 'BusinessEvent' && child == 'InfrastructureInterface';
                var VAL_783efb48 = parent == 'BusinessEvent' && child == 'Node';
                var VAL_5d235104 = parent == 'BusinessEvent' && child == 'SystemSoftware';
                var VAL_4e8e8621 = parent == 'BusinessEvent' && child == 'Device';
                var VAL_c446b14 = parent == 'BusinessEvent' && child == 'CommunicationPath';
                var VAL_3af356f = parent == 'BusinessEvent' && child == 'Network';
                var VAL_4443ef6f = parent == 'BusinessEvent' && child == 'Stakeholder';
                var VAL_7e46d648 = parent == 'BusinessEvent' && child == 'Driver';
                var VAL_51751e5f = parent == 'BusinessEvent' && child == 'Assessment';
                var VAL_2b0b4d53 = parent == 'BusinessEvent' && child == 'Goal';
                var VAL_7068f7ca = parent == 'BusinessEvent' && child == 'Requirement';
                var VAL_38548b19 = parent == 'BusinessEvent' && child == 'Constraint';
                var VAL_41aaedaa = parent == 'BusinessEvent' && child == 'Principle';
                var VAL_303a5119 = parent == 'BusinessEvent' && child == 'WorkPackage';
                var VAL_75b3673 = parent == 'BusinessEvent' && child == 'Deliverable';
                var VAL_1bcb79c2 = parent == 'BusinessEvent' && child == 'Plateau';
                var VAL_d1a10ac = parent == 'BusinessEvent' && child == 'Gap';
                var VAL_6fca2a8f = parent == 'Location' && child == 'ArchimateElement';
                var VAL_31fc71ab = parent == 'Location' && child == 'Product';
                var VAL_71391b3f = parent == 'Location' && child == 'BusinessObject';
                var VAL_2cfbeac4 = parent == 'Location' && child == 'Meaning';
                var VAL_12db3386 = parent == 'Location' && child == 'Representation';
                var VAL_4078695f = parent == 'Location' && child == 'BusinessService';
                var VAL_79a1728c = parent == 'Location' && child == 'BusinessProcess';
                var VAL_a7f0ab6 = parent == 'Location' && child == 'BusinessFunction';
                var VAL_41f35f7c = parent == 'Location' && child == 'BusinessInteraction';
                var VAL_42c2f48c = parent == 'Location' && child == 'BusinessEvent';
                var VAL_3005db4a = parent == 'Location' && child == 'Location';
                var VAL_425d5d46 = parent == 'Location' && child == 'BusinessInterface';
                var VAL_198ef2ce = parent == 'Location' && child == 'BusinessRole';
                var VAL_4cbd03e7 = parent == 'Location' && child == 'BusinessCollaboration';
                var VAL_52fc5eb1 = parent == 'Location' && child == 'BusinessActor';
                var VAL_7a639ec5 = parent == 'Location' && child == 'DataObject';
                var VAL_14151bc5 = parent == 'Location' && child == 'ApplicationService';
                var VAL_3013909b = parent == 'Location' && child == 'ApplicationFunction';
                var VAL_2a49fe = parent == 'Location' && child == 'ApplicationInteraction';
                var VAL_66596a88 = parent == 'Location' && child == 'ApplicationInterface';
                var VAL_5aae8eb5 = parent == 'Location' && child == 'ApplicationComponent';
                var VAL_76954a33 = parent == 'Location' && child == 'ApplicationCollaboration';
                var VAL_24a298a6 = parent == 'Location' && child == 'Artifact';
                var VAL_982bb90 = parent == 'Location' && child == 'InfrastructureService';
                var VAL_27f74733 = parent == 'Location' && child == 'InfrastructureInterface';
                var VAL_7bef452c = parent == 'Location' && child == 'Node';
                var VAL_4bb8855f = parent == 'Location' && child == 'SystemSoftware';
                var VAL_57fae983 = parent == 'Location' && child == 'Device';
                var VAL_4a29f290 = parent == 'Location' && child == 'CommunicationPath';
                var VAL_4bee18dc = parent == 'Location' && child == 'Network';
                var VAL_44f3fe83 = parent == 'Location' && child == 'Stakeholder';
                var VAL_44c5a16f = parent == 'Location' && child == 'Driver';
                var VAL_417d6615 = parent == 'Location' && child == 'Assessment';
                var VAL_7a6ebe1e = parent == 'Location' && child == 'Goal';
                var VAL_21325036 = parent == 'Location' && child == 'Requirement';
                var VAL_489543a6 = parent == 'Location' && child == 'Constraint';
                var VAL_6272c96f = parent == 'Location' && child == 'Principle';
                var VAL_6de30571 = parent == 'Location' && child == 'WorkPackage';
                var VAL_5ee34b1b = parent == 'Location' && child == 'Deliverable';
                var VAL_3c89bb12 = parent == 'Location' && child == 'Plateau';
                var VAL_48c4245d = parent == 'Location' && child == 'Gap';
                var VAL_3df978b9 = parent == 'BusinessInterface' && child == 'ArchimateElement';
                var VAL_7906578e = parent == 'BusinessInterface' && child == 'Product';
                var VAL_8a62297 = parent == 'BusinessInterface' && child == 'BusinessObject';
                var VAL_61a91912 = parent == 'BusinessInterface' && child == 'Meaning';
                var VAL_1763992e = parent == 'BusinessInterface' && child == 'Representation';
                var VAL_5c92166b = parent == 'BusinessInterface' && child == 'BusinessService';
                var VAL_659925f4 = parent == 'BusinessInterface' && child == 'BusinessProcess';
                var VAL_4cd1c1dc = parent == 'BusinessInterface' && child == 'BusinessFunction';
                var VAL_47f08b81 = parent == 'BusinessInterface' && child == 'BusinessInteraction';
                var VAL_b9dfc5a = parent == 'BusinessInterface' && child == 'BusinessEvent';
                var VAL_2787de58 = parent == 'BusinessInterface' && child == 'Location';
                var VAL_659a2455 = parent == 'BusinessInterface' && child == 'BusinessInterface';
                var VAL_267517e4 = parent == 'BusinessInterface' && child == 'BusinessRole';
                var VAL_426e505c = parent == 'BusinessInterface' && child == 'BusinessCollaboration';
                var VAL_5b022357 = parent == 'BusinessInterface' && child == 'BusinessActor';
                var VAL_6f8e0cee = parent == 'BusinessInterface' && child == 'DataObject';
                var VAL_614aeccc = parent == 'BusinessInterface' && child == 'ApplicationService';
                var VAL_5116ac09 = parent == 'BusinessInterface' && child == 'ApplicationFunction';
                var VAL_1bc425e7 = parent == 'BusinessInterface' && child == 'ApplicationInteraction';
                var VAL_4b2a30d = parent == 'BusinessInterface' && child == 'ApplicationInterface';
                var VAL_322803db = parent == 'BusinessInterface' && child == 'ApplicationComponent';
                var VAL_56ba8773 = parent == 'BusinessInterface' && child == 'ApplicationCollaboration';
                var VAL_6ceb7b5e = parent == 'BusinessInterface' && child == 'Artifact';
                var VAL_7dd00705 = parent == 'BusinessInterface' && child == 'InfrastructureService';
                var VAL_f14e5bf = parent == 'BusinessInterface' && child == 'InfrastructureInterface';
                var VAL_d176a31 = parent == 'BusinessInterface' && child == 'Node';
                var VAL_3a91d146 = parent == 'BusinessInterface' && child == 'SystemSoftware';
                var VAL_4784013e = parent == 'BusinessInterface' && child == 'Device';
                var VAL_6f952d6c = parent == 'BusinessInterface' && child == 'CommunicationPath';
                var VAL_5965844d = parent == 'BusinessInterface' && child == 'Network';
                var VAL_6d4a65c6 = parent == 'BusinessInterface' && child == 'Stakeholder';
                var VAL_aa004a0 = parent == 'BusinessInterface' && child == 'Driver';
                var VAL_4c98a6d5 = parent == 'BusinessInterface' && child == 'Assessment';
                var VAL_392a04e7 = parent == 'BusinessInterface' && child == 'Goal';
                var VAL_7f02251 = parent == 'BusinessInterface' && child == 'Requirement';
                var VAL_dffa30b = parent == 'BusinessInterface' && child == 'Constraint';
                var VAL_4d8126f = parent == 'BusinessInterface' && child == 'Principle';
                var VAL_6d3c232f = parent == 'BusinessInterface' && child == 'WorkPackage';
                var VAL_6b587673 = parent == 'BusinessInterface' && child == 'Deliverable';
                var VAL_1bcf67e8 = parent == 'BusinessInterface' && child == 'Plateau';
                var VAL_5f404594 = parent == 'BusinessInterface' && child == 'Gap';
                var VAL_53692008 = parent == 'BusinessRole' && child == 'ArchimateElement';
                var VAL_7b2a3ff8 = parent == 'BusinessRole' && child == 'Product';
                var VAL_1bbae752 = parent == 'BusinessRole' && child == 'BusinessObject';
                var VAL_460b6d54 = parent == 'BusinessRole' && child == 'Meaning';
                var VAL_5cf87cfd = parent == 'BusinessRole' && child == 'Representation';
                var VAL_76075d65 = parent == 'BusinessRole' && child == 'BusinessService';
                var VAL_3a4ba480 = parent == 'BusinessRole' && child == 'BusinessProcess';
                var VAL_27b71f50 = parent == 'BusinessRole' && child == 'BusinessFunction';
                var VAL_383790cf = parent == 'BusinessRole' && child == 'BusinessInteraction';
                var VAL_74971ed9 = parent == 'BusinessRole' && child == 'BusinessEvent';
                var VAL_131fcb6f = parent == 'BusinessRole' && child == 'Location';
                var VAL_ccd1bc3 = parent == 'BusinessRole' && child == 'BusinessInterface';
                var VAL_878537d = parent == 'BusinessRole' && child == 'BusinessRole';
                var VAL_4455f57d = parent == 'BusinessRole' && child == 'BusinessCollaboration';
                var VAL_29fc1a2b = parent == 'BusinessRole' && child == 'BusinessActor';
                var VAL_4d0b0fd4 = parent == 'BusinessRole' && child == 'DataObject';
                var VAL_7a24eb3 = parent == 'BusinessRole' && child == 'ApplicationService';
                var VAL_6c37bd27 = parent == 'BusinessRole' && child == 'ApplicationFunction';
                var VAL_25d3cfc8 = parent == 'BusinessRole' && child == 'ApplicationInteraction';
                var VAL_30331109 = parent == 'BusinessRole' && child == 'ApplicationInterface';
                var VAL_2571066a = parent == 'BusinessRole' && child == 'ApplicationComponent';
                var VAL_74fe5966 = parent == 'BusinessRole' && child == 'ApplicationCollaboration';
                var VAL_4fe875be = parent == 'BusinessRole' && child == 'Artifact';
                var VAL_677b8e13 = parent == 'BusinessRole' && child == 'InfrastructureService';
                var VAL_4a9486c0 = parent == 'BusinessRole' && child == 'InfrastructureInterface';
                var VAL_4c27d39d = parent == 'BusinessRole' && child == 'Node';
                var VAL_40ee0a22 = parent == 'BusinessRole' && child == 'SystemSoftware';
                var VAL_7bde1f3a = parent == 'BusinessRole' && child == 'Device';
                var VAL_15923407 = parent == 'BusinessRole' && child == 'CommunicationPath';
                var VAL_67dba613 = parent == 'BusinessRole' && child == 'Network';
                var VAL_57540fd0 = parent == 'BusinessRole' && child == 'Stakeholder';
                var VAL_5cf8edcf = parent == 'BusinessRole' && child == 'Driver';
                var VAL_58cec85b = parent == 'BusinessRole' && child == 'Assessment';
                var VAL_629f066f = parent == 'BusinessRole' && child == 'Goal';
                var VAL_1542af63 = parent == 'BusinessRole' && child == 'Requirement';
                var VAL_ecfbe91 = parent == 'BusinessRole' && child == 'Constraint';
                var VAL_20ed3303 = parent == 'BusinessRole' && child == 'Principle';
                var VAL_3adbe50f = parent == 'BusinessRole' && child == 'WorkPackage';
                var VAL_3a627c80 = parent == 'BusinessRole' && child == 'Deliverable';
                var VAL_49aa766b = parent == 'BusinessRole' && child == 'Plateau';
                var VAL_963176 = parent == 'BusinessRole' && child == 'Gap';
                var VAL_65004ff6 = parent == 'BusinessCollaboration' && child == 'ArchimateElement';
                var VAL_4cafa9aa = parent == 'BusinessCollaboration' && child == 'Product';
                var VAL_562c877a = parent == 'BusinessCollaboration' && child == 'BusinessObject';
                var VAL_67001148 = parent == 'BusinessCollaboration' && child == 'Meaning';
                var VAL_989da1 = parent == 'BusinessCollaboration' && child == 'Representation';
                var VAL_31cb96e1 = parent == 'BusinessCollaboration' && child == 'BusinessService';
                var VAL_3eed0f5 = parent == 'BusinessCollaboration' && child == 'BusinessProcess';
                var VAL_64030b91 = parent == 'BusinessCollaboration' && child == 'BusinessFunction';
                var VAL_2032e725 = parent == 'BusinessCollaboration' && child == 'BusinessInteraction';
                var VAL_4d23015c = parent == 'BusinessCollaboration' && child == 'BusinessEvent';
                var VAL_383f1975 = parent == 'BusinessCollaboration' && child == 'Location';
                var VAL_441cc260 = parent == 'BusinessCollaboration' && child == 'BusinessInterface';
                var VAL_73a00e09 = parent == 'BusinessCollaboration' && child == 'BusinessRole';
                var VAL_26dcd8c0 = parent == 'BusinessCollaboration' && child == 'BusinessCollaboration';
                var VAL_66e889df = parent == 'BusinessCollaboration' && child == 'BusinessActor';
                var VAL_444548a0 = parent == 'BusinessCollaboration' && child == 'DataObject';
                var VAL_3766c667 = parent == 'BusinessCollaboration' && child == 'ApplicationService';
                var VAL_773c0293 = parent == 'BusinessCollaboration' && child == 'ApplicationFunction';
                var VAL_55b8dbda = parent == 'BusinessCollaboration' && child == 'ApplicationInteraction';
                var VAL_3b569985 = parent == 'BusinessCollaboration' && child == 'ApplicationInterface';
                var VAL_3a022576 = parent == 'BusinessCollaboration' && child == 'ApplicationComponent';
                var VAL_2dbd803f = parent == 'BusinessCollaboration' && child == 'ApplicationCollaboration';
                var VAL_3e48e859 = parent == 'BusinessCollaboration' && child == 'Artifact';
                var VAL_31ddd4a4 = parent == 'BusinessCollaboration' && child == 'InfrastructureService';
                var VAL_1a5f7e7c = parent == 'BusinessCollaboration' && child == 'InfrastructureInterface';
                var VAL_5b22b970 = parent == 'BusinessCollaboration' && child == 'Node';
                var VAL_22d1886d = parent == 'BusinessCollaboration' && child == 'SystemSoftware';
                var VAL_7df60067 = parent == 'BusinessCollaboration' && child == 'Device';
                var VAL_1cbb3d3b = parent == 'BusinessCollaboration' && child == 'CommunicationPath';
                var VAL_529cfee5 = parent == 'BusinessCollaboration' && child == 'Network';
                var VAL_7ca0863b = parent == 'BusinessCollaboration' && child == 'Stakeholder';
                var VAL_319854f0 = parent == 'BusinessCollaboration' && child == 'Driver';
                var VAL_748fe51d = parent == 'BusinessCollaboration' && child == 'Assessment';
                var VAL_415156bf = parent == 'BusinessCollaboration' && child == 'Goal';
                var VAL_393881f0 = parent == 'BusinessCollaboration' && child == 'Requirement';
                var VAL_4af46df3 = parent == 'BusinessCollaboration' && child == 'Constraint';
                var VAL_4158debd = parent == 'BusinessCollaboration' && child == 'Principle';
                var VAL_af78c87 = parent == 'BusinessCollaboration' && child == 'WorkPackage';
                var VAL_773dab28 = parent == 'BusinessCollaboration' && child == 'Deliverable';
                var VAL_1ecfcbc9 = parent == 'BusinessCollaboration' && child == 'Plateau';
                var VAL_1965539b = parent == 'BusinessCollaboration' && child == 'Gap';
                var VAL_2fc07784 = parent == 'BusinessActor' && child == 'ArchimateElement';
                var VAL_353efdbf = parent == 'BusinessActor' && child == 'Product';
                var VAL_55cff952 = parent == 'BusinessActor' && child == 'BusinessObject';
                var VAL_660591fb = parent == 'BusinessActor' && child == 'Meaning';
                var VAL_4a55a6e8 = parent == 'BusinessActor' && child == 'Representation';
                var VAL_8c46918 = parent == 'BusinessActor' && child == 'BusinessService';
                var VAL_226b143b = parent == 'BusinessActor' && child == 'BusinessProcess';
                var VAL_682bd3c4 = parent == 'BusinessActor' && child == 'BusinessFunction';
                var VAL_f2e4acf = parent == 'BusinessActor' && child == 'BusinessInteraction';
                var VAL_24097e9b = parent == 'BusinessActor' && child == 'BusinessEvent';
                var VAL_5eb97ced = parent == 'BusinessActor' && child == 'Location';
                var VAL_68ba310d = parent == 'BusinessActor' && child == 'BusinessInterface';
                var VAL_153f66e7 = parent == 'BusinessActor' && child == 'BusinessRole';
                var VAL_7aad3f7d = parent == 'BusinessActor' && child == 'BusinessCollaboration';
                var VAL_6f667ad1 = parent == 'BusinessActor' && child == 'BusinessActor';
                var VAL_566d0c69 = parent == 'BusinessActor' && child == 'DataObject';
                var VAL_388b401d = parent == 'BusinessActor' && child == 'ApplicationService';
                var VAL_2bcec6a6 = parent == 'BusinessActor' && child == 'ApplicationFunction';
                var VAL_77a281fc = parent == 'BusinessActor' && child == 'ApplicationInteraction';
                var VAL_4912d525 = parent == 'BusinessActor' && child == 'ApplicationInterface';
                var VAL_2bfbffb2 = parent == 'BusinessActor' && child == 'ApplicationComponent';
                var VAL_765df79d = parent == 'BusinessActor' && child == 'ApplicationCollaboration';
                var VAL_151335cb = parent == 'BusinessActor' && child == 'Artifact';
                var VAL_4a7761b1 = parent == 'BusinessActor' && child == 'InfrastructureService';
                var VAL_3e850122 = parent == 'BusinessActor' && child == 'InfrastructureInterface';
                var VAL_27fde870 = parent == 'BusinessActor' && child == 'Node';
                var VAL_2b4c3c29 = parent == 'BusinessActor' && child == 'SystemSoftware';
                var VAL_5ac7aa18 = parent == 'BusinessActor' && child == 'Device';
                var VAL_4cdd2c73 = parent == 'BusinessActor' && child == 'CommunicationPath';
                var VAL_4abf3f0 = parent == 'BusinessActor' && child == 'Network';
                var VAL_4e4c3a38 = parent == 'BusinessActor' && child == 'Stakeholder';
                var VAL_293cde83 = parent == 'BusinessActor' && child == 'Driver';
                var VAL_c27d163 = parent == 'BusinessActor' && child == 'Assessment';
                var VAL_57c88764 = parent == 'BusinessActor' && child == 'Goal';
                var VAL_78faea5f = parent == 'BusinessActor' && child == 'Requirement';
                var VAL_37fdfb05 = parent == 'BusinessActor' && child == 'Constraint';
                var VAL_5e39850 = parent == 'BusinessActor' && child == 'Principle';
                var VAL_1603dc2f = parent == 'BusinessActor' && child == 'WorkPackage';
                var VAL_398474a2 = parent == 'BusinessActor' && child == 'Deliverable';
                var VAL_61799544 = parent == 'BusinessActor' && child == 'Plateau';
                var VAL_78c1a023 = parent == 'BusinessActor' && child == 'Gap';
                var VAL_70abf9b0 = parent == 'DataObject' && child == 'ArchimateElement';
                var VAL_6a10b263 = parent == 'DataObject' && child == 'Product';
                var VAL_476ec9d0 = parent == 'DataObject' && child == 'BusinessObject';
                var VAL_325bb9a6 = parent == 'DataObject' && child == 'Meaning';
                var VAL_1d12b024 = parent == 'DataObject' && child == 'Representation';
                var VAL_72fe8a4f = parent == 'DataObject' && child == 'BusinessService';
                var VAL_43effd89 = parent == 'DataObject' && child == 'BusinessProcess';
                var VAL_2c16fadb = parent == 'DataObject' && child == 'BusinessFunction';
                var VAL_248deced = parent == 'DataObject' && child == 'BusinessInteraction';
                var VAL_2227a6c1 = parent == 'DataObject' && child == 'BusinessEvent';
                var VAL_1e9804b9 = parent == 'DataObject' && child == 'Location';
                var VAL_543e593 = parent == 'DataObject' && child == 'BusinessInterface';
                var VAL_4e628b52 = parent == 'DataObject' && child == 'BusinessRole';
                var VAL_51ec2df1 = parent == 'DataObject' && child == 'BusinessCollaboration';
                var VAL_f8f56b9 = parent == 'DataObject' && child == 'BusinessActor';
                var VAL_15fa55a6 = parent == 'DataObject' && child == 'DataObject';
                var VAL_4f186450 = parent == 'DataObject' && child == 'ApplicationService';
                var VAL_7fab4be7 = parent == 'DataObject' && child == 'ApplicationFunction';
                var VAL_a64e035 = parent == 'DataObject' && child == 'ApplicationInteraction';
                var VAL_4d74c3ba = parent == 'DataObject' && child == 'ApplicationInterface';
                var VAL_41c204a0 = parent == 'DataObject' && child == 'ApplicationComponent';
                var VAL_64138b0c = parent == 'DataObject' && child == 'ApplicationCollaboration';
                var VAL_49dbaaf3 = parent == 'DataObject' && child == 'Artifact';
                var VAL_22d9c961 = parent == 'DataObject' && child == 'InfrastructureService';
                var VAL_736f3e9e = parent == 'DataObject' && child == 'InfrastructureInterface';
                var VAL_bdc8014 = parent == 'DataObject' && child == 'Node';
                var VAL_1f443fae = parent == 'DataObject' && child == 'SystemSoftware';
                var VAL_73ba6fe6 = parent == 'DataObject' && child == 'Device';
                var VAL_79ab34c1 = parent == 'DataObject' && child == 'CommunicationPath';
                var VAL_1698d7c0 = parent == 'DataObject' && child == 'Network';
                var VAL_281f23f2 = parent == 'DataObject' && child == 'Stakeholder';
                var VAL_87abc48 = parent == 'DataObject' && child == 'Driver';
                var VAL_28d79cba = parent == 'DataObject' && child == 'Assessment';
                var VAL_782168b7 = parent == 'DataObject' && child == 'Goal';
                var VAL_29f0c4f2 = parent == 'DataObject' && child == 'Requirement';
                var VAL_7435a578 = parent == 'DataObject' && child == 'Constraint';
                var VAL_6093d508 = parent == 'DataObject' && child == 'Principle';
                var VAL_13047d7d = parent == 'DataObject' && child == 'WorkPackage';
                var VAL_3c7cfcbb = parent == 'DataObject' && child == 'Deliverable';
                var VAL_65bb9029 = parent == 'DataObject' && child == 'Plateau';
                var VAL_1bfe3203 = parent == 'DataObject' && child == 'Gap';
                var VAL_2b214b94 = parent == 'ApplicationService' && child == 'ArchimateElement';
                var VAL_70e3f36f = parent == 'ApplicationService' && child == 'Product';
                var VAL_49601f82 = parent == 'ApplicationService' && child == 'BusinessObject';
                var VAL_23e44287 = parent == 'ApplicationService' && child == 'Meaning';
                var VAL_2b8d084 = parent == 'ApplicationService' && child == 'Representation';
                var VAL_6daf2337 = parent == 'ApplicationService' && child == 'BusinessService';
                var VAL_24fabd0f = parent == 'ApplicationService' && child == 'BusinessProcess';
                var VAL_250b236d = parent == 'ApplicationService' && child == 'BusinessFunction';
                var VAL_61f3fbb8 = parent == 'ApplicationService' && child == 'BusinessInteraction';
                var VAL_7551da2a = parent == 'ApplicationService' && child == 'BusinessEvent';
                var VAL_432034a = parent == 'ApplicationService' && child == 'Location';
                var VAL_78de58ea = parent == 'ApplicationService' && child == 'BusinessInterface';
                var VAL_60e5272 = parent == 'ApplicationService' && child == 'BusinessRole';
                var VAL_7d755813 = parent == 'ApplicationService' && child == 'BusinessCollaboration';
                var VAL_69c93ca4 = parent == 'ApplicationService' && child == 'BusinessActor';
                var VAL_63da207f = parent == 'ApplicationService' && child == 'DataObject';
                var VAL_173373b4 = parent == 'ApplicationService' && child == 'ApplicationService';
                var VAL_40d10481 = parent == 'ApplicationService' && child == 'ApplicationFunction';
                var VAL_60dd3c23 = parent == 'ApplicationService' && child == 'ApplicationInteraction';
                var VAL_52b6319f = parent == 'ApplicationService' && child == 'ApplicationInterface';
                var VAL_5e9456ae = parent == 'ApplicationService' && child == 'ApplicationComponent';
                var VAL_16a9a4f1 = parent == 'ApplicationService' && child == 'ApplicationCollaboration';
                var VAL_1f1cae23 = parent == 'ApplicationService' && child == 'Artifact';
                var VAL_7c455e96 = parent == 'ApplicationService' && child == 'InfrastructureService';
                var VAL_985696 = parent == 'ApplicationService' && child == 'InfrastructureInterface';
                var VAL_5bcde458 = parent == 'ApplicationService' && child == 'Node';
                var VAL_215a34b4 = parent == 'ApplicationService' && child == 'SystemSoftware';
                var VAL_77bd7fe7 = parent == 'ApplicationService' && child == 'Device';
                var VAL_35d3ab60 = parent == 'ApplicationService' && child == 'CommunicationPath';
                var VAL_10876a6 = parent == 'ApplicationService' && child == 'Network';
                var VAL_71870da7 = parent == 'ApplicationService' && child == 'Stakeholder';
                var VAL_6dd91637 = parent == 'ApplicationService' && child == 'Driver';
                var VAL_45792847 = parent == 'ApplicationService' && child == 'Assessment';
                var VAL_706cb08 = parent == 'ApplicationService' && child == 'Goal';
                var VAL_4e25147a = parent == 'ApplicationService' && child == 'Requirement';
                var VAL_6b68cb27 = parent == 'ApplicationService' && child == 'Constraint';
                var VAL_675ffd1d = parent == 'ApplicationService' && child == 'Principle';
                var VAL_56303475 = parent == 'ApplicationService' && child == 'WorkPackage';
                var VAL_30506c0d = parent == 'ApplicationService' && child == 'Deliverable';
                var VAL_1dcca8d3 = parent == 'ApplicationService' && child == 'Plateau';
                var VAL_5631962 = parent == 'ApplicationService' && child == 'Gap';
                var VAL_52a70627 = parent == 'ApplicationFunction' && child == 'ArchimateElement';
                var VAL_6124287a = parent == 'ApplicationFunction' && child == 'Product';
                var VAL_19569ebd = parent == 'ApplicationFunction' && child == 'BusinessObject';
                var VAL_4632cfc = parent == 'ApplicationFunction' && child == 'Meaning';
                var VAL_6e1f8469 = parent == 'ApplicationFunction' && child == 'Representation';
                var VAL_2e380628 = parent == 'ApplicationFunction' && child == 'BusinessService';
                var VAL_3b6c624 = parent == 'ApplicationFunction' && child == 'BusinessProcess';
                var VAL_1eaf1e62 = parent == 'ApplicationFunction' && child == 'BusinessFunction';
                var VAL_c81fd12 = parent == 'ApplicationFunction' && child == 'BusinessInteraction';
                var VAL_62e6a3ec = parent == 'ApplicationFunction' && child == 'BusinessEvent';
                var VAL_5754de72 = parent == 'ApplicationFunction' && child == 'Location';
                var VAL_31ee96f4 = parent == 'ApplicationFunction' && child == 'BusinessInterface';
                var VAL_320494b6 = parent == 'ApplicationFunction' && child == 'BusinessRole';
                var VAL_652ab8d9 = parent == 'ApplicationFunction' && child == 'BusinessCollaboration';
                var VAL_14fc5d40 = parent == 'ApplicationFunction' && child == 'BusinessActor';
                var VAL_51e0301d = parent == 'ApplicationFunction' && child == 'DataObject';
                var VAL_47d7bfb3 = parent == 'ApplicationFunction' && child == 'ApplicationService';
                var VAL_770b3be0 = parent == 'ApplicationFunction' && child == 'ApplicationFunction';
                var VAL_1eb6e1c = parent == 'ApplicationFunction' && child == 'ApplicationInteraction';
                var VAL_51dbd6e4 = parent == 'ApplicationFunction' && child == 'ApplicationInterface';
                var VAL_2b8bd14b = parent == 'ApplicationFunction' && child == 'ApplicationComponent';
                var VAL_5f13be1 = parent == 'ApplicationFunction' && child == 'ApplicationCollaboration';
                var VAL_5f303ecd = parent == 'ApplicationFunction' && child == 'Artifact';
                var VAL_50d3bf39 = parent == 'ApplicationFunction' && child == 'InfrastructureService';
                var VAL_25a73de1 = parent == 'ApplicationFunction' && child == 'InfrastructureInterface';
                var VAL_29852487 = parent == 'ApplicationFunction' && child == 'Node';
                var VAL_771db12c = parent == 'ApplicationFunction' && child == 'SystemSoftware';
                var VAL_3afae281 = parent == 'ApplicationFunction' && child == 'Device';
                var VAL_26ae880a = parent == 'ApplicationFunction' && child == 'CommunicationPath';
                var VAL_260f2144 = parent == 'ApplicationFunction' && child == 'Network';
                var VAL_3c017078 = parent == 'ApplicationFunction' && child == 'Stakeholder';
                var VAL_51827393 = parent == 'ApplicationFunction' && child == 'Driver';
                var VAL_3be4f71 = parent == 'ApplicationFunction' && child == 'Assessment';
                var VAL_5c645b43 = parent == 'ApplicationFunction' && child == 'Goal';
                var VAL_6bd16207 = parent == 'ApplicationFunction' && child == 'Requirement';
                var VAL_298d9a05 = parent == 'ApplicationFunction' && child == 'Constraint';
                var VAL_58399d82 = parent == 'ApplicationFunction' && child == 'Principle';
                var VAL_26f96b85 = parent == 'ApplicationFunction' && child == 'WorkPackage';
                var VAL_46d8f407 = parent == 'ApplicationFunction' && child == 'Deliverable';
                var VAL_3c0036b = parent == 'ApplicationFunction' && child == 'Plateau';
                var VAL_17814b1c = parent == 'ApplicationFunction' && child == 'Gap';
                var VAL_7ac9af2a = parent == 'ApplicationInteraction' && child == 'ArchimateElement';
                var VAL_7bb004b8 = parent == 'ApplicationInteraction' && child == 'Product';
                var VAL_78e89bfe = parent == 'ApplicationInteraction' && child == 'BusinessObject';
                var VAL_652ce654 = parent == 'ApplicationInteraction' && child == 'Meaning';
                var VAL_522ba524 = parent == 'ApplicationInteraction' && child == 'Representation';
                var VAL_29c5ee1d = parent == 'ApplicationInteraction' && child == 'BusinessService';
                var VAL_15cea7b0 = parent == 'ApplicationInteraction' && child == 'BusinessProcess';
                var VAL_17d2ed1b = parent == 'ApplicationInteraction' && child == 'BusinessFunction';
                var VAL_185f7840 = parent == 'ApplicationInteraction' && child == 'BusinessInteraction';
                var VAL_1e6cc850 = parent == 'ApplicationInteraction' && child == 'BusinessEvent';
                var VAL_7e7f0f0a = parent == 'ApplicationInteraction' && child == 'Location';
                var VAL_7ec58feb = parent == 'ApplicationInteraction' && child == 'BusinessInterface';
                var VAL_1dbb650b = parent == 'ApplicationInteraction' && child == 'BusinessRole';
                var VAL_656d10a4 = parent == 'ApplicationInteraction' && child == 'BusinessCollaboration';
                var VAL_63ec445c = parent == 'ApplicationInteraction' && child == 'BusinessActor';
                var VAL_3104351d = parent == 'ApplicationInteraction' && child == 'DataObject';
                var VAL_77d18d0b = parent == 'ApplicationInteraction' && child == 'ApplicationService';
                var VAL_7a344b65 = parent == 'ApplicationInteraction' && child == 'ApplicationFunction';
                var VAL_7b7b3edb = parent == 'ApplicationInteraction' && child == 'ApplicationInteraction';
                var VAL_6b474074 = parent == 'ApplicationInteraction' && child == 'ApplicationInterface';
                var VAL_108531c2 = parent == 'ApplicationInteraction' && child == 'ApplicationComponent';
                var VAL_48b22fd4 = parent == 'ApplicationInteraction' && child == 'ApplicationCollaboration';
                var VAL_6a9d5dff = parent == 'ApplicationInteraction' && child == 'Artifact';
                var VAL_3b08f438 = parent == 'ApplicationInteraction' && child == 'InfrastructureService';
                var VAL_2bac9ba = parent == 'ApplicationInteraction' && child == 'InfrastructureInterface';
                var VAL_5b2f8ab6 = parent == 'ApplicationInteraction' && child == 'Node';
                var VAL_5bdd5689 = parent == 'ApplicationInteraction' && child == 'SystemSoftware';
                var VAL_2788d0fe = parent == 'ApplicationInteraction' && child == 'Device';
                var VAL_73ab3aac = parent == 'ApplicationInteraction' && child == 'CommunicationPath';
                var VAL_54f66455 = parent == 'ApplicationInteraction' && child == 'Network';
                var VAL_65ae095c = parent == 'ApplicationInteraction' && child == 'Stakeholder';
                var VAL_4c03a37 = parent == 'ApplicationInteraction' && child == 'Driver';
                var VAL_2e140e59 = parent == 'ApplicationInteraction' && child == 'Assessment';
                var VAL_49a71302 = parent == 'ApplicationInteraction' && child == 'Goal';
                var VAL_5cd61783 = parent == 'ApplicationInteraction' && child == 'Requirement';
                var VAL_59429fac = parent == 'ApplicationInteraction' && child == 'Constraint';
                var VAL_57aa341b = parent == 'ApplicationInteraction' && child == 'Principle';
                var VAL_26e412ef = parent == 'ApplicationInteraction' && child == 'WorkPackage';
                var VAL_4ae263bf = parent == 'ApplicationInteraction' && child == 'Deliverable';
                var VAL_7103ab0 = parent == 'ApplicationInteraction' && child == 'Plateau';
                var VAL_19ccca5 = parent == 'ApplicationInteraction' && child == 'Gap';
                var VAL_769d513 = parent == 'ApplicationInterface' && child == 'ArchimateElement';
                var VAL_5e4fa1da = parent == 'ApplicationInterface' && child == 'Product';
                var VAL_588cd519 = parent == 'ApplicationInterface' && child == 'BusinessObject';
                var VAL_3f92c349 = parent == 'ApplicationInterface' && child == 'Meaning';
                var VAL_769a58e5 = parent == 'ApplicationInterface' && child == 'Representation';
                var VAL_55f8669d = parent == 'ApplicationInterface' && child == 'BusinessService';
                var VAL_6be25526 = parent == 'ApplicationInterface' && child == 'BusinessProcess';
                var VAL_42435b98 = parent == 'ApplicationInterface' && child == 'BusinessFunction';
                var VAL_66ba7e45 = parent == 'ApplicationInterface' && child == 'BusinessInteraction';
                var VAL_70e02081 = parent == 'ApplicationInterface' && child == 'BusinessEvent';
                var VAL_9d200de = parent == 'ApplicationInterface' && child == 'Location';
                var VAL_511505e7 = parent == 'ApplicationInterface' && child == 'BusinessInterface';
                var VAL_646811d6 = parent == 'ApplicationInterface' && child == 'BusinessRole';
                var VAL_15fdd1f2 = parent == 'ApplicationInterface' && child == 'BusinessCollaboration';
                var VAL_cb0f763 = parent == 'ApplicationInterface' && child == 'BusinessActor';
                var VAL_7573e12f = parent == 'ApplicationInterface' && child == 'DataObject';
                var VAL_51b1a8f6 = parent == 'ApplicationInterface' && child == 'ApplicationService';
                var VAL_2a389173 = parent == 'ApplicationInterface' && child == 'ApplicationFunction';
                var VAL_213860b8 = parent == 'ApplicationInterface' && child == 'ApplicationInteraction';
                var VAL_4ba89729 = parent == 'ApplicationInterface' && child == 'ApplicationInterface';
                var VAL_178270b2 = parent == 'ApplicationInterface' && child == 'ApplicationComponent';
                var VAL_795fd838 = parent == 'ApplicationInterface' && child == 'ApplicationCollaboration';
                var VAL_1b005a0b = parent == 'ApplicationInterface' && child == 'Artifact';
                var VAL_141e879d = parent == 'ApplicationInterface' && child == 'InfrastructureService';
                var VAL_109d724c = parent == 'ApplicationInterface' && child == 'InfrastructureInterface';
                var VAL_1704f67f = parent == 'ApplicationInterface' && child == 'Node';
                var VAL_e4d2696 = parent == 'ApplicationInterface' && child == 'SystemSoftware';
                var VAL_6e0f7aad = parent == 'ApplicationInterface' && child == 'Device';
                var VAL_15fb7a32 = parent == 'ApplicationInterface' && child == 'CommunicationPath';
                var VAL_257cc1fc = parent == 'ApplicationInterface' && child == 'Network';
                var VAL_42e22a53 = parent == 'ApplicationInterface' && child == 'Stakeholder';
                var VAL_57adfab0 = parent == 'ApplicationInterface' && child == 'Driver';
                var VAL_1949309d = parent == 'ApplicationInterface' && child == 'Assessment';
                var VAL_5af97169 = parent == 'ApplicationInterface' && child == 'Goal';
                var VAL_99a78d7 = parent == 'ApplicationInterface' && child == 'Requirement';
                var VAL_31da6b2e = parent == 'ApplicationInterface' && child == 'Constraint';
                var VAL_61c76850 = parent == 'ApplicationInterface' && child == 'Principle';
                var VAL_70242f38 = parent == 'ApplicationInterface' && child == 'WorkPackage';
                var VAL_2a22ad2b = parent == 'ApplicationInterface' && child == 'Deliverable';
                var VAL_48c3205a = parent == 'ApplicationInterface' && child == 'Plateau';
                var VAL_121c54fa = parent == 'ApplicationInterface' && child == 'Gap';
                var VAL_4390f46e = parent == 'ApplicationComponent' && child == 'ArchimateElement';
                var VAL_7c6442c2 = parent == 'ApplicationComponent' && child == 'Product';
                var VAL_2d746ce4 = parent == 'ApplicationComponent' && child == 'BusinessObject';
                var VAL_5dbf5634 = parent == 'ApplicationComponent' && child == 'Meaning';
                var VAL_1948ea69 = parent == 'ApplicationComponent' && child == 'Representation';
                var VAL_47e4d9d0 = parent == 'ApplicationComponent' && child == 'BusinessService';
                var VAL_49798e84 = parent == 'ApplicationComponent' && child == 'BusinessProcess';
                var VAL_6ed06f69 = parent == 'ApplicationComponent' && child == 'BusinessFunction';
                var VAL_3015db78 = parent == 'ApplicationComponent' && child == 'BusinessInteraction';
                var VAL_515ebef3 = parent == 'ApplicationComponent' && child == 'BusinessEvent';
                var VAL_545607f2 = parent == 'ApplicationComponent' && child == 'Location';
                var VAL_39109136 = parent == 'ApplicationComponent' && child == 'BusinessInterface';
                var VAL_27c04377 = parent == 'ApplicationComponent' && child == 'BusinessRole';
                var VAL_34dc85a = parent == 'ApplicationComponent' && child == 'BusinessCollaboration';
                var VAL_67403656 = parent == 'ApplicationComponent' && child == 'BusinessActor';
                var VAL_5a6482a9 = parent == 'ApplicationComponent' && child == 'DataObject';
                var VAL_7f9ab969 = parent == 'ApplicationComponent' && child == 'ApplicationService';
                var VAL_12f8b1d8 = parent == 'ApplicationComponent' && child == 'ApplicationFunction';
                var VAL_746cd757 = parent == 'ApplicationComponent' && child == 'ApplicationInteraction';
                var VAL_ae372b9 = parent == 'ApplicationComponent' && child == 'ApplicationInterface';
                var VAL_2098d37d = parent == 'ApplicationComponent' && child == 'ApplicationComponent';
                var VAL_77b9d0c7 = parent == 'ApplicationComponent' && child == 'ApplicationCollaboration';
                var VAL_65fd6708 = parent == 'ApplicationComponent' && child == 'Artifact';
                var VAL_749ab7b4 = parent == 'ApplicationComponent' && child == 'InfrastructureService';
                var VAL_127f9161 = parent == 'ApplicationComponent' && child == 'InfrastructureInterface';
                var VAL_2bf94401 = parent == 'ApplicationComponent' && child == 'Node';
                var VAL_2532b351 = parent == 'ApplicationComponent' && child == 'SystemSoftware';
                var VAL_4349754 = parent == 'ApplicationComponent' && child == 'Device';
                var VAL_6a2eea2a = parent == 'ApplicationComponent' && child == 'CommunicationPath';
                var VAL_b967222 = parent == 'ApplicationComponent' && child == 'Network';
                var VAL_3b0ee03a = parent == 'ApplicationComponent' && child == 'Stakeholder';
                var VAL_1ba05e38 = parent == 'ApplicationComponent' && child == 'Driver';
                var VAL_6c298dc = parent == 'ApplicationComponent' && child == 'Assessment';
                var VAL_3e7dfd44 = parent == 'ApplicationComponent' && child == 'Goal';
                var VAL_723ed581 = parent == 'ApplicationComponent' && child == 'Requirement';
                var VAL_6b760460 = parent == 'ApplicationComponent' && child == 'Constraint';
                var VAL_796065aa = parent == 'ApplicationComponent' && child == 'Principle';
                var VAL_28a6301f = parent == 'ApplicationComponent' && child == 'WorkPackage';
                var VAL_2c306a57 = parent == 'ApplicationComponent' && child == 'Deliverable';
                var VAL_773e2eb5 = parent == 'ApplicationComponent' && child == 'Plateau';
                var VAL_d8948cd = parent == 'ApplicationComponent' && child == 'Gap';
                var VAL_1436a7ab = parent == 'ApplicationCollaboration' && child == 'ArchimateElement';
                var VAL_3b7b05a8 = parent == 'ApplicationCollaboration' && child == 'Product';
                var VAL_3d36dff4 = parent == 'ApplicationCollaboration' && child == 'BusinessObject';
                var VAL_7abe27bf = parent == 'ApplicationCollaboration' && child == 'Meaning';
                var VAL_5b94ccbc = parent == 'ApplicationCollaboration' && child == 'Representation';
                var VAL_38a1c423 = parent == 'ApplicationCollaboration' && child == 'BusinessService';
                var VAL_336365bc = parent == 'ApplicationCollaboration' && child == 'BusinessProcess';
                var VAL_38eb2fb0 = parent == 'ApplicationCollaboration' && child == 'BusinessFunction';
                var VAL_4567e53d = parent == 'ApplicationCollaboration' && child == 'BusinessInteraction';
                var VAL_7351a16e = parent == 'ApplicationCollaboration' && child == 'BusinessEvent';
                var VAL_5bb7643d = parent == 'ApplicationCollaboration' && child == 'Location';
                var VAL_3ac04654 = parent == 'ApplicationCollaboration' && child == 'BusinessInterface';
                var VAL_4074023c = parent == 'ApplicationCollaboration' && child == 'BusinessRole';
                var VAL_3ed0918d = parent == 'ApplicationCollaboration' && child == 'BusinessCollaboration';
                var VAL_5e268ce6 = parent == 'ApplicationCollaboration' && child == 'BusinessActor';
                var VAL_66ec9390 = parent == 'ApplicationCollaboration' && child == 'DataObject';
                var VAL_6e91893 = parent == 'ApplicationCollaboration' && child == 'ApplicationService';
                var VAL_3c0fbd3a = parent == 'ApplicationCollaboration' && child == 'ApplicationFunction';
                var VAL_562457e1 = parent == 'ApplicationCollaboration' && child == 'ApplicationInteraction';
                var VAL_54562ea6 = parent == 'ApplicationCollaboration' && child == 'ApplicationInterface';
                var VAL_1a35993f = parent == 'ApplicationCollaboration' && child == 'ApplicationComponent';
                var VAL_5b12012e = parent == 'ApplicationCollaboration' && child == 'ApplicationCollaboration';
                var VAL_2f7dcef2 = parent == 'ApplicationCollaboration' && child == 'Artifact';
                var VAL_4a3be6a5 = parent == 'ApplicationCollaboration' && child == 'InfrastructureService';
                var VAL_7cf162bc = parent == 'ApplicationCollaboration' && child == 'InfrastructureInterface';
                var VAL_3721177d = parent == 'ApplicationCollaboration' && child == 'Node';
                var VAL_766a4535 = parent == 'ApplicationCollaboration' && child == 'SystemSoftware';
                var VAL_63718b93 = parent == 'ApplicationCollaboration' && child == 'Device';
                var VAL_14e2e1c3 = parent == 'ApplicationCollaboration' && child == 'CommunicationPath';
                var VAL_2b4786dd = parent == 'ApplicationCollaboration' && child == 'Network';
                var VAL_f202d6d = parent == 'ApplicationCollaboration' && child == 'Stakeholder';
                var VAL_60e21209 = parent == 'ApplicationCollaboration' && child == 'Driver';
                var VAL_630d1b2f = parent == 'ApplicationCollaboration' && child == 'Assessment';
                var VAL_746b18fd = parent == 'ApplicationCollaboration' && child == 'Goal';
                var VAL_7a2e0858 = parent == 'ApplicationCollaboration' && child == 'Requirement';
                var VAL_aac3f4e = parent == 'ApplicationCollaboration' && child == 'Constraint';
                var VAL_1f38957 = parent == 'ApplicationCollaboration' && child == 'Principle';
                var VAL_2df3c564 = parent == 'ApplicationCollaboration' && child == 'WorkPackage';
                var VAL_2715644a = parent == 'ApplicationCollaboration' && child == 'Deliverable';
                var VAL_4c2869a9 = parent == 'ApplicationCollaboration' && child == 'Plateau';
                var VAL_518cf84a = parent == 'ApplicationCollaboration' && child == 'Gap';
                var VAL_62e7dffa = parent == 'Artifact' && child == 'ArchimateElement';
                var VAL_6edcd0d8 = parent == 'Artifact' && child == 'Product';
                var VAL_6136998b = parent == 'Artifact' && child == 'BusinessObject';
                var VAL_57ce634f = parent == 'Artifact' && child == 'Meaning';
                var VAL_b8a7e43 = parent == 'Artifact' && child == 'Representation';
                var VAL_35835fa = parent == 'Artifact' && child == 'BusinessService';
                var VAL_56f71edb = parent == 'Artifact' && child == 'BusinessProcess';
                var VAL_7207cb51 = parent == 'Artifact' && child == 'BusinessFunction';
                var VAL_2a27cb34 = parent == 'Artifact' && child == 'BusinessInteraction';
                var VAL_6892cc6f = parent == 'Artifact' && child == 'BusinessEvent';
                var VAL_6fd1660 = parent == 'Artifact' && child == 'Location';
                var VAL_4a6c18ad = parent == 'Artifact' && child == 'BusinessInterface';
                var VAL_5e8604bf = parent == 'Artifact' && child == 'BusinessRole';
                var VAL_20095ab4 = parent == 'Artifact' && child == 'BusinessCollaboration';
                var VAL_4e2916c3 = parent == 'Artifact' && child == 'BusinessActor';
                var VAL_64aad6db = parent == 'Artifact' && child == 'DataObject';
                var VAL_ae7950d = parent == 'Artifact' && child == 'ApplicationService';
                var VAL_60d1b21f = parent == 'Artifact' && child == 'ApplicationFunction';
                var VAL_66c83fc8 = parent == 'Artifact' && child == 'ApplicationInteraction';
                var VAL_546621c4 = parent == 'Artifact' && child == 'ApplicationInterface';
                var VAL_621f89b8 = parent == 'Artifact' && child == 'ApplicationComponent';
                var VAL_f339eae = parent == 'Artifact' && child == 'ApplicationCollaboration';
                var VAL_2822c6ff = parent == 'Artifact' && child == 'Artifact';
                var VAL_4dafba3e = parent == 'Artifact' && child == 'InfrastructureService';
                var VAL_53e3a87a = parent == 'Artifact' && child == 'InfrastructureInterface';
                var VAL_40368a46 = parent == 'Artifact' && child == 'Node';
                var VAL_7e9da981 = parent == 'Artifact' && child == 'SystemSoftware';
                var VAL_4ed38226 = parent == 'Artifact' && child == 'Device';
                var VAL_3d43fe = parent == 'Artifact' && child == 'CommunicationPath';
                var VAL_74ad8d05 = parent == 'Artifact' && child == 'Network';
                var VAL_676ff3b0 = parent == 'Artifact' && child == 'Stakeholder';
                var VAL_35ff8fc9 = parent == 'Artifact' && child == 'Driver';
                var VAL_5fb7183b = parent == 'Artifact' && child == 'Assessment';
                var VAL_476a736d = parent == 'Artifact' && child == 'Goal';
                var VAL_5f80fa43 = parent == 'Artifact' && child == 'Requirement';
                var VAL_16c8b7bd = parent == 'Artifact' && child == 'Constraint';
                var VAL_7159139f = parent == 'Artifact' && child == 'Principle';
                var VAL_65bcf7c2 = parent == 'Artifact' && child == 'WorkPackage';
                var VAL_3db64bd4 = parent == 'Artifact' && child == 'Deliverable';
                var VAL_6e106680 = parent == 'Artifact' && child == 'Plateau';
                var VAL_576c5536 = parent == 'Artifact' && child == 'Gap';
                var VAL_55ecbafe = parent == 'InfrastructureService' && child == 'ArchimateElement';
                var VAL_5a8ba37c = parent == 'InfrastructureService' && child == 'Product';
                var VAL_37c2eacb = parent == 'InfrastructureService' && child == 'BusinessObject';
                var VAL_232cce0 = parent == 'InfrastructureService' && child == 'Meaning';
                var VAL_32b9bd12 = parent == 'InfrastructureService' && child == 'Representation';
                var VAL_352e787a = parent == 'InfrastructureService' && child == 'BusinessService';
                var VAL_159a48a6 = parent == 'InfrastructureService' && child == 'BusinessProcess';
                var VAL_15bc339 = parent == 'InfrastructureService' && child == 'BusinessFunction';
                var VAL_7e75bf2d = parent == 'InfrastructureService' && child == 'BusinessInteraction';
                var VAL_385ef531 = parent == 'InfrastructureService' && child == 'BusinessEvent';
                var VAL_7fc645e4 = parent == 'InfrastructureService' && child == 'Location';
                var VAL_205b132e = parent == 'InfrastructureService' && child == 'BusinessInterface';
                var VAL_73044cdf = parent == 'InfrastructureService' && child == 'BusinessRole';
                var VAL_3cbcd8f3 = parent == 'InfrastructureService' && child == 'BusinessCollaboration';
                var VAL_719843e5 = parent == 'InfrastructureService' && child == 'BusinessActor';
                var VAL_9a2ec9b = parent == 'InfrastructureService' && child == 'DataObject';
                var VAL_58112bc4 = parent == 'InfrastructureService' && child == 'ApplicationService';
                var VAL_2301b75 = parent == 'InfrastructureService' && child == 'ApplicationFunction';
                var VAL_3104f7bd = parent == 'InfrastructureService' && child == 'ApplicationInteraction';
                var VAL_2f5c1332 = parent == 'InfrastructureService' && child == 'ApplicationInterface';
                var VAL_7ec25216 = parent == 'InfrastructureService' && child == 'ApplicationComponent';
                var VAL_7cab1508 = parent == 'InfrastructureService' && child == 'ApplicationCollaboration';
                var VAL_6a84bc3f = parent == 'InfrastructureService' && child == 'Artifact';
                var VAL_258ee7de = parent == 'InfrastructureService' && child == 'InfrastructureService';
                var VAL_4930539b = parent == 'InfrastructureService' && child == 'InfrastructureInterface';
                var VAL_6d171ce0 = parent == 'InfrastructureService' && child == 'Node';
                var VAL_22bd2039 = parent == 'InfrastructureService' && child == 'SystemSoftware';
                var VAL_705f83a7 = parent == 'InfrastructureService' && child == 'Device';
                var VAL_3bb8aabc = parent == 'InfrastructureService' && child == 'CommunicationPath';
                var VAL_6e1d4137 = parent == 'InfrastructureService' && child == 'Network';
                var VAL_256a1825 = parent == 'InfrastructureService' && child == 'Stakeholder';
                var VAL_29a4f594 = parent == 'InfrastructureService' && child == 'Driver';
                var VAL_57b75756 = parent == 'InfrastructureService' && child == 'Assessment';
                var VAL_5327a06e = parent == 'InfrastructureService' && child == 'Goal';
                var VAL_2679311f = parent == 'InfrastructureService' && child == 'Requirement';
                var VAL_287f7811 = parent == 'InfrastructureService' && child == 'Constraint';
                var VAL_451f87af = parent == 'InfrastructureService' && child == 'Principle';
                var VAL_2b556bb2 = parent == 'InfrastructureService' && child == 'WorkPackage';
                var VAL_44cb460e = parent == 'InfrastructureService' && child == 'Deliverable';
                var VAL_17271176 = parent == 'InfrastructureService' && child == 'Plateau';
                var VAL_2e3cdec2 = parent == 'InfrastructureService' && child == 'Gap';
                var VAL_2e34384c = parent == 'InfrastructureInterface' && child == 'ArchimateElement';
                var VAL_3051e0b2 = parent == 'InfrastructureInterface' && child == 'Product';
                var VAL_1f52eb6f = parent == 'InfrastructureInterface' && child == 'BusinessObject';
                var VAL_57d0fc89 = parent == 'InfrastructureInterface' && child == 'Meaning';
                var VAL_58294867 = parent == 'InfrastructureInterface' && child == 'Representation';
                var VAL_67c277a0 = parent == 'InfrastructureInterface' && child == 'BusinessService';
                var VAL_6fc3e1a4 = parent == 'InfrastructureInterface' && child == 'BusinessProcess';
                var VAL_3fa76c61 = parent == 'InfrastructureInterface' && child == 'BusinessFunction';
                var VAL_2d5f7182 = parent == 'InfrastructureInterface' && child == 'BusinessInteraction';
                var VAL_59546cfe = parent == 'InfrastructureInterface' && child == 'BusinessEvent';
                var VAL_29ea78b1 = parent == 'InfrastructureInterface' && child == 'Location';
                var VAL_2d2acd89 = parent == 'InfrastructureInterface' && child == 'BusinessInterface';
                var VAL_7baf6acf = parent == 'InfrastructureInterface' && child == 'BusinessRole';
                var VAL_1e6dad8 = parent == 'InfrastructureInterface' && child == 'BusinessCollaboration';
                var VAL_7b3315a5 = parent == 'InfrastructureInterface' && child == 'BusinessActor';
                var VAL_8ed9cf = parent == 'InfrastructureInterface' && child == 'DataObject';
                var VAL_f72203 = parent == 'InfrastructureInterface' && child == 'ApplicationService';
                var VAL_377008df = parent == 'InfrastructureInterface' && child == 'ApplicationFunction';
                var VAL_540dbda9 = parent == 'InfrastructureInterface' && child == 'ApplicationInteraction';
                var VAL_22bb5646 = parent == 'InfrastructureInterface' && child == 'ApplicationInterface';
                var VAL_1be59f28 = parent == 'InfrastructureInterface' && child == 'ApplicationComponent';
                var VAL_2ce45a7b = parent == 'InfrastructureInterface' && child == 'ApplicationCollaboration';
                var VAL_153d4abb = parent == 'InfrastructureInterface' && child == 'Artifact';
                var VAL_6d4c273c = parent == 'InfrastructureInterface' && child == 'InfrastructureService';
                var VAL_5a67e962 = parent == 'InfrastructureInterface' && child == 'InfrastructureInterface';
                var VAL_545e57d7 = parent == 'InfrastructureInterface' && child == 'Node';
                var VAL_2bc9a775 = parent == 'InfrastructureInterface' && child == 'SystemSoftware';
                var VAL_27b000f7 = parent == 'InfrastructureInterface' && child == 'Device';
                var VAL_42f9c19a = parent == 'InfrastructureInterface' && child == 'CommunicationPath';
                var VAL_64bfd6fd = parent == 'InfrastructureInterface' && child == 'Network';
                var VAL_2ab2710 = parent == 'InfrastructureInterface' && child == 'Stakeholder';
                var VAL_253b380a = parent == 'InfrastructureInterface' && child == 'Driver';
                var VAL_29c2c826 = parent == 'InfrastructureInterface' && child == 'Assessment';
                var VAL_3350ebdd = parent == 'InfrastructureInterface' && child == 'Goal';
                var VAL_6818d900 = parent == 'InfrastructureInterface' && child == 'Requirement';
                var VAL_149f5761 = parent == 'InfrastructureInterface' && child == 'Constraint';
                var VAL_2ba33e2c = parent == 'InfrastructureInterface' && child == 'Principle';
                var VAL_1f193686 = parent == 'InfrastructureInterface' && child == 'WorkPackage';
                var VAL_31e72cbc = parent == 'InfrastructureInterface' && child == 'Deliverable';
                var VAL_5fad41be = parent == 'InfrastructureInterface' && child == 'Plateau';
                var VAL_6dcd5639 = parent == 'InfrastructureInterface' && child == 'Gap';
                var VAL_3b36e000 = parent == 'Node' && child == 'ArchimateElement';
                var VAL_333cb916 = parent == 'Node' && child == 'Product';
                var VAL_629ae7e = parent == 'Node' && child == 'BusinessObject';
                var VAL_1d25c1c = parent == 'Node' && child == 'Meaning';
                var VAL_de88ac6 = parent == 'Node' && child == 'Representation';
                var VAL_5bca7664 = parent == 'Node' && child == 'BusinessService';
                var VAL_105b693d = parent == 'Node' && child == 'BusinessProcess';
                var VAL_3fae596 = parent == 'Node' && child == 'BusinessFunction';
                var VAL_4a0df195 = parent == 'Node' && child == 'BusinessInteraction';
                var VAL_42fcc7e6 = parent == 'Node' && child == 'BusinessEvent';
                var VAL_9255c05 = parent == 'Node' && child == 'Location';
                var VAL_5da7cee2 = parent == 'Node' && child == 'BusinessInterface';
                var VAL_78830d9a = parent == 'Node' && child == 'BusinessRole';
                var VAL_5ce4369b = parent == 'Node' && child == 'BusinessCollaboration';
                var VAL_7f829c76 = parent == 'Node' && child == 'BusinessActor';
                var VAL_1cb19dba = parent == 'Node' && child == 'DataObject';
                var VAL_7c3ebc6b = parent == 'Node' && child == 'ApplicationService';
                var VAL_1931d99 = parent == 'Node' && child == 'ApplicationFunction';
                var VAL_6a9950f1 = parent == 'Node' && child == 'ApplicationInteraction';
                var VAL_7ad54c55 = parent == 'Node' && child == 'ApplicationInterface';
                var VAL_73017a80 = parent == 'Node' && child == 'ApplicationComponent';
                var VAL_6ae7deac = parent == 'Node' && child == 'ApplicationCollaboration';
                var VAL_4a5905d9 = parent == 'Node' && child == 'Artifact';
                var VAL_1a3e5f23 = parent == 'Node' && child == 'InfrastructureService';
                var VAL_6293e39e = parent == 'Node' && child == 'InfrastructureInterface';
                var VAL_365553de = parent == 'Node' && child == 'Node';
                var VAL_34a0ef00 = parent == 'Node' && child == 'SystemSoftware';
                var VAL_5c0f79f0 = parent == 'Node' && child == 'Device';
                var VAL_21fdfefc = parent == 'Node' && child == 'CommunicationPath';
                var VAL_3daa82be = parent == 'Node' && child == 'Network';
                var VAL_ec1b2e4 = parent == 'Node' && child == 'Stakeholder';
                var VAL_29a69a35 = parent == 'Node' && child == 'Driver';
                var VAL_67e28be3 = parent == 'Node' && child == 'Assessment';
                var VAL_e344ad3 = parent == 'Node' && child == 'Goal';
                var VAL_de18f63 = parent == 'Node' && child == 'Requirement';
                var VAL_108bdbd8 = parent == 'Node' && child == 'Constraint';
                var VAL_6345e7b9 = parent == 'Node' && child == 'Principle';
                var VAL_4f8b4bd0 = parent == 'Node' && child == 'WorkPackage';
                var VAL_4e904fd5 = parent == 'Node' && child == 'Deliverable';
                var VAL_b18c4 = parent == 'Node' && child == 'Plateau';
                var VAL_4cbf4f53 = parent == 'Node' && child == 'Gap';
                var VAL_597f48df = parent == 'SystemSoftware' && child == 'ArchimateElement';
                var VAL_15dd5ac2 = parent == 'SystemSoftware' && child == 'Product';
                var VAL_4d48bd85 = parent == 'SystemSoftware' && child == 'BusinessObject';
                var VAL_7bbbb6a8 = parent == 'SystemSoftware' && child == 'Meaning';
                var VAL_58a120b0 = parent == 'SystemSoftware' && child == 'Representation';
                var VAL_27d57a2c = parent == 'SystemSoftware' && child == 'BusinessService';
                var VAL_2ff95fc6 = parent == 'SystemSoftware' && child == 'BusinessProcess';
                var VAL_9d1a267 = parent == 'SystemSoftware' && child == 'BusinessFunction';
                var VAL_58a4a74d = parent == 'SystemSoftware' && child == 'BusinessInteraction';
                var VAL_54aca26f = parent == 'SystemSoftware' && child == 'BusinessEvent';
                var VAL_314ed053 = parent == 'SystemSoftware' && child == 'Location';
                var VAL_35088e87 = parent == 'SystemSoftware' && child == 'BusinessInterface';
                var VAL_486bc9a4 = parent == 'SystemSoftware' && child == 'BusinessRole';
                var VAL_7965a51c = parent == 'SystemSoftware' && child == 'BusinessCollaboration';
                var VAL_3eee3e2b = parent == 'SystemSoftware' && child == 'BusinessActor';
                var VAL_4f63e3c7 = parent == 'SystemSoftware' && child == 'DataObject';
                var VAL_59532566 = parent == 'SystemSoftware' && child == 'ApplicationService';
                var VAL_dca2615 = parent == 'SystemSoftware' && child == 'ApplicationFunction';
                var VAL_421a4ee1 = parent == 'SystemSoftware' && child == 'ApplicationInteraction';
                var VAL_1237e0be = parent == 'SystemSoftware' && child == 'ApplicationInterface';
                var VAL_528f8f8b = parent == 'SystemSoftware' && child == 'ApplicationComponent';
                var VAL_ea9e141 = parent == 'SystemSoftware' && child == 'ApplicationCollaboration';
                var VAL_1e54cb33 = parent == 'SystemSoftware' && child == 'Artifact';
                var VAL_33cbfa57 = parent == 'SystemSoftware' && child == 'InfrastructureService';
                var VAL_1d96d872 = parent == 'SystemSoftware' && child == 'InfrastructureInterface';
                var VAL_5c748168 = parent == 'SystemSoftware' && child == 'Node';
                var VAL_6441c486 = parent == 'SystemSoftware' && child == 'SystemSoftware';
                var VAL_834831b = parent == 'SystemSoftware' && child == 'Device';
                var VAL_234a8f27 = parent == 'SystemSoftware' && child == 'CommunicationPath';
                var VAL_5b4d25e7 = parent == 'SystemSoftware' && child == 'Network';
                var VAL_31c2affc = parent == 'SystemSoftware' && child == 'Stakeholder';
                var VAL_1dc2de84 = parent == 'SystemSoftware' && child == 'Driver';
                var VAL_6a0659ac = parent == 'SystemSoftware' && child == 'Assessment';
                var VAL_58d63b16 = parent == 'SystemSoftware' && child == 'Goal';
                var VAL_7c4fc2bf = parent == 'SystemSoftware' && child == 'Requirement';
                var VAL_7772054c = parent == 'SystemSoftware' && child == 'Constraint';
                var VAL_2f61f937 = parent == 'SystemSoftware' && child == 'Principle';
                var VAL_46866946 = parent == 'SystemSoftware' && child == 'WorkPackage';
                var VAL_44de0113 = parent == 'SystemSoftware' && child == 'Deliverable';
                var VAL_236134a1 = parent == 'SystemSoftware' && child == 'Plateau';
                var VAL_369c9bb = parent == 'SystemSoftware' && child == 'Gap';
                var VAL_76d05cc9 = parent == 'Device' && child == 'ArchimateElement';
                var VAL_42b21d99 = parent == 'Device' && child == 'Product';
                var VAL_68dcfd52 = parent == 'Device' && child == 'BusinessObject';
                var VAL_25b5c5e3 = parent == 'Device' && child == 'Meaning';
                var VAL_5177e388 = parent == 'Device' && child == 'Representation';
                var VAL_37b72ea = parent == 'Device' && child == 'BusinessService';
                var VAL_cc239ba = parent == 'Device' && child == 'BusinessProcess';
                var VAL_7d37f1c = parent == 'Device' && child == 'BusinessFunction';
                var VAL_69d6a7cd = parent == 'Device' && child == 'BusinessInteraction';
                var VAL_3162743f = parent == 'Device' && child == 'BusinessEvent';
                var VAL_2c708440 = parent == 'Device' && child == 'Location';
                var VAL_3047254d = parent == 'Device' && child == 'BusinessInterface';
                var VAL_6cf31447 = parent == 'Device' && child == 'BusinessRole';
                var VAL_4e92466a = parent == 'Device' && child == 'BusinessCollaboration';
                var VAL_66e8997c = parent == 'Device' && child == 'BusinessActor';
                var VAL_6f0cb5a1 = parent == 'Device' && child == 'DataObject';
                var VAL_1b29d52b = parent == 'Device' && child == 'ApplicationService';
                var VAL_47547132 = parent == 'Device' && child == 'ApplicationFunction';
                var VAL_655523dd = parent == 'Device' && child == 'ApplicationInteraction';
                var VAL_6f7e336b = parent == 'Device' && child == 'ApplicationInterface';
                var VAL_3a2b2322 = parent == 'Device' && child == 'ApplicationComponent';
                var VAL_5e1218b4 = parent == 'Device' && child == 'ApplicationCollaboration';
                var VAL_12958360 = parent == 'Device' && child == 'Artifact';
                var VAL_c6e0f32 = parent == 'Device' && child == 'InfrastructureService';
                var VAL_6f3f0fae = parent == 'Device' && child == 'InfrastructureInterface';
                var VAL_21a66d45 = parent == 'Device' && child == 'Node';
                var VAL_1f966492 = parent == 'Device' && child == 'SystemSoftware';
                var VAL_63fdffcd = parent == 'Device' && child == 'Device';
                var VAL_7428de63 = parent == 'Device' && child == 'CommunicationPath';
                var VAL_66f659e6 = parent == 'Device' && child == 'Network';
                var VAL_4a68135e = parent == 'Device' && child == 'Stakeholder';
                var VAL_46678e49 = parent == 'Device' && child == 'Driver';
                var VAL_748e9b20 = parent == 'Device' && child == 'Assessment';
                var VAL_2063c53e = parent == 'Device' && child == 'Goal';
                var VAL_2a9bc08f = parent == 'Device' && child == 'Requirement';
                var VAL_50f40653 = parent == 'Device' && child == 'Constraint';
                var VAL_50a3d0f6 = parent == 'Device' && child == 'Principle';
                var VAL_6e57b5e9 = parent == 'Device' && child == 'WorkPackage';
                var VAL_1abc9f14 = parent == 'Device' && child == 'Deliverable';
                var VAL_6a0ac48e = parent == 'Device' && child == 'Plateau';
                var VAL_24e08d59 = parent == 'Device' && child == 'Gap';
                var VAL_77cb9cd1 = parent == 'CommunicationPath' && child == 'ArchimateElement';
                var VAL_971e903 = parent == 'CommunicationPath' && child == 'Product';
                var VAL_35636217 = parent == 'CommunicationPath' && child == 'BusinessObject';
                var VAL_1549bba7 = parent == 'CommunicationPath' && child == 'Meaning';
                var VAL_3e4f80cb = parent == 'CommunicationPath' && child == 'Representation';
                var VAL_38704ff0 = parent == 'CommunicationPath' && child == 'BusinessService';
                var VAL_16ade133 = parent == 'CommunicationPath' && child == 'BusinessProcess';
                var VAL_4e61e4c2 = parent == 'CommunicationPath' && child == 'BusinessFunction';
                var VAL_c6a6c1d = parent == 'CommunicationPath' && child == 'BusinessInteraction';
                var VAL_36dfbdaf = parent == 'CommunicationPath' && child == 'BusinessEvent';
                var VAL_4f82663e = parent == 'CommunicationPath' && child == 'Location';
                var VAL_e04ccf8 = parent == 'CommunicationPath' && child == 'BusinessInterface';
                var VAL_51d143a1 = parent == 'CommunicationPath' && child == 'BusinessRole';
                var VAL_1a28aef1 = parent == 'CommunicationPath' && child == 'BusinessCollaboration';
                var VAL_4647881c = parent == 'CommunicationPath' && child == 'BusinessActor';
                var VAL_6e0cff20 = parent == 'CommunicationPath' && child == 'DataObject';
                var VAL_359b650b = parent == 'CommunicationPath' && child == 'ApplicationService';
                var VAL_6a9b0a6f = parent == 'CommunicationPath' && child == 'ApplicationFunction';
                var VAL_10667848 = parent == 'CommunicationPath' && child == 'ApplicationInteraction';
                var VAL_191a709b = parent == 'CommunicationPath' && child == 'ApplicationInterface';
                var VAL_77c7ed8e = parent == 'CommunicationPath' && child == 'ApplicationComponent';
                var VAL_453d496b = parent == 'CommunicationPath' && child == 'ApplicationCollaboration';
                var VAL_66bacdbc = parent == 'CommunicationPath' && child == 'Artifact';
                var VAL_2c6ee758 = parent == 'CommunicationPath' && child == 'InfrastructureService';
                var VAL_640dc4c6 = parent == 'CommunicationPath' && child == 'InfrastructureInterface';
                var VAL_4b54af3d = parent == 'CommunicationPath' && child == 'Node';
                var VAL_7bb35cc6 = parent == 'CommunicationPath' && child == 'SystemSoftware';
                var VAL_203c20cf = parent == 'CommunicationPath' && child == 'Device';
                var VAL_2a1debfa = parent == 'CommunicationPath' && child == 'CommunicationPath';
                var VAL_44de94c3 = parent == 'CommunicationPath' && child == 'Network';
                var VAL_256aa5f2 = parent == 'CommunicationPath' && child == 'Stakeholder';
                var VAL_6411d3c8 = parent == 'CommunicationPath' && child == 'Driver';
                var VAL_2116b68b = parent == 'CommunicationPath' && child == 'Assessment';
                var VAL_11de56e6 = parent == 'CommunicationPath' && child == 'Goal';
                var VAL_616b241a = parent == 'CommunicationPath' && child == 'Requirement';
                var VAL_b8e246c = parent == 'CommunicationPath' && child == 'Constraint';
                var VAL_1f387978 = parent == 'CommunicationPath' && child == 'Principle';
                var VAL_7cb2651f = parent == 'CommunicationPath' && child == 'WorkPackage';
                var VAL_4441d567 = parent == 'CommunicationPath' && child == 'Deliverable';
                var VAL_3e1624c7 = parent == 'CommunicationPath' && child == 'Plateau';
                var VAL_62b969c4 = parent == 'CommunicationPath' && child == 'Gap';
                var VAL_dcc6211 = parent == 'Network' && child == 'ArchimateElement';
                var VAL_47ec7422 = parent == 'Network' && child == 'Product';
                var VAL_48535004 = parent == 'Network' && child == 'BusinessObject';
                var VAL_610df783 = parent == 'Network' && child == 'Meaning';
                var VAL_f3fcd59 = parent == 'Network' && child == 'Representation';
                var VAL_2b56f5f8 = parent == 'Network' && child == 'BusinessService';
                var VAL_79d743e6 = parent == 'Network' && child == 'BusinessProcess';
                var VAL_776802b0 = parent == 'Network' && child == 'BusinessFunction';
                var VAL_64c4c01 = parent == 'Network' && child == 'BusinessInteraction';
                var VAL_1aa99005 = parent == 'Network' && child == 'BusinessEvent';
                var VAL_592238c5 = parent == 'Network' && child == 'Location';
                var VAL_6ee8dcd3 = parent == 'Network' && child == 'BusinessInterface';
                var VAL_a20b94b = parent == 'Network' && child == 'BusinessRole';
                var VAL_5cdf39b2 = parent == 'Network' && child == 'BusinessCollaboration';
                var VAL_14f3c6fc = parent == 'Network' && child == 'BusinessActor';
                var VAL_3cd59ef5 = parent == 'Network' && child == 'DataObject';
                var VAL_33b082c5 = parent == 'Network' && child == 'ApplicationService';
                var VAL_16073fa8 = parent == 'Network' && child == 'ApplicationFunction';
                var VAL_1cc9cfb2 = parent == 'Network' && child == 'ApplicationInteraction';
                var VAL_cfbc8e8 = parent == 'Network' && child == 'ApplicationInterface';
                var VAL_3bead518 = parent == 'Network' && child == 'ApplicationComponent';
                var VAL_14bf57b2 = parent == 'Network' && child == 'ApplicationCollaboration';
                var VAL_46d9aec8 = parent == 'Network' && child == 'Artifact';
                var VAL_14379273 = parent == 'Network' && child == 'InfrastructureService';
                var VAL_7918c7f8 = parent == 'Network' && child == 'InfrastructureInterface';
                var VAL_17740dae = parent == 'Network' && child == 'Node';
                var VAL_1c504e66 = parent == 'Network' && child == 'SystemSoftware';
                var VAL_345cf395 = parent == 'Network' && child == 'Device';
                var VAL_bc4d5e1 = parent == 'Network' && child == 'CommunicationPath';
                var VAL_3c6aa04a = parent == 'Network' && child == 'Network';
                var VAL_2257fadf = parent == 'Network' && child == 'Stakeholder';
                var VAL_7144655b = parent == 'Network' && child == 'Driver';
                var VAL_5c82cd4f = parent == 'Network' && child == 'Assessment';
                var VAL_35835e65 = parent == 'Network' && child == 'Goal';
                var VAL_289fdb08 = parent == 'Network' && child == 'Requirement';
                var VAL_7a231dfd = parent == 'Network' && child == 'Constraint';
                var VAL_30814f43 = parent == 'Network' && child == 'Principle';
                var VAL_1fde4f40 = parent == 'Network' && child == 'WorkPackage';
                var VAL_49cf9028 = parent == 'Network' && child == 'Deliverable';
                var VAL_2b61a019 = parent == 'Network' && child == 'Plateau';
                var VAL_11a00961 = parent == 'Network' && child == 'Gap';
                var VAL_7ce9e05a = parent == 'Stakeholder' && child == 'ArchimateElement';
                var VAL_4992613f = parent == 'Stakeholder' && child == 'Product';
                var VAL_6fd5717c = parent == 'Stakeholder' && child == 'BusinessObject';
                var VAL_7e2f86e6 = parent == 'Stakeholder' && child == 'Meaning';
                var VAL_4d774249 = parent == 'Stakeholder' && child == 'Representation';
                var VAL_17b64941 = parent == 'Stakeholder' && child == 'BusinessService';
                var VAL_53ac845a = parent == 'Stakeholder' && child == 'BusinessProcess';
                var VAL_5136207f = parent == 'Stakeholder' && child == 'BusinessFunction';
                var VAL_26a4551a = parent == 'Stakeholder' && child == 'BusinessInteraction';
                var VAL_3fdecce = parent == 'Stakeholder' && child == 'BusinessEvent';
                var VAL_344426bf = parent == 'Stakeholder' && child == 'Location';
                var VAL_5411dd90 = parent == 'Stakeholder' && child == 'BusinessInterface';
                var VAL_50194e8d = parent == 'Stakeholder' && child == 'BusinessRole';
                var VAL_3cee53dc = parent == 'Stakeholder' && child == 'BusinessCollaboration';
                var VAL_290aeb20 = parent == 'Stakeholder' && child == 'BusinessActor';
                var VAL_73ad4ecc = parent == 'Stakeholder' && child == 'DataObject';
                var VAL_69da0b12 = parent == 'Stakeholder' && child == 'ApplicationService';
                var VAL_2764c546 = parent == 'Stakeholder' && child == 'ApplicationFunction';
                var VAL_59496961 = parent == 'Stakeholder' && child == 'ApplicationInteraction';
                var VAL_408b87aa = parent == 'Stakeholder' && child == 'ApplicationInterface';
                var VAL_79b08632 = parent == 'Stakeholder' && child == 'ApplicationComponent';
                var VAL_787f32b7 = parent == 'Stakeholder' && child == 'ApplicationCollaboration';
                var VAL_6aef4eb8 = parent == 'Stakeholder' && child == 'Artifact';
                var VAL_76c52298 = parent == 'Stakeholder' && child == 'InfrastructureService';
                var VAL_bb9ab64 = parent == 'Stakeholder' && child == 'InfrastructureInterface';
                var VAL_a52ca2e = parent == 'Stakeholder' && child == 'Node';
                var VAL_1ad8df52 = parent == 'Stakeholder' && child == 'SystemSoftware';
                var VAL_45d6ef73 = parent == 'Stakeholder' && child == 'Device';
                var VAL_3f29e26 = parent == 'Stakeholder' && child == 'CommunicationPath';
                var VAL_1f6d27cc = parent == 'Stakeholder' && child == 'Network';
                var VAL_4393593c = parent == 'Stakeholder' && child == 'Stakeholder';
                var VAL_314c8b4a = parent == 'Stakeholder' && child == 'Driver';
                var VAL_26d820eb = parent == 'Stakeholder' && child == 'Assessment';
                var VAL_507d20bb = parent == 'Stakeholder' && child == 'Goal';
                var VAL_9fec931 = parent == 'Stakeholder' && child == 'Requirement';
                var VAL_5cbd159f = parent == 'Stakeholder' && child == 'Constraint';
                var VAL_3b05a99b = parent == 'Stakeholder' && child == 'Principle';
                var VAL_2c43eb8 = parent == 'Stakeholder' && child == 'WorkPackage';
                var VAL_7d0cc890 = parent == 'Stakeholder' && child == 'Deliverable';
                var VAL_49293b43 = parent == 'Stakeholder' && child == 'Plateau';
                var VAL_5ff60a8c = parent == 'Stakeholder' && child == 'Gap';
                var VAL_7ce4de34 = parent == 'Driver' && child == 'ArchimateElement';
                var VAL_67b7c170 = parent == 'Driver' && child == 'Product';
                var VAL_67440de6 = parent == 'Driver' && child == 'BusinessObject';
                var VAL_889d9e8 = parent == 'Driver' && child == 'Meaning';
                var VAL_5246a3b3 = parent == 'Driver' && child == 'Representation';
                var VAL_ba354ca = parent == 'Driver' && child == 'BusinessService';
                var VAL_4c4f4365 = parent == 'Driver' && child == 'BusinessProcess';
                var VAL_acf859d = parent == 'Driver' && child == 'BusinessFunction';
                var VAL_6df3e44c = parent == 'Driver' && child == 'BusinessInteraction';
                var VAL_7ce7e83c = parent == 'Driver' && child == 'BusinessEvent';
                var VAL_4a05d8ae = parent == 'Driver' && child == 'Location';
                var VAL_3c904f1e = parent == 'Driver' && child == 'BusinessInterface';
                var VAL_4eb30d44 = parent == 'Driver' && child == 'BusinessRole';
                var VAL_d56aaa6 = parent == 'Driver' && child == 'BusinessCollaboration';
                var VAL_6972c30a = parent == 'Driver' && child == 'BusinessActor';
                var VAL_57a48985 = parent == 'Driver' && child == 'DataObject';
                var VAL_1ab6718 = parent == 'Driver' && child == 'ApplicationService';
                var VAL_3910fe11 = parent == 'Driver' && child == 'ApplicationFunction';
                var VAL_460510aa = parent == 'Driver' && child == 'ApplicationInteraction';
                var VAL_351e414e = parent == 'Driver' && child == 'ApplicationInterface';
                var VAL_6fd77352 = parent == 'Driver' && child == 'ApplicationComponent';
                var VAL_5109e8cf = parent == 'Driver' && child == 'ApplicationCollaboration';
                var VAL_3f672204 = parent == 'Driver' && child == 'Artifact';
                var VAL_78b41097 = parent == 'Driver' && child == 'InfrastructureService';
                var VAL_2c2db130 = parent == 'Driver' && child == 'InfrastructureInterface';
                var VAL_327c7bea = parent == 'Driver' && child == 'Node';
                var VAL_348d18a3 = parent == 'Driver' && child == 'SystemSoftware';
                var VAL_6c65860d = parent == 'Driver' && child == 'Device';
                var VAL_2d000e80 = parent == 'Driver' && child == 'CommunicationPath';
                var VAL_7cf283e1 = parent == 'Driver' && child == 'Network';
                var VAL_20e6c4dc = parent == 'Driver' && child == 'Stakeholder';
                var VAL_60737b23 = parent == 'Driver' && child == 'Driver';
                var VAL_4d2a1da3 = parent == 'Driver' && child == 'Assessment';
                var VAL_252f626c = parent == 'Driver' && child == 'Goal';
                var VAL_33f98231 = parent == 'Driver' && child == 'Requirement';
                var VAL_48284d0e = parent == 'Driver' && child == 'Constraint';
                var VAL_557286ad = parent == 'Driver' && child == 'Principle';
                var VAL_b10a26d = parent == 'Driver' && child == 'WorkPackage';
                var VAL_74075134 = parent == 'Driver' && child == 'Deliverable';
                var VAL_7e4d2287 = parent == 'Driver' && child == 'Plateau';
                var VAL_3f4b840d = parent == 'Driver' && child == 'Gap';
                var VAL_31464a43 = parent == 'Assessment' && child == 'ArchimateElement';
                var VAL_7f8633ae = parent == 'Assessment' && child == 'Product';
                var VAL_68c87fc3 = parent == 'Assessment' && child == 'BusinessObject';
                var VAL_bc0f53b = parent == 'Assessment' && child == 'Meaning';
                var VAL_8d7b252 = parent == 'Assessment' && child == 'Representation';
                var VAL_4682eba5 = parent == 'Assessment' && child == 'BusinessService';
                var VAL_6d9fb2d1 = parent == 'Assessment' && child == 'BusinessProcess';
                var VAL_61fafb74 = parent == 'Assessment' && child == 'BusinessFunction';
                var VAL_540a903b = parent == 'Assessment' && child == 'BusinessInteraction';
                var VAL_58496dc = parent == 'Assessment' && child == 'BusinessEvent';
                var VAL_151db587 = parent == 'Assessment' && child == 'Location';
                var VAL_238acd0b = parent == 'Assessment' && child == 'BusinessInterface';
                var VAL_23811a09 = parent == 'Assessment' && child == 'BusinessRole';
                var VAL_2125ad3 = parent == 'Assessment' && child == 'BusinessCollaboration';
                var VAL_7a5b769b = parent == 'Assessment' && child == 'BusinessActor';
                var VAL_f4c0e4e = parent == 'Assessment' && child == 'DataObject';
                var VAL_24361cfc = parent == 'Assessment' && child == 'ApplicationService';
                var VAL_34e20e6b = parent == 'Assessment' && child == 'ApplicationFunction';
                var VAL_15ac59c2 = parent == 'Assessment' && child == 'ApplicationInteraction';
                var VAL_7a7d1b47 = parent == 'Assessment' && child == 'ApplicationInterface';
                var VAL_6eb82908 = parent == 'Assessment' && child == 'ApplicationComponent';
                var VAL_4a8df3e2 = parent == 'Assessment' && child == 'ApplicationCollaboration';
                var VAL_3d98d138 = parent == 'Assessment' && child == 'Artifact';
                var VAL_2f2d52ef = parent == 'Assessment' && child == 'InfrastructureService';
                var VAL_f2ce6b = parent == 'Assessment' && child == 'InfrastructureInterface';
                var VAL_25c53f74 = parent == 'Assessment' && child == 'Node';
                var VAL_5e2f3be5 = parent == 'Assessment' && child == 'SystemSoftware';
                var VAL_1bd0b0e5 = parent == 'Assessment' && child == 'Device';
                var VAL_dc7b462 = parent == 'Assessment' && child == 'CommunicationPath';
                var VAL_1f51431 = parent == 'Assessment' && child == 'Network';
                var VAL_26a2f7f9 = parent == 'Assessment' && child == 'Stakeholder';
                var VAL_38eb2c50 = parent == 'Assessment' && child == 'Driver';
                var VAL_8bffb8b = parent == 'Assessment' && child == 'Assessment';
                var VAL_21422231 = parent == 'Assessment' && child == 'Goal';
                var VAL_10ee04df = parent == 'Assessment' && child == 'Requirement';
                var VAL_7186333e = parent == 'Assessment' && child == 'Constraint';
                var VAL_692fd26 = parent == 'Assessment' && child == 'Principle';
                var VAL_36f1046f = parent == 'Assessment' && child == 'WorkPackage';
                var VAL_56d93692 = parent == 'Assessment' && child == 'Deliverable';
                var VAL_1686f0b4 = parent == 'Assessment' && child == 'Plateau';
                var VAL_76c548f = parent == 'Assessment' && child == 'Gap';
                var VAL_3900fa71 = parent == 'Goal' && child == 'ArchimateElement';
                var VAL_26722665 = parent == 'Goal' && child == 'Product';
                var VAL_7d0614f = parent == 'Goal' && child == 'BusinessObject';
                var VAL_627d8516 = parent == 'Goal' && child == 'Meaning';
                var VAL_5c10285a = parent == 'Goal' && child == 'Representation';
                var VAL_6b667cb3 = parent == 'Goal' && child == 'BusinessService';
                var VAL_6f38a289 = parent == 'Goal' && child == 'BusinessProcess';
                var VAL_61e3cf4d = parent == 'Goal' && child == 'BusinessFunction';
                var VAL_3cec79d3 = parent == 'Goal' && child == 'BusinessInteraction';
                var VAL_64b70919 = parent == 'Goal' && child == 'BusinessEvent';
                var VAL_4e31c3ec = parent == 'Goal' && child == 'Location';
                var VAL_3157e4c0 = parent == 'Goal' && child == 'BusinessInterface';
                var VAL_6eaa21d8 = parent == 'Goal' && child == 'BusinessRole';
                var VAL_328902d5 = parent == 'Goal' && child == 'BusinessCollaboration';
                var VAL_72e789cb = parent == 'Goal' && child == 'BusinessActor';
                var VAL_7c1812b3 = parent == 'Goal' && child == 'DataObject';
                var VAL_43034809 = parent == 'Goal' && child == 'ApplicationService';
                var VAL_39e67516 = parent == 'Goal' && child == 'ApplicationFunction';
                var VAL_77010a30 = parent == 'Goal' && child == 'ApplicationInteraction';
                var VAL_4bb003e9 = parent == 'Goal' && child == 'ApplicationInterface';
                var VAL_12aa4996 = parent == 'Goal' && child == 'ApplicationComponent';
                var VAL_18eec010 = parent == 'Goal' && child == 'ApplicationCollaboration';
                var VAL_67c119b7 = parent == 'Goal' && child == 'Artifact';
                var VAL_2ca5f1ed = parent == 'Goal' && child == 'InfrastructureService';
                var VAL_6c03fb16 = parent == 'Goal' && child == 'InfrastructureInterface';
                var VAL_28348c6 = parent == 'Goal' && child == 'Node';
                var VAL_6de0f580 = parent == 'Goal' && child == 'SystemSoftware';
                var VAL_6e495b48 = parent == 'Goal' && child == 'Device';
                var VAL_1d61c6dc = parent == 'Goal' && child == 'CommunicationPath';
                var VAL_53c68ce = parent == 'Goal' && child == 'Network';
                var VAL_6f9ad11c = parent == 'Goal' && child == 'Stakeholder';
                var VAL_4b2d44bc = parent == 'Goal' && child == 'Driver';
                var VAL_58e92c23 = parent == 'Goal' && child == 'Assessment';
                var VAL_3e7545e8 = parent == 'Goal' && child == 'Goal';
                var VAL_75e710b = parent == 'Goal' && child == 'Requirement';
                var VAL_26f7cdf8 = parent == 'Goal' && child == 'Constraint';
                var VAL_376e7531 = parent == 'Goal' && child == 'Principle';
                var VAL_23202c31 = parent == 'Goal' && child == 'WorkPackage';
                var VAL_5782d777 = parent == 'Goal' && child == 'Deliverable';
                var VAL_4f824872 = parent == 'Goal' && child == 'Plateau';
                var VAL_b016b4e = parent == 'Goal' && child == 'Gap';
                var VAL_29629fbb = parent == 'Requirement' && child == 'ArchimateElement';
                var VAL_681adc8f = parent == 'Requirement' && child == 'Product';
                var VAL_3506d826 = parent == 'Requirement' && child == 'BusinessObject';
                var VAL_35dd9ed3 = parent == 'Requirement' && child == 'Meaning';
                var VAL_8ff5094 = parent == 'Requirement' && child == 'Representation';
                var VAL_363f0ba0 = parent == 'Requirement' && child == 'BusinessService';
                var VAL_35fb22a9 = parent == 'Requirement' && child == 'BusinessProcess';
                var VAL_6c8909c3 = parent == 'Requirement' && child == 'BusinessFunction';
                var VAL_1e008f36 = parent == 'Requirement' && child == 'BusinessInteraction';
                var VAL_50acf55d = parent == 'Requirement' && child == 'BusinessEvent';
                var VAL_3cae7b8b = parent == 'Requirement' && child == 'Location';
                var VAL_184dbacc = parent == 'Requirement' && child == 'BusinessInterface';
                var VAL_2aeefcc = parent == 'Requirement' && child == 'BusinessRole';
                var VAL_359ff4d9 = parent == 'Requirement' && child == 'BusinessCollaboration';
                var VAL_7a22a3c2 = parent == 'Requirement' && child == 'BusinessActor';
                var VAL_f4cfd90 = parent == 'Requirement' && child == 'DataObject';
                var VAL_7ae9a33a = parent == 'Requirement' && child == 'ApplicationService';
                var VAL_301aa982 = parent == 'Requirement' && child == 'ApplicationFunction';
                var VAL_5fc930f0 = parent == 'Requirement' && child == 'ApplicationInteraction';
                var VAL_3701e6e4 = parent == 'Requirement' && child == 'ApplicationInterface';
                var VAL_c6634d = parent == 'Requirement' && child == 'ApplicationComponent';
                var VAL_65f58c6e = parent == 'Requirement' && child == 'ApplicationCollaboration';
                var VAL_73ad7e90 = parent == 'Requirement' && child == 'Artifact';
                var VAL_4ba380c7 = parent == 'Requirement' && child == 'InfrastructureService';
                var VAL_784c5ef5 = parent == 'Requirement' && child == 'InfrastructureInterface';
                var VAL_31133b6e = parent == 'Requirement' && child == 'Node';
                var VAL_29528a22 = parent == 'Requirement' && child == 'SystemSoftware';
                var VAL_7ea08277 = parent == 'Requirement' && child == 'Device';
                var VAL_6401d0a0 = parent == 'Requirement' && child == 'CommunicationPath';
                var VAL_4ce14f05 = parent == 'Requirement' && child == 'Network';
                var VAL_71dfcf21 = parent == 'Requirement' && child == 'Stakeholder';
                var VAL_b965857 = parent == 'Requirement' && child == 'Driver';
                var VAL_61f80d55 = parent == 'Requirement' && child == 'Assessment';
                var VAL_27a7ef08 = parent == 'Requirement' && child == 'Goal';
                var VAL_280e8a1a = parent == 'Requirement' && child == 'Requirement';
                var VAL_11e33bac = parent == 'Requirement' && child == 'Constraint';
                var VAL_30501e60 = parent == 'Requirement' && child == 'Principle';
                var VAL_289778cd = parent == 'Requirement' && child == 'WorkPackage';
                var VAL_7495699f = parent == 'Requirement' && child == 'Deliverable';
                var VAL_7c2312fa = parent == 'Requirement' && child == 'Plateau';
                var VAL_4cb0a000 = parent == 'Requirement' && child == 'Gap';
                var VAL_5ff2e84b = parent == 'Constraint' && child == 'ArchimateElement';
                var VAL_74abbb = parent == 'Constraint' && child == 'Product';
                var VAL_64a4dd8d = parent == 'Constraint' && child == 'BusinessObject';
                var VAL_2dddc1b9 = parent == 'Constraint' && child == 'Meaning';
                var VAL_65a5d4f9 = parent == 'Constraint' && child == 'Representation';
                var VAL_40298285 = parent == 'Constraint' && child == 'BusinessService';
                var VAL_22367b8 = parent == 'Constraint' && child == 'BusinessProcess';
                var VAL_41b0ae4c = parent == 'Constraint' && child == 'BusinessFunction';
                var VAL_af9a89f = parent == 'Constraint' && child == 'BusinessInteraction';
                var VAL_6482eef = parent == 'Constraint' && child == 'BusinessEvent';
                var VAL_1fcf9739 = parent == 'Constraint' && child == 'Location';
                var VAL_5b498842 = parent == 'Constraint' && child == 'BusinessInterface';
                var VAL_1cb37ee4 = parent == 'Constraint' && child == 'BusinessRole';
                var VAL_5bcb04cb = parent == 'Constraint' && child == 'BusinessCollaboration';
                var VAL_385e36d4 = parent == 'Constraint' && child == 'BusinessActor';
                var VAL_2fc2a205 = parent == 'Constraint' && child == 'DataObject';
                var VAL_2881ad47 = parent == 'Constraint' && child == 'ApplicationService';
                var VAL_2bef09c0 = parent == 'Constraint' && child == 'ApplicationFunction';
                var VAL_62ce72ff = parent == 'Constraint' && child == 'ApplicationInteraction';
                var VAL_58a63629 = parent == 'Constraint' && child == 'ApplicationInterface';
                var VAL_7de843ef = parent == 'Constraint' && child == 'ApplicationComponent';
                var VAL_2e1af49b = parent == 'Constraint' && child == 'ApplicationCollaboration';
                var VAL_3fd2322d = parent == 'Constraint' && child == 'Artifact';
                var VAL_56ac5c80 = parent == 'Constraint' && child == 'InfrastructureService';
                var VAL_69e49a81 = parent == 'Constraint' && child == 'InfrastructureInterface';
                var VAL_1023150a = parent == 'Constraint' && child == 'Node';
                var VAL_3ece1e79 = parent == 'Constraint' && child == 'SystemSoftware';
                var VAL_ab20d7c = parent == 'Constraint' && child == 'Device';
                var VAL_474fae39 = parent == 'Constraint' && child == 'CommunicationPath';
                var VAL_4f4c789f = parent == 'Constraint' && child == 'Network';
                var VAL_13f9ad9 = parent == 'Constraint' && child == 'Stakeholder';
                var VAL_1b7cae6f = parent == 'Constraint' && child == 'Driver';
                var VAL_21f8e55f = parent == 'Constraint' && child == 'Assessment';
                var VAL_d5ce97f = parent == 'Constraint' && child == 'Goal';
                var VAL_7048535f = parent == 'Constraint' && child == 'Requirement';
                var VAL_e3994ef = parent == 'Constraint' && child == 'Constraint';
                var VAL_680d4a6a = parent == 'Constraint' && child == 'Principle';
                var VAL_2f04105 = parent == 'Constraint' && child == 'WorkPackage';
                var VAL_309028af = parent == 'Constraint' && child == 'Deliverable';
                var VAL_724c5cbe = parent == 'Constraint' && child == 'Plateau';
                var VAL_70101687 = parent == 'Constraint' && child == 'Gap';
                var VAL_70e889e9 = parent == 'Principle' && child == 'ArchimateElement';
                var VAL_418c020b = parent == 'Principle' && child == 'Product';
                var VAL_51351f28 = parent == 'Principle' && child == 'BusinessObject';
                var VAL_21618fa7 = parent == 'Principle' && child == 'Meaning';
                var VAL_15f2eda3 = parent == 'Principle' && child == 'Representation';
                var VAL_34cf294c = parent == 'Principle' && child == 'BusinessService';
                var VAL_4d7aaca2 = parent == 'Principle' && child == 'BusinessProcess';
                var VAL_604b1e1d = parent == 'Principle' && child == 'BusinessFunction';
                var VAL_62566842 = parent == 'Principle' && child == 'BusinessInteraction';
                var VAL_2f1ea80d = parent == 'Principle' && child == 'BusinessEvent';
                var VAL_37191ef0 = parent == 'Principle' && child == 'Location';
                var VAL_f1a45f8 = parent == 'Principle' && child == 'BusinessInterface';
                var VAL_5edf2821 = parent == 'Principle' && child == 'BusinessRole';
                var VAL_4dbad37 = parent == 'Principle' && child == 'BusinessCollaboration';
                var VAL_7b4acdc2 = parent == 'Principle' && child == 'BusinessActor';
                var VAL_26a262d6 = parent == 'Principle' && child == 'DataObject';
                var VAL_11bd803 = parent == 'Principle' && child == 'ApplicationService';
                var VAL_58f07f02 = parent == 'Principle' && child == 'ApplicationFunction';
                var VAL_75798d03 = parent == 'Principle' && child == 'ApplicationInteraction';
                var VAL_40f8f5a8 = parent == 'Principle' && child == 'ApplicationInterface';
                var VAL_1ffcf674 = parent == 'Principle' && child == 'ApplicationComponent';
                var VAL_442f92e6 = parent == 'Principle' && child == 'ApplicationCollaboration';
                var VAL_7d070ef5 = parent == 'Principle' && child == 'Artifact';
                var VAL_7a55f148 = parent == 'Principle' && child == 'InfrastructureService';
                var VAL_2e2f720 = parent == 'Principle' && child == 'InfrastructureInterface';
                var VAL_3ae2ed38 = parent == 'Principle' && child == 'Node';
                var VAL_7f572c37 = parent == 'Principle' && child == 'SystemSoftware';
                var VAL_2add4d24 = parent == 'Principle' && child == 'Device';
                var VAL_3f93e4a8 = parent == 'Principle' && child == 'CommunicationPath';
                var VAL_12b5454f = parent == 'Principle' && child == 'Network';
                var VAL_5445f5ba = parent == 'Principle' && child == 'Stakeholder';
                var VAL_1431267b = parent == 'Principle' && child == 'Driver';
                var VAL_342726f1 = parent == 'Principle' && child == 'Assessment';
                var VAL_c808207 = parent == 'Principle' && child == 'Goal';
                var VAL_77134e08 = parent == 'Principle' && child == 'Requirement';
                var VAL_6a0cbc6f = parent == 'Principle' && child == 'Constraint';
                var VAL_67110f71 = parent == 'Principle' && child == 'Principle';
                var VAL_6f89292e = parent == 'Principle' && child == 'WorkPackage';
                var VAL_20749d9 = parent == 'Principle' && child == 'Deliverable';
                var VAL_de77232 = parent == 'Principle' && child == 'Plateau';
                var VAL_62628e78 = parent == 'Principle' && child == 'Gap';
                var VAL_44841b43 = parent == 'WorkPackage' && child == 'ArchimateElement';
                var VAL_7c75db8b = parent == 'WorkPackage' && child == 'Product';
                var VAL_4ab550d5 = parent == 'WorkPackage' && child == 'BusinessObject';
                var VAL_3cd206b5 = parent == 'WorkPackage' && child == 'Meaning';
                var VAL_58e85c6f = parent == 'WorkPackage' && child == 'Representation';
                var VAL_a137d7a = parent == 'WorkPackage' && child == 'BusinessService';
                var VAL_6ac0b715 = parent == 'WorkPackage' && child == 'BusinessProcess';
                var VAL_468be356 = parent == 'WorkPackage' && child == 'BusinessFunction';
                var VAL_5c9ac4cc = parent == 'WorkPackage' && child == 'BusinessInteraction';
                var VAL_4df39a88 = parent == 'WorkPackage' && child == 'BusinessEvent';
                var VAL_2264e43c = parent == 'WorkPackage' && child == 'Location';
                var VAL_3bec2275 = parent == 'WorkPackage' && child == 'BusinessInterface';
                var VAL_31da3d60 = parent == 'WorkPackage' && child == 'BusinessRole';
                var VAL_60acd609 = parent == 'WorkPackage' && child == 'BusinessCollaboration';
                var VAL_65ec8b24 = parent == 'WorkPackage' && child == 'BusinessActor';
                var VAL_3f49e266 = parent == 'WorkPackage' && child == 'DataObject';
                var VAL_5f18f9d2 = parent == 'WorkPackage' && child == 'ApplicationService';
                var VAL_598260a6 = parent == 'WorkPackage' && child == 'ApplicationFunction';
                var VAL_58b67519 = parent == 'WorkPackage' && child == 'ApplicationInteraction';
                var VAL_281ce6bb = parent == 'WorkPackage' && child == 'ApplicationInterface';
                var VAL_30d25c03 = parent == 'WorkPackage' && child == 'ApplicationComponent';
                var VAL_7a1f8def = parent == 'WorkPackage' && child == 'ApplicationCollaboration';
                var VAL_116a2108 = parent == 'WorkPackage' && child == 'Artifact';
                var VAL_5e8c34a0 = parent == 'WorkPackage' && child == 'InfrastructureService';
                var VAL_7c1c5936 = parent == 'WorkPackage' && child == 'InfrastructureInterface';
                var VAL_7aead3af = parent == 'WorkPackage' && child == 'Node';
                var VAL_3ac8cf9b = parent == 'WorkPackage' && child == 'SystemSoftware';
                var VAL_55ec556 = parent == 'WorkPackage' && child == 'Device';
                var VAL_1b15f922 = parent == 'WorkPackage' && child == 'CommunicationPath';
                var VAL_37ce3644 = parent == 'WorkPackage' && child == 'Network';
                var VAL_4b869331 = parent == 'WorkPackage' && child == 'Stakeholder';
                var VAL_38018b62 = parent == 'WorkPackage' && child == 'Driver';
                var VAL_ce9b9a9 = parent == 'WorkPackage' && child == 'Assessment';
                var VAL_4ad3d266 = parent == 'WorkPackage' && child == 'Goal';
                var VAL_3533df16 = parent == 'WorkPackage' && child == 'Requirement';
                var VAL_15d0849 = parent == 'WorkPackage' && child == 'Constraint';
                var VAL_4038cd3a = parent == 'WorkPackage' && child == 'Principle';
                var VAL_14ac77b9 = parent == 'WorkPackage' && child == 'WorkPackage';
                var VAL_3f4cd155 = parent == 'WorkPackage' && child == 'Deliverable';
                var VAL_563a89b5 = parent == 'WorkPackage' && child == 'Plateau';
                var VAL_506dcf55 = parent == 'WorkPackage' && child == 'Gap';
                var VAL_270b6b5e = parent == 'Deliverable' && child == 'ArchimateElement';
                var VAL_7e94d093 = parent == 'Deliverable' && child == 'Product';
                var VAL_7c6189d5 = parent == 'Deliverable' && child == 'BusinessObject';
                var VAL_4248e66b = parent == 'Deliverable' && child == 'Meaning';
                var VAL_3e6534e7 = parent == 'Deliverable' && child == 'Representation';
                var VAL_66ad7bf0 = parent == 'Deliverable' && child == 'BusinessService';
                var VAL_167279d1 = parent == 'Deliverable' && child == 'BusinessProcess';
                var VAL_138caeca = parent == 'Deliverable' && child == 'BusinessFunction';
                var VAL_4d96250 = parent == 'Deliverable' && child == 'BusinessInteraction';
                var VAL_9a6fbc0 = parent == 'Deliverable' && child == 'BusinessEvent';
                var VAL_c1fa7d4 = parent == 'Deliverable' && child == 'Location';
                var VAL_7a93b263 = parent == 'Deliverable' && child == 'BusinessInterface';
                var VAL_35178483 = parent == 'Deliverable' && child == 'BusinessRole';
                var VAL_bd1111a = parent == 'Deliverable' && child == 'BusinessCollaboration';
                var VAL_7a8136b3 = parent == 'Deliverable' && child == 'BusinessActor';
                var VAL_1de6932a = parent == 'Deliverable' && child == 'DataObject';
                var VAL_14dc3f89 = parent == 'Deliverable' && child == 'ApplicationService';
                var VAL_1706a5c9 = parent == 'Deliverable' && child == 'ApplicationFunction';
                var VAL_64412d34 = parent == 'Deliverable' && child == 'ApplicationInteraction';
                var VAL_4d178d55 = parent == 'Deliverable' && child == 'ApplicationInterface';
                var VAL_38c2c309 = parent == 'Deliverable' && child == 'ApplicationComponent';
                var VAL_1a480135 = parent == 'Deliverable' && child == 'ApplicationCollaboration';
                var VAL_778db7c5 = parent == 'Deliverable' && child == 'Artifact';
                var VAL_681e144 = parent == 'Deliverable' && child == 'InfrastructureService';
                var VAL_2875b016 = parent == 'Deliverable' && child == 'InfrastructureInterface';
                var VAL_72ee5d84 = parent == 'Deliverable' && child == 'Node';
                var VAL_68c7ef83 = parent == 'Deliverable' && child == 'SystemSoftware';
                var VAL_6145b81e = parent == 'Deliverable' && child == 'Device';
                var VAL_64355120 = parent == 'Deliverable' && child == 'CommunicationPath';
                var VAL_64b7225f = parent == 'Deliverable' && child == 'Network';
                var VAL_33db72bd = parent == 'Deliverable' && child == 'Stakeholder';
                var VAL_7f92b990 = parent == 'Deliverable' && child == 'Driver';
                var VAL_31e04b13 = parent == 'Deliverable' && child == 'Assessment';
                var VAL_6c1832aa = parent == 'Deliverable' && child == 'Goal';
                var VAL_4beeb0e = parent == 'Deliverable' && child == 'Requirement';
                var VAL_6e8a9c30 = parent == 'Deliverable' && child == 'Constraint';
                var VAL_5d01ea21 = parent == 'Deliverable' && child == 'Principle';
                var VAL_70211e49 = parent == 'Deliverable' && child == 'WorkPackage';
                var VAL_3b46dd8 = parent == 'Deliverable' && child == 'Deliverable';
                var VAL_39651a82 = parent == 'Deliverable' && child == 'Plateau';
                var VAL_6be7bf6d = parent == 'Deliverable' && child == 'Gap';
                var VAL_134c370e = parent == 'Plateau' && child == 'ArchimateElement';
                var VAL_33364212 = parent == 'Plateau' && child == 'Product';
                var VAL_2216effc = parent == 'Plateau' && child == 'BusinessObject';
                var VAL_745c2004 = parent == 'Plateau' && child == 'Meaning';
                var VAL_6da9dc6 = parent == 'Plateau' && child == 'Representation';
                var VAL_7fd69dd = parent == 'Plateau' && child == 'BusinessService';
                var VAL_12010fd1 = parent == 'Plateau' && child == 'BusinessProcess';
                var VAL_7c84195 = parent == 'Plateau' && child == 'BusinessFunction';
                var VAL_552ed807 = parent == 'Plateau' && child == 'BusinessInteraction';
                var VAL_3971f0fe = parent == 'Plateau' && child == 'BusinessEvent';
                var VAL_23940f86 = parent == 'Plateau' && child == 'Location';
                var VAL_66153688 = parent == 'Plateau' && child == 'BusinessInterface';
                var VAL_455824ad = parent == 'Plateau' && child == 'BusinessRole';
                var VAL_7318daf8 = parent == 'Plateau' && child == 'BusinessCollaboration';
                var VAL_70f31322 = parent == 'Plateau' && child == 'BusinessActor';
                var VAL_3f1ddac2 = parent == 'Plateau' && child == 'DataObject';
                var VAL_3be4fcc0 = parent == 'Plateau' && child == 'ApplicationService';
                var VAL_e1e2e5e = parent == 'Plateau' && child == 'ApplicationFunction';
                var VAL_661c46bc = parent == 'Plateau' && child == 'ApplicationInteraction';
                var VAL_37864b77 = parent == 'Plateau' && child == 'ApplicationInterface';
                var VAL_2b98b3bb = parent == 'Plateau' && child == 'ApplicationComponent';
                var VAL_540b0448 = parent == 'Plateau' && child == 'ApplicationCollaboration';
                var VAL_50a691d3 = parent == 'Plateau' && child == 'Artifact';
                var VAL_557eb543 = parent == 'Plateau' && child == 'InfrastructureService';
                var VAL_3b95d13c = parent == 'Plateau' && child == 'InfrastructureInterface';
                var VAL_3730ab42 = parent == 'Plateau' && child == 'Node';
                var VAL_537c8c7e = parent == 'Plateau' && child == 'SystemSoftware';
                var VAL_7308ffff = parent == 'Plateau' && child == 'Device';
                var VAL_6601cc93 = parent == 'Plateau' && child == 'CommunicationPath';
                var VAL_54d901aa = parent == 'Plateau' && child == 'Network';
                var VAL_63716833 = parent == 'Plateau' && child == 'Stakeholder';
                var VAL_573284a5 = parent == 'Plateau' && child == 'Driver';
                var VAL_3fbfbf84 = parent == 'Plateau' && child == 'Assessment';
                var VAL_23f72d88 = parent == 'Plateau' && child == 'Goal';
                var VAL_4bafe935 = parent == 'Plateau' && child == 'Requirement';
                var VAL_87b5b49 = parent == 'Plateau' && child == 'Constraint';
                var VAL_4a7a965d = parent == 'Plateau' && child == 'Principle';
                var VAL_507b79f7 = parent == 'Plateau' && child == 'WorkPackage';
                var VAL_64a9d48c = parent == 'Plateau' && child == 'Deliverable';
                var VAL_365a6a43 = parent == 'Plateau' && child == 'Plateau';
                var VAL_288cdaab = parent == 'Plateau' && child == 'Gap';
                var VAL_23b3aa8c = parent == 'Gap' && child == 'ArchimateElement';
                var VAL_99407c2 = parent == 'Gap' && child == 'Product';
                var VAL_6c796cc1 = parent == 'Gap' && child == 'BusinessObject';
                var VAL_226eba67 = parent == 'Gap' && child == 'Meaning';
                var VAL_1cb7936c = parent == 'Gap' && child == 'Representation';
                var VAL_35342d2f = parent == 'Gap' && child == 'BusinessService';
                var VAL_128c502c = parent == 'Gap' && child == 'BusinessProcess';
                var VAL_45667d98 = parent == 'Gap' && child == 'BusinessFunction';
                var VAL_65eabaab = parent == 'Gap' && child == 'BusinessInteraction';
                var VAL_7123be6c = parent == 'Gap' && child == 'BusinessEvent';
                var VAL_1de9d54 = parent == 'Gap' && child == 'Location';
                var VAL_77a2aa4a = parent == 'Gap' && child == 'BusinessInterface';
                var VAL_47ad69f7 = parent == 'Gap' && child == 'BusinessRole';
                var VAL_2b917fb0 = parent == 'Gap' && child == 'BusinessCollaboration';
                var VAL_5e5073ab = parent == 'Gap' && child == 'BusinessActor';
                var VAL_3c4262d1 = parent == 'Gap' && child == 'DataObject';
                var VAL_100c567f = parent == 'Gap' && child == 'ApplicationService';
                var VAL_30c0d731 = parent == 'Gap' && child == 'ApplicationFunction';
                var VAL_6d5037a9 = parent == 'Gap' && child == 'ApplicationInteraction';
                var VAL_422b8438 = parent == 'Gap' && child == 'ApplicationInterface';
                var VAL_30669dac = parent == 'Gap' && child == 'ApplicationComponent';
                var VAL_629adce = parent == 'Gap' && child == 'ApplicationCollaboration';
                var VAL_6a282fdd = parent == 'Gap' && child == 'Artifact';
                var VAL_743c6ce4 = parent == 'Gap' && child == 'InfrastructureService';
                var VAL_70331432 = parent == 'Gap' && child == 'InfrastructureInterface';
                var VAL_3bbf9027 = parent == 'Gap' && child == 'Node';
                var VAL_10c2064a = parent == 'Gap' && child == 'SystemSoftware';
                var VAL_70e13fa = parent == 'Gap' && child == 'Device';
                var VAL_6ff415ad = parent == 'Gap' && child == 'CommunicationPath';
                var VAL_280d9edc = parent == 'Gap' && child == 'Network';
                var VAL_28fd3dc1 = parent == 'Gap' && child == 'Stakeholder';
                var VAL_5f9b6ae7 = parent == 'Gap' && child == 'Driver';
                var VAL_108d55c4 = parent == 'Gap' && child == 'Assessment';
                var VAL_5432c277 = parent == 'Gap' && child == 'Goal';
                var VAL_15e0fe05 = parent == 'Gap' && child == 'Requirement';
                var VAL_1128620c = parent == 'Gap' && child == 'Constraint';
                var VAL_6bf13698 = parent == 'Gap' && child == 'Principle';
                var VAL_299270eb = parent == 'Gap' && child == 'WorkPackage';
                var VAL_3b90a30a = parent == 'Gap' && child == 'Deliverable';
                var VAL_69fa8e76 = parent == 'Gap' && child == 'Plateau';
                var VAL_bdd2027 = parent == 'Gap' && child == 'Gap';
                if (VAL_4a183d02 || VAL_5d05ef57 || VAL_213deac2 || VAL_23eee4b8 || VAL_28952dea || VAL_5a9800f8 || VAL_143d9a93 || VAL_40226788 || VAL_4159e81b || VAL_5b5caf08 || VAL_23cd4ff2 || VAL_70807224 || VAL_7e97551f || VAL_400d912a || VAL_9f6e406 || VAL_7a94b64e || VAL_3e6f3bae || VAL_12477988 || VAL_2caf6912 || VAL_73d69c0f || VAL_34237b90 || VAL_1d01dfa5 || VAL_4a31c2ee || VAL_d400943 || VAL_22101c80 || VAL_31ff1390 || VAL_759d81f3 || VAL_781a9412 || VAL_5a4c638d || VAL_13e698c7 || VAL_aed0151 || VAL_267bbe1a || VAL_1f12e153 || VAL_389562d6 || VAL_5a101b1c || VAL_2160e52a || VAL_29f0802c || VAL_3a60c416 || VAL_60f2e0bd || VAL_469d003c || VAL_6b410923 || VAL_57bd2029 || VAL_203dd56b || VAL_e8fadb0 || VAL_6d64b553 || VAL_53667cbe || VAL_1d3e6d34 || VAL_6eafb10e || VAL_26a94fa5 || VAL_464a4442 || VAL_2873d672 || VAL_3bc735b3 || VAL_577f9109 || VAL_4303b7f0 || VAL_757529a4 || VAL_779de014 || VAL_5c41d037 || VAL_2234078 || VAL_5ec77191 || VAL_4642b71d || VAL_1450078a || VAL_c68a5f8 || VAL_69c6161d || VAL_3aefae67 || VAL_2e1792e7 || VAL_6719a5b8 || VAL_3eb631b8 || VAL_796d3c9f || VAL_6bff19ff || VAL_41e1455d || VAL_4e558728 || VAL_5eccd3b9 || VAL_4d6f197e || VAL_6ef7623 || VAL_64e1dd11 || VAL_5c089b2f || VAL_6999cd39 || VAL_14bae047 || VAL_7ed9ae94 || VAL_66908383 || VAL_41477a6d || VAL_2bc12da || VAL_3122b117 || VAL_534ca02b || VAL_29a23c3d || VAL_4b6ac111 || VAL_6fe46b62 || VAL_591fd34d || VAL_61e45f87 || VAL_7c9b78e3 || VAL_3068b369 || VAL_17ca8b92 || VAL_5491f68b || VAL_736ac09a || VAL_6ecd665 || VAL_45394b31 || VAL_1ec7d8b3 || VAL_3b0ca5e1 || VAL_5bb3131b || VAL_54dcbb9f || VAL_74fef3f7 || VAL_2a037324 || VAL_69eb86b4 || VAL_585ac855 || VAL_5bb8f9e2 || VAL_6a933be2 || VAL_5f78de22 || VAL_516ebdf8 || VAL_4d8539de || VAL_3eba57a7 || VAL_272a179c || VAL_30feffc || VAL_67207d8a || VAL_bcb09a6 || VAL_7c2a69b4 || VAL_a619c2 || VAL_648ee871 || VAL_375b5b7f || VAL_1813f3e9 || VAL_28cb9120 || VAL_3b152928 || VAL_56781d96 || VAL_5173200b || VAL_25c5e994 || VAL_378bd86d || VAL_2189e7a7 || VAL_69b2f8e5 || VAL_6331250e || VAL_a10c1b5 || VAL_644abb8f || VAL_1a411233 || VAL_70325d20 || VAL_7c2327fa || VAL_4d847d32 || VAL_5f462e3b || VAL_3d7fa3ae || VAL_58065f0c || VAL_3605c4d3 || VAL_585c13de || VAL_187eb9a8 || VAL_726a6b94 || VAL_6ad11a56 || VAL_522b2631 || VAL_3ff57625 || VAL_1ee29c84 || VAL_7c8326a4 || VAL_77128dab || VAL_63429932 || VAL_69ce2f62 || VAL_c9d82f9 || VAL_6f012914 || VAL_18fdb6cf || VAL_d02f8d || VAL_60baef24 || VAL_61533ae || VAL_732bb66d || VAL_720653c2 || VAL_45f24169 || VAL_6ad5923a || VAL_4463d9d3 || VAL_43b0ade || VAL_5395ea39 || VAL_1517f633 || VAL_4fe01803 || VAL_13d186db || VAL_6f6962ba || VAL_4565a70a || VAL_a0a9fa5 || VAL_15723761 || VAL_312afbc7 || VAL_599f571f || VAL_7b60c3e || VAL_3fbfa96 || VAL_6569dded || VAL_466d49f0 || VAL_710d7aff || VAL_2d7e1102 || VAL_65327f5 || VAL_2adddc06 || VAL_301d8120 || VAL_6d367020 || VAL_72458efc || VAL_36bc415e || VAL_6a74d228 || VAL_349d0836 || VAL_6a714237 || VAL_3e134896 || VAL_72ba28ee || VAL_2e3a5237 || VAL_4ebadd3d || VAL_6ac97b84 || VAL_4917d36b || VAL_35c09b94 || VAL_2d0bfb24 || VAL_c3fa05a || VAL_7b44b63d || VAL_4a699efa || VAL_38499e48 || VAL_4905c46b || VAL_17ae7628 || VAL_1136b469 || VAL_6579c3d9 || VAL_2b87581 || VAL_66434cc8 || VAL_42f22995 || VAL_693e4d19 || VAL_286b39c2 || VAL_5432050b || VAL_75f2099 || VAL_1c12f3ee || VAL_6d467c87 || VAL_29182679 || VAL_57bd802b || VAL_5cbb84b1 || VAL_2c779e5 || VAL_6a84bc2a || VAL_5183d589 || VAL_511d5d04 || VAL_682c1e93 || VAL_27068a50 || VAL_68e62ca4 || VAL_5328a9c1 || VAL_5b78fdb1 || VAL_48bfb884 || VAL_11653e3b || VAL_715fb77 || VAL_1b9c1b51 || VAL_2e52fb3e || VAL_16fe9c29 || VAL_3e9803c2 || VAL_4525d1d3 || VAL_7c974942 || VAL_1eea9d2d || VAL_60921b21 || VAL_bd2f5a9 || VAL_4d4960c8 || VAL_7808fb9 || VAL_773bd77b || VAL_6b580b88 || VAL_6d91790b || VAL_6e6fce47 || VAL_47c64cfe || VAL_6ce90bc5 || VAL_a567e72 || VAL_1a5b8489 || VAL_6f8f8a80 || VAL_4b1c0397 || VAL_72805168 || VAL_34b9fc7d || VAL_27f1bbe0 || VAL_cda0432 || VAL_7c211fd0 || VAL_7004e3d || VAL_2d84cb86 || VAL_71a3a190 || VAL_588ffeb || VAL_7c28c1 || VAL_baf1bb3 || VAL_67ec8477 || VAL_25d958c6 || VAL_4482469c || VAL_3703bf3c || VAL_34cf5a97 || VAL_5b3f3ba0 || VAL_ddf20fd || VAL_278f8425 || VAL_695a69a1 || VAL_4b1abd11 || VAL_3f36b447 || VAL_6443b128 || VAL_5eeedb60 || VAL_40021799 || VAL_4a1c0752 || VAL_332f25c8 || VAL_1b32cd16 || VAL_4bdcaf36 || VAL_61d01788 || VAL_2b9b7f1f || VAL_264c5d07 || VAL_847f3e7 || VAL_69cac930 || VAL_19593091 || VAL_5d39f2d8 || VAL_6ad6fa53 || VAL_55ea2d70 || VAL_5e742e4 || VAL_175acfb2 || VAL_4a03bb68 || VAL_4e868ef5 || VAL_71c905a3 || VAL_30af7377 || VAL_67a056f1 || VAL_1dab9dd6 || VAL_247667dd || VAL_6f099cef || VAL_afb5821 || VAL_4bff2185 || VAL_5c20ffa8 || VAL_7fedfe27 || VAL_2f879bab || VAL_1d4664d7 || VAL_46c00568 || VAL_56ccd751 || VAL_458544e0 || VAL_6bcbf05b || VAL_2d66530f || VAL_1d207fad || VAL_72ed9aad || VAL_4690f583 || VAL_59712875 || VAL_47b2e9e1 || VAL_59942b48 || VAL_1869f114 || VAL_488b50ec || VAL_18a645fd || VAL_6090f3ca || VAL_37a64f9d || VAL_25b865b5 || VAL_f9b5552 || VAL_6872f9c8 || VAL_6d2d99fc || VAL_bdecc21 || VAL_5e3a39cd || VAL_21f9277b || VAL_201aa8c1 || VAL_5d58c727 || VAL_52a36910 || VAL_3a095ec0 || VAL_4f20a5e0 || VAL_54da32dc || VAL_1d782abe || VAL_6df7988f || VAL_27b22f74 || VAL_22fba58c || VAL_7e8a46b7 || VAL_2fe88a09 || VAL_1917d90f || VAL_66bfd864 || VAL_4aac85fa || VAL_21fff664 || VAL_6079cf5 || VAL_1e6308a9 || VAL_30cecdca || VAL_6edc4161 || VAL_5486887b || VAL_5226e402 || VAL_1440c311 || VAL_189b5fb1 || VAL_783ec989 || VAL_1ddd3478 || VAL_f973499 || VAL_4d33940d || VAL_43cf6ea3 || VAL_37c5fc56 || VAL_1c025cb || VAL_50825a02 || VAL_68809cc7 || VAL_703feacd || VAL_7051777c || VAL_3241713e || VAL_5ecba515 || VAL_512d4583 || VAL_2abc224d || VAL_13cd7ea5 || VAL_102d92c4 || VAL_2b97cc1f || VAL_60723d6a || VAL_18324f97 || VAL_64f555e7 || VAL_71178a52 || VAL_ff6077 || VAL_abbc908 || VAL_44afefd5 || VAL_9a7a808 || VAL_72209d93 || VAL_2687f956 || VAL_1ded7b14 || VAL_29be7749 || VAL_5f84abe8 || VAL_4650a407 || VAL_30135202 || VAL_6a4d7f76 || VAL_10ec523c || VAL_53dfacba || VAL_79767781 || VAL_78411116 || VAL_aced190 || VAL_245a060f || VAL_6edaa77a || VAL_1e63d216 || VAL_62ddd21b || VAL_16c3ca31 || VAL_2d195ee4 || VAL_2d6aca33 || VAL_21ab988f || VAL_29314cc9 || VAL_4e38d975 || VAL_35f8a9d3 || VAL_48ea2003 || VAL_6b1e7ad3 || VAL_63e5e5b4 || VAL_13a37e2a || VAL_a50ae65 || VAL_1280851e || VAL_5e840abf || VAL_56de6d6b || VAL_5972d253 || VAL_4fcc0416 || VAL_31e32ea2 || VAL_1473b8c0 || VAL_5b5c0057 || VAL_749f539e || VAL_5ca1f591 || VAL_551de37d || VAL_6ef81f31 || VAL_6075b2d3 || VAL_33abde31 || VAL_997d532 || VAL_273842a6 || VAL_6a969fb8 || VAL_7a18e8d || VAL_3028e50e || VAL_5560bcdf || VAL_b558294 || VAL_bb095 || VAL_777c350f || VAL_27aae97b || VAL_4c9e38 || VAL_5d1e09bc || VAL_4bdc8b5d || VAL_3bcd426c || VAL_5f14a673 || VAL_726a17c4 || VAL_5dc3fcb7 || VAL_c4c0b41 || VAL_76911385 || VAL_5467eea4 || VAL_160396db || VAL_7a799159 || VAL_40ab8a8 || VAL_6ff37443 || VAL_65cc8228 || VAL_53093491 || VAL_21719a0 || VAL_76b224cd || VAL_77ee25f1 || VAL_6dd93a21 || VAL_57b9e423 || VAL_304a3655 || VAL_368d5c00 || VAL_12a160c2 || VAL_aa10649 || VAL_6b3871d6 || VAL_37095ded || VAL_2eb79cbe || VAL_2ca6546f || VAL_43826ec || VAL_7923f5b3 || VAL_6b63d445 || VAL_7578e06a || VAL_30b2b76f || VAL_56da52a7 || VAL_23ee75c5 || VAL_11a7ba62 || VAL_340b7ef6 || VAL_30404dba || VAL_6050462a || VAL_4c0884e8 || VAL_231baf51 || VAL_11841b15 || VAL_73877e19 || VAL_7b208b45 || VAL_5bfc257 || VAL_34523d46 || VAL_7cedfa63 || VAL_3e83c18 || VAL_783efb48 || VAL_5d235104 || VAL_4e8e8621 || VAL_c446b14 || VAL_3af356f || VAL_4443ef6f || VAL_7e46d648 || VAL_51751e5f || VAL_2b0b4d53 || VAL_7068f7ca || VAL_38548b19 || VAL_41aaedaa || VAL_303a5119 || VAL_75b3673 || VAL_1bcb79c2 || VAL_d1a10ac || VAL_6fca2a8f || VAL_31fc71ab || VAL_71391b3f || VAL_2cfbeac4 || VAL_12db3386 || VAL_4078695f || VAL_79a1728c || VAL_a7f0ab6 || VAL_41f35f7c || VAL_42c2f48c || VAL_3005db4a || VAL_425d5d46 || VAL_198ef2ce || VAL_4cbd03e7 || VAL_52fc5eb1 || VAL_7a639ec5 || VAL_14151bc5 || VAL_3013909b || VAL_2a49fe || VAL_66596a88 || VAL_5aae8eb5 || VAL_76954a33 || VAL_24a298a6 || VAL_982bb90 || VAL_27f74733 || VAL_7bef452c || VAL_4bb8855f || VAL_57fae983 || VAL_4a29f290 || VAL_4bee18dc || VAL_44f3fe83 || VAL_44c5a16f || VAL_417d6615 || VAL_7a6ebe1e || VAL_21325036 || VAL_489543a6 || VAL_6272c96f || VAL_6de30571 || VAL_5ee34b1b || VAL_3c89bb12 || VAL_48c4245d || VAL_3df978b9 || VAL_7906578e || VAL_8a62297 || VAL_61a91912 || VAL_1763992e || VAL_5c92166b || VAL_659925f4 || VAL_4cd1c1dc || VAL_47f08b81 || VAL_b9dfc5a || VAL_2787de58 || VAL_659a2455 || VAL_267517e4 || VAL_426e505c || VAL_5b022357 || VAL_6f8e0cee || VAL_614aeccc || VAL_5116ac09 || VAL_1bc425e7 || VAL_4b2a30d || VAL_322803db || VAL_56ba8773 || VAL_6ceb7b5e || VAL_7dd00705 || VAL_f14e5bf || VAL_d176a31 || VAL_3a91d146 || VAL_4784013e || VAL_6f952d6c || VAL_5965844d || VAL_6d4a65c6 || VAL_aa004a0 || VAL_4c98a6d5 || VAL_392a04e7 || VAL_7f02251 || VAL_dffa30b || VAL_4d8126f || VAL_6d3c232f || VAL_6b587673 || VAL_1bcf67e8 || VAL_5f404594 || VAL_53692008 || VAL_7b2a3ff8 || VAL_1bbae752 || VAL_460b6d54 || VAL_5cf87cfd || VAL_76075d65 || VAL_3a4ba480 || VAL_27b71f50 || VAL_383790cf || VAL_74971ed9 || VAL_131fcb6f || VAL_ccd1bc3 || VAL_878537d || VAL_4455f57d || VAL_29fc1a2b || VAL_4d0b0fd4 || VAL_7a24eb3 || VAL_6c37bd27 || VAL_25d3cfc8 || VAL_30331109 || VAL_2571066a || VAL_74fe5966 || VAL_4fe875be || VAL_677b8e13 || VAL_4a9486c0 || VAL_4c27d39d || VAL_40ee0a22 || VAL_7bde1f3a || VAL_15923407 || VAL_67dba613 || VAL_57540fd0 || VAL_5cf8edcf || VAL_58cec85b || VAL_629f066f || VAL_1542af63 || VAL_ecfbe91 || VAL_20ed3303 || VAL_3adbe50f || VAL_3a627c80 || VAL_49aa766b || VAL_963176 || VAL_65004ff6 || VAL_4cafa9aa || VAL_562c877a || VAL_67001148 || VAL_989da1 || VAL_31cb96e1 || VAL_3eed0f5 || VAL_64030b91 || VAL_2032e725 || VAL_4d23015c || VAL_383f1975 || VAL_441cc260 || VAL_73a00e09 || VAL_26dcd8c0 || VAL_66e889df || VAL_444548a0 || VAL_3766c667 || VAL_773c0293 || VAL_55b8dbda || VAL_3b569985 || VAL_3a022576 || VAL_2dbd803f || VAL_3e48e859 || VAL_31ddd4a4 || VAL_1a5f7e7c || VAL_5b22b970 || VAL_22d1886d || VAL_7df60067 || VAL_1cbb3d3b || VAL_529cfee5 || VAL_7ca0863b || VAL_319854f0 || VAL_748fe51d || VAL_415156bf || VAL_393881f0 || VAL_4af46df3 || VAL_4158debd || VAL_af78c87 || VAL_773dab28 || VAL_1ecfcbc9 || VAL_1965539b || VAL_2fc07784 || VAL_353efdbf || VAL_55cff952 || VAL_660591fb || VAL_4a55a6e8 || VAL_8c46918 || VAL_226b143b || VAL_682bd3c4 || VAL_f2e4acf || VAL_24097e9b || VAL_5eb97ced || VAL_68ba310d || VAL_153f66e7 || VAL_7aad3f7d || VAL_6f667ad1 || VAL_566d0c69 || VAL_388b401d || VAL_2bcec6a6 || VAL_77a281fc || VAL_4912d525 || VAL_2bfbffb2 || VAL_765df79d || VAL_151335cb || VAL_4a7761b1 || VAL_3e850122 || VAL_27fde870 || VAL_2b4c3c29 || VAL_5ac7aa18 || VAL_4cdd2c73 || VAL_4abf3f0 || VAL_4e4c3a38 || VAL_293cde83 || VAL_c27d163 || VAL_57c88764 || VAL_78faea5f || VAL_37fdfb05 || VAL_5e39850 || VAL_1603dc2f || VAL_398474a2 || VAL_61799544 || VAL_78c1a023 || VAL_70abf9b0 || VAL_6a10b263 || VAL_476ec9d0 || VAL_325bb9a6 || VAL_1d12b024 || VAL_72fe8a4f || VAL_43effd89 || VAL_2c16fadb || VAL_248deced || VAL_2227a6c1 || VAL_1e9804b9 || VAL_543e593 || VAL_4e628b52 || VAL_51ec2df1 || VAL_f8f56b9 || VAL_15fa55a6 || VAL_4f186450 || VAL_7fab4be7 || VAL_a64e035 || VAL_4d74c3ba || VAL_41c204a0 || VAL_64138b0c || VAL_49dbaaf3 || VAL_22d9c961 || VAL_736f3e9e || VAL_bdc8014 || VAL_1f443fae || VAL_73ba6fe6 || VAL_79ab34c1 || VAL_1698d7c0 || VAL_281f23f2 || VAL_87abc48 || VAL_28d79cba || VAL_782168b7 || VAL_29f0c4f2 || VAL_7435a578 || VAL_6093d508 || VAL_13047d7d || VAL_3c7cfcbb || VAL_65bb9029 || VAL_1bfe3203 || VAL_2b214b94 || VAL_70e3f36f || VAL_49601f82 || VAL_23e44287 || VAL_2b8d084 || VAL_6daf2337 || VAL_24fabd0f || VAL_250b236d || VAL_61f3fbb8 || VAL_7551da2a || VAL_432034a || VAL_78de58ea || VAL_60e5272 || VAL_7d755813 || VAL_69c93ca4 || VAL_63da207f || VAL_173373b4 || VAL_40d10481 || VAL_60dd3c23 || VAL_52b6319f || VAL_5e9456ae || VAL_16a9a4f1 || VAL_1f1cae23 || VAL_7c455e96 || VAL_985696 || VAL_5bcde458 || VAL_215a34b4 || VAL_77bd7fe7 || VAL_35d3ab60 || VAL_10876a6 || VAL_71870da7 || VAL_6dd91637 || VAL_45792847 || VAL_706cb08 || VAL_4e25147a || VAL_6b68cb27 || VAL_675ffd1d || VAL_56303475 || VAL_30506c0d || VAL_1dcca8d3 || VAL_5631962 || VAL_52a70627 || VAL_6124287a || VAL_19569ebd || VAL_4632cfc || VAL_6e1f8469 || VAL_2e380628 || VAL_3b6c624 || VAL_1eaf1e62 || VAL_c81fd12 || VAL_62e6a3ec || VAL_5754de72 || VAL_31ee96f4 || VAL_320494b6 || VAL_652ab8d9 || VAL_14fc5d40 || VAL_51e0301d || VAL_47d7bfb3 || VAL_770b3be0 || VAL_1eb6e1c || VAL_51dbd6e4 || VAL_2b8bd14b || VAL_5f13be1 || VAL_5f303ecd || VAL_50d3bf39 || VAL_25a73de1 || VAL_29852487 || VAL_771db12c || VAL_3afae281 || VAL_26ae880a || VAL_260f2144 || VAL_3c017078 || VAL_51827393 || VAL_3be4f71 || VAL_5c645b43 || VAL_6bd16207 || VAL_298d9a05 || VAL_58399d82 || VAL_26f96b85 || VAL_46d8f407 || VAL_3c0036b || VAL_17814b1c || VAL_7ac9af2a || VAL_7bb004b8 || VAL_78e89bfe || VAL_652ce654 || VAL_522ba524 || VAL_29c5ee1d || VAL_15cea7b0 || VAL_17d2ed1b || VAL_185f7840 || VAL_1e6cc850 || VAL_7e7f0f0a || VAL_7ec58feb || VAL_1dbb650b || VAL_656d10a4 || VAL_63ec445c || VAL_3104351d || VAL_77d18d0b || VAL_7a344b65 || VAL_7b7b3edb || VAL_6b474074 || VAL_108531c2 || VAL_48b22fd4 || VAL_6a9d5dff || VAL_3b08f438 || VAL_2bac9ba || VAL_5b2f8ab6 || VAL_5bdd5689 || VAL_2788d0fe || VAL_73ab3aac || VAL_54f66455 || VAL_65ae095c || VAL_4c03a37 || VAL_2e140e59 || VAL_49a71302 || VAL_5cd61783 || VAL_59429fac || VAL_57aa341b || VAL_26e412ef || VAL_4ae263bf || VAL_7103ab0 || VAL_19ccca5 || VAL_769d513 || VAL_5e4fa1da || VAL_588cd519 || VAL_3f92c349 || VAL_769a58e5 || VAL_55f8669d || VAL_6be25526 || VAL_42435b98 || VAL_66ba7e45 || VAL_70e02081 || VAL_9d200de || VAL_511505e7 || VAL_646811d6 || VAL_15fdd1f2 || VAL_cb0f763 || VAL_7573e12f || VAL_51b1a8f6 || VAL_2a389173 || VAL_213860b8 || VAL_4ba89729 || VAL_178270b2 || VAL_795fd838 || VAL_1b005a0b || VAL_141e879d || VAL_109d724c || VAL_1704f67f || VAL_e4d2696 || VAL_6e0f7aad || VAL_15fb7a32 || VAL_257cc1fc || VAL_42e22a53 || VAL_57adfab0 || VAL_1949309d || VAL_5af97169 || VAL_99a78d7 || VAL_31da6b2e || VAL_61c76850 || VAL_70242f38 || VAL_2a22ad2b || VAL_48c3205a || VAL_121c54fa || VAL_4390f46e || VAL_7c6442c2 || VAL_2d746ce4 || VAL_5dbf5634 || VAL_1948ea69 || VAL_47e4d9d0 || VAL_49798e84 || VAL_6ed06f69 || VAL_3015db78 || VAL_515ebef3 || VAL_545607f2 || VAL_39109136 || VAL_27c04377 || VAL_34dc85a || VAL_67403656 || VAL_5a6482a9 || VAL_7f9ab969 || VAL_12f8b1d8 || VAL_746cd757 || VAL_ae372b9 || VAL_2098d37d || VAL_77b9d0c7 || VAL_65fd6708 || VAL_749ab7b4 || VAL_127f9161 || VAL_2bf94401 || VAL_2532b351 || VAL_4349754 || VAL_6a2eea2a || VAL_b967222 || VAL_3b0ee03a || VAL_1ba05e38 || VAL_6c298dc || VAL_3e7dfd44 || VAL_723ed581 || VAL_6b760460 || VAL_796065aa || VAL_28a6301f || VAL_2c306a57 || VAL_773e2eb5 || VAL_d8948cd || VAL_1436a7ab || VAL_3b7b05a8 || VAL_3d36dff4 || VAL_7abe27bf || VAL_5b94ccbc || VAL_38a1c423 || VAL_336365bc || VAL_38eb2fb0 || VAL_4567e53d || VAL_7351a16e || VAL_5bb7643d || VAL_3ac04654 || VAL_4074023c || VAL_3ed0918d || VAL_5e268ce6 || VAL_66ec9390 || VAL_6e91893 || VAL_3c0fbd3a || VAL_562457e1 || VAL_54562ea6 || VAL_1a35993f || VAL_5b12012e || VAL_2f7dcef2 || VAL_4a3be6a5 || VAL_7cf162bc || VAL_3721177d || VAL_766a4535 || VAL_63718b93 || VAL_14e2e1c3 || VAL_2b4786dd || VAL_f202d6d || VAL_60e21209 || VAL_630d1b2f || VAL_746b18fd || VAL_7a2e0858 || VAL_aac3f4e || VAL_1f38957 || VAL_2df3c564 || VAL_2715644a || VAL_4c2869a9 || VAL_518cf84a || VAL_62e7dffa || VAL_6edcd0d8 || VAL_6136998b || VAL_57ce634f || VAL_b8a7e43 || VAL_35835fa || VAL_56f71edb || VAL_7207cb51 || VAL_2a27cb34 || VAL_6892cc6f || VAL_6fd1660 || VAL_4a6c18ad || VAL_5e8604bf || VAL_20095ab4 || VAL_4e2916c3 || VAL_64aad6db || VAL_ae7950d || VAL_60d1b21f || VAL_66c83fc8 || VAL_546621c4 || VAL_621f89b8 || VAL_f339eae || VAL_2822c6ff || VAL_4dafba3e || VAL_53e3a87a || VAL_40368a46 || VAL_7e9da981 || VAL_4ed38226 || VAL_3d43fe || VAL_74ad8d05 || VAL_676ff3b0 || VAL_35ff8fc9 || VAL_5fb7183b || VAL_476a736d || VAL_5f80fa43 || VAL_16c8b7bd || VAL_7159139f || VAL_65bcf7c2 || VAL_3db64bd4 || VAL_6e106680 || VAL_576c5536 || VAL_55ecbafe || VAL_5a8ba37c || VAL_37c2eacb || VAL_232cce0 || VAL_32b9bd12 || VAL_352e787a || VAL_159a48a6 || VAL_15bc339 || VAL_7e75bf2d || VAL_385ef531 || VAL_7fc645e4 || VAL_205b132e || VAL_73044cdf || VAL_3cbcd8f3 || VAL_719843e5 || VAL_9a2ec9b || VAL_58112bc4 || VAL_2301b75 || VAL_3104f7bd || VAL_2f5c1332 || VAL_7ec25216 || VAL_7cab1508 || VAL_6a84bc3f || VAL_258ee7de || VAL_4930539b || VAL_6d171ce0 || VAL_22bd2039 || VAL_705f83a7 || VAL_3bb8aabc || VAL_6e1d4137 || VAL_256a1825 || VAL_29a4f594 || VAL_57b75756 || VAL_5327a06e || VAL_2679311f || VAL_287f7811 || VAL_451f87af || VAL_2b556bb2 || VAL_44cb460e || VAL_17271176 || VAL_2e3cdec2 || VAL_2e34384c || VAL_3051e0b2 || VAL_1f52eb6f || VAL_57d0fc89 || VAL_58294867 || VAL_67c277a0 || VAL_6fc3e1a4 || VAL_3fa76c61 || VAL_2d5f7182 || VAL_59546cfe || VAL_29ea78b1 || VAL_2d2acd89 || VAL_7baf6acf || VAL_1e6dad8 || VAL_7b3315a5 || VAL_8ed9cf || VAL_f72203 || VAL_377008df || VAL_540dbda9 || VAL_22bb5646 || VAL_1be59f28 || VAL_2ce45a7b || VAL_153d4abb || VAL_6d4c273c || VAL_5a67e962 || VAL_545e57d7 || VAL_2bc9a775 || VAL_27b000f7 || VAL_42f9c19a || VAL_64bfd6fd || VAL_2ab2710 || VAL_253b380a || VAL_29c2c826 || VAL_3350ebdd || VAL_6818d900 || VAL_149f5761 || VAL_2ba33e2c || VAL_1f193686 || VAL_31e72cbc || VAL_5fad41be || VAL_6dcd5639 || VAL_3b36e000 || VAL_333cb916 || VAL_629ae7e || VAL_1d25c1c || VAL_de88ac6 || VAL_5bca7664 || VAL_105b693d || VAL_3fae596 || VAL_4a0df195 || VAL_42fcc7e6 || VAL_9255c05 || VAL_5da7cee2 || VAL_78830d9a || VAL_5ce4369b || VAL_7f829c76 || VAL_1cb19dba || VAL_7c3ebc6b || VAL_1931d99 || VAL_6a9950f1 || VAL_7ad54c55 || VAL_73017a80 || VAL_6ae7deac || VAL_4a5905d9 || VAL_1a3e5f23 || VAL_6293e39e || VAL_365553de || VAL_34a0ef00 || VAL_5c0f79f0 || VAL_21fdfefc || VAL_3daa82be || VAL_ec1b2e4 || VAL_29a69a35 || VAL_67e28be3 || VAL_e344ad3 || VAL_de18f63 || VAL_108bdbd8 || VAL_6345e7b9 || VAL_4f8b4bd0 || VAL_4e904fd5 || VAL_b18c4 || VAL_4cbf4f53 || VAL_597f48df || VAL_15dd5ac2 || VAL_4d48bd85 || VAL_7bbbb6a8 || VAL_58a120b0 || VAL_27d57a2c || VAL_2ff95fc6 || VAL_9d1a267 || VAL_58a4a74d || VAL_54aca26f || VAL_314ed053 || VAL_35088e87 || VAL_486bc9a4 || VAL_7965a51c || VAL_3eee3e2b || VAL_4f63e3c7 || VAL_59532566 || VAL_dca2615 || VAL_421a4ee1 || VAL_1237e0be || VAL_528f8f8b || VAL_ea9e141 || VAL_1e54cb33 || VAL_33cbfa57 || VAL_1d96d872 || VAL_5c748168 || VAL_6441c486 || VAL_834831b || VAL_234a8f27 || VAL_5b4d25e7 || VAL_31c2affc || VAL_1dc2de84 || VAL_6a0659ac || VAL_58d63b16 || VAL_7c4fc2bf || VAL_7772054c || VAL_2f61f937 || VAL_46866946 || VAL_44de0113 || VAL_236134a1 || VAL_369c9bb || VAL_76d05cc9 || VAL_42b21d99 || VAL_68dcfd52 || VAL_25b5c5e3 || VAL_5177e388 || VAL_37b72ea || VAL_cc239ba || VAL_7d37f1c || VAL_69d6a7cd || VAL_3162743f || VAL_2c708440 || VAL_3047254d || VAL_6cf31447 || VAL_4e92466a || VAL_66e8997c || VAL_6f0cb5a1 || VAL_1b29d52b || VAL_47547132 || VAL_655523dd || VAL_6f7e336b || VAL_3a2b2322 || VAL_5e1218b4 || VAL_12958360 || VAL_c6e0f32 || VAL_6f3f0fae || VAL_21a66d45 || VAL_1f966492 || VAL_63fdffcd || VAL_7428de63 || VAL_66f659e6 || VAL_4a68135e || VAL_46678e49 || VAL_748e9b20 || VAL_2063c53e || VAL_2a9bc08f || VAL_50f40653 || VAL_50a3d0f6 || VAL_6e57b5e9 || VAL_1abc9f14 || VAL_6a0ac48e || VAL_24e08d59 || VAL_77cb9cd1 || VAL_971e903 || VAL_35636217 || VAL_1549bba7 || VAL_3e4f80cb || VAL_38704ff0 || VAL_16ade133 || VAL_4e61e4c2 || VAL_c6a6c1d || VAL_36dfbdaf || VAL_4f82663e || VAL_e04ccf8 || VAL_51d143a1 || VAL_1a28aef1 || VAL_4647881c || VAL_6e0cff20 || VAL_359b650b || VAL_6a9b0a6f || VAL_10667848 || VAL_191a709b || VAL_77c7ed8e || VAL_453d496b || VAL_66bacdbc || VAL_2c6ee758 || VAL_640dc4c6 || VAL_4b54af3d || VAL_7bb35cc6 || VAL_203c20cf || VAL_2a1debfa || VAL_44de94c3 || VAL_256aa5f2 || VAL_6411d3c8 || VAL_2116b68b || VAL_11de56e6 || VAL_616b241a || VAL_b8e246c || VAL_1f387978 || VAL_7cb2651f || VAL_4441d567 || VAL_3e1624c7 || VAL_62b969c4 || VAL_dcc6211 || VAL_47ec7422 || VAL_48535004 || VAL_610df783 || VAL_f3fcd59 || VAL_2b56f5f8 || VAL_79d743e6 || VAL_776802b0 || VAL_64c4c01 || VAL_1aa99005 || VAL_592238c5 || VAL_6ee8dcd3 || VAL_a20b94b || VAL_5cdf39b2 || VAL_14f3c6fc || VAL_3cd59ef5 || VAL_33b082c5 || VAL_16073fa8 || VAL_1cc9cfb2 || VAL_cfbc8e8 || VAL_3bead518 || VAL_14bf57b2 || VAL_46d9aec8 || VAL_14379273 || VAL_7918c7f8 || VAL_17740dae || VAL_1c504e66 || VAL_345cf395 || VAL_bc4d5e1 || VAL_3c6aa04a || VAL_2257fadf || VAL_7144655b || VAL_5c82cd4f || VAL_35835e65 || VAL_289fdb08 || VAL_7a231dfd || VAL_30814f43 || VAL_1fde4f40 || VAL_49cf9028 || VAL_2b61a019 || VAL_11a00961 || VAL_7ce9e05a || VAL_4992613f || VAL_6fd5717c || VAL_7e2f86e6 || VAL_4d774249 || VAL_17b64941 || VAL_53ac845a || VAL_5136207f || VAL_26a4551a || VAL_3fdecce || VAL_344426bf || VAL_5411dd90 || VAL_50194e8d || VAL_3cee53dc || VAL_290aeb20 || VAL_73ad4ecc || VAL_69da0b12 || VAL_2764c546 || VAL_59496961 || VAL_408b87aa || VAL_79b08632 || VAL_787f32b7 || VAL_6aef4eb8 || VAL_76c52298 || VAL_bb9ab64 || VAL_a52ca2e || VAL_1ad8df52 || VAL_45d6ef73 || VAL_3f29e26 || VAL_1f6d27cc || VAL_4393593c || VAL_314c8b4a || VAL_26d820eb || VAL_507d20bb || VAL_9fec931 || VAL_5cbd159f || VAL_3b05a99b || VAL_2c43eb8 || VAL_7d0cc890 || VAL_49293b43 || VAL_5ff60a8c || VAL_7ce4de34 || VAL_67b7c170 || VAL_67440de6 || VAL_889d9e8 || VAL_5246a3b3 || VAL_ba354ca || VAL_4c4f4365 || VAL_acf859d || VAL_6df3e44c || VAL_7ce7e83c || VAL_4a05d8ae || VAL_3c904f1e || VAL_4eb30d44 || VAL_d56aaa6 || VAL_6972c30a || VAL_57a48985 || VAL_1ab6718 || VAL_3910fe11 || VAL_460510aa || VAL_351e414e || VAL_6fd77352 || VAL_5109e8cf || VAL_3f672204 || VAL_78b41097 || VAL_2c2db130 || VAL_327c7bea || VAL_348d18a3 || VAL_6c65860d || VAL_2d000e80 || VAL_7cf283e1 || VAL_20e6c4dc || VAL_60737b23 || VAL_4d2a1da3 || VAL_252f626c || VAL_33f98231 || VAL_48284d0e || VAL_557286ad || VAL_b10a26d || VAL_74075134 || VAL_7e4d2287 || VAL_3f4b840d || VAL_31464a43 || VAL_7f8633ae || VAL_68c87fc3 || VAL_bc0f53b || VAL_8d7b252 || VAL_4682eba5 || VAL_6d9fb2d1 || VAL_61fafb74 || VAL_540a903b || VAL_58496dc || VAL_151db587 || VAL_238acd0b || VAL_23811a09 || VAL_2125ad3 || VAL_7a5b769b || VAL_f4c0e4e || VAL_24361cfc || VAL_34e20e6b || VAL_15ac59c2 || VAL_7a7d1b47 || VAL_6eb82908 || VAL_4a8df3e2 || VAL_3d98d138 || VAL_2f2d52ef || VAL_f2ce6b || VAL_25c53f74 || VAL_5e2f3be5 || VAL_1bd0b0e5 || VAL_dc7b462 || VAL_1f51431 || VAL_26a2f7f9 || VAL_38eb2c50 || VAL_8bffb8b || VAL_21422231 || VAL_10ee04df || VAL_7186333e || VAL_692fd26 || VAL_36f1046f || VAL_56d93692 || VAL_1686f0b4 || VAL_76c548f || VAL_3900fa71 || VAL_26722665 || VAL_7d0614f || VAL_627d8516 || VAL_5c10285a || VAL_6b667cb3 || VAL_6f38a289 || VAL_61e3cf4d || VAL_3cec79d3 || VAL_64b70919 || VAL_4e31c3ec || VAL_3157e4c0 || VAL_6eaa21d8 || VAL_328902d5 || VAL_72e789cb || VAL_7c1812b3 || VAL_43034809 || VAL_39e67516 || VAL_77010a30 || VAL_4bb003e9 || VAL_12aa4996 || VAL_18eec010 || VAL_67c119b7 || VAL_2ca5f1ed || VAL_6c03fb16 || VAL_28348c6 || VAL_6de0f580 || VAL_6e495b48 || VAL_1d61c6dc || VAL_53c68ce || VAL_6f9ad11c || VAL_4b2d44bc || VAL_58e92c23 || VAL_3e7545e8 || VAL_75e710b || VAL_26f7cdf8 || VAL_376e7531 || VAL_23202c31 || VAL_5782d777 || VAL_4f824872 || VAL_b016b4e || VAL_29629fbb || VAL_681adc8f || VAL_3506d826 || VAL_35dd9ed3 || VAL_8ff5094 || VAL_363f0ba0 || VAL_35fb22a9 || VAL_6c8909c3 || VAL_1e008f36 || VAL_50acf55d || VAL_3cae7b8b || VAL_184dbacc || VAL_2aeefcc || VAL_359ff4d9 || VAL_7a22a3c2 || VAL_f4cfd90 || VAL_7ae9a33a || VAL_301aa982 || VAL_5fc930f0 || VAL_3701e6e4 || VAL_c6634d || VAL_65f58c6e || VAL_73ad7e90 || VAL_4ba380c7 || VAL_784c5ef5 || VAL_31133b6e || VAL_29528a22 || VAL_7ea08277 || VAL_6401d0a0 || VAL_4ce14f05 || VAL_71dfcf21 || VAL_b965857 || VAL_61f80d55 || VAL_27a7ef08 || VAL_280e8a1a || VAL_11e33bac || VAL_30501e60 || VAL_289778cd || VAL_7495699f || VAL_7c2312fa || VAL_4cb0a000 || VAL_5ff2e84b || VAL_74abbb || VAL_64a4dd8d || VAL_2dddc1b9 || VAL_65a5d4f9 || VAL_40298285 || VAL_22367b8 || VAL_41b0ae4c || VAL_af9a89f || VAL_6482eef || VAL_1fcf9739 || VAL_5b498842 || VAL_1cb37ee4 || VAL_5bcb04cb || VAL_385e36d4 || VAL_2fc2a205 || VAL_2881ad47 || VAL_2bef09c0 || VAL_62ce72ff || VAL_58a63629 || VAL_7de843ef || VAL_2e1af49b || VAL_3fd2322d || VAL_56ac5c80 || VAL_69e49a81 || VAL_1023150a || VAL_3ece1e79 || VAL_ab20d7c || VAL_474fae39 || VAL_4f4c789f || VAL_13f9ad9 || VAL_1b7cae6f || VAL_21f8e55f || VAL_d5ce97f || VAL_7048535f || VAL_e3994ef || VAL_680d4a6a || VAL_2f04105 || VAL_309028af || VAL_724c5cbe || VAL_70101687 || VAL_70e889e9 || VAL_418c020b || VAL_51351f28 || VAL_21618fa7 || VAL_15f2eda3 || VAL_34cf294c || VAL_4d7aaca2 || VAL_604b1e1d || VAL_62566842 || VAL_2f1ea80d || VAL_37191ef0 || VAL_f1a45f8 || VAL_5edf2821 || VAL_4dbad37 || VAL_7b4acdc2 || VAL_26a262d6 || VAL_11bd803 || VAL_58f07f02 || VAL_75798d03 || VAL_40f8f5a8 || VAL_1ffcf674 || VAL_442f92e6 || VAL_7d070ef5 || VAL_7a55f148 || VAL_2e2f720 || VAL_3ae2ed38 || VAL_7f572c37 || VAL_2add4d24 || VAL_3f93e4a8 || VAL_12b5454f || VAL_5445f5ba || VAL_1431267b || VAL_342726f1 || VAL_c808207 || VAL_77134e08 || VAL_6a0cbc6f || VAL_67110f71 || VAL_6f89292e || VAL_20749d9 || VAL_de77232 || VAL_62628e78 || VAL_44841b43 || VAL_7c75db8b || VAL_4ab550d5 || VAL_3cd206b5 || VAL_58e85c6f || VAL_a137d7a || VAL_6ac0b715 || VAL_468be356 || VAL_5c9ac4cc || VAL_4df39a88 || VAL_2264e43c || VAL_3bec2275 || VAL_31da3d60 || VAL_60acd609 || VAL_65ec8b24 || VAL_3f49e266 || VAL_5f18f9d2 || VAL_598260a6 || VAL_58b67519 || VAL_281ce6bb || VAL_30d25c03 || VAL_7a1f8def || VAL_116a2108 || VAL_5e8c34a0 || VAL_7c1c5936 || VAL_7aead3af || VAL_3ac8cf9b || VAL_55ec556 || VAL_1b15f922 || VAL_37ce3644 || VAL_4b869331 || VAL_38018b62 || VAL_ce9b9a9 || VAL_4ad3d266 || VAL_3533df16 || VAL_15d0849 || VAL_4038cd3a || VAL_14ac77b9 || VAL_3f4cd155 || VAL_563a89b5 || VAL_506dcf55 || VAL_270b6b5e || VAL_7e94d093 || VAL_7c6189d5 || VAL_4248e66b || VAL_3e6534e7 || VAL_66ad7bf0 || VAL_167279d1 || VAL_138caeca || VAL_4d96250 || VAL_9a6fbc0 || VAL_c1fa7d4 || VAL_7a93b263 || VAL_35178483 || VAL_bd1111a || VAL_7a8136b3 || VAL_1de6932a || VAL_14dc3f89 || VAL_1706a5c9 || VAL_64412d34 || VAL_4d178d55 || VAL_38c2c309 || VAL_1a480135 || VAL_778db7c5 || VAL_681e144 || VAL_2875b016 || VAL_72ee5d84 || VAL_68c7ef83 || VAL_6145b81e || VAL_64355120 || VAL_64b7225f || VAL_33db72bd || VAL_7f92b990 || VAL_31e04b13 || VAL_6c1832aa || VAL_4beeb0e || VAL_6e8a9c30 || VAL_5d01ea21 || VAL_70211e49 || VAL_3b46dd8 || VAL_39651a82 || VAL_6be7bf6d || VAL_134c370e || VAL_33364212 || VAL_2216effc || VAL_745c2004 || VAL_6da9dc6 || VAL_7fd69dd || VAL_12010fd1 || VAL_7c84195 || VAL_552ed807 || VAL_3971f0fe || VAL_23940f86 || VAL_66153688 || VAL_455824ad || VAL_7318daf8 || VAL_70f31322 || VAL_3f1ddac2 || VAL_3be4fcc0 || VAL_e1e2e5e || VAL_661c46bc || VAL_37864b77 || VAL_2b98b3bb || VAL_540b0448 || VAL_50a691d3 || VAL_557eb543 || VAL_3b95d13c || VAL_3730ab42 || VAL_537c8c7e || VAL_7308ffff || VAL_6601cc93 || VAL_54d901aa || VAL_63716833 || VAL_573284a5 || VAL_3fbfbf84 || VAL_23f72d88 || VAL_4bafe935 || VAL_87b5b49 || VAL_4a7a965d || VAL_507b79f7 || VAL_64a9d48c || VAL_365a6a43 || VAL_288cdaab || VAL_23b3aa8c || VAL_99407c2 || VAL_6c796cc1 || VAL_226eba67 || VAL_1cb7936c || VAL_35342d2f || VAL_128c502c || VAL_45667d98 || VAL_65eabaab || VAL_7123be6c || VAL_1de9d54 || VAL_77a2aa4a || VAL_47ad69f7 || VAL_2b917fb0 || VAL_5e5073ab || VAL_3c4262d1 || VAL_100c567f || VAL_30c0d731 || VAL_6d5037a9 || VAL_422b8438 || VAL_30669dac || VAL_629adce || VAL_6a282fdd || VAL_743c6ce4 || VAL_70331432 || VAL_3bbf9027 || VAL_10c2064a || VAL_70e13fa || VAL_6ff415ad || VAL_280d9edc || VAL_28fd3dc1 || VAL_5f9b6ae7 || VAL_108d55c4 || VAL_5432c277 || VAL_15e0fe05 || VAL_1128620c || VAL_6bf13698 || VAL_299270eb || VAL_3b90a30a || VAL_69fa8e76 || VAL_bdd2027) {
                    cellViewBelow.model.embed(cell);
                }
            }
        }
        updateDiagram();
    }
});
