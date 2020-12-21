const head = document.getElementById('rhead');
const neck = document.getElementById('neck');
const larm = document.getElementById('larm');
const torso = document.getElementById('torso');
const rarm = document.getElementById('rarm');
const lleg = document.getElementById('lleg');
const rleg = document.getElementById('rleg');
const lfoot = document.getElementById('lfoot');
const rfoot = document.getElementById('rfoot');
let torse = document.getElementById('bgtorse');
// const torse = document.getElementById('bgtorse');



head.addEventListener("click", remove_robot)
neck.addEventListener("click", remove_robot)
larm.addEventListener("click", remove_robot)
torso.addEventListener("click", remove_robot)
rarm.addEventListener("click", remove_robot)
lleg.addEventListener("click", remove_robot)
rleg.addEventListener("click", remove_robot)
lfoot.addEventListener("click", remove_robot)
rfoot.addEventListener("click", remove_robot)


let new_btn = document.createElement('section');
new_btn.style.width = "110px";
new_btn.style.height = "80px";
new_btn.style.backgroundColor = "black";
new_btn.style.color = "white";
new_btn.style.fontSize = "2em";
new_btn.textContent = "Reviens Robot!";

function remove_robot() {
    head.style.opacity = "0";
    neck.style.opacity = "0";
    larm.style.opacity = "0";
    torso.style.opacity = "0";
    rarm.style.opacity = "0";
    lleg.style.opacity = "0";
    rleg.style.opacity = "0";
    lfoot.style.opacity = "0";
    rfoot.style.opacity = "0";

    let new_p = document.createElement('p');
    new_p.textContent = "Bye Human!";
    torse.appendChild(new_p); 
    new_p.style.color = "red";
    new_p.style.fontSize = "5em";

    torse.appendChild(new_btn);
}



new_btn.addEventListener("click", comeback_robot)

function comeback_robot() {
    head.style.opacity = "1";
    neck.style.opacity = "1";
    larm.style.opacity = "1";
    torso.style.opacity = "1";
    rarm.style.opacity = "1";
    lleg.style.opacity = "1";
    rleg.style.opacity = "1";
    lfoot.style.opacity = "1";
    rfoot.style.opacity = "1";
}



