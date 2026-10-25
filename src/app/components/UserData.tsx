import React, { use } from 'react';



const UserData = ({getUserPromise}) => {

    const userData = use(getUserPromise());

    return (
        <div>
            <h1>Total Users: {userData.length}</h1>
        </div>
    );
};

export default UserData;