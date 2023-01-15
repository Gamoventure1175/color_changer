const audio = new Audio();
audio.src = "bubbleclick.wav";


// const colors = ["black","#FBCEB1","#ECFFDC","#750000","#01949A","#E5DDC8","#004369","#FFB7B0","#384640"]

const randColor = () =>  {
    return "#" + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0').toUpperCase();
}


var body = document.getElementById("body"),
button = document.getElementById("btn");
button.addEventListener("click", function(){
    let color = randColor();
    console.log(color);
    body.style.backgroundColor = color;
});