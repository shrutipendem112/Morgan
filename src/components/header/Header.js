import React from 'react'
import Image from 'react-bootstrap/Image';
import bg from '../../assets/bg.jpg'
import brandInverse from '../../assets/brandInverse.png'
const Header = () => {

  const headerBg = {
    width: "100%",
    height: "90vh",
    backgroundImage: `url(${bg})`,
    backgroundPosition: 'center center',
    backgroundSize: "cover"
  }
  
  return (
    <>
      <div style={headerBg} className='d-flex justify-content-center align-items-center'>
        <Image src={brandInverse} className='img-fluid'/>
      </div>
    </>
  )
}

export default Header
