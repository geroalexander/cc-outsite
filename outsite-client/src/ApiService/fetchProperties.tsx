const serverURL = 'http://localhost:4000/graphql';

async function fetchProperties() {
  const res = await fetch(serverURL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      query: `
        query {
          getAllProperties {
            region
            wfContent {
              id
              heroImage
              houseName
              name
            }
          }
        }
      `,
    }),
  });

  const { data } = await res.json();
  return data;
}

export { fetchProperties };
