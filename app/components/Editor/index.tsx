import { useEffect, useRef, useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "ckeditor5-custom-build/build/ckeditor";

const Editor = ({ onClick, editorLoaded, name, value }: any) => {
    const [test, setTest] = useState("");
    const editorRef = useRef(null);

    // 어댑터 정의 함수 : 서버와의 통신을 처리하는 역할
    const customUploadAdapter = (loader) => {
        // (2)
        return {
            upload() {
                return new Promise((resolve, reject) => {
                    // const data = new FormData();
                    loader.file.then((file) => {
                        console.log("file : ", file);
                        // data.append("name", file.name);
                        // data.append("file", file);

                        // axios.post('/api/upload', data)
                        //     .then((res) => {
                        //         if(!flag){
                        //             setFlag(true);
                        //             setImage(res.data.filename);
                        //         }
                        //         resolve({
                        //             default: `${imgLink}/${res.data.filename}`
                        //         });
                        //     })
                        //     .catch((err)=>reject(err));
                    });
                });
            },
        };
    };

    function uploadPlugin(editor) {
        // (3)
        editor.plugins.get("FileRepository").createUploadAdapter = (loader) => {
            return customUploadAdapter(loader);
        };
    }

    return (
        <div>
            {editorLoaded ? (
                <CKEditor
                    type=""
                    name={name}
                    editor={ClassicEditor}
                    data={value}
                    // 에디터 데이터가 변경되었을 때
                    onChange={(event, editor) => {
                        const data = editor.getData();
                        setTest(data);
                    }}
                    config={{
                        // (4)
                        extraPlugins: [uploadPlugin],
                    }}
                />
            ) : (
                <div>Editor loading</div>
            )}
            <button onClick={() => onClick(test)}>전송</button>
        </div>
    );
};
export default Editor;
