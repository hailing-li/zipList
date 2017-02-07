/**
 * zipList js file
 * Created by hailingli on 2/6/2017.
 */
let a=[1,2,3];
let b=['a','b','c'];
function zipList(x,y){
  let z=[];
  for (let i=0; i<x.length;i++) {
    z.push(x[i], y[i]);
  }
  return z;
}
console.log(zipList(a,b));

function zipListTheSimpleWay(x,y){
  return _.flatten(_.zip(x,y));
}
console.log(zipListTheSimpleWay(a,b));
