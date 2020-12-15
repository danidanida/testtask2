import React, { useState, useEffect } from 'react';
import NodeComponent from './nodeComponent'

function formatData(serverData) {
    var data = { name: "", toggled: true, children: [] }
    let newArray = [];

    for (let i = 0; i < serverData.length; i++) {
        serverData[i].path = serverData[i].path.split(".")
    }
    serverData.forEach(el => {
        if (el.path.length === 1) { 
            newArray.push({ name: el.name, children: [] })
        }

        if (el.path.length === 2) { 
            newArray[(el.path[0]) - 1].children.push({ name: el.name, children: [] })
        }
        if (el.path.length === 3) { 
            newArray[(el.path[0]) - 1].children[(el.path[0]) - 1].children.push({ name: el.name, children: [] })
        }
    })
    data.children = newArray
    return data
}

const App = () => {
    const [state, setState] = useState({ children: [] });


    useEffect(async () => {
        const response = await fetch("/api/regions");
        const data = await response.json();
        const formattedData = formatData(data);
        setState(formattedData);

    }, []);

    return (

        <div>
            {state.children.map(d => <NodeComponent dataModel={d} />)}
        </div>

    )
}

export default App; 