import React from 'react'

let Footer_style = {
    backgroundColor: "black",
    color: "white",
    position: "absolute",
    bottom: 0,
    width: "100%",
    fontSize: "11px"}
  

const Footer = () => {
let date = new Date()
  return (
    <footer style={Footer_style}>
        <h4>Copyrights &copy; {date.getFullYear()}</h4>
    </footer>
    )
}

export default Footer