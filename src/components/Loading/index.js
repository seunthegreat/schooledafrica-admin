import ReactLoading from "react-loading";
import { Box } from "@mui/system";

function Loading() {
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        height: 50,
        padding: 5,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <ReactLoading type={"cylon"} color={"ffffff"} height={"10%"} width={"20%"} />
    </Box>
  );
}

export default Loading;
