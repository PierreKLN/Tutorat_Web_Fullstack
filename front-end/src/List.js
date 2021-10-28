import React, { useEffect, useState } from "react";
import axios from "axios";

export default function List() {
    const [list, setList] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:3001")
            .then(({ data }) => setList(data));
    });
    return <ul>
        {/* TODO: Passer le <li> dans son propre composant Item, rendre les cases clickable, synchroniser avec le back */}
        {list.map((elem, id) => <li key={id}>
            <input type="checkbox" checked={elem.checked} />
            {elem.text}
        </li>)}
    </ul>;
}