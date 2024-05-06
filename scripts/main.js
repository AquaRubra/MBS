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
let inpStuNum;
let time_0, time_1, time_2, time_3;
let room_0, room_1, room_2, room_3;
let date_0, date_1, date_2, date_3;
let building;

let fenyangRoomD = {
    1801 : 1115,
    1802 : 1116,
    1803 : 1117 ,
    1804 : 1118 ,
    1805 : 1119 ,
    1806 : 1120 ,
    1807 : 1121 ,
    1808 : 1122 ,
    1813 : 1123 ,
    1814 : 1124 ,
    1815 : 1125 ,
    1816 : 1126 ,
    1817 : 1127 ,
    1818 : 1128 ,
    1819 : 1129 ,
    1820 : 1130 ,
    1821 : 1131 ,
    1822 : 1132 ,
    1823 : 1133 ,
    1824 : 1134 ,
    1825 : 1135 ,
    1826 : 1136 ,
    1827 : 1137 ,
    1828 : 1138 ,
    1829 : 1139 ,
    1830 : 1140 ,
    1704 : 1143 ,
    1705 : 1144 ,
    1706 : 1145 ,
    1707 : 1146 ,
    1708 : 1147 ,
    1709 : 1148 ,
    1710 : 1149 ,
    1711 : 1150 ,
    1712 : 1151 ,
    1713 : 1152 ,
    1714 : 1153 ,
    1715 : 1154 ,
    1716 : 1155 ,
    1717 : 1156 ,
    1718 : 1157 ,
    1719 : 1158 ,
    1720 : 1159 ,
    1721 : 1160 ,
    1722 : 1161 ,
    1723 : 1162 ,
    1724 : 1163 ,
    1725 : 1164 ,
    1602 : 1165 ,
    1603 : 1166 ,
    1604 : 1167 ,
    1605 : 1168 ,
    1606 : 1169 ,
    1607 : 1170 ,
    1608 : 1171 ,
    1609 : 1172 ,
    1610 : 1173 ,
    1611 : 1174 ,
    1612 : 1175 ,
    1613 : 1176 ,
    1614 : 1177 ,
    1615 : 1178 ,
    1616 : 1179 ,
    1617 : 1180 ,
    1618 : 1181 ,
    1619 : 1182 ,
    1620 : 1183 ,
    1621 : 1184 ,
    1622 : 1185 ,
    1623 : 1186 ,
    1624 : 1187 ,
    1625 : 1188 ,
    1626 : 1189 ,
    1627 : 1190 ,
    1628 : 1191 ,
    1629 : 1192 ,
    1630 : 1193 ,
    1631 : 1194 ,
    1632 : 1195 ,
    1633 : 1196 ,
    1634 : 1197 ,
    1501 : 1198 ,
    1502 : 1199 ,
    1503 : 1200 ,
    1504 : 1201 ,
    1505 : 1202 ,
    1506 : 1203 ,
    1507 : 1204 ,
    1508 : 1205 ,
    1509 : 1206 ,
    1510 : 1207 ,
    1511 : 1208 ,
    1512 : 1209 ,
    1513 : 1210 ,
    1514 : 1211 ,
    1515 : 1212 ,
    1516 : 1213 ,
    1517 : 1214 ,
    1518 : 1215 ,
    1519 : 1216 ,
    1520 : 1217 ,
    1521 : 1218 ,
    1522 : 1219 ,
    1523 : 1220 ,
    1524 : 1221 ,
    1525 : 1222 ,
    1526 : 1223 ,
    1527 : 1224 ,
    1528 : 1225 ,
    1529 : 1226 ,
    1530 : 1227 ,
    1531 : 1228 ,
    1532 : 1229 ,
    1533 : 1230 ,
    1534 : 1231 ,
    1401 : 1232 ,
    1402 : 1233 ,
    1403 : 1234 ,
    1404 : 1235 ,
    1405 : 1236 ,
    1406 : 1237 ,
    1407 : 1238 ,
    1408 : 1239 ,
    1409 : 1240 ,
    1410 : 1241 ,
    1411 : 1242 ,
    1412 : 1243 ,
    1413 : 1244 ,
    1414 : 1245 ,
    1415 : 1246 ,
    1416 : 1247 ,
    1417 : 1248 ,
    1418 : 1249 ,
    1419 : 1250 ,
    1421 : 1251 ,
    1422 : 1252 ,
    1423 : 1253 ,
    1424 : 1254 ,
    1425 : 1255 ,
    1426 : 1256 ,
    1427 : 1257 ,
    1428 : 1258 ,
    1429 : 1259 ,
    1430 : 1260 ,
    1431 : 1261 ,
    1432 : 1262 ,
    1433 : 1263 ,
    1434 : 1264 ,
    1309 : 1265 ,
    1310 : 1266 ,
    1311 : 1267 ,
    1312 : 1268 ,
    1313 : 1269 ,
    1314 : 1270 ,
    1315 : 1271 ,
    1316 : 1272 ,
    1317 : 1273 ,
    1318 : 1274 ,
    1319 : 1275 ,
    1320 : 1276 ,
    1321 : 1277 ,
    1322 : 1278 ,
    1323 : 1279 ,
    1324 : 1280 ,
    1325 : 1281 ,
    1326 : 1282 ,
    1327 : 1283 ,
    1328 : 1284 ,
    1329 : 1285 ,
    1330 : 1286 ,
    1331 : 1287 ,
    1332 : 1288 ,
    1333 : 1289 ,
    1334 : 1290 ,
    1726 : 1408 ,
    1727 : 1409 ,
    1728 : 1410 ,
    1729 : 1411 ,
    1730 : 1412 ,
    1731 : 1413 ,
 
}

//listen submit
document.querySelector("#submit").onclick = function (){
    inpStuNum = document.getElementById("i_stuNum").value;
    stuNum = btoa(inpStuNum);
    
    room_0 = document.getElementById("i_room_0").value;
    room_1 = document.getElementById("i_room_1").value;
    room_2 = document.getElementById("i_room_2").value;
    room_3 = document.getElementById("i_room_3").value;

    let LL = document.getElementById("buildingLL").checked;
    let FY = document.getElementById("buildingFY").checked;
    
    if (LL == true){
        building = 18;
    }

    if (FY == true){
        building = 3;
    }


    let numRoom0 = Number(room_0);
    let numRoom1 = Number(room_1);
    let numRoom2 = Number(room_2);
    let numRoom3 = Number(room_3);
    
    if (LL == true){
        if (numRoom0 > 1100 && numRoom0 < 1180 || numRoom0 > 1200 && numRoom0 < 1281 || numRoom0 > 1300 && numRoom0 < 1381){
            if (numRoom0 > 1300 && numRoom0 < 1381){
                numRoom0 = numRoom0 + 682;
                room_0 = numRoom0;
            }else{ 
                if (numRoom0 > 1200 && numRoom0 < 1281){
                    numRoom0 += 702;
                    room_0 = numRoom0;
                }else{
                    if(numRoom0 > 1100 && numRoom0 < 1180){
                        numRoom0 += 723;
                        room_0 = numRoom0;
                    }
                }
            }
        }else{
            // alert("undefined room");
        };

        if (numRoom1 > 1100 && numRoom1 < 1180 || numRoom1 > 1200 && numRoom1 < 1281 || numRoom1 > 1300 && numRoom1 < 1381){
            if (numRoom1 > 1300 && numRoom1 < 1381){
                numRoom1 = numRoom1 + 682;
                room_1 = numRoom1;
            }else{ 
                if (numRoom1 > 1200 && numRoom1 < 1281){
                    numRoom1 += 702;
                    room_1 = numRoom1;
                }else{
                    if(numRoom1 > 1100 && numRoom1 < 1180){
                        numRoom1 += 723;
                        room_1 = numRoom1;
                    }
                }
            }
        }else{
            // alert("undefined room");
        };

        if (numRoom2 > 1100 && numRoom2 < 1180 || numRoom2 > 1200 && numRoom2 < 1281 || numRoom2 > 1300 && numRoom2 < 1381){
            if (numRoom2 > 1300 && numRoom2 < 1381){
                numRoom2 = numRoom2 + 682;
                room_2 = numRoom2;
            }else{ 
                if (numRoom2 > 1200 && numRoom2 < 1281){
                    numRoom2 += 702;
                    room_2 = numRoom2;
                }else{
                    if(numRoom2 > 1100 && numRoom2 < 1180){
                        numRoom2 += 723;
                        room_2 = numRoom2;
                    }
                }
            }
        }else{
            // alert("undefined room");
        };

        if (numRoom3 > 1100 && numRoom3 < 1180 || numRoom3 > 1200 && numRoom3 < 1281 || numRoom3 > 1300 && numRoom3 < 1381){
            if (numRoom3 > 1300 && numRoom3 < 1381){
                numRoom3 = numRoom3 + 682;
                room_3 = numRoom3;
            }else{ 
                if (numRoom3 > 1200 && numRoom3 < 1281){
                    numRoom3 += 702;
                    room_3 = numRoom3;
                }else{
                    if(numRoom3 > 1100 && numRoom3 < 1180){
                        numRoom3 += 723;
                        room_3 = numRoom3;
                    }
                }
            }
        }else{
            // alert("undefined room");
        };
    }

    if (FY == true){
        room_0 = fenyangRoomD[room_0];
        room_1 = fenyangRoomD[room_1];
        room_2 = fenyangRoomD[room_2];
        room_3 = fenyangRoomD[room_3];
    }

    date_0 = document.getElementById("i_date_0").value;
    date_1 = document.getElementById("i_date_1").value;
    date_2 = document.getElementById("i_date_2").value;
    date_3 = document.getElementById("i_date_3").value;
    
    time_0 = document.getElementById("i_time_0").value;
    time_1 = document.getElementById("i_time_1").value;
    time_2 = document.getElementById("i_time_2").value;
    time_3 = document.getElementById("i_time_3").value;
    
}


function testbook0(){
    fetch(`https://qfyy.shcmusic.edu.cn/appointment/choose.aspx?card=${stuNum}&type=0&building=${building}&room=${room_0}&date=${date_0}&time=${time_0}`, requestOptions)
    fetch(`https://qfyy.shcmusic.edu.cn/appointment/choose.aspx?card=${stuNum}&type=0&building=${building}&room=${room_1}&date=${date_1}&time=${time_1}`, requestOptions)
    fetch(`https://qfyy.shcmusic.edu.cn/appointment/choose.aspx?card=${stuNum}&type=0&building=${building}&room=${room_2}&date=${date_2}&time=${time_2}`, requestOptions)
    fetch(`https://qfyy.shcmusic.edu.cn/appointment/choose.aspx?card=${stuNum}&type=0&building=${building}&room=${room_3}&date=${date_3}&time=${time_3}`, requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
};

let test0 = document.querySelector("#runButton").onclick = function (){
    let choose = confirm("Sure? Remember to SUBMIT before running");
    if (choose == true) {
        testbook0();
    }
};