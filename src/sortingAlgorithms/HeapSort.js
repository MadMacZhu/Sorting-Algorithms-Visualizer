export function GetHeapSortAnimations(arr){
	const animations = [];
	if(arr.length <= 1){
		return animations;
	}
	const javaScriptSortedArray = arr.slice().sort((a, b) => a - b);
	MakeHeap(arr, 0, animations);
	DeleteHeap(arr, 0, animations);
	console.log(arraysAreEqual(javaScriptSortedArray, arr));
	return animations;
}

function MakeHeap(arr, start, animations){
	for(var j = start + 1; j < arr.length; j++)
	{
		let i = j;
		while(i > 0 && arr[i] > arr[Math.floor((i-1)/2)])
		{
			animations.push([Math.floor((i-1)/2), i]);
			animations.push([Math.floor((i-1)/2), i]);
			animations.push([arr[i], arr[Math.floor((i-1)/2)]]);
			Swap(arr, Math.floor((i-1)/2), i);
			i = Math.floor((i-1)/2);
		}
	}
}

function DeleteHeap(arr, start, animations){
	let end = arr.length - 1;
	while(end > start)
	{
		animations.push([start, end]);
		animations.push([start, end]);
		animations.push([arr[end], arr[start]]);
		Swap(arr, start, end);
		end--;
		let i = start;
		while(2*i + 2 <= end 
			&& arr[i] < Math.max(arr[2*i + 1], arr[2*i + 2]))
		{
			if(Math.max(arr[2*i + 1], arr[2*i + 2]) === arr[2*i + 1])
			{
				animations.push([i, 2*i + 1]);
				animations.push([i, 2*i + 1]);
				animations.push([arr[2*i + 1], arr[i]]);
				Swap(arr, i, 2*i + 1);
				i = 2*i + 1;
			} else{
				animations.push([i, 2*i + 2]);
				animations.push([i, 2*i + 2]);
				animations.push([arr[2*i + 2], arr[i]]);
				Swap(arr, i, 2*i + 2);
				i = 2*i + 2;
			}
		}
		if(2*i + 1 ===  end && arr[i] < arr[2*i + 1])
		{
				animations.push([i, 2*i + 1]);
				animations.push([i, 2*i + 1]);
				animations.push([arr[2*i + 1], arr[i]]);
				Swap(arr, i, 2*i + 1);		
		}
	}
}

function Swap(arr, i, j){
	const temp = arr[i];
	arr[i] = arr[j];
	arr[j] = temp;
}

function arraysAreEqual(arrayOne, arrayTwo) {
  if (arrayOne.length !== arrayTwo.length) return false;
  for (let i = 0; i < arrayOne.length; i++) {
    if (arrayOne[i] !== arrayTwo[i]) {
      return false;
    }
  }
  return true;
}
