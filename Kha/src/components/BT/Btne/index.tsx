import React from "react";
import {
  Button,
  Container,
  Form,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import "./index.css";

const Btne = () => {
  return (
    <div>
      <div className="top d-flex">
        <div className="topCon d-flex justify-content-evenly ">
          <div className="d-flex">
            <div className="topChu">
              Summer Sale For All Swim Suits And Free Express Delivery- OFF 50%!
            </div>
            <Nav.Link>Film Now</Nav.Link>
          </div>

          <div>
            <NavDropdown title="T1" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
          </div>
        </div>
      </div>
      <Container className="d-flex justify-content-between align-items-center">
        <Navbar.Brand href="#" className="logo">
          Film
        </Navbar.Brand>
        <div className="navbarMid d-flex">
          <Nav.Link href="#action1">Science Fiction</Nav.Link>
          <Nav.Link href="#action2">Horrified</Nav.Link>
          <Nav.Link href="#action1">Mentality</Nav.Link>
          <Nav.Link href="#action2">Comedy</Nav.Link>
        </div>
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Container>
      <hr />

      <body className="d-flex justify-content-evenly align-items-center">
        <div>
          <img
            src="https://i.pinimg.com/564x/92/53/1a/92531a61d16f542f24f7f5fbc96957d0.jpg"
            alt=""
          />
        </div>
        <div className="form">
          <form>
            <h5>Đăng nhập để làm T con</h5>
            <p>T con man</p>
            <input type="text" placeholder="Tài khoản nè" className="nhap" />
            <hr />
            <input type="text" placeholder="Mật khẩu nha" className="nhap" />
            <hr />
            <div className="d-flex justify-content-between ">
              <button className="nut">Login</button>
              <Nav.Link href="#action2">Forget Password?</Nav.Link>
            </div>
          </form>
        </div>
      </body>

      <footer>
        <div className="containerF">
          <div className="Ftop d-flex justify-content-evenly">
            <div>
              <h5>Exclusive</h5>
              <p>Subscribe</p>
              <p>Get 15% off your first order</p>
              <div className="custom-input-container">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="custom-input"
                />
                <div className="custom-input-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-send"
                  >
                    <line x1="22" y1="2" x2="11" y2="13"></line>
                    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                  </svg>
                </div>
              </div>
            </div>
            <div>
              <h5>Support</h5>
              <p>111 Bijy srarak,Drkuta,</p>
              <p>Dhi Qar, singpadeesh</p>
              <p>exclusive@gmail.com</p>
              <p>+8088-88888-8999</p>
            </div>
            <div>
              <h5>Account</h5>
              <p>My Account</p>
              <p>Login / Register</p>
              <p>Cart</p>
              <p>Wishlist</p>
              <p>Shop</p>
            </div>
            <div>
              <h5>Quick link</h5>
              <p>Privacy Policy</p>
              <p>Terms Of Use</p>
              <p>FAQ</p>
              <p>Contact</p>
            </div>
            <div>
              <h5>Download App</h5>
              <p>Save $3 with App New User Only</p>
              <div className="qr-and-buttons">
                <img
                  src="https://i.pinimg.com/564x/8d/ee/01/8dee01de2a3bb9442242a01ca5bf9413.jpg"
                  alt="QR Code"
                  className="qr-code"
                />
                <div className="download-buttons">
                  <a href="#" className="download-link">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/1280px-Google_Play_Store_badge_EN.svg.png"
                      alt="Google Play"
                      className="store-badge"
                    />
                  </a>
                  <a href="#" className="download-link">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Available_on_the_App_Store_%28black%29_SVG.svg/1280px-Available_on_the_App_Store_%28black%29_SVG.svg.png"
                      alt="App Store"
                      className="store-badge"
                    />
                  </a>
                </div>
              </div>
              <div className="social-icons">
                <a href="#" className="social-link">
                  <img
                    src="https://scontent.fsgn2-9.fna.fbcdn.net/v/t39.30808-1/286791746_715126952939349_2863510425811172870_n.jpg?stp=dst-jpg_p480x480&_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=0fIAU9QmglIQ7kNvgH_W5kp&_nc_ht=scontent.fsgn2-9.fna&oh=00_AYCuJ6NK2I7qMp1NiTmdteSAjYtHCPwoBJE9Mua-j9qhHw&oe=66797D68"
                    alt="Facebook"
                    className="social-icon"
                  />
                </a>
                <a href="#" className="social-link">
                  <img
                    src="https://scontent.fsgn2-6.fna.fbcdn.net/v/t1.6435-9/188104075_322188409305927_6004133528897101382_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=AfXqqulz4bwQ7kNvgEEUzIV&_nc_ht=scontent.fsgn2-6.fna&oh=00_AYAhwJ2dZCx3uO8wyjAN-EtZxrYx0uhnd6jW5LxYT_L9mw&oe=669B1EBB"
                    alt="Twitter"
                    className="social-icon"
                  />
                </a>
                <a href="#" className="social-link">
                  <img
                    src="https://scontent.fsgn2-11.fna.fbcdn.net/v/t39.30808-6/411858722_1777675215989217_8889975039017784649_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=5gEsaKPHeLoQ7kNvgElQp_w&_nc_ht=scontent.fsgn2-11.fna&oh=00_AYBzv0Dnzuir6jZX4_ij2k0itmJtbpQ-ET2lvPwNiQj1jg&oe=667994A6"
                    alt="Instagram"
                    className="social-icon"
                  />
                </a>
                <a href="#" className="social-link">
                  <img
                    src="https://scontent.fsgn2-11.fna.fbcdn.net/v/t39.30808-1/399922632_1488916008560631_8620516545966646811_n.jpg?stp=dst-jpg_s480x480&_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=Y066ol8ASkAQ7kNvgGZik2S&_nc_ht=scontent.fsgn2-11.fna&oh=00_AYBRGNMiA0MxTO-5GqXZkITo_TXakvPUJBtCKaccq61mMg&oe=6679985C"
                    alt="LinkedIn"
                    className="social-icon"
                  />
                </a>
              </div>
            </div>
          </div>
          <hr />
          <div className="Fbot">
            <p>&copy; Copyright Rimel 2022. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Btne;
