// src/app/components/navbar/page.tsx

//import Typography from "@mui/material/Typography";
//import Container from "@mui/material/Container";


//export const metadata = { title: "Hlavna navigacia | insta "};

//export default function NavBar() {

 // return (
  //  <Container>
  //   <Typography> Hlavna Navigacia </Typography>
  //  </Container>
//  );
//}


import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';
import { signIn, signOut, useSession } from 'next-auth/react';

const Navbar = () => {
  const { data: session } = useSession();

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>

        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link href="/" passHref style={{ color: 'inherit', textDecoration: 'none' }}>
            Domov {/* Home */}
          </Link>
        </Typography>

        <Button color="inherit">
          <Link href="/app/prispevok" passHref style={{ color: 'inherit', textDecoration: 'none' }}>
            Príspevok
          </Link>
        </Button>

        {!session ? (
          <>
            <Button color="inherit">
              <Link href="/app/registracia" passHref style={{ color: 'inherit', textDecoration: 'none' }}>
                Registrácia
              </Link>
            </Button>
            <Button color="inherit" onClick={() => signIn()}>Prihlásenie</Button>
          </>
        ) : (
          <>
            <Button color="inherit" onClick={() => signOut()}>Odhlásenie</Button>
            <Button color="inherit">
              <Link href="/app/profil" passHref style={{ color: 'inherit', textDecoration: 'none' }}>
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



//import React from 'react';
//import Navbar from '../components/Navbar'; // Make sure this path points to your Navbar component
import '../globals.css';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
};

//export default Layout;
