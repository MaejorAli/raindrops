const factors = (number) => {
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
      message += number.toString();
    }
    if(typeof number === "number"){
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
     return "Invalid Input"}  
}

 module.exports = {
   factors, raindrops
 }