// import React from "react";

// const SearchBar = ({ searchTerm, onSearch }) => {
//   return (
//     <div style={styles.container}>
//       <input
//         type="text"
//         id="search"
//         value={searchTerm}
//         placeholder="Which hotel do you want to look for?"
//         onChange={(e) => onSearch(e.target.value)}
//         style={styles.input}
//       />
//     </div>
//   );
// };

// export default SearchBar;

// const styles = {
//   container: {
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     margin: "20px 0",
//   },
//   input: {
//     width: "400px",
//     padding: "10px",
//     borderRadius: "5px",
//     border: "1px solid #ccc",
//     fontSize: "16px",
//     outline: "none",
//   },
// };



import React from "react";

const SearchBar = ({ searchTerm, onSearch }) => {
  const handleButtonClick = () => {
    // Call the onSearch function to handle the search
    onSearch(searchTerm);
  };

  return (
    <div style={styles.container}>
      <input
        type="text"
        id="search"
        value={searchTerm}
        placeholder="Which hotel do you want to look for?"
        onChange={(e) => onSearch(e.target.value)}
        style={styles.input}
      />
      <button onClick={handleButtonClick} style={styles.button}>
        Search
      </button>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "20px 0",
  },
  input: {
    width: "400px",
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    fontSize: "16px",
    outline: "none",
    marginRight: "10px", // Add some spacing between the input and the button
  },
  button: {
    padding: "10px 20px",
    borderRadius: "5px",
    background: "#4CAF50",
    color: "#fff",
    fontSize: "16px",
    border: "none",
    cursor: "pointer",
    outline: "none",
  },
};

export default SearchBar;
