import { MONTSERRAT, ROBOTO } from "@/constants/Fonts";
import type { StyleFunctionProps } from "@chakra-ui/styled-system";

export const Button = {
  // 1. We can update the base styles
  baseStyle: {
    fontWeight: "bold", // Normally, it is "semibold"
    // bg: "#FF6600",
  },
  // 2. We can add a new button size or extend existing
  sizes: {
    // xl: {
    //   h: "56px",
    //   fontSize: "lg",
    //   px: "32px",
    // },
  },
  // 3. We can add a new visual variant
  variants: {
    solid: (props: StyleFunctionProps) => ({
      bg: "#ff6600",
      color: "#fff",
      fontFamily: ROBOTO,
      paddingX: "1.5rem",
      borderRadius: "10px",
    }),
    customOne: {
      bg: "#0d0d0e",
      color: "#9ea0a9",
      border: "1px solid #0d0d0e",
      transition: "border-color .2s",
      fontWeight: "600",
      fontFamily: ROBOTO,
      padding: "14px 20px",
      height: "auto",
      width: "auto",
      minWidth: "unset",
    },
    offWhite: {
      bg: "#323232",
      color: "#fff",
      border: "1px solid #0d0d0e",
      transition: "border-color .2s",
      fontWeight: "600",
      fontFamily: ROBOTO,
      padding: "14px 20px",
      height: "auto",
      width: "auto",
      minWidth: "unset",
    },
    // "with-shadow": {
    //   bg: "red.400",
    //   boxShadow: "0 0 2px 2px #efdfde",
    // },
    // // 4. We can override existing variants
    // solid: (props: StyleFunctionProps) => ({
    //   bg: props.colorMode === "dark" ? "red.300" : "red.500",
    // }),
    // // 5. We can add responsive variants
    // sm: {
    //   bg: "teal.500",
    //   fontSize: "md",
    // },
  },
  // 6. We can overwrite defaultProps
  defaultProps: {
    // size: "lg", // default is md
    // variant: "sm", // default is solid
    // colorScheme: "green", // default is gray
  },
};
