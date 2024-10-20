function changeColor(color, ghatna){

    let heading = document.getElementById('xyz');

    if(heading.style.color === color){
        return;
    }

    heading.style.color = color;



    const allButtons = document.getElementsByTagName("button");

    for(let i = 0;i < allButtons.length;i++){
        const b = allButtons[i];
        b.disabled = false;
    }


    const button = ghatna.target;
    button.disabled = true;

}
function hide(){
    
    let heading = document.getElementById('xyz');
    heading.style.visibility = 'hidden';
}
function show(){
    
    let heading = document.getElementById('xyz');
    heading.style.visibility = 'visible';
    
}
function load(){

    let before = document.getElementById('before');
    before.style.display = 'none';

    let after = document.getElementById('after');
    after.style.display = 'block';

    changeName();

}
function reLoad(){

    let after = document.getElementById('after');
    after.style.display = 'none';

    let before = document.getElementById('before');
    before.style.display = 'block';

}
function changeName(){
    let enter = document.getElementById("texti").value.toUpperCase();
    let texta = document.getElementById("xyz");

    if(enter === ""){


    return reLoad();

}

    texta.innerHTML = enter;

}

