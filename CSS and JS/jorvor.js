document.addEventListener("DOMContentLoaded", function () {

    const video = document.getElementById("myVideo");
    const btn = document.getElementById("toggleBtn");

    btn.addEventListener("click", function () {

        if (video.paused) {
            video.play();
            btn.innerHTML = '<i class="bi bi-pause-circle"></i> Pause';
            btn.classList.remove("btn-warning");
            btn.classList.add("btn-danger");
        } else {
            video.pause();
            btn.innerHTML = '<i class="bi bi-play-circle"></i> Play';
            btn.classList.remove("btn-danger");
            btn.classList.add("btn-warning");
        }

    });

});