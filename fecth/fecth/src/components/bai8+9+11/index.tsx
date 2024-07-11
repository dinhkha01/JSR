import React, { useEffect, useState } from "react";
import { getAllpost, createNewPost, Delete } from "../../service";
import { Post } from "../Bai2";
import {
  Table,
  Button,
  Form,
  Modal,
  Container,
  Card,
  Row,
  Col,
} from "react-bootstrap";

const Bai7 = () => {
  const [data, setData] = useState<Post[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [newProduct, setNewProduct] = useState<Partial<Post>>({});
  const [sortOrder, setSortOrder] = useState<"moi" | "cu">("moi");

  const sortData = (data: Post[], order: "moi" | "cu") => {
    return [...data].sort((a, b) => {
      const dateA = new Date(a.date).getTime();
      const dateB = new Date(b.date).getTime();
      return order === "moi" ? dateB - dateA : dateA - dateB;
    });
  };

  const fetchData = async () => {
    const fetchedData = await getAllpost();
    setData(sortData(fetchedData, sortOrder));
  };

  useEffect(() => {
    fetchData();
  }, [sortOrder]);

  const handleAddProduct = async () => {
    const newProductWithDate = {
      ...newProduct,
      date: new Date().toISOString().split("T")[0],
    };
    await createNewPost(newProductWithDate as Post);
    fetchData();
    setShowModal(false);
    setNewProduct({});
  };

  const handleDeleteProduct = async (id: number) => {
    await Delete(id);
    fetchData();
  };

  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newSortOrder = event.target.value as "moi" | "cu";
    setSortOrder(newSortOrder);
    setData(sortData(data, newSortOrder));
  };

  return (
    <Container className="mt-5">
      <Card className="shadow-sm">
        <Card.Body>
          <Row className="mb-4 align-items-center">
            <Col>
              <h2 className="mb-0">Quản lý sản phẩm</h2>
            </Col>
            <Col xs="auto">
              <Button variant="primary" onClick={() => setShowModal(true)}>
                <i className="bi bi-plus-circle me-2"></i>Thêm mới sản phẩm
              </Button>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col md={4}>
              <Form.Group>
                <Form.Label>Sắp xếp theo thời gian thêm:</Form.Label>
                <Form.Select value={sortOrder} onChange={handleSortChange}>
                  <option value="moi">Gần nhất</option>
                  <option value="cu">Xa nhất</option>
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>

          <Table striped bordered hover responsive>
            <thead className="bg-light">
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
                    <img
                      src={d.img}
                      alt=""
                      className="img-thumbnail"
                      style={{ height: 80, width: 80 }}
                    />
                  </td>
                  <td>{d.price} $</td>
                  <td>{d.quantity}</td>
                  <td>{new Date(d.date).toLocaleDateString()}</td>
                  <td>
                    <Button
                      variant="outline-danger"
                      size="sm"
                      className="me-2"
                      onClick={() => handleDeleteProduct(d.id)}
                    >
                      <i className="bi bi-trash"></i> Xóa
                    </Button>
                    <Button variant="outline-primary" size="sm">
                      <i className="bi bi-pencil"></i> Sửa
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card.Body>
      </Card>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Thêm sản phẩm mới</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Tên sản phẩm</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nhập tên sản phẩm"
                value={newProduct.name || ""}
                onChange={(e) =>
                  setNewProduct({ ...newProduct, name: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Hình ảnh (URL)</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nhập URL hình ảnh"
                value={newProduct.img || ""}
                onChange={(e) =>
                  setNewProduct({ ...newProduct, img: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Giá</Form.Label>
              <Form.Control
                type="number"
                placeholder="Nhập giá sản phẩm"
                value={newProduct.price || ""}
                onChange={(e) =>
                  setNewProduct({
                    ...newProduct,
                    price: e.target.value,
                  })
                }
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Số lượng</Form.Label>
              <Form.Control
                type="number"
                placeholder="Nhập số lượng"
                value={newProduct.quantity || ""}
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
            Lưu sản phẩm
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default Bai7;
