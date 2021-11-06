import React, { useEffect, useState } from "react";
import axios from "axios";
import config from "./config";

export default function List() {

    function handleClick() {
        axios.post(config.BACK_END).then();
        console.log("cliked");
    }

    const [list, setList] = useState([]);
    useEffect(() => {
        axios.get(config.BACK_END)
            .then(({ data }) => setList(data));
    });

    
    return <><ul>
        {/* TODO: Passer le <li> dans son propre composant Item, rendre les cases clickable, synchroniser avec le back */}
        {list.map((elem, id) => <li key={id}>
            <input type="checkbox" checked={elem.checked} />
            {elem.text}
        </li>)}
    </ul>
    <div>
        <button onClick={handleClick}>Add Item to the list</button>
    </div>
    </>;
}