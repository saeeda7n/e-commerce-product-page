import React from "react";
import { Loader } from "lucide-react";

const Loading = () => {
 return (
  <div className="flex min-h-[calc(100vh-theme(spacing.20))] items-center justify-center">
   <Loader className="animate-spin" />
  </div>
 );
};

export default Loading;
