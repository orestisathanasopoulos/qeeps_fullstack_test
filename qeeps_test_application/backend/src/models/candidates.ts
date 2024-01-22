import mongoose from "mongoose";
const { Schema } = mongoose;

export interface ICandidate extends Document {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  maritalStatus: "single" | "married" | "civil partnership";
  dateOfBirth: Date;
  address: string;
  monthlyJobRevenues: number;
  otherRevenues: number;
  otherRevenuesType: string;
  job: string;
  coCandidates?: Array<string>;
  contractType: "CDI" | "CDD" | "Freelance" | "Other";
  workingSince: Date;
  guarantorIds?: Array<string>;
}

export const CandidateSchema = new Schema({
  type: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  dateOfBirth: { type: Date, required: true },
  address: { type: String, required: true },
  monthlyJobRevenues: { type: Number, required: true },
  otherRevenues: { type: Number, default: 0 },
  otherRevenuesType: { type: String, default: "" },
  job: { type: String, required: true },
  contractType: { type: String, required: true },
  situation: { type: String, required: true },
  guarantorIds: [{ type: Schema.Types.ObjectId, ref: "Guarantor" }],
  coCandidates: [{ type: String }],
  workingSince: { type: Date },
});


