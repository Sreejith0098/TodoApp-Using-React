import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
const Footer = () => {
  return (
    <div>

<footer style={{ backgroundColor: '#343a40', color: '#fff', padding: '40px ' ,marginTop:'370px' }}>
      <Container>
        <Row>
          {/* About Section */}
          <Col md={4}>
            <h5>📝 Todo App</h5>
            <p>
              Organize your tasks efficiently and boost your productivity.  
              Stay focused and never miss a deadline.
            </p>
          </Col>

          {/* Quick Links */}
          <Col md={4}>
            <h5>Quick Links</h5>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li><a href="#tasks" >My Tasks</a></li>
              <li><a href="#completed" >Completed Tasks</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#contact" >Contact</a></li>
            </ul>
          </Col>

          {/* Contact Info */}
          <Col md={4}>
            <h5>Contact</h5>
            <p>Email: support@todoapp.com</p>
            <p>Phone: +91 98765 43210</p>
            <p>Location: New Delhi, India</p>
          </Col>
        </Row>

        <hr style={{ borderColor: 'rgba(255,255,255,0.2)' }} />
        
        <Row>
          <Col className="text-center">
            <p>© {new Date().getFullYear()} Todo App. All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
 
    </div>
  )
}

export default Footer