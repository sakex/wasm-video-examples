import React from 'react';


interface PropsList {
    conId: number,
    members: number[],
    callRemote: (user: number) => void
}

export const UserList = ({conId, members, callRemote}: PropsList) => (
    <ul>
        {members.map(member => <li onClick={() => callRemote(member)}
                                   key={member}>{member != conId ? member : "you"}</li>)}
    </ul>
);