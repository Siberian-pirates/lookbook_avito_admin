import { ProtectedRoute, Leftbar, PageTitle } from "@/components";
import { Space } from "antd";

export default function PanelLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <ProtectedRoute>
      <div className="dashboard_layout">
        <Leftbar />
        <div className="dashboard_content">
          <PageTitle />
          <div className="dashboard_content_page-wrapper">
            <Space className="dashboard_content_page">{children}</Space>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
}
