import React from 'react';

/**
 * Renders the preloader
 */

export const Loader = () => {

  return(
    <div className="preloader text-center">
      <div className="status">
        <div className="spinner-border avatar-xs text-primary m-2" role="status" />
      </div>
    </div>
  );
}