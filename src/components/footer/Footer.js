import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import { FaRegCopyright } from "react-icons/fa6";

const Footer = () => {
    const bgColor = {
        width: '100%',
        backgroundColor: '#343a40',
    }
    const paraStyle = {
        display: 'inline',
        marginRight: '0.4rem'
    }
   
  return (
    <div style={bgColor}>
    <Container className='textColor pt-4 pb-5'>
      <Row>
        <Col lg={6} className='text-start overflow-y-hidden'>
            <p style={paraStyle}><FaRegCopyright />Copyright</p>
            <p style={paraStyle}><FaRegCopyright />All rights reserved</p>
        </Col>
        <Col lg={6} className='text-end overflow-y-hidden'>
            <small>This site by Er.Fauzan</small>
        </Col>
      </Row>
    </Container>
    </div>
  )
}

export default Footer
