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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const react_bootstrap_1 = require("react-bootstrap");
const Mid_1 = __importDefault(require("./Mid"));
const Search_1 = __importDefault(require("./Search"));
const List_1 = __importDefault(require("./List"));
const data_1 = require("./data");
function Admin() {
    const [data, setData] = (0, react_1.useState)(data_1.data);
    const [editingCar, setEditingCar] = (0, react_1.useState)(null);
    const [currentCar, setCurrentCar] = (0, react_1.useState)({
        Id: null,
        date: "",
        Name: "",
        Price: "",
        Color: "",
    });
    const [searchTerm, setSearchTerm] = (0, react_1.useState)("");
    const addOrUpdateCar = (car) => {
        if (editingCar) {
            setData(data.map((item) => (item.Id === car.Id ? car : item)));
            setEditingCar(null);
        }
        else {
            setData([...data, Object.assign(Object.assign({}, car), { Id: data.length + 1 })]);
        }
        setCurrentCar({
            Id: null,
            date: "",
            Name: "",
            Price: "",
            Color: "",
        });
    };
    const deleteCar = (id) => {
        setData(data.filter((car) => car.Id !== id));
    };
    const handleEdit = (car) => {
        setEditingCar(car);
        setCurrentCar(car);
    };
    const handleSearch = (term) => {
        setSearchTerm(term);
    };
    const filteredData = (0, react_1.useMemo)(() => {
        return data.filter((car) => Object.values(car).some((value) => value.toString().toLowerCase().includes(searchTerm.toLowerCase())));
    }, [data, searchTerm]);
    const handleRestart = () => {
        setSearchTerm("");
    };
    return (<react_bootstrap_1.Container fluid>
      <react_bootstrap_1.Row>
        <react_bootstrap_1.Col xs={1}></react_bootstrap_1.Col>

        <react_bootstrap_1.Col xs={10}>
          <Search_1.default onSearch={handleSearch} onRestart={handleRestart}/>
          <Mid_1.default car={currentCar} setCar={setCurrentCar} onSubmit={addOrUpdateCar} isEditing={!!editingCar}/>
          <List_1.default data={filteredData} onDelete={deleteCar} onEdit={handleEdit}/>
        </react_bootstrap_1.Col>
      </react_bootstrap_1.Row>
    </react_bootstrap_1.Container>);
}
exports.default = Admin;
