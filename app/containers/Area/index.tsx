import { ContainerProps } from "@/constants/types/container";
import styles from "./index.module.scss";

function Area({ children }: ContainerProps) {
    return <div className={styles.container}>{children}</div>;
}
export default Area;
