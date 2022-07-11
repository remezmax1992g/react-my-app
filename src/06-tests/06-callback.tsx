
export const User = () => {

    const deleteUser = () => {window.alert("User has been deleted")}

    return (
        <div>
            <div>Max</div>
            <button onClick={deleteUser}>Delete</button>
            <button>Save</button>
        </div>
    )
}