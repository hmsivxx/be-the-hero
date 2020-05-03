const express = require("express");

const OngController = require("./controllers/OngController");
const IncidentController = require("./controllers/IncidentController");
const ProfileController = require("./controllers/ProfileController");
const SessionController = require("./controllers/SessionController");

const routes = express.Router();

//login
routes.post("/session", SessionController.create);

//ongs routes
routes.get("/ongs", OngController.index);
routes.post("/ongs", OngController.create);

//incidents routes
routes.get("/incidents", IncidentController.index);
routes.post("/incidents/new", IncidentController.create);
routes.delete("/incidents/:id", IncidentController.delete);

//profile routes
routes.get("/profile", ProfileController.index);

module.exports = routes;
