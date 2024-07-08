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
class Bai5ss31 extends react_1.Component {
    constructor(props) {
        super(props);
        this.changeInput = (e) => {
            let value = e.target.value;
            let name = e.target.name;
            this.setState(Object.assign(Object.assign({}, this.state), { [name]: value }));
        };
        this.out = (e) => {
            e.preventDefault();
            const { id, name, price, quantaty, formData } = this.state;
            const newData = [...formData, { id, name, price, quantaty }];
            this.setState({
                formData: newData,
                id: "",
                name: "",
                price: 0,
                quantaty: 0,
            });
        };
        this.state = {
            id: "",
            name: "",
            price: 0,
            quantaty: 0,
            formData: [],
        };
    }
    render() {
        return (<div>
        <form onSubmit={this.out}>
          <h3>Add sản phẩm mới</h3>
          <label>Mã sản phẩm</label>
          <br />
          <input type="text" name="id" value={this.state.id} onChange={this.changeInput}/>
          <br />
          <label>Tên sản phẩm</label>
          <br />
          <input type="text" name="name" value={this.state.name} onChange={this.changeInput}/>
          <br />
          <label>Giá</label>
          <br />
          <input type="text" name="price" value={this.state.price} onChange={this.changeInput}/>
          <br />
          <label>Số lượng</label>
          <br />
          <input type="number" name="quantaty" value={this.state.quantaty} onChange={this.changeInput}/>
          <br />
          <button type="submit">Add</button>
          {this.state.formData && (<>
              {this.state.formData.map((item) => (<div>
                  <p>Id: {item.id}</p>
                  <p>Name: {item.name}</p>
                  <p>Gia: {item.price}</p>
                  <p>So luong: {item.quantaty}</p>
                </div>))}
            </>)}
        </form>
      </div>);
    }
}
exports.default = Bai5ss31;
