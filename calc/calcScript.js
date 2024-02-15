var res = document.getElementById("inputText");

function takeInput(num) {
   
        res.value += num;
}
function result() {
   
        res.value = eval(res.value);
}
function clr() {
    res.value = "  ";

}
function del(){
    res.value = res.value.slice(0, -1);
    
}
function sin() {
    degrees_to_radians();
    res.value = Math.sin(res.value);
}
function tan() {
    degrees_to_radians();
      res.value = Math.tan(res.value);
    
}
function cos() {
    degrees_to_radians();
      res.value = Math.cos(res.value);
}
function log() {
    res.value = Math.log(res.value);
}
function exp() {
    res.value = Math.exp(res.value);
}

function square() {
    res.value = Math.pow(res.value,2);
}

function cubic() {
    res.value = Math.pow(res.value,3);
}
function degrees_to_radians()
{
    var pi = Math.PI;
    res.value =  res.value * (pi/180);
  
}
