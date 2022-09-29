import TaskCard from "../components/taskCard";
import Grid from "@mui/material/Grid";
import Router from "next/router";
import { useState, useEffect } from "react";

export default function Home() {
  const [tasks, setTasks] = useState([]);
  function getTasks() {
    fetch("http://localhost:8081/api/v2/tasks", {
      method: "GET",
      mode: "cors",
    })
      .then((response) => response.json())
      .then((data) => {
        setTasks(data);
      });
  }

  useEffect(() => {
    if (
      sessionStorage.getItem("expirationDate") == null ||
      new Date(sessionStorage.getItem("expirationDate")) < Date.now()
    ) {
      Router.push("/");
    } else {
      getTasks();
    }
  }, [tasks]);
  return (
    <div className="container">
      <title>Home</title>
      <main>
        <h1 className="title">Home</h1>
        <Grid item xs={12} sm={12} md={4}>
          {tasks.map((task) => (
            <TaskCard
              name={task.name}
              status={task.status}
              assignedTo={task.assignedTo}
              description={task.description}
              dueDate={task.dueDate}
              createdAt={task.createdAt}
              key={task.id}
            />
          ))}
        </Grid>
      </main>
    </div>
  );
}
