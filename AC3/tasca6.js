renderApp();

function renderApp() {
  const app = document.getElementById('app');

  function Scoreboard() {
    const [player, setPlayer] = React.useState({
      firstName: 'Ranjani',
      lastName: 'Shettar',
      score: 10,
    });
  
    function handlePlusClick() {
      setPlayer({
        // Estava fent player.score++. Això modifica l'objecte a la memòria, però 
        // React no sap que ha canviat perquè la referència de l'objecte és la mateixa. 
        // Com que no cridava a setPlayer, React no tornava a renderitzar.
        ...player,
        score: player.score + 1
      });
    }
  
    function handleFirstNameChange(e) {
      setPlayer({
        ...player,
        firstName: e.target.value,
      });
    }
  
    function handleLastNameChange(e) {
      // En handleLastNameChange estava fent setPlayer({ lastName: ... }). En React, l'estat no es fusiona automàticament. 
      // S'estava substituint l'objecte sencer per un que només tenia el cognom, eliminant firstName i score.
      setPlayer({
        ...player,
        lastName: e.target.value
      });
    }
  
    return (
      <>
        <label>
          Score: <b>{player.score}</b>
          {' '}
          <button onClick={handlePlusClick}>
            +1
          </button>
        </label>
        <br /><br />
        <label>
          First name:
          <input
            value={player.firstName}
            onChange={handleFirstNameChange}
          />
        </label>
        <label>
          Last name:
          <input
            value={player.lastName}
            onChange={handleLastNameChange}
          />
        </label>
      </>
    );
  }

  const root = ReactDOM.createRoot(app);
  root.render(<Scoreboard />);
}