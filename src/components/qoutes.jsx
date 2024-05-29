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
        <div className="flex gap-6 items-center justify-center text-black h-[3vw]  w-[35vw] absolute bottom-[3vw] left-[36vw]" onClick={random}>
            <p className="text-[0.9vw]">{quote.text}</p>
            <div className="h-[1.5vw] text-[1.5vw] w-[1.5vw] flex items-center justify-center" >
            <i className ="ri-restart-fill"></i>
            </div>
        </div>
)}
export default RandomQuotes;