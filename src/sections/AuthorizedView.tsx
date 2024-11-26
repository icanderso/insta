// src/sections/AuthorizedView.tsx
import React from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

const AuthorizedView: React.FC = () => {
  return (
    <Container>
      <Typography variant="h4">Welcome to Your Profile</Typography>
      <Typography>You are authorized to view this content.</Typography>
    </Container>
  );
};

export default AuthorizedView;
