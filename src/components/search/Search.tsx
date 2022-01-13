import { Box, Button, Grid, LinearProgress, Paper } from '@mui/material'
import { useContext, useEffect, useState } from 'react'
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector'
import { WeatherContext } from '../../store/context/weather'
import WeatherCard from '../shared/weather/WeatherCard'
import SearchIcon from '@mui/icons-material/Search';
import { useSnackbar } from 'notistack';

export default function Search() {
    const { enqueueSnackbar } = useSnackbar();
    const [country, setCountry] = useState<any>()
    const [region, setRegion] = useState<any>()
    const { fetchWeather, weather } = useContext(WeatherContext)
    const handleClick = () => {
        if (country && region) {
            fetchWeather(country, region)
        }
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
                        <CountryDropdown value={country} onChange={(value: string) => { setCountry(value) }} />
                        <br />
                        <RegionDropdown country={country} value={region} onChange={(value: string) => setRegion(value)} />

                        <Button
                            variant="contained"
                            color="primary"
                            onClick={handleClick}
                            sx={{ marginTop: 2 }}
                            disabled={weather.loading}
                            endIcon={<SearchIcon />}
                            data-testid="srchbtn"
                        >
                            Search
                        </Button>
                        {weather.loading ? <LinearProgress /> : null}

                        {weather.response ? <WeatherCard response={weather.response} /> : null}
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}
