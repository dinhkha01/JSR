import React, { useEffect, useState } from "react";
import { getAllpost } from "../../service";
export interface Post {
  id: number;
  name: string;
  img: string;
  price: string;
  quantity: string;
  date: string;
}
const Bai2 = () => {
  const [data, setData] = useState<Post[]>([]);
  useEffect(() => {
    getAllpost().then((data) => setData(data));
  });
  return (
    <div className="d-flex">
      {data.map((data, index) => (
        <div>
          <li key={index}>id: {data.id}</li>
          <li>{data.name}</li>
          <li>
            {" "}
            <img src={data.img} alt="" style={{ width: 100, height: 100 }} />
          </li>
          <li>{data.quantity}</li>
          <li>{data.date}</li>
        </div>
      ))}
    </div>
  );
};

export default Bai2;
