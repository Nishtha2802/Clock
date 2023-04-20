console.log("This is my index.js")

function  updateClock(){
    let currrentTime=new Date();
    let currrentHours=currrentTime.getHours();
    let currrentMinutes=currrentTime.getMinutes();
    let currrentSeconds=currrentTime.getSeconds();
    currrentMinutes=(currrentMinutes<10?"0":"")+currrentMinutes;
    currrentSeconds=(currrentSeconds<10?"0":"")+currrentSeconds;

    currrentHours=(currrentHours>12)?currrentHours-12:currrentHours;
    currrentHours=(currrentHours==0)?12:currrentHours;

    let timeOfDay=(currrentHours<12) ?"A.M":"P.M";
    let currrentTimeStr=currrentHours + ":" + currrentMinutes + ":" + currrentSeconds + " "+ timeOfDay;

    document.getElementById("clock").innerHTML=currrentTimeStr;
}