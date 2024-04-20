


function convertTemperature(){
    let celFara=document.getElementById("c-f");
let FaraCe=document.getElementById("f-c");
let result=document.getElementById("result");
    let temp=document.getElementById("celsius").value;
    if(celFara.checked){
        result.textContent=`resultat ${9*temp+32}`;
 
    }
    else if(FaraCe.checked){
        result.textContent=`resultat est : ${(5/9)*(temp-32)}`;

}

}