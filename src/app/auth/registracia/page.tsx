// src/app/auth/registracia/page.tsx

"use client";


import { signIn } from "next-auth/react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";

export default function RegisterPage() {
  return (
    <Container
      maxWidth="xs"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        mt: 5,
        p: 3,
        bgcolor: "background.paper",
        boxShadow: 3,
        borderRadius: 2,
      }}
    >
      <Typography variant="h5" sx={{ mb: 3 }}>
        Sign In with Google
      </Typography>
      <Typography variant="body1" sx={{ mb: 3 }}>
        Please sign in to create an account and start using our services.
      </Typography>
      <Button
        variant="contained"
        onClick={() => signIn("google")}
        color="primary"
      >
        Sign In with Google
      </Button>
    </Container>
  );
}
