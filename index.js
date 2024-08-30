import axios from 'axios';
import express from 'express';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const port = 6969;
const host = '127.0.0.1';

async function getRandomImage() {
    try {
        const res = await axios.get('https://picsum.photos/200');
        return res.request.res.responseUrl; 
    } catch (error) {
        console.error('Error fetching image:', error);
        throw new Error('Failed to fetch random image');
    }
}

app.get('/api/image/random', async (req, res) => {
    try {
        const data = await getRandomImage();
 
        res.json(data)
            //    res.send(`<img src="${data}" alt="Random Image" />`);    
    } catch (error) {
        res.status(500).send('Error occurred while fetching the image');
    }
});

app.listen(port, host, () => {
    console.log(`Server is running at http://${host}:${port}`);
});
