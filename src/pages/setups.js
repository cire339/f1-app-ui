import Head from 'next/head';
import { Box, Container, Grid } from '@mui/material';
import { Layout } from '../components/Layout';

const Setups = () => (
    <>
        <Head>
            <title>
                Setups | F1 Stats App
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
                            This page will show car setups for each tracks.
                        </p>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    </>
);

Setups.getLayout = (page) => (
    <Layout>
        {page}
    </Layout>
);

export default Setups;