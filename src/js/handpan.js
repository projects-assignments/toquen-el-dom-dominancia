const handpanKeys= document.querySelectorAll(".handpan-dimple");
let allKeys=[];
const audio = new Audio(`/src/assets/sounds/handpan_sounds/1.wav`);
const playTune = (key) => {
    audio.src = `/src/assets/sounds/handpan_sounds/${key}.wav`;
    audio.play();
    const clickedKey = document.querySelector(`[data-key="${key}"]`);
    clickedKey.classList.add("active");
    setTimeout(()=>{
        clickedKey.classList.remove("active");
    },3000);
}
handpanKeys.forEach(key => {
    allKeys.push(key.dataset.key);
    key.addEventListener("click", ()=> playTune(key.dataset.key));

});
const pressedKey = (e) =>{
    if(allKeys.includes(e.key)) playTune(e.key); 
}
document.addEventListener("keydown", pressedKey);
console.log("handpan js works");