import React, { useState } from 'react';

const Drafts = ({ drafts, handleLoadDraft }) => {
  return (
    <div className="drafts-container">
      <h2>Drafts</h2>
      <ul>
        {drafts.map((draft, index) => (
          <li key={index}>
            <button onClick={() => handleLoadDraft(draft)}>Load Draft</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Drafts;
