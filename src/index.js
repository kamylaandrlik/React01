import React from 'react';
import ReactDOM from 'react-dom';

const color1 = React.createElement('li', {}, 'Blue');
const color2 = React.createElement('li', {}, 'Teal');
const color3 = React.createElement('li', {}, 'Orange');

const music1 = React.createElement('li', {}, 'Bethel Music');
const music2 = React.createElement('li', {}, 'Hillsong');
const music3 = React.createElement('li', {}, 'Jesus Culture');

const food1 = React.createElement('li', {}, 'Pizza');
const food2 = React.createElement('li', {}, 'Ice Cream');
const food3 = React.createElement('li', {}, 'Hot Chocolate');

const website1 = React.createElement(
    'li', 
    {}, 
    React.createElement('a', { href: 'https://www.google.com' }, 'www.google.com')
);
const website2 = React.createElement(
    'li', 
    {}, 
    React.createElement('a', { href: "https://www.facebook.com"}, 
    'www.facebook.com'
    )
);
const website3 = React.createElement(
    'li', 
    {}, 
    React.createElement('a', 
    { href: "https://truthtotable.com"}, 
    'www.truthtotable.com'
    )
);


ReactDOM.render (
    React.createElement(
    'div',
    {},
    React.createElement('h1', {}, 'My Favorite Things'),
        React.createElement(
            'ul',
            {},
            React.createElement(
                'li', 
                {}, 
                'Favorite Colors', 
                React.createElement('ol', {}, color1, color2, color3)
            ),
            React.createElement(
                'li', 
                {}, 
                'Favorite Music', 
                React.createElement('ol', {}, music1, music2, music3)
            ),
            React.createElement(
                'li', 
                {}, 
                'Favorite Food', 
                React.createElement('ol', {}, food1, food2, food3)
            ),
            React.createElement(
                'li', 
                {}, 
                'Favorite Websites', 
                React,createElement('ol', {}, website1, website2, website3)
            )
         )
    ),
    document.getElementById('root')
);