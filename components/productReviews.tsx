"use client";
import { Info, MessageCircle, MessagesSquare } from "lucide-react";
import { ReviewCard } from "@/components/reviewCard";
import { StarBox } from "@/components/starBox";
import { useProductRate } from "@/hooks/useProductRate";
import Button from "@/components/ui/button";
import { useState } from "react";
import { AddReviewDialog } from "@/components/addReviewDialog";

type ProductReviewsProps = {
 comments: Array<TComment>;
};

export function ProductReviews({ comments: _comments }: ProductReviewsProps) {
 const [comments, setComments] = useState(_comments);
 const [open, setOpen] = useState(false);
 const { rate, totalComments } = useProductRate(comments);
 return (
  <div className="flex flex-col gap-5">
   <div className="flex items-center gap-2">
    <MessagesSquare className="size-8" />
    <h3 className="text-2xl font-medium">User Reviews</h3>
   </div>

   <div className="flex flex-col gap-5 lg:flex-row">
    <div className="top-24 mb-16 w-full rounded-md bg-gray-100 px-5 py-5 lg:sticky lg:mb-auto lg:w-96">
     <div className="flex flex-col gap-1">
      <span className="text-lg font-medium">
       {rate}/<sub>5</sub>
      </span>
      <div className="flex items-end gap-1">
       <StarBox rate={rate} />
       <span className="text-xs text-gray-600">
        {comments.length} review{totalComments > 1 && "s"}
       </span>
      </div>
      <p className="mt-2 text-sm">Leave a comment about this product</p>

      <Button className="mt-8" onClick={() => setOpen(true)}>
       <MessageCircle className="size-5" /> Leave A Comment
      </Button>

      <div className="mt-2 flex gap-2 text-xs/3 text-gray-600">
       <Info className="size-4 flex-shrink-0" />
       <p>Comments are temporary and not storing in any storage!</p>
      </div>
     </div>
    </div>

    <div className="flex flex-1 flex-col gap-10">
     {comments.map((comment) => (
      <ReviewCard comment={comment} key={comment.id} />
     ))}
     <span className="select-none text-center text-xs uppercase text-gray-400">
      No {Boolean(totalComments) && "more"} reviews
     </span>
    </div>
   </div>

   <AddReviewDialog
    onSubmit={(comment) => {
     setComments((p) => [...p, comment]);
     setTimeout(() => {
      const commentBlock = document.getElementById(`review-${comment.id}`);
      if (commentBlock) commentBlock.scrollIntoView({ behavior: "smooth" });
     });
    }}
    open={open}
    onClose={setOpen}
   />
  </div>
 );
}
