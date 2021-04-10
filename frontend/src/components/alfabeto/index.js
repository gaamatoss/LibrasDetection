import React from 'react';
import 'rsuite/dist/styles/rsuite-default.css';
import {  Button } from 'rsuite';
import { useHistory } from 'react-router-dom';
import guide from './guide.png'
import gif from  './gif.gif'; 
import './style.scss';

const Alfa = () =>{

       const history = useHistory();
       const navigateTo = () => history.push("/gestos");


    return (
      <div className="body">
        <div className="guide-img">
          <img className="guide" alt="logo" src={guide} />
        </div>
        <div className="gif">
            <h2>Como Utilizar</h2>
            <img className="giphy" alt="gif" src={gif} />
            <Button appearance="primary" size="lg" onClick={navigateTo}>Detectar</Button>
        </div>
      </div>
    );
};

export default Alfa;