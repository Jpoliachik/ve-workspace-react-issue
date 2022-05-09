import { style } from "@vanilla-extract/css";
import { theme } from "@local/design-system";

export const box = style({
  width: 200,
  height: 200,
  backgroundColor: theme.color.brand,
});
