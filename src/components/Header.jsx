import React, { useState } from "react";
import { styled } from "@mui/system";
import { Box, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import CollectionsIcon from "@mui/icons-material/Collections";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import MenuIcon from "@mui/icons-material/Menu";
import Logo from '../assets/logo.jpg';

const MainBox = styled(Box)(({ theme }) => ({
  minHeight: theme.spacing("10vh"),
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: theme.spacing(1),
  width:"100%",
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  zIndex: 1000,
  backgroundColor: "transparent",
  // boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
}));

const NavBarBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  // backgroundColor: "yellow",
  marginRight:"20px",
  [theme.breakpoints.down("sm")]:{
    display:"none"
  }
}));

const LogoBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginLeft:"10px",
  gap: theme.spacing(1),
  [theme.breakpoints.down("sm")]: {
    display:"none"
  },
}));

const NavBarLink = styled(Typography)(({ theme }) => ({
  color: "#abaaa9",
  fontSize: "18px",
  fontWeight: 600,
  cursor: "pointer",
  fontFamily: "Fredoka, sans-serif",
  transition: "color 0.3s ease-in-out",
  "&:hover": {
    color: "#eb6857",
  },
}));

const StyledLogo = styled("img")(({ theme }) => ({
  width:theme.spacing("40px"),
  cursor:"pointer",
  borderRadius:"50%",
  padding:"2px",
  backgroundColor:"#fff"
}));

const CustomMenuIcon = styled(MenuIcon)(({ theme }) => ({
  display: "none",
  cursor: "pointer",
  marginLeft: theme.spacing(3),
  color: "#111",
  [theme.breakpoints.down("sm")]: {
    display: "block",
  },
}));

const navTitles = [
  {
    display: "Welcome",
    path: "/",
  },
  {
    display: "Gallery",
    path: "/gallery",
  },
  {
    display: "Contact",
    path: "/contact",
  },
  {
    display: "About",
    path: "/about",
  },
];

const StyledTypo = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  fontFamily: "Fredoka, sans-serif",
  textAlign: "center",
}));

function Header() {
  const [mobileMenu, setMobileMenu] = useState({ left: false });

  const navigate = useNavigate();

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.type === "Tab" || event.type === "Shift")
    ) {
      return;
    }
    setMobileMenu({ ...mobileMenu, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{
        width: anchor === "top" || anchor === "bottom" ? "auto" : 250,
      }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <Typography
          variant="body1"
          fontWeight={600}
          sx={{
            marginLeft: "20px",
            fontSize: "22px",
            textDecoration: "none",
          }}
        >
          Links
        </Typography>
        {navTitles.map((item, index) => (
          <ListItem
            key={item.index}
            disablePadding
            onClick={() => navigate(item.path)}
            data-aos="flip-up"
            data-aos-delay={index * 100}
            data-aos-duration="1000"
          >
            <ListItemButton>
              <ListItemIcon>
                {index === 0 && <HomeIcon />}
                {index === 1 && <CollectionsIcon />}
                {index === 2 && <InfoIcon />}
                {index === 3 && <InfoIcon />}
              </ListItemIcon>
              <ListItemText primary={item.display} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <MainBox>
      <CustomMenuIcon
        onClick={toggleDrawer("left", true)}
      />
      <Box sx={{display:"flex", alignItems:"center"}}>
        <Drawer
          anchor="left"
          open={mobileMenu["left"]}
          onClose={toggleDrawer("left", false)}
        >
          {list("left")}
        </Drawer>
        <LogoBox>
          <StyledLogo src={Logo} alt="logo-pic" />
          <StyledTypo variant="h5" sx={{color:"#eb6857"}}>FrameLaunch</StyledTypo>
        </LogoBox>
      </Box>
      <NavBarBox>
        {navTitles.map((link, index) => (
          <Box key={index} sx={{ marginLeft: index !== 0 ? 2 : 0 }}>
            <NavBarLink onClick={() => navigate(link.path)}>
              {link.display}
            </NavBarLink>
          </Box>
        ))}
      </NavBarBox>
    </MainBox>
  );
}

export default Header;
