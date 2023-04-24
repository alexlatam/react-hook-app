import { useCounter, useFetch } from "../Hooks";
import { Blockquote, LoadingCard } from "./";

export const MultipleCustomHooks = () => {

    const { counter, increment, decrement, reset } = useCounter(5)

    const { data, loading, error } = useFetch( `https://api.breakingbadquotes.xyz/v1/quotes/${counter}` );

  return (
    <>
        <h1>BrackingBad Quotes</h1>

        {
            loading
            ? <LoadingCard />
            : data.map( ({ quote, author }) =>  <Blockquote key={quote} quote={quote} author={author} /> )
        }

        <button className={ `btn btn-info ${counter === 5 ? 'disabled' : ''}` }
            onClick={() => {
                if(counter === 5) return;
                decrement(5)
            }}
        >
            Less quotes
        </button>
        <button className='btn btn-info' onClick={() => reset()}>
            Initial quotes
        </button>
        <button className='btn btn-info' onClick={() => increment(5)}>
            More quotes
        </button>
    </>
  )
}
