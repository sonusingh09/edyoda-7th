var getQuote = document.getElementsByClassName('form-page-clicker')[0];

getQuote.onclick=function(){
    var getForm = document.getElementsByClassName('form')[0];
    getForm.style.display="block";
    
}

var formClose=document.getElementsByClassName('form-close')[0];
formClose.onclick=function(){
    var getForm = document.getElementsByClassName('form')[0];
    formClose.style.display="block";

}

