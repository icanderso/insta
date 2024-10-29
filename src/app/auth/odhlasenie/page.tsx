import { useEffect } from "react";
import { useRouter } from "next/router"; // or your router library of choice
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

export const metadata = { title: "Odhlasenie | insta" };

export default function Odhlasenie() {
  const router = useRouter();

  useEffect(() => {
    // Function to handle logout
    const handleLogout = () => {
      // Clear user authentication data
      localStorage.removeItem("user"); // Adjust this based on how you store user data
      sessionStorage.removeItem("user"); // If you use session storage, clear that too

      // Redirect to login page or home page after logging out
      router.push("/login"); // Adjust this to your login route
    };

    handleLogout();
  }, [router]);

  return (
    <Container>
      <Typography>Odhlasenie</Typography>
    </Container>
  );
}

