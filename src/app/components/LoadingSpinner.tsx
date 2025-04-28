import React from "react";

const LoadingSpinner: React.FC<{ label?: string }> = ({ label }) => (
  <div style={{display:'flex',alignItems:'center',justifyContent:'center',padding:'2em 0'}} aria-busy="true">
    <span style={{fontSize:32,marginRight:12}} role="status" aria-label="Loading">⏳</span>
    {label && <span style={{fontSize:16}}>{label}</span>}
  </div>
);

export default LoadingSpinner;
