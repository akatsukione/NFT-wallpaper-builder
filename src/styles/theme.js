import { createTheme } from "@mui/material/styles";

let theme = createTheme();

theme = createTheme({
  palette: {
    primary: {
      main: "#29D4FF",
    },
  },
  typography: {
    fontFamily: ["Aeonik", "Sora", "Open Sans"].join(","),
    h2: {
      fontFamily: "Aeonik",
      fontStyle: "normal",
      fontWeight: 800,
      letterSpacing: "0em",
      textAlign: "left",
      color: "#FFFFFF",
      fontSize: "1.8rem",
      "@media (min-width:600px)": {
        fontSize: "2.6rem",
      },
      [theme.breakpoints.between("md", "lg")]: {
        fontSize: "3.15rem",
      },
      [theme.breakpoints.up("lg")]: {
        fontSize: "3.5rem",
      },
    },

    body1: {
      fontFamily: "Aeonik",
      fontSize: "14px",
      fontStyle: "normal",
      fontWeight: 300,
      lineHeight: "25px",
      letterSpacing: "0em",
      textAlign: "left",
      color: "#C4C4C4",
    },
    h1: {
      fontFamily: "Aeonik",
      fontStyle: "normal",
      fontWeight: 800,
      lineHeight: "70px",
      letterSpacing: "0em",
      textAlign: "center",
      color: "#FFFFFF",
      fontSize: "2.1rem",
      "@media (min-width:600px)": {
        fontSize: "3rem",
      },
      [theme.breakpoints.between("md", "lg")]: {
        fontSize: "3.6rem",
      },
      [theme.breakpoints.up("lg")]: {
        fontSize: "4rem",
      },
    },
    h3: {
      fontFamily: "Aeonik",
      fontStyle: "normal",
      fontWeight: 700,
      letterSpacing: "0em",
      textAlign: "left",
      color: "#FFFFFF",
      fontSize: "1.2rem",
      "@media (min-width:600px)": {
        fontSize: "1.5rem",
      },
      [theme.breakpoints.between("md", "lg")]: {
        fontSize: "1.8rem",
      },
      [theme.breakpoints.up("lg")]: {
        fontSize: "2rem",
      },
    },
    h4: {
      fontFamily: "Aeonik",
      // fontSize: "18px",
      fontStyle: "normal",
      fontWeight: 300,
      letterSpacing: "0em",
      textAlign: "left",
      color: "#BBBBBB",
      fontSize: "0.9rem",
      "@media (min-width:600px)": {
        fontSize: "1rem",
      },
      [theme.breakpoints.between("md", "lg")]: {
        fontSize: "1rem",
      },
      [theme.breakpoints.up("lg")]: {
        fontSize: "1.13rem",
      },
    },
    h5: {
      fontFamily: "Aeonik",
      fontWeight: 600,
      color: "#D0D0D0",
      fontSize: "0.9rem",
      "@media (min-width:600px)": {
        fontSize: "1.1rem",
      },
      [theme.breakpoints.between("md", "lg")]: {
        fontSize: "1.125rem",
      },
      [theme.breakpoints.up("lg")]: {
        fontSize: "1.25rem",
      },
    },
    h6: {
      fontFamily: ["Aeonik", "Open Sans"].join(","),
      fontWeight: 400,
      fontSize: 16,
      lineHeight: "22,4",
      color: "#C4C4C4",
    },
    subtitle1: {
      fontFamily: "Aeonik",
      fontSize: "16px",
      fontStyle: "normal",
      fontWeight: 600,
      lineHeight: "150%",
      color: "#D0D0D0",
      textTransform: "capitalize",
    },
  },
  components: {
    MuiInputBase: {
      styleOverrides: {
        root: {
          borderRadius: "100px !important",
        },
        input: {
          paddingTop: "10px !important",
          paddingBottom: "10px !important",
        },
      },
    },
    MuiInputAdornment: {
      styleOverrides: {
        root: {
          "& p": {
            color: "black",
            fontWeight: "500",
          },
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          marginBottom: theme.spacing(1),
          color: "#525252",
          fontWeight: 500,
        },
      },
    },
    MuiFormControl: {
      styleOverrides: {
        root: {
          marginRight: theme.spacing(2), // jon todo. this adds double spacing, removed the nested one
        },
      },
    },

    MuiButton: {
      styleOverrides: {
        root: {
          padding: "10px 20px",
        },
      },
    },
  },

  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1288, //1200,
      xl: 1536,
    },
  },
  // spacing:{
  //   m: value,
  //   // '@media (min-width:600px)': {
  //   //   fontSize: '1.5rem',
  //   // },
  //   [theme.breakpoints.up('md')]: {

  //     m: value => value * 4,
  //   },
  // }
  // spacing: value => value * 4,
});

// theme.spacing =(value) => {
//   return (value * 4)
// }

// theme = responsiveFontSizes(theme);
export default theme;
