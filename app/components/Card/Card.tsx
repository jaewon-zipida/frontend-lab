import { LibraryCardProps } from "../../constants/types/library";
import styles from "./styles.module.scss";

function Card({ title, content, like }: LibraryCardProps) {
    return (
        <div className={styles.container}>
            <p>title : {title}</p>
            <p>content : {content}</p>
            <p>like : {like}</p>
        </div>
    );
}

export default Card;
