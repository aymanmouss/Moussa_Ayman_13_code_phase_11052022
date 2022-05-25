import axios from "axios";

const client = axios.create({
  baseURL: "http://localhost:3001/api/v1",
});

const logout = () => {
  localStorage.removeItem("user");
};

function pushInfo(firstName, lastName, token) {
  return client
    .put(
      `/user/profile`,
      {
        firstName,
        lastName,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
    .then((response) => {
      return response?.data?.body;
    });
}

const AuthService = {
  logout,
  pushInfo,
};
export default AuthService;
