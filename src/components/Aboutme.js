import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Image } from 'react-bootstrap';
import home from '../assets/home.jpg'

const Aboutme = ({title, content}) => {
  return (
    <div>
        <Container className='p-5'>
            <Row>
                <Col lg={6} md={12} style={{ paddingLeft: '2rem'}}>
                    <h1 className='titleSize p-2 overflow-y-hidden'>{title}</h1>
                    <p style={{lineHeight: '2rem'}} className='pt-5 textColor'>{content}</p>
                    <Button variant="outline-warning" className='buttonYellow text-start mb-5'>Learn More</Button>
                </Col>
                <Col lg={6} md={12}>
                    <Image src={home} style={{width: '100%', paddingRight: '1rem'}}eclassName='img-fluid'></Image>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Aboutme
