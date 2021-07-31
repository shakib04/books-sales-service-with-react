export const Card = ({id, title, shortDesc, fullDesc, }) => {
    return (<div>


        <h1 className="cardTitle">{id}.{title}</h1>
        <h4 className="cardShortDesc">{shortDesc}</h4>
        <p className="cartDesc">{fullDesc}</p>
    </div>)
}

