export const fetchMathApi = () => {
  const config = {
    headers: {
      Accept: "application/json"
    }
  };

  // Please read about fetch ..........
  return fetch( "https://icanhazdadjoke.com" , config).then((res) => res.json());
};
