import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from '../header/Header';
import AlbumList from '../album/AlbumList';

function App() {
  return (
    <main>
      <Header />
      <AlbumList />
    </main>
  );
}

export default App;
