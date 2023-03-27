// thanks page rating passage code 
let activeRate = document.getElementsByClassName('rate');

let otherActive = document.getElementsByClassName('active');

for ( let index = 0; index < activeRate.length; index++)
{
    activeRate [index].addEventListener('click', addClassName, removeClassName)

    function addClassName (){
        
        activeRate [index].classList.add('.active')

    }

    function removeClassName (){
        otherActive.removeClassName('active')
    }
}

console.log(otherActive)



// submit page changing code 

let submit = document.getElementsByClassName('submit')[0];

let thanksPage = document.getElementById('thanks-page');

submit.addEventListener('click', changePages)

function changePages(){

    thanksPage.style.zIndex = '2'
}

