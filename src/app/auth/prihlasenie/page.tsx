"use client";

import { signIn, useSession } from "next-auth/react"; // Import signIn function from next-auth
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button"; // Import Material-UI Button
import AuthorizedView from "@/sections/AuthorizedView";
import NonAuthorizedView from "@/sections/NonAuthorizedView";

export default function Prihlasenie() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <Typography>Loading...</Typography>;
  }

  return (
    <Container>
      {session ? (
        // If user is authenticated, show the Authorized View
        <AuthorizedView />
      ) : (
        // If user is not authenticated, show the Non-Authorized View with login button
        <NonAuthorizedView>
          <Typography variant="h6">Please log in to continue</Typography>
          <Button 
            variant="contained" 
            onClick={() => signIn("google")} // Trigger Google login
            color="primary"
          >
            Log in with Google
          </Button>
        </NonAuthorizedView>
      )}
    </Container>
  );
}
