const User = (props) => {
    return (
        <div className="profile-container">
            <h3>Name: {props.name}</h3>
            <h3>Contact: {props.Contact}</h3>
        </div>
    );
};

export default User;