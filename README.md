# insight-42-js-utils.js

> **The Ultimate Collection of 42 Essential JavaScript Utility Functions**  
> A comprehensive toolkit for modern web development

## 🚀 Why These 42 Functions?

Stop Googling the same solutions over and over. This collection contains battle-tested utility functions that every JavaScript developer needs. From debouncing user input to handling geolocation, these utilities solve 90% of common development challenges.

## 📦 Installation & Usage

```javascript
// Import specific functions
import { debounce, formatDate, copyToClipboard } from './insight-42-js-utils.js';

// Import everything
import * as utils from './insight-42-js-utils.js';

// Use in your code
const handleSearch = debounce((query) => searchAPI(query), 300);
const formattedDate = formatDate('2024-04-22'); // "Apr 22, 2024"
```

## 📋 Complete Function List

| Category | Functions | Count |
|----------|-----------|-------|
| 🔁 **Core Utilities** | debounce, throttle, sleep, memoize | 4 |
| 📅 **Date & Time** | formatDate, timeAgo, addDays, isWeekend | 4 |
| 🎯 **Data Manipulation** | deepClone, groupBy, uniqueArray, getNestedProperty | 4 |
| ✅ **Validation** | isEmail, isURL, formatPhone, isEmpty | 4 |
| 🧪 **Type Checking** | isArray, isObject, isFunction | 3 |
| 🎨 **String & Formatting** | capitalize, slugify, truncate, formatCurrency | 4 |
| 📱 **Browser & Device** | isMobile, copyToClipboard, downloadFile | 3 |
| 🌐 **URL & Navigation** | getUrlParams, buildQueryString, scrollToElement | 3 |
| 💾 **Storage** | safeJsonParse, setStorageWithExpiry, getStorageWithExpiry | 3 |
| 🎬 **Animation & UI** | easeInOut, classNames, randomColor | 3 |
| 🌍 **Geolocation** | getUserLocation, watchUserLocation, stopWatchingLocation | 3 |
| ⚡ **Performance** | lazyLoad, calculateReadingTime, clamp | 3 |
| 🔧 **Development** | generateId, retryAsync | 2 |

---

## 🔥 Quick Examples

### 🔁 Debounce - Stop Over-Triggering Events
```javascript
import { debounce } from './insight-42-js-utils.js';

// Search that waits for user to stop typing
const searchHandler = debounce((query) => {
  console.log('Searching for:', query);
  // API call here
}, 400);

input.addEventListener('input', (e) => searchHandler(e.target.value));
```

### 📅 Date Formatting - Human-Readable Dates
```javascript
import { formatDate, timeAgo } from './insight-42-js-utils.js';

const date = formatDate('2024-04-22'); // "Apr 22, 2024"
const relative = timeAgo('2024-06-15T10:30:00Z'); // "1 day ago"

// Perfect for dashboards, comments, receipts
```

### 🎯 Safe Object Access - No More Errors
```javascript
import { getNestedProperty } from './insight-42-js-utils.js';

const user = { profile: { personal: { name: 'John' } } };
const name = getNestedProperty(user, 'profile.personal.name', 'Unknown');
// No more "Cannot read property of undefined" errors!
```

### 🧩 Copy to Clipboard - User-Friendly Sharing
```javascript
import { copyToClipboard } from './insight-42-js-utils.js';

async function shareLink() {
  const success = await copyToClipboard(window.location.href);
  if (success) {
    showToast('Link copied!');
  }
}
```

### 📦 Smart Form Validation
```javascript
import { isEmail, formatPhone, isEmpty } from './insight-42-js-utils.js';

function validateForm(data) {
  const errors = {};
  
  if (!isEmail(data.email)) {
    errors.email = 'Invalid email format';
  }
  
  if (isEmpty(errors)) {
    submitForm(data);
  }
  
  return errors;
}
```

---

## 🎨 Real-World Use Cases

### 🏪 E-Commerce Product Card
```javascript
import { 
  formatCurrency, 
  truncate, 
  timeAgo, 
  copyToClipboard 
} from './insight-42-js-utils.js';

function ProductCard({ product }) {
  return `
    <div class="product-card">
      <h3>${truncate(product.title, 50)}</h3>
      <p class="price">${formatCurrency(product.price)}</p>
      <p class="description">${truncate(product.description, 120)}</p>
      <small>Added ${timeAgo(product.createdAt)}</small>
      <button onclick="copyToClipboard('${product.url}')">
        Share Product
      </button>
    </div>
  `;
}
```

### 🗺️ Location-Based App
```javascript
import { 
  getUserLocation, 
  watchUserLocation, 
  formatDate 
} from './insight-42-js-utils.js';

class DeliveryTracker {
  async startTracking() {
    try {
      // Get initial location
      const location = await getUserLocation();
      this.updateMap(location);
      
      // Watch for location changes
      this.watchId = watchUserLocation(
        (newLocation) => this.updateDeliveryRoute(newLocation),
        (error) => this.handleLocationError(error)
      );
    } catch (error) {
      console.error('Location failed:', error.message);
    }
  }
  
  stopTracking() {
    if (this.watchId) {
      stopWatchingLocation(this.watchId);
    }
  }
}
```

### 📊 Data Dashboard
```javascript
import { 
  groupBy, 
  formatCurrency, 
  calculateReadingTime,
  memoize 
} from './insight-42-js-utils.js';

// Expensive calculation cached with memoize
const calculateMetrics = memoize((salesData) => {
  const byRegion = groupBy(salesData, 'region');
  const totalRevenue = salesData.reduce((sum, sale) => sum + sale.amount, 0);
  
  return {
    byRegion,
    totalRevenue: formatCurrency(totalRevenue),
    reportReadTime: calculateReadingTime(generateReport(salesData))
  };
});
```

### 🎬 Smooth UI Animations
```javascript
import { easeInOut, scrollToElement, sleep } from './insight-42-js-utils.js';

async function smoothTransition() {
  // Scroll to section with custom easing
  scrollToElement('#features', 80);
  
  // Wait for scroll to complete
  await sleep(800);
  
  // Trigger entrance animations
  animateElements();
}

function animateProgress(element, targetWidth) {
  let progress = 0;
  const animate = () => {
    progress += 0.02;
    const easedProgress = easeInOut(progress);
    element.style.width = `${targetWidth * easedProgress}%`;
    
    if (progress < 1) {
      requestAnimationFrame(animate);
    }
  };
  animate();
}
```

---

## 🛠️ Advanced Patterns

### 🔄 Robust API Calls
```javascript
import { retryAsync, buildQueryString } from './insight-42-js-utils.js';

async function fetchUserData(userId, filters = {}) {
  const queryString = buildQueryString({ userId, ...filters });
  
  return retryAsync(async () => {
    const response = await fetch(`/api/users?${queryString}`);
    if (!response.ok) throw new Error('API Error');
    return response.json();
  }, 3, 1000); // Retry 3 times with exponential backoff
}
```

### 💾 Smart Caching System
```javascript
import { 
  setStorageWithExpiry, 
  getStorageWithExpiry, 
  safeJsonParse 
} from './insight-42-js-utils.js';

class CacheManager {
  static set(key, data, hours = 24) {
    setStorageWithExpiry(key, data, hours);
  }
  
  static get(key) {
    return getStorageWithExpiry(key);
  }
  
  static getOrFetch(key, fetchFunction, hours = 24) {
    const cached = this.get(key);
    if (cached) return Promise.resolve(cached);
    
    return fetchFunction().then(data => {
      this.set(key, data, hours);
      return data;
    });
  }
}

// Usage
const userData = await CacheManager.getOrFetch(
  'user-123',
  () => fetchUserData(123),
  2 // Cache for 2 hours
);
```

### ⚡ Performance Optimization
```javascript
import { 
  throttle, 
  debounce, 
  lazyLoad, 
  memoize 
} from './insight-42-js-utils.js';

// Optimize scroll performance
const handleScroll = throttle(() => {
  updateScrollProgress();
  checkElementsInView();
}, 100);

// Optimize search
const handleSearch = debounce((query) => {
  performSearch(query);
}, 300);

// Optimize expensive calculations
const expensiveCalc = memoize((data) => {
  return complexDataTransformation(data);
});

// Optimize image loading
document.addEventListener('DOMContentLoaded', () => {
  lazyLoad('img[data-src]', '100px');
});
```

---

## 🎯 React/Vue Integration

### React Hook Example
```javascript
import { debounce, getUserLocation } from './insight-42-js-utils.js';
import { useState, useEffect, useCallback } from 'react';

function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);
  
  useEffect(() => {
    const handler = debounce(() => setDebouncedValue(value), delay);
    handler();
  }, [value, delay]);
  
  return debouncedValue;
}

function useLocation() {
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);
  
  const getLocation = useCallback(async () => {
    try {
      const loc = await getUserLocation();
      setLocation(loc);
      setError(null);
    } catch (err) {
      setError(err.message);
    }
  }, []);
  
  return { location, error, getLocation };
}
```

### Vue Composable Example
```javascript
import { ref, computed } from 'vue';
import { formatCurrency, timeAgo, truncate } from './insight-42-js-utils.js';

export function useFormatting() {
  const formatPrice = (amount, currency = 'USD') => {
    return formatCurrency(amount, currency);
  };
  
  const formatTime = (date) => {
    return timeAgo(date);
  };
  
  const formatText = (text, length = 100) => {
    return truncate(text, length);
  };
  
  return {
    formatPrice,
    formatTime,
    formatText
  };
}
```

---

## 📁 Project Structure

```
your-project/
├── utils/
│   ├── insight-42-js-utils.js    # Main utility file
│   ├── constants.js              # Your app constants
│   └── helpers.js                # App-specific helpers
├── components/
├── pages/
└── README.md
```

Or split into modules:
```
utils/
├── core/
│   ├── debounce.js
│   ├── throttle.js
│   └── index.js
├── validation/
│   ├── email.js
│   ├── url.js
│   └── index.js
└── index.js                      # Re-exports everything
```

---

## 🧪 Testing Examples

```javascript
// Example tests using Jest
import { 
  debounce, 
  formatDate, 
  isEmail, 
  slugify 
} from './insight-42-js-utils.js';

describe('Utility Functions', () => {
  test('debounce delays function execution', (done) => {
    let callCount = 0;
    const debouncedFn = debounce(() => callCount++, 100);
    
    debouncedFn();
    debouncedFn();
    debouncedFn();
    
    setTimeout(() => {
      expect(callCount).toBe(1);
      done();
    }, 150);
  });
  
  test('formatDate returns correct format', () => {
    const result = formatDate('2024-04-22');
    expect(result).toBe('Apr 22, 2024');
  });
  
  test('isEmail validates correctly', () => {
    expect(isEmail('test@example.com')).toBe(true);
    expect(isEmail('invalid-email')).toBe(false);
  });
  
  test('slugify creates URL-friendly strings', () => {
    expect(slugify('Hello World! 123')).toBe('hello-world-123');
  });
});
```

---

## 🤝 Contributing

Found a bug or have a suggestion? Here's how you can help:

1. **Report Issues**: Open an issue with a clear description
2. **Suggest Functions**: Propose new utilities that solve common problems
3. **Improve Documentation**: Help make examples clearer
4. **Performance**: Suggest optimizations

### Guidelines for New Utilities
- Must solve a common, recurring problem
- Should be framework-agnostic
- Include proper error handling
- Add JSDoc documentation
- Provide usage examples

---

## 📄 License

MIT License - Feel free to use in personal and commercial projects.

---

## ⭐ Why "42"?

In Douglas Adams' "The Hitchhiker's Guide to the Galaxy," 42 is the "Answer to the Ultimate Question of Life, the Universe, and Everything." We believe these 42 JavaScript utilities are the answer to most of your development challenges! 🚀

---

**Happy coding!** 🎉 Peter
