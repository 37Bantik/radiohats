"use client";

import { useState } from "react";
import { Typography, Card, Tag, Tabs, Button, Space } from "antd";
import Link from "next/link";
import { RightOutlined, ArrowRightOutlined } from "@ant-design/icons";
import { PageTitle } from "@/components/shared/PageTitle";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { skillGroups } from "@/data/skills";

const { Title, Paragraph } = Typography;

const levelColor: Record<string, string> = {
  Базовый: "orange",
  Средний: "blue",
  Продвинутый: "green",
};

export default function SkillsPage() {
  const [activeTab, setActiveTab] = useState("0");

  const currentGroup = skillGroups[Number(activeTab)];

  return (
    <SectionWrapper>
      <PageTitle subtitle="Что нужно знать и уметь инженеру-проектировщику">
        Hard & Soft Skills
      </PageTitle>

      <Card className="mb-10">
        <Tabs
          activeKey={activeTab}
          onChange={setActiveTab}
          centered
          items={skillGroups.map((group, i) => ({
            key: String(i),
            label: group.title,
            children: (
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {group.items.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center justify-between rounded-lg border border-gray-200 p-4"
                  >
                    <span className="font-medium">{skill.name}</span>
                    <Tag color={levelColor[skill.level]}>{skill.level}</Tag>
                  </div>
                ))}
              </div>
            ),
          }))}
        />
      </Card>

      <Card className="mb-8 bg-blue-50 border-blue-200">
        <Paragraph className="text-center">
          <strong>Совет:</strong> Начни с базовых навыков — AutoCAD и чтение
          чертежей. Остальное приходит с опытом и практикой на реальных
          проектах.
        </Paragraph>
      </Card>

      <div className="text-center">
        <Space>
          <Link href="/career">
            <Button type="primary" icon={<RightOutlined />}>
              Как начать карьеру?
            </Button>
          </Link>
          <Link href="/tasks">
            <Button icon={<ArrowRightOutlined />}>Назад к задачам</Button>
          </Link>
        </Space>
      </div>
    </SectionWrapper>
  );
}
