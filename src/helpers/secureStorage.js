import SecureLS from 'secure-ls';

const SLS = new SecureLS();

export const setSLS = (id, setData) => SLS.set(id, { data: setData });

export const getSLS = (id) => {
  try {
    return SLS.get(id).data;
  } catch (err) {
    localStorage.clear();
  }
};