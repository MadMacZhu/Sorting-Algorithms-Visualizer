export function GetBubbleSortAnimations(arr){
	const animations = [];
	if(arr.length <=1 ){
		return animations;
	}
	BubbleSort(arr, 0, arr.length - 1, animations);
	return animations;
}

function BubbleSort(
	arr,
	startingIdx,
	endIdx,
	animations){
	if(startingIdx === endIdx){
		return;
	}
	let i = startingIdx;
	while(i < endIdx){
		if(arr[i] > arr[i + 1]){
			animations.push([i, i + 1]);
			animations.push([i, i + 1]);
			animations.push([arr[i], arr[i + 1]]);
			Swap(arr, i, i + 1);
			i++;
		} else{
			animations.push([i, i + 1]);
			animations.push([i, i + 1]);
			animations.push([arr[i + 1], arr[i]]);
			i++;
		}
	}
	BubbleSort(arr, startingIdx, endIdx - 1, animations); 
}

function Swap(arr, i, j){
	const temp = arr[i];
	arr[i] = arr[j];
	arr[j] = temp;
}