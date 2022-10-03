const progressBars = document.querySelectorAll(".progress-bar");
for (let i=0;i<progressBars.length;i++){
    progressBars[i].style.width = progressBars[i].getAttribute("aria-valuenow") + '%';
}