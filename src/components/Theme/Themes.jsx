import React, { useEffect, useState } from 'react'
import { HorizontalCards } from '../Prizes/Prizes';
import firstprize from "../../assets/Prizes/First_prize.png"
import { useLocation, useSearchParams } from 'react-router-dom';

const themeContent = {
    image: firstprize,
    title: 'Theme 1',
    description: 'The description of the first theme!',
    point: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam nam maiores doloribus architecto cum asperiores, fugiat tempora laudantium quae itaque! Debitis velit, sit reprehenderit accusantium non voluptatibus corporis soluta impedit.'
}

function useQuery() {
    const { search } = useLocation();
  
    return React.useMemo(() => new URLSearchParams(search), [search]);
  }

const Themes = () => {

    const [value, setValue] = React.useState(0);
    const softwares = [1,2,3,4,5,6]
    const hardwares = [1,2,3,4]
 
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
        <div className='flex items-center justify-around w-full text-3xl'>
            <div onClick={() => setValue(0)} className={`hover:cursor-pointer ${value === 0 ? 'decoration-slate-700 underline' : 'no-underline'}`}>Software</div>
            <div onClick={() => setValue(1)} className={`hover:cursor-pointer ${value === 1 ? 'decoration-slate-700 underline' : 'no-underline'}`}>Hardware</div>
        </div>

        {value === 0 && <div className='my-6 w-full flex items-center flex-wrap justify-around'>
            {softwares.map((idx) => <HorizontalCards imageSrc={themeContent.image} subtitle={themeContent.description} title={themeContent.title} key={idx} theme = {true} point = {themeContent.point}></HorizontalCards>)}
        </div>}

        {value === 1 && <div className='my-6 w-full flex items-center flex-wrap justify-around'>
            {hardwares.map((idx) => <HorizontalCards imageSrc={themeContent.image} subtitle={themeContent.description} title={themeContent.title} key={idx} theme = {true} point = {themeContent.point}></HorizontalCards>)}
        </div>}
    </div>
    
}   

export default Themes