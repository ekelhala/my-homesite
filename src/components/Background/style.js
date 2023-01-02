import ColorScheme from "../../colors";

const BackgroundStyle = {
    position: "absolute",
    top: "0",
    left: "0",
    zIndex: "-1",
    width: "100%",
    height: "100%",
    backgroundImage: "url(/bg-image.jpg)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    filter: "blur(3px) grayscale(80%)",
    backgroundColor: ColorScheme.SiteBackground,
};

export default BackgroundStyle;