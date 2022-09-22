import mongoose, { Schema } from "mongoose";

export type UserType = {
  id?: any
  name: string
  email: string
  password: string
  createdAt?: string
  updatedAt?: string
}

const UserSchema = new Schema<UserType>(
  {
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true
    },
    createdAt: {
      type: Date,
      default: Date.now,
      required: false
    },
    updatedAt: {
      type: Date,
      default: Date.now,
      required: false
    }
  }
)

export const model = mongoose.model<UserType>('User', UserSchema)