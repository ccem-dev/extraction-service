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
    "!**/*.{spec.ts,test.ts,d.ts,js}"
  ],
  coverageDirectory: "./coverage",
  verbose: true
};
