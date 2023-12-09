import { useState, useEffect } from 'react'
import { dataStatic } from '../pages/oxap3s/data/data'

const useFetch = url => {
    const [state, setState] = useState([null, false]);

    useEffect(() => {
        setState([null, true]);

        (async () => {
            const data = await fetch(url)
                .then(res => res.json())
                .catch(
                    setState([dataStatic, false])
                  )

            setState([data, false]);
        })();
    }, [url]);

    return state;
};

export default useFetch; 