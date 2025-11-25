let isMouseDown = false;
document.body.addEventListener("keydown", (dets) => {
    if (isMouseDown) return;
    let key = dets.key.toUpperCase();
    let pressedkey = document.getElementById(key);
    if(pressedkey){
        pressKey(pressedkey)
    }
})
document.body.addEventListener("keyup", (dets) => {
    if (isMouseDown) return;
    let key = dets.key.toUpperCase();
    let pressedkey = document.getElementById(key);
    if(pressedkey){
        releaseKey(pressedkey);
    }
})
let mouse = document.querySelectorAll(".white-key, .black-key");

mouse.forEach((key) => {
    key.addEventListener("mousedown", () => pressKey(key));
    key.addEventListener("mouseup", () => releaseKey(key));
    key.addEventListener("mouseleave", () => releaseKey(key));
});

function pressKey(el){
    el.style.transform = "translateY(4px)";
    el.style.boxShadow = "0 0px 0px 0";
    let soundName = el.id;
    let audioPath = `notes/${soundName}.mp3`;
    let audio = new Audio(audioPath);
    audio.currentTime = 0;
    audio.play();
}

function releaseKey(el){
    el.style.transform = "translateY(0px)";
    el.style.boxShadow = "3px 3px 3px rgb(136, 134, 134)";
}