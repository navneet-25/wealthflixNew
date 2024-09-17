const { extendTheme } = require("@chakra-ui/react");
import { Button } from "./Components/Button";
// import "@fontsource/barlow-condensed/100.css";
// import "@fontsource/barlow-condensed/200.css";
// import "@fontsource/barlow-condensed/300.css";
// import "@fontsource/barlow-condensed/400.css";
// import "@fontsource/barlow-condensed/500.css";
// import "@fontsource/barlow-condensed/600.css";
// import "@fontsource/barlow-condensed/700.css";
// import "@fontsource/barlow-condensed/800.css";
// import "@fontsource/barlow-condensed/900.css";

import "./styles";

// theme.js
export const theme = extendTheme({
  colors: {
    themeColor: "#ff6600",
  },
  components: {
    Button: Button,
  },
  styles: {
    global: {
      // styles for the `body`
      body: {
        bg: "black",
        color: "white",
        fontFamily: `'Barlow Condensed', sans-serif !important`,
      },
    },
  },
});
