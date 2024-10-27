import { cn } from "@/utils/cn";

export const Infoteam = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] md:grid-cols-3 gap-10 max-w-12xl mx-auto ",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const InfoteamItem = ({
  className,
  title,
  description,
  header,
  icon,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-none p-4 bg-black border-white/[0.2] border justify-between flex flex-col space-y-4",
        className,
      )}
    >
      {header}
      <div className="grid place-items-center group-hover/bento:scale-105 transition duration-200">
        {icon}
        <div className="text-center font-sans font-bold  text-neutral-200 mb-2 mt-2">
          {title}
        </div>
        <div className="text-center font-sans font-normal  text-xs text-neutral-300">
          {description}
        </div>
      </div>
    </div>
  );
};
