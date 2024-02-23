"use client"
import React from "react";
import styles from "./Footer.module.scss";

import { useRouter } from "next/navigation";
import Link from "next/link";

const Footer = () => {
  const router = useRouter();
  
  return (
    <footer className={styles.footer}>
      <li>
        <Link href="/">Portal Firma</Link>
        <Link href="tel:+56 989 203 139">Mesa de ayuda: +56 989 203 139</Link>
        <Link href="/">De 9:30 hrs a 17:30 hrs</Link>
        <Link href="mailto:contacto@portalFirma.cl">
          contacto@portalfirma.cl
        </Link>
      </li>
      <div className={styles.infoLegal}>
        <h1>®Portal Firma Todos los Derechos Reservados 2023</h1>
      </div>

      <img
        className={styles.logoFooter}
        src="/logo.png"
        alt=""
        width={220}
        height={40}
        onClick={() => {
          router.push("/");
        }}
      />
      <img
        className={styles.iconFooter}
        src="/favicon.png"
        alt=""
        width={80}
        height={80}
        onClick={() => {
          router.push("/");
        }}
      />
    </footer>
  );
};

export default Footer;
