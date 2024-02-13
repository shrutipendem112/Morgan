import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { FaUser, FaPagelines, FaApple, FaHome } from "react-icons/fa";

const Services = ({title, subTitle}) => {
  const subTitleStyle = {
    width: '58%',
    margin: 'auto'
  }
  const colStyle = {
    border: '2px solid black'
  } 
  const colContent = {
    border: '3px solid #f0a951',
    paddingTop: '5rem',
    paddingBottom: '5rem'
  }
  const iconStyle = {
    fontSize: '3.5rem',
    color: '#f0a951'
  }
  const btnStyle = {
    textAlign: "center"
  }
  return (
    <>
    
      <div className='text-center'>
        <h1 className='text-center fw-bolder pt-5 overflow-y-hidden'>{title}</h1>
        <div>
          <p style={subTitleStyle} className='overflow-y-hidden textColor text-center lh-lg'>{subTitle}</p>
        </div>
      </div>
      <Container className='py-5'>
        <Row className='mx-5'>
          <Col lg={3} md={3} sm={6}>
            <div className='overflow-hidden m-1 text-center' style={colContent}>
              <FaUser style={iconStyle}/>
              <p style={{fontSize: '1.5rem'}} className='overflow-y-hidden'>Portrait</p>
            </div>
          </Col>
          <Col lg={3} md={3} sm={6}>
            <div className='overflow-y-hidden m-1 text-center' style={colContent}>
              <FaPagelines style={iconStyle}/>
              <p style={{fontSize: '1.5rem'}} className='overflow-y-hidden'>Landscape</p>
            </div>
          </Col>
          <Col lg={3} md={3} sm={6}>
            <div className='overflow-y-hidden m-1 text-center' style={colContent}>
              <FaApple style={iconStyle}/>
              <p style={{fontSize: '1.5rem'}} className='overflow-y-hidden'>Still Life</p>
            </div>
          </Col>
          <Col lg={3} md={3} sm={6}>
            <div className='overflow-y-hidden m-1 text-center' style={colContent}>
              <FaHome style={iconStyle}/>
              <p style={{fontSize: '1.5rem'}} className='overflow-y-hidden'>Urban</p>
            </div>
          </Col>
        </Row>
      </Container>
      <div className='text-center'>
        <Button variant="outline-warning" className='buttonYellow mb-5'>View all Services</Button>
      </div>
    </>
  )
}

export default Services
