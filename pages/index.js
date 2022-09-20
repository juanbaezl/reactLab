import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CustomTextField from "../components/customTextField";

export default function Login() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <div className="container">
      <head>
        <title>Login</title>
      </head>
      <main>
        <h1 className="title">Login Demo</h1>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <CustomTextField
            passswd={false}
            label="Email Address"
            identifier="email"
          />
          <CustomTextField
            passswd={true}
            label="Password"
            identifier="password"
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
        </Box>
      </main>
    </div>
  );
}
