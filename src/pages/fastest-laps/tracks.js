import Head from 'next/head';
import {Box, Container, Grid, Typography} from '@mui/material';
import {Layout} from "../../components/Layout";
import {TrackGrid} from "../../components/tracks/Track-Grid";

const Tracks = () => (
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
                    Fastest Laps - Tracks
                </Typography>
             <TrackGrid
                title=""
             />
            </Container>
        </Box>
    </>
);

Tracks.getLayout = (page) => (
    <Layout>
        {page}
    </Layout>
);

export default Tracks;