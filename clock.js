var now=new Date(),

nowSeconds=now.getSeconds(),
nowMinutes=now.getMinutes(),
nowHours=now.getHours();

var hours,
minutes,
seconds;

window.onload=function(){
    if (nowHours>12) {

 hours=(nowHours-12)*30;
} else{
     hours=nowHours*30;
}
 seconds=nowSeconds*6,
 minutes=nowMinutes*6;
    document.getElementById('seconds').style.transform=`rotate(${seconds}deg)`;
document.getElementById('minutes').style.transform=`rotate(${minutes}deg)`;
document.getElementById('hours').style.transform=`rotate(${hours}deg)`;
console.log(now);

};
setInterval(function (){

if (seconds%360==0 ) {
 minutes=minutes+6;
    document.getElementById('minutes').style.transform=`rotate(${minutes}deg)`;
document.getElementById('seconds').style.transform=`rotate(${seconds}deg)`;


console.log(seconds);
console.log(minutes);
console.log(hours);

} else if (minutes%360==0) {
 hours=hours+30;
    document.getElementById('hours').style.transform=`rotate(${hours}deg)`;
document.getElementById('seconds').style.transform=`rotate(${seconds}deg)`;

}  else{     
document.getElementById('seconds').style.transform=`rotate(${seconds}deg)`;
}
seconds=seconds+6;
   
},1000);

