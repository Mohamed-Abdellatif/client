import { createDefaultPreset } from "ts-jest";

const tsJestTransformCfg = createDefaultPreset().transform;

/** @type {import('jest').Config} */
export default {
  testEnvironment: "jsdom",
  transform: {
    ...tsJestTransformCfg,
    "^.+\\.[tj]sx?$": "babel-jest",
  },
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"],
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
    "^react-i18next$": "<rootDir>/__mocks__/react-i18next.ts",
    // Map apiBaseUrl to the Node version for Jest
    "^../config/apiBaseUrl$": "<rootDir>/src/config/apiBaseUrl.node.ts",
    "^@/config/apiBaseUrl$": "<rootDir>/src/config/apiBaseUrl.node.ts",
    "^src/config/apiBaseUrl$": "<rootDir>/src/config/apiBaseUrl.node.ts"
  },
  setupFiles: ["dotenv/config"],
};
