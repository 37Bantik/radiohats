"use client";

import { Typography, Button, Result } from "antd";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <Result
        status="404"
        title="404"
        subTitle="Страница не найдена"
        extra={
          <Link href="/">
            <Button type="primary">На главную</Button>
          </Link>
        }
      />
    </div>
  );
}
