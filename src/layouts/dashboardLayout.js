
import { Box,Stack } from "@mui/material";
// import  from '@mui/material/Stack';
export default function DashboardLayout({pageContent}){
    return (
        <>
            <Stack direction="row">
                    <Box sx={{bgcolor: 'primary.dark'}}>
                        left
                    </Box>

                    <Box >
                        <Box sx={{bgcolor: 'primary.light'}}>
                            header
                        </Box>
                        <Box sx={{bgcolor: 'primary.main'}}>
                            {pageContent}
                        </Box>
                    </Box>
                    
            </Stack>
        </>
    )
}