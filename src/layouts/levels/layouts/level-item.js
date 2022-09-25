import Level from "../../levels/components/level";
import Card from "@mui/material/Card";
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
import PropTypes from "prop-types";
import { useAuth } from "auth-context/auth.context";
import LevelApi from "api/Level";

function LevelInformation({ level }) {
  let { user } = useAuth();
  const onDelete = async (id) => {
    try {
      const token = user.token;
      let response = await LevelApi.DeleteLevel({
        id,
        token,
      });
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Card id="delete-account">
      <SuiBox pt={3} px={2}>
        <SuiTypography variant="h6">Level Information</SuiTypography>
      </SuiBox>
      <SuiBox pt={1} pb={2} px={2}>
        <SuiBox component="ul" alignItems="center" flexDirection="column" p={0} m={0}>
          {level.map((e) => {
            return (
              <Level
                level={e.name}
                onDelete={() => onDelete(e.id)}
                onEdit={() => console.log("button works!")}
                description={e.description}
                key={e.id}
              />
            );
          })}
        </SuiBox>
      </SuiBox>
    </Card>
  );
}

LevelInformation.propTypes = {
  level: PropTypes.array.isRequired,
};

export default LevelInformation;
