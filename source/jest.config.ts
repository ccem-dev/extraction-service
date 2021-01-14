console.log()

module.exports = {
  moduleFileExtensions: ['ts', 'tsx'],
  testMatch: [ "**/tests/**/*.ts?(x)" ],
  testRegex: [
    "(**/tests/.*|(\\.|/)(test|-spec))\\.[jt]sx?$"
  ],
  collectCoverage: true,
  transformIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/dist/'
  ],
  transform: {
    // '^.+\\.vue$': 'vue-jest',
    // '.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
    '^.+\\.(ts|tsx)?$': 'babel-jest'
  },
  // moduleNameMapper: {
  //   '^@/(.*)$': '<rootDir>/src/$1'
  // },
  setupFilesAfterEnv: ["jest-extended"]
};