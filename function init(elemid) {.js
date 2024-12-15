function init(elemid)  {
    let canvas = (elemid),
    c = canvas.getcontext("2d"),
    w = (window.innerWidth),
    h = (window.innerWidth);
    c.fillstyle = "rgb(30,30,30)";
    c.fillRect(0,0,w,h);
    return{c, canvas }; 
console.log(c, canvas)
}