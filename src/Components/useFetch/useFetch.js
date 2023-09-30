import React from "react";
import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(url).then((res) => {
            if (res.ok) {
                res.json().then((data) => { setData(data); setIsPending(false); });
            } else {
                throw new Error();
            }
        }).catch((err) => { setError(err) });
    }, []);
    return [ data, isPending, error ];
}



export default useFetch;