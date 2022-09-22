

const form = document.getElementById("form")
const booking = document.getElementById("booking")
const toggleBooking = document.querySelectorAll("#tcard")
// //toggle between Form and Booking
toggleBooking.forEach(toggle =>{
    toggle.addEventListener('click', () =>{
    
        window.location.href="menu.html"
        console.log("booking")
    })
});
// const form = document.getElementById("form")
// const booking = document.getElementById("booking")
// const toggleBooking = document.querySelectorAll("#tcard")
// // //toggle between Form and Booking
// toggleBooking.forEach(toggle =>{
//     toggle.addEventListener('click', () =>{
//     if(form.classList == "hideme"){
//         form.classList.remove("hideme")
//         booking.classList.add("hideme")
//         console.log("form");
//     }
//     else{
//         form.classList.add("hideme");
//         booking.classList.remove("hideme")
//         console.log("booking")
//     }
// })
// });



const login = document.getElementById("login")
const signUp = document.getElementById("signUp")
const toggleLogin = document.querySelectorAll("#toggleLogin")
// //toggle between Login and Sign up form
toggleLogin.forEach(toggle =>{
    toggle.addEventListener('click', () =>{
    if(login.classList == "hideme"){
        clearSignUpForm();
        login.classList.remove("hideme")
        signUp.classList.add("hideme")
        console.log("login form");
    }
    else{
        clearLoginForm();
        login.classList.add("hideme");
        signUp.classList.remove("hideme")
        console.log("sign up form")
    }
})
});



var firstName = document.getElementById("firstName");
var lastName = document.getElementById("lastName");
var email = document.getElementById("email");
var password = document.getElementById("password");
var confirmPswd = document.getElementById("confirmPassword");

// //to submit form inputs
const signUpBtn = document.getElementById("signUpBtn");
signUpBtn.addEventListener('click', ()=> {
// Empty form input message
    if( firstName.value ==="" ||
        lastName.value ==="" ||
        email.value ==="" ||
        password.value ==="" ||
        confirmPswd.value ==="" ||
        confirmPswd.value ===""
    ){
        // //errorMsg
        errorMsg("errorMsg", "Please fill all in input fileds", "danger", 3000);
        console.log("empty form")
    } else{
        // // confirmPasswords;
        confirmPassword();
    }
})

    // // for error messages on the form23
let errorMsg = function(MsgId, message, color, time){
    const errMsg = document.getElementById(MsgId)
    errMsg.classList.remove("hideme")
    errMsg.innerHTML = message;
    errMsg.classList.add(color);
    // console.log(errMsg);
   setTimeout(() => {
    errMsg.classList.remove(color);
    errMsg.classList.add("hideme")
    }, time)};

    // //validatePassword
    // let passwordtext = document.querySelector(".pswdtext");
let passwordMsg = document.querySelector("#passwordMsg");
password.addEventListener('input', validatePassword);

function validatePassword(){
    checkModal();
    //show the password strenght
    let strenght = password.value;
    if(strenght != "" || strenght.length <= 2){
        errorMsg("passwordMsg", `Your Password must be more than 8 charcter long, contain Alhapet, Number and Special Charcters`, `neutral`, 5000);
    if(strenght.length >= 2){
        passwordMsg.classList.remove("neutral")
        passwordMsg.classList.remove("success")
        passwordMsg.classList.remove("medium")
        errorMsg("passwordMsg", "Your password is weak", "danger", 5000);
        }
    if (strenght.length >= 5 && strenght.match(/[a-z]/g) || strenght.match(/[A-Z]/g) || strenght.match(/[^A-Za-z0-9]/g)){
        // medium.classList.add("medium")
        passwordMsg.classList.remove("danger")
        passwordMsg.classList.remove("neutral")
        passwordMsg.classList.remove("success")
        errorMsg("passwordMsg", "Your password is not very strong", "medium", 5000);
        } 
    if (strenght.length > 8  && strenght.match(/[a-z]/g) && strenght.match(/[A-Z]/g) && strenght.match(/[0-9]/g) && strenght.match(/[^A-Za-z0-9]/g) ){
        // strong.classList.add("strong")
        passwordMsg.classList.remove("danger")
        passwordMsg.classList.remove("neutral")
        passwordMsg.classList.remove("medium")
        errorMsg("passwordMsg", "Your password is very Strong", "success", 5000);
    }
}
else {
        passwordMsg.classList.add("hideme")
        // errorMsg("passwordMsg", "Your passwords is weak", `hideme`);
    };
};


const checkModal = function (){
    let strenght = password.value
    let confirmPasswd = confirmPswd.value
    signUpBtn.dataset.bsToggle = "nil"
    if (strenght.length > 8  && strenght.match(/[a-z]/g) && strenght.match(/[A-Z]/g) && strenght.match(/[0-9]/g) &&  strenght.match(/[^A-Za-z0-9]/g) && strenght === confirmPasswd){
        signUpBtn.dataset.bsToggle = "modal";
    } else{
       signUpBtn.dataset.bsToggle = "oops"
    }

};
confirmPswd.addEventListener("input", checkModal)



// //function to clear signup form
function clearSignUpForm(){
    firstName.value ==="",
    lastName.value ==="",
    email.value ==="",
    password.value ==="",
    confirmPswd.value ==="",
    confirmPswd.value ===""
}


    // //confirmPasswords
    // //check if Customer subscribing to newsletter
const msgInfo = document.getElementById("msgInfo");
const newsBtn = document.getElementById("newsletterBtn");
function confirmPassword(){
    let strenght = password.value;
    // let newsletter = newsletter.checked;
    if(password.value === confirmPswd.value && strenght.length > 2){
        checknewsletter();

    }
    else{
        signUpBtn.classList.remove("modal-2")
        password.classList.add("dangerfocus")
        confirmPswd.classList.add("dangerfocus")
        errorMsg("passwordMsg", "Your passwords does not match", "danger", 3000);
        setTimeout(() => {
        password.classList.remove("dangerfocus")
        confirmPswd.classList.remove("dangerfocus")
        }, 5000)
    }
};


// console.log(newsletter.value);
function checknewsletter(){
    if (document.getElementById("checkNews").checked){
        // body.classList.add("modal-open")
        msgInfo.innerHTML =
            // confirmPasswordModal = true;
            ` <h1>Hello Mr/Mrs. ${firstName.value} ${lastName.value}</h1>
                <p>You are registerd</p>
                <p>You are now an offical member of Team Violence</p>
                <p>In here we only subcrib, preach and advocate for Violence</p>
                <p>Remember you have also subscrib for our Newsletter</p>
                <p>You will now get latest updates on violence around the world</p>`
        // // AddToDataBase
        // AddToDataBase();
    } else {
        msgInfo.innerHTML =
            `<h1>Hello Mr. ${firstName.value} ${lastName.value}</h1>
            <p>You are registerd</p>
            <p>You are now an offical member of Team Violence</p>
            <br>
            <p class="text-blue">You did not subcrib to our Newsletter</p>
            <p>Subscrib now to get latest updates on violence around the world</p>`
            // //AddToDataBase
            // newsBtn.style.display = "block"
            const cfrmNews = document.getElementById("cfrmNews");
            cfrmNews.classList.remove("hideme")
        };
    };
    
    const confirmNewsBtn = document.getElementById("confirmNewsBtn");
    const refresh = document.getElementById("refresh");
    function confirmNews(){
        if(document.getElementById("confirmNews").checked){
            confirmNewsBtn.classList.remove("hideme")
            refresh.classList.remove("inline-block")
            refresh.classList.add("hideme")

            confirmNewsBtn.addEventListener('click', () => {
                cfrmNews.classList.add("hideme")
                msgInfo.innerHTML =
                    ` <h1>${firstName.value} ${lastName.value}</h1>
                    <p>You are now an offical member of Team Violence</p>
                    <p>In here we only subcrib, preach and advocate for Violence</p>
                    <p>You have now subscrib for our Newsletter</p>
                    <p>You will now get latest updates on violence around the world</p>
                    <p>Thanks<p>`
                confirmNewsBtn.classList.add("hideme")
                refresh.classList.add("inline-block")
                refresh.classList.remove("hideme")

            })

        } else {
            confirmNewsBtn.classList.add("hideme")
            refresh.classList.add("inline-block")
            refresh.classList.remove("hideme")
            
        };
     }
    
    
refresh.addEventListener("click", ()=> {
    window.location.reload();
})




const loginEmail = document.getElementById("loginEmail");
const loginBtn = document.getElementById("loginBtn");
const loginPswd = document.getElementById("loginPassword");
const welcome = document.getElementById("welcome");
// //function to clear login form
function clearLoginForm(){
    loginPassword.value ==="",
    loginEmail.value ===""
}

loginPswd.addEventListener("input", ()=> {
    let loginPassword = document.getElementById("loginPassword").value;
    if(loginPassword == 1234){
        loginBtn.dataset.bsToggle ="modal";
    } else {
        loginBtn.dataset.bsToggle ="nil";
    }
})

loginBtn.addEventListener('click', ()=>{
    let loginPassword = document.getElementById("loginPassword").value;
    
    if(loginPassword == 1234){
        loginBtn.dataset.bsToggle ="modal"
        welcome.classList.add("showme")
        msgInfo.innerHTML =
            ` <h1>Hello Mr. ${firstName.value} ${lastName.value}</h1>
                <p>You are welcome</p>
                <p>Remember are now an offical member of Team Violence</p>
                <p>Remember in here we only preach and advance Violence</p>`
        console.log("Access granted")
        }
    else {
        console.log("Access denied")
        loginPswd.classList.add("dangerfocus")
        errorMsg("passwordMsg", "Your passwords does not match", "danger", 3000);
        setTimeout(() => {
        loginPswd.classList.remove("dangerfocus")
        }, 5000)
        errorMsg("accessMsg", "Your passwords or email is incorrect", "danger", 3000);
        } 
})




















// Get the button
// let toTop = document.getElementById("btn-back-to-top");

// // When the user scrolls down 20px from the top of the document, show the button
// window.onscroll = function() {
//     scrollFunction();
// };

// function scrollFunction() {
//     if (
//         document.body.scrollTop > 20 ||
//         document.documentElement.scrollTop > 20
//     ) {
//         toTop.style.display = "block";
//     } else {
//         toTop.style.display = "none";
//     }
// }
// // When the user clicks on the button, scroll to the top of the document
// toTop.addEventListener("click", backToTop);

// function backToTop() {
//     document.body.scrollTop = 0;
//     document.documentElement.scrollTop = 0;
// }
// console.log(toTop);

// get current year for footer
// const date = document.getElementById("date");
// date.innerHTML = new Date().getFullYear().toString();


