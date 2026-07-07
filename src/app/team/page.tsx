"use client";

import { useState } from "react";
import { Typography } from "antd";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";
import { teamMembers } from "@/data/team";

const { Title } = Typography;

export default function TeamPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  function toggle(index: number) {
    setOpenIndex(openIndex === index ? null : index);
  }

  return (
    <div className="min-h-screen bg-[#1a1a2e] text-gray-100">
      <div className="mx-auto max-w-2xl px-4 py-20">
        <Title
          level={1}
          className="text-center !text-5xl !text-[#f5c842] !mb-2 !tracking-widest"
        >
          РадиоШляпы
        </Title>
        <p className="text-center text-gray-500 italic mb-10">
          Команда единомышленников
        </p>

        <div className="flex flex-col gap-3">
          {teamMembers.map((member, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={member.name}
                className="rounded-xl bg-[#16213e] overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggle(i)}
                  className="flex w-full items-center justify-between px-6 py-4 text-left transition-colors hover:bg-[#0f3460] cursor-pointer"
                >
                  <span>
                    <span className="block text-base font-semibold">
                      {member.name}
                    </span>
                    <span className="block text-sm text-gray-400">
                      {member.role}
                    </span>
                  </span>
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 border-[#f5c842] text-[#f5c842] transition-colors hover:bg-[#f5c842] hover:text-[#1a1a2e]">
                    {isOpen ? (
                      <MinusOutlined />
                    ) : (
                      <PlusOutlined />
                    )}
                  </span>
                </button>

                <div
                  className="overflow-hidden transition-all duration-300"
                  style={{ maxHeight: isOpen ? 200 : 0 }}
                >
                  <p className="px-6 pb-4 text-sm leading-relaxed text-gray-400">
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
