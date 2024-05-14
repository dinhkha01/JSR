let gioHang = [
  { id: 1, name: "bút", quantity: 2, price: 50000 },
  { id: 2, name: "sách", quantity: 1, price: 150000 },
  { id: 3, name: "vở", quantity: 2, price: 100000 },
  { id: 4, name: "dép", quantity: 1, price: 1500000 },
];

function thayDoiSoLuong(idSanPham, soLuongMoi, giahang) {
  let sanPham = giahang.find((sp) => sp.id === idSanPham);
  if (sanPham) {
    sanPham.quantity = soLuongMoi;
  }
}

function xoaSanPham(idSanPham, giahang) {
  let viTri = giahang.findIndex((sp) => sp.id === idSanPham);
  if (viTri !== -1) {
    giahang.splice(viTri, 1);
  }
}

function tinhTongGia(giahang) {
  return giahang.reduce((sum, sp) => sum + sp.price * sp.quantity, 0);
}

thayDoiSoLuong(1, 3, gioHang);
xoaSanPham(1, gioHang);

let tongGia = tinhTongGia(gioHang);

console.log(gioHang);
console.log(tongGia);
