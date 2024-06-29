import { ref, getDownloadURL } from "firebase/storage";
import { storage } from "../firebaseConfig";
// eslint-disable-next-line react/prop-types
const FileDownload = () => {
  
  const downloadFile = async () => {
    try {
      // Reference to the PDF file in Firebase Storage
      const pdfRef = ref(storage, "gs://juwelrana-7ec61.appspot.com/cvv/juwel Rana's cv.pdf");
      
      // Get the download URL
      const url = await getDownloadURL(pdfRef);
      
      // Create a temporary anchor element
      const a = document.createElement('a');
      a.href = url;
      a.download = 'juwel_ranaCV.pdf'; // Specify the file name
      document.body.appendChild(a);
      a.click();
      
      // Remove the anchor element
      document.body.removeChild(a);
    } catch (error) {
      console.error('Error downloading the file:', error);
    }
  };

    return (
      <button onClick={downloadFile}>
         Download file
      </button>
    );
  };

export default FileDownload