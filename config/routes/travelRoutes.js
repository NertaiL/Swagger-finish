import express from "express";
import {
  getAllTravels,
  getTravelsById,
  createTravels,
  updateTravels,
  removeTravels,
  getTravelsLimit,
  getOrderByLimitTravels,
  getPaginatorTravels,
  filterTravels,
  getTravelsWithHateoas,
  filterTravelss,
} from "../../src/controllers/travelsController.js";
/* import { Router } from "express"; 2da forma de hacerlo
const router = Router() */
import { verifyTokenToAuthorize } from "../../middlewares/verifyToken.js";

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Travels
 *   description: API para la gestión de viajes
 */

/**
 * @swagger
 * components:   
 *   securitySchemes: 
 *     BearerAuth:  
 *       type: http
 *       scheme: bearer
 *   schemas:
 *     Travels: 
 *       type: object
 *       required:  
 *         - destino
 *         - presupuesto
 *       properties:
 *         id:
 *           type: integer
 *           description: The auto-generated id of the users
 *         destino:
 *           type: string
 *           description: The travel's destination
 *         presupuesto:
 *           type: integer
 *           description: The travel's budget
 *         createdAt:
 *           type: string
 *           description: The date of the record's creation
 *         updatedAt:
 *           type: string
 *           description: The date of the record's last update
 *       example:   
 *         destino: paris
 *         presupuesto: 1000
 */

/**
 * @swagger
 * /travels:
 *   get: 
 *     security:  
 *       - BearerAuth: [] 
 *     summary: Obtener todos los viajes
 *     tags: [Travels] 
 *     responses:
 *       '200':
 *         description: Success
 *         content:
 *           application/json:
 *             schema: 
 *               type: object
 *               properties:
 *                 travels: 
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Travels' 
 *       '400':
 *         description: Error al obtener los viajes
 */

router.get("/travels", verifyTokenToAuthorize, getAllTravels);

//post
/**
 * @swagger
 * /travels:
 *   post:
 *     summary: Crear un nuevo viaje
 *     tags: [Travels]
 *     requestBody: 
 *       required: true 
 *       content:
 *         application/json: 
 *           schema:
 *              type: object  
 *              properties:
 *                travel:
 *                  $ref: '#/components/schemas/Travels' 
 *     responses:  
 *       '201':
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 travels:
 *                   $ref: '#/components/schemas/Travels'
 *       '400':
 *         description: Error al obtener los viajes
 */

router.post("/travels", createTravels);

//put
/**
 * @swagger
 * /travels/{id}:
 *   put:
 *     summary: Actualizar un viaje
 *     tags: [Travels]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The travel's id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               travels:
 *                 $ref: '#/components/schemas/Travels'
 *     responses:
 *       '200':
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 travel:
 *                   $ref: '#/components/schemas/Travels'
 *       '400':
 *         description: Error al obtener los viajes
 */

router.put("/travels/:id", updateTravels);

/**
 * @swagger
 * /travels/{id}:
 *   delete:
 *     summary: Eliminar un viaje
 *     tags: [Travels]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The travel's id
 *     responses:
 *       '204':
 *         description: Success
 *       '400':
 *         description: Error al obtener los viajes
 */
router.delete("/travels/:id", removeTravels);

router.get("/travels/:id", getTravelsById);
router.get("/travels_with_limit", getTravelsLimit);
router.get("/travels_order_with_limit", getOrderByLimitTravels);
router.get("/travels_paginador", getPaginatorTravels);
router.get("/travels_filter", filterTravels);
router.get("/travels_with_hateoas", getTravelsWithHateoas);
router.get("/travels/filters/paginator", filterTravelss);

/* router.all("*", notFound); */ //esto siempre tiene que ir alfinal de las rutas

export default router;
