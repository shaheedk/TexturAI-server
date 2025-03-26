import express from 'express'
import { generateImage } from '../controllers/imagecontroller.js'

const imageRouter=express.Router()

imageRouter.post('/generate-image',generateImage)