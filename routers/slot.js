const express = require("express");
const router = express.Router();
const { addSlot, listOfSlots, deleteSlot, updateSlot,classList } = require("../controller/slotController");

router.post("/api/addSlot", addSlot);
router.post("/api/deleteSlot", deleteSlot);
router.get("/api/listOfSlots", listOfSlots);
router.post("/api/updateSlot", updateSlot);
router.post("/api/classList",classList);
module.exports = router;
