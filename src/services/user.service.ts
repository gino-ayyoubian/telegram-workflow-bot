import { PostgresUserRepository } from '../repositories/postgres/user.repo.impl.js';

const userRepo = new PostgresUserRepository();

export const userService = {
  async findOrCreate(telegramId: number, username?: string, fullName?: string) {
    let user = await userRepo.findByTelegramId(telegramId);
    if (!user) {
      user = await userRepo.create({ telegramId, username, fullName });
    }
    return user;
  },
  
  async getProfile(telegramId: number) {
    return userRepo.findByTelegramId(telegramId);
  },
  
  async updateProfile(userId: string, data: any) {
    return userRepo.updateProfile(userId, data);
  }
};
