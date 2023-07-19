const getStaticImg = (type: number) => {
  switch (type) {
    case 0: {
      return require.resolve("../public/not-found.jpg");
    }
    case 1: {
      return require.resolve("../public/successfully.jpg");
    }
    case 2: {
      return require.resolve("../public/welcome.jpg");
    }
    default: {
      return require.resolve("../public/not-found.jpg");
    }
  }
};

export { getStaticImg };
