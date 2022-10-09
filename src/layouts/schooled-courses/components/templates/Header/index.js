import Card from "@mui/material/Card";
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
import React from "react";

// Custom styles for Header
import styles from "layouts/profile/components/Header/styles";

function Header() {
  const classes = styles();

  return (
    <SuiBox>
      <SuiBox customClass={classes.profileHeader_background} />
      <Card className={classes.profileHeader_profile}>
        <SuiTypography>Hello</SuiTypography>
      </Card>
    </SuiBox>
  );
}

export default Header;
