const json = '{"result":true, "count":42}';
const   obj  = JSON.parse(json);
console.log(obj.result);
// expected output: true 
console.log(obj.count);
// expected output: 42

console.log("---------------");
const { result }= JSON.parse(json);
console.log(result); 

const { count }= JSON.parse(json);
console.log(count);
