// Code your solution in this file!
const returnFirstTwoDrivers=()=>{
let drivers=['Antonia','Nuru','Amari','Mo'];
return (drivers.slice(0,2));
}
returnFirstTwoDrivers();

const returnLastTwoDrivers=()=>{
    let drivers=['Antonia','Nuru','Amari','Mo'];
    return(drivers.slice(2));
}
returnLastTwoDrivers();

let selectingDrivers=[returnFirstTwoDrivers,returnLastTwoDrivers];

const createFareMultiplier=function (fareMultiplier){
    return function (fare){
        return fareMultiplier * fare;
    }
    
}
const fareDoubler=createFareMultiplier(2);
const fareTripler=createFareMultiplier(3);

function selectDifferentDrivers(drivers,selectingDrivers){
    return(drivers),(selectingDrivers());
}








