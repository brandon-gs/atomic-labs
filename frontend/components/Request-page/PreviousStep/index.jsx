// Components
import Link from "next/link";
// Hooks
import { useStep } from "hooks";
// Styles
import styles from "./PreviousStep.module.css";

export default function PreviousStep() {
  const { step } = useStep();
  const prevStep = step - 1;

  return (
    <Link href={`/solicitud/paso/${prevStep}`}>
      <a className={styles.previousStep}>
        <span className={styles.previousStep__arrow}>{"<"}</span>Regresar
      </a>
    </Link>
  );
}
