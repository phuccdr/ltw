import React from "react";
import { useParams, Link } from "react-router-dom";
import { Card, CardMedia, Typography, CardContent } from "@mui/material";
import models from "../../modelData/models";

import "./styles.css";

function UserPhotos() {
  const { userId } = useParams();
  const photos = models.photoOfUserModel(userId);

  function formatDate(dateString) {
    return new Date(dateString).toLocaleString();
  }

  if (!photos) {
    return <div>Loading photos...</div>;
  }

  return (
    <div>
      {photos.map((photo) => (
        <Card key={photo._id} style={{ marginBottom: "20px" }}>
          <img className="photo" src={`/images/${photo.file_name}`} />
          <CardContent>
            <Typography variant="subtitle2">
              Uploaded at: {formatDate(photo.date_time)}
            </Typography>
            {photo.comments?.map((comment) => (
              <div key={comment._id} style={{ marginTop: "10px" }}>
                <Typography variant="body2">
                  <Link to={`/users/${comment.user._id}`}>
                    {comment.user.first_name} {comment.user.last_name}
                  </Link>: {comment.comment}
                </Typography>
                <Typography variant="caption">
                  {formatDate(comment.date_time)}
                </Typography>
              </div>
            ))}
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export default UserPhotos;