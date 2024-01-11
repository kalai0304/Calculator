function clr(){
    document.getElementById("result").value='0';
}
let flag=0;
// var rm;
function display(val){
    // let curly=document.getElementById("result").value;
    // rm=val;

    document.getElementById("result").value +=val;

}
function equate(){
    let x=document.getElementById("result").value;
    let y=eval(x);
    document.getElementById("result").value = y;
    flag=1;
}


