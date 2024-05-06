// let urls = [
//     "https://qfyy.shcmusic.edu.cn/appointment/choose.aspx?card=MTMyMzA4MDE=&type=0&building=18&room=2061&date=1&time=0",
//     "https://qfyy.shcmusic.edu.cn/appointment/choose.aspx?card=MTMyMzA4MDE=&type=0&building=18&room=2061&date=1&time=1"

// ];

let myHeaders = new Headers();
myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

let urlencoded = new URLSearchParams();
urlencoded.append("__EVENTTARGET", "btnOK");
urlencoded.append("__EVENTARGUMENT", "");
urlencoded.append("__VIEWSTATE", "/wEPDwUKMTA2MzAwNDE3NA9kFgICBQ9kFgICAw8WAh4JaW5uZXJodG1sBVQ8YSBocmVmPSJtYWluLmFzcHg/Y2FyZD1NVEV5TVRBM09EZz0iPjxpbWcgc3JjPSJhVzFoWjJWei9sb2dvX3QucG5nIiBib3JkZXI9IjAiPjwvYT5kZLmtzV88F3D1Vqj6LzunG/VDbJO/");
urlencoded.append("__VIEWSTATEGENERATOR", "B7EC9D07");
urlencoded.append("__EVENTVALIDATION", "/wEWAgKNqrGrDALdkpmPAbj0p7sKHMq6XtVxiCcxTQHm03Gz");

let requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: urlencoded,
  redirect: 'follow'
};

//variables
// let time_0 = 0
// let time_1 = 1
// let time_2 = 2
// let time_3 = 3
let stuNum;
let time_0, time_1, time_2, time_3;
let room_0, room_1, room_2, room_3;
let date_0, date_1, date_2, date_3;


// let i_stuNum = '13230801'


//listen submit
document.querySelector("#submit").onclick = function (){
    let inpStuNum = document.getElementById("i_stuNum").value;
    stuNum = btoa(inpStuNum);
    
    room_0 = document.getElementById("i_room_0").value;
    room_1 = document.getElementById("i_room_1").value;
    room_2 = document.getElementById("i_room_2").value;
    room_3 = document.getElementById("i_room_3").value;
    
    date_0 = document.getElementById("i_date_0").value;
    date_1 = document.getElementById("i_date_1").value;
    date_2 = document.getElementById("i_date_2").value;
    date_3 = document.getElementById("i_date_3").value;
    
    time_0 = document.getElementById("i_time_0").value;
    time_1 = document.getElementById("i_time_1").value;
    time_2 = document.getElementById("i_time_2").value;
    time_3 = document.getElementById("i_time_3").value;
    
    // confirm(inpStuNum, time_0, time_1, time_2, time_3, room_0, room_1, room_2, room_3,date_0, date_1, date_2, date_3,)
    confirm("Num is " + inpStuNum + " room_0 "  + room_0)
}


function testbook0(){
    fetch(`https://qfyy.shcmusic.edu.cn/appointment/choose.aspx?card=${stuNum}&type=0&building=18&room=${room_0}&date=${date_0}&time=${time_0}`, requestOptions)
    fetch(`https://qfyy.shcmusic.edu.cn/appointment/choose.aspx?card=${stuNum}&type=0&building=18&room=${room_1}&date=${date_1}&time=${time_1}`, requestOptions)
    fetch(`https://qfyy.shcmusic.edu.cn/appointment/choose.aspx?card=${stuNum}&type=0&building=18&room=${room_2}&date=${date_2}&time=${time_2}`, requestOptions)
    fetch(`https://qfyy.shcmusic.edu.cn/appointment/choose.aspx?card=${stuNum}&type=0&building=18&room=${room_3}&date=${date_3}&time=${time_3}`, requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
};

let test0 = document.querySelector("#runButton").onclick = function (){
    testbook0();
};