import type { SkillGroup } from "@/types";

export const skillGroups: SkillGroup[] = [
  {
    title: "Hard Skills",
    items: [
      { name: "AutoCAD / Компас-3D", level: "Продвинутый" },
      { name: "Revit / ArchiCAD", level: "Средний" },
      { name: "Инженерные расчёты", level: "Средний" },
      { name: "Чтение и составление чертежей", level: "Продвинутый" },
      { name: "Нормативная документация (СП, ГОСТ)", level: "Средний" },
      { name: "MS Office / Google Docs", level: "Продвинутый" },
      { name: "Основы BIM-технологий", level: "Базовый" },
    ],
  },
  {
    title: "Soft Skills",
    items: [
      { name: "Аналитическое мышление", level: "Продвинутый" },
      { name: "Коммуникация в команде", level: "Средний" },
      { name: "Тайм-менеджмент", level: "Средний" },
      { name: "Внимание к деталям", level: "Продвинутый" },
      { name: "Стрессоустойчивость", level: "Средний" },
      { name: "Умение принимать решения", level: "Средний" },
      { name: "Находчивость и креативность", level: "Базовый" },
    ],
  },
];
