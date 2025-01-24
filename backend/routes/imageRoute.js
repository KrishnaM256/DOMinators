import express from 'express';
import multer from 'multer';
import axios from 'axios';
import fs from 'fs';
import FormData from 'form-data'; // Import the `form-data` package

const router = express.Router();
const upload = multer({ dest: 'uploads/' }); // Temporary storage for uploaded files

router.post('/predict', upload.single('image'), async (req, res) => {
    if (!req.file) {
        return res.status(400).json({ error: 'No image uploaded' });
    }

    try {
        // Create a new FormData instance and append the image
        const formData = new FormData();
        formData.append('image', fs.createReadStream(req.file.path));

        // Send the image to Flask API
        const response = await axios.post('http://127.0.0.1:6000/predict', formData, {
            headers: formData.getHeaders(), // Use the headers provided by FormData
        });

        // Send Flask API result back to frontend
        res.json(response.data);
    } catch (error) {
        console.error('Error:', error.message);
        res.status(500).json({ error: error.message });
    } finally {
        // Clean up the uploaded file
        try {
            fs.unlinkSync(req.file.path);
        } catch (unlinkError) {
            console.error('Failed to delete uploaded file:', unlinkError.message);
        }
    }
});

export default router;
