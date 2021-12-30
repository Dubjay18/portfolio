import React from "react";
import { useRef } from "react";
import { Container, Form } from "react-bootstrap";
import emailjs from "@emailjs/browser";
import em from "./emailkey";
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(em.SERVICE_ID, em.TEMPLATE_ID, form.current, em.USER_ID)
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div id="contact" className="bg">
      <Container className="text-white">
        <div>
          <h1>Contact</h1>
        </div>
        <Form ref={form} onSubmit={sendEmail}>
          <Form.Group>
            <Form.Label>Full name</Form.Label>
            <Form.Control type="text" name="full_name" />
          </Form.Group>
          <br />
          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" name="email" />
          </Form.Group>
          <Form.Group>
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" rows={3} name="message" />
          </Form.Group>
          <br />
          <button
            className="btn btn-outline-light"
            type="submit"
            onClick={sendEmail}
          >
            Submit
          </button>
        </Form>
      </Container>
    </div>
  );
};

export default Contact;
