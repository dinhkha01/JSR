import React, { useEffect, useState } from "react";
import { Col, Pagination, Row } from "react-bootstrap";

import { Post } from "../Bai2";
import Posts from "./Post";
import { getPostWithPaginate } from "../../service/post";

const Phantrang = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(9);
  const [totalPosts, setTotalPosts] = useState(100);

  useEffect(() => {
    fetchPosts();
  }, [currentPage]);

  const fetchPosts = async () => {
    try {
      const data = await getPostWithPaginate(currentPage, postPerPage);
      setPosts(data);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  const totalPages = Math.ceil(totalPosts / postPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const renderPaginationItems = () => {
    const pageNumbers = [];
    const maxVisiblePages = 5; // Số lượng nút trang hiển thị tối đa

    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(
        <Pagination.Item
          key={i}
          active={i === currentPage}
          onClick={() => handlePageChange(i)}
        >
          {i}
        </Pagination.Item>
      );
    }

    return pageNumbers;
  };

  return (
    <div className="container">
      <Row>
        {posts.map((d, index) => (
          <Col key={d.id || index} className="mt-2" sm={4}>
            <Posts data={d} />
          </Col>
        ))}
      </Row>
      <div className="pagination mt-4 d-flex justify-content-end">
        <Pagination size="lg">
          <Pagination.First onClick={() => handlePageChange(1)} />
          <Pagination.Prev
            onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
          />
          {renderPaginationItems()}
          <Pagination.Next
            onClick={() =>
              handlePageChange(Math.min(totalPages, currentPage + 1))
            }
          />
          <Pagination.Last onClick={() => handlePageChange(totalPages)} />
        </Pagination>
      </div>
    </div>
  );
};

export default Phantrang;
