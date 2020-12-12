import styles from "./FeatureCard.module.css";

export default function FeatureCard({
  img = "/assets/img/feature_1.png",
  items = ["item1", "item2"],
}) {
  return (
    <div className={styles.card}>
      <div
        className={styles.card__image}
        style={{ backgroundImage: `url(${img})` }}
      />
      <ul className={styles.card__list}>
        {items.map((item, index) => (
          <li key={`${item}-${index}`} className={styles.card__list__item}>
            <img
              alt="Marca de verificación"
              src="/assets/img/ic_check_tiny.png"
              className={styles.card__list__image}
            />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
