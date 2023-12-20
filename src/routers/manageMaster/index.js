const app = require("express");
const userAuthentication = require("../../middlewares/middleware.auth");
const {
  handleManageCity,
  handleCityList,
  handleUpdateCity,
} = require("../../controllers/manageMasters/controller.city");
const {
  handleManageState,
  handleStateList,
  handleUpdateState,
} = require("../../controllers/manageMasters/controller.state");
const {
  handleManageBranch,
  handleBranchList,
  handleUpdateBranch,
} = require("../../controllers/manageMasters/controller.branch");

const router = app.Router();

// ### manage masters ###

// !## CITY
// manage city
router.post("/manage-city", userAuthentication, handleManageCity);

// get city list
router.get("/city-list", handleCityList);

// update city
router.patch("/update-city/:id", userAuthentication, handleUpdateCity);

// !## STATE
// manage state
router.post("/manage-state", userAuthentication, handleManageState);

// get state list
router.get("/state-list", handleStateList);

// update state
router.patch("/update-state/:id", userAuthentication, handleUpdateState);

// !## BRANCH
// manage branch
router.post("/manage-branch", userAuthentication, handleManageBranch);

// get branch list
router.get("/branch-list", handleBranchList);

// update branch
router.patch("/update-branch/:id", userAuthentication, handleUpdateBranch);

module.exports = router;
