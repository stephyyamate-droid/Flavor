/* =====================================
   Flavor Browser
   script.js
   Part 1
===================================== */

const input = document.getElementById("searchInput");
const button = document.getElementById("goButton");

/* Search */

function search(){

    let value = input.value.trim();

    if(value === "") return;

    if(
        value.startsWith("http://") ||
        value.startsWith("https://")
    ){

        window.location.href = value;
        return;

    }

    if(value.includes(".")){

        window.location.href = "https://" + value;
        return;

    }

    window.location.href =
    "https://www.google.com/search?q=" +
    encodeURIComponent(value);

}

/* Button */

button.addEventListener("click", search);

/* Enter */

input.addEventListener("keydown",(e)=>{

    if(e.key==="Enter"){

        search();

    }

});

/* Autofocus */

window.onload=()=>{

    input.focus();

};

/* Ripple */

document.querySelectorAll("button").forEach(btn=>{

btn.addEventListener("click",e=>{

const ripple=document.createElement("span");

ripple.className="ripple";

ripple.style.left=e.offsetX+"px";

ripple.style.top=e.offsetY+"px";

btn.appendChild(ripple);

setTimeout(()=>{

ripple.remove();

},500);

});

});

/* Sidebar */

document.querySelectorAll(".nav").forEach(item=>{

item.addEventListener("click",()=>{

document.querySelectorAll(".nav").forEach(i=>{

i.classList.remove("active");

});

item.classList.add("active");

});

});

/* Tabs */

document.querySelectorAll(".tab").forEach(tab=>{

tab.addEventListener("click",()=>{

document.querySelectorAll(".tab").forEach(t=>{

t.classList.remove("active");

});

tab.classList.add("active");

});

});

/* Cards */

document.querySelectorAll(".card").forEach(card=>{

card.addEventListener("click",()=>{

const site=

card.querySelector("span").innerText;

switch(site){

case "Google":

window.location.href="https://google.com";
break;

case "GitHub":

window.location.href="https://github.com";
break;

case "YouTube":

window.location.href="https://youtube.com";
break;

case "ChatGPT":

window.location.href="https://chatgpt.com";
break;

case "Spotify":

window.location.href="https://spotify.com";
break;

case "Reddit":

window.location.href="https://reddit.com";
break;

}

});

});

/* Clock */

const clock=document.createElement("div");

clock.id="clock";

document.body.appendChild(clock);

function updateClock(){

const now=new Date();

clock.innerHTML=

now.toLocaleTimeString([],{

hour:"2-digit",

minute:"2-digit"

});

}

updateClock();

setInterval(updateClock,1000);

/* Welcome */

console.log("%cWelcome to Flavor",

"font-size:25px;color:#8b5cf6;font-weight:bold");

console.log("%cModern. Fast. Yours.",

"color:#4f8dff;font-size:15px");
