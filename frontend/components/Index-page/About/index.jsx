// Components
import InfoCard from "./InfoCard";
// Styles
import styles from "./About.module.css";
// Data
import { featuredWords, listItems } from "./data";

export default function About() {
  return (
    <section
      className={styles.about}
      id="about"
      style={{
        backgroundImage: `url(${process.env.ASSET_PREFIX}/assets/img/background_2.jpg)`,
      }}
    >
      <h2 className={"title text__white"}>Somos el brazo derecho</h2>
      <h2 className={"title text__orange"}>De la tecnología</h2>
      <div className={styles.about__cards}>
        <InfoCard
          img={`${process.env.ASSET_PREFIX}/assets/img/explore.png`}
          title="Explora"
          items={listItems[0]}
          featuredWords={featuredWords[0]}
        />
        <InfoCard
          img={`${process.env.ASSET_PREFIX}/assets/img/imagine.png`}
          title="Imagina"
          items={listItems[1]}
          featuredWords={featuredWords[1]}
          featured
        />
        <InfoCard
          img={`${process.env.ASSET_PREFIX}/assets/img/conquer.png`}
          title="Conquista"
          items={listItems[2]}
          featuredWords={featuredWords[2]}
        />
      </div>
    </section>
  );
}
