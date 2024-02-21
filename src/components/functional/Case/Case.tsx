import React from "react";

import Image from "next/image";

import Screen from "@/components/layout/Screen";
import ContentRow from "@/components/layout/ContentRow";
import ContentCell from "@/components/layout/ContentCell";

import Header from "@/components/ui/Header";
import Title from "@/components/ui/Title";
import Button from "@/components/ui/Button";
import Capsule from "@/components/ui/Capsule";
import Icon from "@/components/ui/Icon";

import styles from "./Case.module.scss";
import { Content } from "next/font/google";
import Paragraph from "@/components/ui/Paragraph";

export const Case = () => {
  return (
    <Screen>
      <Header />

      <ContentCell className={styles.section1}>
        <ContentRow>
          <ContentCell gap="20px">
            <ContentCell gap="20px">
              <Title text="Comienza a transferir" className={styles.inter} />
              <Title text="un vehículo en línea" className={styles.outfit} />
              <Paragraph>
                Transfiere un vehículo desde tu hogar y firma el contrato con{" "}
                <br /> firma electrónica avanzada de forma rápida, segura y por
                sólo <br /> $44.990 (Valor normal $49.990)
              </Paragraph>
            </ContentCell>

            <ContentRow gap="10px" className={styles.buttons}>
              <Button text="Revisar documentos"></Button>
              <Button
                text="Comenzar transferencia"
                className={styles.buttonBlack}
              ></Button>
            </ContentRow>
            <Paragraph>Contamos con el respaldo y difusión de ANAC</Paragraph>
          </ContentCell>

          <img src={"/img1.png"} alt="Image 1" className={styles.img} />
        </ContentRow>
      </ContentCell>

      <ContentCell className={styles.section2} gap="30px">
        <ContentRow>
          <Title text="Vende o compra" className={styles.inter2} />
          <Title text="un vehículo en 3 pasos" className={styles.outfit2} />
        </ContentRow>
        <Paragraph>
          Transfiere un vehículo desde donde quieras y sin filas de espera.
        </Paragraph>
        <ContentRow gap="50px">
          <ContentCell className={styles.num}>
            <Capsule text="1"></Capsule>
            <Paragraph className={styles.bold}>
              Factibilidad de transferencia
            </Paragraph>
            <Paragraph className={styles.regular}>
              Completamos los datos del vendedor y <br /> comprador para la
              creación y firma del <br />
              contrato.
            </Paragraph>
          </ContentCell>
          <ContentCell className={styles.num}>
            <Capsule text="2"></Capsule>
            <Paragraph className={styles.bold}>
              Creación y firma del contrato
            </Paragraph>
            <Paragraph className={styles.regular}>
              Completamos los datos del vendedor y <br /> comprador para la
              creación del contrato y firma <br />
              con Clave Única.
            </Paragraph>
          </ContentCell>
          <ContentCell className={styles.num}>
            <Capsule text="3"></Capsule>
            <Paragraph className={styles.bold}>
              Formalización de transferencia
            </Paragraph>
            <Paragraph className={styles.regular}>
              El contrato queda <br /> autorizado legalmente y es <br />{" "}
              ingresado a la Institución Oficial.
            </Paragraph>
          </ContentCell>
        </ContentRow>
      </ContentCell>

      <ContentCell className={styles.section3} gap="70px">
        <ContentRow>
          <Title text="¿Por qué realizar la" className={styles.outfit2} />
          <Title text="transferencia" className={styles.inter2} />
          <Title text=" con icartransfer?" className={styles.outfit2} />
        </ContentRow>
        <ContentRow gap="50px">
          <ContentRow gap="20px">
            <Icon iconName="shield" color="#311287"></Icon>
            <ContentCell>
              <Paragraph text="Paragraph" className={styles.bold2}>
                Factibilidad
              </Paragraph>
              <Paragraph text="texto" className={styles.regular2}>
                Validamos que no presenten restricciones.
              </Paragraph>
            </ContentCell>
          </ContentRow>

          <ContentRow gap="20px">
            <Icon iconName="pin_drop" color="#311287"></Icon>
            <ContentCell>
              <Paragraph text="Paragraph" className={styles.bold2}>
                Rapidez
              </Paragraph>
              <Paragraph text="texto" className={styles.regular2}>
                Transfiere sin salir de tu hogar.
              </Paragraph>
            </ContentCell>
          </ContentRow>

          <ContentRow gap="20px">
            <Icon iconName="smartphone" color="#311287"></Icon>
            <ContentCell>
              <Paragraph text="Paragraph" className={styles.bold2}>
                Seguimiento
              </Paragraph>
              <Paragraph text="texto" className={styles.regular2}>
                Realiza seguimiento vía WhatsApp.
              </Paragraph>
            </ContentCell>
          </ContentRow>
        </ContentRow>

        <ContentRow gap="50px">
          <ContentRow gap="20px">
            <Icon iconName="devices" color="#311287"></Icon>
            <ContentCell>
              <Paragraph text="Paragraph" className={styles.bold2}>
                Comodidad
              </Paragraph>
              <Paragraph text="texto" className={styles.regular2}>
                Firma el contrato con firma electrónica <br /> avanzada.
              </Paragraph>
            </ContentCell>
          </ContentRow>

          <ContentRow gap="20px">
            <Icon iconName="directions_car" color="#311287"></Icon>
            <ContentCell>
              <Paragraph text="Paragraph" className={styles.bold2}>
                TAG
              </Paragraph>
              <Paragraph text="texto" className={styles.regular2}>
                Solicita tu nuevo TAG a domicilio o devuelve <br /> el antiguo
                sin salir de tu casa.
              </Paragraph>
            </ContentCell>
          </ContentRow>

          <ContentRow gap="20px">
            <Icon iconName="description" color="#311287"></Icon>
            <ContentCell>
              <Paragraph text="Paragraph" className={styles.bold2}>
                Inscripción
              </Paragraph>
              <Paragraph text="texto" className={styles.regular2}>
                Inscripción rápido y seguro.
              </Paragraph>
            </ContentCell>
          </ContentRow>
        </ContentRow>
      </ContentCell>

      
    </Screen>
  );
};

export default Case;
