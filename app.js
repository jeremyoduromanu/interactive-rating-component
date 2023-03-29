// thanks page rating passage code 
let activeRate = document.getElementsByClassName('rate');



for (let index = 0; index < activeRate.length; index++){
    activeRate[index].addEventListener('click', addClassName)
    activeRate[index].addEventListener('click', addSelectedStat)

    function addClassName () {

        let activeLength = document.getElementsByClassName('active');
    
        if (activeLength.length >= 1){
        alert('you have to select only one.');
        activeLength[index].classList.remove('active');

        
    }
    return activeRate[index].classList.add('active');
    }

    function addSelectedStat(){
        let selected = document.getElementsByClassName('active')[0];

        let span = document.getElementById('span');

        span.innerText = "You selected " + selected.innerText + " out of 5";
    }


    

    
}







// submit page changing code 

let submit = document.getElementsByClassName('submit')[0];

let thanksPage = document.getElementById('thanks-page');

submit.addEventListener('click', changePages)

function changePages(){

    thanksPage.style.zIndex = '2'
}

