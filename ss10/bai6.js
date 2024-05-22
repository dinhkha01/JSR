"use strict";
class Song {
    constructor(id, name, length) {
        this.id = id;
        this.name = name;
        this.length = length;
    }
    // Phương thức để truy cập thuộc tính name
    getName() {
        return this.name;
    }
    // Phương thức để thay đổi giá trị thuộc tính name
    setName(newName) {
        this.name = newName;
    }
    // Phương thức để truy cập thuộc tính length
    getLength() {
        return this.length;
    }
    // Phương thức để thay đổi giá trị thuộc tính length
    setLength(newLength) {
        this.length = newLength;
    }
}
// Tạo một thực thể của lớp Song
const mySong = new Song(1, "Imagine", 183);
// In thông tin ban đầu của bài hát
console.log("Song ID:", mySong.id);
console.log("Song Name:", mySong.getName());
console.log("Song Length:", mySong.getLength(), "seconds");
// Thay đổi tên và độ dài của bài hát
mySong.setName("Hey Jude");
mySong.setLength(431);
// In thông tin đã thay đổi của bài hát
console.log("Updated Song Name:", mySong.getName());
console.log("Updated Song Length:", mySong.getLength(), "seconds");
