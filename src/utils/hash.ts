import bcrypt from 'bcryptjs';

/**
 * Hash a password using bcrypt
 * @param password - The plain text password to hash
 * @returns The hashed password
 */
export const hashPassword = async (password: string): Promise<string> => {
  const rounds = parseInt(process.env.BCRYPT_ROUNDS || '10');
  return await bcrypt.hash(password, rounds);
};

/**
 * Compare a plain text password with a hashed password
 * @param password - The plain text password
 * @param hash - The hashed password
 * @returns True if the password matches, false otherwise
 */
export const comparePassword = async (password: string, hash: string): Promise<boolean> => {
  return await bcrypt.compare(password, hash);
};
