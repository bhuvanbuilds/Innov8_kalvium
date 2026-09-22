import type { ButtonHTMLAttributes } from "react";
import styles from "../styles/GetOfferButton.module.css";

export interface GetOfferButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
  topLabel?: string;
  bottomLabel?: string;
}



export function GetOfferButton({
  label = "More",
  topLabel = "Coming Soon",
  bottomLabel = "8 days...",
  className,
  ...buttonProps
}: GetOfferButtonProps) {
  return (
    <div className={`${styles.container} ${className ?? ""}`}>
      <div className={`${styles.drawer} ${styles.top}`}>{topLabel}</div>
      <div className={`${styles.drawer} ${styles.bottom}`}>{bottomLabel}</div>

      <button className={styles.button} type="button" {...buttonProps}>
        <span className={styles.text}>{label}</span>
      </button>

    </div>
  );
}

export default GetOfferButton;
