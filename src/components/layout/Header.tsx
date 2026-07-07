"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Menu, Drawer, Button } from "antd";
import {
  MenuOutlined,
  HomeOutlined,
  InfoOutlined,
  UnorderedListOutlined,
  ThunderboltOutlined,
  RocketOutlined,
  ClockCircleOutlined,
  BankOutlined,
  QuestionCircleOutlined,
  TeamOutlined,
  SunOutlined,
  MoonOutlined,
} from "@ant-design/icons";
import { useTheme } from "./ThemeContext";

const menuItems = [
  { key: "/", icon: <HomeOutlined />, label: <Link href="/">Главная</Link> },
  {
    key: "/about",
    icon: <InfoOutlined />,
    label: <Link href="/about">О профессии</Link>,
  },
  {
    key: "/tasks",
    icon: <UnorderedListOutlined />,
    label: <Link href="/tasks">Задачи</Link>,
  },
  {
    key: "/skills",
    icon: <ThunderboltOutlined />,
    label: <Link href="/skills">Навыки</Link>,
  },
  {
    key: "/career",
    icon: <RocketOutlined />,
    label: <Link href="/career">Карьера</Link>,
  },
  {
    key: "/day",
    icon: <ClockCircleOutlined />,
    label: <Link href="/day">День инженера</Link>,
  },
  {
    key: "/company",
    icon: <BankOutlined />,
    label: <Link href="/company">Компания</Link>,
  },
  {
    key: "/quiz",
    icon: <QuestionCircleOutlined />,
    label: <Link href="/quiz">Тест</Link>,
  },
  {
    key: "/team",
    icon: <TeamOutlined />,
    label: <Link href="/team">Команда</Link>,
  },
];

export function Header() {
  const pathname = usePathname();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <header
      className="sticky top-0 z-50 shadow-sm"
      style={{ background: "var(--header-bg)" }}
    >
      {/* Top row: title + hamburger */}
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link
          href="/"
          className="text-lg font-bold text-blue-600 md:text-xl"
        >
          Инженер-проектировщик
        </Link>

        <div className="flex items-center gap-2">
          {/* Theme toggle — always visible */}
          <Button
            type="text"
            icon={theme === "light" ? <MoonOutlined /> : <SunOutlined />}
            onClick={toggleTheme}
          />

          {/* Mobile hamburger */}
          <Button
            type="text"
            icon={<MenuOutlined className="text-xl" />}
            className="md:hidden"
            onClick={() => setDrawerOpen(true)}
          />
        </div>
      </div>

      {/* Desktop menu row */}
      <div
        className="hidden border-t md:block"
        style={{ borderColor: "var(--header-border)" }}
      >
        <div className="mx-auto max-w-6xl">
          <Menu
            mode="horizontal"
            selectedKeys={[pathname]}
            items={menuItems}
            className="border-b-0 justify-center"
          />
        </div>
      </div>

      {/* Mobile drawer */}
      <Drawer
        title="Навигация"
        placement="right"
        onClose={() => setDrawerOpen(false)}
        open={drawerOpen}
        width={280}
      >
        <Menu
          mode="vertical"
          selectedKeys={[pathname]}
          items={menuItems}
          onClick={() => setDrawerOpen(false)}
        />
      </Drawer>
    </header>
  );
}
