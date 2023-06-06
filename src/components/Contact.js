import React from "react";
import "../styles/Contact.css";

function Contact() {
  return (
    <div className="con">
      <h1 className="title">Get in touch!</h1>
      <div className="box">
        <div className="box-content">
          <h1>Address</h1>
          <p>
            Neque porro quisquam est qui <br />
            dolorem ipsum quia dolor sit amet, <br />
            consectetur, adipisci velit.
          </p>
        </div>
        <div className="box-content">
          <h1>Phone</h1>
          <p>
            09238492741 <br />
            09238573916 <br />
            09586417952 <br />
            09092458961 <br />
          </p>
        </div>
        <div className="box-content">
          <h1>Email</h1>
          <p>
            ceejaycapangada@gmail.com <br />
            jhoneduard767@gmail.com <br />
            erongutierrez9@gmail.com <br />
            karlmatthewconde@gmail.com <br />
            johnxcarl@gmail.com <br />
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
