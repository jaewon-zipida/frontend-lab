import dynamic from "next/dynamic"; // dynamic import를 하게 되면 react-quill 모듈을 서버 측에 포함시키지 않고, 런타임시에 import하게 해준다.
const QuillEditor = dynamic(() => import("@/components/QuillEditor"), { ssr: false });
import { useEffect, useState } from "react";
import styles from "./index.module.scss";

function DetailTemplate01() {
    const [content, setContent] = useState("");

    const handleChange = (value: string) => {
        setContent(value);
    };

    return (
        <div>
            <QuillEditor value={content} onChange={handleChange} />
            <p>레퍼런스</p>
            <p>
                https://velog.io/@runprogrmm/Next.js-React-react-quill-%EC%97%90%EB%94%94%ED%84%B0%EB%A1%9C-%EC%9D%B4%EB%AF%B8%EC%A7%80-%EC%B2%98%EB%A6%AC%ED%95%98%EA%B8%B0
            </p>
        </div>
    );
}
export default DetailTemplate01;
