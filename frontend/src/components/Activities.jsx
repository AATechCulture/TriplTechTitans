import { Grid } from "@mui/material";
import PropTypes from "prop-types";
import ActivityCard from "./ActivityCard";

const Activities = ({ activities }) => {
  return (
    <Grid container spacing={3}>
      {activities.map((activity) => (
        <Grid item xs={12} sm={6} md={3} key={activity.id}>
          <ActivityCard activity={activity} />
        </Grid>
      ))}
    </Grid>
  );
};

Activities.propTypes = {
  activities: PropTypes.array.isRequired,
};

export default Activities;
