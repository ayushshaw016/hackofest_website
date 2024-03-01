import React from 'react';
import TeamCard from './TeamCard';
import dummyTeamData from './data';

const TeamsPage = () => {
    return (
        <div className="team-container mt-10 flex flex-col lg:flex-row items-center" style={{ display: 'flex', flexWrap: 'wrap' }}>
            {dummyTeamData.map((member, index) => (
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
    );
};

export default TeamsPage;
