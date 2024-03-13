import { FiPhone, FiMapPin, FiMail } from 'react-icons/fi';

const contacts = [
	{
		id: 1,
		name: 'National Institute of Technology Patna, Patna-800005',
		icon: <FiMapPin />,
	},
	{
		id: 2,
		name: 'email@domain.com',
		icon: <FiMail />,
	},
	{
		id: 3,
		name: '555 8888 888',
		icon: <FiPhone />,
	},
];

function ContactDetails() {
	return (
		<div className="w-full lg:w-1/2 font-bold my-auto">
			<div className="text-left max-w-xl px-6">
				<h2 className="font-general-medium text-3xl text-white dark:text-primary-light mt-12 mb-8 ">
					Contact details
				</h2>
				<ul className='text-2xl'>
					{contacts.map((contact) => (
						<li className="flex " key={contact.id}>
							<i className="text-2xl text-white dark:text-neutral-400 mr-4 mt-1">
								{contact.icon}
							</i>
							<span className="text-lg mb-4 text-white dark:text-ternary-light">
								{contact.name}
							</span>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}

export default ContactDetails;