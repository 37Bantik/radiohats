"use client";

import Link from "next/link";
import { Button, Card, Typography, Space } from "antd";
import {
  RightOutlined,
  RocketOutlined,
} from "@ant-design/icons";
import { SectionWrapper } from "@/components/shared/SectionWrapper";

const { Title, Paragraph } = Typography;

const previewCards = [
  {
    href: "/about",
    title: "О профессии",
    desc: "Кто такой инженер-проектировщик простыми словами",
  },
  {
    href: "/tasks",
    title: "Рабочие задачи",
    desc: "7 ключевых задач, которые решает инженер каждый день",
  },
  {
    href: "/skills",
    title: "Hard & Soft Skills",
    desc: "Какие навыки нужны для старта в профессии",
  },
  {
    href: "/career",
    title: "Карьера",
    desc: "Пошаговый план для студента: стажировка, портфолио, собеседование",
  },
  {
    href: "/day",
    title: "День инженера",
    desc: "Таймлайн реального рабочего дня от утра до вечера",
  },
  {
    href: "/company",
    title: "ЭР-Телеком Холдинг",
    desc: "Почему эта компания — отличное начало карьеры",
  },
  {
    href: "/team",
    title: "Команда РадиоШляпы",
    desc: "Авторы этого сайта — познакомься с командой",
  },
];

export default function HomePage() {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-white">
      <SectionWrapper className="pt-20 pb-16 text-center">
        <RocketOutlined className="text-6xl text-blue-500 mb-6" />
        <Title level={1} className="!mb-4">
          Инженер-проектировщик
        </Title>
        <Paragraph className="mx-auto max-w-2xl text-lg text-gray-600 mb-8">
          Профессия, которая превращает идеи в реальные конструкции. Узнай, кто
          это, какие навыки нужны и как начать карьеру уже со студенческой
          скамьи.
        </Paragraph>
        <Space size="middle" wrap>
          <Link href="/about">
            <Button type="primary" size="large" icon={<RightOutlined />}>
              Узнать больше
            </Button>
          </Link>
          <Link href="/quiz">
            <Button size="large">Пройти тест</Button>
          </Link>
        </Space>
      </SectionWrapper>

      <SectionWrapper>
        <Title level={2} className="text-center !mb-8">
          Разделы сайта
        </Title>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {previewCards.map((card) => (
            <Link key={card.href} href={card.href}>
              <Card
                hoverable
                className="h-full"
                title={card.title}
              >
                <Paragraph type="secondary">{card.desc}</Paragraph>
              </Card>
            </Link>
          ))}
        </div>
      </SectionWrapper>
    </div>
  );
}
