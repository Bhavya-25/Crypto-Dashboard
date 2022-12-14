import { Box,Stack } from "@mui/material";
import SideBar from  './sideBar'
// import  from '@mui/material/Stack';
import Header from "../components/header";

export default function DashboardLayout({pageContent}){
    return (
        <>
            <Stack direction="row">
                <Box sx={{background: (theme)=> theme.palette.bgGray.dark , width: '241px'  }}>
                    <SideBar/>
                </Box>

                <Box sx={{width: 'calc(100% - 241px)'}}>
                    <Box sx={{bgcolor: (theme)=> theme.palette.gradients.primary  }}>
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