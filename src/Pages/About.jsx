import React from "react";
import { Helmet } from "react-helmet";
import { styled } from "@mui/system";
import { Box, Typography } from "@mui/material";
import Logo from "../assets/logo.jpg";


const MainBox = styled(Box)(({ theme }) => ({
  minHeight: theme.spacing("80vh"),
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: theme.spacing(1),
  marginTop:"40px",

  // backgroundColor: "green",
  // backgroundImage:
  //   "linear-gradient(352deg, rgba(94,224,245,1) 0%, rgba(225,231,86,1) 100%)",
  flexDirection: "column",
  gap: theme.spacing(2),
  [theme.breakpoints.down("sm")]: {
    minHeight: theme.spacing("75vh"),
  },
}));

const LogoBox = styled(Box)(({ theme }) => ({
  minHeight: theme.spacing("10vh"),
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: theme.spacing(1),
  gap: theme.spacing(2),
  borderRadius: "20px",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
  },
}));

const AboutBox = styled(Box)(({ theme }) => ({
  minHeight: theme.spacing("15vh"),
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: theme.spacing(1),
  gap: theme.spacing(2),
  width: "90%",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    width: "95%",
  },
}));

const StyledTypo = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  fontFamily: "Fredoka, sans-serif",
  textAlign: "center",
}));
const CustomTypo = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  fontFamily: "Fredoka, sans-serif",
  textAlign:"center"
}));

const StyledLogo = styled("img")(({ theme }) => ({
  width: theme.spacing("60px"),
  cursor: "pointer",
  borderRadius: "50%",
  padding: "2px",
  backgroundColor: "#fff",
}));

const HalfBox = styled(Box)(({ theme }) => ({
  width: "80%",
  [theme.breakpoints.down("sm")]:{
    width:"100%"
  }
}));

function About() {
  return (
    <MainBox>
      <Helmet>
        <title>About Us - FrameLaunch</title>
        {/* Add other meta tags here */}
      </Helmet>
      <LogoBox  data-aos="fade-up" data-aos-delay="100">
        <StyledLogo src={Logo} alt="logo-pic" />
        <StyledTypo variant="h3">FrameLaunch</StyledTypo>
      </LogoBox>
      <AboutBox>
        <HalfBox>
          <Typography
            variant="h4"
            style={{ fontWeight: 600, fontFamily: "Fredoka, sans-serif", textAlign:"center", marginBottom:"10px",textDecoration:"underline" }}
          >
            About Us
          </Typography>
          <Typography
            variant="h5"
            style={{ fontWeight: 600, fontFamily: "Fredoka, sans-serif", textAlign:"center", textDecoration:"underline" }}
          >
            FrameLaunch: Your Budget Photography Solution
          </Typography>
          <CustomTypo variant="subtitle1">
            At <u>FrameLaunch</u>, we understand the importance of capturing
            life's special moments without breaking the bank. Our budget
            photography services cater to a wide range of needs, including kids
            photography, weddings, photoshoots, and more.
          </CustomTypo>
          <CustomTypo variant="subtitle1">
            With <u>FrameLaunch</u>, you can expect high-quality photography
            that fits your budget. Whether you're looking to capture the
            innocence of childhood, the magic of a wedding day, or the essence
            of a professional photoshoot, we have you covered.
          </CustomTypo>
          <CustomTypo variant="subtitle1">
            Our team is dedicated to providing you with a seamless experience
            from start to finish. Choose <u>FrameLaunch</u> for your next
            photography project and let us help you capture the moments that
            matter most.
          </CustomTypo>
          <Typography variant="body2" textAlign="end" style={{
            fontFamily: "Fredoka, sans-serif",
          }}>- Libin Joseph</Typography>
          <Typography variant="subtitle2" textAlign="end" style={{
            fontFamily: "Fredoka, sans-serif",fontWeight:600
          }}>FrameLaunch</Typography>
        </HalfBox>
    
      </AboutBox>
    </MainBox>
  );
}

export default About;
