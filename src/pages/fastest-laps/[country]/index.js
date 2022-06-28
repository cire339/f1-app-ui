import Head from 'next/head';
import {Box, Container, Grid, Typography} from '@mui/material';
import { Layout } from '../../../components/Layout';
import {FastestLapsResults} from "../../../components/fastest-laps/FastestLapsResults";
import {useRouter} from "next/router";

const TrackFastestLaps = (props) => {
    const router = useRouter();
    const { country } = router.query;

    return (
        <>
            <Head>
                <title>
                    Fastest Laps | F1 Stats App
                </title>
            </Head>
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    py: 5
                }}
            >
                <Container maxWidth={false}>
                    <Box>
                        <Typography
                            sx={{ m: 1 }}
                            variant="h4"
                            style={{textTransform: 'capitalize'}}
                        >
                            Fastest Laps - {country}
                        </Typography>
                    </Box>
                    <Box sx={{ mt: 3 }}>
                        <FastestLapsResults fastestLaps={props.data} />
                    </Box>
                </Container>
            </Box>
        </>
    );
}

TrackFastestLaps.getLayout = (page) => (
    <Layout>
        {page}
    </Layout>
);

// This gets called on every request
export async function getServerSideProps(ctx) {
    var country = ctx.query.country;
    // Fetch data from external API
    const fetchUrl = "http://localhost:8088/f1-app/laps/fastest-laps/" + getTrackCode( country ) +  "?number-of-laps=10"
    const res = await fetch(fetchUrl)
    const data = await res.json()

    //TODO: Add key to results?
    //Warning: Each child in a list should have a unique "key" prop.
    //Check the render method of `FastestLapsResults`. See https://reactjs.org/link/warning-keys for more information.

    // Pass data to the page via props
    return { props: { data } }
}

const getTrackCode = (countryName) => {
    switch(countryName.toUpperCase()) {
        case 'AUSTRALIA':
            return 'MELBOURNE';
        case 'FRANCE':
            return 'PAUL_RICARD';
        case 'CHINA':
            return 'SHANGHAI';
        case 'BAHRAIN':
            return 'SAKHIR_BAHRAIN';
        case 'SPAIN':
            return 'CATALUNYA';
        case 'MONACO':
            return 'MONACO';
        case 'CANADA':
            return 'MONTREAL';
        case 'UNITED KINGDOM':
            return 'SILVERSTONE';
        case 'GERMANY':
            return 'HOCKENHEIM';
        case 'HUNGARY':
            return 'HUNGARORING';
        case 'BELGIUM':
            return 'SPA';
        case 'ITALY (MONZA)':
            return 'MONZA';
        case 'SINGAPORE':
            return 'SINGAPORE';
        case 'JAPAN':
            return 'SUZUKA';
        case 'UNITED ARAB EMIRATES':
            return 'ABU_DHABI';
        case 'UNITED STATES':
            return 'TEXAS';
        case 'BRAZIL':
            return 'BRAZIL';
        case 'AUSTRIA':
            return 'AUSTRIA';
        case 'RUSSIA':
            return 'SOCHI';
        case 'MEXICO':
            return 'MEXICO';
        case 'AZERBAIJAN':
            return 'BAKU_AZERBAIJAN';
        case 'BAHRAIN (SHORT)':
            return 'SAKHIR_SHORT';
        case 'UNITED KINGDOM (SHORT)':
            return 'SILVERSTONE_SHORT';
        case 'UNITED STATES (SHORT)':
            return 'TEXAS_SHORT';
        case 'JAPAN (SHORT)':
            return 'SUZUKA_SHORT';
        case 'VIETNAM':
            return 'HANOI';
        case 'NETHERLANDS':
            return 'ZANDVOORT';
        case 'ITALY (IMOLA)':
            return 'IMOLA';
        case 'PORTUGAL':
            return 'PORTIMAO';
        case 'SAUDI ARABIA':
            return 'JEDDAH';
        default:
            return 'NA';
    }
};

export default TrackFastestLaps;