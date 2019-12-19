import {statecharts } from 'overmind/config'
import { createHook } from 'overmind-react'

export const useOvermind = createHook()


const state = {
  title: "My Awesome tweeter",
  tweets: []
}
const actions = {
  changeTitle: ({state}, value) => {
    state.title = value
  },
  fetchTweets: async ({effects,actions},success = true) => {
    let tweets
    if(success){
      tweets = await effects.fetchTweets('/api/regularQL')
    }
    else{
      tweets = await effects.fetchTweets('/api/failQL')
    }
    if(tweets.error){
      actions.fetchFailure(tweets)
    }
    else{
      actions.fetchSuccess(tweets)
    }
  },
  fetchSuccess: ({state},tweets) => {
    state.tweets = tweets
  },
  fetchFailure: ({state},error) => {
    state.error = error.error
    state.tweets = []
  }
}

const effects = {
  fetchTweets: async (endpoint) => {
    return fetch(endpoint)
    .then(handleErrors)
    .then((response)=>response.json())
    .then((data)=>data.data.tweets)
    .catch((err) =>({error:err.toString()}))
  }
}

const handleErrors =(response) => {
  if (!response.ok) {
      throw Error(response.statusText);
  }
  return response;
}

const config = {
  state,
  actions,
  effects
}

const changeTitle = {
  initial: 'ORIGINAL',
  states:{
    ORIGINAL:{
      on: {
        changeTitle:'MODIFIED'
      }
    },
    MODIFIED:{
      on: {
        changeTitle:'MODIFIED'
      }
    }
  }
}
const fetchTweets = {
  initial: 'EMPTY',
  states:{
    EMPTY:{
      on:{
        fetchTweets:'FETCHING'
      }
    },
    FETCHING:{
      on:{
        fetchSuccess:'DISPLAY',
        fetchFailure:'ERROR'
      }
    },
    DISPLAY:{
      on:{
        fetchTweets:'FETCHING'
      }
    },
    ERROR:{
      on:{
        fetchTweets:'FETCHING'
      }
    }

  }
}

export default statecharts(config, {
  fetchTweets,
  changeTitle
})