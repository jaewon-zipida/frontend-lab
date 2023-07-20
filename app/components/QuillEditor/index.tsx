import { useMemo, useRef } from "react";
import "react-quill/dist/quill.snow.css"; // Quill 스타일시트
import styles from "./index.module.scss";
import ReactQuill from "react-quill";

type QuillProps = {
    value: string;
    onChange: (value: string) => void;
};

function QuillEditor({ value, onChange }: QuillProps) {
    const quillRef = useRef<any>(null);
    const imageHandler = () => {
        const input = document.createElement("input");
        input.setAttribute("type", "file");
        input.setAttribute("accept", "image/*");
        input.click();

        input.addEventListener("change", async () => {
            console.log("여기여기");
            if (input.files) {
                const file = input.files[0];
                console.log("file : ", file);
            }

            //
            //   try {
            //     const res = await imageApi({ img: file });
            //     const imgUrl = res.data.imgUrl;
            //     const editor = quillRef.current.getEditor();
            //     const range = editor.getSelection();
            //     editor.insertEmbed(range.index, 'image', imgUrl);
            //     editor.setSelection(range.index + 1);
            //   } catch (error) {
            //     console.log(error);
            //   }
        });
    };
    const modules = useMemo(
        () => ({
            toolbar: {
                container: [
                    [{ header: "1" }, { header: "2" }, { font: [] }],
                    ["bold", "italic", "underline", "strike", "blockquote"],
                    ["image"],
                ],
                handlers: { image: imageHandler },
            },
            clipboard: {
                matchVisual: false, // ??
            },
        }),
        []
    );

    const formats = [
        "header",
        "font",
        "size",
        "bold",
        "italic",
        "underline",
        "strike",
        "blockquote",
    ];

    return (
        <ReactQuill
            ref={quillRef}
            onChange={onChange}
            className={styles.quill}
            modules={modules}
            formats={formats}
            value={value}
            placeholder={"후원받고자 하는 동물의 자세한 정보를 입력해주세요!"}
            theme="snow" // 테마 선택 (snow, bubble 중 선택)
        />
    );
}

export default QuillEditor;
