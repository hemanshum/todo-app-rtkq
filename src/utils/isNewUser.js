export const isNewUser = (users, entredUser) => {
  const result = users.filter((user) => user.name === entredUser);
  return result.length === 0;
};
