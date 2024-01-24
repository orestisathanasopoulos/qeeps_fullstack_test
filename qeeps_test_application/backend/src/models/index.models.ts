import mongoose from "mongoose";
import { GuarantorSchema, IGuarantor } from "./guarantor";
import { CandidateSchema, ICandidate } from "./candidates";

export const Guarantor = mongoose.model<IGuarantor>(
  "Guarantor",
  GuarantorSchema
);

export const Candidate = mongoose.model<ICandidate>(
  "Candidate",
  CandidateSchema
);
