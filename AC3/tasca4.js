renderApp();

function renderApp() {
  const app = document.getElementById('app');

  function TrafficLight() {
    const [walk, setWalk] = React.useState(true);

    function handleClick() {
      // alert(`${walk? 'Stop' : 'Walk'} is next`);
      // alert(walk);
      // walk = true
      setWalk(!walk); // next-walk = false
      // walk = true
      setWalk(!walk); // next-walk = false
      alert(walk);
      // alert(`${walk? 'Stop' : 'Walk'} is next`);
      
      // L'alert mostra sempre el mateix valor perquè l'estat es comporta com una captura fixa
      // que no canvia fins que el component es torna a renderitzar completament.
    }

    return (
      <>
        <button onClick={handleClick}>
          Change to {walk ? 'Stop' : 'Walk'}
        </button>
        <h1 style={{
          color: walk ? 'darkgreen' : 'darkred'
        }}>
          {walk ? 'Walk' : 'Stop'}
        </h1>
      </>
    );
  }

  const root = ReactDOM.createRoot(app);
  root.render(<TrafficLight />);
}