let search = document.getElementById("search")
search.classList.add("inv")
let mag = document.getElementById("mag")
mag.addEventListener("click", () => {
    search.classList.remove("inv")
})


let logout = document.getElementById("logout")
logout.addEventListener("click", () => {

    window.location = "index.html"
})