import { Candidate } from '../interfaces/Candidate.interface';

export const SavedCandidateCard = ({ candidate }: { candidate: Candidate }) => {
    return (
        <>
        <tr>
        <td>
                <img
                    src={candidate.avatar_url || 'https://via.placeholder.com/150'}
                    alt={candidate.name || 'Unknown Candidate'}
                    style={{ width: '50px', height: '50px', borderRadius: '50%' }}
                />
        </td>
        <td>{candidate.name || 'Unknown Name'}</td>
        <td>{candidate.login || 'N/A'}</td>
        <td>{candidate.location || 'N/A'}</td>
        <td>{candidate.email || 'N/A'}</td>
        <td>{candidate.company || 'N/A'}</td>
        <td><button onClick={() => {
            const storedCandidates = JSON.parse(
                localStorage.getItem('potentialCandidates') || '[]'
            );
            const updatedCandidates = storedCandidates.filter((c: Candidate) => c.login !== candidate.login);
            localStorage.setItem('potentialCandidates', JSON.stringify(updatedCandidates));
            window.location.reload();
        }}>Reject</button></td>
        </tr>
        </>
    );
    }