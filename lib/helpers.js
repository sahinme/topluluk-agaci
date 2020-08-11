import { fromPairs } from 'lodash/fp';
import { parseCookies } from 'nookies';

const localStorage = global.localStorage && global.localStorage.removeItem
    ? global.localStorage
    : (function () {
        let store = {};
        return {
            getItem(key) {
                return store[key] || null;
            },
            setItem(key, value) {
                store[key] = value.toString();
            },
            clear() {
                store = {};
            },
            removeItem(key) {
                store = Object.keys(store)
                    .filter(k => key !== k)
                    .reduce((accumulator, currentItem) => {
                        accumulator[currentItem] = store[currentItem];
                        return accumulator;
                    }, {});
            },
        };
    }());

export const readLocalStorage = (key) => {
    if (Array.isArray(key)) {
        return fromPairs(key.map(k => [k, localStorage.getItem(k) && JSON.parse(localStorage.getItem(k))]));
    }
    return localStorage.getItem(key) && JSON.parse(localStorage.getItem(key));
};

export const loadState = (key) => {
    try {
        const serializedState = localStorage.getItem(key);
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (err) {
        return undefined;
    }
};


export const isLoggedWithCookies = (ctx) => {
    const cookies = parseCookies(ctx)
    return cookies && cookies.token && cookies.user;
}


export const writeLocalStorage = (key, value) => {
    const keys = typeof key === 'object' ? key : { [key]: value };
    Object.entries(keys).map(([k, val]) => localStorage.setItem(k, JSON.stringify(val)));
    return keys;
};

export const removeLocalStorage = (key) => {
    const keys = Array.isArray(key) ? key : [key];
    keys.forEach(k => localStorage.removeItem(k));
    return keys;
};

export const clearLocalStorage = () => {
    localStorage.clear();
};

export const getSearchParams = params => Object.keys(params).map((key) => {
    if (typeof (params[key]) !== 'undefined') {
        return `${encodeURIComponent(key)}=${encodeURIComponent(params[key]) ? encodeURIComponent(params[key]) : ''}`;
    }
}).join('&');

export const generateString = () => {
    const name = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    return name;
}

export const isLogged = () => {
    const token = readLocalStorage("token");
    const user = readLocalStorage("user");
    return (token && user);
}

export const getParameterByName = (name, url) => {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

export const htmlToText = (html) => {
    var temp = document.createElement("div");
    temp.innerHTML = html;
    return temp.textContent || temp.innerText || "";
}

export const sitemapXML = data => {
    let projectsXML = "";
    data.map(post => {
        const projectURL = `https://saalla.com/${post.cSlug}/${post.pSlug}`;
        projectsXML += `
        <url>
          <loc>${projectURL}</loc>
        </url>`;
    });

    return `<?xml version="1.0" encoding="UTF-8"?>
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${projectsXML}
      </urlset>`;
};

export const urlify = (text) => {
    var urlRegex = /(https?:\/\/[^\s]+)/g;
    return text.replace(urlRegex, function (url) {
        return '<a href="' + url + '">' + url + '</a>';
    })
}


