import { useState, useEffect } from "react";

function ItemCount() {
    const [num, setNum] = useState(0);

    useEffect(() => {
    }, [num]);

    return (
        <>
            <button onClick={() => setNum(num - 1)}>restar</button>
            <p className='text-black text-4xl' >{num}</p>
            <button onClick={() => setNum(num + 1)}>sumar</button>
        </>
    );
}

export default ItemCount;
