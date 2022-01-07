export const fetchApi = (url: string) => {
  return Promise.race([fetch(url).then((response) => response.json())]);
};

export default fetchApi;
