import React, { FC } from "react";

const MainFooter = () => {
  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      <small className="mb-2 text-xs">
        &copy; Ky Heon 2025. All Rights Reserved.
      </small>
      <p className="text-xs">
        <span className="font-semibold">About this website:</span>{" "}Built with Next.js, 
        React, Typescript, Framer Motion, TailwindCSS.
      </p>
    </footer>
  )
}

export default MainFooter;