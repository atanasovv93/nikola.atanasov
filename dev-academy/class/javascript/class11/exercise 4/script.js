let arr = [1, 0, null, undefined, NaN, "", false, "hello", 42, [], {}];

function removeFalsyValues(arr) {
  return arr.filter(Boolean); 
}

document.getElementById("original-array").textContent = JSON.stringify(arr, null, 2);
let cleanArr = removeFalsyValues(arr);
document.getElementById("clean-array").textContent = JSON.stringify(cleanArr, null, 2);
