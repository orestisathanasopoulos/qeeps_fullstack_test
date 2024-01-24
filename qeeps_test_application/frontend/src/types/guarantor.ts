export interface IGuarantor {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  dateOfBirth: string;
  maritalStatus: string;
  address: string;
  monthlyJobRevenues: number;
  otherRevenues: number;
  otherRevenueType?: string;

  livingArrangements: string;
  job: string;
  contractType: string;
}
