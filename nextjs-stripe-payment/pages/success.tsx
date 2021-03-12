import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

const Success: React.FC = () => {
  const { query: { itemName } } = useRouter();

  return (
    <div>
      <h1>Thank you for buying {itemName}!</h1>

      <Link href="/">Go back</Link>
    </div>

  );
}

export default Success;