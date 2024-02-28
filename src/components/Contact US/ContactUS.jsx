import ContactDetails from './ContactDetails';
import ContactForm from './ContactForm';

function ContactUS() {
	return (
		<div className='flex flex-row lg:flex-row md:flex-col className= "m-3 p-3"'>

			
				<ContactForm />

				<ContactDetails />
		
		</div>
	);
}

export default ContactUS;