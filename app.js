
//message
let message=document.querySelector(".message");
let info =document.querySelector(".info")

//game brain
function game_brain(value){
    if (value === 'maze-border') alert("You Lost.... try again!")

    if (value === 'finish'){
        // info.style.innerHTML("YOu won !!!! press button to move to next level.")
    }
};

window.addEventListener("mousemove" ,(e)=> {
    let check=e.target.classList.value;
    console.log(check)
    game_brain(check)
});