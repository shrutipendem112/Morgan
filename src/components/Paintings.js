import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import Cards from './Cards'
import project1 from '../assets/project-1.jpg'
import project4 from '../assets/project-4.jpg'
import project3 from '../assets/project-3.jpg'
import project2 from '../assets/project-2.jpg'
import project5 from '../assets/project-5.jpg'
import project6 from '../assets/project-6.jpg'

const Paintings = () => {
  return (
    <div className="bg-body-tertiary">
        <h1 className='text-center fw-bolder pt-5 overflow-y-hidden'>Paintings</h1>
        <Container className='py-5'>
            <Row className='mx-5'>
                <Col lg={4} md={12}>
                    <Cards title="Sea Storm" description="This painting is one of my latest works on sea and ocean topics." img={project1}/>    
                </Col>
                <Col lg={4} md={12}>
                    <Cards title="Ruins of Ancient Fortress" description="When I’ve been to Scotland, I made this painting just in a day." img={project4}/>
                </Col>
                <Col lg={4} md={12}>
                    <Cards title="Two Lovers" description="his work was finished in two days for my customers from San Diego, CA, who needed something special." img={project3}/>
                </Col>
            </Row>
            <Row className='mx-5 pt-5'>
                <Col lg={4} md={12}>
                    <Cards title="Watercolor Portrait" description="Jane Williams, my friend and colleague, asked me to paint her portrait and this is what I did." img={project2}/>    
                </Col>
                <Col lg={4} md={12}>
                    <Cards title="Birches in Autumn" description="I love painting autumn trees and this work is a perfect example." img={project5}/>
                </Col>
                <Col lg={4} md={12}>
                    <Cards title="Green Landscape" description="Another abstract work, which appeared at my last year’s exhibition, Morgan Paintings 2016." img={project6}/>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Paintings
