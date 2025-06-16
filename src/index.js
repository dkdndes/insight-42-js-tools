/**
 * Essential JavaScript Utility Functions
 * A collection of reusable helper functions for common tasks
 */

/**
 * 🔁 Debounce Function
 * Prevents over-triggering on input changes or scroll events
 * @param {Function} func - The function to debounce
 * @param {number} delay - Delay in milliseconds (default: 300)
 * @returns {Function} Debounced function
 */
export function debounce(func, delay = 300) {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), delay);
  };
}

/**
 * 🕒 Format Date to Readable String
 * Convert date string to human-readable format
 * @param {string} dateStr - Date string to format
 * @param {string} locale - Locale for formatting (default: "en-US")
 * @returns {string} Formatted date string
 */
export function formatDate(dateStr, locale = "en-US") {
  return new Date(dateStr).toLocaleDateString(locale, {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

/**
 * 🎯 ClassNames Utility
 * Conditionally join CSS class names
 * @param {...any} args - Class names or conditional expressions
 * @returns {string} Joined class names
 */
export function classNames(...args) {
  return args.filter(Boolean).join(" ");
}

/**
 * 📦 Safe JSON Parse
 * Parse JSON string with fallback for malformed data
 * @param {string} str - JSON string to parse
 * @param {any} fallback - Fallback value if parsing fails (default: {})
 * @returns {any} Parsed object or fallback
 */
export function safeJsonParse(str, fallback = {}) {
  try {
    return JSON.parse(str);
  } catch {
    return fallback;
  }
}

/**
 * 🧪 IsEmpty Object
 * Check if object is empty (handles edge cases better than Object.keys)
 * @param {any} obj - Object to check
 * @returns {boolean} True if object is empty
 */
export function isEmpty(obj) {
  return obj && Object.keys(obj).length === 0 && obj.constructor === Object;
}

/**
 * 🧩 Copy to Clipboard
 * Copy text to user's clipboard
 * @param {string} text - Text to copy
 * @returns {Promise<boolean>} True if successful, false otherwise
 */
export async function copyToClipboard(text) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch (err) {
    console.error("Copy failed:", err);
    return false;
  }
}

/**
 * 🔒 Capitalize First Letter
 * Capitalize the first letter of a string
 * @param {string} str - String to capitalize
 * @returns {string} String with first letter capitalized
 */
export function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * 🧠 Sleep (Wait) Helper
 * Create a delay/pause in async operations
 * @param {number} ms - Milliseconds to wait
 * @returns {Promise} Promise that resolves after specified time
 */
export function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * 🧰 Remove Duplicates From Array
 * Remove duplicate values from an array
 * @param {Array} arr - Array to deduplicate
 * @returns {Array} Array with unique values only
 */
export function uniqueArray(arr) {
  return [...new Set(arr)];
}

/**
 * 📁 Download Any File from URL
 * Trigger file download from a URL
 * @param {string} url - URL of file to download
 * @param {string} filename - Desired filename for download
 */
export function downloadFile(url, filename) {
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

/**
 * 🎲 Generate Random ID
 * Create random string IDs for temporary elements, keys, etc.
 * @param {number} length - Length of ID (default: 8)
 * @returns {string} Random alphanumeric string
 */
export function generateId(length = 8) {
  return Math.random().toString(36).substring(2, length + 2);
}

/**
 * 🔗 Slugify String
 * Convert string to URL-friendly slug
 * @param {string} str - String to slugify
 * @returns {string} URL-friendly slug
 */
export function slugify(str) {
  return str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/**
 * ✂️ Truncate Text
 * Truncate text to specified length with ellipsis
 * @param {string} text - Text to truncate
 * @param {number} length - Maximum length (default: 100)
 * @returns {string} Truncated text
 */
export function truncate(text, length = 100) {
  return text.length > length ? text.substring(0, length) + '...' : text;
}

/**
 * 🧩 Deep Clone Object
 * Create deep copy of object (handles nested objects/arrays)
 * @param {any} obj - Object to clone
 * @returns {any} Deep cloned object
 */
export function deepClone(obj) {
  if (obj === null || typeof obj !== 'object') return obj;
  if (obj instanceof Date) return new Date(obj.getTime());
  if (obj instanceof Array) return obj.map(item => deepClone(item));
  if (typeof obj === 'object') {
    const cloned = {};
    Object.keys(obj).forEach(key => {
      cloned[key] = deepClone(obj[key]);
    });
    return cloned;
  }
}

/**
 * 🎯 Get Nested Property Safely
 * Access nested object properties without errors
 * @param {Object} obj - Object to access
 * @param {string} path - Dot notation path (e.g., 'user.profile.name')
 * @param {any} defaultValue - Default if path doesn't exist
 * @returns {any} Property value or default
 */
export function getNestedProperty(obj, path, defaultValue = undefined) {
  return path.split('.').reduce((current, key) => current?.[key], obj) ?? defaultValue;
}

/**
 * 📊 Group Array By Property
 * Group array items by a specific property
 * @param {Array} array - Array to group
 * @param {string} key - Property to group by
 * @returns {Object} Grouped object
 */
export function groupBy(array, key) {
  return array.reduce((groups, item) => {
    const group = item[key];
    groups[group] = groups[group] || [];
    groups[group].push(item);
    return groups;
  }, {});
}

/**
 * 📱 Detect Mobile Device
 * Check if user is on mobile device
 * @returns {boolean} True if mobile device
 */
export function isMobile() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
}

/**
 * 🔍 Get URL Parameters
 * Parse URL search parameters into object
 * @param {string} url - URL to parse (default: current URL)
 * @returns {Object} Parameters object
 */
export function getUrlParams(url = window.location.search) {
  return Object.fromEntries(new URLSearchParams(url));
}

/**
 * 💰 Format Currency
 * Format number as currency string
 * @param {number} amount - Amount to format
 * @param {string} currency - Currency code (default: 'USD')
 * @param {string} locale - Locale for formatting (default: 'en-US')
 * @returns {string} Formatted currency string
 */
export function formatCurrency(amount, currency = 'USD', locale = 'en-US') {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
  }).format(amount);
}

/**
 * 🏃 Throttle Function
 * Limit function execution to once per specified interval
 * @param {Function} func - Function to throttle
 * @param {number} limit - Time limit in milliseconds
 * @returns {Function} Throttled function
 */
export function throttle(func, limit) {
  let inThrottle;
  return function(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

/**
 * 📦 Local Storage with Expiry
 * Store data in localStorage with expiration time
 * @param {string} key - Storage key
 * @param {any} value - Value to store
 * @param {number} hours - Hours until expiry (default: 24)
 */
export function setStorageWithExpiry(key, value, hours = 24) {
  const now = new Date();
  const item = {
    value: value,
    expiry: now.getTime() + hours * 60 * 60 * 1000,
  };
  localStorage.setItem(key, JSON.stringify(item));
}

/**
 * 📦 Get Storage with Expiry Check
 * Retrieve data from localStorage, checking if expired
 * @param {string} key - Storage key
 * @returns {any} Stored value or null if expired/missing
 */
export function getStorageWithExpiry(key) {
  const itemStr = localStorage.getItem(key);
  if (!itemStr) return null;
  
  const item = safeJsonParse(itemStr);
  const now = new Date();
  
  if (now.getTime() > item.expiry) {
    localStorage.removeItem(key);
    return null;
  }
  return item.value;
}

/**
 * 📏 Clamp Number
 * Constrain number between min and max values
 * @param {number} num - Number to clamp
 * @param {number} min - Minimum value
 * @param {number} max - Maximum value
 * @returns {number} Clamped number
 */
export function clamp(num, min, max) {
  return Math.min(Math.max(num, min), max);
}

/**
 * 🎨 Generate Random Color
 * Generate random hex color
 * @returns {string} Random hex color (e.g., '#ff5733')
 */
export function randomColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
}

/**
 * 📐 Calculate Reading Time
 * Estimate reading time for text content
 * @param {string} text - Text to analyze
 * @param {number} wpm - Words per minute (default: 200)
 * @returns {number} Reading time in minutes
 */
export function calculateReadingTime(text, wpm = 200) {
  const words = text.trim().split(/\s+/).length;
  return Math.ceil(words / wpm);
}

// ===========================================
// VALIDATION HELPERS
// ===========================================

/**
 * ✉️ Validate Email Address
 * Check if string is a valid email format
 * @param {string} email - Email to validate
 * @returns {boolean} True if valid email
 */
export function isEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * 🔗 Validate URL
 * Check if string is a valid URL
 * @param {string} url - URL to validate
 * @returns {boolean} True if valid URL
 */
export function isURL(url) {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}

/**
 * 📞 Format Phone Number
 * Format phone number to standard US format
 * @param {string} phone - Phone number to format
 * @returns {string} Formatted phone number
 */
export function formatPhone(phone) {
  const cleaned = phone.replace(/\D/g, '');
  const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
  if (match) {
    return `(${match[1]}) ${match[2]}-${match[3]}`;
  }
  return phone;
}

// ===========================================
// DATE UTILITIES
// ===========================================

/**
 * ⏰ Time Ago
 * Get human-readable relative time (e.g., "2 hours ago")
 * @param {Date|string} date - Date to compare
 * @returns {string} Human-readable time difference
 */
export function timeAgo(date) {
  const now = new Date();
  const target = new Date(date);
  const diffInSeconds = Math.floor((now - target) / 1000);

  const intervals = [
    { label: 'year', seconds: 31536000 },
    { label: 'month', seconds: 2592000 },
    { label: 'day', seconds: 86400 },
    { label: 'hour', seconds: 3600 },
    { label: 'minute', seconds: 60 },
    { label: 'second', seconds: 1 }
  ];

  for (const interval of intervals) {
    const count = Math.floor(diffInSeconds / interval.seconds);
    if (count > 0) {
      return `${count} ${interval.label}${count !== 1 ? 's' : ''} ago`;
    }
  }
  return 'just now';
}

/**
 * 📅 Add Days to Date
 * Add specified number of days to a date
 * @param {Date} date - Starting date
 * @param {number} days - Number of days to add (can be negative)
 * @returns {Date} New date with days added
 */
export function addDays(date, days) {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}

/**
 * 🏖️ Is Weekend
 * Check if date falls on weekend (Saturday or Sunday)
 * @param {Date} date - Date to check
 * @returns {boolean} True if weekend
 */
export function isWeekend(date) {
  const day = date.getDay();
  return day === 0 || day === 6; // Sunday = 0, Saturday = 6
}

// ===========================================
// TYPE CHECKING
// ===========================================

/**
 * 📋 Is Array
 * Check if value is an array
 * @param {any} value - Value to check
 * @returns {boolean} True if array
 */
export function isArray(value) {
  return Array.isArray(value);
}

/**
 * 📦 Is Object
 * Check if value is a plain object (not array, null, etc.)
 * @param {any} value - Value to check
 * @returns {boolean} True if plain object
 */
export function isObject(value) {
  return value !== null && typeof value === 'object' && !Array.isArray(value);
}

/**
 * ⚙️ Is Function
 * Check if value is a function
 * @param {any} value - Value to check
 * @returns {boolean} True if function
 */
export function isFunction(value) {
  return typeof value === 'function';
}

// ===========================================
// ANIMATION HELPERS
// ===========================================

/**
 * 🌊 Ease In Out
 * Smooth easing function for animations
 * @param {number} t - Time progress (0-1)
 * @returns {number} Eased value (0-1)
 */
export function easeInOut(t) {
  return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
}

/**
 * 📍 Scroll to Element
 * Smoothly scroll to element with optional offset
 * @param {string|Element} element - Element or selector
 * @param {number} offset - Offset from top in pixels (default: 0)
 * @param {string} behavior - Scroll behavior (default: 'smooth')
 */
export function scrollToElement(element, offset = 0, behavior = 'smooth') {
  const target = typeof element === 'string' ? document.querySelector(element) : element;
  if (!target) return;
  
  const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;
  
  window.scrollTo({
    top: targetPosition,
    behavior: behavior
  });
}

// ===========================================
// API UTILITIES
// ===========================================

/**
 * 🔄 Retry Async Function
 * Retry async function with exponential backoff
 * @param {Function} fn - Async function to retry
 * @param {number} retries - Number of retry attempts (default: 3)
 * @param {number} delay - Initial delay in ms (default: 1000)
 * @returns {Promise} Promise that resolves with function result
 */
export async function retryAsync(fn, retries = 3, delay = 1000) {
  try {
    return await fn();
  } catch (error) {
    if (retries > 0) {
      await sleep(delay);
      return retryAsync(fn, retries - 1, delay * 2); // Exponential backoff
    }
    throw error;
  }
}

/**
 * 🔗 Build Query String
 * Convert object to URL query string
 * @param {Object} params - Parameters object
 * @returns {string} Query string (without leading ?)
 */
export function buildQueryString(params) {
  return Object.entries(params)
    .filter(([key, value]) => value !== null && value !== undefined && value !== '')
    .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
    .join('&');
}

// ===========================================
// PERFORMANCE
// ===========================================

/**
 * 🧠 Memoize Function
 * Cache function results to avoid repeated calculations
 * @param {Function} fn - Function to memoize
 * @returns {Function} Memoized function
 */
export function memoize(fn) {
  const cache = new Map();
  return (...args) => {
    const key = JSON.stringify(args);
    if (cache.has(key)) {
      return cache.get(key);
    }
    const result = fn(...args);
    cache.set(key, result);
    return result;
  };
}

/**
 * ⚡ Lazy Load Images
 * Lazy load images when they enter viewport
 * @param {string} selector - CSS selector for images to lazy load
 * @param {number} rootMargin - Margin around viewport (default: '50px')
 */
export function lazyLoad(selector = 'img[data-src]', rootMargin = '50px') {
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.classList.remove('lazy');
          observer.unobserve(img);
        }
      });
    }, { rootMargin });

    document.querySelectorAll(selector).forEach(img => imageObserver.observe(img));
  }
}

// ===========================================
// GEOLOCATION & BROWSER APIs
// ===========================================

/**
 * 📍 Get User Location
 * Get user's current location using Promise-based geolocation
 * @param {Object} options - Geolocation options
 * @returns {Promise<Object>} Promise resolving to {latitude, longitude, accuracy}
 */
export function getUserLocation(options = {}) {
  const defaultOptions = {
    enableHighAccuracy: true,
    timeout: 10000,
    maximumAge: 300000 // 5 minutes
  };

  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject(new Error('Geolocation is not supported by this browser'));
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        resolve({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          accuracy: position.coords.accuracy,
          altitude: position.coords.altitude,
          heading: position.coords.heading,
          speed: position.coords.speed,
          timestamp: position.timestamp
        });
      },
      (error) => {
        let message = 'Unable to retrieve location';
        switch (error.code) {
          case error.PERMISSION_DENIED:
            message = 'Location access denied by user';
            break;
          case error.POSITION_UNAVAILABLE:
            message = 'Location information unavailable';
            break;
          case error.TIMEOUT:
            message = 'Location request timed out';
            break;
        }
        reject(new Error(message));
      },
      { ...defaultOptions, ...options }
    );
  });
}

/**
 * 🌍 Watch User Location
 * Continuously watch user's location changes
 * @param {Function} callback - Callback function for location updates
 * @param {Function} errorCallback - Callback function for errors
 * @param {Object} options - Geolocation options
 * @returns {number} Watch ID for clearing the watch
 */
export function watchUserLocation(callback, errorCallback, options = {}) {
  const defaultOptions = {
    enableHighAccuracy: true,
    timeout: 10000,
    maximumAge: 60000 // 1 minute
  };

  if (!navigator.geolocation) {
    errorCallback?.(new Error('Geolocation is not supported'));
    return null;
  }

  return navigator.geolocation.watchPosition(
    (position) => {
      callback({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        accuracy: position.coords.accuracy,
        timestamp: position.timestamp
      });
    },
    (error) => {
      let message = 'Unable to watch location';
      switch (error.code) {
        case error.PERMISSION_DENIED:
          message = 'Location access denied';
          break;
        case error.POSITION_UNAVAILABLE:
          message = 'Location unavailable';
          break;
        case error.TIMEOUT:
          message = 'Location timeout';
          break;
      }
      errorCallback?.(new Error(message));
    },
    { ...defaultOptions, ...options }
  );
}

/**
 * 🛑 Stop Watching Location
 * Clear geolocation watch
 * @param {number} watchId - Watch ID returned from watchUserLocation
 */
export function stopWatchingLocation(watchId) {
  if (watchId && navigator.geolocation) {
    navigator.geolocation.clearWatch(watchId);
  }
}
