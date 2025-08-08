import mongoose, { Document, Schema } from 'mongoose';

export interface IUser extends Document {
  id: string;
  username: string;
  email: string;
  passwordHash: string;
  role: 'admin' | 'user' | 'cashier';
  createdAt: Date;
  isActive: boolean;
  isVerified: boolean;
  verificationCode?: string;
  verificationCodeExpired?: Date;
  resetToken?: string;
  resetTokenExpiry?: Date;
}

const userSchema = new Schema<IUser>({
  id: { type: String, required: true, unique: true },
  username: { type: String, required: true, trim: true },
  email: { type: String, required: true, unique: true, trim: true, lowercase: true },
  passwordHash: { type: String, required: true },
  role: { type: String, enum: ['admin', 'user', 'cashier'], default: 'user' },
  createdAt: { type: Date, default: Date.now },
  isActive: { type: Boolean, default: true },
  isVerified: { type: Boolean, default: false },
  verificationCode: { type: String },
  verificationCodeExpired: { type: Date },
  resetToken: { type: String, default: null },
  resetTokenExpiry: { type: Date, default: null },
});

const User = mongoose.model<IUser>('User', userSchema);

export default User;
