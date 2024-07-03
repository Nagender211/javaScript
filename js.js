function pickCumperMove(){
    const randomNumber=Math.random();
    let cumputerGenerator=''
    console.log(randomNumber)
    if(randomNumber>=0 && randomNumber <1/3){
        cumputerGenerator='Rock'
        
    }else if(randomNumber>=1/3 && randomNumber<2/3){
        cumputerGenerator='Paper'
    }else if(randomNumber>=2/3 && randomNumber <1){
        cumputerGenerator='Scissors'
    }
    return cumputerGenerator;

}
pickCumperMove();


// function convertFintoC(cel){
//     let ferhit=(cel*9/5)+30;
//     return ferhit;
// }


// function convertCertoF(fit){
//     let cel=(fit-32)*5/9;
//     return cel;
// }
// function convertTemp(degger,unit){
//     if(unit==='C'){
//         return convertCertoF(degger);
//     }else if(unit==='F'){
//         return convertFintoC(degger);
//     }else{
//         console.log('Invalid unit')
//     }

// }
// console.log(convertTemp(25,'C'))
// console.log(convertTemp(86,'F'))
// console.log(convertFintoC(25))
// console.log(convertCertoF(86))