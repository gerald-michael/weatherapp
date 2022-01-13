import { Box, Button, Grid, LinearProgress, Paper } from '@mui/material'
import { useContext, useEffect } from 'react'
import { WeatherContext } from '../../store/context/weather'
import WeatherCard from '../shared/weather/WeatherCard'
import ShuffleIcon from '@mui/icons-material/Shuffle'
import { useSnackbar } from 'notistack';

export default function Random() {
    const { enqueueSnackbar } = useSnackbar();
    const { fetchWeatherCord, weather } = useContext(WeatherContext)
    const handleClick = () => {
        const lat = getRandom(-90, 90, 3);
        const long = getRandom(-180, 180, 3);
        fetchWeatherCord(lat, long)
    }
    useEffect(() => {
        if (weather.success !== 'null' && weather.success !== null && !weather.loading) {
            enqueueSnackbar(weather.success, {
                variant: 'success',
            })
        }
        if (weather.error) {
            enqueueSnackbar(weather.error, {
                variant: 'error',
            })
        }
    }, [weather])
    function getRandom(from: number, to: number, fixed: number): number {
        return parseInt((Math.random() * (to - from) + from).toFixed(fixed));
    }
    return (
        <>
            <Grid container component="main" sx={{ height: '89vh', }}>
                <Grid item xs={false} sm={4} md={6} sx={{
                    backgroundImage: 'url(https://source.unsplash.com/weekly?weather)',
                    backgroundRepeat: 'no-repeat',
                    backgroundColor:
                        (theme) => { return theme.palette.mode === 'light' ? theme.palette.grey[50] : theme.palette.grey[900] },
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }} />
                <Grid item xs={12} sm={8} md={6} component={Paper} elevation={6} square>
                    <Box sx={{
                        margin: (theme) => theme.spacing(8, 4),
                        display: 'flex',
                        flexDirection: 'column',
                    }}>
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={handleClick}
                            sx={{ marginTop: 2 }}
                            disabled={weather.loading}
                            endIcon={<ShuffleIcon />}
                            data-testid="randbtn"
                        >
                            Random
                        </Button>
                        {weather.loading ? <LinearProgress /> : null}

                        {weather.response ? <WeatherCard response={weather.response} /> : null}
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}
