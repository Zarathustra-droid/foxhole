const CACHE_EXPIRATION_TIME = 3600000; // 1 hour in milliseconds

// Function to check if the cached data is still valid
export function isCacheValid(CACHE_KEY) {
  const cachedData = localStorage.getItem(CACHE_KEY);
  
  if (!cachedData) {
    return false;  // No cached data
  }

  const parsedData = JSON.parse(cachedData);
  const cacheTime = parsedData.timestamp;

  if (Date.now() - cacheTime > CACHE_EXPIRATION_TIME) {
    return false;  // Cache expired
  }

  return true;  // Cache is still valid
}

// Function to get data, either from cache or API
export function getDataFromCacheOrAPI(url, CACHE_KEY) {
  if (isCacheValid(CACHE_KEY)) {
    const cachedData = JSON.parse(localStorage.getItem(CACHE_KEY));
    console.log('Using cached data:', cachedData.data);
    return Promise.resolve(cachedData.data);  // Return cached data as resolved promise
  }

  // If cache is invalid, fetch new data from the API
  return fetch(url)
    .then(response => response.json())
    .then(data => {
      // Store data in localStorage with a timestamp
      const cacheData = {
        timestamp: Date.now(),
        data: data
      };
      localStorage.setItem(CACHE_KEY, JSON.stringify(cacheData));
      console.log('Fetched new data:', data);
      return data;
    })
    .catch(err => {
      console.error('Error fetching data:', err);
      return null;  // In case of error, return null or handle error gracefully
    });
}

// Function to clear the cache (optional)
export function clearCache(CACHE_KEY) {
  localStorage.removeItem(CACHE_KEY);
}
