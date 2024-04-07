import React, { useState } from "react";
import firstprize from "../../assets/Prizes/Firstprize.jpeg"
import secondprize from "../../assets/Prizes/secondprize.jpeg"
import thirdprize from "../../assets/Prizes/third.png"
import medal from "../../assets/Prizes/Medal.png"
import Typography from '@mui/material/Typography';
import herobg from "../../assets/herobg.png";

const prizeContent = {
    image: firstprize,
    title: 'Champion $740',
    description: 'The undisputed winner of the hackathon!',
    cash: 25000,
    prizeList: [{itemname:'', itemvalue: 'Access to Wolfram for thirty days.'},{itemname:'', itemvalue:'One includes both Desktop and Cloud access, full access to the Wolfram Language and Knowledgebase, FreeCDF Deployment, 5000 Wolfram'}, {itemname:'', itemvalue: 'One year of Wolfram|One Personal Edition plus a one-year subscription to Wolfram|Alpha Pro worth $375.00.'},
    {itemname:'', itemvalue: 'Echo3D 1-month FREE access to our Pro tier'}],
    total: 100000
}
const prizeContent2 = {
    image: secondprize,
    title: '1st Runner up $620',
    description: 'The undisputed runner up of the hackathon!',
    cash: 15000,
    prizeList: [{itemname:'', itemvalue: 'Access to Wolfram for thirty days.'},{itemname:'', itemvalue:'One includes both Desktop and Cloud access, full access to the Wolfram Language and Knowledgebase, FreeCDF Deployment, 5000 Wolfram'}, {itemname:'', itemvalue: 'One year of Wolfram|One Personal Edition plus a one-year subscription to Wolfram|Alpha Pro worth $375.00.'},
    {itemname:'', itemvalue: 'Echo3D 1-month FREE access to our Pro tier'}],
    total: 50000
}
const prizeContent3 = {
    image: thirdprize,
    title: '2nd Runner Up $560',
    description: 'The undisputed 2nd-runner up of the hackathon!',
    cash: 10000,
    prizeList: [{itemname:'', itemvalue: 'Access to Wolfram for thirty days.'},{itemname:'', itemvalue:'One includes both Desktop and Cloud access, full access to the Wolfram Language and Knowledgebase, FreeCDF Deployment, 5000 Wolfram'}, {itemname:'', itemvalue: 'One year of Wolfram|One Personal Edition plus a one-year subscription to Wolfram|Alpha Pro worth $375.00.'},
    {itemname:'', itemvalue: 'Echo3D 1-month FREE access to our Pro tier'}],
    total: 30000
}

const horiPrize = {...prizeContent}
horiPrize.title = 'Horiprize'

const prizecontents = [prizeContent,prizeContent2, prizeContent3]
const girlsteam = {
    image: medal,
    title: 'OverAll Girls Best Team',
    description: 'The undisputed Overall Girls Best Team of the hackathon!',
    cash: 10000,
    prizeList: [{itemname:'', itemvalue: 'Access to Wolfram for thirty days.'},{itemname:'', itemvalue:'One includes both Desktop and Cloud access, full access to the Wolfram Language and Knowledgebase, FreeCDF Deployment, 5000 Wolfram'}, {itemname:'', itemvalue: 'One year of Wolfram|One Personal Edition plus a one-year subscription to Wolfram|Alpha Pro worth $375.00.'},
    {itemname:'', itemvalue: 'Echo3D 1-month FREE access to our Pro tier'}]
}

const firstyear =  {
    image: medal,
    title: 'First year Best Team',
    description: 'The 1st Year Best Team of the hackathon!',
    cash: 10000,
    prizeList: [{itemname:'', itemvalue: 'Access to Wolfram for thirty days.'},{itemname:'', itemvalue:'One includes both Desktop and Cloud access, full access to the Wolfram Language and Knowledgebase, FreeCDF Deployment, 5000 Wolfram'}, {itemname:'', itemvalue: 'One year of Wolfram|One Personal Edition plus a one-year subscription to Wolfram|Alpha Pro worth $375.00.'},
    {itemname:'', itemvalue: 'Echo3D 1-month FREE access to our Pro tier'}]
}
const horizontalContents = [girlsteam, firstyear];
const prizes = [0,1,2];


import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import { ListItemButton } from "@mui/material";

const PrizeList = ({prizes, total}) => {
  return (
    <List sx={{ width: '100%' }}>
        {prizes.map((prize) => {
            return <ListItem>
        <ListItemAvatar>
          {/* <Avatar>
          </Avatar> */}
        </ListItemAvatar>
        <ListItemText primary={prize.itemname} secondary={`${prize.itemvalue}`} primaryTypographyProps={{variant: 'h6'}} secondaryTypographyProps={{color: 'white'}} />
      </ListItem>
      
        })}
        <ListItemButton selected={true} sx={{textAlign: 'center', fontWeight: 700}}>
        <ListItemText primary={`Total Prize Worth: ${total} Rs.`} primaryTypographyProps={{variant:'body1'}} />

      </ListItemButton>
    </List>
  );
}

export const HorizontalCards = ({title, subtitle, imageSrc,cash, infoList,tableHeaderTitle1, tableHeaderTitle2, point = '', theme = false}) => {
    const backgroundStyle = {
        backgroundImage: `url(${herobg})`,
      };
    return <div className={`${!theme ? 'w-full md:w-1/2 p-4 justify-between': 'w-full md:w-1/3 self-stretch px-3 mb-4 flex'}`} >
        <div className="w-full self-stretch bg-slate-700 bg-opacity-40 rounded-lg border-2 pb-3 mb-3 border-white flex flex-col" style={backgroundStyle}>
            <div className="w-full bg-slate-800 bg-opacity-70 flex px-3 items-center text-white rounded-t-lg justify-between text-center">
                <h1 className="text-2xl font-bold mx-auto my-3">{title}</h1>
            </div>
            {!theme && <div className="p-4 flex flex-col gap-y-3 text-white items-center">
                <img src={imageSrc}  />

                {/* cash prize */}
                
                <h1 className="text-2xl font-bold mx-auto my-3 underline">{`Total Prize Worth: ${cash} Rs.`}</h1>
                
            </div>}

            {theme && <div className="flex items-center w-full justify-center"><img src={imageSrc} className="w-40 h-40" /> </div>}
            {theme && <p className="py-2 px-6">{point}</p>}

            <div className="flex flex-col gap-y-2 items-center w-full" style={backgroundStyle}>

                {!theme && infoList.map((item) => {
                    return <div className="flex items-center justify-center px-3 py-2 w-full text-center bg-slate-900 bg-opacity-70">
                        {/* <div className="border-b-2 border-white p-3 text-white w-1/3 text-center">{item.title}</div> */}
                        <div className="border-b-2 border-white p-3 text-white w-4/5 text-center ">{item.value}</div>
                    </div>
                })}
                {/* {theme && <p className="mt-5 text-center">{point}</p>} */}
            </div>
        </div>
    </div>
}

const PrizeCard = ({prize, idx}) => {
    const backgroundStyle = {
        backgroundImage: `url(${herobg})`,
      };
    const [expanded,setExpanded] = useState(false);

    const mt = idx*12;

    return <div className={`flex flex-col hover:scale-110 transition-all p-4 max-h-screen overflow-x-auto rounded-lg shadow-lg bg-slate-700 bg-opacity-40 text-white w-full md:w-1/3 mx-2 mb-3 border-2 border-white items-center lg:w-1/4 mt-${mt}`} style={backgroundStyle}>
        <div className="text-center my-2 style={backgroundStyle}">
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

            <PrizeList prizes={prize.prizeList} total = {prize.total} />
        </div>
    </div>

}

const Prizes = () =>{
        const backgroundStyle = {
          backgroundImage: `url(${herobg})`,
        };
    return(
        <>
        <div className="xs> mt-24 md:mx-6" >
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

                <div className="flex flex-wrap items-center justify-around" >
                    {prizecontents.map((prize,idx) => <PrizeCard prize={prize} key={idx} idx={idx}  />)}
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
                    {horizontalContents.map((prize,idx) => <HorizontalCards title={prize.title} subtitle={prize.description} infoList={prize.prizeList.map((subprize, idx) => ({title: subprize.itemname, value: subprize.itemvalue}))} imageSrc={prize.image} cash = {prize.cash}  />)}
                </div>

        </div>

        </>
    )
}
export default Prizes;