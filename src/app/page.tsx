
// src/app/auth/registracia/page.tsx
"use client";

import { signIn, useSession } from "next-auth/react"; // Import signIn from next-auth
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button"; // Import Material-UI Button
import AuthorizedView from "@/sections/AuthorizedView";
import NonAuthorizedView from "@/sections/NonAuthorizedView"; // Correct import

export default function Registracia() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <Typography>Loading...</Typography>;
  }

  return (
    <Container>
      {session ? (
        // If the user is authenticated, show the Authorized View
        <AuthorizedView />
      ) : (
        // If the user is not authenticated, show the Non-Authorized View
        <NonAuthorizedView />
      )}

      {/* Show registration form for unauthenticated users */}
      {!session && (
        <div>
          <Typography variant="h6">Please register to continue</Typography>
          <Button
            variant="contained"
            onClick={() => signIn("google")} // Trigger Google login or registration
            color="primary"
          >
            Register with Google
          </Button>
        </div>
      )}
    </Container>
  );
}
