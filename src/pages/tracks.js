import Head from 'next/head';
import {Box, Container, Grid, Typography} from '@mui/material';
import {Layout} from "../components/Layout";
import {TrackTile} from "../components/tracks/Track-Tile";

const Tracks = () => (
    <>
        <Head>
            <title>
                Tracks | F1 Stats App
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
                    Tracks
                </Typography>
                    <Grid
                        container
                        spacing={3}
                    >
                        <Grid
                            item
                            xl={3}
                            lg={3}
                            sm={6}
                            xs={12}
                        >
                            <TrackTile trackCode="MELBOURNE"/>
                        </Grid>
                        <Grid
                            item
                            xl={3}
                            lg={3}
                            sm={6}
                            xs={12}
                        >
                            <TrackTile trackCode="PAUL_RICARD"/>
                        </Grid>
                        <Grid
                            item
                            xl={3}
                            lg={3}
                            sm={6}
                            xs={12}
                        >
                            <TrackTile trackCode="SHANGHAI"/>
                        </Grid>
                        <Grid
                            item
                            xl={3}
                            lg={3}
                            sm={6}
                            xs={12}
                        >
                            <TrackTile trackCode="SAKHIR_BAHRAIN"/>
                        </Grid>
                        <Grid
                            item
                            xl={3}
                            lg={3}
                            sm={6}
                            xs={12}
                        >
                            <TrackTile trackCode="CATALUNYA"/>
                        </Grid>
                        <Grid
                            item
                            xl={3}
                            lg={3}
                            sm={6}
                            xs={12}
                        >
                            <TrackTile trackCode="MONACO"/>
                        </Grid>
                        <Grid
                            item
                            xl={3}
                            lg={3}
                            sm={6}
                            xs={12}
                        >
                            <TrackTile trackCode="MONTREAL"/>
                        </Grid>
                        <Grid
                            item
                            xl={3}
                            lg={3}
                            sm={6}
                            xs={12}
                        >
                            <TrackTile trackCode="SILVERSTONE"/>
                        </Grid>
                        <Grid
                            item
                            xl={3}
                            lg={3}
                            sm={6}
                            xs={12}
                        >
                            <TrackTile trackCode="HOCKENHEIM"/>
                        </Grid>
                        <Grid
                            item
                            xl={3}
                            lg={3}
                            sm={6}
                            xs={12}
                        >
                            <TrackTile trackCode="HUNGARORING"/>
                        </Grid>
                        <Grid
                            item
                            xl={3}
                            lg={3}
                            sm={6}
                            xs={12}
                        >
                            <TrackTile trackCode="SPA"/>
                        </Grid>
                        <Grid
                            item
                            xl={3}
                            lg={3}
                            sm={6}
                            xs={12}
                        >
                            <TrackTile trackCode="MONZA"/>
                        </Grid>
                        <Grid
                            item
                            xl={3}
                            lg={3}
                            sm={6}
                            xs={12}
                        >
                            <TrackTile trackCode="SINGAPORE"/>
                        </Grid>
                        <Grid
                            item
                            xl={3}
                            lg={3}
                            sm={6}
                            xs={12}
                        >
                            <TrackTile trackCode="SUZUKA"/>
                        </Grid>
                        <Grid
                            item
                            xl={3}
                            lg={3}
                            sm={6}
                            xs={12}
                        >
                            <TrackTile trackCode="ABU_DHABI"/>
                        </Grid>
                        <Grid
                            item
                            xl={3}
                            lg={3}
                            sm={6}
                            xs={12}
                        >
                            <TrackTile trackCode="TEXAS"/>
                        </Grid>
                        <Grid
                            item
                            xl={3}
                            lg={3}
                            sm={6}
                            xs={12}
                        >
                            <TrackTile trackCode="BRAZIL"/>
                        </Grid>
                        <Grid
                            item
                            xl={3}
                            lg={3}
                            sm={6}
                            xs={12}
                        >
                            <TrackTile trackCode="AUSTRIA"/>
                        </Grid>
                        <Grid
                            item
                            xl={3}
                            lg={3}
                            sm={6}
                            xs={12}
                        >
                            <TrackTile trackCode="SOCHI"/>
                        </Grid>
                        <Grid
                            item
                            xl={3}
                            lg={3}
                            sm={6}
                            xs={12}
                        >
                            <TrackTile trackCode="MEXICO"/>
                        </Grid>
                        <Grid
                            item
                            xl={3}
                            lg={3}
                            sm={6}
                            xs={12}
                        >
                            <TrackTile trackCode="BAKU_AZERBAIJAN"/>
                        </Grid>
                        <Grid
                            item
                            xl={3}
                            lg={3}
                            sm={6}
                            xs={12}
                        >
                            <TrackTile trackCode="ZANDVOORT"/>
                        </Grid>
                        <Grid
                            item
                            xl={3}
                            lg={3}
                            sm={6}
                            xs={12}
                        >
                            <TrackTile trackCode="IMOLA"/>
                        </Grid>
                        <Grid
                            item
                            xl={3}
                            lg={3}
                            sm={6}
                            xs={12}
                        >
                            <TrackTile trackCode="PORTIMAO"/>
                        </Grid>
                        <Grid
                            item
                            xl={3}
                            lg={3}
                            sm={6}
                            xs={12}
                        >
                            <TrackTile trackCode="JEDDAH"/>
                        </Grid>
                    </Grid>
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