import { ArrowUp } from "lucide-react";

export const Footer = () => {
  return (
    <div className="w-full flex justify-center items-center py-8">
      <a
        href="#hero"
        className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
      >
        <ArrowUp size={28} />
      </a>
    </div>
  );
};
