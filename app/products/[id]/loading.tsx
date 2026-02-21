"use client";

import React from "react";
import { Rings } from "react-loader-spinner";

const Loading = () => {
  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <Rings
        visible={true}
        height="80"
        width="80"
        color="#FFA52F"
        ariaLabel="rings-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};

export default Loading;