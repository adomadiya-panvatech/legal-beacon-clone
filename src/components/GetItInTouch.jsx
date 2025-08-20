import React, { useState } from 'react';
import "../assets/css/getItInTouch.css";
import { IoCall } from 'react-icons/io5';
import { MdLocationOn, MdMarkEmailRead } from 'react-icons/md';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { NavLink } from 'react-router-dom';
import { cloneDeep } from 'lodash';
import Loader from '../extra/Loader';
import axios from 'axios';
import { formatDate } from '../extra/utils';
import Swal from 'sweetalert2';
import MaskedInputs from '../extra/MaskedInputs';
import ReCAPTCHA from 'react-google-recaptcha';
import logo from "../assets/images/healthcoder_logo_final.png";
import { sendToTeams } from '../utils';

const GetItInTouch = () => {

  const [val, setVal] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    phoneNo: "",
  });

  const [regex, setRegex] = useState({
    name: /^[a-zA-Z]+(?:[-' ]?[a-zA-Z]+)*$/,
    email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    subject: /.+/,
    message: /.+/,
    phoneNo: /^\(\+1\) \d{3} \d{3} \d{4}$/,
  });

  const [err, setErr] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    phoneNo: "",
    captcha: ""
  });

  const [isVerified, setIsVerified] = useState(false);
  const [formLoader, setFormLoader] = useState(false);

  const handleLiveValidation = (name, value) => {
    let errors = { ...err };
    switch (name) {
      case "email":
        errors.email = regex.email.test(value) ? "" : "Please enter a valid Email.";
        break;
      case "phoneNo":
        errors.phoneNo = regex.phoneNo.test(value) ? "" : "Please enter a valid Phone Number.";
        break;
      default:
        break;
    }
    setErr(errors);
  };

  const handleChange = (eve) => {
    const { name, value } = eve?.target;
    setVal({ ...val, [name]: value });

    // Apply live validation for email and phoneNo fields
    handleLiveValidation(name, value);
  };

  const handleSubmit = async (eve) => {
    eve?.preventDefault();
    let errors = { ...err };
  
    const validateField = (value, regex, errorMessage) => {
      return regex?.test(value) ? "" : errorMessage;
    };
  
    errors.name = validateField(val?.name, regex?.name, "Please enter a valid Name.");
    errors.email = validateField(val?.email, regex?.email, "Please enter a valid Email.");
    errors.subject = validateField(val?.subject, regex?.subject, "Please enter a valid Subject.");
    errors.message = validateField(val?.message, regex?.message, "Please enter a valid Message.");
    errors.phoneNo = validateField(val?.phoneNo, regex?.phoneNo, "Please enter a valid Phone Number.");
    errors.captcha = isVerified ? "" : "Please Fill Captcha.";
    const hasErrors = Object.values(errors).some(error => error !== "");
  
    if (!hasErrors) {
      console.log(val);
  
      const message = {
        type: "message",
        attachments: [
          {
            contentType: "application/vnd.microsoft.card.adaptive",
            content: {
              type: "AdaptiveCard",
              body: [
                {
                  type: "TextBlock",
                  text: "New Form Submission",
                  weight: "bolder",
                  size: "large",
                  color: "accent",
                  wrap: true,
                  separator: true
                },
                {
                  type: "ColumnSet",
                  columns: [
                    {
                      type: "Column",
                      width: "auto",
                      items: [
                        {
                          type: "TextBlock",
                          text: "Name:",
                          weight: "bolder",
                          wrap: true,
                          color: "good"
                        },
                        {
                          type: "TextBlock",
                          text: "Email:",
                          weight: "bolder",
                          wrap: true
                        },
                        {
                          type: "TextBlock",
                          text: "Subject:",
                          weight: "bolder",
                          wrap: true
                        },
                        {
                          type: "TextBlock",
                          text: "Phone:",
                          weight: "bolder",
                          wrap: true,
                          spacing: "medium"
                        },
                        {
                          type: "TextBlock",
                          text: "Message:",
                          weight: "bolder",
                          wrap: true,
                          color: "attention",
                          spacing: "medium"
                        }
                      ]
                    },
                    {
                      type: "Column",
                      width: "stretch",
                      items: [
                        {
                          type: "TextBlock",
                          text: val.name,
                          wrap: true
                        },
                        {
                          type: "TextBlock",
                          text: val.email,
                          wrap: true
                        },
                        {
                          type: "TextBlock",
                          text: val.subject,
                          wrap: true
                        },
                        {
                          type: "TextBlock",
                          text: val.phoneNo,
                          wrap: true,
                          spacing: "medium"
                        },
                        {
                          type: "TextBlock",
                          text: val.message,
                          wrap: true,
                          maxLines: 15,
                          color: "default",
                          spacing: "medium",
                          separator: true
                        }
                      ]
                    }
                  ]
                },
                {
                  type: "TextBlock",
                  text: "Thank you for your submission!",
                  weight: "lighter",
                  size: "small",
                  wrap: true,
                  separator: true
                }
              ]
            }
          }
        ]
      };
  
      // Send to Teams and reset form values after success
      await sendToTeams(message, setVal);
    } else {
      setFormLoader(false);  // Hide the loader in case there are errors
    }
  
    setErr(errors);
  };
 
  const handleRecaptchaVerify = () => {
    setIsVerified(true);
  };

  const handleRecaptchaExpire = () => {
    setIsVerified(false);
  };

  return (
    <section id='getInTouch'>
      <div className='getItInTouch pb-5'>
        <div className="sec-title text-center panva pt-2"><h3 className="fw-bolder container text-center pb-3 mt-5">REQUEST A DEMO </h3></div>
        <div className='px-4'>
          <div className="container bg-white getTouch d-lg-flex mb-5">
            <div className="col-lg-4 contactDetails p-2 py-1">
              <div className="footer_logo position-relative">
                <img src={logo} alt="" className='w-100 footer_logo object-fit-contain p-footer-logo' />
              </div>
              <p className='fw-medium footer_para pt-3'>
                Health Coder is an advanced AI-powered medical coding engine designed to seamlessly integrate with Electronic Health Records (EHR) systems.
                By leveraging cutting-edge natural language processing (NLP) and machine learning, Health Coder reads medical notes, extracts key clinical information,
                and automatically assigns accurate ICD and CPT billing codes.
              </p>
              <p className='fw-medium footer_para pt-3'>
                Boost revenue. Reduce errors. Automate medical coding with Health Coder.
              </p>
            </div>
            <div className="col-lg-8 px-4 py-4 contactDetailsForm">
              <form action=" " onSubmit={eve => handleSubmit(eve)}>
                <div className="d-flex pb-4">
                  <div className='col-6 px-3 pad_end'>
                    <TextField className='form_input' name='name' label="Your Name" multiline maxRows={4} variant="standard" value={val?.name} onChange={eve => handleChange(eve)}
                      sx={{ '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {}, width: "100%", }}
                    />
                    {err?.name !== "" && <p className='text-danger fw-medium fs-6'>{err?.name}</p>}
                  </div>
                  <div className='col-6 px-3 pad_end'>
                    <TextField className='form_input' name='email' label="Your Email" multiline maxRows={4} variant="standard" value={val?.email} onChange={eve => handleChange(eve)}
                      sx={{ '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {}, width: "100%", }}
                    />
                    {err?.email !== "" && <p className='text-danger fw-medium fs-6'>{err?.email}</p>}
                  </div>
                </div>

                <div className="d-flex pb-4">
                  <div className='col-6 px-3 pad_end'>
                    <TextField className='form_input' name='subject' label="Your Subject" multiline maxRows={4} variant="standard" value={val?.subject} onChange={eve => handleChange(eve)}
                      sx={{ '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {}, width: "100%", }}
                    />
                    {err?.subject !== "" && <p className='text-danger fw-medium fs-6'>{err?.subject}</p>}
                  </div>
                  <div className='col-6 px-3 pad_end'>
                    <TextField
                      name="phoneNo"
                      label="Mobile Number"
                      className="form_input"
                      variant="standard"
                      // focused={true}
                      value={val?.phoneNo || ''} // Ensure a fallback value
                      sx={{
                        '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {},
                        width: '100%',
                      }}
                      onChange={handleChange}
                      InputProps={{
                        inputComponent: MaskedInputs,
                      }}
                    />
                    {err?.phoneNo !== "" && <p className='text-danger fw-medium fs-6'>{err?.phoneNo}</p>}
                  </div>
                </div>

                <div className="px-3 pb-4 pad_end">
                  <TextField className='form_input' name='message' label="Write Here Your Message" multiline rows={4} variant="standard" value={val?.message} onChange={eve => handleChange(eve)}
                    sx={{ '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {}, width: "100%", color: "#000", }}
                  />
                  {err?.message !== "" && <p className='text-danger fw-medium fs-6'>{err?.message}</p>}
                </div>

                <ReCAPTCHA
                  sitekey="6LfSCWcpAAAAAGooP9sfax0K3txqV7MWxeOMrf6_"
                  onChange={handleRecaptchaVerify}
                  onExpired={handleRecaptchaExpire}
                />
                {err?.captcha !== "" && <p className='text-danger fw-medium fs-6'>{err?.captcha}</p>}
                <div className="btn-box px-3 pt-3 pb-0">
                  <button className="btn-menu d-flex btn_ss btn-2 hover-filled-slide-right send_message" type='submit'><span>{formLoader ? <Loader className="d-flex justify-content-center" /> : "Send Message"} </span> </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GetItInTouch;
