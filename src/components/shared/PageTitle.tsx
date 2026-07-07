import { Typography } from "antd";

const { Title } = Typography;

interface PageTitleProps {
  children: React.ReactNode;
  subtitle?: string;
}

export function PageTitle({ children, subtitle }: PageTitleProps) {
  return (
    <div className="mb-10 text-center">
      <Title level={1} className="!mb-2">
        {children}
      </Title>
      {subtitle && (
        <Typography.Paragraph type="secondary" className="text-lg">
          {subtitle}
        </Typography.Paragraph>
      )}
    </div>
  );
}
