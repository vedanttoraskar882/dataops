import { PilotFormData, PilotSubmission } from '../types';

export const PILOT_STORAGE_KEY = 'dataopsGuardianPilotSubmissions';

/**
 * Generate a unique browser-compatible ID without external libraries.
 */
function generateUniqueId(): string {
  if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
    return crypto.randomUUID();
  }
  return 'sub_' + Date.now().toString(36) + '_' + Math.random().toString(36).substring(2, 9);
}

/**
 * Validate phone number with practical international format
 * Allows +, spaces, brackets, hyphens, and at least 7 digits.
 */
export function isValidPhoneNumber(phone: string): boolean {
  const trimmed = phone.trim();
  // Practical international pattern: allows optional +, numbers, spaces, parentheses, hyphens
  const phoneRegex = /^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]{5,20}$/;
  const digitsOnly = trimmed.replace(/\D/g, '');
  return phoneRegex.test(trimmed) && digitsOnly.length >= 7 && digitsOnly.length <= 16;
}

/**
 * Reasonable email format validation
 */
export function isValidEmail(email: string): boolean {
  const trimmed = email.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  return emailRegex.test(trimmed);
}

export interface SaveResult {
  success: boolean;
  errorMessage?: string;
  submission?: PilotSubmission;
}

/**
 * Saves a new pilot interest submission to localStorage under the required key.
 * Strictly adheres to error preservation requirements:
 * - If storage is malformed, preserves original value without overwriting.
 * - Does not log personal details.
 */
export function savePilotSubmission(formData: PilotFormData): SaveResult {
  try {
    if (typeof window === 'undefined' || !window.localStorage) {
      return {
        success: false,
        errorMessage: 'Local browser storage is unavailable on this device.'
      };
    }

    const existingRaw = window.localStorage.getItem(PILOT_STORAGE_KEY);
    let existingSubmissions: PilotSubmission[] = [];

    if (existingRaw !== null) {
      let parsed: unknown;
      try {
        parsed = JSON.parse(existingRaw);
      } catch {
        // Malformed JSON - PRESERVE existing value, DO NOT OVERWRITE
        return {
          success: false,
          errorMessage: 'Existing stored submissions appear malformed. Your storage was preserved to prevent data loss.'
        };
      }

      if (!Array.isArray(parsed)) {
        // Unexpected structure - PRESERVE existing value, DO NOT OVERWRITE
        return {
          success: false,
          errorMessage: 'Stored data structure is invalid (not an array). Existing storage preserved.'
        };
      }

      existingSubmissions = parsed as PilotSubmission[];
    }

    const newRecord: PilotSubmission = {
      id: generateUniqueId(),
      fullName: formData.fullName.trim(),
      phoneNumber: formData.phoneNumber.trim(),
      emailAddress: formData.emailAddress.trim(),
      organisationName: formData.organisationName.trim(),
      submittedAt: new Date().toISOString()
    };

    const updatedSubmissions = [...existingSubmissions, newRecord];
    const serialised = JSON.stringify(updatedSubmissions);

    window.localStorage.setItem(PILOT_STORAGE_KEY, serialised);

    return {
      success: true,
      submission: newRecord
    };
  } catch (err) {
    return {
      success: false,
      errorMessage: err instanceof Error ? err.message : 'Failed to write to browser local storage.'
    };
  }
}
