class pageUlrConfig {
  homePage = `/main`;

  addParams(url, params) {
    let querystring = [];
    let pageUrl = url;
    if (url.includes(`?`)) {
      const split = url.split(`?`);
      pageUrl = split[0];
      const urlParam = split[1];
      if (urlParam.includes(`&`)) {
        urlParam.split(`&`).forEach((v, k) => {
          querystring.push(`${v}${params[k]}`);
        });
      } else {
        querystring.push(`${urlParam}${params[0]}`);
      }
      return `${pageUrl}?${querystring.json(`&`)}`;
    }
    return pageUrl;
  }
}

export default new pageUlrConfig();