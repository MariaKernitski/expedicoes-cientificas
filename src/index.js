import e from "express";
import "dotenv/config";
import "./db.js";
import explorer_router from "./routes/Explorer_route.js"
import species_router from "./routes/Species_route.js"
import expedition_router from "./routes/Expedition_route.js"

const app = e();

app.use(e.json());

app.use("/explorer", explorer_router);
app.use("/species", species_router);
app.use("/expedition", expedition_router);

app.listen(process.env.API_PORT, () => console.log("Servidor rodando!"));