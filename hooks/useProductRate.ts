import { useMemo } from "react";

export const useProductRate = (comments: Array<TComment>) => {
 const rate = useMemo(
  () =>
   +(
    comments.reduce((rate, comment) => rate + comment.rate, 0) /
    (comments.length || 1)
   ).toFixed(1),
  [comments],
 );
 return { rate, totalComments: comments.length };
};
