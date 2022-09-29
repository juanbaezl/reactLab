import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Typography from "@mui/material/Typography";
import React from "react";

export default class TaskCard extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Card sx={{ m: 1, minWidth: 220 }}>
        <CardHeader
          title={"Name: " + this.props.name}
          subheader={"Status: " + this.props.status}
          titleTypographyProps={{ align: "left" }}
          subheaderTypographyProps={{
            align: "left",
          }}
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[200]
                : theme.palette.grey[700],
          }}
        />
        <CardContent>
          <Typography
            component="h2"
            variant="h3"
            align="left"
            color="text.primary"
          >
            AssignedTo: {this.props.assignedTo}
          </Typography>
          <Typography component="h3" variant="h4" align="left">
            AssignedTo: {this.props.description}
          </Typography>
          <Typography component="h5" variant="h6" align="right">
            CreateAt: {this.props.createdAt}
          </Typography>
          <Typography component="h5" variant="h6" align="right">
            DueDate: {this.props.dueDate}
          </Typography>
        </CardContent>
      </Card>
    );
  }
}
