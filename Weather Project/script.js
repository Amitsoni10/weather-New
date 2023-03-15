let signuppage = document.getElementById("signuppage")
signuppage.classList.add("inv")
let loginpage = document.getElementById("loginpage")
loginpage.classList.add("inv")



let login = document.getElementById("login")
login.addEventListener("click",()=>{
    let navbar = document.getElementById("navbar")
    navbar.classList.add("inv")
    loginpage.classList.remove("inv")
})

let signuphere =document.getElementById("signuphere")
signuphere.addEventListener("click",()=>{
    signuppage.classList.remove("inv")
    loginpage.classList.add("inv")
})

// let lbtnsignup = document.getElementById("lbtnsignup")
// lbtnsignup.addEventListener("click",()=>{
//     signuppage.classList.add("inv")
//     loginpage.classList.remove("inv")
// })

// let lbtn = document.getElementById("lbtn")
// lbtn.addEventListener("click",()=>{
//     loginpage.classList.add("inv")
//     navbar.classList.remove("inv")
// })



// for search bar dynamics
let search = document.getElementById("search")
        search.classList.add("inv")
        let mag = document.getElementById("mag")
        mag.addEventListener("click", () => {
            search.classList.remove("inv")
        })





class Logic{

    check(user,password){
        let userid = localStorage.getItem("userid")
            let userpassword = localStorage.getItem("userpassword")
        let output =false;
        if(user==userid && password==userpassword){
            output = true;
        }
        else{
            output =false;
        }
        return output
    }
}



window.addEventListener("DOMContentLoaded",()=>{
    console.log("loaded")
    logic = new Logic()

    // local storage signin
    let lbtn = document.getElementById('lbtn')
    lbtn.addEventListener("click",()=>{
        // let loginpage = document.getElementById("loginpage")
        
        let user = document.getElementById('user').value
        let password = document.getElementById('password').value
        
        let output = logic.check(user,password)
        if(output){
            // window.location = "4_postnew.html"
            console.log("login successfull")
            loginpage.classList.add("inv")
    navbar.classList.remove("inv")
        }
        else{
            document.getElementById('user').value=""
            document.getElementById('password').value=""
           
            document.getElementById('content').innerHTML = "Invalid User ID and Password"
        }
    })




// local storage  signup
    let lbtnsignup = document.getElementById("lbtnsignup")
    lbtnsignup.addEventListener("click",()=>{
        document.getElementById('user').value=""
            document.getElementById('password').value=""
            document.getElementById('content').innerHTML = ""
            // let signuppage = document.getElementById("signuppage")
            let usersignup = document.getElementById("usersignup").value
            let passwordsignup = document.getElementById("passwordsignup").value
            localStorage.setItem("userid",usersignup)
            localStorage.setItem("userpassword",passwordsignup)
            let userid = localStorage.getItem("userid")
            let userpassword = localStorage.getItem("userpassword")
            signuppage.classList.add("inv")
            loginpage.classList.remove("inv")
            console.log(userid)
            console.log(userpassword)

            // window.location = "2empdetails.html"
        })




})
