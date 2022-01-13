import { Grid, Paper, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { Response } from '../../../store/models/weather'
import Proptypes from "prop-types"
interface CardProps {
    response: Response
}
export default function WeatherCard(props: CardProps) {
    const { response } = props
    return (
        <Box sx={{ marginTop: 5 }}>
            <Grid container component="main" spacing={2}>
                <Grid item xs={12}>
                    <Paper sx={{ padding: 2 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <Typography data-testid="location">
                                    Location
                                </Typography>
                                {response.sys.country ? <Typography data-testid="location-info">
                                    {response.sys.country},{response.name}
                                </Typography> : <Typography>_</Typography>}
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Typography data-testid="cordinates">
                                    Cordinates
                                </Typography>
                                <Typography data-testid="cordinates-info">
                                    long: {response.coord.lon} lat: {response.coord.lat}
                                </Typography>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Typography data-testid="sunset">
                                    Sunset
                                </Typography>
                                <Typography data-testid="sunset-info">
                                    {new Date(response.sys.sunset * 1000).toUTCString()}
                                </Typography>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Typography data-testid="sunrise">
                                    Sunrise
                                </Typography>
                                <Typography data-testid="sunrise-info">
                                    {new Date(response.sys.sunrise * 1000).toUTCString()}
                                </Typography>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Typography data-testid="type">
                                    Type
                                </Typography>
                                <Typography data-testid="type-info">
                                    {response.weather[0].main}
                                </Typography>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Typography data-testid="description">
                                    Description
                                </Typography>
                                <Typography data-testid="description-info">
                                    {response.weather[0].description}
                                </Typography>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Paper sx={{ padding: 2 }}>
                        <Grid container component="main" spacing={2}>
                            <Grid item xs={12}>
                                <Typography data-testid="temperature">Temperature</Typography>
                                <Typography data-testid="temperature-info">{response.main.temp} Kelvin</Typography>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Typography data-testid="pressure">Pressure</Typography>
                                <Typography data-testid="pressure-info">{response.main.pressure} hPa</Typography>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Typography data-testid="humidity">Humidity</Typography>
                                <Typography data-testid="humidity-info">{response.main.humidity}%</Typography>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Paper sx={{ padding: 2 }}>
                        <Grid container component="main" spacing={2}>
                            <Grid item xs={12}>
                                <Typography data-testid="wind">Wind Speed</Typography>
                                <Typography data-testid="wind-info">{response.wind.speed} m/sec</Typography>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Typography data-testid="direction">Direction</Typography>
                                <Typography data-testid="direction-info">{response.wind.deg}&deg;</Typography>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Typography data-testid="gust">Gust</Typography>
                                <Typography data-testid="gust-info">{response.wind.gust} m/sec</Typography>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    )
}

WeatherCard.protoTypes = {
    response: Proptypes.exact({
        base: Proptypes.string.isRequired,
        coord: Proptypes.exact({
            lat: Proptypes.number.isRequired,
            lon: Proptypes.number.isRequired
        }).isRequired,
        dt: Proptypes.number.isRequired,
        main: Proptypes.exact({
            temp: Proptypes.number.isRequired,
            feels_like: Proptypes.number.isRequired,
            temp_min: Proptypes.number.isRequired,
            temp_max: Proptypes.number.isRequired,
            pressure: Proptypes.number.isRequired,
            humidity: Proptypes.number.isRequired
        }).isRequired,
        name: Proptypes.string.isRequired,
        sys: Proptypes.exact({
            country: Proptypes.string.isRequired,
            sunrise: Proptypes.number.isRequired,
            sunset: Proptypes.number.isRequired
        }).isRequired,
        timezone: Proptypes.number.isRequired,
        visibility: Proptypes.number.isRequired,
        weather: Proptypes.arrayOf(Proptypes.exact({
            description: Proptypes.string.isRequired,
            main: Proptypes.string.isRequired,
            icon: Proptypes.string.isRequired
        }).isRequired).isRequired,
        wind: Proptypes.exact({
            deg: Proptypes.number.isRequired,
            gust: Proptypes.number.isRequired,
            speed: Proptypes.number.isRequired
        }).isRequired
    }).isRequired
}
