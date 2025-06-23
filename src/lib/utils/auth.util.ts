import { pbkdf2Sync, randomBytes } from 'crypto';
import DeviceDetector = require('device-detector-js');
import { customAlphabet } from 'nanoid';

export function passwordValidation(pwd: string, hash: string, salt: string): boolean {
  const verificationHash = pbkdf2Sync(pwd, salt, 10715, 64, 'SHA256').toString('hex');
  return hash === verificationHash;
}

export function hashPwd(pwd: string): { hash: string; salt: string } {
  const salt = randomBytes(16).toString('hex');
  const hash = pbkdf2Sync(pwd, salt, 10715, 64, 'SHA256').toString('hex');
  return { hash, salt };
}

export function getDevice(userAgent: string): DeviceDetector.DeviceDetectorResult {
  const detector = new DeviceDetector();
  const device = detector.parse(userAgent);
  return device;
}

export function generateRandomString(length = 12): string {
  const charSet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789';
  const nanoid = customAlphabet(charSet, length);
  const string = nanoid();
  return string;
}
