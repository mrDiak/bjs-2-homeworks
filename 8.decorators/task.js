"use strict"

function cachingDecoratorNew(func) {
  const cache = [];

  function wrapper(...args) {
    const hash = args.join(',');
    const objectInCache = cache.find(item => item.hash === hash);

    if (objectInCache) {
      console.log("Из кэша: " + objectInCache.result);
      return "Из кэша: " + objectInCache.result;
    };

    let result = func.call(this, ...args);

    if (cache.length > 4) {
      cache.shift();
    }

    cache.push({ hash, result });
    console.log("Вычисляем: " + result);
    return "Вычисляем: " + result;

  }

  return wrapper;
}

function debounceDecoratorNew(func, ms) {
  let timerID = null;
  
  function wrapper (...args) {
    if (!timerID) {
      func.apply(this, args);
      wrapper.count++;
    }

    clearTimeout(timerID);
    timerID = setTimeout(() => {
      func.apply(this, args);
      wrapper.count++;
    }, ms)
    wrapper.allCount++
  }
  
  wrapper.allCount = 0;
  wrapper.count = 0;
  return wrapper
}