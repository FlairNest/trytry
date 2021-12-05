function myValidation(){  
    if(validation())
    {
        
    }
    return false;     
}

function validation(){
    var password = document.reg.psw.value;
    var email = document.reg.email.value; 
    if (email==null || email==""){
        alert("Вы забыли ввести email");  
        var error = document.getElementById("email");
        error.classList.add("error");
      return false;  
    }
    else {
        var sucess = document.getElementById("email");
        sucess.classList.remove("error"); 
    }

    if(password.length<6){  
        alert("Пароль должен включать в себя 6 символов");
        var error = document.getElementById("psw");
        error.classList.add("error");  
      return false;  
      }
      else {
        var sucess = document.getElementById("psw");
        sucess.classList.remove("error");
    }
}
    