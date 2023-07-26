import { useMemo, useRef, useState } from "react";
import "/react-quill/dist/quill.snow.css"; // Quill 스타일시트
import ReactQuill from "react-quill";
import classNames from "classnames";

type QuillProps = {
    value: string;
    onChange: (value: string) => void;
};

function QuillEditor({ value, onChange }: QuillProps) {
    const quillRef = useRef<any>(null);
    const [selectedColor, setSelectedColor] = useState<string>("");

    const handleColorChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedValue = event.target.value;
        console.log("selectedValue : ", selectedValue);
        setSelectedColor(event.target.value);
    };
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
                container: "#toolbar",
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
        <div>
            <CustomToolbar handleColorChange={handleColorChange} selectedColor={selectedColor} />

            <ReactQuill
                ref={quillRef}
                onChange={onChange}
                // className={styles.quill}
                modules={modules}
                formats={formats}
                value={value}
                placeholder={"후원받고자 하는 동물의 자세한 정보를 입력해주세요!"}
                theme="snow" // 테마 선택 (snow, bubble 중 선택)
            />
        </div>
    );
}

const CustomToolbar = ({
    handleColorChange,
    selectedColor,
}: {
    handleColorChange: Function;
    selectedColor: string;
}) => (
    <div id="toolbar">
        <select className="ql-header">
            <option value="1"></option>
            <option value="2"></option>
            <option value="3"></option>
        </select>
        <button className="ql-bold"></button>
        <button className="ql-italic"></button>
        <select className="ql-color" onClick={() => console.log("되냐고")}>
            <option value="red">1</option>
            <option value="green">2</option>
            <option value="blue">3</option>
        </select>
        <select className="ql-color" onChange={(e) => handleColorChange(e)} value={selectedColor}>
            <option value="red"></option>
            <option value="green"></option>
            <option value="blue"></option>
            <option value="orange"></option>
            <option value="violet"></option>
            <option value="#d0d1d2"></option>
            <option selected></option>
        </select>
        <select className="ql-background"></select>
        <button className="ql-link"></button>
        <button className="ql-image"></button>
    </div>
);

export default QuillEditor;
