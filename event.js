const modal = document.getElementById("secretModal");
const secretVideo = document.getElementById("secretVideo");
const modalClose = document.getElementById("secretModalClose");
const secretBtn = document.getElementById("secretBtn");
const secretBackground = document.querySelector("main");





let pressedKeys ="";
document.addEventListener("keydown", (event) => {
        pressedKeys += event.key;

    if (pressedKeys.includes("1337")){
        modal.style.display = "flex";
        
        secretVideo.src = "https://www.youtube.com/embed/PDJLvF1dUek?autoplay=1"

        pressedKeys = "";
    }
});

modalClose.addEventListener("click", ()=>{
    secretVideo.src = "https://www.youtube.com/embed/PDJLvF1dUek?autoplay=1&mute=1"
    modal.style.display = "none";
})

secretBtn.addEventListener("click", () => {
    secretBackground.classList.toggle("active");
})
