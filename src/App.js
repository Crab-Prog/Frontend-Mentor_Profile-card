import './App.css';

function App() {
  return (
    <div className="App">
      <div className='big-container'>
        <header>
        </header>

        <main>
          <div className='profile-title'>
            <h1>Victor Crest <em>26</em> </h1>

            <p className='city'>London</p>
          </div>
          <div className='social-numbers'>
            <div className='numbers'>
              <p>80K</p>
              <em>Followers</em>
            </div>
            <div className='numbers'>
              <p>803K</p>
              <em>Likes</em>
            </div>
            <div className='numbers'>
              <p>1.4K</p>
              <em>Photos</em>
            </div>
          </div>
        </main>

        <footer>
          <div className="attribution">
            Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer">Frontend Mentor</a>.
            Coded by <a href="https://www.frontendmentor.io/profile/Crab-Prog">Ophélie Coudert</a>.
          </div>
        </footer>

      </div>
    </div>
  );
}

export default App;
