const createPlaceHolder = (item) => {
  const placeholder = item.charAt(0).toUpperCase() + item.slice(1, item.length).toLowerCase();
  if ((placeholder === 'First') || (placeholder === 'Last')) {
    return `${placeholder} Name`;
  }
  return placeholder;
};

export default createPlaceHolder;
