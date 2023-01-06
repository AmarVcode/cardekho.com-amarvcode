function logininput(){
      console.log("hi")
    
          let input=document.getElementById("inputlogin");
    input=input.value;
    
    let btn=document.getElementById("otp");
    
    if(input.length === 10){
    btn.classList.add("btncolor")
    }
    else{
      btn.classList.remove("btncolor")
   
    }
}

function show(){
      let div = document.getElementById("fix")

      if(div.classList.contains("afterfixed")){
            div.classList.remove("afterfixed")
      }
      else{
            div.classList.add("afterfixed")

      }
}
