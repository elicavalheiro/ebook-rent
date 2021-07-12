import axios from "axios";

const httpClient = axios.create({
  timeout: 5000,
});

const authInterceptor = (config: object) => {
  return config;
};

httpClient.interceptors.request.use(authInterceptor);

export default httpClient;
