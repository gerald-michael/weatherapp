import { useNavigate } from "react-router-dom"
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography'
export default function Header() {
    let navigate = useNavigate()
    return (
        <Box sx={{ flexGrow: 1, marginBottom: 2 }}>
            <AppBar position="static" color="inherit">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} color="primary" data-testid="appname">
                        Weather APP
                    </Typography>

                    <Typography variant="h6" component="div" color="primary" sx={{ marginX: 2 }} onClick={()=>{navigate("/")}} data-testid="random">
                        Random
                    </Typography>

                    <Typography variant="h6" component="div" color="primary" onClick={()=>{navigate("/search")}} data-testid="search">
                        Search
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    )
}
