import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function AccountCertificates(){

  const [certifications, setCertifications] = useState({});
  const [selectedCert, setSelectedCert] = useState(null);

  useEffect(() => {
    const stored =
      JSON.parse(localStorage.getItem("certifications")) || {};
    setCertifications(stored);
  }, []);

  const confirmRemove = () => {

    if (!selectedCert) return;

    const updated = { ...certifications };
    delete updated[selectedCert];

    localStorage.setItem(
      "certifications",
      JSON.stringify(updated)
    );

    setCertifications(updated);
    setSelectedCert(null);
  };

  const certList = Object.keys(certifications);

  if(certList.length === 0){
    return(
      <div className="account-section">
        <h2>Certificates</h2>
        <p>You haven't earned any certifications yet.</p>
      </div>
    );
  }

  return(

    <div className="account-section">

      <h2>Your Certifications</h2>

      <div className="cert-grid">

        {certList.map((cert)=>{

          const data = certifications[cert];

          return(

            <div className="cert-card" key={cert}>

              <div className="cert-left">
                <h3>{cert.toUpperCase()} Certification</h3>
                <p>Score: {data.score}/{data.total}</p>
                <p>Issued: {data.issued}</p>
                <p className="cert-id">Certificate ID: {data.certId}</p>
              </div>

              <div className="cert-right" style={{display:"flex", gap:"10px"}}>

                <Link
                  to={`/certificate/${cert}`}
                  className="view-cert-btn"
                >
                  View Certificate
                </Link>

                <button
                  className="deregister-btn"
                  onClick={() => setSelectedCert(cert)}
                >
                  Remove
                </button>

              </div>

            </div>

          );

        })}

      </div>

      {selectedCert && (
        <div className="modal-overlay">

          <div className="modal-box">

            <h3>Remove Certificate?</h3>
            <p>This action cannot be undone.</p>

            <div className="modal-actions">

              <button
                className="cancel-btn"
                onClick={() => setSelectedCert(null)}
              >
                Cancel
              </button>

              <button
                className="confirm-btn"
                onClick={confirmRemove}
              >
                Delete
              </button>

            </div>

          </div>

        </div>
      )}

    </div>

  );
}