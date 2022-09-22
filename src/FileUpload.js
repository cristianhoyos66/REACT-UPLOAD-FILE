import axios from "axios";
export default function FileUpload() {
  let files;

  const saveFile = (e) => {
    console.log('saveFile')
    files = e.target.files;
    console.log(files)
  };

  const uploadFile = async (e) => {
    console.log('uploadFilee')
    const formData = new FormData();
    for (let i = 0; i < files.length; i++) {
      formData.append(`file[${i}]`, files[i])
    }
    formData.append('caseId', 1)
    formData.append('fileTypeId', 1)
    try {
      const res = await axios.post("http://localhost:8000/api/files", formData);
      console.log(res);
    } catch (ex) {
      console.log(ex);
    }
  };

  return (
    <div className="App">
      <div className="App">
        <a href="http://localhost:8000/files/1663805107880_0.1921973344284318_test.pdf" download="3.Primer Seguimiento.docx" target="_blank" rel="noreferrer">Save "Bad Romance" to your computer</a>
        <input type="file" onChange={saveFile} multiple />
        <button onClick={uploadFile}>Upload</button>
      </div>
    </div>
  );
}