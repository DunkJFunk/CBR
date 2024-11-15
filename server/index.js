import express from 'express';
const app = express();
const PORT = 8080;
import cors from 'cors';
import pool from './db.js';
import { buildBoat } from './functions.js';
import multer from "multer";

// Image storage driver
const upload = multer({ storage: multer.memoryStorage() });

// Setting the export default to JSON
app.use(cors());
app.use(express.json())

//ROUTES//

//API HEALTH CHECK
app.get("/api", async (req, res) => {
    try {
        res.json("API HEALTH CHECK: PASSES!");   
    } catch (error) {
        console.log(error);
    }
});

//UPLOAD IMAGES
app.post("/boats", upload.array("images"), async (req, res) => {
    try {
        console.log("1");
        
        const { name } = req.body;
        const images = req.files;

        // Validate input
        if (!name || !images || images.length === 0) {
            return res.status(400).json({ error: "Invalid input data" });
        }

        console.log(images); // This will show the uploaded files

        console.log("2");

        // Assuming buildBoat processes the name and an array of images
        const boat = await buildBoat(name, images);

        // Insert into the database
        const uploadBoat = await pool.query(
            "INSERT INTO boats (name, images, serialNum) VALUES($1, $2, $3) RETURNING *",
            [boat.name, JSON.stringify(boat.images), boat.serial]
        );

        // Return the created boat record
        res.status(201).json(uploadBoat.rows[0]); 
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

//GET ALL CREATURES
app.get("/boats", async (req, res) => {
    try {
        const allBoats = await pool.query("SELECT * FROM boats");
        res.json(allBoats.rows);
    } catch (error) {
        console.error(error.message);
    }
});

//GET A BOAT
app.get("/boats/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const creature = await pool.query("SELECT * FROM boats WHERE key = $1", [id]);
        res.json(creature.rows[0]);
    } catch(error) {
        console.error(error);
    }
});

//UPDATE A CREATURE
app.put("/creatures/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { cr_name, cr_desc } = req.body;
        const updateCreature = await pool.query("UPDATE creatures SET cr_name = $1, cr_desc = $2 WHERE cr_id = $3", [cr_name, cr_desc, id]);
        res.json("Creature was updated!");
    } catch (error) {
        console.error(error);
    }
});

//DELETE A CREATURE
app.delete("/creatures/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const deleteCreature = await pool.query("DELETE FROM creatures WHERE cr_id = $1", [id]);
        res.json("Creature was deleted!");
    } catch (error) {
        console.error(error);
    }
});

// Tells us the server is running / nothing exploded whilst initializing
app.listen(
    PORT,
    () => console.log(`Server running on port ${PORT}`)
);