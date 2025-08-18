import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import PC_1 from "../img/CC_3.png";
import PC_2 from "../img/CC_2.png";
import PC_3 from "../img/CC_1.png";
const content = {
  label: "Care Chakra - Dashboard",
  heading: "Smart Legal Dashboard",
  paragraph: `Leverage AI-driven insights and document management tools to streamline your legal workflow.`,
  buttonText: "Learn More",
  href: "#features",
  image: PC_1,
};

const content2 = {
  label: "Case View",
  heading: "AI-Driven Case Management",
  paragraph: `Get an intelligent summary of case status, key milestones, and critical updates—powered by AI insights.`,
  buttonText: "Learn More",
  href: "#features",
  image: PC_2,
};

const content3 = {
  label: "Appointment ",
  heading: "Virtual Appointments",
  paragraph: `Experience hassle-free virtual visits powered by AI for scheduling, notifications, and patient engagement.`,
  buttonText: "Learn More",
  href: "#features",
  image: PC_3,
};

const Product
= () => {
  const styles = {
    container: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '105px 0px 105px 30px',
      maxWidth: '100rem',
      margin: 'auto',
      flexWrap: 'wrap',
    },
    textContent: {
      flex: '1 1 500px',
      maxWidth: '50%',
      minWidth: 0,
      padding: '0 30px',
    },
    label: {
      display: 'inline-block',
      background: '#ccff00',
      padding: '6px 12px',
      fontSize: '14px',
      borderRadius: '6px',
      color: '#111',
      marginBottom: '20px',
      fontWeight: 600,
    },
    heading: {
      fontSize: '42px',
      fontWeight: 700,
      margin: '20px 0',
      color: '#111',
    },
    paragraph: {
      fontSize: '18px',
      color: '#333',
      marginBottom: '30px',
      lineHeight: 1.6,
    },
    button: {
      display: 'inline-block',
      padding: '14px 24px',
      fontSize: '16px',
      backgroundColor: '#000',
      color: 'white',
      border: 'none',
      borderRadius: '8px',
      cursor: 'pointer',
      userSelect: 'none',
    },
    imageContainer: {
      flex: '1 1 400px',
      textAlign: 'right',
      minWidth: 0,
    },
    imageContainerLeft: {
      flex: '1 1 400px',
      textAlign: 'left',
      minWidth: 0,
    },
    image: {
      maxWidth: '100%',
      height: 'auto',
      borderRadius: '12px',
      boxShadow: '0 8px 24px rgba(0, 0, 0, 0.1)',
    },
  };

  const renderSection = (data, isImageLeft = false) => (
    <div style={styles.container} className="container">
      {isImageLeft && (
        <div style={styles.imageContainerLeft} className="imageContainerLeft">
          <img src={data.image} alt={`${data.label} Image`} style={styles.image} />
        </div>
      )}

      <div style={styles.textContent} className="textContent mt-10" data-aos="fade-right">
        <span style={styles.label}>{data.label}</span>
        <h1 style={styles.heading}>{data.heading}</h1>
        <p style={styles.paragraph}>{data.paragraph}</p>
        <button
          style={styles.button}
          onClick={() => window.location.href = data.href}
          aria-label={data.buttonText}
        >
          {data.buttonText} <span aria-hidden="true">→</span>
        </button>
      </div>

      {!isImageLeft && (
        <div style={styles.imageContainer} className="imageContainer" data-aos="fade-left">
          <img src={data.image} alt={`${data.label} Image`} style={styles.image} />
        </div>
      )}
    </div>
  );

  return (
    <>
      <style>{`
        @media (max-width: 768px) {
          .container {
            flex-direction: column !important;
            padding: 40px 20px !important;
          }
          .textContent, .imageContainer, .imageContainerLeft {
            max-width: 100% !important;
            text-align: center !important;
            flex: none !important;
          }
          .imageContainer {
            margin-top: 30px;
          }
          .imageContainerLeft {
            margin-bottom: 30px;
          }
          h1 {
            font-size: 28px !important;
          }
          p {
            font-size: 16px !important;
          }
        }
      `}</style>

      {/* Section 1: content – text left, image right */}
      {renderSection(content, false)}

      {/* Section 2: content2 – image left, text right */}
      {renderSection(content2, true)}

      {/* Section 3: content – text left, image right again */}
      {renderSection(content3, false)}

      
    </>
  );
};

export default Product;
