import { useState } from 'react';
import { Box, Stack } from "@mui/material";
import SideBar from './sideBar'
import Header from "../components/global/header";
// import HeaderTest from "../components/global/header-test";


export default function DashboardLayout({ pageContent }) {

    const [open, setOpen] = useState(false);
    const handleDrawerOpen = () => {
      setOpen(true);
      console.log("i am here 1");
    };
    
    const handleDrawerClose = () => {
      setOpen(false);
    };
    
    return (
        <>
            <Stack direction="row" sx={{ overflow: 'hidden' }} >
                <Box sx={{ background: (theme) => theme.palette.bgGray.dark, }}>
                    <SideBar handleDrawerClose={handleDrawerClose} />
                </Box>
                <Box sx={{ width: '100%' }}>
                    <Box sx={{ background: (theme) => theme.palette.gradients.primary }}>
                        <Header handleDrawerOpen={handleDrawerOpen} />
                        {/* <HeaderTest /> */}
                    </Box>
                    <Box sx={{ background: (theme) => theme.palette.bgGray.dark, height: "calc(100vh - 72px)", overflowY: 'scroll' }}>
                        {pageContent}
                    </Box>
                </Box>
            </Stack>
        </>
    )
}