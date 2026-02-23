/** Problem -01 ( Divide the Asset ) */
var area = 15;
//write your code here
var land = area / 2;
console.log(land);


/** Problem -02 ( Cycle or Laptop ) */
var money = 9999;
//write your code here
if(money >= 25000){
    console.log("Laptop");
}else if(money >=10000 && money <=25000) {
    console.log("Cycle");
} else {
    console.log("Chocolate");
}


/** Problem -03 ( Medicine Planner ) */
var lastDay = 6 ;
//write your code here
for(var day = 1; day <= lastDay; day++){
    if(day % 3 === 0){
        console.log( day + " - " + "medicine");
    }
    else{
        console.log(day + " - " + "rest");
    }
}


/** Problem 04 - (Delete / Store) */
var fileName= "#docx.doasdcx";
//write your code here
var splitFileName = fileName.split(".");
var fileExtention = splitFileName[1];
var fileFirstName = splitFileName[0];
var symbol = fileFirstName.split("")[0];

if(fileExtention === "pdf"){
    console.log("Store")
}else if(fileExtention === "docx"){
    console.log("Store")
}else if(symbol === "#"){
    console.log("Store")
}else{
    console.log("Delete")
}