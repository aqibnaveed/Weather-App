export const WeatherAPI = async () => {
  try {
    let response = await fetch(
        'https://examples.com/data.json'
      );
      let json = await response.json();
      return json.movies;
  } catch (error) {}
};

const getArticlesFromApi = async () => {
    let response = await fetch(
      'https://examples.com/data.json'
    );
    let json = await response.json();
    return json.movies;
  }
};
