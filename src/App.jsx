import { useState } from "react";
import "./App.css";
import contacts from "./contacts.json";

function App() {
  const [contactList, setContactList] = useState(contacts.slice(0, 5));
  const [remainingContacts, setRemainingContacts] = useState(contacts.slice(5));

  // ITERATION 3

  const addRandom = () => {

    const randomIndex = Math.floor(Math.random()*remainingContacts.length);

    const randomContact = remainingContacts[randomIndex];

    const updatedContactList = [...contactList,randomContact];

    setContactList(updatedContactList);

    const updatedRemainingContacts = remainingContacts.filter(
      (contact) => contact.id !== randomContact.id
    );

    setRemainingContacts(updatedRemainingContacts);
  };

  //ITERATION 4

  const sortByName = ()=> {
    const sortedList = [...contactList];
    sortedList.sort((a, b) => (a.name.localeCompare(b.name)));
    setContactList(sortedList);
  }

  const sortByPopularity = () => {
    const sortedContacts = [...contactList].sort((a,b) => b.popularity - a.popularity);
    setContactList(sortedContacts);

  };

  //ITERATION 5

  const deleteContact = (id) => {
    const updatedContactList = contactList.filter((contact) => contact.id !== id);
    setContactList(updatedContactList);

  }

  return (

    <div className="App">
      <h1>IronContacts</h1>
      {/* BUTTONS */}
      <div>
      <button onClick={addRandom}>Add Random Contact</button>
      <button onClick={sortByName}>Sort by name</button>
      <button onClick={sortByPopularity}>Sort by popularity</button>
      </div>

      <table>
        <thead>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Won Oscar</th>
          <th>Won Emmy</th>
        </thead>
        <tbody>
          {/* ITERATION 1 */}
          {contactList.map((contact) => (
            <tr key={contact.id}>
              <td>
                <img src={contact.pictureUrl} alt={contact.name} height="100" />
              </td>
              <td>{contact.name}</td>
              <td>{contact.popularity.toFixed(2)}</td>

              {/* ITERATION 2 */}
              <td>{contact.wonOscar && "🏆"}</td>
              <td>{contact.wonEmmy && "🏆"}</td>

              {/* ITERATION 5 */}
              <td>
                <button onClick={() => deleteContact(contact.id)}> Delete </button>
              </td>



            </tr>
          ))}
        </tbody>
      </table>
    </div>

  );
}

export default App;
