//Script de pruebas 
(function () {

    //------------------------------------------------------
    //Palette definition  
    //------------------------------------------------------

        $("#paletteName").text("Nombre de la paleta");
        Tipped.create('#paletteName', 'Nueva paleta', {
            position: 'right'
        });
    

        $("#tools").append('<h5 id="headGroup1" class="marketing-header-canvas" style="text-align:left;color:white; background-color:#181818;border-top:1px solid #808080"><i class="fa fa-bars" style="margin-left:5px"></i> Secction I</h5><div id="grupo1" style="background-color:#F0F0F0; overflow-y: auto; height:300px"></div>');
        Tipped.create('#headGroup1', 'Group I description', {
            position: 'right'
        });

        $("#tools").append('<h5 id="headGroup2" class="marketing-header-canvas" style="text-align:left;color:white; background-color:#181818;border-top:1px solid #808080"><i class="fa fa-bars" style="margin-left:5px"></i> Secction I</h5><div id="grupo1" style="background-color:#F0F0F0; overflow-y: auto; height:300px"></div>');
        Tipped.create('#headGroup2', 'Group I description', {
            position: 'right'
        });


        $('#tools').append('<h5 id="HEAD_330bedb4" class="marketing-header-canvas" style="text-align:left;color:white; background-color:#181818;border-top:1px solid #808080"><i class="fa fa-bars" style="margin-left:5px"></i> Grupo de prueba</h5><div id="GROUP_330bedb4" style="background-color:#F0F0F0; overflow-y: auto; height:50px"></div>');
        Tipped.create('#HEAD_330bedb4', 'Esto es una prueba no mames guey, vamos guey', {
            position: 'right'
        });
        var GRAPH_330bedb4 = new joint.dia.Graph;
        var PAPER_330bedb4 = new joint.dia.Paper({
            el: $('#GROUP_330bedb4'),
            gridSize: 10,
            height: $('#GROUP_330bedb4').height(),
            width: $('#tools').width(),
            gridSize: 1,
            model: GRAPH_330bedb4,
            interactive: false
        });




    /**
     *
     */
    $(function () {
        $("#tools").accordion({
            collapsible: true,
            heightStyle: "content"
        });
    });




    //------------------------------------------------------
    //Palette groups definition  
    //------------------------------------------------------



    //------------------------------------------------------
    //Scripts genericos
    //------------------------------------------------------



}());