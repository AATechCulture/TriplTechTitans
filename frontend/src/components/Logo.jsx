import PropTypes from "prop-types";
import { forwardRef } from "react";

import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import RouterLink from "./RouterLink";

// eslint-disable-next-line react/display-name
const Logo = forwardRef(({ disabledLink = false, sx }) => {
  const logo = (
    <Box
      component="img"
      src="../../public/logo/svg/logo-color.svg"
      sx={{ width: 40, height: 40, cursor: "pointer", ...sx }}
    />
  );

  if (disabledLink) {
    return logo;
  }

  return (
    <Link component={RouterLink} href="/" sx={{ display: "contents" }}>
      {logo}
    </Link>
  );
});

Logo.propTypes = {
  disabledLink: PropTypes.bool,
  sx: PropTypes.object,
};

export default Logo;
