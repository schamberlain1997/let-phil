import React from 'react'



type UserInfoType = {
    name: string;
    occupation: string;
    hobby: string;
    age: number;
};

export const UserInfo = ({ name, occupation, hobby, age }: UserInfoType) => {

    return (
        <>
            <h1>{name}</h1>
            <p>{occupation}</p>
            <p>{hobby}</p>
            <p>{age}</p>
        </>
    );
};