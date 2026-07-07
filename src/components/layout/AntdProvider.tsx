"use client";

import { ConfigProvider, theme as antdTheme } from "antd";
import { useTheme } from "./ThemeContext";
import { theme } from "@/styles/antd-theme";

export function AntdProvider({ children }: { children: React.ReactNode }) {
  const { theme: appTheme } = useTheme();

  return (
    <ConfigProvider
      theme={{
        ...theme,
        algorithm:
          appTheme === "dark"
            ? antdTheme.darkAlgorithm
            : antdTheme.defaultAlgorithm,
      }}
    >
      {children}
    </ConfigProvider>
  );
}
