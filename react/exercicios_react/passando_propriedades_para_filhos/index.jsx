import React from 'react';
import ReactDOM from 'react-dom';
import Family from './family'
import Member from './member'



ReactDOM.render(
    <Family lastName=' Tavares'>
        <Member name='Lucas' />
        <Member name='Joyce' />
        <Member name='teste' />
    </ Family>
    , document.getElementById('app'))                       
