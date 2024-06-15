const arr = [1, 2, 3, 4, 1, 0, 2, 2];
const divide = (arr, n) => {
let len=arr.length;
let arr1=[];
let sum=0;
  // Write your code here
	for (let i = 0; i < len; i++) {
		if(sum<=n){
           sum+=arr[i];
			arr1.push(arr[i]);
		}
		if(sum==n){
           arr.push(arr1);
			sum=0;
			arr1=0;
		}
	}
	return arr;
	
};

const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));
