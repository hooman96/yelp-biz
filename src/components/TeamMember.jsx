import React from 'react';

const TeamMember = ({ name, image, bio }) => {
  return (
    <div className="team-member">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>{bio}</p>
    </div>
  );
};

export default TeamMember;
