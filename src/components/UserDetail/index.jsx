import React from "react";
import { Typography, Button } from "@mui/material";
import "./styles.css";
import { useParams, Link } from "react-router-dom";
import models from "../../modelData/models";

/**
 * Define UserDetail, a React component of Project 4.
 */
function UserDetail() {
  const { userId } = useParams();
  const user = models.userModel(userId);

  return (
    <div>
      <Typography variant="h5">{`${user.first_name} ${user.last_name}`}</Typography>
      <Typography>Location: {user.location}</Typography>
      <Typography>Description: {user.description}</Typography>
      <Typography>Occupation: {user.occupation}</Typography>
      <Button component={Link} to={`/photos/${user._id}`}>
        View Photos
      </Button>
    </div>
  );
}

export default UserDetail;