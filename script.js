const arr = [1, 2, 3, 4, 1, 0, 2, 2];
const divide = (arr, n) => {
let len=arr.length;
let arr1=[];
let sum=0;
	let result=[];
  // Write your code here
	for (let i = 0; i < len; i++) {
		if(sum+arr[i]<=n){
           sum+=arr[i];
			arr1.push(arr[i]);
		}
		else{
           result.push(arr1);
			sum=arr[i];
			arr1=[arr[i]];
		}
	}
	if(arr1.length>0){
		result.push(arr1);
	}
	return result;
	
};

const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));
