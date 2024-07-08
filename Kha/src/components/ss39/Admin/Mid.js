"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_bootstrap_1 = require("react-bootstrap");
require("bootstrap/dist/css/bootstrap.min.css");
const Mid = ({ car, setCar, onSubmit, isEditing }) => {
    const changeInput = (e) => {
        const { name, value } = e.target;
        setCar((prevCar) => (Object.assign(Object.assign({}, prevCar), { [name]: value })));
    };
    const handleForm = (e) => {
        e.preventDefault();
        onSubmit(car);
    };
    return (<div className="p-3">
      <h3 className="mb-4">{isEditing ? "Edit Car" : "Add New Car"}</h3>
      <react_bootstrap_1.Form onSubmit={handleForm}>
        <react_bootstrap_1.Row>
          <react_bootstrap_1.Col sm={6} lg={3} className="mb-3">
            <react_bootstrap_1.Form.Group controlId="Name">
              <react_bootstrap_1.Form.Label>Name</react_bootstrap_1.Form.Label>
              <react_bootstrap_1.Form.Control type="text" placeholder="Enter Name" value={car.Name} name="Name" onChange={changeInput}/>
            </react_bootstrap_1.Form.Group>
          </react_bootstrap_1.Col>
          <react_bootstrap_1.Col sm={6} lg={3} className="mb-3">
            <react_bootstrap_1.Form.Group controlId="Color">
              <react_bootstrap_1.Form.Label>Color</react_bootstrap_1.Form.Label>
              <react_bootstrap_1.Form.Control type="text" placeholder="Enter Color" value={car.Color} name="Color" onChange={changeInput}/>
            </react_bootstrap_1.Form.Group>
          </react_bootstrap_1.Col>
          <react_bootstrap_1.Col sm={6} lg={3} className="mb-3">
            <react_bootstrap_1.Form.Group controlId="Price">
              <react_bootstrap_1.Form.Label>Price</react_bootstrap_1.Form.Label>
              <react_bootstrap_1.Form.Control type="number" placeholder="Enter Price" value={car.Price} name="Price" onChange={changeInput}/>
            </react_bootstrap_1.Form.Group>
          </react_bootstrap_1.Col>
          <react_bootstrap_1.Col sm={6} lg={3} className="mb-3">
            <react_bootstrap_1.Form.Group controlId="date">
              <react_bootstrap_1.Form.Label>Date</react_bootstrap_1.Form.Label>
              <react_bootstrap_1.Form.Control type="date" placeholder="Date" value={car.date} name="date" onChange={changeInput}/>
            </react_bootstrap_1.Form.Group>
          </react_bootstrap_1.Col>
        </react_bootstrap_1.Row>
        <div className="d-flex justify-end">
          {" "}
          <react_bootstrap_1.Button type="submit" variant="primary">
            {isEditing ? "Update" : "Add"}
          </react_bootstrap_1.Button>
        </div>
      </react_bootstrap_1.Form>
    </div>);
};
exports.default = Mid;
