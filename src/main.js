const factors = (number) => {   //created  factors function to get the factors of a given number
	let factorsArray = [];
	for(let i=1; i <= number; i++){
		if(number % i === 0){ 
			factorsArray.push(i);
		}
	}
    return factorsArray;
}


const raindrops = (number) => {
    let message = '';
    if(factors(number).indexOf(3) === -1 && factors(number).indexOf(5) === -1 && factors(number).indexOf(7) === -1){
      message += number.toString();   //checks if 3,5,7 exist in factors(number),if not return number
    }
    if(typeof number === "number"){   //checks if value inputed is a number
        for(let i =0; i < factors(number).length; i++){
          if(factors(number)[i] === 3) {
    	     message += 'pling';
    }
          else if(factors(number)[i]=== 5) {
    	      message += 'plang';
    }
          else if(factors(number)[i]===7){
    	      message += 'plong';
    }
      
}
    return message;
    }

   else{
     return "Invalid Input"; }  //returns Invalid Input if value inputed is not a number
}

 
 
 module.exports = {
   factors, raindrops
 }