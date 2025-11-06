import React, { useState, useEffect } from 'react';
import Hero from '../../components/hero';
import { getPets } from '../../api/petfinder';
import Pet from '../../components/pet'; // This was missing
// Import useSearchParams
import { useSearchParams } from 'react-router-dom';

const SearchPage = () => {

  // Get searchParams object from useSearchParams
  const [searchParams] = useSearchParams(); 

  const petNameToFind = searchParams.get('q');  // Get query parameter using searchParams object

  const [pets, setPets] = useState([]);

  useEffect(() => {
    async function getPetsData() {
      try {
        const petsData = await getPets('', petNameToFind);
        setPets(petsData);
      } catch (e) {
        console.error(e);
        setPets([]);
      }
    }

    getPetsData();
  }, [petNameToFind]);

  return (
    <div className="page">
      <Hero displayText={`Results for ${petNameToFind}`} />

      <h3>Pets available for adoption near you</h3>

      <main>
        {pets.length > 0 ? (
          <div className="grid">
            {pets.map((pet) => (
              <Pet animal={pet} key={pet.id} />
            ))}
          </div>
        ) : (
          <p className="prompt">No pets found for "{petNameToFind}"</p>
        )}
      </main>
    </div>
  );
};

export default SearchPage;
