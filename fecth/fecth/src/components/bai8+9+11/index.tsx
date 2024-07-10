import React, { useEffect, useState } from "react";
import { getAllpost, createNewPost, Delete } from "../../service";
import { Post } from "../Bai2";
import { Table, Button, Form, Modal } from "react-bootstrap";

const Bai7 = () => {
  const [data, setData] = useState<Post[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [newProduct, setNewProduct] = useState<Partial<Post>>({});
  const [sortOrder, setSortOrder] = useState<"newest" | "oldest">("newest");

  const sortData = (data: Post[], order: "newest" | "oldest") => {
    return [...data].sort((a, b) => {
      const dateA = new Date(a.date).getTime();
      const dateB = new Date(b.date).getTime();
      return order === "newest" ? dateB - dateA : dateA - dateB;
    });
  };

  const fetchData = () => {
    getAllpost().then((data) => {
      setData(sortData(data, sortOrder));
    });
  };

  useEffect(() => {
    fetchData();
  }, [sortOrder]);

  const handleAddProduct = () => {
    const newProductWithDate = {
      ...newProduct,
      date: new Date().toISOString().split("T")[0],
    };
    setData((prevData) =>
      sortData([...prevData, newProductWithDate as Post], sortOrder)
    );

    createNewPost(newProductWithDate as Post).then(() => {
      fetchData();
      setShowModal(false);
      setNewProduct({});
    });
  };

  const handleDeleteProduct = (id: number) => {
    Delete(id).then(() => {
      fetchData();
    });
  };

  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newSortOrder = event.target.value as "newest" | "oldest";
    setSortOrder(newSortOrder);
    setData(sortData(data, newSortOrder));
  };

  return (
    <>
      <Button onClick={() => setShowModal(true)}>Thêm mới sản phẩm</Button>
      <div style={{ marginBottom: "20px", marginTop: "20px" }}>
        <label htmlFor="sortOrder" style={{ marginRight: "10px" }}>
          Sắp xếp theo thời gian thêm:
        </label>
        <select id="sortOrder" value={sortOrder} onChange={handleSortChange}>
          <option value="newest">Gần nhất</option>
          <option value="oldest">Xa nhất</option>
        </select>
      </div>
      <Table striped="columns">
        <thead>
          <tr>
            <th>#</th>
            <th>Tên</th>
            <th>Hình ảnh</th>
            <th>Giá</th>
            <th>Số lượng</th>
            <th>Ngày thêm</th>
            <th>Chức năng</th>
          </tr>
        </thead>
        <tbody>
          {data.map((d, index) => (
            <tr key={d.id}>
              <td>{index + 1}</td>
              <td>{d.name}</td>
              <td>
                <img src={d.img} alt="" style={{ height: 100, width: 100 }} />
              </td>
              <td>{d.price}</td>
              <td>{d.quantity}</td>
              <td>{d.date}</td>
              <td>
                <Button
                  variant="danger"
                  onClick={() => handleDeleteProduct(d.id)}
                >
                  Xóa
                </Button>
                <Button variant="primary">Sửa</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Thêm sản phẩm</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Tên sản phẩm</Form.Label>
              <Form.Control
                type="text"
                value={newProduct.name}
                onChange={(e) =>
                  setNewProduct({ ...newProduct, name: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Hình ảnh (url)</Form.Label>
              <Form.Control
                type="text"
                value={newProduct.img}
                onChange={(e) =>
                  setNewProduct({ ...newProduct, img: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Giá</Form.Label>
              <Form.Control
                type="number"
                value={newProduct.price}
                onChange={(e) =>
                  setNewProduct({
                    ...newProduct,
                    price: e.target.value,
                  })
                }
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Số lượng</Form.Label>
              <Form.Control
                type="number"
                value={newProduct.quantity}
                onChange={(e) =>
                  setNewProduct({
                    ...newProduct,
                    quantity: e.target.value,
                  })
                }
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Đóng
          </Button>
          <Button variant="primary" onClick={handleAddProduct}>
            Lưu
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Bai7;
