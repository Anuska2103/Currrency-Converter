import { useState,useEffect } from "react";
function useCurrencyInfo(currency){
    const [data, setData] = useState({})

    useEffect(() => {
        // 1. Fetch the data
        fetch(`https://open.er-api.com/v6/latest/${currency}`)
        
        // 2. Take the Response object (res) and return the Promise from res.json()
        .then((res) => {
            // Check if the response object has the .json method to be safe
            if (typeof res.json === 'function') {
                return res.json();
            } else {
                throw new TypeError('API response is not a valid Response object (missing .json method)');
            }
        })
        
        // 3. Take the resolved JSON data (data) and set the state
        .then((data) => {
             // 💡 IMPORTANT: Fix the previous bug by accessing 'rates'
             setData(data.rates); 
        })
        
        // 4. Always add a .catch() to handle network errors or bad responses
        .catch((error) => {
            console.error("Error fetching currency data:", error);
            // Optional: set data to a fallback empty object on error
            setData({}); 
        });
        
    }, [currency]);
    
    // Note: console.log(data) here will log the STALE state value.
    // To see the new value, log it inside the second .then()
    
    return data;
}

export default useCurrencyInfo;