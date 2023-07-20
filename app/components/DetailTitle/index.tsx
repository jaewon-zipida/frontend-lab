import { LibraryTitleProps } from "@/constants/types/library";
import styles from "./index.module.scss";
import BackButton from "../BackButton";

function DetailTitle({ number, children }: LibraryTitleProps) {
    return (
        <div className={styles.container}>
            <BackButton />
            {number} {children}
        </div>
    );
}

export default DetailTitle;
