import mongoose from 'mongoose';
const bookSchema=mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    genre: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    coverImage: {
      type: String, // URL or file path for the book cover image
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    stockQuantity: {
      type: Number,
      required: true,
    },
    publicationDate: {
      type: Date,
      required: true,
    },
    featured: {
      type: Boolean,
      default: false,
    },
    ratings: [
      {
        userId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'User',
        },
        rating: {
          type: Number,
          required: true,
        },
        review: String,
      },
    ],
  }
)

export const Book=mongoose.model('book', bookSchema);