import React, { useState } from 'react';
import useSWR from 'swr'
import './Typeahead.css'; 

const ApiURL = "https://api.github.com";
const GithubGlientId = "75e3235a908a255af6ad";
const GithubSecretKey = "a23eecc56bc36029b96ec002eda3bb182239ed24";

const fetcher = (...args) => fetch(...args).then(res => res.json());

const Item = props => {
  const { avatar_url, username } = props;
  return (
    <div className="Typeahead-item" onClick={() => props.setKey(username)}>
      <img src={avatar_url} className="avatar" alt="avatar" />
      <span className="user-name">{username}</span>
    </div>
  )
}

const TypeaheadContent = props => {
  const { data, error } = useSWR(`${ApiURL}/search/users?q=${props.searchKey}&client_id=${GithubGlientId}&client_secret=${GithubSecretKey}`, fetcher);

  return (
    <>
      { data && <div className="Typeahead-dropdown">
        { data.items.map(item => <Item key={item.id} username={item.login} avatar_url={item.avatar_url} setKey={props.setKey} />) }
      </div> }
      
      { !error && !data && <div className="Loading-bar">Loading...</div> }
      { error && <div className="Loading-bar">Something went wrong...</div> }
    </>
  )
}

const Typeahead = props => {
  const [searchKey, setSearchKey] = useState('');

  const onChangeText = (e) => {
    const text = e.target.value;
    setSearchKey(text);
  }

  return (
    <div className="Typeahead-continer">
      <input className="Typeahead-input" value={searchKey} onChange={(e) => onChangeText(e)} /> 
      { searchKey !== '' && <TypeaheadContent searchKey={searchKey} setKey={setSearchKey} /> }
    </div>
  )
}

export default Typeahead;