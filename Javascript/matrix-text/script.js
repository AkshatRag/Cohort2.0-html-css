const h2 = document.querySelector("h2");
const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
const originalText = h2.innerText;

let intervalId = null;

h2.addEventListener("mouseenter", () => {
  clearInterval(intervalId);
  let iteration = 0;

  intervalId = setInterval(() => {
    const scrambledText = originalText
      .split("")
      .map((char, idx) => {
        if (iteration > idx) return char;

        // extra randomization for better scrambling
        const randomIndex = Math.floor(Math.random() * characters.length);
        return characters[randomIndex];
      })
      .join("");

    h2.innerText = scrambledText;

    // smaller step = smoother reveal
    iteration += 0.5;

    if (scrambledText === originalText) {
      clearInterval(intervalId);
    }
  }, 80); // faster cycle = smoother scrambling
});