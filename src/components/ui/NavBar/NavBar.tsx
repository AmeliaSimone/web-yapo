"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { useUi } from "@/store/hooks";
import { navBarOption } from "@/data/navBar";
import config from "@/util/config";
import styles from "./NavBar.module.scss";
import Logo from "../Logo";

const NavBar = () => {
  const { navBarUi, setNavBar } = useUi();
  const router = useRouter();

  const onClick = (path: string) => {
    router.push(path);
    setNavBar();
  };

  const hanOnclickNavBar = () => {
    setNavBar();
  };

  return (
    <div className={styles.navbar}>
      <Logo
        width="220px"
        height="40px"
        onClick={() => {
          router.push(config.app_www);
        }}
      />
      <ul style={{ right: navBarUi ? "0px" : "-200vw" }}>
        {navBarOption.map((item, key) => (
          <li key={key} onClick={() => onClick(item.path)}>
            {item.title}
          </li>
        ))}
      </ul>
      <span className="material-symbols-outlined" onClick={hanOnclickNavBar}>
        {navBarUi ? "close" : "drag_handle"}
      </span>
    </div>
  );
};
export default NavBar;