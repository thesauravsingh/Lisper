Lisper is a simple web application that displays random secrets fetched from an external API. The app is built using Node.js, Express, and EJS for server-side rendering. The frontend is styled with custom CSS and includes a dynamic hover effect on the secret card.

Table of Contents
Installation
Usage
Project Structure
Technologies Used
Contributing
License
Installation
To set up the project locally, follow these steps:

Clone the repository:

sh
Copy code
git clone https://github.com/yourusername/lisper.git
Navigate to the project directory:

sh
Copy code
cd lisper
Install the dependencies:

sh
Copy code
npm install
Start the server:

sh
Copy code
npm start
The app will be running on http://localhost:3000.

Usage
Once the server is running, open your browser and navigate to http://localhost:3000. The homepage will display a random secret fetched from the external API.

Project Structure
css
Copy code
Lisper/
│
├── public/
│   ├── images/
│   │   └── whisper-img.jpg
│   ├── styles/
│   │   └── main.css
│
├── views/
│   └── index.ejs
│
├── .gitignore
├── package.json
├── README.md
└── server.js
public/: Contains static files like images and CSS.
views/: Contains the EJS templates.
server.js: Main server file.
Technologies Used
Node.js: JavaScript runtime.
Express: Web framework for Node.js.
Axios: Promise-based HTTP client for the browser and Node.js.
EJS: Embedded JavaScript templating.
CSS: For styling the frontend.
Contributing
Contributions are welcome! Please follow these steps to contribute:

Fork the repository.
Create a new branch (git checkout -b feature/your-feature).
Make your changes.
Commit your changes (git commit -am 'Add new feature').
Push to the branch (git push origin feature/your-feature).
Create a new Pull Request.
License
This project is licensed under the MIT License. See the LICENSE file for details.
