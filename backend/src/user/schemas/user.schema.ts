import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema({
  timestamps: true, // This will add createdAt and updatedAt automatically
})
export class User {
  @Prop({ 
    required: true, 
    unique: true,
    lowercase: true,
    trim: true,
  })
  email: string;

  @Prop({ 
    required: true,
    minlength: 6,
  })
  password: string;

  @Prop({ 
    default: Date.now 
  })
  createdAt: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);