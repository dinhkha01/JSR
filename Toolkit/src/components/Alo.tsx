import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../redux/store";
import { getProducts, Product } from "./test";
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  Modal,
  Row,
  Spinner,
  Table,
} from "react-bootstrap";

const Alo = () => {
  const dispatch = useDispatch();
  const { items } = useSelector((state: any) => state.products);

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <div>
      <Container className="text-center">
        <h1 className="mb-4">Quản lý sản phẩm</h1>
        <Button variant="primary" className="mb-4">
          Thêm mới sản phẩm
        </Button>
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
            {items.map((d: any, index: any) => (
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
                <td>{d.status ? "da" : "ko"}</td>
                <td>
                  <Button variant="danger" className="me-2">
                    Xóa
                  </Button>
                  <Button variant="warning">Sửa</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default Alo;
