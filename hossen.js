
 const plusBtn = document.getElementById("plus-btn");
 plusBtn.addEventListener("click",function(){
    tasCode(true);
 });

 const minusBtn = document.getElementById("minus-btn");
  minusBtn.addEventListener("click",function(){
    tasCode(false);
 });


 function tasCode (incrise){
    const minusKora = document.getElementById("iphone-11").value;
     const minusKoraInt = parseFloat(minusKora);
     let minusHoyeGachy = minusKoraInt
     if (incrise == true){
         minusHoyeGachy = minusKoraInt + 1;
     };
     if(incrise == false && minusKoraInt > 0){
         minusHoyeGachy = minusKoraInt - 1;
     };
    document.getElementById("iphone-11").value = minusHoyeGachy;
    const minasHisab = minusHoyeGachy * 1219;
     document.getElementById("many-taka").innerText = minasHisab;
        
 };


 const plusBtn = document.getElementById("dbbol-plas");
 plusBtn.addEventListener("click",function(){
    tasNewCode(true);
 });

 const minusBtn = document.getElementById("dbbol-minas");
  minusBtn.addEventListener("click",function(){
    tasNewCode(false);
 });


 function tasNewCode (incrise){
    const minusKora = document.getElementById("phone-cover").value;
     const minusKoraInt = parseFloat(minusKora);
     let minusHoyeGachy = minusKoraInt
    if (incrise == true){
         minusHoyeGachy = minusKoraInt + 1;
     };
     if(incrise == false && minusKoraInt > 0){
         minusHoyeGachy = minusKoraInt - 1;
     };
    document.getElementById("phone-cover").value = minusHoyeGachy;
    const minasHisab = minusHoyeGachy * 59;
     document.getElementById("cover-tk").innerText = minasHisab;
        
 };