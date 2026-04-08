renderApp();

function renderApp() {
    const app = document.getElementById('app');

    function Form() {
        const [firstName, setfirstName] = React.useState(0);
        const [lastName, setLastName] = React.useState(0);

        function handleFirstNameChange(e) {
            setfirstName = e.target.value;
        }

        function handleLastNameChange(e) {
            setLastName = e.target.value;
        }

        function handleReset() {
            setfirstName = '';
            setLastName = '';
        }

        return (
            <form onSubmit={e => e.preventDefault()}>
                <input
                    placeholder="First name"
                    value={firstName}
                    onChange={handleFirstNameChange}
                />
                <input
                    placeholder="Last name"
                    value={lastName}
                    onChange={handleLastNameChange}
                />
                <h1>Hi, {firstName} {lastName}</h1>
                <button onClick={handleReset}>Reset</button>
            </form>
        );
    }

    const root = ReactDOM.createRoot(app);
    root.render(<Form />);
}