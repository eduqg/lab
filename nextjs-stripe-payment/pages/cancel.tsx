import React from 'react';
import Link from 'next/link';

const Cancel: React.FC = () => {
  return (
    <div>
      <h1>Canceled!</h1>

      <Link href="/">Go back</Link>
    </div>

  );
}

export default Cancel;