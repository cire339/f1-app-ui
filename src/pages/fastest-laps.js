import Head from 'next/head';
import {Box, Container, Grid, Typography} from '@mui/material';
import { Layout } from '../components/Layout';
import {FastestLapsResults} from "../components/fastest-laps/FastestLapsResults";

const FastestLaps = props => (
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
                <Typography
                    sx={{ m: 1 }}
                    variant="h4"
                >
                    Canada
                </Typography>
                <Box sx={{ mt: 3 }}>
                    <FastestLapsResults fastestLaps={props.data} />
                </Box>
            </Container>
        </Box>
    </>
);

FastestLaps.getLayout = (page) => (
    <Layout>
        {page}
    </Layout>
);

// This gets called on every request
export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch(`http://localhost:8088/f1-app/laps/fastest-laps/MONTREAL?number-of-laps=10`)
    const data = await res.json()

    // Pass data to the page via props
    return { props: { data } }
}

export default FastestLaps;