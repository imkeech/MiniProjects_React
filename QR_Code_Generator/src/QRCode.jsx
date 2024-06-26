import { useState } from "react"

export const QRCode = () => {
    const [img, setImg] = useState("");
    const [loading, setLoading] = useState(false);
    const [qrData, setQrData] = useState("");
    const [qrSize, setQrSize] = useState("");

    async function generateQR(){
        setLoading(true);
        try{
            const url = `https://api.qrserver.com/v1/create-qr-code/?size=
            ${qrSize}x${qrSize}&data=${encodeURIComponent(qrData)}`;
            setImg(url);
        }catch(error){
            console.error("Error generating QR Code", error);
        }finally{
            setLoading(false);
        }
    }
    function downloadQR(){
        fetch(img)
            .then((response) => response.blob())
            .then ((blob) =>{
                const link = document.createElement("a");
                link.href = URL.createObjectURL(blob);
                link.download = "qrcode.png";
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            }).catch((error) => {
                console.log("Error")
            });
    }
  return (
    <div className="container">
        <h1>QR Code Generator</h1>
        {loading && <p>Please Wait...</p>}
        {img &&  <img src={img} className="QRimage" alt="dummyQrImage" />}

        <label className="labell" htmlFor="qrvalue">Data for QR Code</label>
        
        <input type="text" id='qrvalue' value={qrData}
        onChange={(e) => setQrData(e.target.value)} 
        placeholder='Enter your data' /> 

        <label className="labell" htmlFor="qrsize">Size of the QR Code</label>

        <input type="text" value={qrSize}  
        onChange={(e) => setQrSize(e.target.value)} 
         id='qrsize' placeholder='Eg: 150' />

        <div>
        <button  className="Generate" disabled={loading} onClick={generateQR}>Generate</button>
        <button  className="Download" onClick={downloadQR}>Download</button>
        </div>
    </div>
  )
}
