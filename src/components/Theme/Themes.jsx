import React, { useEffect, useState } from 'react'
import { HorizontalCards } from '../Prizes/Prizes';
import firstprize from "../../assets/Prizes/First_prize.png"
import { useLocation, useSearchParams } from 'react-router-dom';
import {bussiness, sustain, communitybuilding, cyber, law, medicalfacility, openinnovation, qualityeducation, spaceandaerospace} from "../../assets/Themes/Software"
import {aihardware, drone, greentechnology, healtcareinnovation, homeautomation, iot, robotics, securityandpriv, wearables} from "../../assets/Themes/Hardware";

const qualityeduaction = {
    image: qualityeducation,
    title: 'qualityeduaction',
    description: 'QUALITY EDUCATION',
    point: 'Quality education empowers minds, transcending mere instruction to foster critical thinking and innovation. It equips individuals with skills to navigate a dynamic world and realize their fullest potential.'
}

const cybersecurity = {
    image: cyber,
    title: 'cybersecurity',
    description: 'CYBER SECURITY ',
    point: "Certainly! Here's a paragraph incorporating the theme 'Empowering Cyber Defenses: Innovations for Secure Digital Futures' along with some additional content"
}

const health = {
    image: medicalfacility,
    title: 'health',
    description: 'HEALTH CARE AND MEDICAL FACILITY',
    point: "Revolutionizing Healthcare: Harnessing Technology for Enhanced Medical Facilities and Service Innovative Solutions for Accessible and Efficient Healthcare Delivery"
}
const business = {
    image: bussiness,
    title: 'business',
    description: 'BUSINESS AND ECONOMIC GROWTH',
    point: "Fostering Prosperity: Unleashing Entrepreneurial Potential for Sustainable Business Growth. Driving Economic Resilience: Leveraging Technology and Innovation to Fuel Business Expansion."
}
const sustainibility= {
    image: sustain,
    title: 'SUSTAINIBILITY',
    description: 'BUSINESS AND ECONOMIC GROWTH',
    point: "Towards a Greener Future: Innovations for Sustainable Development and Environmental Preservation.Harmonizing Progress and Planet: Solutions for Sustainable Growth and Eco-friendly Practices"
}
const laws = {
    image: law,
    title: 'laws',
    description: 'LAWS AND JUSTICE',
    point: "Justice Through Innovation: Advancing Legal Systems for Fairness and Equality.Empowering Access to Justice: Leveraging Technology for Legal Equality and Accountability.Innovating Law: Bridging Gaps and Enhancing Fairness in Legal Systems"
}


const space = {
    image: spaceandaerospace,
    title: 'space',
    description: 'SPACE AND AEROSPACE TECHNOLOGY',
    point: "Exploring the Cosmos: Advancing Space and Aerospace Technology for Humanity's Future.Innovations Beyond Earth: Pushing Boundaries in Space Exploration and Aerospace Engineering"
}
const open = {
    image: openinnovation,
    title: 'openinnovation',
    description: 'OPEN INNOVATION',
    point: "Join us in a digital revolution, where minds converge to code solutions that shape a brighter future for all. Together, let's harness the power of innovation to address pressing issues and ignite positive change across the globe"
}

const comm = {
    image: communitybuilding,
    title: "COMMUNINTY",
    description: 'OPEN INNOVATION',
    point: "Community building is a field of practices directed toward the creation or enhancement of community among individuals within a regional area (such as a neighborhood) or with a common need or interest."
}
const iott = {
    image: iot,
    title: 'IOT',
    description: 'Internet OF Things',
    point: "Innovating the Internet of Things: Transforming Data into Action for Smarter, More Connected Environments. Exploring the Frontier of IoT: Bridging Physical and Digital Worlds for Enhanced Efficiency and Experience. "
}
const werabless = {
    image: wearables,
    title: 'WEerables',
    description: 'Wearables Technology',
    point: "Wearable Technology: Enhancing Lives, Redefining Possibilities, and Personalizing the Future. From Fitness to Fashion: Exploring the Boundaries of Wearable Technology for Seamless Integration into Daily Life."
}
const roboticss = {
    image: robotics,
    title: 'roboticsss',
    description: 'Robotics',
    point: "Wearable Technology: Enhancing Lives, Redefining Possibilities, and Personalizing the Future. From Fitness to Fashion: Exploring the Boundaries of Wearable Technology for Seamless Integration into Daily Life."
}
const Homeautomation = {
    image: homeautomation,
    title: 'Homeautomation',
    description: 'Home Automation',
    point: "Home Automation: Transforming Living Spaces into Intelligent, Adaptive Environments for Modern Lifestyles.Welcome to the Future: Harnessing Home Automation to Simplify Tasks, Enhance Security, and Conserve Energy."
}
const dronetech = {
    image: drone,
    title: 'dronetech',
    description: 'Drone Technology',
    point: "Taking Flight: Revolutionizing Industries and Services Through Drone Technology Innovation. Above and Beyond: Exploring the Limitless Possibilities of Drone Technology in Modern Society."
}

const healthcare = {
    image: healtcareinnovation,
    title: 'healthcare',
    description: 'Healthcare Innovation',
    point: "Healthcare Innovation: Transforming Patient Care, Advancing Medical Breakthroughs, and Improving Quality of Life.Pioneering Progress: Harnessing Technology and Collaboration to Drive Healthcare Innovation Forward"
}

const greentecchhh = {
    image: greentechnology,
    title: 'greentecch',
    description: 'Green Technology',
    point: "Green Technology: Sustaining the Planet, Powering Progress, and Pioneering a Sustainable Future. Driving Towards Sustainability: Innovations in Green Technology for Environmental Preservation and Economic Growth."
}

const aihardwaree = {
    image: aihardware,
    title: 'aihardware',
    description: 'AI Hardware',
    point: "AI Hardware: Powering the Future of Artificial Intelligence with Cutting-Edge Technologies.From Silicon to Cognition: Advancing AI Capabilities Through Innovative Hardware Solutions."
}

const security = {
    image: securityandpriv,
    title: 'security',
    description: 'Security and Privacy',
    point: "Security and Privacy: Safeguarding Data, Protecting Identities, and Preserving Trust in the Digital Age. Balancing Security with Privacy: Innovations to Ensure Data Protection and Personal Freedoms"
}

const themeContent = [];
function useQuery() {
    const { search } = useLocation();
  
    return React.useMemo(() => new URLSearchParams(search), [search]);
  }

const Themes = () => {

    const [value, setValue] = React.useState(0);
    const softwares = [qualityeduaction, cybersecurity, health, business, sustainibility, laws, comm, space, open]
    const hardwares = [iott, werabless, roboticss, Homeautomation, dronetech, healthcare, greentecchhh, aihardwaree, security]
 
    const qry = useQuery()
    
    useEffect(() => {
        const qval = qry.get('software');
        if(qval !== null) {
            if(qval === 'true') {
                setValue(0);
            }
            else if(qval === 'false') {
                setValue(1);
            }
        }
    },[])
    
    return <div className='flex flex-col items-center w-full mt-20 text-white'>
        <div className='flex items-center justify-around w-full text-3xl font-bold font-serif'>
            <div onClick={() => setValue(0)} className={`hover:cursor-pointer ${value === 0 ? 'decoration-white underline' : 'no-underline'}`}>SOFTWARE DOMAIN</div>
            <div onClick={() => setValue(1)} className={`hover:cursor-pointer ${value === 1 ? 'decoration-white underline' : 'no-underline'}`}>HARDWARE DOMAIN</div>
        </div>

        {value === 0 && <div className='my-6 w-full flex items-center flex-wrap justify-around'>
            {softwares.map((domain, idx) => <HorizontalCards imageSrc={domain.image} subtitle={domain.description} title={domain.description} key={idx} theme = {true} point = {domain.point}></HorizontalCards>)}
        </div>}

        {value === 1 && <div className='my-6 w-full flex items-center flex-wrap justify-around'>
            {hardwares.map((domain, idx) => <HorizontalCards imageSrc={domain.image} subtitle={domain.description} title={domain.description} key={idx} theme = {true} point = {domain.point}></HorizontalCards>)}
        </div>}
    </div>
    
}   

export default Themes