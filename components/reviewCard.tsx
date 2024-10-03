import { StarBox } from "@/components/starBox";

type ReviewCardProps = {
 comment: TComment;
};

export function ReviewCard({ comment }: ReviewCardProps) {
 return (
  <div
   className="space-y-5 rounded-md border px-5 py-4"
   id={`review-${comment.id}`}
  >
   <div className="relative flex items-center gap-3">
    <img
     draggable={false}
     className="absolute -top-8 size-20 select-none rounded-[40%_60%_55%_45%/55%_40%_60%_45%] border bg-gray-100 object-cover object-center"
     src={`https://api.dicebear.com/9.x/bottts-neutral/svg?seed=${comment.user.name}`}
     alt={comment.user.name}
    />
    <div className="ms-24 overflow-hidden">
     <h4 className="truncate font-semibold max-sm:text-sm">
      {comment.user.name}
     </h4>
     <StarBox starClassName="max-sm:size-4" rate={comment.rate} />
    </div>
    <div className="ms-auto text-xs text-gray-400 md:text-sm">
     {new Date(comment.createdAt).toLocaleDateString("en-US", {
      day: "2-digit",
      month: "long",
      year: "numeric",
     })}
    </div>
   </div>
   <p className="whitespace-pre-wrap text-gray-700 max-sm:text-sm">
    {comment.body}
   </p>
  </div>
 );
}
