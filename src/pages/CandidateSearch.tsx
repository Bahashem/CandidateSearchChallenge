import { useState, useEffect } from 'react';
import { searchGithub } from '../api/API';
import { Candidate } from '../interfaces/Candidate.interface';
import CandidateCard from '../components/CandidateCard';

const CandidateSearch: React.FC = () => {
 const [candidates, setCandidates] = useState<Candidate[]>([]);
  const [candidateIndex, setCandidateIndex] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);


  const fetchCandidates = async () => {
    try {
      
      const data: Candidate[] = await searchGithub();
      setCandidates(data);
    } catch (err: any) {
      setError(err.message);
    }
  };

 useEffect(() => {
    fetchCandidates();
    }, []);

 
  const handleAccept = () => {
    if (candidates[candidateIndex]) {
      const storedCandidates = JSON.parse(
        localStorage.getItem('potentialCandidates') || '[]'
      );
      storedCandidates.push(candidates[candidateIndex]);
      localStorage.setItem('potentialCandidates', JSON.stringify(storedCandidates));
     
      setCandidateIndex(candidateIndex + 1);
     
    }
  };

 
  const handleReject = () => {
        setCandidateIndex(candidateIndex + 1);
  
  };

  
  if (error) {
    console.log(error);
    return (
      <div>
        <p>Error: {error}</p>
        <button onClick={fetchCandidates}>Retry</button>
      </div>
    );
  }
  if (!candidates[candidateIndex]) {
    return <p>Loading candidate...</p>;
  }

  return (
    <div>
      {candidates[candidateIndex] && <CandidateCard candidate={candidates[candidateIndex]} />}
      <div className="actions">
        <button onClick={handleReject}>-</button>
        <button onClick={handleAccept}>+</button>
      </div>
    </div>
  );
};

export default CandidateSearch;