import {
  API_ADDRESS,
  API_KEY,
  ApiRoutes,
  GetAccessTokenRequestDTO,
  GetAccessTokenResponseDTO,
} from "@/services";
import axios from "axios";

const authInstance = axios.create({
  baseURL: `${API_ADDRESS}`,
  headers: {
    "avlb-admin-api-key": API_KEY,
  },
});

export class AuthService {
  static setAccessToken(token: string) {
    localStorage.setItem("access_token", token);
    localStorage.setItem("expires_at", String(Date.now() + 1000 * 60 * 60 * 24 * 7));
  }

  static getAccessToken() {
    return localStorage.getItem("access_token");
  }

  static isTokenExpired() {
    const expiresAt = localStorage.getItem("expires_at");
    return expiresAt ? Number(expiresAt) < Date.now() : true;
  }

  static clearTokens() {
    window.localStorage.removeItem("access_token");
    window.localStorage.removeItem("expires_at");
  }

  static async login(dto: GetAccessTokenRequestDTO) {
    try {
      const access_token = (
        await authInstance.post<GetAccessTokenResponseDTO>(ApiRoutes.LOGIN, dto)
      ).data.access_token;
      this.setAccessToken(access_token);
    } catch (e) {
      this.clearTokens();
    }
  }
}
