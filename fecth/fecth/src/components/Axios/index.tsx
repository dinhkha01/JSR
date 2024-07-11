import React, { useEffect, useState } from "react";
import { Post } from "../Bai2";
import {
  createNewPosts,
  DeleteId,
  editPosts,
  getAllPosts,
  getPostsId,
} from "../../service/axios";

const Axios = () => {
  const [data, setData] = useState<Post[]>([]);
  useEffect(() => {
    getAllPosts().then((data) => {
      setData(data);
    });
    // getPostsId(2).then((data) => setData([data]));
    // createNewPosts({ name: "vui", img: "xiu them" }).then((d) => {
    //   setData([...data, d]);
    // });
    // DeleteId(12);
    // editPosts(10, { name: "helo ", img: "xiu them" });
  }, []);

  return (
    <div className="d-flex">
      {data.map((d, index) => (
        <div>
          <p>{d.id}</p>
          <p>{d.name}</p>
          <img
            src={d.img}
            alt=""
            className="img-thumbnail"
            style={{ height: 80, width: 80 }}
          />
        </div>
      ))}
    </div>
  );
};

export default Axios;
