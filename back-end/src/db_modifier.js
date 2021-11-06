const fs = require("fs");
const { read } = require("./db")
const filePath = "./db/list.md";

module.exports.modifier = () => {
    //ici modifier les valeurs dans req.body ? dans le tableau qu'on recupere avec read 
   // fs.writeFile(filePath, , a completer quand on ajoute une tache a notre liste pas forcement dans cet export
}