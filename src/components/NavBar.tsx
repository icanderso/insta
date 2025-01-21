"use client";

import { useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import Avatar from "@mui/material/Avatar";
import HomeIcon from "@mui/icons-material/Home";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import LogoutIcon from "@mui/icons-material/Logout";
import InfoIcon from "@mui/icons-material/Info";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import LoginIcon from "@mui/icons-material/Login";
import Link from "next/link";

export default function Navbar() {
  const { data: session } = useSession();
  const [value, setValue] = useState(0);

  return (
    <Box
      sx={{
        width: "100%",
        position: "fixed",
        bottom: 0,
        boxShadow: 3,
        zIndex: 1000,
        bgcolor: "background.paper",
      }}
    >
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => setValue(newValue)}
      >
        {/* Home Page */}
        <Link href="/" passHref>
          <BottomNavigationAction label="Home" icon={<HomeIcon />} />
        </Link>

        {/* Authenticated User Options */}
        {session ? (
          <>
            <Link href="/add" passHref>
              <BottomNavigationAction label="Add" icon={<AddCircleIcon />} />
            </Link>
            <BottomNavigationAction
              label="Logout"
              icon={<LogoutIcon />}
              onClick={() => signOut()}
            />
            <Link href="/profile" passHref>
              <BottomNavigationAction
                label="Profile"
                icon={<Avatar alt={session.user?.name || "User"} src={session.user?.image || ""} />}
              />
            </Link>
            <Link href="/prispevok" passHref>
              <BottomNavigationAction label="post" icon={<InfoIcon />} />
            </Link>
          </>
        ) : (
          // Non-Authenticated User Options
          <>
            <Link href="/auth/registracia" passHref>
              <BottomNavigationAction label="Register" icon={<AppRegistrationIcon />} />
            </Link>
            <BottomNavigationAction
              label="Login"
              icon={<LoginIcon />} // This is correctly used here
              onClick={() => signIn("google")}
            />
            <Link href="/auth/prihlasenie" passHref>
              <BottomNavigationAction label="Log in" icon={<LoginIcon />} />
            </Link>
          </>
        )}
      </BottomNavigation>
    </Box>
  );
}
