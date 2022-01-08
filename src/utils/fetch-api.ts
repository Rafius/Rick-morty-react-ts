export const fetchApi = (url: string) => {
  return Promise.race([
    fetch(url)
      .then((response) => response.json())
      .catch((error) => {
        console.log(error);
      })
  ]);
};

export default fetchApi;
