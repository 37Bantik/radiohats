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
} from "@ant-design/icons";

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

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      {/* Top row: title centered, hamburger on mobile */}
      <div className="relative mx-auto flex max-w-6xl items-center justify-center px-4 py-3 md:justify-between">
        <Link
          href="/"
          className="text-lg font-bold text-blue-600 md:text-xl"
        >
          Инженер-проектировщик
        </Link>

        {/* Mobile hamburger — absolute right */}
        <Button
          type="text"
          icon={<MenuOutlined />}
          className="absolute right-4 top-1/2 -translate-y-1/2 md:hidden"
          onClick={() => setDrawerOpen(true)}
        />
      </div>

      {/* Desktop menu row */}
      <div className="hidden border-t border-gray-100 md:block">
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
