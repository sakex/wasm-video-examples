import React from 'react';


interface PropsList {
    members: number[]
}

export const UserList = ({members}: PropsList) => (
    <ul>
        {members.map(member => <li key={member}>{member}</li>)}
    </ul>
);