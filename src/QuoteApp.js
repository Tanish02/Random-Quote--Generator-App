import { useEffect, useState } from "react"


function QuoteApp () {
    const [quote,setQuote] = useState("");
    const [author, setAuthor] = useState("");

    async function fetchQuote () {
        const res = await fetch("https://api.quotable.io/random");
        const data = await res.json();
        setQuote(data.content);
        setAuthor(data.author);
    }

    useEffect(() => {
        fetchQuote();


    }, []);

    return (
        <div style={{ textAlign: "center", marginTop: "30px"}}>
            <h2>
                Daily Quote Generator 💭
            </h2>
            <p style={{ fontStyle: "unset"}}>"{quote}"</p>
            <p>- {author}</p>
            <button onClick={fetchQuote}>Next Quote</button>
        </div>
    );
}

export default QuoteApp

// end code 
// learn how to fetch data from API