export const loginUser = async (payload) => {

  if (
    payload.email === "admin@test.com" &&
    payload.password === "123456"
  ) {
    return {
      token: "dummy-auth-token",
      user: {
        name: "Admin User",
        email: payload.email,
      },
    };
  }

  throw new Error("Invalid credentials");
};
