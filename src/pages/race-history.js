import Head from 'next/head';
import { Box, Container, Grid } from '@mui/material';
import { Layout } from '../components/Layout';

const RaceHistory = () => (
    <>
        <Head>
            <title>
                Race History | F1 Stats App
            </title>
        </Head>
        <Box
            component="main"
            sx={{
                flexGrow: 1,
                py: 8
            }}
        >
            <Container maxWidth={false}>
                <Grid
                    container
                    spacing={3}
                >
                    <Grid
                        item
                        lg={8}
                        md={12}
                        xl={9}
                        xs={12}
                    >
                        <p>
                            This is where race history will show up.
                        </p>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    </>
);

RaceHistory.getLayout = (page) => (
    <Layout>
        {page}
    </Layout>
);

export default RaceHistory;