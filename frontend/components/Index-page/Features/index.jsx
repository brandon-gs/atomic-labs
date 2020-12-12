// Styles
import FeatureCard from "./FeatureCard";
import styles from "./Features.module.css";
// Data
import { featuresCardImages, featuresCardItems } from "./data";
import FeaturesTable from "./FeaturesTable";

export default function Features() {
  return (
    <section className={styles.features}>
      <h2 className="title text__white">
        ¿Por qué <span className="text__orange">atomic?</span>
      </h2>
      <div className={styles.features__cards}>
        <FeatureCard img={featuresCardImages[0]} items={featuresCardItems[0]} />
        <FeatureCard img={featuresCardImages[1]} items={featuresCardItems[1]} />
        <FeatureCard img={featuresCardImages[2]} items={featuresCardItems[2]} />
      </div>
      <FeaturesTable />
    </section>
  );
}
