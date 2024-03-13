import React from 'react';
import emailjs from 'emailjs-com'; // Import EmailJS library
import Button from '../reusable/Button';
import FormInput from '../reusable/FormInput';

function ContactForm() {
  const sendEmail = (e) => {
    e.preventDefault();

    // Call EmailJS send function
    emailjs.sendForm('service_x3n8yzj', 'template_32r93x8', e.target, 'uJF0GJnuQ_eZAyLLI')
      .then((result) => {
        console.log(result.text);
        alert('Your message has been successfully sent!');
      }, (error) => {
        console.error(error.text);
        alert('Oops! Something went wrong. Please try again later.');
      });

    // Clear form fields after submission
    e.target.reset();
  };

  return (
    <div className="w-full lg:w-1/2 ">
      <div className="leading-loose">
        <form
          onSubmit={sendEmail} // Call sendEmail function on form submission
          className="max-w-xl m-4 p-6 sm:p-10 bg-secondary-light dark:bg-secondary-dark rounded-xl shadow-xl text-left"
        >
          <p className="font-general-medium text-white dark:text-primary-light text-3xl mb-8 font-bold">
            Contact Form
          </p>

          <FormInput
            inputLabel="Full Name"
            labelFor="name"
            inputType="text"
            inputId="name"
            inputName="name"
            placeholderText="Your Name"
            ariaLabelName="Name"
          />
          <FormInput
            inputLabel="Email"
            labelFor="email"
            inputType="email"
            inputId="email"
            inputName="email"
            placeholderText="Your email"
            ariaLabelName="Email"
          />
          <FormInput
            inputLabel="Subject"
            labelFor="subject"
            inputType="text"
            inputId="subject"
            inputName="subject"
            placeholderText="Subject"
            ariaLabelName="Subject"
          />

          <div className="mt-6">
            <label
              className="block text-lg text-white dark:text-primary-light mb-2"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              className="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
              id="message"
              name="message"
              cols="10"
              rows="3"
              aria-label="Message"
              placeholder='Enter your message here...'
            ></textarea>
          </div>

          <div className="mt-2">
            <Button
              title="Send Message"
              type="submit"
              aria-label="Send Message"
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
