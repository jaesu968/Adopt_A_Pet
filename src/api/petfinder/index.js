export const getPets = async (type = '', query = '') => {
  const searchParams = new URLSearchParams({ type, query });
  const requestUrl = `/animals?${searchParams.toString()}`;

  const response = await fetch(requestUrl, {
    method: 'GET'
  });

  if (!response.ok) {
    throw new Error('Failed to fetch pets');
  }

  const json = await response.json();

  return json;
};

export const getPetDetails = async (id) => {
  const requestUrl = `/animals/${id}`;
  const response = await fetch(requestUrl, {
    method: 'GET'
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch details for pet id ${id}`);
  }

  const json = await response.json();

  return json;
};

export const getPetTypes = async () => {
  const requestUrl = `/animals/types`;
  const response = await fetch(requestUrl, {
    method: 'GET'
  });

  if (!response.ok) {
    throw new Error('Failed to fetch pet types');
  }

  const json = await response.json();

  return json;
};
