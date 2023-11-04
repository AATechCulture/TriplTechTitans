import PropTypes from "prop-types";
import { Box, Grid, Typography } from "@mui/material";
import TravelRecommendationCard from "./TravelRecommendationCard";

const TravelRecommendations = ({
  travelRecommendations = [
    {
      id: 1,
      name: "Bali, Indonesia",
      description:
        "Bali is one of the most popular travel destinations in the world. It is known for its beautiful beaches, rice terraces, and temples. It is also known for its surfing, diving, and snorkeling.",
      image: "https://source.unsplash.com/featured/?bali",
    },
    {
      id: 2,
      name: "Paris, France",
      description:
        "Paris is the capital and most populous city of France. It is known for its museums, monuments, and architecture. It is also known for its fashion, food, and wine.",
      image: "https://source.unsplash.com/featured/?paris",
    },
    {
      id: 3,
      name: "London, United Kingdom",
      description:
        "London is the capital and most populous city of the United Kingdom. It is known for its museums, monuments, and architecture. It is also known for its fashion, food, and wine.",
      image: "https://source.unsplash.com/featured/?london",
    },
    {
      id: 4,
      name: "New York City, United States",
      description:
        "New York City is the most populous city in the United States. It is known for its museums, monuments, and architecture. It is also known for its fashion, food, and wine.",
      image: "https://source.unsplash.com/featured/?newyork",
    },
    {
      id: 5,
      name: "Tokyo, Japan",
      description:
        "Tokyo is the capital and most populous city of Japan. It is known for its museums, monuments, and architecture. It is also known for its fashion, food, and wine.",
      image: "https://source.unsplash.com/featured/?tokyo",
    },
    {
      id: 6,
      name: "Rome, Italy",
      description:
        "Rome is the capital and most populous city of Italy. It is known for its museums, monuments, and architecture. It is also known for its fashion, food, and wine.",
      image: "https://source.unsplash.com/featured/?rome",
    },
    {
      id: 7,
      name: "Istanbul, Turkey",
      description:
        "Istanbul is the capital and most populous city of Turkey. It is known for its museums, monuments, and architecture. It is also known for its fashion, food, and wine.",
      image: "https://source.unsplash.com/featured/?istanbul",
    },
  ],
}) => {
  return (
    <div>
      <Typography variant="h4" sx={{ mb: 5 }}>
        Travel Recommendations
      </Typography>
      <Grid container spacing={3}>
        {travelRecommendations.map((recommendation) => (
          <Grid item xs={12} sm={6} md={3} key={recommendation.id}>
            <TravelRecommendationCard recommendation={recommendation} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

TravelRecommendations.propTypes = {
  travelRecommendations: PropTypes.array.isRequired,
};

export default TravelRecommendations;
