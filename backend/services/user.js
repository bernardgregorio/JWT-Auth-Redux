import bcrypt from "bcrypt";
import UserRepository from "../repositories/user.js";
import { createError } from "../utils/errorUtils.js";

class UserService {
  async createUser(data) {
    const userExist = await UserRepository.findUserByUsername(data.username);

    if (userExist) throw createError("User already exists.", 409);

    data.password = await bcrypt.hash(data.password, 10);
    return await UserRepository.createUser(data);
  }

  async findUserByUsername(username) {
    const user = await UserRepository.findUserByUsername(username);

    if (!user) throw createError("User not found", 404);

    return user;
  }

  async findUserByEmail(email) {
    const user = await UserRepository.findUserByEmail(email);

    if (!user) throw createError("User not found", 404);

    return user;
  }

  async findUserById(id) {
    const user = await UserRepository.findUserById(id);

    if (!user) throw createError("User not found", 404);

    return user;
  }

  async getAllUsers() {
    const users = await UserRepository.getAllUsers();

    if (!users) throw createError("User not found", 404);

    return users.map((user) => ({
      id: user._id,
      username: user.username,
      email: user.email,
    }));
  }

  async updateUser(id, data) {
    const user = await UserRepository.updateUser(id, data);

    if (!user) throw createError("User not found", 404);

    return user;
  }

  async deleteUser(id) {
    const user = await UserRepository.deleteUser(id);

    if (!user) throw createError("User not found", 404);

    return user;
  }

  async saveRefreshToken(userId, token) {
    const user = await UserRepository.saveRefreshToken(userId, token);

    if (!user) throw createError("User not found", 404);

    return user;
  }

  async findUserByRefreshToken(token) {
    const user = await UserRepository.findUserByRefreshToken(token);

    if (!user) throw createError("User not found", 404);

    return user;
  }
}

export default new UserService();
