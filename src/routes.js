import { Router } from "express";

const routes = new Router();

//Temp
const users = ["Philipi", "Kaio", "André"];

routes.get("/", (req, res) => {
  return res.status(200).json({
    name: "fisiopoleart-api",
    version: "1.0.0",
    repository: "https://github.com/philipibovo/fisiopoleart-api.git",
    author: "Philipi Bovo - http://philipi.bovo.me",
    license: "MIT"
  });
});

routes.get("/users", (req, res) => {
  return res.status(200).json(users);
});

// routes.get("/users/:index", checkExistsUserByIndex, (req, res) => {
routes.get("/users/:index", (req, res) => {
  return res.status(200).json(req.user);
});

// routes.post("/users", checkRequiredParamsCreateUser, (req, res) => {
routes.post("/users", (req, res) => {
  const { name } = req.body;

  users.push(name);

  return res.status(201).send();
});

// routes.put("/users/:index", checkExistsUserByIndex, (req, res) => {
routes.put("/users/:index", (req, res) => {
  const { index } = req.params;
  const { name } = req.body;

  users[index] = name;

  return res.status(200).json();
});

// routes.delete("/users/:index", checkExistsUserByIndex, (req, res) => {
routes.delete("/users/:index", (req, res) => {
  const { index } = req.params;

  users.splice(index, 1);

  return res.status(200).json();
});

export default routes;
