export interface PilotSubmission {
  id: string;
  fullName: string;
  phoneNumber: string;
  emailAddress: string;
  organisationName: string;
  submittedAt: string; // ISO 8601 string
}

export interface PilotFormData {
  fullName: string;
  phoneNumber: string;
  emailAddress: string;
  organisationName: string;
}

export interface FormErrors {
  fullName?: string;
  phoneNumber?: string;
  emailAddress?: string;
  organisationName?: string;
  general?: string;
}
