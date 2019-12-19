import React from 'react'
import { createOvermind } from 'overmind'
import { Provider } from 'overmind-react'
import charts,{ useOvermind } from './overmind/statechart'

const overmind = createOvermind(charts)


export default () => {
  return(
    <Provider value={overmind}>
      <Tweets />
    </Provider>
  )
}

const Tweets = () => {
  const {state, actions} = useOvermind()
   
  const isFetching = overmind.state.matches({fetchTweets:{FETCHING:true}})
  
  const isEmpty = overmind.state.matches({fetchTweets:{EMPTY:true}})
  
  const isDisplay = overmind.state.matches({fetchTweets:{DISPLAY:true}})
  
  const isError = overmind.state.matches({fetchTweets:{ERROR:true}})

  return(
    <>
    <h1>{state.title}</h1>
    <button onClick={()=>actions.changeTitle("I changed it!")}>Change Title</button>

    {isEmpty && <Empty/>}
    {isFetching && <Fetching/>}
    {isDisplay && <Success/>}
    {isError && <Failure/>}

    {state.actions.fetchTweets && <button onClick={()=>actions.fetchTweets()}>Fetch</button>}
    {state.actions.fetchTweets && <button onClick={()=>actions.fetchTweets(false)}>Fetch (and fail)</button>}

    {state.actions.fetchSuccess && <button onClick={()=>actions.fetchSuccess()}>Success</button>}

    {state.actions.fetchFailure && <button onClick={()=>actions.fetchFailure()}>Failure</button>}

    <pre>{JSON.stringify(state,null,1)}</pre>
    </>
  )
}

const Empty = () => (
  <p>No tweets here</p>
)

const Fetching = () => (
  <>
  <p>I am fetching at the moment</p>
  </>
)

const Success = () => (
  <>
   <p>Succes</p>
  </>
)

const Failure = () => {
  const {state} = useOvermind()
  return(
  <>
    <p>I failed, {state.error}</p>
  </>
)}