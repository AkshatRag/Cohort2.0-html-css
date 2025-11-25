// Simple JS exactly like you wanted
// - uses isMouseDown
// - keydown / keyup ignore when mouse is down
// - mousedown / mouseup / mouseleave for mouse
// - each key's id equals sound file name (notes/ID.mp3)

// global flag so keyboard won't trigger while mouse press is active
let isMouseDown = false;

// KEYBOARD: keydown
document.body.addEventListener("keydown", (evt) => {
  if (isMouseDown) return;
  const key = String(evt.key).toLowerCase();
  const pressedKey = document.getElementById(key);
  if (pressedKey) pressKey(pressedKey);
});

// KEYBOARD: keyup
document.body.addEventListener("keyup", (evt) => {
  if (isMouseDown) return;
  const key = String(evt.key).toLowerCase();
  const pressedKey = document.getElementById(key);
  if (pressedKey) releaseKey(pressedKey);
});

// MOUSE: clicks on keys
const allKeys = document.querySelectorAll(".key");

allKeys.forEach((k) => {
  k.addEventListener("mousedown", () => {
    isMouseDown = true;
    pressKey(k);
  });

  k.addEventListener("mouseup", () => {
    isMouseDown = false;
    releaseKey(k);
  });

  // if user drags out, release the key
  k.addEventListener("mouseleave", () => {
    if (isMouseDown) releaseKey(k);
  });
});

// pressKey: visual + play audio (notes/<id>.mp3)
function pressKey(el) {
  if (!el) return;
  // visual
  el.style.transform = "translateY(4px)";
  el.style.boxShadow = "0px 0px 0px 0px";

  // audio: id is file name
  const soundName = el.id;               // e.g. "a" or "1"
  const audioPath = `notes/${soundName}.mp3`;

  // play simple audio
  const audio = new Audio(audioPath);
  audio.currentTime = 0;
  audio.play().catch(err => {
    // quietly ignore if file missing or play blocked
    // console.log("play error:", err);
  });
}

// releaseKey: revert visual
function releaseKey(el) {
  if (!el) return;
  el.style.transform = "translateY(0px)";
  el.style.boxShadow = "3px 3px 3px rgb(136, 134, 134)";
}
