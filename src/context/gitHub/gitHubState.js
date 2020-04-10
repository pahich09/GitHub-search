import React, {useReducer} from "react"
import {GitHubContext} from "./gitHubContext";
import {GitHubReducer} from "./gitHubReducer";
import {
  CLEAR_USERS,
  GET_REPOS,
  GET_USER,
  SEARCH_USERS,
  SET_LOADING
} from "../types";

export const GitHubState = ({children}) => {
  const initialState = {
    user: {},
    users: [],
    repos: [],
    loading: false
  }

  const [state, dispatch] = useReducer(GitHubReducer, initialState)

  const {user, users, repos, loading} = state

  const search = async value => {
    setLoading()
    //...
    dispatch({
      type: SEARCH_USERS,
      payload: []
    })
  }
  const getUser = async name => {
    setLoading()
    //...
    dispatch({
      type: GET_USER,
      payload: {}
    })
  }

  const getRepos = async name => {
    setLoading()
    //...
    dispatch({
      type: GET_REPOS,
      payload: []
    })
  }
  const clearUsers = () => {
    dispatch({
      type: CLEAR_USERS,
    })
  }
  const setLoading = () => {
    dispatch({
      type: SET_LOADING,
    })
  }

  return (
    <GitHubContext.Provider value={{
      user, users, repos, loading,
      search, getUser, getRepos, clearUsers, setLoading
    }}>
      {children}
    </GitHubContext.Provider>
  )
}
