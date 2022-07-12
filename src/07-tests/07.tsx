import React, {useState} from "react";

export type ManType = {
    name: string,
    age: number,
    lessons: Array<{ title: string, name?: string }>,
    address: {
        street: {
            streetTitle: string
        }
    }
}

type PropsType = {
    title: string,
    man: ManType,
    food: Array<string>,
    car: {model: string},
}

function useMaxState(m: string) {
    return [{m, function(){}}]
}

export const ManComponent: React.FC<PropsType> = ({title, man, ...props}) => {
   /* const {title, man: {name}} = props*/
    const [message, setMessage] = useMaxState("Hello")
    return (
        <div>
            <h1>{title}</h1>
            <hr/>
            <div>{man.name}</div>
        </div>

    )
}