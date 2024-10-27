import React from "react";
import { useProgress } from "@react-three/drei";

const InitialLoader = () => {
  const { progress } = useProgress();

  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black z-50">
      <div className="flex flex-col items-center">
        <div className="w-[200px] h-[200px] rounded-full border-8 border-t-8 border-blue-500 border-t-transparent animate-spin"></div>
        <p className="text-3xl font-bold mt-8 text-blue-500">
          {progress.toFixed(0)}%
        </p>
      </div>
    </div>
  );
};

export default InitialLoader;
