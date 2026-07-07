"use client";

import { Typography, Card, Button, Space, Tag } from "antd";
import Link from "next/link";
import { RightOutlined, ArrowRightOutlined } from "@ant-design/icons";
import { PageTitle } from "@/components/shared/PageTitle";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { companyInfo } from "@/data/company";

const { Title, Paragraph } = Typography;

export default function CompanyPage() {
  return (
    <SectionWrapper>
      <PageTitle subtitle="Крупный телеком-оператор, где проектировщик — ключевая фигура">
        {companyInfo.name}
      </PageTitle>

      <Card className="mb-10">
        <Paragraph className="text-base leading-relaxed">
          {companyInfo.description}
        </Paragraph>
      </Card>

      <Title level={2} className="text-center !mb-6">
        Что делает компания
      </Title>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3 mb-10">
        {companyInfo.projects.map((project) => (
          <Card key={project.title} hoverable>
            <Title level={4}>{project.title}</Title>
            <Paragraph type="secondary">{project.description}</Paragraph>
          </Card>
        ))}
      </div>

      <Card className="mb-10 bg-blue-50 border-blue-200">
        <Title level={3} className="!mb-4">
          Зачем компании инженер-проектировщик?
        </Title>
        <Paragraph className="text-base leading-relaxed">
          Каждый кабель, каждая сеть, каждый узел связи — всё это нужно
          спроектировать до того, как рабочие начнут прокладывать линии.
          Инженер-проектировщик в «ЭР-Телеком» определяет, как будут
          устроены телекоммуникационные сети в микрорайоне, в городе, между
          городами. Он считает нагрузки, выбирает оборудование, готовит
          чертежи и следит за тем, чтобы сеть работала без сбоев.
        </Paragraph>
        <Paragraph className="text-base leading-relaxed">
          Компания работает в 57 городах. В каждом городе — своя сеть, своя
          специфика, свои задачи. Инженеру всегда есть над чем работать.
        </Paragraph>
      </Card>

      <Title level={2} className="text-center !mb-6">
        Цитаты
      </Title>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 mb-10">
        {companyInfo.quotes.map((q, i) => (
          <Card key={i}>
            <Paragraph className="italic">«{q.text}»</Paragraph>
            <Paragraph type="secondary" className="!mb-0 text-right">
              — {q.author}
            </Paragraph>
          </Card>
        ))}
      </div>

      <Card className="mb-10">
        <div className="text-center">
          <Space size="large" wrap>
            <Tag color="blue">Телекоммуникации</Tag>
            <Tag color="blue">Широкополосный интернет</Tag>
            <Tag color="blue">Кабельное ТВ</Tag>
            <Tag color="blue">IP-телефония</Tag>
            <Tag color="blue">FTTB</Tag>
            <Tag color="blue">57 городов</Tag>
          </Space>
        </div>
      </Card>

      <div className="text-center">
        <Space>
          <Link href="/quiz">
            <Button type="primary" icon={<RightOutlined />}>
              Попробуй себя!
            </Button>
          </Link>
          <Link href="/day">
            <Button icon={<ArrowRightOutlined />}>Назад к дню инженера</Button>
          </Link>
        </Space>
      </div>
    </SectionWrapper>
  );
}
