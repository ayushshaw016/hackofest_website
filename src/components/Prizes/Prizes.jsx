import React from "react";
import firstprize from "../../assets/Prizes/First_prize.png"
import secondprize from "../../assets/Prizes/Second_prize.png"
import thirdprize from "../../assets/Prizes/Third_prize.png"
import medal from "../../assets/Prizes/Medal.png"
const Prizes = () =>{
    return(
        <>
            <div className="xs> mt-24 md:mx-6">
        <h2 className="mt-8 text-center font-bold text-6xl md:mt-12 text-white mb-4">PRIZES</h2>
            <h2 className="text-center"></h2>
                <div className="flex flex-col md:flex-row text-white">
                    <div className="xs:mt-6 md:mt-16  xs:ml-4 md:ml-8 mb-6">
                    <img src={firstprize} className="mx-auto rounded-full"/>
                    <div className="border-2 border-solid border-black bg-gray-700">

                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae quod consequatur quasi velit optio blanditiis placeat repellendus nam eos reprehenderit, sit mollitia facere officiis iste praesentium vitae. Velit, voluptatibus sunt Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea consequatur libero eaque nemo beatae atque eligendi dignissimos tempore est amet modi facilis labore incidunt, excepturi dolor architecto velit unde commodi?
                    </div>
                    </div>
                    <hr/>
                    <div className="xs:mt-8 md:mt-40 xs:ml-4 md:ml-8 mb-6">
                    <img src={secondprize} className="mx-auto rounded-full"/>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae quod consequatur quasi velit optio blanditiis placeat repellendus nam eos reprehenderit, sit mollitia facere officiis iste praesentium vitae. Velit, voluptatibus sunt Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea consequatur libero eaque nemo beatae atque eligendi dignissimos tempore est amet modi facilis labore incidunt, excepturi dolor architecto velit unde commodi?
                    
                    </div>
                    <hr/>
                    <div className="xs:mt-8 md:mt-64 xs:ml-4 md:ml-8 mb-6">
                    <img src={thirdprize} className="mx-auto rounded-full"/>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae quod consequatur quasi velit optio blanditiis placeat repellendus nam eos reprehenderit, sit mollitia facere officiis iste praesentium vitae. Velit, voluptatibus sunt Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea consequatur libero eaque nemo beatae atque eligendi dignissimos tempore est amet modi facilis labore incidunt, excepturi dolor architecto velit unde commodi?
                    </div>
                    <hr/>
                </div>

                <div className="flex flex-col md:flex-row text-white mt-6">
                    <div className="xs:mt-6 md:mt-16  mx-4 mb-6">
                    <img src={medal} className="mx-auto rounded-full"/>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae quod consequatur quasi velit optio blanditiis placeat repellendus nam eos reprehenderit, sit mollitia facere officiis iste praesentium vitae. Velit, voluptatibus sunt Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea consequatur libero eaque nemo beatae atque eligendi dignissimos tempore est amet modi facilis labore incidunt, excepturi dolor architecto velit unde commodi?
                    </div>
                    <hr/>
                    <div className="xs:mt-6 md:mt-16 mx-4 my-6">
                    <img src={medal} className="mx-auto rounded-full"/>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae quod consequatur quasi velit optio blanditiis placeat repellendus nam eos reprehenderit, sit mollitia facere officiis iste praesentium vitae. Velit, voluptatibus sunt Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea consequatur libero eaque nemo beatae atque eligendi dignissimos tempore est amet modi facilis labore incidunt, excepturi dolor architecto velit unde commodi?
                    
                    </div>
            </div>
                    </div>

        </>
    )
}
export default Prizes;