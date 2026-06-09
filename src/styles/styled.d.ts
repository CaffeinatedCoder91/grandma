import "styled-components";
import type { MemorialTheme } from "./theme";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: MemorialTheme["colors"];
    fonts: MemorialTheme["fonts"];
    layout: MemorialTheme["layout"];
    radii: MemorialTheme["radii"];
    shadows: MemorialTheme["shadows"];
  }
}
