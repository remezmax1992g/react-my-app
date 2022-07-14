import {MouseEvent} from "react";
import {ChangeEvent} from "react";

export const User = () => {

    const deleteUser = (event: MouseEvent<HTMLButtonElement>) => {
        window.alert(event.currentTarget.name)}
    const onNameChange = () => {console.log("User's name has been changed")}
    const onAgeChange = (event: ChangeEvent<HTMLInputElement>) => {
        console.log("age was changed: " + event.currentTarget.value)}
    const focusLostHandler = () => {console.log("Focus was lost")}

    return (
        <div>
            <div><textarea onChange={onNameChange} onBlur={focusLostHandler}>Max</textarea></div>
            <input onChange={onAgeChange} type={"number"}/>
            <button name = "search" onClick={deleteUser}>search</button>
        </div>
    )
}