import { useState } from "react";

const RandomQuotes = () =>{

    let quotes = [];

    async function loadQuotes(){
        const response = await fetch("https://type.fit/api/quotes")
        quotes = await response.json();
    }
    const random = () => {
        const select = quotes[Math.floor(Math.random()*quotes.length)]
        setQuote(select);
    }
    loadQuotes();
    const [quote, setQuote] = useState({
        text: "If your are not payin for the service, it means you are the product",
        author: "isshin",
    });
    



    return (
        <div className="flex gap-6 items-center justify-center text-black h-[3vw]  w-[35vw] absolute bottom-[1vw] left-[34vw]" onClick={random}>
            <p className="text-[0.9vw]">{quote.text}</p>
        </div>
)}
export default RandomQuotes;