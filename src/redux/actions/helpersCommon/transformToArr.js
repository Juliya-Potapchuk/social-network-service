export const transformToArr = (postsJson) => {
  const options = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  };

  return Object.keys(postsJson || {})
    .map((key) => ({
      ...postsJson[key],
      date: new Date(postsJson[key].timestamp).toLocaleString("ru", options),
      uid: key,
    }))
    .reverse();
};
