const getCookieValue = (name: string): string | undefined => {

  return document.cookie.split(';')
    .map(cookie => cookie.trim())
    .find(cookie => cookie.startsWith(`${name}=`))
    ?.split('=')[1];
};

export default getCookieValue;
