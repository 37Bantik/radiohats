"use client";

import { Typography, Card, Timeline, Button, Space } from "antd";
import Link from "next/link";
import { RightOutlined, ArrowRightOutlined } from "@ant-design/icons";
import { PageTitle } from "@/components/shared/PageTitle";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { dayTimeline } from "@/data/timeline";

const { Title, Paragraph } = Typography;

export default function DayPage() {
  return (
    <SectionWrapper>
      <PageTitle subtitle="Как проходит рабочий день инженера-проектировщика">
        Один день из жизни
      </PageTitle>

      <Card className="mb-10">
        <Timeline
          mode="left"
          items={dayTimeline.map((event) => ({
            color: "blue",
            label: (
              <span className="font-bold text-blue-600">{event.time}</span>
            ),
            children: (
              <div>
                <Title level={5} className="!mb-1">
                  {event.title}
                </Title>
                <Paragraph type="secondary" className="!mb-0">
                  {event.description}
                </Paragraph>
              </div>
            ),
          }))}
        />
      </Card>

      <Card className="mb-8 bg-gray-50">
        <Paragraph className="text-center italic">
          «Каждый день немного отличается: где-то больше совещаний, где-то —
          глубокая проработка чертежей. Но главное — ты видишь, как твоя
          работа превращается в реальные объекты.»
        </Paragraph>
      </Card>

      <div className="text-center">
        <Space>
          <Link href="/company">
            <Button type="primary" icon={<RightOutlined />}>
              Где работать?
            </Button>
          </Link>
          <Link href="/career">
            <Button icon={<ArrowRightOutlined />}>Назад к карьере</Button>
          </Link>
        </Space>
      </div>
    </SectionWrapper>
  );
}
