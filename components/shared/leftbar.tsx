"use client";

import { usePathname } from "next/navigation";

import { navigationSchema } from "@/lib";
import { Menu } from "antd";
import { Profile } from "./profile";

import styles from "@/styles/leftbar.module.scss";

const Leftbar: React.FC = () => {
  const pathname = usePathname();

  return (
    <div className={styles.container}>
      <div>
        <p className={styles.title}>Меню</p>
        <Menu
          className={styles.menu}
          mode="inline"
          items={navigationSchema}
          selectedKeys={[pathname.substring(1)]}
        />
      </div>
      <Profile />
    </div>
  );
};

Leftbar.displayName = "Leftbar";

export { Leftbar };
