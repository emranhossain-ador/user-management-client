import React, { use } from 'react';



const UserData = ({getUserPromise}) => {

    const userData = use(getUserPromise());

    return (
        <div>
            <h1>Total Users: {userData.length}</h1>

            <ul>
                {
                    userData.map((data)=> <li key={data.id}>{data.name} : {data.email}</li>)
                }
            </ul>

        </div>
    );
};

export default UserData;