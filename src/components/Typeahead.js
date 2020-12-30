import React, { useState } from 'react';
import TypeaheadItem from './TypeaheadItem';
import { ApiURL, GithubGlientId, GithubSecretKey } from '../constants/Constants';
import '../assets/Typeahead.css'; 

const Typeahead = props => {
  const [searchKey, setSearchKey] = useState('');
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const onChangeText = (e) => {
    const text = e.target.value;

    if(text === '') {
      setData(null);
      setError(false);
      setSearchKey(text);
      return;
    }

    setData(null);
    setError(false);
    setLoading(true);

    fetch(`${ApiURL}/search/users?q=${text}&client_id=${GithubGlientId}&client_secret=${GithubSecretKey}`).then(res => {
      setLoading(false);
      if(res.ok) {
        res.json().then(data => {
          setError(false);
          setData(data.items)
        });
      }
      else {
        setData(null);
        setError(true);
      }
    }).catch(err => {
      setData(null);
      setLoading(false);
      setError(true);
    });

    setSearchKey(text);
  }

  return (
    <div className="Typeahead-continer">
      <input className="Typeahead-input" value={searchKey} onChange={(e) => onChangeText(e) } /> 

      { data && <div className="Typeahead-dropdown">
        { data.map(item => <TypeaheadItem key={item.id} username={item.login} avatar_url={item.avatar_url} setKey={props.setKey} />) }
      </div> }
      { loading && <div className="Loading-bar">Loading...</div> }
      { error && <div className="Loading-bar">API call limit Exceed, Wait for a while...</div> }
    </div>
  )
}

export default Typeahead;