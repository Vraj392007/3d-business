"use client";

import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted:", form);
    alert("Message sent successfully!");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div style={{ maxWidth: "600px", margin: "0 auto" }}>
      <h1>Contact Us</h1>

      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
        
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
          style={inputStyle}
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          required
          style={inputStyle}
        />

        <textarea
          name="message"
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
          required
          rows={5}
          style={inputStyle}
        />

        <button type="submit" style={buttonStyle}>
          Send Message
        </button>
      </form>
    </div>
  );
}

const inputStyle: React.CSSProperties = {
  padding: "10px",
  fontSize: "16px",
  borderRadius: "6px",
  border: "1px solid #ccc",
};

const buttonStyle: React.CSSProperties = {
  padding: "12px",
  fontSize: "16px",
  backgroundColor: "#0f172a",
  color: "white",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
};