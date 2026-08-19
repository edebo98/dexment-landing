import { cn } from "@/lib/utils";
import styles from "@/app/page.module.css";

export function SiteFooter() {
  return (
    <footer>
      <div className={cn(styles.wrap, styles.foot)}>
        <div>
          <div className={styles.brand}>
            <img
              src="/images/dexment-mark-nav.png"
              alt=""
              width={180}
              height={179}
              className={styles.footMark}
            />
            <span className={cn(styles.logo, styles.wordmark)}>
              DEX<span>MENT</span>
            </span>
          </div>
          <small>Plan. Track. Deliver.</small>
        </div>
        <div className={styles.footLinks}>
          <small>&copy; 2026 Dexment. All rights reserved.</small>
          <a href="/privacy">
            <small>Privacy Policy</small>
          </a>
        </div>
      </div>
    </footer>
  );
}
