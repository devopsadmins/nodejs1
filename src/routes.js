const express = require("express");
const routes = express.Router();

const Productcontroller = require("./controllers/ProdutctController");

routes.get("/products",Productcontroller.index);
routes.get("/products/:id",Productcontroller.show);
routes.post("/products",Productcontroller.store);  
routes.put("/products/:id",Productcontroller.update);  
routes.delete("/products/:id",Productcontroller.destroy);  

module.exports =  routes; 