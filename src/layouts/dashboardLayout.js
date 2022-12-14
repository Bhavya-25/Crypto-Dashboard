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

                    <Box sx={{ flexGrow: 1 }}>
                        <Box sx={{bgcolor: (theme)=> theme.palette.gradients.primary }}>
                            <Header />
                        </Box>
                        <Box sx={{background: (theme)=> theme.palette.bgGray.dark,p:3,maxWidth: "1140px" }}>
                            {pageContent}
                        </Box>
                    </Box>
                    
            </Stack>
        </>
    )
}