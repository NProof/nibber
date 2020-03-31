// Try edit message
const data = {
  message: 'Hello world',
}

$('#msg').html(data.message)

console.log(data)

$(document).ready(function() {
  $("#msg").click(function() {
    let size = prompt("How many of size?", "4");
    let n_s = parseInt(size);
    new Maze(size);
  });
});

class Maze {
  constructor(size){
    this.size = size;
    this.n = size * size;
    this.objs = new Array(this.n);
    for(let i = 0; i < this.n; ++i)
     this.objs[i] = new Vertex(i);
    for(let i = 1; i < this.n; ++i) {
      let u =  this.objs[i];
      let y = i % size;
      let x = ( i - y) / size;
      if( x > 0) {
        let v = this.objs[ i - size];
        u.adjance(v);
        v.adjance(u);
      }
      if( y > 0) {
        let v = this.objs[i - 1];
        u.adjance(v);
        v.adjance(u);
      }
    }
    // for(let i = 0; i < this.n; ++i) {
    //  console.log( this.objs[i].adjs.size ) ;
    // }
  }
}

class Vertex{
  constructor(n){
    this.n = n;
    this.adjs = new Set();
  }

  adjance(v) {
    this.adjs.add(v);
  }
}

