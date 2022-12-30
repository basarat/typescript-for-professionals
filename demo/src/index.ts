export const LoginMode = {
  device: 'device',
  email: 'email',
  social: 'social',
} as const;

export type LoginMode = keyof typeof LoginMode;

export function initiateLogin(mode: LoginMode) {
  // ... 
}

initiateLogin(LoginMode.device);

initiateLogin('device');

Object.keys(LoginMode); // ['device', 'email', 'social']