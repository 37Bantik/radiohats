"use client";

import { ConfigProvider } from "antd";
import { theme } from "@/styles/antd-theme";

export function AntdProvider({ children }: { children: React.ReactNode }) {
  return <ConfigProvider theme={theme}>{children}</ConfigProvider>;
}
