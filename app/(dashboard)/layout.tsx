import { Leftbar, PageTitle } from "@/components";

export default function PanelLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="dashboard_layout">
      <Leftbar />
      <div className="dashboard_page-container">
        <PageTitle />
        <div className="dashboard_page-container_inner">{children}</div>
      </div>
    </div>
  );
}
