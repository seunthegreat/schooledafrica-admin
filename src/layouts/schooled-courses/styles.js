import { makeStyles } from "@mui/styles";

// Images
import curved0 from "assets/images/curved-images/curved0.jpg";

export default makeStyles(({ palette, boxShadows, functions, borders }) => {
  const { transparent, white, gradients } = palette;
  const { regular, xl } = boxShadows;
  const { borderRadius, borderWidth } = borders;
  const { linearGradient, rgba, pxToRem } = functions;
  const { navbarBoxShadow } = boxShadows;

  return {
    profileHeader_background: {
      backgroundImage: `${linearGradient(
        rgba(gradients.info.main, 0.6),
        rgba(gradients.info.state, 0.6)
      )}, url(${curved0})`,
      backgroundSize: "cover",
      backgroundPosition: "50%",
      display: "flex",
      alignItems: "center",
      position: "relative",
      overflow: "hidden",
      minHeight: pxToRem(300),
      borderRadius: borderRadius.xl,
    },

    profileHeader_profile: {
      backdropFilter: `saturate(200%) blur(${pxToRem(30)})`,
      backgroundColor: rgba(white.main, 0.8),
      boxShadow: navbarBoxShadow,
      margin: `${pxToRem(-64)} ${pxToRem(24)} 0`,
      padding: pxToRem(16),
      position: "relative",
    },
    courseCard: {
      display: "flex",
      flexDirection: "column",
      backgroundColor: transparent.main,
      boxShadow: "none",
      overflow: "visible",
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
