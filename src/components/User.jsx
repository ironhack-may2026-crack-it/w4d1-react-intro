
function User(props){
    return (
        <div className="box">
            <h1>Name: {props.userName}</h1>
            <h1>Age: {props.age}</h1>
        </div>
    )
}

export default User
