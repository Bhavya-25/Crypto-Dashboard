import { useState } from 'react';
import { Box, Stack } from "@mui/material";
import HeaderTest from "../components/global/header-test";


export default function DashboardLayout({ pageContent }) {

    const [open, setOpen] = useState(false);
    const handleDrawerOpen = () => {
      setOpen(true);
    };
    
    const handleDrawerClose = () => {
      setOpen(false);
    };
    
    return (
        <>
            <Stack direction="row" sx={{ overflow: 'hidden' }} >
                <Box sx={{ width: '100%' }}>
                    <Box>
                        <HeaderTest pageContent={pageContent} />
                    </Box>
                </Box>
            </Stack>
        </>
    )
}