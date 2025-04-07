export const transitionVariantsPage = {
  initial: {
    y: "100%",
    height: "100%",
  },
  animate: {
    y: "0%",
    height: "100%", // no lo reduzcas a 0 para mantenerlo cubriendo la pantalla
  },
  exit: {
    y: "-100%",
    height: "100%",
  },
};
