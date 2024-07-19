import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import {
  deleteProuct,
  getProducts,
  Product,
  switchStatus,
  addProduct,
  editProduct,
} from "../../redux/store/reducers";
import { Button, Container, Form, Modal, Table } from "react-bootstrap";

const Alo = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { items } = useSelector((state: RootState) => state.products) as {
    items: Product[];
  };
  const [showModal, setShowModal] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Partial<Product> | null>(
    null
  );
  const [newProduct, setNewProduct] = useState<Partial<Product>>({});
  const [filterStatus, setFilterStatus] = useState<
    "all" | "returned" | "notReturned"
  >("all");

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const dele = (id: number) => {
    dispatch(deleteProuct(id));
  };

  const handleStatusChange = (id: number, status: boolean) => {
    dispatch(switchStatus({ id, status: status }));
  };

  const handleEditClick = (product: Product) => {
    setEditingProduct(product);
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
    setEditingProduct(null);
    setNewProduct({});
  };

  const handleSaveProduct = () => {
    if (editingProduct) {
      dispatch(editProduct(editingProduct));
    } else {
      dispatch(addProduct(newProduct));
    }
    handleModalClose();
  };

  const filteredItems = items.filter((item) => {
    if (filterStatus === "returned") return item.status;
    if (filterStatus === "notReturned") return !item.status;
    return true;
  });

  return (
    <div>
      <Container className="text-center">
        <h1 className="mb-4">Quản lý sản phẩm</h1>
        <Button
          variant="primary"
          className="mb-4"
          onClick={() => setShowModal(true)}
        >
          Thêm mới sản phẩm
        </Button>
        <div className="mb-4 ">
          <Form.Select
            onChange={(e) =>
              setFilterStatus(
                e.target.value as "all" | "returned" | "notReturned"
              )
            }
          >
            <option value="all">Tất cả</option>
            <option value="returned">Đã trả</option>
            <option value="notReturned">Chưa trả</option>
          </Form.Select>
        </div>
        <Table striped bordered hover className="mx-auto">
          <thead>
            <tr>
              <th>STT</th>
              <th>Tên</th>
              <th>Hình ảnh</th>
              <th>Ngày Mượn</th>
              <th>Ngày trả</th>
              <th>Trạng thái</th>
              <th>Chức năng</th>
            </tr>
          </thead>
          <tbody>
            {filteredItems.map((d, index) => (
              <tr key={index}>
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
                <td>{d.datem}</td>
                <td>{d.datet}</td>
                <td>
                  <Form.Select
                    value={d.status ? "true" : "false"}
                    onChange={(e) => handleStatusChange(d.id, !d.status)}
                    className={
                      d.status
                        ? "bg-success text-white"
                        : "bg-danger text-white"
                    }
                  >
                    <option value="true">Đã trả</option>
                    <option value="false">Chưa trả</option>
                  </Form.Select>
                </td>
                <td>
                  <Button
                    variant="danger"
                    className="me-2"
                    onClick={() => dele(d.id)}
                  >
                    Xóa
                  </Button>
                  <Button variant="warning" onClick={() => handleEditClick(d)}>
                    Sửa
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <Modal show={showModal} onHide={handleModalClose}>
          <Modal.Header closeButton>
            <Modal.Title>
              {editingProduct ? "Chỉnh sửa sản phẩm" : "Thêm mới sản phẩm"}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Tên</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Nhập tên sản phẩm"
                  value={editingProduct ? editingProduct.name : newProduct.name}
                  onChange={(e) =>
                    editingProduct
                      ? setEditingProduct({
                          ...editingProduct,
                          name: e.target.value,
                        })
                      : setNewProduct({ ...newProduct, name: e.target.value })
                  }
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Hình ảnh (URL)</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Nhập URL hình ảnh"
                  value={editingProduct ? editingProduct.img : newProduct.img}
                  onChange={(e) =>
                    editingProduct
                      ? setEditingProduct({
                          ...editingProduct,
                          img: e.target.value,
                        })
                      : setNewProduct({ ...newProduct, img: e.target.value })
                  }
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Ngày nhận</Form.Label>
                <Form.Control
                  type="date"
                  value={
                    editingProduct ? editingProduct.datem : newProduct.datem
                  }
                  onChange={(e) =>
                    editingProduct
                      ? setEditingProduct({
                          ...editingProduct,
                          datem: e.target.value,
                        })
                      : setNewProduct({ ...newProduct, datem: e.target.value })
                  }
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Ngày trả</Form.Label>
                <Form.Control
                  type="date"
                  value={
                    editingProduct ? editingProduct.datet : newProduct.datet
                  }
                  onChange={(e) =>
                    editingProduct
                      ? setEditingProduct({
                          ...editingProduct,
                          datet: e.target.value,
                        })
                      : setNewProduct({ ...newProduct, datet: e.target.value })
                  }
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Trạng thái</Form.Label>
                <Form.Select
                  value={
                    editingProduct
                      ? editingProduct.status
                        ? "true"
                        : "false"
                      : newProduct.status
                      ? "true"
                      : "false"
                  }
                  onChange={(e) =>
                    editingProduct
                      ? setEditingProduct({
                          ...editingProduct,
                          status: e.target.value === "true",
                        })
                      : setNewProduct({
                          ...newProduct,
                          status: e.target.value === "true",
                        })
                  }
                >
                  <option value="true">Đã trả</option>
                  <option value="false">Chưa trả</option>
                </Form.Select>
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleModalClose}>
              Đóng
            </Button>
            <Button variant="primary" onClick={handleSaveProduct}>
              {editingProduct ? "Cập nhật sản phẩm" : "Thêm mới sản phẩm"}
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    </div>
  );
};

export default Alo;
