import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  Modal,
  Row,
  Table,
} from "react-bootstrap";
import { createNewGirl, deleteGirl, getAllGirl } from "../../service/ss58";

export interface Girl {
  id: number;
  name: string;
  img: string;
  price: string;
  quantity: string;
  date: string;
  status: boolean;
}

const Ss58 = () => {
  const [girls, setGirls] = useState<Girl[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [showModalD, setShowModalD] = useState(false);
  const [girlToDelete, setGirlToDelete] = useState<number | null>(null);
  const [newProduct, setNewProduct] = useState<Partial<Girl>>({});
  const [isEditing, setIsEditing] = useState(false);
  const [currentGirlId, setCurrentGirlId] = useState<number | null>(null);

  useEffect(() => {
    getGirl();
  }, []);

  const getGirl = () => {
    getAllGirl().then((data) => {
      setGirls(data);
    });
  };

  const dele = (id: number) => {
    const girlToUpdate = girls.find((girl) => girl.id === id);
    const updatedGirl = { ...girlToUpdate, status: false };
    deleteGirl(id, updatedGirl);

    setGirls((prevGirls) =>
      prevGirls.map((girl) =>
        girl.id === id ? { ...girl, status: false } : girl
      )
    );
    setShowModalD(!showModalD);
  };

  const handleAddProduct = () => {
    const newProductWithDate = {
      ...newProduct,
      status: true,
      date: new Date().toISOString().split("T")[0],
    } as Girl;
    createNewGirl(newProductWithDate as Girl);
    setGirls((prevGirls) => [...prevGirls, newProductWithDate]);
    setShowModal(false);
    setNewProduct({});
  };

  const handleEditProduct = () => {
    if (currentGirlId !== null) {
      const updatedProduct = {
        ...newProduct,
      } as Girl;
      deleteGirl(currentGirlId, updatedProduct);
      setGirls((prevGirls) =>
        prevGirls.map((girl) =>
          girl.id === currentGirlId
            ? { ...updatedProduct, id: currentGirlId }
            : girl
        )
      );
      setShowModal(false);
      setNewProduct({});
      setIsEditing(false);
      setCurrentGirlId(null);
    }
  };

  const handleEditClick = (girl: Girl) => {
    setNewProduct(girl);
    setIsEditing(true);
    setCurrentGirlId(girl.id);
    setShowModal(true);
  };

  return (
    <div>
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
                {girls
                  .filter((girl) => girl.status == true)
                  .map((d, index) => (
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
                          onClick={() => {
                            setGirlToDelete(d.id);
                            setShowModalD(true);
                          }}
                        >
                          <i className="bi bi-trash"></i> Xóa
                        </Button>
                        <Button
                          variant="outline-primary"
                          size="sm"
                          onClick={() => handleEditClick(d)}
                        >
                          <i className="bi bi-pencil"></i> Sửa
                        </Button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </Table>
          </Card.Body>
        </Card>

        <Modal show={showModalD} onHide={() => setShowModalD(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Xóa Girl</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>Bạn có chắc chắn muốn xóa không? Hãy suy nghĩ kỹ.</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowModalD(false)}>
              Hủy
            </Button>
            <Button
              variant="danger"
              onClick={() => {
                if (girlToDelete !== null) {
                  dele(girlToDelete);
                }
              }}
            >
              Xóa
            </Button>
          </Modal.Footer>
        </Modal>

        <Modal show={showModal} onHide={() => setShowModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title>
              {isEditing ? "Chỉnh sửa sản phẩm" : "Thêm sản phẩm mới"}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Tên </Form.Label>
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
                    setNewProduct({ ...newProduct, price: e.target.value })
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
                    setNewProduct({ ...newProduct, quantity: e.target.value })
                  }
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowModal(false)}>
              Đóng
            </Button>
            <Button
              variant="primary"
              onClick={isEditing ? handleEditProduct : handleAddProduct}
            >
              {isEditing ? "Cập nhật sản phẩm" : "Lưu sản phẩm"}
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    </div>
  );
};

export default Ss58;
