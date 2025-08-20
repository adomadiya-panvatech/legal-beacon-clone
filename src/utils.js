
import Swal from 'sweetalert2';
import axios from 'axios';

export const scrollToSection = (id, eve) => {
  const section = document.getElementById(id);
  if (section) {
    // section.scrollIntoView({ behavior: 'smooth' });
    const offset = section.getBoundingClientRect().top - 50;
    window.scrollBy({
      top: offset,
      behavior: 'smooth'
    });
  }
};


export const sendToTeams = async (message, setVal) => {

  let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: 'https://stage.panvatech.com/send_to_teams',
    headers: { 
      'Content-Type': 'application/json'
    },
    data : message
  };

  try {
    const response = await axios.request(config);

    if (response.status === 200) {
      Swal.fire({
        icon: "success",
        title: "Thank you for reaching out!",
        text: "Your request has been successfully submitted. Our team will review it and get back to you as soon as possible.\n\nWe appreciate your interest and look forward to assisting you!",
        confirmButtonColor: '#3085d6',
        customClass: {
          title: 'swal-title',
          content: 'swal-content'
        }
      });

      // Reset the form fields after successful submission
      setVal({
        name: "",
        email: "",
        subject: "",
        message: "",
        phoneNo: "",
      });
    } else {
      console.log("Failed to send message:", response.statusText);
      Swal.fire({
        icon: "error",
        title: "Oops!",
        text: "There was an error while submitting your request. Please try again later.",
        confirmButtonColor: "#d33",
      });
    }
  } catch (error) {
    console.log("Error sending message to Teams:", error);
    Swal.fire({
      icon: "error",
      title: "Oops!",
      text: "There was an error while submitting your request. Please try again later.",
      confirmButtonColor: "#d33",
    });
  }
};


// export const sendToTeams = async (message, setVal) => {
//   const payload = message;

//   try {
//     const response = await fetch('http://localhost:3000/sendToTeams', {  // Change this to your backend URL in production
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(payload),
//     });

//     if (response.ok) {
//       Swal.fire({
//         icon: "success",
//         title: "Thank you for reaching out!",
//         text: "Your request has been successfully submitted. Our team will review it and get back to you as soon as possible.\n\nWe appreciate your interest and look forward to assisting you!",
//         confirmButtonColor: '#3085d6',
//         customClass: {
//           title: 'swal-title',
//           content: 'swal-content'
//         }
//       });

//       // Reset the form fields after successful submission
//       setVal({
//         name: "",
//         email: "",
//         subject: "",
//         message: "",
//         phoneNo: "",
//       });

//     } else {
//       console.log("Failed to send message:", response.statusText);
//       Swal.fire({
//         icon: "error",
//         title: "Oops!",
//         text: "There was an error while submitting your request. Please try again later.",
//         confirmButtonColor: "#d33",
//       });
//     }
//   } catch (error) {
//     console.log("Error sending message to Teams:", error);
//     Swal.fire({
//       icon: "error",
//       title: "Oops!",
//       text: "There was an error while submitting your request. Please try again later.",
//       confirmButtonColor: "#d33",
//     });
//   }
// };


