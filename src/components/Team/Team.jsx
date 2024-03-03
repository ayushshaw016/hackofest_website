import React from 'react';
import TeamCard from './TeamCard';
import {Leads, members} from './data';

const TeamsPage = () => {
    return (
        <>
        <h2 className='mt-24 text-white  text-6xl font-serif font text-center underline'>LEADS</h2>
        <div className="team-container mt-10 flex flex-col lg:flex-row items-center" style={{ display: 'flex', flexWrap: 'wrap' }}>
            {Leads.map((member, index) => (
                <div
                    key={index}
                    style={{
                        flex: '1 0 calc(33.33% - 16px)', // Three cards per row on large screens
                        margin: '8px', // Adjust margin as needed
                        boxSizing: 'border-box',
                        maxWidth: 'calc(33.33% - 16px)', // Prevents cards from expanding beyond 33.33% width
                    }}
                >
                    <TeamCard member={member} />
                </div>
            ))}
        </div>
        <h2 className='mt-24 text-white font-bold text-4xl font-serif font text-center underline'>MEMBERS</h2>
        <div className="team-container mt-10 flex flex-col lg:flex-row items-center" style={{ display: 'flex', flexWrap: 'wrap' }}>
            {members.map((member, index) => (
                <div
                    key={index}
                    style={{
                        flex: '1 0 calc(33.33% - 16px)', // Three cards per row on large screens
                        margin: '8px', // Adjust margin as needed
                        boxSizing: 'border-box',
                        maxWidth: 'calc(33.33% - 16px)', // Prevents cards from expanding beyond 33.33% width
                    }}
                >
                    <TeamCard member={member} />
                </div>
            ))}
        </div>
        </>
    );
};

export default TeamsPage;
