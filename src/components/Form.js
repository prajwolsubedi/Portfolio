import "./FormStyle.css";
import React from "react";
import { useForm } from "@formspree/react";
const Form = () => {
  const [state, handleSubmit] = useForm("xbjewzva");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }
  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Your Name</label>
        <input
          type="text"
          name="username"
          placeholder="Username"
          id="username"
          required
          autoComplete="off"
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          placeholder="demo@gamil.com"
          id="email"
          required
          autoComplete="off"
        />
        <label htmlFor="subject">Subject</label>
        <input
          type="text"
          name="subject"
          placeholder="subject"
          id="subject"
          autoComplete="off"
          required
        />
        <label htmlFor="textarea">Message</label>
        <textarea
          name="message"
          id="message"
          rows="6"
          cols="15"
          autoComplete="off"
          placeholder="Type your message here"
          required
        />
        <button className="btn" type="submit" disabled={state.submitting}>
          Submit
        </button>
      </form>
    </div>
  );
};
export default Form;

