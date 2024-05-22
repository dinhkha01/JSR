class Song {
    public readonly id: number;
    private name: string;
    private length: number;

    constructor(id: number, name: string, length: number) {
        this.id = id;
        this.name = name;
        this.length = length;
    }

    // Phương thức để truy cập thuộc tính name
    public getName(): string {
        return this.name;
    }

    // Phương thức để thay đổi giá trị thuộc tính name
    public setName(newName: string): void {
        this.name = newName;
    }

    // Phương thức để truy cập thuộc tính length
    public getLength(): number {
        return this.length;
    }

    // Phương thức để thay đổi giá trị thuộc tính length
    public setLength(newLength: number): void {
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
