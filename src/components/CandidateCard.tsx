// src/components/CandidateCard.tsx
import React from 'react';
import { Candidate } from '../interfaces/Candidate.interface';

interface CandidateCardProps {
  candidate: Candidate;
}

const CandidateCard: React.FC<CandidateCardProps> = ({ candidate }) => (
  <>
    {candidate && (
      <div className="candidate-card">
        <img
          src={candidate.avatar_url || 'https://via.placeholder.com/150'}
          alt={candidate.name || 'Unknown Candidate'}
        />
        <h2>{candidate.name || 'Unknown Name'}</h2>
        <p>Username: {candidate.login || 'N/A'}</p>
        <p>Location: {candidate.location || 'N/A'}</p>
        <p>Email: {candidate.email || 'N/A'}</p>
        <p>Company: {candidate.company || 'N/A'}</p>
        <a href={candidate.html_url || '#'} target="_blank" rel="noopener noreferrer">
          GitHub Profile
        </a>
      </div>
    )}
  </>
);

export default CandidateCard;