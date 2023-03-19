import React from 'react'
import {Toolbar,styled} from '@mui/material';

const Container = styled(Toolbar)`
justify-content: center;
background: #0e3d66;
`





const Navbar = () => {

    const logo = 'https://cdn-icons-png.flaticon.com/512/2111/2111501.png';
  return (
    <>
        <Container >
            <img style={{width:'3vw'}} src={logo} alt="logo" />
        </Container>
    </>
  )
}

export default Navbar