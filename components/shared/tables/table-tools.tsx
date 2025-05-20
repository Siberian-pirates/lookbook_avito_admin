import { TableToolsType } from "@/types";
import { Button, Flex } from "antd";

interface Props {
  items: TableToolsType;
}

const TableTools: React.FC<Props> = ({ items }) => {
  if (items.length === 0) return null;

  return (
    <Flex align="center" gap="middle">
      {items.map((tool, index) => (
        <Button
          key={index}
          type="primary"
          onClick={tool.action}
          disabled={tool.disabled || tool.loading}
          loading={tool.loading}
        >
          {tool.title}
        </Button>
      ))}
    </Flex>
  );
};

TableTools.displayName = "TableTools";

export { TableTools };
