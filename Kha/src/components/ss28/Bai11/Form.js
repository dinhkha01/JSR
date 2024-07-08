"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
class Form extends react_1.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            address: "",
            date: "",
            formData: [],
        };
        this.onChaneInput = this.onChaneInput.bind(this);
        this.handleSave = this.handleSave.bind(this);
    }
    onChaneInput(e) {
        let value = e.target.value;
        let name = e.target.name;
        this.setState(Object.assign(Object.assign({}, this.state), { [name]: value }));
    }
    handleSave(e) {
        e.preventDefault();
        const { name, address, date, formData } = this.state;
        const newFormData = [...formData, { id: Date.now(), name, address, date }];
        this.setState({ formData: newFormData, name: "", address: "", date: "" });
    }
    render() {
        const { formData } = this.state;
        return (<div>
        <form action="" onSubmit={(e) => this.handleSave(e)}>
          <table border={1}>
            <tbody>
              <tr>
                <th>
                  <label htmlFor="">Name</label>
                </th>
                <td>
                  <input name="name" type="text" onChange={(e) => {
                this.onChaneInput(e);
            }} value={this.state.name}/>
                </td>
              </tr>
              <tr>
                <th>
                  <label htmlFor="">address</label>
                </th>
                <td>
                  <input name="address" type="text" onChange={this.onChaneInput} value={this.state.address}/>
                </td>
              </tr>
              <tr>
                <th>
                  <label htmlFor="">date</label>
                </th>
                <td>
                  <input name="date" type="date" onChange={this.onChaneInput} value={this.state.date}/>
                </td>
              </tr>
              <tr>
                <th colSpan={2}>
                  <button type="submit">Lưu</button>
                </th>
              </tr>
            </tbody>
          </table>
        </form>
        <br />
        <div>
          <table border={1}>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Address</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {formData.map((item) => (<tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.address}</td>
                  <td>{item.date}</td>
                </tr>))}
            </tbody>
          </table>
        </div>
      </div>);
    }
}
exports.default = Form;
