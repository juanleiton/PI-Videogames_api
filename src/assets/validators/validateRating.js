const validateRating = rating => {
  const error0 = new Error("If provided, 'rating' must be a number between 0 and 5 inclusive", {cause: 400});
  if(rating === "") return;
  if(typeof rating !== "number" || rating < 0 || rating > 5) throw error0;
};

module.exports = validateRating;