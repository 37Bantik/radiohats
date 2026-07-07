"use client";

import { Typography } from "antd";

const { Text } = Typography;

export function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50 py-8">
      <div className="mx-auto max-w-6xl px-4 text-center">
        <Text type="secondary">
          © 2026 Инженер-проектировщик: о профессии. Учебный проект.
        </Text>
      </div>
    </footer>
  );
}
