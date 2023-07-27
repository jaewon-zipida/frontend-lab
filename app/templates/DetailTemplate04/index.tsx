import styles from "./index.module.scss";
import DaumPostcode from "react-daum-postcode";
import { useEffect, useState } from "react";

function DetailTemplate04() {
    const [address, setAddress] = useState("");
    const [zonecode, setZonecode] = useState("");
    const handleComplete = (data: any) => {
        setAddress(data.address);
        setZonecode(data.zonecode);
    };

    useEffect(() => {
        console.log("address : ", address);
        console.log("zonecode : ", zonecode);
    }, [address, zonecode]);

    return (
        <div>
            <DaumPostcode onComplete={handleComplete} />
        </div>
    );
}
export default DetailTemplate04;
