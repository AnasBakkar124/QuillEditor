import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const Editor = ({ onSave }) => {
  const [editorHtml, setEditorHtml] = useState('');

  const modules = {
    toolbar: [
      [{ 'header': '1' }, { 'header': '2' }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      ['link', 'image'],
      [{ 'align': [] }],
      ['clean'],
      ['code-block'],
    ],
  };

  return (
    <div className="text-editor">
      <ReactQuill
        value={editorHtml}
        onChange={setEditorHtml}
        modules={modules}
        placeholder="Write your article here..."
      />
      <button onClick={() => onSave(editorHtml)}>Save</button>
    </div>
  );
};

export default Editor;
