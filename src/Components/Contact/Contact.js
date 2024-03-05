import './Contact.css';
import React from 'react';
import { useRef, useState } from 'react';
import {
  BsFillGeoAltFill,
  BsFillEnvelopeFill,
  BsPhoneFill,
} from 'react-icons/bs';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);
  const [disabled, setDisabled] = useState(true);

  const form = useRef();
  console.log(true);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_oyvx11u', 'template_xtqlinr', form.current, {
        publicKey: 'rxrtcucKPvHXkG46m',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setName('');
          setEmail('');
          setSubject('');
          setMessage('');
          setSent((r) => true);
          setDisabled(true);
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div>
      <section className="contact" id="Contact">
        <div className="contact-conteiner">
          <h1 className="contact-title">Contact</h1>
          <div className="contact-row">
            <div className="contact-address">
              <div className="contact-location">
                <BsFillGeoAltFill />
                <div>
                  <h4>Location:</h4>
                  <p>Luanda, Angola</p>
                </div>
              </div>

              <div className="contact-email">
                <div>
                  <BsFillEnvelopeFill />
                </div>
                <div>
                  <h4>Email:</h4>
                  <p>nelson-virgilio@hotmal.com</p>
                </div>
              </div>

              <div className="contact-phone">
                <BsPhoneFill />
                <div>
                  <h4>Call:</h4>
                  <p>+244 926 820 449</p>
                </div>
              </div>
            </div>
            <div>
              <div></div>
              <form
                ref={form}
                className="contact-form"
                onSubmit={sendEmail}
                action=""
              >
                <div className="contact-form__side">
                  <label htmlFor="name">
                    <input
                      type="text"
                      name="to_name"
                      value={name}
                      className="contact-form__form-1 form"
                      id="name"
                      placeholder="Your Name"
                      required
                      onChange={(e) => setName(e.target.value)}
                    />
                  </label>

                  <label htmlFor="email">
                    <input
                      type="email"
                      className="contact-form__form-2 form"
                      name="from_name"
                      value={email}
                      id="email"
                      placeholder="Your Email"
                      required
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </label>
                </div>

                <label htmlFor="subject">
                  <input
                    type="text"
                    className="contact-form__form-3 form"
                    name="to_subject"
                    value={subject}
                    id="subject"
                    placeholder="Subject"
                    required
                    onChange={(e) => setSubject(e.target.value)}
                  />
                </label>

                <textarea
                  className="contact-form__message form"
                  name="message"
                  value={message}
                  rows="5"
                  placeholder="Message"
                  required
                  onChange={(e) => {
                    setMessage(e.target.value);
                    setDisabled(false);
                  }}
                ></textarea>

                <div className="contact-button">
                  <button disabled={disabled} type="submit" onClick={sendEmail}>
                    {sent ? 'Sent' : 'Send Message'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
