"use client";

import { Typography } from "antd";
import { useTheme } from "./ThemeContext";

const { Text } = Typography;

export function Footer() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <footer
      className="border-t py-8 transition-colors"
      style={{
        background: isDark ? "#141414" : "#f9fafb",
        borderColor: isDark ? "#2a2a2a" : "#e5e7eb",
      }}
    >
      <div className="mx-auto max-w-6xl px-4 text-center">
        <Text type="secondary">
          © 2026 РадиоШляпы. Код 100% ИИ
        </Text>
      </div>
    </footer>
  );
}
