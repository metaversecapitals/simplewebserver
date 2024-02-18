import express from "express";
import { Request, Response } from "express";
import request from 'supertest';

const app = express();
const PORT = 3000;

app.get('/', (req: Request, res: Response) => {
    res.send('Hello World');
});

app.listen(PORT, () => {
    console.log(`Server is running in http://localhost:${PORT}`);
});

describe('Basic Express App', () => {
    it('Should respond with "Hello World" for the GET method', () => {
        return request(app).get('/')
          .then(response => {
            expect(response.statusCode).toBe(200);
            expect(response.text).toBe('Hello World');
          });
    });
});