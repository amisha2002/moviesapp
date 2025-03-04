import { authRepository } from '../Login/LoginRepositary';

export class AuthUseCase {
  async signInWithGoogle() {
    return await authRepository.signInWithGoogle();
  }
}

export const authUseCase = new AuthUseCase();
