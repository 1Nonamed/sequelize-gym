const express = require("express");
const router = express.Router();

const {
  getMemberships,
  getMembershipById,
  addMembership,
} = require("../controllers/memberships");

router.get("/memberships", getMemberships);
router.get("/membership/:id", getMembershipById);

router.post("/memberships", addMembership);

module.exports = router;
