const button = document.querySelector("button");
const body = document.querySelector("body");
const backgrounds = ["url('images/fence.jpg')", "url('images/palm.jpg')", "url('images/jungle.jpg')", "url('images/pink.jpg')", "url('images/snow.jpg')", "url('images/zebra.jpg')"];

button.addEventListener("click", () => {
    let randomNum = Math.floor(Math.random() * backgrounds.length);
    body.style.backgroundImage = backgrounds[randomNum];
    console.log(body.style.backgroundImage);
});