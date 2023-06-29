export const findUser = (users, entredUser) => {
  return users.find((user) => user.name === entredUser);
};
