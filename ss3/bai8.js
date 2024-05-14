let a=[1,2,3,7,8]
let b= [40,50,60]
let c=3
let d=["a", "b", "e", "f"]
let e=["c", "d", ]
let h=2

let arr=(arr1,arr2,vitri)=>{
     arr1.splice(vitri, 0, ...arr2)
     return arr1;
}


arr(a,b,c)
console.log(a);
arr(d,e,h)
console.log(d);