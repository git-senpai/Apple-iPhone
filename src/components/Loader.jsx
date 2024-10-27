import { Html, useProgress } from "@react-three/drei";
import React from "react";

const Loader = () => {
  const { progress } = useProgress();

  return (
    <Html center>
      <div className="flex flex-col items-center">
        <div className="w-[150px] h-[150px] rounded-full border-8 border-t-8 border-blue-500 border-t-transparent animate-spin"></div>
        <p className="text-xl font-bold mt-4 text-blue-500">
          {progress.toFixed(0)}%
        </p>
      </div>
    </Html>
  );
};

export default Loader;
