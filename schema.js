const joi = require("joi");
module.exports.listingSchema = joi.object({
    listing: joi.object({
        title: joi.string().required(),
        description: joi.string().required(),
        image: joi.string().allow("",null),
        categories: joi.array().items(joi.string().valid(
      "Trending",
      "Rooms",
      "Iconic Cities",
      "Mountains",
      "Castles",
      "Pools",
      "Camping",
      "Farms",
      "Arctic",
      "Beach",
      "Apartments",
      "Homes"
    )
  )
  .optional(),
        price: joi.number().required().min(0),
        location:joi.string().required(),
        country: joi.string().required(),
    }).required()
})
module.exports.reviewSchema = joi.object({
    review: joi.object({
        rating: joi.number().min(1).max(5).required(),
        comment: joi.string().required()
    }).required()
})