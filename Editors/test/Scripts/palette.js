var graph = new joint.dia.Graph;
var paper = new joint.dia.Paper(
  {
    el: $('#grupo1'),
    gridSize: 10,
    height: 500,
    width: 300,
    gridSize: 1,
    model: graph
  });
  var rb = new joint.shapes.basic.Rect(
    {
      position: { x: 10, y: 10 },
      size: { width: 100, height: 40 },
      attrs: { text: { text: 'basic.Rect' } }
    });


    var c = new joint.shapes.basic.Circle(
      {
        position: { x: 10, y: 10 }, size: { width: 100, height: 100 },
        attrs:
        {
          circle: { fill: '#9B59B6', interactive: false},
          text: { text: 'circle', fill: 'white' },
          draggable: true
        },
      });
      //c.options.interactive = false;
      graph.addCell(c);
      var rbx = new joint.shapes.basic.Rect(
        {
          position: { x: 10, y: 120 },
          size: { width: 100, height: 40 },
          attrs: { text: { text: 'basic.ola ke ase' } }
        });
        graph.addCell(rbx);
        
