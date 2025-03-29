export const GenderOptions = ["Male", "Female", "Other"];

export const PatientFormDefaultValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  birthDate: new Date(Date.now()),
  gender: "Male" as Gender,
  address: "",
  occupation: "",
  emergencyContactName: "",
  emergencyContactNumber: "",
  primaryPhysician: "",
  insuranceProvider: "",
  insurancePolicyNumber: "",
  allergies: "",
  currentMedication: "",
  familyMedicalHistory: "",
  pastMedicalHistory: "",
  identificationType: "Birth Certificate",
  identificationNumber: "",
  identificationDocument: [],
  treatmentConsent: false,
  disclosureConsent: false,
  privacyConsent: false,
};

export const IdentificationTypes = [
  "Birth Certificate",
  "Driver's License",
  "Medical Insurance Card/Policy",
  "Military ID Card",
  "National Identity Card",
  "Passport",
  "Resident Alien Card (Green Card)",
  "Social Security Card",
  "State ID Card",
  "Student ID Card",
  "Voter ID Card",
];

export const Doctors = [
  {
    image: "/assets/images/dr-green.png",
    name: "Sujan Ali",
  },
  {
    image: "/assets/images/dr-cameron.png",
    name: "Abantika Paul",
  },
  {
    image: "/assets/images/dr-livingston.png",
    name: "Mrinmoy Nandi",
  },
  {
    image: "/assets/images/dr-peter.png",
    name: "Md Mustaq",
  },
  {
    image: "/assets/images/dr-powell.png",
    name: "Ankita Debnath",
  },
  {
    image: "/assets/images/dr-remirez.png",
    name: "Swarup Bhouwmik",
  },
  {
    image: "/assets/images/dr-lee.png",
    name: "Shristi Saha",
  },
  {
    image: "/assets/images/dr-cruz.png",
    name: "Chayanika Saha",
  },
  {
    image: "/assets/images/dr-sharma.png",
    name: "M S Dhoni",
  },
];

export const StatusIcon = {
  scheduled: "/assets/icons/check.svg",
  pending: "/assets/icons/pending.svg",
  cancelled: "/assets/icons/cancelled.svg",
};
