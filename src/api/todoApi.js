export const getTodoValues = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(123);
    }, 1000);
  });
};
