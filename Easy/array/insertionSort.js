function insertionSort(array) {
  const swap = (j,arr)=>{
              if(arr[j]<arr[j-1]){
                let temp= arr[j-1]
                    arr[j-1] =arr[j]
                    arr[j] =temp
              }
            }

  for(let i=1; i<array.length; i++){
    let j=i
    while(j>0){
      if(array[j]<array[j-1]){
        swap(j,array)
        }
      j--
    }
  }

  return array
  }
