import React from 'react';

function PreviewList(): JSX.Element {
  return (
    <div
      className="bg-gray-50 w-screen h-full rounded-t-3xl shadow-top-lg
    flex flex-col items-stretch"
    >
      <p className="text-gray-400 font-light italic underline self-center mt-6">
        Expand
      </p>
      <p>Test</p>
      <hr className="my-3" />
      <p>Test</p>
      <hr className="my-3" />
      <p>Test</p>
      <hr className="my-3" />
    </div>
  );
}

export default PreviewList;
