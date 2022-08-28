export function Greeting({title, name = "User"}){
    console.log(title,name)
    return <h1>{title}</h1>
}

export function UserCard({name,amount,points,address,greet}){
return(
    <div>
        <h1>{name}</h1>
        <p>{amount}</p>
        <p>{points}</p>
        <ul>
            <li>Address: {address.street}</li>
        </ul>
        
    </div>
);
}