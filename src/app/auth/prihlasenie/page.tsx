"use client";

import { signIn } from "next-auth/react"; // Import signIn function from next-auth
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button"; // Import Material-UI Button

export default function Prihlasenie() {

  return (
    <Container>
      <Typography variant="h6">Please log in to continue</Typography>
      <Button 
        variant="contained" 
        onClick={() => signIn("google")} // Trigger Google login
        color="primary"
      >
        Log in with Google
      </Button>
    </Container>
  );
}
