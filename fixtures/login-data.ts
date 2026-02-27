export const SIGNUP_TEXTS = {
  // Heading
  SIGNUP: 'SIGN UP',

  // Button texts
  SIGNUP_BUTTON: 'Sign Up',

  // Labels and placeholders
  LABELS: {
    USERNAME: 'Username',
    EMAIL: 'Email Address',
    FIRST_NAME: 'First Name',
    LAST_NAME: 'Last Name',
    PASSWORD: 'Password',
    CONFIRM_PASSWORD: 'Confirm Password',
    COUNTRY: 'Country',
    TERMS_AND_PRIVACY: 'I agree to the Terms of Service and Privacy Policy',
    PROMOTIONAL: 'I would like to receive promotional emails'
  },
  
  // Placeholders
  PLACEHOLDERS: {
    ENTER_EMAIL: 'Enter your email',
    ENTER_PASSWORD: 'Enter your password',
    ENTER_USERNAME: 'Choose a username'
  },
  
  // Error messages
  ERRORS: {
    INVALID_CREDENTIALS: 'Invalid email or password',
    EMAIL_REQUIRED: 'Email is required',
    PASSWORD_REQUIRED: 'Password is required',
    EMAIL_INVALID: 'Please enter a valid email address',
    EMAIL_VERIFICATION_REQUIRED: 'Please verify your email address before logging in',
    // ACCOUNT_NOT_FOUND: 'Account not found. Please sign up first.'
  },
  
  // Success messages
  SUCCESS: {
    LOGIN_SUCCESS: 'Login successful!',
    SIGNUP_SUCCESS: 'Account created successfully! Please check your email.',
    VERIFICATION_SUCCESS: 'Email verified successfully! You can now login.',
    PASSWORD_RESET_SENT: 'Password reset email sent!'
  },
  
  // Link
  GO_TO_LOGIN: 'Already have an account? Login',
  // BUTTONS: {
  //   LOGIN: 'Sign In',
  //   SUBMIT: 'Submit',
  //   CONTINUE: 'Continue',
  //   FORGOT_PASSWORD: 'Forgot Password?',
  //   CREATE_ACCOUNT: 'Create New Account',
  //   RESEND_VERIFICATION: 'Resend Verification Email'
  // },
} as const;


// export const DASHBOARD_TEXTS = {
//   WELCOME: 'Welcome back,',
//   NO_NOTIFICATIONS: 'No new notifications',
//   PROFILE_UPDATED: 'Profile updated successfully'
// } as const;

// export const EMAIL_TEXTS = {
//   VERIFICATION_SUBJECT: 'Verify your email address',
//   PASSWORD_RESET_SUBJECT: 'Reset your password'
// } as const;