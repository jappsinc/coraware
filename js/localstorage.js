let ls = {}; // this is the callup function for localstorage

ls.isLocalStorage = function () {
  try {
    return 'localStorage' in window && window['localStorage'] !== null;
  } catch (e) {
    return false;
  }
}

ls.show = (arg, object) => {
  let elem = ls.getElements(arg);

};

ls.getElements = (arg, object) => {
  if(typeof arg === object) {
    return [arg];
  }else {
    return document.querySelectorAll(arg);
  }
};

ls.showElements = (arg, object) => {
  document.querySelectorAll(object).innerHtml = arg;
};

ls.getStorage = (arg) => {
  if(ls.isLocalStorage() != false) {
    let object = localStorage.getItem(arg);
    if(object) {
      return JSON.parse(object);
    }
    return [];
  }
};

ls.setStorage = (arg,value) => {
  if(ls.isLocalStorage() != false) {
    let object = ls.getStorage(arg);
    if(object.indexOf(arg) > -1 || !arg) {
      return false;
    }
    object.push(value);
    localStorage.setItem(arg, JSON.stringify(object));
    return true;
  }
};

ls.clearStorage = (arg) => {
  localStorage.removeItem(arg);
  return true;
};

ls.checkStorage = (arg) => {
  if (localStorage.getItem(arg) === null) {
    return false;
  }
  return true;
};
