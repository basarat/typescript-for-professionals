type ValidationSuccess = {
  isValid: true,
  validatedValue: string,
};

type ValidationFailure = {
  isValid: false,
  errorReason: string,
};

type ValidationResult =
  | ValidationSuccess
  | ValidationFailure;

function logResult(result: ValidationResult) {
  if (result.isValid) {
    console.log('Success, validated value:', result.validatedValue);
  }
  if (result.isValid === false) {
    console.error('Failure, error reason:', result.errorReason);
  }
}