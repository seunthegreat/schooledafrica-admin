const courses = [
  {
    image: "https://bit.ly/3i0v7dg",
    name: "Mathematics",
    description: "Introduction to algebra and linear",
    action: {
      type: "internal",
      route: "/pages/profile/profile-overview",
      color: "info",
      label: "view",
    },
  },
  {
    image: "https://bit.ly/3CzcwOK",
    name: "English Language",
    description: "Speaking proficiency",
    action: {
      type: "external",
      route: "https://material-ui.com/store/items/soft-ui-pro-dashboard/",
      color: "info",
      label: "view",
    },
  },
  {
    image: "https://bit.ly/3pSf59J",
    name: "Literature In English",
    description: "Theatric gestures and performance",
    action: {
      type: "internal",
      route: "/pages/profile/profile-overview",
      color: "info",
      label: "view",
    },
  },
];

export default courses;
