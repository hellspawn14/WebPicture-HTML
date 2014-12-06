var graph = new joint.dia.Graph;
var paper = new joint.dia.Paper(
{
            el: $('#grupo1'),
    gridSize: 10,
    height: 500,
    width: $('#tools').width(),
    gridSize: 1,
    model: graph
});

var c = new joint.shapes.basic.Circle(
{
    position: { x: 10, y: 10 }, size: { width: 100, height: 100 },
    attrs:
    {
        circle: { fill: '#9B59B6', opacity: 0.5},
        text: { text: 'circle', fill: 'black', 'y-alignment': 'middle'},
    },
});
graph.addCell(c);
var rbx = new joint.shapes.basic.Rect(
{
    position: { x: 10, y: 120 },
    size: { width: 100, height: 40 },
    attrs:
    {
        text: { text: 'basic.ola ke ase', 'y-alignment': 'middle' },
        rect: { fill: '#2ECC71' , opacity: 0.5}
    }
});
graph.addCell(rbx);

var Circ5e481248 = new joint.shapes.basic.Circle(
{
  position: { x: 10, y: 180 },
  size: { width: 100, height: 100 },
  attrs:
  {
    circle:
    {
      width: 100,
      height: 100,
      fill: '#00FFFF',
      rx: 100, ry: 100,
      'stroke-width': 1 ,
      stroke: '#000000' ,
      'stroke-dasharray': '0,0',
    },
    text: {text: 'Ola ke ase', fill: 'black', 'font-size': 14, 'font-weight': 'normal'}
  }
});
graph.addCell(Circ5e481248);
