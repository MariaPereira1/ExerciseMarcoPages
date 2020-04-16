import React, { useState } from "react";
import "./styles.less";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    alert("Alerta");
  }

  return (
    <div className="container">
      <form className="form" onSubmit={(event) => handleSubmit(event)}>
        <input
          name="email"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <input
          name="subject"
          type="text"
          placeholder="Subject"
          value={subject}
          onChange={(event) => setSubject(event.target.value)}
        />
        <textarea
          name="message"
          placeholder="Message"
          cols="40"
          rows="5"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
        />
        <button disabled={!email || !subject || !message}>Submit</button>
      </form>
    </div>
  );
};

export default Contact;
