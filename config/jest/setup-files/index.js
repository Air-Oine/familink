// require('react-native-mock/mock');
/**
 * Jest mock native dependencies
 */
// jest
//   .mock('react-native-svg', () => ({
//     Svg: 'Svg',
//     G: 'G',
//     Path: 'Path',
//     Polygon: 'Polygon',
//     Circle: 'Circle',
//   }));

// See https://github.com/facebook/jest/issues/2208
jest.mock('Linking', () => ({
  addEventListener: jest.fn(),
  removeEventListener: jest.fn(),
  openURL: jest.fn(),
  canOpenURL: jest.fn(),
  getInitialURL: jest.fn().mockImplementation(value => Promise.resolve(value)),
}));

// See https://github.com/facebook/react-native/issues/11659
jest.mock('ScrollView', () => {
  const RealComponent = require.requireActual('ScrollView');
  class ScrollView extends RealComponent {
  scrollTo = () => {}
  }
  return ScrollView;
});

// See https://github.com/AlexanderZaytsev/react-native-i18n/issues/99
const I18nMock = jest.mock('react-native-i18n', () => {
  return {
    t: jest.fn(translation => translation), // you may have to change this function
    currentLocale: jest.fn(() => 'en'), // I added this line
  };
});

global.I18n = I18nMock;

/**
 * Mocking the global.fetch included in React Native
 */
global.fetch = jest.fn();

/**
 * Helper to mock a success response (only once)
 * @param body {Object}
 */
global.fetch.mockResponseSuccess = (body = {}, status = 200) => {
  global.fetch.mockImplementationOnce(
    () => Promise.resolve({ status, json: () => Promise.resolve(body) }),
  );
};

/**
 * Helper to mock a success response (only once)
 * @param body {Object}
 * @param headers {Map} add headers to the body response
 */
global.fetch.mockResponseSuccessWithHeaders = (body = {}, headers = {}, status = 200) => {
  global.fetch.mockImplementationOnce(() => {
    if (body.headers) {
      // invalid
      process.exit(9);
    }
    return Promise.resolve({
      status,
      headers: {
        map: headers,
      },
      json: () => Promise.resolve(body),
    });
  },
  );
};

/**
 * Helper to mock a failure response (only once)
 */
global.fetch.mockResponseFailure = (error) => {
  global.fetch.mockImplementationOnce(
    () => Promise.reject(error),
  );
};
