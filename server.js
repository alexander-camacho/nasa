const express = require("express");
const PORT = process.env.PORT || 8080;
const app = express();

// API routes
const routes = require("./routes");
// Models for sequelize
const db = require("./models");

// Middleware for express
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
app.use(express.static("public"));

// Routes
app.use(routes)

// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync({ force: true }).then(function () {
    app.listen(PORT, function () {
        console.log("App listening on PORT " + PORT);
    });
});