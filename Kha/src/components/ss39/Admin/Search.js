"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_bootstrap_1 = require("react-bootstrap");
const react_bootstrap_icons_1 = require("react-bootstrap-icons");
const Search = ({ onSearch, onRestart }) => {
    const handleChange = (e) => {
        onSearch(e.target.value);
    };
    return (<div className="py-3">
      <react_bootstrap_1.Row className="align-items-center">
        <react_bootstrap_1.Col md={6} lg={6}>
          <react_bootstrap_1.InputGroup>
            <react_bootstrap_1.InputGroup.Text>
              <react_bootstrap_icons_1.Search />
            </react_bootstrap_1.InputGroup.Text>
            <react_bootstrap_1.Form.Control type="text" placeholder="Search" onChange={handleChange}/>
            <react_bootstrap_1.Button variant="outline-secondary" onClick={onRestart}>
              <react_bootstrap_icons_1.ArrowCounterclockwise />
            </react_bootstrap_1.Button>
          </react_bootstrap_1.InputGroup>
        </react_bootstrap_1.Col>
        <react_bootstrap_1.Col md={6} lg={6}>
          <react_bootstrap_1.Row className="justify-content-end align-items-center">
            <react_bootstrap_1.Col xs="auto">
              <react_bootstrap_icons_1.Bell size={24}/>
            </react_bootstrap_1.Col>
            <react_bootstrap_1.Col xs="auto">
              <img src="https://scontent.fsgn2-9.fna.fbcdn.net/v/t39.30808-1/286791746_715126952939349_2863510425811172870_n.jpg?stp=dst-jpg_p480x480&_nc_cat=106&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=0QNpNeCHWj0Q7kNvgFRADyK&_nc_ht=scontent.fsgn2-9.fna&oh=00_AYBxWIb7bI8lC12HMRogcohtYIeb19vLxoy1NPh2VR2nSg&oe=66808568" alt="Profile" style={{ width: "30px", height: "30px", borderRadius: "5px" }}/>
            </react_bootstrap_1.Col>
          </react_bootstrap_1.Row>
        </react_bootstrap_1.Col>
      </react_bootstrap_1.Row>
    </div>);
};
exports.default = Search;
