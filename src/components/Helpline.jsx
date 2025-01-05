import React, { useState } from 'react';

const Helpline = () => {
  // Contact information for each taluka
  const contactData = {
    dharwad: {
      counselor: {
        name: "Dr. Sugnyani Patil",
        phone: "+91-8310955958",
        email: "manoshanthidharwad@gmail.com",
      },
      police: {
        name: "Dharwad Police Station",
        phone: "+91-8362233512",
      },
    },
    hubli: {
      counselor: {
        name: "Dr. Girish Babu",
        phone: "+91-9448091780",
        email: "hubli@manoshanti.com",
      },
      police: {
        name: "Hubli Police Station",
        phone: "+91-8362233540",
      },
    },
    navalgund: {
      counselor: {
        name: "Dr. Sugnyani Patil",
        phone: "+91-8310955958",
        email: "manoshanthidharwad@gmail.com",
      },
      police: {
        name: "Navalgund Police Station",
        phone: "+91-8380229233",
      },
    },
    kundgol: {
      counselor: {
        name: "Dr. Sugnyani Patil",
        phone: "+91-8310955958",
        email: "manoshanthidharwad@gmail.com",
      },
      police: {
        name: "Kundgol Police Station",
        phone: "+91-8304290343",
      },
    },
    kalghatgi: {
      counselor: {
        name: "Dr. Sugnyani Patil",
        phone: "+91-8310955958",
        email: "manoshanthidharwad@gmail.com",
      },
      police: {
        name: "Kalghatgi Police Station",
        phone: "+91-8370284511",
      },
    },
  };

  const [selectedRegion, setSelectedRegion] = useState('');
  const [contactInfo, setContactInfo] = useState({
    counselor: { name: '', phone: '', email: '' },
    police: { name: '', phone: '' },
  });

  const handleRegionChange = (event) => {
    const region = event.target.value;
    setSelectedRegion(region);

    if (contactData[region]) {
      const { counselor, police } = contactData[region];
      setContactInfo({ counselor, police });
    }
  };

  return (
    <div>
      <header>
        <div className="header">
          <h1>Marriage Counseling</h1>
        </div>
        <div className="pannel">
          <div className="pannel-opt">
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/blogs">Blogs</a>
            <a href="/questionnaire">Self Assessment</a>
            <a href="/helpline" style={{ fontWeight: 'bold' }}>
              Helpline
            </a>
            <a href="/feedback">Feedback</a>
          </div>
        </div>
      </header>

      <main>
        <div className="map-container">
          <div className="dropdown">
            <select
              id="taluka-select"
              className="styled-select"
              value={selectedRegion}
              onChange={handleRegionChange}
            >
              <option value="" disabled>Select your region</option>
              <option value="dharwad">Dharwad</option>
              <option value="hubli">Hubli</option>
              <option value="navalgund">Navalgund</option>
              <option value="kundgol">Kundgol</option>
              <option value="kalghatgi">Kalghatgi</option>
            </select>
          </div>
          <div id="Map">
            <img
              src="/assets/dharwad-taluka-map.jpg"
              alt="Taluka Map"
              id="map-image"
            />
          </div>
          <div id="contact-info" className="contact-container">
            {selectedRegion ? (
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                {/* Counselor Information */}
                <div style={{ flex: 1, marginRight: '10px', textAlign: 'center' }}>
                  <h3>Counselor Information</h3>
                  <p><strong>{contactInfo.counselor.name}</strong></p>
                  <p>Phone: {contactInfo.counselor.phone}</p>
                  <p>Email: {contactInfo.counselor.email}</p>
                  <a
                    href={`tel:${contactInfo.counselor.phone}`}
                    style={{
                      display: 'inline-block',
                      marginTop: '10px',
                      padding: '10px 20px',
                      backgroundColor: '#b45e47',
                      color: 'white',
                      textDecoration: 'none',
                      borderRadius: '5px',
                      fontSize: '16px',
                    }}
                  >
                    Call Counselor
                  </a>
                </div>

                {/* Police Station Information */}
                <div style={{ flex: 1, textAlign: 'center' }}>
                  <h3>Police Station Information</h3>
                  <p><strong>{contactInfo.police.name}</strong></p>
                  <p>Phone: {contactInfo.police.phone}</p>
                  <a
                    href={`tel:${contactInfo.police.phone}`}
                    style={{
                      display: 'inline-block',
                      marginTop: '10px',
                      padding: '10px 20px',
                      backgroundColor: '#b45e47',
                      color: 'white',
                      textDecoration: 'none',
                      borderRadius: '5px',
                      fontSize: '16px',
                    }}
                  >
                    Call Police Station
                  </a>
                </div>
              </div>
            ) : (
              <div>
                <h3>Contact Information</h3>
                <p>Please select a taluka to view contact details.</p>
              </div>
            )}
          </div>
        </div>
      </main>

      <footer>
        <p>&copy; 2024 Marriage Counseling. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Helpline;
