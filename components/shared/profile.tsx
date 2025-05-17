"use client";

import { profileDropdownItems } from "@/lib/profile";
import { Avatar, Dropdown } from "antd";

import styles from "@/styles/profile.module.scss";

interface Props {}

const Profile: React.FC<Props> = ({}) => {
  return (
    <Dropdown placement="top" menu={{ items: profileDropdownItems }}>
      <div className={styles.container}>
        <div className={styles.avatar}></div>
        <div className={styles.info}>
          <p className={styles.name}>Имя</p>
          <p className={styles.role}>Администратор</p>
        </div>
      </div>
    </Dropdown>
  );
};

Profile.displayName = "Profile";

export { Profile };
