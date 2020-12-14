// Components
import FeatureCard from "./FeatureCard";
import FeaturesTable from "./FeaturesTable";
// Styles
import clsx from "clsx";
import styles from "./Features.module.css";
// Data
import { featuresCardImages, featuresCardItems } from "./data";

export default function Features() {
  return (
    <section
      className={styles.features}
      style={{
        backgroundImage: `url(${process.env.ASSET_PREFIX}/assets/img/background_2.jpg)`,
      }}
    >
      <h2 className={clsx(styles.features__title, "title text__white")}>
        ¿Por qué <span className="text__orange">atomic?</span>
      </h2>
      <div className={styles.features__cards}>
        <FeatureCard
          img={featuresCardImages[0]}
          items={featuresCardItems[0]}
          position={1}
        />
        <FeatureCard
          img={featuresCardImages[1]}
          items={featuresCardItems[1]}
          position={2}
        />
        <FeatureCard
          img={featuresCardImages[2]}
          items={featuresCardItems[2]}
          position={3}
        />
      </div>
      <FeaturesTable />
      <div className={styles.features__background} />
      <div className={styles.features__background__secondary} />
    </section>
  );
}
