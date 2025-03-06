const campfire = document.getElementById("campfire");

campfire.addEventListener("mousemove", () => {
    campfire.style.transform = `scale(${1 + Math.random() * 0.1})`;
});
