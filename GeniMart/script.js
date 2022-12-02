
//for dropdown
function myclick(){
    document.getElementById('mydrop').classList.toggle("show");
}
//for user click

//for phone number
function isInput(evt){
    var ch = String.fromCharCode(evt.which);
    if(!(/[0-9]/.test(ch))){
      evt.preventDefault();
    }
  }

