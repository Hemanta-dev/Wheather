// import React, { useState } from "react";

// function SearchBar({ data }) {
//   const [query, setQuery] = useState("");

//   const handleInputChange = (event) => {
//     setQuery(event.target.value);
//   };

//   const filteredData = data.filter((item) => {
//     return item.toLowerCase().includes(query.toLowerCase());
//   });

//   return (
//     <div>
//       <input type="text" value={query} onChange={handleInputChange} />
//       {filteredData.length > 0 && (
//         <ul>
//           {filteredData.map((item, index) => (
//             <li key={index}>{item}</li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// }

// export default SearchBar;
