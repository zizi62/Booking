+(function(){

    let now = new Date();
    let month  = now.getMonth();
    let day = now.getDate();
    let checkavailInputIn = document.querySelector('.checkavailInput__in');
    let checkavailInputOut = document.querySelector('.checkavailInput__out');
    let defaultMonth = document.querySelectorAll('.checkavailSelect__data');
    
    checkavailInputIn.value = day;
    
    checkavailInputOut.value = day + 1;   
    
    for(let i =0; i<defaultMonth.length; i++){
        let b  =  defaultMonth[i].options[month];
        defaultMonth[i].value = b.value;
    }

})();







