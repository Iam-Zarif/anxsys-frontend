// File: constants/colors.ts

export const colors = {
  brand: {
    primary: "#0E39FF",
    secondary: "#04C1FC",
    tertiary: "#31EEDD",
  },
  text: {
    primary: "#181818",
    secondary: "#4B5563",
    muted: "#9CA3AF",
    inverse: "#FFFFFF",
    accent: "#04C1FC",
  },
  background: {
    white: "#FFFFFF",
    light: "#F9FAFB",
    gray: "#F3F4F6",
    dark: "#06283D",
    overlay: "rgba(0, 0, 0, 0.7)",
  },
  border: {
    light: "#E5E7EB",
    default: "#D1D5DB",
    accent: "#04C1FC",
  },
  gradient: {
    brand: "linear-gradient(90deg, #0E39FF, #04C1FC, #31EEDD)",
    brandReverse: "linear-gradient(90deg, #31EEDD, #04C1FC, #0E39FF)",
    card: "linear-gradient(135deg, #F9FAFB, #F3F4F6)",
    darkOverlay: "linear-gradient(to top, rgba(0,0,0,0.8), transparent)",
  },
  status: {
    success: "#22C55E",
    warning: "#F59E0B",
    error: "#EF4444",
    info: "#0EA5E9",
  },
  shadow: {
    sm: "0 1px 2px rgba(0,0,0,0.05)",
    md: "0 4px 6px rgba(0,0,0,0.1)",
    lg: "0 10px 15px rgba(0,0,0,0.15)",
  },
} as const;

// Type for better reusability and auto-completion
export type Colors = typeof colors;

// Optional: Helper function to get a color value safely
export function getColor(keyPath: string): string | undefined {
  const keys = keyPath.split(".");
  let value: any = colors;
  for (const key of keys) {
    if (value && typeof value === "object" && key in value) {
      value = value[key];
    } else {
      return undefined;
    }
  }
  return typeof value === "string" ? value : undefined;
}
