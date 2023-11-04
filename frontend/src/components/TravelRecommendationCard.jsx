// Travel Recommendations Card component that displays the travel recommendation as a card
import PropTypes from "prop-types";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";

const TravelRecommendationCard = ({ recommendation }) => {
  // eslint-disable-next-line no-unused-vars
  const { id, name, description, image } = recommendation;
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia component="img" height="140" image={image} alt={name} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

TravelRecommendationCard.propTypes = {
  recommendation: PropTypes.object.isRequired,
};

export default TravelRecommendationCard;
