import React from "react";
import {
  Typography,
  AppBar,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CssBaseline,
  Grid,
  Toolbar,
  Container,
  Button,
} from "@mui/material";
import { PhotoCamera } from "@mui/icons-material";
import {
  MainContainer,
  IconSX,
  ButtonContainer,
  CardGrid,
  CardStyled,
  CardMediaStyled,
  CardContentStyled,
  Footer,
} from "./Styles";

const App = () => {
  const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <PhotoCamera sx={IconSX} />
          <Typography variant="h6">Photo Album</Typography>
        </Toolbar>
      </AppBar>
      <main>
        <MainContainer>
          <Container maxWidth="sm">
            <Typography
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Photo Album
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Similique consequatur at, obcaecati magni possimus mollitia!
            </Typography>
            <ButtonContainer>
              <Grid container spacing={2} justifyContent="center">
                <Grid item>
                  <Button variant="contained">Main call to action</Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined">Secondary action</Button>
                </Grid>
              </Grid>
            </ButtonContainer>
          </Container>
        </MainContainer>

        <Container maxWidth="md" sx={CardGrid}>
          <Grid container spacing={2}>
            {cards.map((item) => (
              <Grid item xs={12} sm={6} md={4}>
                <Card sx={CardStyled}>
                  <CardMedia
                    sx={CardMediaStyled}
                    image="https://source.unsplash.com/random"
                    title="Image"
                  />
                  <CardContent sx={CardContentStyled}>
                    <Typography gutter variant="h5">
                      Header
                    </Typography>
                    <Typography gutter>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Corrupti, harum.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      View
                    </Button>
                    <Button size="small" color="primary">
                      Edit
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>

      <Footer>
        <Typography variant="h6" align="center" gutterBottom>
          Footer
              </Typography>
              <Typography variant="subtitle1" align="center" color="secondaryText">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae.
              </Typography>
      </Footer>
    </>
  );
};

export default App;
