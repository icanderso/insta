// src/app/profile/page.tsx
"use client";

import { useSession } from "next-auth/react"; // Import useSession hook
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

export default function Profile() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <Typography>Loading...</Typography>;
  }

  if (!session) {
    return <Typography>Please log in to see your profile.</Typography>; // Message if not authenticated
  }

  // Extract the user's name from the session
  const userName = session.user?.name;

  return (
    <Container>
      <Typography variant="h4">Welcome, {userName}!</Typography>
      {/* Other profile information can be displayed here */}
    </Container>
  );
}
