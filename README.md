# Random-Quote-Generator

A simple web application that generates random quotes from various authors. The app fetches quotes from an API and displays them in an interactive UI.



## Features
- Fetches random quotes and displays them with the author's name.
- A button to fetch a new quote on every click.
- Responsive and visually appealing design.
- Fetches quotes from an external API: [DummyJSON Quotes API](https://dummyjson.com/docs/quotes).
- Background image to enhance the aesthetic of the app.

## Technologies Used
- **HTML5**: Structure of the web page.
- **CSS3**: Styling of the page.
- **JavaScript**: Fetching random quotes from the API and DOM manipulation.
- **Font Awesome**: Used for adding icons to buttons.

## Installation

To run this project locally, follow the steps below:

### Clone the Repository:
```bash
git clone https://github.com/your-username/random-quote-generator.git
```

### Navigate to the project directory:
```
cd random-quote-generator
```
### Open index.html in your browser to see the app in action.

## How It Works

1. When the page loads, a random quote is fetched from the API and displayed.
2. When the "New Quote" button is clicked, a new random quote is fetched and displayed.
3. The quote is dynamically loaded into the `.quote` element, and the author's name is displayed in the `.person` element.



## Project Structure
```
random-quote-generator/
│
├── index.html        # The main HTML file
├── styles.css        # The stylesheet for styling the page
├── index.js          # JavaScript file for fetching and displaying quotes
└── the-library-wallpaper.jpg # Background image for the page (optional)
```
