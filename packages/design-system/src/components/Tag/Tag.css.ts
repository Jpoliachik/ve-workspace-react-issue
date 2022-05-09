import { style } from "@vanilla-extract/css";
import { theme } from "../../../theme.css";

export const tag = style([
  {
    color: theme.color.brand,
    fontWeight: "400",
    border: `1px solid ${theme.color.brand}`,
    borderRadius: "100px",
    width: "max-content",
    padding: "5px 10px",
    margin: "5px",
    selectors: {
      "&:hover": {
        cursor: "pointer",
      },
    },
  },
]);
