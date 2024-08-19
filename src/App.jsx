import React, { useState } from 'react';

const App = () => {
  const [img, setImg] = useState("images/Qrc.png");
  const [loading, setLoading] = useState(false);
  const [qrData, setQrData] = useState("");
  const [qrSize, setQrSize] = useState("");

  async function generateqr() {
    setLoading(true);
    try {
      const url = `https://api.qrserver.com/v1/create-qr-code/?size=${qrSize}x${qrSize}&data=${encodeURIComponent(qrData)}`;
      setImg(url);
    } catch (error) {
      console.error("Error in QR generation:", error);
    } finally {
      setLoading(false);
    }
  }

  function downloadqr() {
    fetch(img)
      .then((response) => response.blob())
      .then((blob) => {
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = 'qr.png';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }).catch((error) => {
        console.error("Error downloading QR Code:", error);
      });
  }

  return (
    <div className='Qr-container'>
      <h1>QR CODE GENERATOR</h1>
      {loading && <p>Please wait...</p>}

      {img && !loading && <img src={img} alt="QR Code" className='qr-code-image' />}
      <div className='field'>
        <label htmlFor="dataInput" className='input-label'>QR Data</label>
        <input
          type="text"
          value={qrData}
          onChange={(e) => setQrData(e.target.value)}
          id="dataInput"
          placeholder='Enter the QR code data'
        />
        <label htmlFor="sizeInput" className='input-label'>Image size (e.g., 150px)</label>
        <input
          type="text"
          id="sizeInput"
          value={qrSize}
          onChange={(e) => setQrSize(e.target.value)}
          placeholder='Enter QR size'
        />
        <button className='g-btn' onClick={generateqr} disabled={loading}>Generate QR Code</button>
        <button className='d-btn' onClick={downloadqr}>Download QR Code</button>
      </div>
    </div>
  );
}

export default App;
