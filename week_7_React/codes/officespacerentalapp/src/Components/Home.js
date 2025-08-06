import React from "react";
import "./styles.css"; 
const offices = [
  {
    name: "DBS",
    rent: 50000,
    address: "Chennai",
    image: "https://imgs.search.brave.com/tJNzZHJnBoOhsYWMd0C-0nGSZNctTMiJWol_iKcjqxE/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2UxLzE0/L2EzL2UxMTRhMzBi/OGQ0NDc0NTkyYjZm/NzVjNjMxMjQ0NDQ2/LmpwZw" 
  },
  {
    name: "WeWork",
    rent: 75000,
    address: "Bangalore",
    image: "https://imgs.search.brave.com/E9IQlFBwY38BAzxvXPjVLuyCcgEmT8VFJt57oXKcpkc/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9wbHVz/LnVuc3BsYXNoLmNv/bS9wcmVtaXVtX3Bo/b3RvLTE2NjE5MjM0/NjU5NTMtOTM3ZTQ5/YzllNjI0P2ZtPWpw/ZyZxPTYwJnc9MzAw/MCZpeGxpYj1yYi00/LjEuMCZpeGlkPU0z/d3hNakEzZkRCOE1I/eHpaV0Z5WTJoOE1U/ZDhmRzFwWTNKdmMy/OW1kQ1V5TUc5bVpt/bGpaWHhsYm53d2ZI/d3dmSHg4TUE9PQ"
  },
  {
    name: "Regus",
    rent: 60000,
    address: "Mumbai",
    image: "https://imgs.search.brave.com/23KjpN0jipG4GMRyheAbuYEdJs37uy_yh_q5GOZQM0U/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMjcv/OTQxLzExOS9zbWFs/bC9sb2Z0LXN0eWxl/LW9mZmljZS1pbnRl/cmlvci1mcmVlLXBo/b3RvLmpwZw"
  }
];

function getRentColorClass(rent) {
  return rent <= 60000 ? "textRed" : "textGreen";
}

export default function OfficeSpaces() {
  return (
    <div>
      <h1>Office Space, at Affordable Range</h1>
      {offices.map((office, idx) => (
        <div key={idx} style={{ marginBottom: 30, border: "1px solid #ccc", padding: 10 }}>
          <img 
            src={office.image} 
            width="25%" 
            height="25%" 
            alt={`Office Space - ${office.name}`} 
          />
          <h2>Name: {office.name}</h2>
          <h3 className={getRentColorClass(office.rent)}>
            Rent: {office.rent}
          </h3>
          <h4>Address: {office.address}</h4>
        </div>
      ))}
    </div>
  );
}

