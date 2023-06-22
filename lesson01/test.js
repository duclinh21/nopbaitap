//bai1
{let array1 = [1, 2, 3, 4, 5, 6];
let array2 = [3, 4, 8, 9, 12];
let arr = array1.filter((arr1) => {
    for (let i = 0; i < array2.length; i++) {
        if (array2[i] === arr1)
            return true;
    }
}
)
console.log(arr);

}


//bai2
{function greatestSum(arr) {
  
    let max1 = 0;
    let max2 = 0;
  
    for (let i = 2; i < arr.length; i++) {
      if (arr[i] > max1) {
        max2 = max1;
        max1 = arr[i];
      } else if (arr[i] > max2) {
        max2 = arr[i];
      }
    }
  
    return [max1, max2];
  }
  
  const array = [1, 7, 9, 2, 5, 3, 8];
  const result = greatestSum(array);
  console.log(result);}
 //bai3
{function sumTwoNumbers(arr,targetSum) {
    const pairs =[];
    for (let i = 0; i < arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[i]+arr[j]===targetSum) {
                pairs.push([arr[i],arr[j]]);
        }
    }
} return pairs;
}
const array =[1, 7, 9, 2, 5, 3, 8];
target=10;
const result = sumTwoNumbers(array,target);
console.log(result);}
//bai4
// function uniqueElement (arr){
//     const arrayNum =[];
//     for(let i=0;i<arr.length;i++){
//         if(arr.indexOf(arr[i]) === arr.lastIndexOf(arr[i])){
//             arrayNum.push(arr[i]);
//         }
// }return arrayNum;

// }
// const array =[1,2,3,1,2,3,4,5,6,4];
// const result = uniqueElement(array);
// console.log(result);    

function uniqueElements(arr) {
    let uniqueSet = new Set(arr);
    let uniqueArr = Array.from(uniqueSet);
    return uniqueArr;
  }
  
let arr = [1, 2, 3, 1, 2, 3, 4, 5, 6, 4];
let uniqueArr = uniqueElements(arr);
console.log(uniqueArr);


//bai5
function uniqueArray(arr1,arr2) {
    let set1 = new Set(arr1);
    let uniqueElement =[];
    for(let i = 0; i<arr2.length;i++){
        if (set1.has(arr2[i]) && !uniqueElement.includes(arr2[i])){
            uniqueElement.push(arr2[i]);
        }
    }
    return uniqueElement;
}
const arr1 =[1,2,3,4,5,6,7,9,9,8,7,7];
const arr2 =[3,5,9,10,88];
const uniqueElement =uniqueArray(arr1,arr2);
console.log(uniqueElement);
//bai6

{function uniqueElements(arr) {
    let uniqueSet = new Set(arr);
    let uniqueArr = Array.from(uniqueSet);
    return uniqueArr;
  }
  
let arr = [1,2,3,4,2,3,5,3,1,1,5,2,3];
let arr2 = uniqueElements(arr);
console.log(arr2);}
//bai7


function myApp  (arrApp)  {
  const countMap = new Map();

  for (let item of arrApp) {
    if (countMap.has(item)) {
      countMap.set(item, countMap.get(item) + 1);
    } else {
      countMap.set(item, 1);
    }
  }

  return countMap;
};
const arrApp = ["face", "zalo", "face", "gmail", "zalo", "zalo"];
const countMap = myApp(arrApp);
console.log(countMap);
//bai8


