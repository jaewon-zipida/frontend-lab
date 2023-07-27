import { useEffect, useState } from "react";
import DaumPostcode from "react-daum-postcode";
import styles from "./index.module.scss";

interface PopupAddressProps {
    onComplate: (data: any) => void;
    onClose: () => void;
}

function PopupAddress({ onComplate, onClose }: PopupAddressProps) {
    return (
        <div className={styles.main}>
            <div className={styles.closeWrap}>
                <button onClick={onClose}>닫기</button>
            </div>
            <DaumPostcode onComplete={onComplate} />
        </div>
    );
}

export default PopupAddress;
