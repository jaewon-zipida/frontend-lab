import styles from "./index.module.scss";
import IconBack from "icons/back.svg";
import Image from "next/image";
import { useRouter } from "next/router";

function BackButton() {
    const router = useRouter();
    const onGoBack = () => {
        router.back();
    };
    return (
        <button className={styles.container} onClick={onGoBack}>
            <Image src={IconBack} alt="뒤로가기 버튼" />
        </button>
    );
}

export default BackButton;
