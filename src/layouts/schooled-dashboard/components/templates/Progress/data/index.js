// Soft UI Dashboard React components
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
import SuiProgress from "components/SuiProgress";

// Custom styles for the Projects
//import styles from "layouts/dashboard/components/Projects/styles";

export default function data() {
  return {
    columns: [
      { name: "courses", align: "left" },
      { name: "students", align: "left" },
      { name: "package", align: "center" },
      { name: "completion", align: "center" },
    ],

    rows: [
      {
        courses: (
          <SuiTypography variant="caption" textColor="text" fontWeight="medium">
            Jamie
          </SuiTypography>
        ),
        students: (
          <SuiTypography variant="caption" textColor="text" fontWeight="medium">
            Jamie
          </SuiTypography>
        ),
        package: (
          <SuiTypography variant="caption" textColor="text" fontWeight="medium">
            N1,000
          </SuiTypography>
        ),
        completion: (
          <SuiBox width="8rem" textAlign="left">
            <SuiProgress value={60} color="info" gradient />
          </SuiBox>
        ),
      },
      {
        courses: (
          <SuiTypography variant="caption" textColor="text" fontWeight="medium">
            Jamie
          </SuiTypography>
        ),
        students: (
          <SuiTypography variant="caption" textColor="text" fontWeight="medium">
            Jamie
          </SuiTypography>
        ),
        package: (
          <SuiTypography variant="caption" textColor="text" fontWeight="medium">
            N1,000
          </SuiTypography>
        ),
        completion: (
          <SuiBox width="8rem" textAlign="left">
            <SuiProgress value={60} color="info" gradient />
          </SuiBox>
        ),
      },
      {
        courses: (
          <SuiTypography variant="caption" textColor="text" fontWeight="medium">
            Jamie
          </SuiTypography>
        ),
        students: (
          <SuiTypography variant="caption" textColor="text" fontWeight="medium">
            Jamie
          </SuiTypography>
        ),
        package: (
          <SuiTypography variant="caption" textColor="text" fontWeight="medium">
            N1,000
          </SuiTypography>
        ),
        completion: (
          <SuiBox width="8rem" textAlign="left">
            <SuiProgress value={60} color="info" gradient />
          </SuiBox>
        ),
      },
      {
        courses: (
          <SuiTypography variant="caption" textColor="text" fontWeight="medium">
            Jamie
          </SuiTypography>
        ),
        students: (
          <SuiTypography variant="caption" textColor="text" fontWeight="medium">
            Jamie
          </SuiTypography>
        ),
        package: (
          <SuiTypography variant="caption" textColor="text" fontWeight="medium">
            N1,000
          </SuiTypography>
        ),
        completion: (
          <SuiBox width="8rem" textAlign="left">
            <SuiProgress value={60} color="info" gradient />
          </SuiBox>
        ),
      },
      {
        courses: (
          <SuiTypography variant="caption" textColor="text" fontWeight="medium">
            Jamie
          </SuiTypography>
        ),
        students: (
          <SuiTypography variant="caption" textColor="text" fontWeight="medium">
            Jamie
          </SuiTypography>
        ),
        package: (
          <SuiTypography variant="caption" textColor="text" fontWeight="medium">
            N1,000
          </SuiTypography>
        ),
        completion: (
          <SuiBox width="8rem" textAlign="left">
            <SuiProgress value={60} color="info" gradient />
          </SuiBox>
        ),
      },
      {
        courses: (
          <SuiTypography variant="caption" textColor="text" fontWeight="medium">
            Jamie
          </SuiTypography>
        ),
        students: (
          <SuiTypography variant="caption" textColor="text" fontWeight="medium">
            Jamie
          </SuiTypography>
        ),
        package: (
          <SuiTypography variant="caption" textColor="text" fontWeight="medium">
            N1,000
          </SuiTypography>
        ),
        completion: (
          <SuiBox width="8rem" textAlign="left">
            <SuiProgress value={60} color="info" gradient />
          </SuiBox>
        ),
      },
      {
        courses: (
          <SuiTypography variant="caption" textColor="text" fontWeight="medium">
            Jamie
          </SuiTypography>
        ),
        students: (
          <SuiTypography variant="caption" textColor="text" fontWeight="medium">
            Jamie
          </SuiTypography>
        ),
        package: (
          <SuiTypography variant="caption" textColor="text" fontWeight="medium">
            N1,000
          </SuiTypography>
        ),
        completion: (
          <SuiBox width="8rem" textAlign="left">
            <SuiProgress value={60} color="info" gradient />
          </SuiBox>
        ),
      },
    ],
  };
}
