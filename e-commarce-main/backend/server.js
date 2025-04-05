const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = express();
const logger =require("morgan");
const mainRoute = require("./routes/index.js"); // Ana route dosyası
const port = 5000;

dotenv.config();

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB bağlantısı başarılı");
    } catch (error) {
        console.log("MongoDB bağlantısı başarısız:", error);
    }
};
// middlewares
app.use(logger("dev"))
app.use(express.json())

// Tüm API istekleri "/api" altında olacak
app.use("/api", mainRoute);  // Burada /api'yi ana route'a bağlıyoruz

app.listen(port, () => {
    connect();
    console.log(`Sunucu ${port} portunda çalışıyor`);
});
