renderApp();

function renderApp() {
  const app = document.getElementById('app');

  function RequestTracker() {
    const [pending, setPending] = React.useState(0);
    const [completed, setCompleted] = React.useState(0);

    async function handleClick() {
      // pending = 0
      setPending(p => p + 1); // next-pending = 1
      await delay(3000);
      // pending = 0         
      setPending(p => p - 1);  // next-pending = -1
      setCompleted(c => c + 1);

      // Debes usar siempre funciones de actualización (prev => prev + 1) en procesos asíncronos para asegurar que 
      // trabajas con el valor más reciente del estado en lugar de con la captura estática del renderizado anterior.
    }

    return (
      <>
        <h3>
          Pending: {pending}
        </h3>
        <h3>
          Completed: {completed}
        </h3>
        <button onClick={handleClick}>
          Buy
        </button>
      </>
    );
  }

  function delay(ms) {
    return new Promise(resolve => {
      setTimeout(resolve, ms);
    });
  }

  const root = ReactDOM.createRoot(app);
  root.render(<RequestTracker />);
}