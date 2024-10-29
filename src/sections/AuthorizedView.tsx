// src/sections/AuthorizedView.tsx
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

export default function AuthorizedView() {
  return (
    <Container>
      <Typography variant="h4">Welcome to Your Profile</Typography>
      <Typography>You are authorized to view this content.</Typography>
    </Container>
  );
}
