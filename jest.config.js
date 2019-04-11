module.exports = {
    clearMocks: true,
    coverageDirectory: 'coverage',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
    roots: ['<rootDir>/packages/'],
    rootDir: '../../',
    testEnvironment: 'jsdom',
    testMatch: ['**/*.(spec|test).(ts|tsx)'],
    verbose: true
};
