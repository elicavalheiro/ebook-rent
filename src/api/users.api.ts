import httpClient from "./index";

export const getAllUsers = () => httpClient.get("/api/users");
