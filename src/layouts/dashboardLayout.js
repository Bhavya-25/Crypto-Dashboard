
import { Box,Stack } from "@mui/material";
import Header from "../components/header";

export default function DashboardLayout({pageContent}){
    return (
        <>
            <Stack direction="row">
                    <Box sx={{ backgroundImage: (theme)=> theme.palette.gradients.primary }}>
                        left
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