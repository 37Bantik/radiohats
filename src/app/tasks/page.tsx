"use client";

import { Typography, Card, Button, Space } from "antd";
import Link from "next/link";
import { RightOutlined, ArrowRightOutlined } from "@ant-design/icons";
import { PageTitle } from "@/components/shared/PageTitle";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { tasks } from "@/data/tasks";

const { Title, Paragraph } = Typography;

export default function TasksPage() {
  return (
    <SectionWrapper>
      <PageTitle subtitle="7 ключевых задач, которые решает инженер-проектировщик каждый день">
        Рабочие задачи
      </PageTitle>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-10">
        {tasks.map((task) => (
          <Card key={task.id} hoverable className="h-full">
            <div className="mb-3 text-4xl">{task.icon}</div>
            <Title level={4}>{task.title}</Title>
            <Paragraph type="secondary">{task.description}</Paragraph>
          </Card>
        ))}
      </div>

      <Card className="mb-8 bg-gray-50">
        <Paragraph className="text-center">
          Каждый проект уникален, но последовательность шагов обычно одинакова:
          анализ → проектирование → расчёт → согласование → контроль.
        </Paragraph>
      </Card>

      <div className="text-center">
        <Space>
          <Link href="/skills">
            <Button type="primary" icon={<RightOutlined />}>
              Какие навыки нужны?
            </Button>
          </Link>
          <Link href="/about">
            <Button icon={<ArrowRightOutlined />}>Назад к профессии</Button>
          </Link>
        </Space>
      </div>
    </SectionWrapper>
  );
}
