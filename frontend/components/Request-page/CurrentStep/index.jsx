// Components
import { Stepper } from "components";
import FormStep1 from "../FormStep1";
import FormStep2 from "../FormStep2";
import FormStep3 from "../FormStep3";
import FormStep4 from "../FormStep4";
import PreviousStep from "../PreviousStep";
// Hooks
import { useStep } from "hooks";
// Styles
import clsx from "clsx";
import styles from "./CurrentStep.module.css";

export default function CurrentStep() {
  const { step } = useStep();
  const forms = [<FormStep1 />, <FormStep2 />, <FormStep3 />, <FormStep4 />];
  const imagesClasses = [
    null,
    styles.currentStep__image__2,
    null,
    styles.currentStep__image__4,
  ];
  const stepImage = step === 3 ? 2 : step;
  return (
    <>
      <div className={styles.container}>
        <main className={styles.currentStep}>
          <div
            className={"background-3"}
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url(${process.env.ASSET_PREFIX}/assets/img/background_3.jpg)`,
            }}
          />
          <section className="form__container">
            <Stepper step={step} />
            {step > 1 && <PreviousStep />}
            {forms[step - 1]}
          </section>
          <img
            src={`${process.env.ASSET_PREFIX}/assets/img/step_${stepImage}.png`}
            className={clsx(styles.currentStep__image, imagesClasses[step - 1])}
          />
        </main>
      </div>
      <div className="footer__space" />
    </>
  );
}
