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
import { verifyTokenToAuthorize } from "../../middlewares/verifyToken.js";
/* import YAML from "yamljs"; */

/* const swaggerSpec = YAML.load("../../routes/docs/swaggerSpec.yaml") */
const router = express.Router();
/* const swaggerSpec = YAML.load("../docs/swaggerSpec.yaml"); */

router.get("/travels", verifyTokenToAuthorize, getAllTravels);
router.post("/travels", createTravels);
router.put("/travels/:id", updateTravels);
router.delete("/travels/:id", removeTravels);

router.get("/travels/:id", getTravelsById);
router.get("/travels_with_limit", getTravelsLimit);
router.get("/travels_order_with_limit", getOrderByLimitTravels);
router.get("/travels_paginador", getPaginatorTravels);
router.get("/travels_filter", filterTravels);
router.get("/travels_with_hateoas", getTravelsWithHateoas);
router.get("/travels/filters/paginator", filterTravelss);

/* router.all("*", notFound); */ //esto siempre tiene que ir alfinal de las rutas
//documented routes
/* router.get("/swagger",(req,res)=> {
  res.yaml(swaggerSpec)
}) */
export default router;
