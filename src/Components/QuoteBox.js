import React, { useEffect, useState } from 'react'
import "./QuoteBox.css"
import {useQuotes} from "../Hooks/useQuote"

function QuoteBox() {
  const [signal, setSignal] = useState(null);
  const{quote, getQuote} = useQuotes();

  function fetchQuotes() {
    getQuote(signal);
  }

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    setSignal(signal);

    const time = setInterval(() => {
      fetchQuotes(signal);
    }, 60000);

    return () => {
      clearInterval(time);
      controller.abort();
    };
  }, []);

  return (
    <div className='quoteBox'>
      <h3>Quote #{quote.id}</h3>
      <p>{` “ ${quote.advice} ” `}</p>
      <button onClick={fetchQuotes}></button>
    </div>
  )
}

export default QuoteBox
