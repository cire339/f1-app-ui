import Head from 'next/head';
import { Box, Container, Grid } from '@mui/material';
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
                        Welcome to my Formula One 2021 application.
                    </p>
                    GitHub Links:
                    <Button
                        href="https://github.com/cire339/f1-app"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        API Project
                    </Button>
                    <Button
                        href="https://github.com/cire339/f1-app-ui"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        UI Project
                    </Button>
                </Grid>
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
