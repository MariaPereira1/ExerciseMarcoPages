module.exports = {
  testEnvironment: "jsdom",
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(js?|jsx?)$",
  transform: {
    "^.+\\.[t|j]sx?$": "babel-jest",
    "\\.(jpg|jpeg|png|gif|webp|svg)$": "jest-transform-file"
  },
  moduleFileExtensions: ["js", "json", "jsx", "node"],
  modulePaths: ["src"],
  moduleDirectories: ["node_modules", "src"],
  setupFilesAfterEnv: ["<rootDir>/src/jest-setup.js"],
  clearMocks: true
};
