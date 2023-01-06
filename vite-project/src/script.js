function logininput(){
      console.log("hi")
    
          let input=document.getElementById("inputlogin");
    input=input.value;
    
    let btn=document.getElementById("otp");
    
    if(input.length === 10){
    btn.style.background="red"
    }
    }