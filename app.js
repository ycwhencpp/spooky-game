
const button =document.querySelector("button");

//message
const message=document.querySelector(".message");
const info =document.querySelector(".info");
const title =document.querySelector(".title");

//levels
const next_level =document.querySelector(".level-two");
const first_level =document.querySelector(".level-one");

//reward
const spooky_sound=document.querySelector(".spooky_sound")
const spooky_img=document.querySelector(".spooky_img");

//game brain
function game_brain(value){
    if (value === 'maze-border') {
        alert("You Lost.... try again!")
        message.innerHTML="You Lost !!!! Try again."
        
    }

    if (value === 'finish'){
        message.innerHTML="YOu won !!!! press button to move to next level.";
        message.style.color="Red";
        button.style.opacity=1;
        button.style.pointerEvents="all";
    }
    if (value ===  'end-game'){
        spooky_img.style.display="block";
        spooky_sound.play();
        document.body.style.background="black";
    }
     

};

window.addEventListener("mousemove" ,(e)=> {
    let check=e.target.classList.value;
    console.log(e)
    game_brain(check)
});

button.addEventListener("click",()=>{
    first_level.style.display="none";
    next_level.style.display="block";
    button.style.opacity=0;
    button.style.pointerEvents="none";
    message.innerHTML="";
});
