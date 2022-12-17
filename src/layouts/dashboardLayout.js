import { Box, Stack } from "@mui/material";
import SideBar from './sideBar'
import Header from "../components/header";

export default function DashboardLayout({ pageContent }) {
    return (
        <>
            <Stack direction="row" sx={{ overflow: 'hidden' }} >
                <Box sx={{ background: (theme) => theme.palette.bgGray.dark, }}>
                    <SideBar />
                </Box>

                <Box sx={{
                    width: '100%',
                }}>
                    <Box sx={{ bgcolor: (theme) => theme.palette.gradients.primary }}>
                        <Header />
                    </Box>
                    <Box sx={{ background: (theme) => theme.palette.bgGray.dark, height: "calc(100vh - 72px)", overflow: 'scroll' }}>
                        {pageContent}
                    </Box>
                </Box>
            </Stack>
        </>
    )
}