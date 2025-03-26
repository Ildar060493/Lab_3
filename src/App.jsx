import React from 'react';
import { DataProvider } from './DataContext';
import NoteAdd from './components/NoteAdd';
import NoteList from './components/NoteList';
import './index.css';

function App() {
    return (
        <DataProvider>
            <div className="container">
                <NoteAdd />
                <NoteList />
            </div>
        </DataProvider>
    );
}

export default App;

