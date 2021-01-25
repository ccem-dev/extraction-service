module.exports = {
  preset: 'ts-jest',
  testEnvironment: "node",
  globals: {
    'ts-jest': {
      tsConfig: '<rootDir>/tsconfig.json',
      diagnostics: true,
    },
  },
  moduleFileExtensions: ['ts', 'js'],
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node\_modules/ts-jest"
  },
  testPathIgnorePatterns: ['/node_modules/', '/lib/'],
  testRegex: ".spec.ts$",
  collectCoverage: true,
  collectCoverageFrom: [
    "**/**/**.ts",
    "!**/**/Routers.ts",
    "!**/config/init/**.ts",
    "!**/*.{spec.ts,test.ts,d.ts,js}"
  ],
  coverageDirectory: "./coverage",
  // The paths to modules that run some code to configure or set up the testing environment before each test
  setupFiles: [
    "./tests/setup.test.ts"
  ],
  verbose: true
};
