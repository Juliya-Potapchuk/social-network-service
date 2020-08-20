export const smartFetch = async (url, obj) => {
  const response = await (obj ? fetch(url, obj) : fetch(url));
  const parsedResponse = await response.json();
  if (response.status !== 200) {
    throw new Error(parsedResponse.error.message);
  }
  return parsedResponse;
};
