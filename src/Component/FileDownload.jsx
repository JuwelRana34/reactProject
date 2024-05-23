
// eslint-disable-next-line react/prop-types
const FileDownload = ({ fileName, fileUrl }) => {
    const handleDownload = () => {
      const link = document.createElement('a');
      link.href = fileUrl;
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    };
  
    return (
      <button onClick={handleDownload}>
         {fileName}
      </button>
    );
  };
export default FileDownload