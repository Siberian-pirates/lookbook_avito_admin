import styles from "@/styles/product-image-cell.module.scss";
import { Image } from "antd";

interface Props {
  src: string;
}

const ProductsImageCell: React.FC<Props> = ({ src }) => {
  return (
    <div className={styles.container}>
      <Image className={styles.image} src={src} width={56} height={56} alt="" />
    </div>
  );
};

ProductsImageCell.displayName = "ProductsImageCell";

export { ProductsImageCell };
