import React, {useState} from 'react';
import {useMemo} from 'react';
import {useDropzone} from 'react-dropzone';

const baseStyle = {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '20px',
  borderWidth: 2,
  borderRadius: 2,
  borderColor: '#eeeeee',
  borderStyle: 'dashed',
  backgroundColor: '#fafafa',
  color: '#bdbdbd',
  outline: 'none',
  transition: 'border .24s ease-in-out'
};

const activeStyle = {
  borderColor: '#2196f3'
};

const acceptStyle = {
  borderColor: '#00e676'
};

const rejectStyle = {
  borderColor: '#ff1744'
};

function InputFile(props) {
  const [files, setFiles] = useState([]);
  const {onChangeInput} = props;

  const setData = (preview) => {
    console.log(preview);
    onChangeInput(props.name, preview);
  }
  
  const {
    // acceptedFiles,
    fileRejections,
    getRootProps,
    getInputProps, 
    isDragActive,
    isDragAccept,
    isDragReject
  } = useDropzone({
    accept: 'image/jpeg, image/jpg, image/png',
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) => Object.assign(file, {
          preview: URL.createObjectURL(file)
        }))
      );
      setData(acceptedFiles.map(file => file.preview))
    }
  });

  const style = useMemo(() => ({
    ...baseStyle,
    ...(isDragActive ? activeStyle : {}),
    ...(isDragAccept ? acceptStyle : {}),
    ...(isDragReject ? rejectStyle : {})
  }), [
    isDragActive,
    isDragReject,
    isDragAccept
  ]);

  // const acceptedFileItems = acceptedFiles.map(file => (
  //   <li key={file.path}>
  //       {file.path} - {file.size} bytes
  //   </li>
  // ));

  const fileRejectionItems = fileRejections.map(({ file, errors }) => (
    <div key={file.path}>
        Failed to upload file {file.path} - 
          {errors.map(e => (
              <span key={e.code}> {e.message}</span>
          ))}
    </div>
  ));

  return (
    <div className="input-file-form form-group" style={{width: props.width}}>
      <label className="text-dark">{props.label}</label>
      <div {...getRootProps({style})} className="text-center">
          <input {...getInputProps()} />
          <p>Seret dan jatuhkan gambar ke sini, atau klik untuk memilih gambar</p>
          <em>(Format gambar harus *.jpg, *.jpeg, *.png)</em>
      </div>
      <aside className="mt-4">
        { props.image !== "" ?
          <div className="form-group" >
            <label className="text-dark">Preview</label>
            <img src={props.image} alt="Tanda Tangan" width="300px" />
          </div>
          : null
        }
          <p>{fileRejectionItems}</p>
      </aside>
    </div>
  );
}

export default InputFile;