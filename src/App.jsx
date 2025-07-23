import React from 'react'
import Search from './components/search';

const App = () => {
  return (
    <main>
      <div className='pattern'/>

      <div className='wrapper'>
        <header>
          <h1>Find <span className='text-gradient'>Movies</span> You'll Enjoy Without the Hassle</h1>
        </header>

        <Search />
      </div>
    </main>
  )
}

export default App;