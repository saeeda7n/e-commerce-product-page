import { FormEvent, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MessageCircle, Send, XIcon } from "lucide-react";
import { RateBox } from "@/components/reviews/rateBox";
import Button from "@/components/ui/button";
import Input, { InputErrorMessage } from "@/components/ui/input";

type AddReviewDialogProps = {
 open: boolean;
 onClose: (state: boolean) => void;
 onSubmit?: (comment: TComment) => void;
};

export function AddReviewDialog({
 open,
 onClose,
 onSubmit,
}: AddReviewDialogProps) {
 const [errors, setError] = useState<{ [key: string]: string }>();

 return (
  <AnimatePresence mode="wait">
   {open && (
    <motion.div
     animate={{ opacity: 1 }}
     initial={{ opacity: 0 }}
     exit={{ opacity: 0 }}
     className="fixed inset-0 z-50 flex items-end justify-center bg-black/20 pt-16 md:backdrop-blur"
     onClick={() => onClose(false)}
    >
     <style>{`:root{overflow:hidden;}`}</style>
     <motion.div
      onClick={(e) => e.stopPropagation()}
      animate={{ opacity: 1, y: 0, transition: { delay: 0.2 } }}
      initial={{ opacity: 0, y: 100 }}
      exit={{ opacity: 0, y: 100 }}
      className="relative mt-auto flex w-full flex-col gap-1 bg-white px-5 py-4 shadow-xl sm:max-w-lg sm:rounded-t-xl"
     >
      <button
       onClick={() => onClose(false)}
       aria-label="Close Add Review Dialog"
       className="absolute -top-4 end-2 ms-auto flex size-8 items-center justify-center rounded-xl border-2 border-gray-200 bg-white sm:-end-2 sm:-top-2"
      >
       <XIcon />
      </button>
      <div className="flex items-center gap-1">
       <MessageCircle />
       <h2 className="font-medium">Leave A Comment For This Product</h2>
      </div>
      <p className="text-xs text-gray-500">
       Share your comment and use the stars box to rate our product.
      </p>
      <form onSubmit={handleOnSubmit} className="mt-5 flex flex-col gap-2">
       <Input>
        <input
         type="text"
         placeholder="Your Name..."
         className="h-10 w-full rounded-md border-2 border-black px-2"
         name="name"
        />
        <InputErrorMessage children={errors?.name} />
       </Input>
       <Input>
        <textarea
         rows={3}
         className="w-full resize-none rounded-md border-2 border-black px-2 py-2"
         placeholder="Your thoughts"
         name="body"
        />
        <InputErrorMessage children={errors?.body} />
       </Input>

       <div className="flex items-center justify-between">
        <span className="text-sm font-medium">Rate this product</span>
        <RateBox name="rate" starsClassName="size-5" />
       </div>
       <Button className="ms-auto mt-8 max-sm:w-full">
        Share your thoughts
        <Send className="size-5" />
       </Button>
      </form>
     </motion.div>
    </motion.div>
   )}
  </AnimatePresence>
 );

 function handleOnSubmit(e: FormEvent<HTMLFormElement>) {
  const errors: { [key: string]: string } = {};
  e.preventDefault();
  const data = new FormData(e.currentTarget);
  const [name, body, rate] = [
   data.get("name"),
   data.get("body"),
   data.get("rate"),
  ];
  if (!name) errors.name = "Name cannot be empty!";
  if (!body) errors.body = "Message cannot be empty!";
  setError(errors);
  if (Object.keys(errors).length) return;
  onSubmit &&
   onSubmit({
    rate: Number(rate),
    id: Math.random().toString(32),
    body: body as string,
    createdAt: new Date().toLocaleDateString(),
    user: {
     id: Math.random().toString(32),
     name: name as string,
    },
   });
  onClose && onClose(false);
 }
}
