import Navbar from '../src/Navbar';
import './App.css';


function App() {
  // Simple POST request with a JSON body using fetch
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin':'*'},
        body: JSON.stringify({ title: 'React POST Request Example' })
    };
    fetch('https://login.salesforce.com/services/oauth2/token?client_id=3MVG9DREgiBqN9Wm8HeFOlyPkPgGiLzuZ4b5LlN01rbrqFIZyVVhg5PX4zDbpb7Y6DG05BShL7L6lRj5rLlBe&client_secret=213192E46626074BDE44DAE7FE07C1C551D229FEBDE184F30148B98FEC1F187B&password=melih.5377Y6lc98TAfNuGY8RLv5UfHKLj&username=ensonhesap@salesforce.com&grant_type=password', requestOptions, { mode: 'no-cors'})
        .then(response => response.json())
        .then(data => this.setState({ postId: data.id }));


  return (
    <div className="App">
  <Navbar/>
  
    </div>
  );
}

export default App;
