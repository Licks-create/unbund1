
let positionArray=[
    `perspective(450px) translateZ(200px) translateX(0px) `,
    `perspective(450px) translateZ(120px) translateX(-200px) `,
    `perspective(450px) translateZ(0px) translateX(-420px) `,`perspective(450px) translateZ(-120px) translateX(-200px) `,`perspective(450px) translateZ(-200px) `,
    `perspective(450px) translateZ(-120px) translateX(200px) `,`perspective(450px) translateZ(0px) translateX(420px) `,`perspective(450px) translateZ(120px) translateX(200px) `
    ]
    let currentHead=1;
    function next(){
        for(let i=0;i<=7;i++){
            let ele=document.getElementById(`${i+1}`);
            ele.style.transform=`${positionArray[(currentHead+i)%8]}`;
            
        }
        currentHead+=1;
    }
    function prev(){
        // for(let i=0;i<=7;i++){
            currentHead-=1;
            let ele=document.getElementById(`${3}`);
            let posIndex=(7-Math.abs(currentHead)%8+1);
            console.log(currentHead,posIndex)
    
            
    
            ele.style.transform=`${positionArray[posIndex>=8?0:posIndex]}`;
            
        // }
    }
    
    function selectedEle(e){
        console.log(e.target)
        currentHead=Number(e.target.id)
        next()
    }