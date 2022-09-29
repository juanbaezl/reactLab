import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CustomTextField from "../components/customTextField";
import { useState, useEffect } from "react";
import Router from "next/router";

export default function Login() {
  function handleSubmit(event) {
    event.preventDefault();
    const body = {
      email: event.currentTarget.email.value,
      password: event.currentTarget.password.value,
    };
    fetch("http://localhost:8080/v1/auth", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status == null) {
          sessionStorage.setItem("token", data.token);
          sessionStorage.setItem("expirationDate", data.expirationDate);
          Router.push("/home");
        }
      });
  }

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    const expirationDate =
      sessionStorage.getItem("expirationDate") == null
        ? null
        : new Date(sessionStorage.getItem("expirationDate"));
    if (token != null && expirationDate > Date.now()) {
      Router.push("/home");
    }
  }, []);

  return (
    <div className="container">
      <title>Login</title>
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
