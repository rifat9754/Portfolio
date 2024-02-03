//nav toggle

let MenuBtn=document.getElementById('MenuBtn')

MenuBtn.addEventListener('click', function(e){
    document.querySelector('body').classList.toggle('mobile-nav-active');
    this.classList.toggle('fa-xmark')

})

//--------toggle style switcher-------//

const styleSwitcherToggler = document.querySelector(".style-switcher-toggler");
styleSwitcherToggler.addEventListener("click",() =>{
    document.querySelector(".style-switcher").classList.toggle("open");
})


//--------hide style switcher when scroll-------//

window.addEventListener("scroll",() =>{
    if(document.querySelector(".style-switcher").classList.toggle("open")){
        document.querySelector(".style-switcher").classList.remove("open");
    }
})


//--------theme color-------//

const alternateStyles = document.querySelectorAll(".alternate-style")
function setActionStyle(color){
    alternateStyles.forEach((style) => {
        if(color === style.getAttribute("title")){
            style.removeAttribute("disabled");
        }
        else{
            style.setAttribute("disabled","true");
        }
    })
}

//---- Typing effect-----//



const dynamicText =document.querySelector(".typing");
const words = ["Student!","CS Undergrad!","Front-End Developer!","Freelancer!"];

let wordIndex=0;
let charIndex=0;
let isDeleting=false;

const typeEffect = () =>{
    const currentWord = words[wordIndex];
    const currentChar = currentWord.substring(0,charIndex);
    dynamicText.textContent = currentChar;
    dynamicText.classList.add("stop-blinking");

    if(!isDeleting && charIndex < currentWord.length){
        charIndex++;
        setTimeout(typeEffect,200);
    }
    else if(isDeleting && charIndex > 0){
        charIndex--;
        setTimeout(typeEffect,150);
    }else{
        isDeleting = !isDeleting;
        dynamicText.classList.remove("stop-blinking");
        wordIndex = !isDeleting ? (wordIndex+1) % words.length : wordIndex;
        setTimeout(typeEffect,1000);
    }
}

typeEffect();

