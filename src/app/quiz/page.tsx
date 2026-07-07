"use client";

import { useState } from "react";
import { Typography, Card, Button, Radio, Space, Result } from "antd";
import Link from "next/link";
import {
  ArrowRightOutlined,
  CheckCircleOutlined,
  CloseCircleOutlined,
} from "@ant-design/icons";
import { PageTitle } from "@/components/shared/PageTitle";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { quizQuestions } from "@/data/quiz";
import { useTheme } from "@/components/layout/ThemeContext";

const { Title, Paragraph } = Typography;

export default function QuizPage() {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [answers, setAnswers] = useState<(number | null)[]>(
    new Array(quizQuestions.length).fill(null)
  );
  const [showResult, setShowResult] = useState(false);
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const question = quizQuestions[current];
  const isAnswered = selected !== null;
  const isCorrect = selected === question.correctIndex;

  function handleNext() {
    const newAnswers = [...answers];
    newAnswers[current] = selected;
    setAnswers(newAnswers);
    setSelected(null);

    if (current < quizQuestions.length - 1) {
      setCurrent(current + 1);
    } else {
      setShowResult(true);
    }
  }

  function handleRestart() {
    setCurrent(0);
    setSelected(null);
    setAnswers(new Array(quizQuestions.length).fill(null));
    setShowResult(false);
  }

  if (showResult) {
    const correctCount = answers.filter(
      (a, i) => a === quizQuestions[i].correctIndex
    ).length;
    const total = quizQuestions.length;
    const percent = Math.round((correctCount / total) * 100);

    return (
      <SectionWrapper>
        <PageTitle>Результаты теста</PageTitle>
        <Card className="max-w-lg mx-auto">
          <Result
            status={percent >= 60 ? "success" : "warning"}
            title={`${correctCount} из ${total} (${percent}%)`}
            subTitle={
              percent >= 80
                ? "Отлично! Ты хорошо знаешь профессию!"
                : percent >= 60
                  ? "Хорошо! Но есть что подтянуть."
                  : "Стоит повторить материал и попробовать снова."
            }
            extra={[
              <Button key="restart" onClick={handleRestart}>
                Пройти заново
              </Button>,
              <Link key="home" href="/">
                <Button type="primary">На главную</Button>
              </Link>,
            ]}
          />
        </Card>
      </SectionWrapper>
    );
  }

  return (
    <SectionWrapper>
      <PageTitle subtitle={`Вопрос ${current + 1} из ${quizQuestions.length}`}>
        Проверь себя
      </PageTitle>

      <Card className="max-w-lg mx-auto mb-8">
        <Title level={4} className="!mb-6">
          {question.question}
        </Title>
        <Radio.Group
          value={selected}
          onChange={(e) => setSelected(e.target.value)}
          className="flex flex-col gap-3"
        >
          {question.options.map((option, i) => (
            <Radio key={i} value={i} className="!text-base">
              {option}
            </Radio>
          ))}
        </Radio.Group>

        {isAnswered && (
          <div
            className="mt-4 rounded-lg p-3 transition-colors"
            style={{
              background: isDark
                ? isCorrect
                  ? "#1a2e1a"
                  : "#2e1a1a"
                : isCorrect
                  ? "#f0fdf4"
                  : "#fef2f2",
              color: isDark
                ? isCorrect
                  ? "#86efac"
                  : "#fca5a5"
                : isCorrect
                  ? "#166534"
                  : "#991b1b",
            }}
          >
            {isCorrect ? (
              <span>
                <CheckCircleOutlined className="mr-2" /> Правильно!
              </span>
            ) : (
              <span>
                <CloseCircleOutlined className="mr-2" /> Неправильно.
              </span>
            )}
            <Paragraph className="!mb-0 mt-2 !text-sm">
              {question.explanation}
            </Paragraph>
          </div>
        )}
      </Card>

      <div className="text-center">
        <Space>
          {current > 0 && (
            <Button onClick={() => setCurrent(current - 1)}>Назад</Button>
          )}
          <Button
            type="primary"
            disabled={!isAnswered}
            onClick={handleNext}
            icon={<ArrowRightOutlined />}
          >
            {current === quizQuestions.length - 1 ? "Завершить" : "Далее"}
          </Button>
        </Space>
      </div>
    </SectionWrapper>
  );
}
