import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { getConnectionToken } from '@nestjs/mongoose';

async function checkDatabase() {
  const app = await NestFactory.create(AppModule);
  
  try {
    const connection = app.get(getConnectionToken());
    
    console.log('🔗 MongoDB Connection Status:', connection.readyState === 1 ? 'Connected' : 'Disconnected');
    console.log('📊 Database Name:', connection.db.databaseName);
    
    // List all collections
    const collections = await connection.db.listCollections().toArray();
    console.log('📁 Collections:');
    collections.forEach(col => {
      console.log(`  - ${col.name}`);
    });
    
    // Check users collection if exists
    const usersCollection = connection.db.collection('users');
    const userCount = await usersCollection.countDocuments();
    console.log(`👥 Total users: ${userCount}`);
    
    if (userCount > 0) {
      const users = await usersCollection.find({}, { password: 0 }).toArray();
      console.log('👤 Users:');
      users.forEach(user => {
        console.log(`  - ${user.email} (Created: ${user.createdAt})`);
      });
    }
    
  } catch (error) {
    console.error('❌ Database check failed:', error.message);
  } finally {
    await app.close();
  }
}

checkDatabase();