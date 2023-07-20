import { LibraryCardProps } from "../../constants/types/library";
import styles from "./index.module.scss";

function Card({ number, title, onMoveDetail }: LibraryCardProps) {
    return (
        <div className={styles.container} onClick={() => onMoveDetail(number)}>
            {number} {title}
        </div>
    );
}

export default Card;
