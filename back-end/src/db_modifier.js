const fs = require("fs");
const { read } = require("./db")
const filePath = "./db/list.md";

module.exports.modifier = () => {
    
    fs.appendFile(filePath, "\- [x] done2", function(err) {
        if(err) {
            return console.log(err);
        }
        console.log("The file was saved!");
    }); 
    
}