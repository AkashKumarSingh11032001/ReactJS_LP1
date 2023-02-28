import React from 'react';
import './App.css';
import Header from './Header';
import ContactList from './ContactList';
import AddContact from './AddContact';

function App() {

  const contacts = [
    {
      id:'1',
      "name":"Akash",
      "email":"xyz@gmail.com"
    },
    {
      id:'2',
      "name":"Singh",
      "email":"abc@gmail.com"
    }
  ];
  return (
    <div className='ui container'>
      {/* <h1>Hello World!</h1> */}
      <Header />
      <AddContact />
      <ContactList contacts={contacts}/>
    </div>
  );
}

export default App;
