import React, { useEffect, useState } from "react";
import { getAllpost } from "../../service";
export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}
const Bai2 = () => {
  const [data, setData] = useState<Post[]>([]);
  useEffect(() => {
    getAllpost().then((data) => setData(data));
  });
  return (
    <div>
      {data.map((data, index) => (
        <>
          <li key={index}>
            id: {data.id} ||| {data.title}
          </li>
        </>
      ))}
    </div>
  );
};

export default Bai2;
