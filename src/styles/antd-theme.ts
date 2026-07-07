import type { ThemeConfig } from "antd";

export const theme: ThemeConfig = {
  token: {
    colorPrimary: "#1677ff",
    borderRadius: 8,
    fontFamily:
      'var(--font-geist-sans), -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  },
  components: {
    Menu: {
      fontSize: 16,
    },
    Card: {
      borderRadiusLG: 12,
    },
  },
};
