import React, { useEffect, useState } from 'react';
import { getPets } from '../../api/petfinder';
import Pet from '../../components/pet';
import Hero from '../../components/hero';

import { useParams } from 'react-router-dom';

const HomePage = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const { type } = useParams();

  useEffect(() => {
    async function getPetsData() {
      try {
        const petsData = await getPets(type || '');
        setData(petsData);
        setError(null);
        setLoading(false);
      } catch (e) {
        setError(e);
        setLoading(false);
      }
    }

    getPetsData();
  }, [type]);

  return (
    <div className="page">
      <Hero />
      <h3>
        <span className="pet-type-label">
          {type ? `${type}s` : 'All Pets'}
        </span>{' '}
        available for adoption near you
      </h3>

      {loading && <p>Loading...</p>}
      {error && <p>Error fetching pets: {error.message}</p>}

      {data && (
        <div className="grid">
          {data.map((pet) => (
            <Pet animal={pet} key={pet.id} />
          ))}
        </div>
      )}
    </div>
  );
};

export default HomePage;