import styles from "./index.module.scss";
import DaumPostcode from "react-daum-postcode";
import { useEffect, useState } from "react";
import PopupAddress from "/app/components/PopupAddress";

function DetailTemplate04() {
    const [isOpenPopup, setIsOpenPopup] = useState(false);
    const [address, setAddress] = useState("");
    const [zonecode, setZonecode] = useState("");

    const handleComplete = (data: any) => {
        setAddress(data.address);
        setZonecode(data.zonecode);
        setIsOpenPopup(false);
    };

    const handleClosePopup = () => {
        setIsOpenPopup(false);
    };

    useEffect(() => {
        console.log("address : ", address);
        console.log("zonecode : ", zonecode);
    }, [address, zonecode]);

    return (
        <main className={styles.main}>
            <div>
                <input className={styles.address} value={address} readOnly></input>
                <button onClick={() => setIsOpenPopup(true)}>찾기</button>
            </div>
            <div>
                <input className={styles.address}></input>
            </div>

            {isOpenPopup && <PopupAddress onComplate={handleComplete} onClose={handleClosePopup} />}
        </main>
    );
}
export default DetailTemplate04;
