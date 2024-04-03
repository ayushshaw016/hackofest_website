import React, { useState } from "react";
import firstprize from "../../assets/Prizes/First_prize.png"
import secondprize from "../../assets/Prizes/Second_prize.png"
import thirdprize from "../../assets/Prizes/Third_prize.png"
import medal from "../../assets/Prizes/Medal.png"
import Typography from '@mui/material/Typography';

const prizeContent = {
    image: firstprize,
    title: '1st Prize',
    description: 'The undisputed winner of the hackathon!',
    cash: 25000,
    prizeList: ['Prize1', 'Prize2', 'Prize3', 'Prize4']
}

const prizes = [0,1,2];


import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import { ListItemButton } from "@mui/material";


const PrizeList = ({prizes}) => {
  return (
    <List sx={{ width: '100%' }}>
        {prizes.map((prize) => {
            return <ListItem>
        <ListItemAvatar>
          <Avatar>
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={prize} secondary={`Worth ${500}`} primaryTypographyProps={{variant: 'h6'}} secondaryTypographyProps={{color: 'white'}} />
      </ListItem>
      
        })}
        <ListItemButton selected={true} sx={{textAlign: 'center', fontWeight: 700}}>
        <ListItemText primary="Spam" primaryTypographyProps={{variant:'body1'}} />

      </ListItemButton>
    </List>
  );
}

export const HorizontalCards = ({title, subtitle, imageSrc, infoList,tableHeaderTitle1, tableHeaderTitle2}) => {
    return <div className="w-full md:w-1/2 p-4">
        <div className="w-full bg-slate-700 bg-opacity-40 rounded-lg border-2 pb-3 mb-3 border-white flex flex-col">
            <div className="w-full bg-slate-800 bg-opacity-70 flex px-3 items-center text-white rounded-t-lg justify-between text-center">
                <h1 className="text-center">{title}</h1>
            </div>
            <div className="p-4 flex flex-col gap-y-3 text-white items-center">
                <img src={imageSrc}  />
                <p>{subtitle}</p>
            </div>

            <div className="flex flex-col gap-y-2 items-center w-full">

                {infoList.map((item) => {
                    return <div className="flex items-center justify-between px-3 py-2 w-full bg-slate-900 bg-opacity-70">
                        <div className="border-b-2 border-white p-3 text-white w-1/3 text-center">{item.title}</div>
                        <div className="border-b-2 border-white p-3 text-white w-1/3 text-center">{item.value}</div>
                    </div>
                })}
            </div>
        </div>
    </div>
}

const PrizeCard = ({prize, idx}) => {
    const [expanded,setExpanded] = useState(false);

    const mt = idx*12;

    return <div className={`flex flex-col hover:scale-110 transition-all p-4 max-h-screen overflow-x-auto rounded-lg shadow-lg bg-slate-700 bg-opacity-40 text-white w-full md:w-1/3 mx-2 mb-3 border-2 border-white items-center lg:w-1/4 mt-${mt}`}>
        <div className="text-center my-2">
            <Typography variant="h5" className="text-xl font-bold">{prize.title}</Typography>
            <Typography variant="subtitle-2">{prize.description}</Typography>
        </div>
        <div className="my-3">
            <img src={prize.image} className="w-full" />
        </div>

        <div className="text-center gap-y-5">
            <Typography variant="h5" borderTop={4} borderBottom={4} width={'100%'}>Cash Prize: {prize.cash} </Typography>
            {/* <div>
                <span>Other Prizes: </span>
                {prize.prizeList.map((subprize,idx) => {
                    if(idx !== prize.prizeList.length - 1) {
                        return <span>{subprize} {", "}</span>
                    } else {
                        return <span>{subprize}</span>
                    }
                })}
            </div> */}

            <PrizeList prizes={prize.prizeList} />
        </div>
    </div>

}

const Prizes = () =>{
    return(
        <>
        <div className="xs> mt-24 md:mx-6">
            <h2 className="mt-8 text-center font-bold text-6xl md:mt-12 text-white mb-4">PRIZES</h2>
            <h2 className="text-center"></h2>
                {/* <div className="flex flex-col md:flex-row text-white">
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
                </div> */}

                <div className="flex flex-wrap items-center justify-around">
                    {prizes.map((idx) => <PrizeCard prize={prizeContent} key={idx} idx={idx} />)}
                </div>
                

                {/* <div className="flex flex-col md:flex-row text-white mt-6">
                    <div className="xs:mt-6 md:mt-16  mx-4 mb-6">
                    <img src={medal} className="mx-auto rounded-full"/>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae quod consequatur quasi velit optio blanditiis placeat repellendus nam eos reprehenderit, sit mollitia facere officiis iste praesentium vitae. Velit, voluptatibus sunt Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea consequatur libero eaque nemo beatae atque eligendi dignissimos tempore est amet modi facilis labore incidunt, excepturi dolor architecto velit unde commodi?
                    </div>
                    <hr/>
                    <div className="xs:mt-6 md:mt-16 mx-4 my-6">
                    <img src={medal} className="mx-auto rounded-full"/>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae quod consequatur quasi velit optio blanditiis placeat repellendus nam eos reprehenderit, sit mollitia facere officiis iste praesentium vitae. Velit, voluptatibus sunt Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea consequatur libero eaque nemo beatae atque eligendi dignissimos tempore est amet modi facilis labore incidunt, excepturi dolor architecto velit unde commodi?
                    
                    </div>
                </div> */}
                <div className="flex items-center md:flex-row flex-col">
                    {prizes.map((prize) => <HorizontalCards title={prizeContent.title} subtitle={prizeContent.description} infoList={prizeContent.prizeList.map((subprize, idx) => ({title: `Subpize ${idx+1}`, value: subprize}))} imageSrc={prizeContent.image}  />)}
                </div>

        </div>

        </>
    )
}
export default Prizes;