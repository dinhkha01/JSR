"use strict";
let kha = [10, 2, 4, 5, 6];
let ha = ["mot", "hai", "ba", "bon"];
// object:
let obj;
obj = {
    id: 1,
    name: "kha",
    age: 18,
    sex: false,
    getInfo: () => {
        return ("id :" +
            obj.id +
            "| name: " +
            obj.name +
            "| age: " +
            obj.age +
            "|Sex: " +
            (obj.sex ? "nữ" : "nam"));
    },
};
console.log(obj.getInfo());
