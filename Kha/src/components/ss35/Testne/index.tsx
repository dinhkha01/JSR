import React, { useState } from "react";

const Testne = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  return (
    <div>
      <p>{name}</p>
      <p>{age}</p>
      <p>{gender}</p>
      <form>
        <input
          type="text"
          value={name}
          placeholder="Nhập tên..."
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <input
          type="text"
          value={age}
          placeholder="Nhập tuổi..."
          onChange={(e) => setAge(e.target.value)}
        />
        <br />
        <select value={gender} onChange={(e) => setGender(e.target.value)}>
          <option>-Giới tính-</option>
          <option value="Nam">Nam</option>
          <option value="Nu">Nữ</option>
        </select>
      </form>
    </div>
  );
};

export default Testne;
