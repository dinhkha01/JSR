"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_bootstrap_1 = require("react-bootstrap");
require("bootstrap/dist/css/bootstrap.min.css");
const List = ({ data, onDelete, onEdit }) => {
    const cellStyle = {
        padding: "12px 16px",
        border: "none",
        backgroundColor: "white",
    };
    const headerStyle = Object.assign(Object.assign({}, cellStyle), { backgroundColor: "#f8f9fa", fontWeight: "normal", color: "#6c757d" });
    return (<div style={{ padding: "20px" }}>
      <react_bootstrap_1.Table style={{
            borderCollapse: "separate",
            borderSpacing: "0 8px",
            background: "#f8f9fa",
        }}>
        <thead>
          <tr>
            <th style={headerStyle}>Invoice ID</th>
            <th style={headerStyle}>Date</th>
            <th style={headerStyle}>Name</th>
            <th style={headerStyle}>Price</th>
            <th style={headerStyle}>Color</th>
            <th style={headerStyle}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((car) => (<tr key={car.Id}>
              <td style={Object.assign(Object.assign({}, cellStyle), { color: "#007bff" })}>{car.Id}</td>
              <td style={cellStyle}>{car.date}</td>
              <td style={cellStyle}>{car.Name}</td>
              <td style={cellStyle}>{car.Price}</td>
              <td style={cellStyle}>{car.Color}</td>
              <td style={cellStyle}>
                <react_bootstrap_1.Button variant="danger" size="sm" onClick={() => onDelete(car.Id)}>
                  Xoa
                </react_bootstrap_1.Button>{" "}
                <react_bootstrap_1.Button variant="primary" size="sm" onClick={() => onEdit(car)}>
                  Sua
                </react_bootstrap_1.Button>
              </td>
            </tr>))}
        </tbody>
      </react_bootstrap_1.Table>
    </div>);
};
exports.default = List;
