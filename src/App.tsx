import './styles/global.scss';

import { useState } from 'react';
import { SideBar } from './components/SideBar';
import { Content } from './components/Content';

export function App() {
  const [selectedGenreId, setSelectedGenreId] = useState<number>(1)
  
  function handleClickButton(id: number) {
    setSelectedGenreId(id);
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'row', height: '100%' }}>
      <SideBar handleClickButton={handleClickButton}/>

      <Content selectedGenreId={selectedGenreId}/>
    </div>
  )
}