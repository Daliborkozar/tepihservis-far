import React from "react";
import Link from "next/link";
import Image from "next/image";
import styled from "@emotion/styled";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

const ToolbarContainer = styled(Toolbar)({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
});

export const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ p: 1, backgroundColor:'white', color: 'black' }}>
        <ToolbarContainer>
          <Image src="/images/logo.jpg" alt="me" width={200} height='100%' />
          <Box
            sx={{
              display: { xs: "none", sm: "none", md: "block" },
            }}
          >
            <Link href="/">Pocetna</Link>
            <Link href="/">Pranje tepiha</Link>
            <Link href="/">Isusivaci vlage</Link>
            <Link href="/aboutus">O nama</Link>
            <Link href="/">Kontakt</Link>
          </Box>
          <Button color="secondary" variant="contained"  sx={{
              display: { xs: "none", sm: "block", md: "block" },
    
            }}>
            Zakazi termin
          </Button>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{
              display: { xs: "block", sm: "block", md: "none" },
            }}
          >
            <MenuIcon />
          </IconButton>
        </ToolbarContainer>
      </AppBar>
    </Box>
  );
};
