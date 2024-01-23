import {
  extendTheme,
  theme as base,
  withDefaultColorScheme,
} from "@chakra-ui/react";

const theme = extendTheme(
  {
    colors: {
      qeeps: {
        main: "#164951",
        sub: "#32454B",
        alternativeSub: "#405858",
        original: "#083434",
        lightMain: "#D3F8F8",
      },
      gray: {
        10: "#F2F2F2",
        80: "#666666",
      },
      subtle: {
        lightBlue: "#D9DAFC",
        white: "#FFFFFF",
      },
      actions: {
        successAccent: "#6FB482",
        background: "#F5FAF6",
        warningAccent:'#B4AC63'
      },
    },
    fonts: {
      heading: `Poppins, ${base.fonts?.heading}`,
      body: `Poppins,${base.fonts?.body}`,
    },
  },
  
  withDefaultColorScheme({ colorScheme: "queeps" })
);

export default theme;
