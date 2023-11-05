import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import PropTypes from "prop-types";

const ActivityCard = ({ activity }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={activity.pictures[0]}
        alt={activity.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {activity.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {activity.description}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Price: {activity.price.amount} {activity.price.currencyCode}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Duration: {activity.minimumDuration}
        </Typography>
      </CardContent>
    </Card>
  );
};

ActivityCard.propTypes = {
  activity: PropTypes.object.isRequired,
};

export default ActivityCard;
