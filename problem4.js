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