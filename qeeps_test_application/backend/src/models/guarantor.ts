import mongoose from "mongoose";

const { Schema } = mongoose;

export interface IGuarantor extends Document {
  firstName: string;
  lastName: string;
  email: string;
  dateOfBirth: Date;
  maritalStatus: "single" | "married" | "civil partnership";
  address: string;
  monthlyRevenues: number;
  job: string;
  monthlyJobRevenues: number;
  contractType: "CDI" | "CDD" | "Freelance" | "Other";
  otherRevenues: number;
  otherRevenuesType: string | undefined;
}

export const GuarantorSchema = new Schema({
  firstName: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  dateOfBirth: { type: Date, required: true },
  address: { type: String, required: true },
  monthlyJobRevenues: { type: Number, required: true },
  otherRevenues: { type: Number, required: true },
  otherRevenuesType: { type: String, required: true },
  job: { type: String, required: true },
  contractType: { type: String, required: true },
  workingSince: { type: Date, required: true },
});
