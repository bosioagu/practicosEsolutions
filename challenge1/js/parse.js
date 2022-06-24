/**
 * Autor: Bosio Agustin
 * Version: 0.0.1
 * email: bosio.agustinariel@gmail.com
 * El codigo convierte un JSON determinado a un objeto JavaScript
 */

 const json   = {};      // En esta variable se guarda el objeto final
 const button = document.querySelector("button");
 
 const convert = () => {
   let textarea        = document.querySelector("textarea").value;
   let removeSpaces    = textarea.trim().slice(1).slice(1, -1).replace(/\n+/g, "");
   let breakingPoint   = true;
   let leftover        = ""; // En esta variable se guardara el resto del codigo aun no recorrido
   let newArray        = [];
   let subObject       = {};
 
   do {
     if (leftover == "") {
       leftover = removeSpaces;
     }
     let separator = leftover.indexOf(":");
 
     if (separator > -1) {
       let subString = leftover.substring(0, separator);
 
       leftover = leftover.substring(separator, leftover.length);
       let separator2 = leftover.indexOf(",");
 
       if (separator2 > -1) {
         let subString2 = leftover.substring(0, separator2);
 
 // Nos encontramos con un [ entonces indica que hay un array de objetos
         if (subString2.indexOf("[") > -1) {
             let insideArray = leftover.substring(leftover.indexOf("["),leftover.indexOf("]")+1)
             insideArray = insideArray.split("},");
             
             let k = 0
 
             for (i = 0; i < insideArray.length; i++) {
               insideArray[i] = insideArray[i].replace(/[\[\]]/g,'').replace("{","").replace("}","").trim()
               let cleanInsideArray = insideArray[i].split(",")
 
               for (j = 0; j < cleanInsideArray.length; j++) {
                 let elementsArray = cleanInsideArray[j].split(":")
                 subObject[elementsArray[0].replace(/['"]+/g, "").replace(/,/g, "").trim()] = elementsArray[1].replace(/['"]+/g, "").trim();
 
               }  
               newArray[k] = subObject
               subObject = {}
               k++
             }
 
         json[subString.replace(/['"]+/g, "").replace(/,/g, "").trim()] =  newArray
         leftover= leftover.substring(leftover.indexOf("]")+1,leftover.length)
 
         } else {
           leftover = leftover.substring(separator2, leftover.length);
           json[subString.replace(/['"]+/g, "").replace(/,/g, "").trim()] =  subString2.slice(1).replace(/['"]+/g, "").trim();
         }
 
       } else {
         breakingPoint = false; 
         let endElement = leftover.split(":")
         json[subString.replace(/['"]+/g, "").replace(/,/g, "").trim()] =  endElement[1].slice(1).replace(/['"]+/g, "").trim();
         leftover = ""
 
       }
     }
 
   } while (breakingPoint == true);
 
 console.log("El objeto 'json' ha sido creado")
 }; 
 
 button.addEventListener("click", convert);
 