import clsx from "clsx";
import styles from "./FeatureCard.module.css";

export default function FeatureCard({
  img = `${process.env.ASSET_PREFIX}/assets/img/feature_1.png`,
  items = ["item1", "item2"],
  position = 0,
}) {
  return (
    <div className={styles.card}>
      <div
        className={clsx(
          styles.card__image,
          position === 1 && styles.card__image__1
        )}
        style={{ backgroundImage: `url(${process.env.ASSET_PREFIX}${img})` }}
      />
      <ul className={styles.card__list}>
        {items.map((item, index) => (
          <li key={`${item}-${index}`} className={styles.card__list__item}>
            <img
              alt="Marca de verificación"
              src={`${process.env.ASSET_PREFIX}/assets/img/ic_check_tiny.png`}
              className={styles.card__list__image}
            />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
