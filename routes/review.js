const express = require("express");
const router = express.Router({mergeParams: true});
const Review = require("../models/review.js");
const wrapAsync = require("../utils/wrapAsync.js");
const Listing = require("../models/listing.js");
const {validateReview, isReviewAuthor,isLoggedIn} = require("../middleware.js");
const reviewController = require("../controllers/reviews.js")



//Reviews
// //Post Route
router.post("/",isLoggedIn,validateReview, wrapAsync(reviewController.createReview));

//Delete Review route

router.delete("/:reviewId",isLoggedIn,isReviewAuthor, wrapAsync(reviewController.destroyReview));

module.exports = router;