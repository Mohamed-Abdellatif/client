// __mocks__/react-i18next.ts
export const useTranslation = () => {
    return {
      t: (key: string) => key,
      i18n: {
        changeLanguage: () => Promise.resolve(),
      },
    };
  };
  