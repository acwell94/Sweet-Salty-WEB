import { Editor } from "@toast-ui/react-editor";
import "@toast-ui/editor/dist/toastui-editor.css";
import colorSyntax from "@toast-ui/editor-plugin-color-syntax";

import { gql, useMutation } from "@apollo/client";

const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file)
  }
`;

export default function WriteToastForEdit(props:any) {
  const [uploadFile] = useMutation(UPLOAD_FILE);
    const onUploadImage = async (blob:any, callback:any) => {
    const url = await uploadFile({
      variables: { file: blob },
    });
    const urldata = url?.data.uploadFile;
    const result = "https://storage.googleapis.com/" + urldata;
    callback(result, "");
  };
  return (
    <>
      {props.updateData&&<Editor
        hooks={{
          addImageBlobHook: onUploadImage,
        }}
        toolbarItems={[
          ["heading", "bold", "italic", "strike"],
          ["hr", "quote"],
          ["ul", "ol"],
          ["table", "image", "link"],
        ]}
        initialEditType="wysiwyg"
        previewStyle="tab"
        plugins={[colorSyntax]}
        initialValue={props.updateData?.boardContents}
        ref={props.editorRef}
      />}
    </>
  );
}
