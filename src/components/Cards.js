import React from 'react'
import Card from 'react-bootstrap/Card';

const Cards = ({title,description,img}) => {
  const cardTitle = {
    color: "rgb(234, 166, 10)"
  }

  return (
      <Card className='shadow' style={{height: '100%'}}>
      <Card.Img variant="top" src={img} className='img-fluid'/>
      <Card.Body>
        <Card.Title style={cardTitle} className='fw-bold text-left pt-2 overflow-y-hidden'>{title}</Card.Title>
        <Card.Text className='pt-2 lh-lg textColor'>
          {description}
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Cards
