import { useState } from "react";

export const Contact = () => {
  const handleFormSubmit=(formData)=>{
    const formInputData=Object.fromEntries(formData.entries());
    console.log(formInputData);
  }
  return (
    <section className="section-contact">
      <h2 className="container-title">Contact Us</h2>
      <div className="contact-wrapper container">
      <form action={handleFormSubmit}>
        <input
          type="text"
          className="form-control"
          required
          autoComplete="off"
          placeholder="Enter Name"
          name="username"
        />
        <input
          type="email"
          className="form-control"
          placeholder="Enter Email"
          required
          autoComplete="off"
          name="email"
        />
        <textarea
          name="message"
          rows="10"
          placeholder="Enter your message"
          required
          autoComplete="off"
          id="message"
          className="form-control"
        ></textarea>
        <button type="submit" value="send">Send</button>
      </form>
      </div>
    </section>
  );
};
