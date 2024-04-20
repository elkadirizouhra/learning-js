function submit(){
    let input=document.getElementById("name").value;
    input=Number(input);
    let para=document.getElementById("para");
    switch(input){
        case 1:
            para.textContent=`${input} reference to day Monday`;
            break;
        case 2:
            para.textContent=`${input} reference to day thursday`;
            break;
        case 3:
                para.textContent=`${input} reference to day Wednesday`;
                break;
        case 4:
                para.textContent=`${input} reference to day thuesday`;
                break;
        case 5:
                para.textContent=`${input} reference to day friday`;
                break;
        case 6:
                para.textContent=`${input} reference to day saturday`;
                break;
        
        case 7:
                para.textContent=`${input} reference to day Sunday`;
                break;
        default:
            para.textContent=`${input}not references to any day`;  
        
    }

}