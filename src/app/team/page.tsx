"use client";

import { useState } from "react";
import { Typography } from "antd";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";
import { teamMembers } from "@/data/team";
import { useTheme } from "@/components/layout/ThemeContext";

const { Title } = Typography;

export default function TeamPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { theme } = useTheme();
  const isDark = theme === "dark";

  function toggle(index: number) {
    setOpenIndex(openIndex === index ? null : index);
  }

  return (
    <div
      className="min-h-screen transition-colors duration-300"
      style={{
        background: isDark ? "#0a0a0a" : "#1a1a2e",
        color: "#eee",
      }}
    >
      <div className="mx-auto max-w-2xl px-4 py-20">
        <Title
          level={1}
          className="text-center !text-5xl !mb-2 !tracking-widest"
          style={{ color: "#f5c842" }}
        >
          РадиоШляпы
        </Title>
        <p className="text-center italic mb-10" style={{ color: "#888" }}>
          Команда единомышленников
        </p>

        <div className="flex flex-col gap-3">
          {teamMembers.map((member, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={member.name}
                className="rounded-xl overflow-hidden transition-colors"
                style={{ background: isDark ? "#1e1e1e" : "#16213e" }}
              >
                <button
                  onClick={() => toggle(i)}
                  className="flex w-full items-center justify-between px-6 py-4 text-left transition-colors hover:brightness-125 cursor-pointer"
                >
                  <span>
                    <span className="block text-base font-semibold">
                      {member.name}
                    </span>
                    <span className="block text-sm" style={{ color: "#aaa" }}>
                      {member.role}
                    </span>
                  </span>
                  <span
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 transition-colors"
                    style={{
                      borderColor: "#f5c842",
                      color: "#f5c842",
                    }}
                  >
                    {isOpen ? <MinusOutlined /> : <PlusOutlined />}
                  </span>
                </button>

                <div
                  className="overflow-hidden transition-all duration-300"
                  style={{ maxHeight: isOpen ? 200 : 0 }}
                >
                  <p
                    className="px-6 pb-4 text-sm leading-relaxed"
                    style={{ color: "#ccc" }}
                  >
                    {member.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
