import { useState, useEffect } from "react";

export const useRatesData = () => {
    const apiKey = "b37dbd5074065107f400ceff6f10a7c6";
    const [ratesData, setRatesData] = useState({
        state: "loading",
    });

    useEffect(() => {
        const fetchRates = async () => {
            try {
                const response = await fetch(`http://api.exchangeratesapi.io/latest?access_key=${apiKey}&base=PLN`)
                
                if (!response.ok) {
                    throw new Error(response.statusText);
                }
                const { rates, date } = await response.json();
                
                setRatesData({
                    state: "success",
                    rates,
                    date
                });
                
            } catch {
                setRatesData({
                    state: "error",
                });
            }
        };
        setTimeout(fetchRates, 10);
    }, []);

    return ratesData;
};