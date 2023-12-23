"use client";

import { useRouter } from 'next/router';
import { FC } from 'react';

const Test: FC = () => {
  const router = useRouter();

  // Get the current path
  const currentPath = router.pathname;
  return (<p>
    {currentPath}
  </p>)
}

export default Test;