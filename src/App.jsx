import React, { useEffect, useState } from 'react';
import './App.css';
import { Amplify } from 'aws-amplify';
import { API, graphqlOperation } from '@aws-amplify/api'; // Use @aws-amplify/api package

import awsConfig from './aws-exports';
import { Authenticator, withAuthenticator } from '@aws-amplify/ui-react';  // Named imports
import { listItems } from './graphql/queries';

Amplify.configure(awsConfig);

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchItems();git init

  }, []);  // Empty dependency array ensures it runs only once

  const fetchItems = async () => {
    try {
      console.log('Fetching items from API...');
      const itemData = await API.graphql(graphqlOperation(listItems));
      console.log('Item data:', itemData);
      const itemList = itemData.data.listItems.items;
      setItems(itemList);
    } catch (error) {
      console.error('Error fetching items:', error);
    }
  };
  

  return (
    <div className="App">
      <header className="App-header">
        <Authenticator>
          {({ signOut, user }) => (
            <div>
              <h1>Hello {user.username}</h1>
              <button onClick={signOut}>Sign Out</button>
            </div>
          )}
        </Authenticator>
        <h2>Items List</h2>
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              <strong>Name:</strong> {item.name}<br/>
              <strong>Description:</strong> {item.description}<br/>
              <strong>File Path:</strong> {item.filePath}<br/>
              <strong>Likes:</strong> {item.like}<br/>
              <strong>Owner:</strong> {item.owner}<br/>
            </li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default withAuthenticator(App);
