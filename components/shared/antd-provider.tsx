import { AntdRegistry } from "@ant-design/nextjs-registry";
import { ConfigProvider } from "antd";

const antdConfigTheme = {
  token: { fontFamily: "var(--font-montserrat)" },
  components: {
    Menu: {
      colorSplit: "transparent",
      fontSize: 15,
      iconSize: 18,
      iconMarginInlineEnd: 12,
    },
    Breadcrumb: {
      fontSize: 20,
    },
  },
};

interface Props {
  children: React.ReactNode;
}

const AntdProvider: React.FC<Props> = ({ children }) => {
  return (
    <AntdRegistry>
      <ConfigProvider theme={antdConfigTheme}>{children}</ConfigProvider>
    </AntdRegistry>
  );
};

AntdProvider.displayName = "AntdProvider";

export { AntdProvider };
