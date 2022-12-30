import React from 'react'
import Layouts from "../layouts";
import { Box} from "@mui/material";
import NotFound from '../assets/images/not.png'
import pageLogo from '../assets/images/notfoundlogo.png'

const PageNotFound = () => {
    return (
        <>
        <Box id="wrapper"
        sx={{
            width:'100%',
            backgroundColor:'black',
            maxHeight:'500px',
            heigh:'100%'
        }}>
            <img src={NotFound} />
            <img src={pageLogo}/>
            
        </Box >
        </>
    )
}

export default Layouts(PageNotFound)