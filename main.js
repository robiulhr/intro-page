
var closeBtn = document.querySelector(".close-button")
var settingBtn = document.querySelector(".setting-button button")
var cdModal = document.querySelector(".cd-modal")

settingBtn.addEventListener("click", () => {
    cdModal.classList.add("open-modal");
})
closeBtn.addEventListener("click", () => {
    cdModal.classList.remove("open-modal");
})
document.addEventListener("click", (e) => {
    if (!e.path.includes(cdModal) && !e.path.includes(settingBtn)) {
        cdModal.classList.remove("open-modal");

    }
})