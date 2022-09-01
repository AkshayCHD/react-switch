import { useState } from "react";
import Table from './Table';
import Search from './Search';

export default function Component() {
    const [viewTable, setViewTable] = useState(false);
    const handleClick = () => {
        setViewTable(!viewTable);
    }
    let data = viewTable ? <Table/> : <Search/>;    
    return (
        <div>
            <button onClick={handleClick}>button</button>
           {data}
        </div>
    );
}