import { Box, IconButton, Tooltip, Typography } from '@mui/material';
import React from 'react'
import {styled} from '@mui/system';
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";
import InstagramIcon from "@mui/icons-material/Instagram";
// import FacebookIcon from "@mui/icons-material/Facebook";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Helmet } from 'react-helmet';

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
  const SaHalfBox = styled(Box)(({ theme }) => ({
    // width: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: theme.spacing(2),
    [theme.breakpoints.down("sm")]:{
      width:"100%"
    }
  }));
  const ContentBox = styled(Box)(({ theme }) => ({
    width: "100%",
    minHeight: "40vh",
    borderRadius: "20px",
    padding: theme.spacing(1),
    display: "flex",
    justifyContent:"center",
    alignItems:"center",
    flexDirection: "column",
    gap: theme.spacing(1),
    // backgroundColor:"red",
    // boxShadow:" 0px 0px 63px 1px rgba(0,0,0,0.59)",
    [theme.breakpoints.down("sm")]:{
      minHeight: "30vh",
    }
  }));
  
  const AddBox = styled(Box)(({ theme }) => ({
    // width: "80%",
    padding: theme.spacing(1),
    display: "flex",
    justifyContent:"center",
    alignItems:"center",
    // flexDirection: "column",
    gap: theme.spacing(1),
    marginLeft: theme.spacing(1),
  }));
  
  const InstaFb = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection:"column",
    alignItems:"center",
    gap: theme.spacing(1),
    justifyContent:"center",
    // marginLeft:theme.spacing(2)
  }));

  const AddTypo = styled(Typography)(({ theme }) => ({
    fontFamily: "Fredoka, sans-serif",
    fontWeight:600
  }));

  const StyledIconButton = styled(IconButton)(({ theme }) => ({
    color:"#7a7979",
    "&:hover .icon":{
        transition:"all 0.3s ease-out",
        transform:"scale(1.3)",
        color:"#9c173f"
    }
}));
function Contact() {
  return (
    <MainBox>
      <Helmet>
        <title>Contact - FrameLaunch</title>
        {/* Add other meta tags here */}
      </Helmet>
          <SaHalfBox>
          <ContentBox>
            <Typography
              variant="h4"
              style={{ fontWeight: 600, fontFamily: "Fredoka, sans-serif" }}
            >
              Contact us:
            </Typography>
            <AddBox  data-aos="fade-up" data-aos-delay="100">
              <PermIdentityIcon />
              <AddTypo>Libin Joseph</AddTypo>
            </AddBox>
            <AddBox  data-aos="fade-up" data-aos-delay="200">
              <WhatsAppIcon />
              <AddTypo>+91 94488 74747</AddTypo>
            </AddBox>
            <AddBox  data-aos="fade-up" data-aos-delay="300">
              <LocationOnIcon />
              <AddTypo>Kottayam, Kerala</AddTypo>
            </AddBox>
            <AddBox  data-aos="fade-up" data-aos-delay="400">
              <EmailIcon />
              <AddTypo>libin@gmail.com</AddTypo>
            </AddBox>
            <InstaFb>
                <AddTypo variant='subtitle2'>Follow us:</AddTypo>
              
              
              <StyledIconButton  data-aos="fade-up" data-aos-delay="500"
              onClick={() =>
                window.open("https://www.instagram.com/framelaunchphotography?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", "_blank")
              }
              >
                <Tooltip title="Instagram">
                <InstagramIcon className='icon' />
                </Tooltip>
              </StyledIconButton>
              
            </InstaFb>
          </ContentBox>
        </SaHalfBox>
    </MainBox>
  )
}

export default Contact



// 