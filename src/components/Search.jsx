import { useState } from 'react';
import tourData from  '../assets/data/tourData.jsx'


// A search component that takes a query and returns a list of results
function Search() {
  // A state variable to store the user's query
  const [query, setQuery] = useState("");

  // A state variable to store the search results
  const [results, setResults] = useState([]);

  // A handler function that updates the query state when the user types in the search box
  const handleInput = (event) => {
    setQuery(event.target.value);
  };

  // A handler function that performs the search operation when the user submits the query
  const handleSubmit = (event) => {
    // Prevent the default browser behavior of reloading the page
    event.preventDefault();

    // Clear the previous results
    setResults([]);

    // Check if the query is not empty
    if (query) {
      // Loop through the data source and find the matching results
      for (let item of tourData) {
        // Convert the query and the item content to lowercase for case-insensitive comparison
        let queryLower = query.toLowerCase();
        let contentLower = item.content.toLowerCase();

        // Check if the query is a substring of the item content
        if (contentLower.includes(queryLower)) {
          // Add the item to the results array
          setResults((prevResults) => [...prevResults, item]);
        }
      }
    }
  };

  // A function that renders the search results
  const renderResults = () => {
    // Check if there are any results
    if (results.length > 0) {
      // Return a list of results, each with a title, a snippet, and a URL
      return (
        <ul>
          {results.map((result) => (
            <li key={result.id}>
              <h3>{result.title}</h3>
              <p>{result.info.slice(0, 100)}...</p>
            </li>
          ))}
        </ul>
      );
    } else {
      // Return a message that no results were found
      return <p>No results found</p>;
    }
  };

  // Return the JSX code for the search component
  return (
    <div>
     
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={query}
          onChange={handleInput}
          placeholder="Enter your query"
        />
        <button type="submit">Search</button>
      </form>
      <div>{renderResults()}</div>
    </div>
  );
}

export default Search;
