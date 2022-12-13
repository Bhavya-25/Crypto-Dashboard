import { Box,Stack } from "@mui/material";
import SideBar from  './sideBar'
// import  from '@mui/material/Stack';
import Header from "../components/header";

export default function DashboardLayout({pageContent}){
    return (
        <>
            <Stack direction="row">
                    <Box sx={{background: (theme)=> theme.palette.bgGray.dark }}>
                        <SideBar/>
                    </Box>

                    <Box >
                        <Box sx={{bgcolor: (theme)=> theme.palette.gradients.primary }}>
                            <Header />
                        </Box>
                        <Box sx={{bgcolor: 'primary.main'}}>
                            {pageContent}
                        </Box>
                    </Box>
                    
            </Stack>
        </>
    )
}