import clsx from "clsx";

interface SkeletonProps extends NativeDomProps<HTMLDivElement> {
  w?: string;
  h?: string;
}

export const Skeleton: React.FC<SkeletonProps> = (props) => {
  const { w = "5rem", h = "5rem", className } = props;

  return (
    <div
      style={{ width: w, height: h }}
      className={clsx(className, "animate-pulse duration-75 bg-slate-200")}
    />
  );
};

export default Skeleton;
