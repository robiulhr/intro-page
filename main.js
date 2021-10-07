
var closeBtn = document.querySelector(".close-button")
var settingBtn = document.querySelector(".setting-button button")
var cdModal = document.querySelector(".cd-modal")
settingBtn.addEventListener("click", () => {
    cdModal.style.display = "flex";
    cdModal.style.left = "50%";
    cdModal.style.top = "50%";
    cdModal.style.width = "50%";

})
closeBtn.addEventListener("click", () => {
    // cdModal.style.display = "none"
    cdModal.style.left = "50%";
    cdModal.style.top = "-50%";
    cdModal.style.width = "0";

    console.log('click');
})