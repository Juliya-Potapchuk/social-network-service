export const checkAccessToken = () => {
  const expiresInAccessToken = localStorageGet("expires_in_access_token");
  return Date.now() >= expiresInAccessToken;
};

export const localStorageSet = (flag, obj) => {
  if (flag === "access_and_refresh_tokens") {
    const { expiresIn, accessToken, refreshToken } = obj;
    const expiresInAccessToken = expiresIn * 1000 + Date.now();

    localStorage.setItem("access_token", accessToken);
    localStorage.setItem("expires_in_access_token", expiresInAccessToken);
    localStorage.setItem("refresh_token", refreshToken);
  }
};

export const localStorageGet = (flag) => {
  if (flag === "access_token") {
    const accessToken = localStorage.getItem("access_token");
    return accessToken;
  }

  if (flag === "refresh_token") {
    const refreshToken = localStorage.getItem("refresh_token");
    return refreshToken;
  }

  if ((flag = "expires_in_access_token")) {
    const expiresInAccessToken = localStorage.getItem(
      "expires_in_access_token"
    );
    return expiresInAccessToken;
  }
};

