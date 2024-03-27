function calculate(){
    const totalamount = document.getElementById("total-amount");
    const principalinput = document.getElementById("principal");
    const rateinput = document.getElementById("rate");
    const yearsinput = document.getElementById("years");

   let principal = Number(principalinput.value);
   let rate = Number(rateinput.value/100);
   let years =  Number(yearsinput.value);

   if(principal<0 || isNaN(principal)){
    principal=0;
    principalinput.value=0;
   }

   if(rate<0 || isNaN(rate)){
    rate=0;
    rateinput.value=0;
   }

   if(years<0 || isNaN(years)){
    years=0;
    yearsinput.value=0;
   }
   const result = principal*Math.pow((1+rate/1),1*years);

   totalamount.textContent =result.toLocaleString("hi-IN",{style:"currency",currency:"INR"});

    
}