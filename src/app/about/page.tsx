"use client";

import { Typography, Card, Tag, Button, Space } from "antd";
import Link from "next/link";
import {
  RightOutlined,
  ExperimentOutlined,
  ToolOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import { PageTitle } from "@/components/shared/PageTitle";
import { SectionWrapper } from "@/components/shared/SectionWrapper";

const { Title, Paragraph } = Typography;

const features = [
  {
    icon: <ExperimentOutlined className="text-3xl text-blue-500" />,
    title: "Проектирует",
    desc: "Создаёт чертежи, схемы и 3D-модели конструкций и систем.",
  },
  {
    icon: <ToolOutlined className="text-3xl text-blue-500" />,
    title: "Рассчитывает",
    desc: "Выполняет инженерные расчёты прочности, нагрузок и экономики.",
  },
  {
    icon: <TeamOutlined className="text-3xl text-blue-500" />,
    title: "Согласовывает",
    desc: "Общается с заказчиком, командой и надзорными органами.",
  },
];

export default function AboutPage() {
  return (
    <SectionWrapper>
      <PageTitle subtitle="Простыми словами о сложной профессии">
        Кто такой инженер-проектировщик?
      </PageTitle>

      <Card className="mb-10">
        <Paragraph className="text-base leading-relaxed">
          Инженер-проектировщик — это специалист, который <strong>превращает
          идею в готовый проект</strong>. Он берёт техническое задание от
          заказчика и создаёт документацию, по которой строители будут возводить
          здание, монтировать системы или устанавливать оборудование.
        </Paragraph>
        <Paragraph className="text-base leading-relaxed">
          Это не просто «человек, который рисует чертежи». Проектировщик думает
          о прочности, безопасности, экономии материалов и соответствии нормам.
          Его работа определяет, будет ли здание стоять 100 лет или потребует
          ремонта через 5.
        </Paragraph>
      </Card>

      <Title level={2} className="text-center !mb-6">
        Что он делает?
      </Title>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3 mb-10">
        {features.map((f) => (
          <Card key={f.title} className="text-center">
            <div className="mb-4">{f.icon}</div>
            <Title level={4}>{f.title}</Title>
            <Paragraph type="secondary">{f.desc}</Paragraph>
          </Card>
        ))}
      </div>

      <Card className="mb-10 bg-blue-50 border-blue-200">
        <Paragraph className="text-base italic text-center">
          «Инженер-проектировщик — это связующее звено между архитектурной
          идеей и реальной конструкцией. Без его чертежей не стоит ни один
          объект.»
        </Paragraph>
      </Card>

      <div className="text-center">
        <Space>
          <Tag color="blue">AutoCAD</Tag>
          <Tag color="blue">Revit</Tag>
          <Tag color="blue">Компас-3D</Tag>
          <Tag color="blue">ГОСТ</Tag>
          <Tag color="blue">СП</Tag>
        </Space>
      </div>

      <div className="text-center mt-8">
        <Link href="/tasks">
          <Button type="primary" icon={<RightOutlined />}>
            Какие задачи решает?
          </Button>
        </Link>
      </div>
    </SectionWrapper>
  );
}
