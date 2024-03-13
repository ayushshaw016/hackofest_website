import ContactDetails from './ContactDetails';
import ContactForm from './ContactForm';

function ContactUS() {
	return (
		<div className='flex flex-col lg:flex-row  className= mx-3 p-3 mt-10 h-full bg-black opacity-70'>

			
				<ContactForm />

				<ContactDetails />
		
		</div>
	);
}

export default ContactUS;