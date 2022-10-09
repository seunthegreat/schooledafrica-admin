import { makeStyles } from "@mui/styles";

export default makeStyles(({ palette, boxShadows, functions, borders }) => {
  const { transparent, white } = palette;
  const { regular, xl } = boxShadows;
  const { pxToRem } = functions;
  const { borderRadius, borderWidth } = borders;

  return {
    courseCard: {
      display: "flex",
      flexDirection: "column",
      backgroundColor: transparent.main,
      boxShadow: "none",
      overflow: "visible",
      ":hover": {
        boxShadow: 20, // theme.shadows[20]
      },
    },

    courseCard_imageContainer: {
      boxShadow: xl,
      width: "100%",
      borderRadius: borderRadius.xl,
      position: "relative",
    },

    courseCard_image: {
      maxWidth: "100%",
      margin: 0,
      boxShadow: regular,
      objectFit: "cover",
      objectPosition: "center",
    },

    courseCard_avatar: {
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
