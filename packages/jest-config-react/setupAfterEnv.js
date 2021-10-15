require('@testing-library/jest-dom/extend-expect');
require('jest-styled-components');
require('regenerator-runtime/runtime');
const nodeCrypto = require('crypto');

const storageMock = () => {
    const storage = {};

    return {
        setItem: (key, value) => {
            storage[key] = value || '';
        },

        getItem: key => {
            return key in storage ? storage[key] : null;
        },

        removeItem: key => {
            delete storage[key];
        }
    };
};

// eslint-disable-next-line no-undef
Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation(query => ({
        matches: true,
        media: query,
        onchange: null,
        addListener: jest.fn(),
        removeListener: jest.fn(),
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn()
    }))
});

/* eslint-disable */
window.localStorage = storageMock();
window.HTMLElement.prototype.scrollIntoView = jest.fn();
window.crypto = {
    getRandomValues: function (buffer) {
        return nodeCrypto.randomFillSync(buffer);
    }
};

const originalError = console.error;
beforeAll(() => {
    console.error = (...args) => {
        if (/Warning/.test(args[0])) {
            return;
        }
        originalError.call(console, ...args);
    };
    const { getComputedStyle } = window;
    window.getComputedStyle = elt => getComputedStyle(elt);
});

afterAll(() => {
    console.error = originalError;
});
