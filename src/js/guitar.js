const guitarStrings = document.querySelectorAll(".strings-guitar .string");
let allKeys = [];
const audio = new Audio(`/src/assets/sounds/guitar_sounds/a.wav`);
const playTune = (key) => {
    audio.src = `/src/assets/sounds/guitar_sounds/${key}.wav`;
    audio.play();
    const clickedKey = document.querySelector(`[data-key="${key}"]`);
    clickedKey.classList.add("active");
    setTimeout(() => {
        clickedKey.classList.remove("active");
    }, 150);
};
guitarStrings.forEach(key => {
    allKeys.push(key.dataset.key);
    key.addEventListener("click", () => playTune(key.dataset.key));
});
const pressedKey = (e) => {
    if (allKeys.includes(e.key)) playTune(e.key);
};
document.addEventListener("keydown", pressedKey);