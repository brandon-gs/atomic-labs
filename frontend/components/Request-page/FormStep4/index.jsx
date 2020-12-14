// Components
import FormTitle from "../FormTitle";
// Hooks
import { useState } from "react";
import { useRouter } from "next/router";
// Styles
import styles from "./FormStep4.module.css";
import ModalTerms from "./ModalTerms";

export default function FormStep1() {
  const [openModal, setOpenModal] = useState(false);
  const router = useRouter();

  const handleOpenModal = () => setOpenModal(true);

  return (
    <>
      <ModalTerms open={openModal} setOpenModal={setOpenModal} />
      <FormTitle normalText="términos y" featuredText="condiciones" />
      <p className={styles.form__subtitle}>
        Por favor revisa nuestros términos y condiciones para este servicio:
      </p>
      <p className={styles.open__modal} onClick={handleOpenModal}>
        Consulta nuestros terminos y condiciones
      </p>
      <div className={styles.checkbox__container}>
        <img
          src="/assets/img/checkmark_checkbox.png"
          alt="Marca de verificacion en términos y condiciones"
          className={styles.checkbox__image}
        />
        <p>Acepto los Términos y Condiciones</p>
      </div>
      <div className="form__button">
        <button className={styles.send__button}>
          Enviar
          <img
            src="/assets/img/ic_lock_24px.png"
            alt="Candado"
            className={styles.send__button__image}
          />
        </button>
      </div>
    </>
  );
}
