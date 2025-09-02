const express = require("express");
const router = express.Router({ mergeParams: true });
const wrapAsync = require("../utils/wrapasync.js");

// const Review = require("../models/review.js");
const {
  validateReview,
  isLoggedIn,
  isReviewAuthor,
} = require("../middleware.js");
// const Listing = require("../models/listing.js");
const reviewController=require("../controllers/reviews.js")

//reviews
//Post review route

router.post(
  "/",
  validateReview,
  isLoggedIn,
  wrapAsync(reviewController.creteReview)
);


//Delete review route
router.delete(
  "/:reviewId",
  isLoggedIn,
  isReviewAuthor,

  wrapAsync(reviewController.destroyReview)
);

module.exports = router;
