import React from "react"
import "./style.css"
import { Col, Container, Row } from "react-bootstrap"

const Footer = () => {
  return (
    <footer>
        <Container>
          <Row className="footer-row">
            <Col md={3} sm={5} className='box'>
              <div className="logo">
                  <ion-icon name="bag"></ion-icon>
                  <h1>Glim</h1>
              </div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor libero id et, in gravida. Sit diam duis mauris nulla cursus. Erat et lectus vel ut sollicitudin elit at amet.</p>
            </Col>
            <Col md={3} sm={5} className='box'>
              <h2>About Us</h2>
              <ul>
                <li>Our Stores</li>
                <li>Our Cares</li>
                <li>Terms & Conditions</li>
                <li>Privacy Policy</li>
              </ul>
            </Col>
            <Col md={3} sm={5} className='box'>
              <h2>Follow Us</h2>
              <ul>
                <li>  <ion-icon name="logo-instagram"></ion-icon> Instagram</li>
                <li> <ion-icon name="logo-facebook"></ion-icon> Facebook</li>
                <li> <ion-icon name="logo-pinterest"></ion-icon> Pinterest</li>
                <li> <ion-icon name="logo-tiktok"></ion-icon> Tiktok</li>
                <li> <ion-icon name="logo-youtube"></ion-icon> Youtube</li>
              </ul>
            </Col>
            <Col md={3} sm={5} className='box'>
              <h2>Contact Us</h2>
              <ul>
                <li>Ontario, Canada</li>
                <li>Email: glimz.ca@gmail.com</li>
                {/* <li>Phone: +1 1123 456 780</li> */}
              </ul>
            </Col>
          </Row>
        </Container>
    </footer>
  )
}

export default Footer
