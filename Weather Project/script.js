let login = document.getElementById("login")
login.addEventListener("click", () => {

    window.location = "login.html"
})





// for search bar dynamics
let search = document.getElementById("search")
search.classList.add("inv")
let mag = document.getElementById("mag")
mag.addEventListener("click", () => {
    search.classList.remove("inv")
})

