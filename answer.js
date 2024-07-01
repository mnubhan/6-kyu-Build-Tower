unction towerBuilder(nFloors) {
 let result = new Array();
 for(let i=0;i<nFloors;i++){
   result.push(" ".repeat(nFloors-i-1)
              + "*".repeat(i*2+1)
              + " ".repeat(nFloors-i-1)
              )
 }
return result
}
