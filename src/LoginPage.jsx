import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Form
} from "react-bootstrap";

// import {
//   FaUser,
//   FaShoppingCart,
//   FaUsers,
//   FaLock,
//   FaEye,
//   FaLeaf
// } from "react-icons/fa";

import "./LoginPage.css";

// import farmer from "../assets/farmer.png";
// import logo from "../assets/logo.png";

function LoginPage() {
  return (
    <Container fluid className="login-page">

      <Row>

        {/* Left Side */}

        <Col md={6} className="left-section">

          <h2>Welcome to</h2>

          <h1 className="text-success">
            Farmer-to-Customer Marketplace
          </h1>

          <p>
            Connecting Farmers Directly with Customers
            <br />
            Fresh • Healthy • Fair
          </p>

          <img
            src={farmer}
            className="farmer-img"
            alt=""
          />

          <Card className="info-card">
            <h2 className="text-success">500+</h2>
            <h4>Farmers</h4>
            <small>Trust our Platform</small>
          </Card>

          <Card className="info-card">
            <h2 className="text-success">2000+</h2>
            <h4>Products</h4>
            <small>Fresh & Organic</small>
          </Card>

          <Card className="info-card">
            <h2 className="text-success">10000+</h2>
            <h4>Orders</h4>
            <small>Successfully Delivered</small>
          </Card>

        </Col>

        {/* Right Side */}

        <Col md={6} className="right-section">

          <img
            src={logo}
            width="80"
            alt=""
          />

          <h2 className="mt-3">
            Login to Your Account
          </h2>

          <p>Please login to continue</p>

          <h5>Select User Type</h5>

          <div className="d-flex justify-content-between my-3">

            <Button variant="success">Farmer</Button>

            <Button variant="success">Customer</Button>

            <Button variant="success">Admin</Button>

          </div>

          <Form>

            <Form.Group className="mb-3">

              <Form.Control
                type="text"
                placeholder="Email or Mobile Number"
              />

            </Form.Group>

            <Form.Group className="mb-3">

              <Form.Control
                type="password"
                placeholder="Password"
              />

            </Form.Group>

            <Form.Check
              label="Remember Me"
            />

            <Button
              className="w-100 mt-3"
              variant="success"
            >
              Login
            </Button>

          </Form>

          <div className="text-center mt-4">

            <p>
              Create New Account
            </p>

          </div>

        </Col>

      </Row>

    </Container>
  );
}

export default LoginPage;