import clsx from "clsx";
import styles from "./InfoCard.module.css";

export default function InfoCard({
  img = "/assets/img/imagine.png",
  title = "Card title",
  items = ["test 1", "test 2", "test 3"],
  featuredWords = ["test 1"],
  featured = false,
  position = 0,
}) {
  const highlightWord = (word, idx) => {
    /*
      This function receives a word which searches the arrangement of highlighted words, 
      in case of finding it returns a span with the word, otherwise returns the word
    */
    if (featuredWords.includes(word)) {
      return (
        <span key={`${word}-${idx}`} className={styles.text__featured}>
          {`${word} `}
        </span>
      );
    }
    return word + " ";
  };

  const featuredClass = (featuredClass, normalClasss) =>
    featured ? featuredClass : normalClasss;

  // Dinamic Styles if card is marked as featured
  const cardClass = featuredClass(
    clsx(styles.card, styles.featured),
    clsx(
      styles.card,
      position === 1 && styles.card__1,
      position === 3 && styles.card__3
    )
  );
  const titleClass = featuredClass("text__white", "text__orange");
  const listClass = featuredClass("text__white", "text__blue__dark");
  const separatorClass = featuredClass(
    clsx(styles.card__separator, styles.card__separator__featured),
    styles.card__separator
  );
  const imageClass = featuredClass(
    styles.card__image__featured,
    position === 1 && styles.card__image__1,
    position === 3 && styles.card__image__3
  );

  return (
    <div className={clsx(cardClass)}>
      <img className={imageClass} src={img} alt={title} />
      <div className={separatorClass} />
      <h3 className={clsx(titleClass, styles.card__title)}>{title}</h3>
      <ul className={clsx(styles.card__list, listClass)}>
        {items.map((item, idx) => (
          <li className={styles.card__list__item} key={`item-${idx}`}>
            {item.split(" ").map(highlightWord)}
          </li>
        ))}
      </ul>
    </div>
  );
}
