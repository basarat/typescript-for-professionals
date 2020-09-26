export type SubmitRequest = {
  transactionId: string,
  personal: {
    title: string,
    driverFirstName: string,
    driverMiddleName: string,
    driverLastName: string,
    email: string,
    phone: string,
    previousAliases: {
      firstName: string,
      middleName: string,
      lastName: string,
    }[],
    gender: string,
    dob: string,
    birthCountry: string,
  },
  driver: {
    licenceNumber: string,
    expiryDate: string,
    hasLicenceForMin6Months: boolean,
    hasTerritoryLicence: boolean,
    territoryLicenceStates?: string[],
    hasDriverAccreditation: boolean,
    driverAccreditationNumber?: string,
    vehicleClasses: string[],
    tandc: true,
  },
  consent: {
    understandInformation: boolean,
    informationTrue: boolean,
    informationConsidered: boolean,
    medicalVicRoadsPoliceCheckConsent: boolean,
    consentToDisclosing: boolean,
    indemnifyAgainstLiability: boolean,
    acicCheckConsent: boolean,
    childrenCheckConsent: boolean,
    personalInfoCheckConsent: boolean,
    trafficOffences: boolean,
    assessAcicCheckConsent: boolean,
    criminalOffences: boolean,
    licenceCancelledSuspended: boolean,
    sexOffendersReporting: boolean,
    ausWorkRights: boolean,
    additionalInformation: string,
  },
  payment: {
    creditCardToken: string,
  }
};

// UI
type PaymentRequest = SubmitRequest['payment'];
type PreviousAliasRequest = SubmitRequest['personal']['previousAliases'][0];

export function getPayment(): PaymentRequest {
  return {
    creditCardToken: '124q234n12l!@#$3412n34!@#$'
  }
}