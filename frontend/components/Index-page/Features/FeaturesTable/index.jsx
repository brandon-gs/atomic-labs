// Styles
import clsx from "clsx";
import styles from "./FeaturesTable.module.css";
// Data
import { rows } from "./data";

export default function FeaturesTable() {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th
            className={clsx(styles.column__title, styles.column__title__left)}
          >
            características
          </th>
          <th className={styles.column__title}>otros</th>
          <th
            className={clsx(
              styles.column__title,
              styles.column__title__featured
            )}
          >
            atomic
          </th>
        </tr>
      </thead>
      <tbody>
        {rows.map((columns, indexRow) => {
          return (
            <tr key={`row-${indexRow}`}>
              {columns.map((column, indexColumn) => {
                // Select classes
                const putImage = column === true;
                const isLastColumn = indexColumn === columns.length - 1;
                const isLastRow = indexRow === rows.length - 1;
                const classTd = clsx(
                  styles.column__element,
                  styles.column__element__centered,
                  isLastColumn && styles.column__element__last,
                  isLastRow && styles.row__element__last
                );

                if (putImage) {
                  return (
                    <td
                      key={`row-${indexRow}-column-${indexColumn}`}
                      className={classTd}
                    >
                      <img
                        alt="Marca de verificación"
                        src="/assets/img/ic_check_tiny.png"
                      />
                    </td>
                  );
                }
                const classTdText = clsx(
                  styles.column__element,
                  isLastRow && styles.row__element__last
                );
                return (
                  <td
                    key={`item-row-${indexRow}-${indexColumn}`}
                    className={classTdText}
                  >
                    {column}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
