
const CKEditorComp = ({ data, onChange }) => {
    return (
      <div>
        <CKEditor editor={ClassicEditor} data={data} onChange={(event, editor) => onChange(editor.getData())} />
      </div>
    );
  };
  export default CKEditorComp;