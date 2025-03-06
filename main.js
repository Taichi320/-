document.addEventListener("DOMContentLoaded", () => {
    // 📝 プロフィールのフェードイン
    const profile = document.getElementById("profile");
    setTimeout(() => {
        profile.style.transition = "opacity 1s, transform 1s";
        profile.style.opacity = "1";
        profile.style.transform = "translateY(0)";
    }, 500);
});

// 🌅 スクロールで時間が変化
document.addEventListener("scroll", () => {
    let scrollPos = window.scrollY;
    let docHeight = document.documentElement.scrollHeight - window.innerHeight;
    let scrollPercent = scrollPos / docHeight;

    const background = document.getElementById("background");

    if (scrollPercent < 0.33) {
        background.style.background = "url('../assets/images/day.jpg') no-repeat center center/cover";
    } else if (scrollPercent < 0.66) {
        background.style.background = "url('../assets/images/evening.jpg') no-repeat center center/cover";
    } else {
        background.style.background = "url('../assets/images/night.jpg') no-repeat center center/cover";
    }
});

// ⛺ テントを開く
document.getElementById("tent-button").addEventListener("click", () => {
    const tentContent = document.getElementById("tent-content");
    tentContent.style.display = tentContent.style.display === "none" ? "block" : "none";
});
