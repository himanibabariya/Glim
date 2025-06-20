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
              <p>Premium gifting brand that creates unique candles and Flower boutique to make every moment memorable.</p>
            </Col>
            <Col md={3} sm={5} className='box'>
              <h2>Quick Links</h2>
              <ul>
                <li>About Us</li>
                <li>Terms & Conditions</li>
                <li>Privacy Policy</li>
              </ul>
            </Col>
            <Col md={3} sm={5} className='box'>
              <h2>Follow Us</h2>
              <ul>
                <li> <a href="https://www.instagram.com/glim.ca/" target="_blank"> <ion-icon name="logo-instagram"></ion-icon> Instagram </a></li>
                <li> <a href="https://www.facebook.com/profile.php?id=61576710541711" target="_blank"> <ion-icon name="logo-facebook"></ion-icon> Facebook </a></li>
                <li> <a href="https://ca.pinterest.com/glimzca/" target="_blank"><ion-icon name="logo-pinterest"></ion-icon> Pinterest </a></li>
                <li> <a href="https://www.tiktok.com/@glim.ca" target="_blank"><ion-icon name="logo-tiktok"></ion-icon> Tiktok </a></li>
                <li> <a href="https://www.youtube.com/@glimcandle" target="_blank"><ion-icon name="logo-youtube"></ion-icon> Youtube </a></li>
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
