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
app.use(express.json());

app.use((req, res, next) => {
    res.header('Access-Control-Expose-Headers', 'X-Total-Count');
    next();
  });

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
            "INSERT INTO boats (name, images, serialnum) VALUES($1, $2, $3) RETURNING *",
            [boat.name, JSON.stringify(boat.images), boat.serialnum]
        );

        // Return the created boat record
        res.status(201).json(uploadBoat.rows[0]); 
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

//GET ALL BOAtS
app.get("/boats", async (req, res) => {
    try {
        const allBoats = await pool.query("SELECT * FROM boats");
        res.setHeader('X-Total-Count', allBoats.rows.length);
        res.json(allBoats.rows);
    } catch (error) {
        console.error(error.message);
    }
});

//GET A BOAT
app.get("/boats/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const boat = await pool.query("SELECT * FROM boats WHERE serialnum = $1", [id]);
        res.json(boat.rows[0]);
    } catch(error) {
        console.error(error);
    }
});

//UPDATE A CREATURE
// app.put("/boats/:id", async (req, res) => {
//     try {
//         const { id } = req.params;
//         const { cr_name, cr_desc } = req.body;
//         const updateCreature = await pool.query("UPDATE boats SET name = $1,  WHERE id = $3", [cr_name, cr_desc, id]);
//         res.json("Creature was updated!");
//     } catch (error) {
//         console.error(error);
//     }
// });

//DELETE A BOAT
app.delete("/boats/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const deleteBoat = await pool.query("DELETE FROM boats WHERE serialnum = $1", [id]);
        res.json("Boat was deleted!");
    } catch (error) {
        console.error(error);
    }
});

// Tells us the server is running / nothing exploded whilst initializing
app.listen(
    PORT,
    () => console.log(`Server running on port ${PORT}`)
);