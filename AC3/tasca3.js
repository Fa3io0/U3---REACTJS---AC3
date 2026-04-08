renderApp();

function renderApp() {
    const app = document.getElementById('app');

    function FeedbackForm() {
        const [name, setName] = React.useState('');
      
        function handleClick() {
          const nextName = prompt('What is your name?');
          setName(nextName);
          alert(`Hello, ${nextName}!`);
        }
      
        return (
          <button onClick={handleClick}>
            Greet
          </button>
        );
      }
      

    const root = ReactDOM.createRoot(app);
    root.render(<FeedbackForm />);
}