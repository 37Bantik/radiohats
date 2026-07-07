"use client";

import { Typography, Card, Button, Space, Steps } from "antd";
import Link from "next/link";
import {
  RightOutlined,
  ArrowRightOutlined,
  ReadOutlined,
  FileSearchOutlined,
  BuildOutlined,
  TrophyOutlined,
} from "@ant-design/icons";
import { PageTitle } from "@/components/shared/PageTitle";
import { SectionWrapper } from "@/components/shared/SectionWrapper";

const { Title, Paragraph } = Typography;

const careerSteps = [
  {
    title: "Учись на факультете",
    icon: <ReadOutlined />,
    description:
      "Выбирай направление: промышленное и гражданское строительство, архитектура, машиностроение или энергетика. Уделяй внимание дисциплинам по САПР и инженерным расчётам.",
  },
  {
    title: "Освой AutoCAD / Компас",
    icon: <FileSearchOutlined />,
    description:
      "Научись уверенно работать в САПР. Это базовый инструмент проектировщика. Бесплатные курсы есть на YouTube и на сайтах разработчиков.",
  },
  {
    title: "Найди стажировку",
    icon: <BuildOutlined />,
    description:
      "Подай заявку в проектную организацию или строительную компанию. Даже unpaid стажировка даёт реальный опыт и портфолио.",
  },
  {
    title: "Собирай портфолио",
    icon: <TrophyOutlined />,
    description:
      "Делай личные проекты: чертежи, 3D-модели, расчёты. Выкладывай на Behance или в Telegram. Портфолио ценнее диплома.",
  },
];

export default function CareerPage() {
  return (
    <SectionWrapper>
      <PageTitle subtitle="Пошаговый план для студента 1 курса">
        Как начать карьеру?
      </PageTitle>

      <Card className="mb-10">
        <Steps
          direction="vertical"
          current={-1}
          items={careerSteps.map((step) => ({
            title: step.title,
            icon: step.icon,
            description: (
              <Paragraph type="secondary">{step.description}</Paragraph>
            ),
          }))}
        />
      </Card>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 mb-10">
        <Card title="Где искать стажировку?" hoverable>
          <ul className="list-disc pl-5 text-gray-600">
            <li>Проектные организации (АРСИ, Метрогипротранс, etc.)</li>
            <li>Строительные компании (ПИК, Самолёт, А101)</li>
            <li>ИТ-интеграторы (ЭР-Телеком Холдинг, Росatom)</li>
            <li>Хакатоны и конкурсы для студентов</li>
          </ul>
        </Card>
        <Card title="Советы по собеседованию" hoverable>
          <ul className="list-disc pl-5 text-gray-600">
            <li>Принеси портфолио (даже учебные проекты)</li>
            <li>Расскажи о любимом предмете и почему</li>
            <li>Покажи, что готов учиться новому</li>
            <li>Задай вопрос о проектах компании</li>
          </ul>
        </Card>
      </div>

      <div className="text-center">
        <Space>
          <Link href="/day">
            <Button type="primary" icon={<RightOutlined />}>
              Как выглядит день инженера?
            </Button>
          </Link>
          <Link href="/skills">
            <Button icon={<ArrowRightOutlined />}>Назад к навыкам</Button>
          </Link>
        </Space>
      </div>
    </SectionWrapper>
  );
}
