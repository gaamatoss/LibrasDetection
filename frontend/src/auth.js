export const TOKEN_KEY = '@libras';
export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null;
export const getToken = () => {
  const item = localStorage.getItem(TOKEN_KEY);
  if (item) {
    console.log('item', item);
    return JSON.parse(item);
  }
};
export const login = (token) => {
  console.log(token);
  localStorage.setItem(TOKEN_KEY, JSON.stringify(token));
};
