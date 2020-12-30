import React from 'react';
import '../assets/Typeahead.css'; 

const TypeaheadItem = props => {
  const { avatar_url, username } = props;
  return (
    <div className="Typeahead-item" onClick={() => props.setKey(username)}>
      <img src={avatar_url} className="avatar" alt="avatar" />
      <span className="user-name">{username}</span>
    </div>
  )
}

export default TypeaheadItem;