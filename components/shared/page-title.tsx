"use client";

import { breadcrumbMap } from "@/lib";
import { SwapRightOutlined } from "@ant-design/icons";
import { Breadcrumb } from "antd";
import { usePathname } from "next/navigation";

const PageTitle: React.FC = () => {
  const pathname = usePathname();

  return (
    <div className="page-title">
      <Breadcrumb
        items={pathname
          .substring(1)
          .split("/")
          .map((item) => {
            return { title: breadcrumbMap[item] || item };
          })}
        separator={<SwapRightOutlined />}
      />
    </div>
  );
};

PageTitle.displayName = "PageTitle";

export { PageTitle };
