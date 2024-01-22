export const validUser = (user: { name: string; password: string }) => {
    console.log(user.name.length,user.password.toString.length)
  if (user.name.length >= 4 && user.password.length>=6) {
    return true;
  }

  return false;
};
