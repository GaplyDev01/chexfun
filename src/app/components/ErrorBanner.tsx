import React from "react";

interface ErrorBannerProps {
  message: string | null | undefined;
}

const ErrorBanner: React.FC<ErrorBannerProps> = ({ message }) => {
  if (!message) return null;
  return (
    <div className="error" style={{marginBottom: '1em', background:'#ffebe9', color:'#d32f2f', padding:'8px 16px', borderRadius:4, border:'1px solid #d32f2f'}}>
      {message}
    </div>
  );
};

export default ErrorBanner;
