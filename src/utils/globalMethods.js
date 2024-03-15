export const generateRandomId = (length = 8) => {
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  let randomId = '';
  for (let i = 0; i < length; i++) {
    randomId += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return randomId;
};

export const deserializeStorage = (storage, storageKey) => {
  const response = JSON.parse(storage);
  return JSON.parse(response[storageKey]);
};
export const serializeStorage = storage => {
  return JSON.stringify(storage);
};
