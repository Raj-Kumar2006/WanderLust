const Joi = require("joi");
const { model } = require("mongoose");
const review = require("./models/review");

module.exports.listingSchema = Joi.object({
  listing: Joi.object({
    title: Joi.string().required(),
    description: Joi.string().required(),
    price: Joi.number().required().min(0),
    location: Joi.string().required(),
    country: Joi.string().required(),
    image: Joi.string().allow("", null),
    imageUrl: Joi.string().allow("", null),
    category: Joi.alternatives().try(Joi.string(), Joi.array().items(Joi.string())).allow("", null),
    lat: Joi.number().allow(null, ''),
    lng: Joi.number().allow(null, ''),
  }).required(),
});

module.exports.reviewSchema = Joi.object({
  review: Joi.object({
    name: Joi.string().required(),
    rating: Joi.number().required().min(0).max(5),
    comment: Joi.string().required(),
  }).required(),
});
