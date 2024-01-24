import "../src/helpers/env.load";
import mongoose, { mongo } from "mongoose";
import { Candidate, Guarantor } from "../src/models/index.models";

const seedGuarantors = [
  {
    _id: "60b1f8aabd23be4acdaa58f9",
    firstName: "Sandrine",
    lastName: "Brichard",
    email: "sandrine.bricard@mail.com",
    dateOfBirth: "1975-11-05",
    address: "654 Elm Place",
    monthlyJobRevenues: 4700,
    job: "Chef d'entreprise",
    maritalStatus: "married",
    contractType: "CDI",
    otherRevenues: 0,
    otherRevenuesType: "rente",
    phoneNumber: "+33 3 43 32 22 15",
    workingSince: "1980-01-01",
  },
  {
    _id: "60b1f8aaad23be4acdaa58fa",
    firstName: "Michel",
    lastName: "Bricard",
    email: "michel.bricard@mail.com",
    dateOfBirth: "1960-03-30",
    address: "321 Birch Road",
    monthlyJobRevenues: 7000,
    job: "Medecin",
    contractType: "Freelance",
    otherRevenues: 3000,
    otherRevenuesType: "rente",
    maritalStatus: "married",
    phoneNumber: "+33 3 56 87 22 88",
    workingSince: "1976-01-01",
  },
];

const seedCandidates = [
  {
    contractType: "CDI",
    firstName: "Fabrice",
    lastName: "Bricard",
    email: "fabien.bricard@mail.com",
    dateOfBirth: "1990-01-01",
    address: "123 Maple Street",
    monthlyJobRevenues: 3500,
    otherRevenues: 0,
    otherRevenuesType: "rente",
    job: "Software Engineer",
    coCandidates: ["1", "2"],
    maritalStatus: "single",
    guarantorIds: ["60b1f8aaad23be4acdaa58fa", "60b1f8aabd23be4acdaa58f9"],
    workingSince: "2022-01-01",
    phoneNumber: "+33 7 78 52 45 94",
  },
  {
    contractType: "CDD",
    firstName: "Jane",
    lastName: "Smith",
    email: "janesmith@example.com",
    dateOfBirth: "1990-01-01",
    address: "456 Elm St.",
    monthlyJobRevenues: 3000,
    otherRevenues: 1000,
    otherRevenuesType: "rente",
    job: "Graphic Designer",
    coCandidates: [],
    maritalStatus: "single",
    workingSince: "2022-01-01",
    guarantorIds: [],
    phoneNumber: "+33 3 43 32 22 15",
  },
  {
    contractType: "Freelance",
    firstName: "Mike",
    lastName: "Anderson",
    email: "mikeanderson@example.com",
    dateOfBirth: "1990-01-01",
    address: "789 Oak St.",
    monthlyJobRevenues: 0,
    otherRevenues: 1500,
    otherRevenuesType: "parents",
    job: "Student",
    coCandidates: [],
    maritalStatus: "civil partnership",
    guarantorIds: [],
    phoneNumber: "+33 1 22 35 63 88",
  },
];

const seedDB = async () => {
  await mongoose.connect(process.env.MONGO_URI || "").then(() => {
    console.log("Connection open");
  });
  mongoose.connection.on("close", () => console.log("Connection closed"));
  mongoose.connection.on("error", (error: Error) => console.log(error));

  await Guarantor.deleteMany({});
  await Guarantor.insertMany(seedGuarantors);

  await Candidate.deleteMany({});
  await Candidate.insertMany(seedCandidates);
  console.log("Seeding completed");

  await mongoose.connection.close();
};
seedDB();
