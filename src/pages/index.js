import Head from 'next/head';
import { Box, Container, Grid, Typography } from '@mui/material';
import { Button, ButtonGroup } from "@mui/material";
import { Layout } from '../components/Layout';

const Home = () => (
    <>
      <Head>
        <title>
          Home | F1 Stats App
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
            Formula 1
        </Typography>
        <Grid sx={{ mt: 3 }}>
            <Typography
                variant="h7"
                sx={{ m: 1 }}
            >
                GitHub Links:
            </Typography>
            <p>
            <Button
                color="secondary"
                variant="contained"
                href="https://github.com/cire339/f1-app"
                target="_blank"
                rel="noopener noreferrer"
                sx={{m: 1}}
            >
                API Project
            </Button>
            </p>
            <p>
            <Button
                color="secondary"
                variant="contained"
                href="https://github.com/cire339/f1-app-ui"
                target="_blank"
                rel="noopener noreferrer"
                sx={{m: 1}}
            >
                UI Project
            </Button>
            </p>
        </Grid>
        </Container>
        </Box>
    </>
);

Home.getLayout = (page) => (
    <Layout>
      {page}
    </Layout>
);

export default Home;
