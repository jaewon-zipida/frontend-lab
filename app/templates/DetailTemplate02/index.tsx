import React, { useState, useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import styles from "./index.module.scss";

function DetailTemplate02() {
    const Editor = dynamic(() => import("./../../components/Editor"), { ssr: false });
    const [editorLoaded, setEditorLoaded] = useState(false);
    const resultView = useRef(null);
    const onClick = (str) => {
        if (resultView.current) {
            resultView.current.innerHTML = `<h2>html결과 view입니다</h2>${str}`;
        }
    };
    useEffect(() => {
        setEditorLoaded(true);
    }, []);
    return (
        <div className={styles.main}>
            <h1>ckEditor 5</h1>
            <Editor name="description" onClick={onClick} editorLoaded={editorLoaded} />
            <div ref={resultView} />
        </div>
    );
}
export default DetailTemplate02;
