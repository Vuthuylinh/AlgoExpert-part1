const twoNumberSum =(array, targetSum)=> {
	for(let i=0; i<array.length-1; i++){
		let firstNum = array[i]
		for(let j = i+1; j<array.length ; j++){
			let secondNum =array[j]
			if(firstNum + secondNum === targetSum){
				return [firstNum, secondNum]
			}
		}
	}
	return []
}

twoNumberSum()
