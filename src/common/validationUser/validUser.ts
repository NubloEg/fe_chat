export const validUser = (user: { name: string; password: string }) => {
  if (user.name.length >= 4 && user.password.length >= 6) {
    return true;
  }

  return false;
};
