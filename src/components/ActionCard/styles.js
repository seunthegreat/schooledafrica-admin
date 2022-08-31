//-- @mui material components --//
import { makeStyles } from "@mui/styles";

export default makeStyles(({ palette, boxShadows, functions, borders }) => {
  const { white } = palette;
  const { regular } = boxShadows;
  const { pxToRem } = functions;
  const { borderRadius, borderWidth } = borders;

  return {
    ActionCard: {
      display: "flex",
      flexDirection: "column",
      boxShadow: "none",
      overflow: "visible",
      paddingVertical: 15,
      borderRadius: borderRadius.xl,
      justifyContent: "center",
    },

    ActionCard_image: {
      maxWidth: "100%",
      margin: 0,
      boxShadow: regular,
      objectFit: "cover",
      objectPosition: "center",
    },

    ActionCard_avatar: {
      border: `${borderWidth[2]} solid ${white.main}`,
      marginLeft: pxToRem(-12),
      cursor: "pointer",
      position: "relative",

      "&:hover, &:focus": {
        zIndex: "10",
      },
    },
  };
});
