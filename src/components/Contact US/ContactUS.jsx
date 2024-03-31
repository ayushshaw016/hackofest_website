import ContactDetails from "./ContactDetails";
import ContactForm from "./ContactForm";

function ContactUS() {
  return (
    <div>
      <div className="flex flex-col lg:flex-row mx-3 p-3 mt-10 h-full bg-black  z-10  opacity-95">
        <ContactForm />
        <ContactDetails />
      </div>
      {/* <div className="h-screen">
        <video
          autoPlay
          loop
          muted
          className="fixed right-0 top-0 h-screen w-full h-full object-cover z-[-1]"
        >
          <source src="/astronaut.mp4" type="video/mp4" />
        </video>
      </div> */}
    </div>
  );
}

export default ContactUS;
