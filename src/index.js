import "./style.css"
import { Create, Write, Create_img } from "./functions.js"

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
    Create_img(require("./honey-restaurant.png"), "#Home", "restaurant-photo")    



window.Home = function(){
    remove()
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
    Create_img(require("./honey-restaurant.png"), "#Home", "restaurant-photo")

}

window.Menu = function(){
    remove()
    Create("div", "#content", "", "Menu")
    Create("h1", "#Menu", "", "food1")
    Create("h1", "#Menu", "", "food2")
    Create("h1", "#Menu", "", "food3")
    Create("h1", "#Menu", "", "food4")
    Create("h1", "#Menu", "", "food5")
    Create("h1", "#Menu", "", "food6")
    Create("h1", "#Menu", "", "food7")
    Create("h1", "#Menu", "", "food8")
    Create("h1", "#Menu", "", "food9")
    Create("h1", "#Menu", "", "food10")
    Write("#food1", "Honey Glazed Chicken ------------------------ $9.50")
    Write("#food2", "Honey Garlic Shrimp ------------------------- $11.00")
    Write("#food3", "Honey Lemon Tea ------------------------------ $2.50")
    Write("#food4", "Honey Oat Granola ---------------------------- $5.00")
    Write("#food5", "Honey Mustard Sauce ------------------------- $1.80")
    Write("#food6", "Honey Butter Toast ----------------------------- $3.00")
    Write("#food7", "Honey Glazed Carrots ------------------------- $4.00")
    Write("#food8", "Honey Yogurt Parfait -------------------------- $4.50")
    Write("#food9", "Honey Roasted Almonds ---------------------- $6.00")
    Write("#food10", "Honey Banana Smoothie ---------------------- $3.50")
}

window.Contact = function(){
    remove()
    Create("div", "#content", "", "Contact")
Create("div", "#Contact", "", "map")
document.getElementById("map").innerHTML = `
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47922.942034236645!2d69.24813435!3d41.3110819!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef45b18bb7d4f%3A0x1a502d8bcbebdad2!2sHoney%20Restaurant!5e0!3m2!1sen!2s!4vYOUR_EMBED_CODE"
    width="600"
    height="450"
    style="border:0;"
    allowfullscreen=""
    loading="lazy"
    referrerpolicy="no-referrer-when-downgrade">
  </iframe>
`;
Create("h1", "#Contact", "", "note")
Write("#note", "This Address is fake and it is only for learning Purposes")
}

window.remove = function(){
    document.getElementById("Home")?.remove();
    document.getElementById("Menu")?.remove();
    document.getElementById("Contact")?.remove();
}