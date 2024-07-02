import '@testing-library/jest-dom'

const originalError = console.error.bind(console.error)
beforeAll(() => {
  console.error = (msg) => {
    !msg.toString().includes('Warning: React') && originalError(msg)
  }
})

afterAll(() => {
  console.error = originalError
})

beforeEach(() => {
  Object.defineProperty(window, "matchMedia", {
    writable: true,
    value: jest.fn().mockImplementation((query) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(),
      removeListener: jest.fn(),
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn()
    }))
  })
})
