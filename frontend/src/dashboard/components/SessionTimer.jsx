import { useAuth } from "../context/AuthContext";

const SessionTimer = () => {
  const { countdown } = useAuth();

  if (countdown === null || countdown <= 0) return null;

  const hours = Math.floor(countdown / 3600);
  const minutes = Math.floor((countdown % 3600) / 60);
  const seconds = countdown % 60;

  // Color changes based on remaining time
  const getTimerColor = () => {
    if (countdown <= 60) return '#ff4444'; // Red when <1 minute
    if (countdown <= 300) return '#ffbb33'; // Yellow when <5 minutes
    return '#00C851'; // Green otherwise
  };

  return (
    <div style={{
      position: 'fixed',
      bottom: '20px',
      right: '20px',
      backgroundColor: '#f8f9fa',
      padding: '10px 15px',
      borderRadius: '8px',
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
      borderLeft: `5px solid ${getTimerColor()}`,
      zIndex: 1000
    }}>
      <p style={{ 
        margin: 0,
        fontWeight: '600',
        color: '#495057',
        fontFamily: 'monospace'
      }}>
        {hours > 0 ? `${hours}h ` : ''}
        {minutes > 0 ? `${minutes}m ` : ''}
        {seconds}s remaining
      </p>
    </div>
  );
};

export default SessionTimer;