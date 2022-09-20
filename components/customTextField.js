import TextField from "@mui/material/TextField";
import React from "react";

export default class CustomTextField extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <TextField
        margin="normal"
        required
        fullWidth
        id={this.props.identifier}
        label={this.props.label}
        name={this.props.identifier}
        autoComplete={this.props.password ? "current-password" : "email"}
        autoFocus
      />
    );
  }
}
