import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import reportWebVitals from './reportWebVitals';
import CommentList from './chapter_05/commentList';
import ConfirmButton from './chapter_08/confirmButton';



ReactDOM.render(
  <React.StrictMode>
    <ConfirmButton/>
  </React.StrictMode>,
  document.getElementById('root')
);



reportWebVitals(); 