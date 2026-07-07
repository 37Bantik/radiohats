import PptxGenJS from "pptxgenjs";

const pptx = new PptxGenJS();
pptx.layout = "LAYOUT_WIDE";
pptx.author = "РадиоШляпы";
pptx.title = "Инженер-проектировщик: о профессии";

const DARK_BG = "1a1a2e";
const ACCENT = "f5c842";
const WHITE = "ffffff";
const GRAY = "cccccc";

// --- Слайд 1: Титул ---
let slide = pptx.addSlide();
slide.background = { color: DARK_BG };
slide.addText("Инженер-проектировщик", {
  x: 0.5, y: 1.5, w: 12, h: 1.5,
  fontSize: 40, fontFace: "Arial", color: ACCENT, align: "center", bold: true,
});
slide.addText("О профессии. Hard & Soft skills. Карьера.", {
  x: 0.5, y: 3.2, w: 12, h: 0.8,
  fontSize: 18, fontFace: "Arial", color: GRAY, align: "center",
});
slide.addText("Команда РадиоШляпы", {
  x: 0.5, y: 5.5, w: 12, h: 0.6,
  fontSize: 14, fontFace: "Arial", color: GRAY, align: "center",
});

// --- Слайд 2: Что делает инженер ---
slide = pptx.addSlide();
slide.background = { color: DARK_BG };
slide.addText("Кто такой инженер-проектировщик?", {
  x: 0.5, y: 0.3, w: 12, h: 0.8,
  fontSize: 28, fontFace: "Arial", color: ACCENT, bold: true,
});
slide.addText(
  "Инженер-проектировщик придумывает, как вещь будет работать,\nи рисует чертёж, по которому её сделают.",
  {
    x: 0.5, y: 1.5, w: 12, h: 1.2,
    fontSize: 18, fontFace: "Arial", color: WHITE, align: "center",
  }
);

const whatDoes = [
  "Проектирует — создаёт чертежи, схемы и 3D-модели",
  "Рассчитывает — нагрузки, материалы, прочность",
  "Согласовывает — общается с заказчиком и командой",
];
whatDoes.forEach((text, i) => {
  slide.addText(text, {
    x: 2, y: 3.2 + i * 0.7, w: 9, h: 0.6,
    fontSize: 16, fontFace: "Arial", color: WHITE,
  });
});

// --- Слайд 3: Hard Skills ---
slide = pptx.addSlide();
slide.background = { color: DARK_BG };
slide.addText("Hard Skills", {
  x: 0.5, y: 0.3, w: 12, h: 0.8,
  fontSize: 28, fontFace: "Arial", color: ACCENT, bold: true,
});

const hardSkills = [
  "AutoCAD / Компас-3D — Продвинутый",
  "Revit / ArchiCAD — Средний",
  "Инженерные расчёты — Средний",
  "Чтение и составление чертежей — Продвинутый",
  "Нормативная документация (СП, ГОСТ) — Средний",
  "MS Office / Google Docs — Продвинутый",
  "Основы BIM-технологий — Базовый",
];
hardSkills.forEach((text, i) => {
  slide.addText(text, {
    x: 2, y: 1.3 + i * 0.6, w: 9, h: 0.5,
    fontSize: 15, fontFace: "Arial", color: WHITE,
  });
});

// --- Слайд 4: Soft Skills ---
slide = pptx.addSlide();
slide.background = { color: DARK_BG };
slide.addText("Soft Skills", {
  x: 0.5, y: 0.3, w: 12, h: 0.8,
  fontSize: 28, fontFace: "Arial", color: ACCENT, bold: true,
});

const softSkills = [
  "Аналитическое мышление — Продвинутый",
  "Коммуникация в команде — Средний",
  "Тайм-менеджмент — Средний",
  "Внимание к деталям — Продвинутый",
  "Стрессоустойчивость — Средний",
  "Умение принимать решения — Средний",
  "Находчивость и креативность — Базовый",
];
softSkills.forEach((text, i) => {
  slide.addText(text, {
    x: 2, y: 1.3 + i * 0.6, w: 9, h: 0.5,
    fontSize: 15, fontFace: "Arial", color: WHITE,
  });
});

// --- Слайд 5: Рабочие задачи ---
slide = pptx.addSlide();
slide.background = { color: DARK_BG };
slide.addText("Рабочие задачи", {
  x: 0.5, y: 0.3, w: 12, h: 0.8,
  fontSize: 28, fontFace: "Arial", color: ACCENT, bold: true,
});

const tasks = [
  "Анализ требований",
  "Разработка документации",
  "3D-моделирование",
  "Расчёт конструкций",
  "Координация с командой",
  "Контроль качества",
  "Взаимодействие с надзорными органами",
];
tasks.forEach((text, i) => {
  slide.addText(`${i + 1}. ${text}`, {
    x: 2, y: 1.3 + i * 0.6, w: 9, h: 0.5,
    fontSize: 15, fontFace: "Arial", color: WHITE,
  });
});

// --- Слайд 6: Как начать карьеру ---
slide = pptx.addSlide();
slide.background = { color: DARK_BG };
slide.addText("Как начать карьеру?", {
  x: 0.5, y: 0.3, w: 12, h: 0.8,
  fontSize: 28, fontFace: "Arial", color: ACCENT, bold: true,
});

const careerSteps = [
  "1. Учись на факультете (ПГС, архитектура, машиностроение)",
  "2. Освой AutoCAD / Компас",
  "3. Найди стажировку",
  "4. Собирай портфолио",
];
careerSteps.forEach((text, i) => {
  slide.addText(text, {
    x: 1.5, y: 1.5 + i * 0.9, w: 10, h: 0.7,
    fontSize: 17, fontFace: "Arial", color: WHITE,
  });
});

// --- Слайд 7: Один день из жизни ---
slide = pptx.addSlide();
slide.background = { color: DARK_BG };
slide.addText("Один день из жизни", {
  x: 0.5, y: 0.3, w: 12, h: 0.8,
  fontSize: 28, fontFace: "Arial", color: ACCENT, bold: true,
});

const dayTimeline = [
  "08:30 — Приход, кофе, планирование",
  "09:00 — Работа над проектом (AutoCAD, 3D)",
  "11:00 — Совещание с заказчиком",
  "12:30 — Обед",
  "13:30 — Расчёты и спецификации",
  "15:00 — Согласование со смежниками",
  "16:30 — Доработка документации",
  "18:00 — Конец рабочего дня",
];
dayTimeline.forEach((text, i) => {
  slide.addText(text, {
    x: 1.5, y: 1.2 + i * 0.55, w: 10, h: 0.5,
    fontSize: 14, fontFace: "Arial", color: WHITE,
  });
});

// --- Слайд 8: ЭР-Телеком ---
slide = pptx.addSlide();
slide.background = { color: DARK_BG };
slide.addText("ЭР-Телеком Холдинг", {
  x: 0.5, y: 0.3, w: 12, h: 0.8,
  fontSize: 28, fontFace: "Arial", color: ACCENT, bold: true,
});
slide.addText(
  "Крупный российский телеком-холдинг.\nОснован в 2001 году в Перми.\nБренд «ДОМ.РУ», 57 городов, ~18 000 сотрудников.",
  {
    x: 1, y: 1.5, w: 11, h: 2,
    fontSize: 17, fontFace: "Arial", color: WHITE, lineSpacingMultiple: 1.5,
  }
);

const companyDirs = [
  "Широкополосный интернет (до 1 Гбит/с)",
  "Кабельное и цифровое ТВ (HD, 4K)",
  "Корпоративные решения (IP-телефония, облака)",
];
companyDirs.forEach((text, i) => {
  slide.addText(text, {
    x: 2, y: 3.8 + i * 0.65, w: 9, h: 0.55,
    fontSize: 15, fontFace: "Arial", color: WHITE,
  });
});

// --- Слайд 9: Команда ---
slide = pptx.addSlide();
slide.background = { color: DARK_BG };
slide.addText("Команда РадиоШляпы", {
  x: 0.5, y: 0.3, w: 12, h: 0.8,
  fontSize: 28, fontFace: "Arial", color: ACCENT, bold: true,
});

const team = [
  { name: "Алабин Михаил", role: "Лидер команды" },
  { name: "Никитин Ярослав", role: "Заместитель" },
  { name: "Дегтярёв Константин", role: "Веб-разработчик" },
  { name: "Бобылёв Олег", role: "Техническая часть" },
  { name: "Филиппов Кирилл", role: "Критик и тестировщик" },
];
team.forEach((m, i) => {
  slide.addText(`${m.name} — ${m.role}`, {
    x: 2, y: 1.5 + i * 0.7, w: 9, h: 0.6,
    fontSize: 16, fontFace: "Arial", color: WHITE,
  });
});

// --- Слайд 10: Спасибо ---
slide = pptx.addSlide();
slide.background = { color: DARK_BG };
slide.addText("Спасибо за внимание!", {
  x: 0.5, y: 2, w: 12, h: 1.5,
  fontSize: 36, fontFace: "Arial", color: ACCENT, align: "center", bold: true,
});
slide.addText("github.com/37Bantik/radiohats", {
  x: 0.5, y: 3.8, w: 12, h: 0.6,
  fontSize: 16, fontFace: "Arial", color: GRAY, align: "center",
});

pptx.writeFile({ fileName: "presentation.pptx" }).then(() => {
  console.log("presentation.pptx created");
});
