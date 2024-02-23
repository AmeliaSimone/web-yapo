"use client";
import React from "react";

import Screen from "@/components/layout/Screen";
import ContentRow from "@/components/layout/ContentRow";
import ContentCell from "@/components/layout/ContentCell";

import Button from "@/components/ui/Button";
import NavBar from "@/components/ui/NavBar";
import Footer from "@/components/ui/Footer";
import Paragraph from "@/components/ui/Paragraph";
import CardProgress from "@/components/ui/CarProgress";
import CardIcon from "@/components/ui/CardIcon";
import Card from "@/components/ui/Card";

import styles from "./Case.module.scss";
import { dataStep } from "@/data/vehicle";
import Reviews from "@/components/ui/Reviews";
import { useRouter } from "next/navigation";
import config from "@/util/config";
import withScrollAnimation from "@/components/ui/Framer";

export const Case = () => {
  const router = useRouter();
  const AnimateDiv = withScrollAnimation("div");
  return (
    <Screen>
      <NavBar />

      <div className={styles.contentOne}>
        <ContentCell gap="20px" className={styles.cotentcellCase}>
          <ContentCell gap="20px">
            <AnimateDiv>
              <h1 className={styles.outfit}>
                <span className={styles.inter}>Comienza a transferir </span> un
                vehículo en línea
              </h1>
            </AnimateDiv>

            <Paragraph
              title="Transfiere un vehículo desde tu hogar y firma el contrato con
                firma electrónica avanzada, simple o visada, de forma rápida y segura. "
              className={styles.paragraphOne}
            />
          </ContentCell>
          <AnimateDiv>
            <ContentRow gap="10px" className={styles.buttons}>
              <Button
                text="Revisar documentos"
                className={styles.buttonWhite}
                onClick={() => {
                  router.push(config.app_customer);
                }}
              ></Button>
              <Button
                text="Comenzar transferencia"
                className={styles.buttonBlack}
                onClick={() => {
                  router.push(config.app_vehicle);
                }}
              ></Button>
            </ContentRow>
          </AnimateDiv>

          <AnimateDiv>
            <img src="./yapo.png" className={styles.logoYapo} alt="" />
          </AnimateDiv>
        </ContentCell>
        <AnimateDiv>
          <img src={"/img2.svg"} alt="Image 1" className={styles.img} />
        </AnimateDiv>
      </div>

      <ContentCell className={styles.section2} gap="30px">
        <AnimateDiv>
          <h2 className={styles.outfit2}>
            <span className={styles.inter2}>Vende o compra</span>un vehículo en
            3 pasos
          </h2>
        </AnimateDiv>

        <Paragraph
          className=""
          title="Transfiere un vehículo desde donde quieras y sin filas de espera."
        />

        <ContentRow className={styles.cardNums} gap="50px">
          <Card
            num={1}
            title="Factibilidad de transferencia"
            text="Completamos los datos del vendedor y comprador para la
              creación y firma del 
              contrato."
          />
          <Card
            num={2}
            title="Creación y firma del contrato"
            text="Completamos los datos del vendedor y  comprador para la
            creación del contrato y firma 
            con Clave Única."
          />
          <Card
            num={3}
            title="Formalización de transferencia"
            text="El contrato queda autorizado legalmente y es 
            ingresado a la Institución Oficial."
          />
        </ContentRow>
      </ContentCell>

      <ContentCell className={styles.section3} gap="70px">
        <AnimateDiv>
          <h2 className={styles.outfit2}>
            ¿Por qué realizar la
            <span className={styles.inter2}>transferencia</span> con
            PortalFirma?
          </h2>
        </AnimateDiv>

        <ContentRow className={styles.contentCardIcon} gap="50px">
          <AnimateDiv>
            <CardIcon
              icon="shield"
              title="Factibilidad"
              text="Validamos que no presenten restricciones."
            />
          </AnimateDiv>
          <AnimateDiv>
            <CardIcon
              icon="pin_drop"
              title="Rapidez"
              text="Transfiere sin salir de tu hogar."
            />
          </AnimateDiv>
          <AnimateDiv>
            <CardIcon
              icon="smartphone"
              title="Seguimiento"
              text="Realiza seguimiento vía WhatsApp"
            />
          </AnimateDiv>
        </ContentRow>

        <ContentRow className={styles.contentCardIcon} gap="50px">
          <AnimateDiv>
            <CardIcon
              icon="devices"
              title="Comodidad"
              text="Firma el contrato con firma electrónica avanzada."
            />
          </AnimateDiv>
          <AnimateDiv>
            <CardIcon
              icon="directions_car"
              title="TAG"
              text="Solicita tu nuevo TAG a domicilio o devuelve el antiguo
            sin salir de tu casa."
            />
          </AnimateDiv>
          <AnimateDiv>
            <CardIcon
              icon="description"
              title="Inscripción"
              text="Inscripción rápido y seguro."
            />
          </AnimateDiv>
        </ContentRow>
      </ContentCell>

      <div className={styles.contentCardProgress}>
        <AnimateDiv>
        <h2 className={styles.outfit2}>Guía paso a paso</h2>
        </AnimateDiv>
        

        <CardProgress data={dataStep} />
      </div>

      <div className={styles.contentReview}>
        <AnimateDiv>
        <Reviews/>
        </AnimateDiv>
        

        <div className={styles.contentTitleReview}>
          <AnimateDiv>
          <h1 className={styles.titleReview}>
            ¿<span>Que piensan</span> de PortalFirma?
          </h1>
          </AnimateDiv>
        
          <AnimateDiv>
          <h2 className={styles.titleReviewH2}>
            Descubre lo que dicen nuestros clientes.
          </h2>
          </AnimateDiv>
          
        </div>
      </div>

      <Footer />
    </Screen>
  );
};

export default Case;
