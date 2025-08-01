import "./style.css"
import { Create, Write } from "./functions.js"

Create("div", "#content", "", "Home")
Create("h1", "#Home", "", "restaurant-name")
Write("#restaurant-name", "Honey Restaurant")
Create("p", "#Home", "", "text")
Write("#text", "Honey Restaurant is a warm, inviting place known for its cozy atmosphere and delicious homemade meals. Inspired by comfort and tradition, it offers a mix of hearty classics and sweet treats made with love—just like home. From fresh salads and grilled meats to its signature honey-glazed desserts, every dish is crafted with care. Whether you're here for a quick lunch or a relaxing dinner, Honey Restaurant makes you feel welcome, satisfied, and a little bit spoiled.")
Create("div", "#Home", "", "time-table")
Create("ul", "#time-table", "", "time")
Create("li", "#time", "working-days");
Create("li", "#time", "working-days");
Create("li", "#time", "working-days");
Create("li", "#time", "working-days");
Create("li", "#time", "working-days");
Create("li", "#time", "working-days");
Write(".working-days", "from 9:00 a.m. to 11:00 p.m.")
Create("div", "#Home", "", "location")
Create("p", "#location", "", "location1")
Write("#location1", "Address: 123 Honey Lane, Sweetville, ST 45678, USA")

window.remove = function(what1="", what2=""){
    document.getElementById(what1)?.remove();
    if(what2!=="")
    document.getElementById(what2)?.remove();
}