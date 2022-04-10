// function myFunction(x){
//     x.classList.toggle("change");
//     let y  = document.querySelector(".verticalMenu")
//     if (y.classList.toggle === "block"){
//         y.classList.toggle ==="none";
//     }else{
//         y.classList ==="block";
//     }
// }

// let burgerMenu = document.querySelectorAll(".bar")


// function showBurgerMenu(){
//     let y  = document.querySelector(".verticalMenu")
//     if (y.style.display === "block"){
//         y.style.display ==="none";
//     }else{
//         y.style.display ==="block";
//     }
// }

// burgerMenu.addEventListener("click", showBurgerMenu());


let headerBurger = document.querySelector('.header__burger');
let headerMenu = document.querySelector('.header__menu');
let body = document.querySelector("body");
headerBurger.addEventListener("click",() => {
    headerBurger.classList.toggle('active');
    headerMenu.classList.toggle('active');
    body.classList.toggle('lock');
})