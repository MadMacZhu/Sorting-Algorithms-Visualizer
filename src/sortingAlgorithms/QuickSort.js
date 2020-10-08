export function GetQuickSortAnimations(arr){
	const animations = [];
	if(arr.length <= 1){
		return animations;
	}
	const javaScriptSortedArray = arr.slice().sort((a, b) => a - b);
	QuickSort(arr, 0, arr.length - 1, animations);
	console.log(arraysAreEqual(javaScriptSortedArray, arr));
	return animations;
}

function QuickSort(
	arr, 
	startingIdx, 
	endIdx, 
	animations){
	if(startingIdx >= endIdx){
		return;
	}
	let pivotIndex = startingIdx;
	let i = startingIdx;
	let pivot = endIdx;
	while(i < endIdx){
		if(arr[i] <= arr[pivot]){
			animations.push([i, pivotIndex]);
			animations.push([i, pivotIndex]);
			animations.push([arr[i], arr[pivotIndex]])
			Swap(arr, i, pivotIndex);
			pivotIndex++;
			i++;
		} else{
			animations.push([i, i]);
			animations.push([i, i]);
			animations.push([arr[i], arr[i]]);
			i++;
		}
	}
	animations.push([pivotIndex, pivot]);
	animations.push([pivotIndex, pivot]);
	animations.push([arr[pivotIndex], arr[pivot]]);
	Swap(arr, pivotIndex, pivot);
	QuickSort(arr, startingIdx, pivotIndex - 1, animations);
	QuickSort(arr, pivotIndex + 1, endIdx, animations);
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
