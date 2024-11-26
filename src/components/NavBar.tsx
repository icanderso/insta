"use client";

import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

const Navbar = () => {
  const { data: session } = useSession(); // Get session data

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
          <MenuIcon />
        </IconButton>

        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link href="/" passHref style={{ color: "inherit", textDecoration: "none" }}>
            Domov {/* Home */}
          </Link>
        </Typography>

        <Button color="inherit">
          <Link href="/prispevok" passHref style={{ color: "inherit", textDecoration: "none" }}>
            Príspevok
          </Link>
        </Button>

        {!session ? (
          <>
            <Button color="inherit">
              <Link href="/auth/registracia" passHref style={{ color: "inherit", textDecoration: "none" }}>
                Registrácia
              </Link>
            </Button>
            <Button color="inherit" onClick={() => signIn()}>Prihlásenie</Button>
          </>
        ) : (
          <>
            <Button color="inherit" onClick={() => signOut()}>Odhlásenie</Button>
            <Button color="inherit">
              <Link href="/profil" passHref style={{ color: "inherit", textDecoration: "none" }}>
                Profil
              </Link>
            </Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
