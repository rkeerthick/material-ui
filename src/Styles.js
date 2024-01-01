import { styled } from "@mui/material";

export const MainContainer = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(8, 0, 6),
}));

export const IconSX = {
  marginRight: "20px",
};

export const ButtonContainer = styled("div")(() => ({
  marginTop: "40px",
}));

export const CardGrid = { padding: "20px 0"};


export const CardStyled = {
    height: "100%",
    display: 'flex',
    flexDirection: "column",
    margin: "0 10px"
}

export const CardMediaStyled = {
    paddingTop: "56.25%",
}

export const CardContentStyled = {
    flexGrow: 1,
}

export const Footer = styled("footer")(({ theme }) => ({
    background: theme.palette.background.paper,
    padding: "50px 0"
}))