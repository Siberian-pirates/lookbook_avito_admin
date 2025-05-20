import styles from "@/styles/product-info-cell.module.scss";

interface Props {
  title: string;
  product_url: string;
  company: string;
  product_code: string;
}

const ProductsInfoCell: React.FC<Props> = ({
  title,
  product_url,
  company,
  product_code,
}) => {
  return (
    <div>
      <p className={styles.title}>
        <a href={product_url} target="_blank">
          {title}
        </a>
      </p>
      <p className={styles.info}>
        {company} - {product_code}
      </p>
    </div>
  );
};

ProductsInfoCell.displayName = "ProductsInfoCell";

export { ProductsInfoCell };
