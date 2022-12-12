
import { Box,Stack } from "@mui/material";
import SideBar from  './sideBar'
// import  from '@mui/material/Stack';
import Header from "../components/header";

export default function DashboardLayout({pageContent}){
    return (
        <>
            <Stack direction="row">
                    <Box sx={{bgcolor: 'primary.dark'}}>
                        <SideBar/>
                    </Box>

                    <Box >
                        <Box sx={{bgcolor: (theme)=> theme.palette.primary.darker }}>
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