import { IGuarantor } from "./guarantor";

export interface ICandidate {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  maritalStatus: "single" | "married" | "civil partnership";
  dateOfBirth: string;
  address: string;
  monthlyJobRevenues: number;
  otherRevenues: number;
  otherRevenuesType: string;
  job: string;
  coCandidates?: Array<string>;
  contractType: "CDI" | "CDD" | "Freelance" | "Other";
  workingSince: string;
  guarantorIds?: Array<IGuarantor>;
}
