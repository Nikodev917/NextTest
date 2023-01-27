import clsx from "clsx";
interface Props {
  content?: string;
  className?: any;
  onClick?: () => void;
  bordered?: boolean;
  disable?: boolean;
  children?: React.ReactNode;
}

export default function OrangeBtn({
  content,
  className,
  onClick,
  bordered,
  disable,
  children,
}: Props) {
  const onEmpty = () => {};
  return (
    <div
      className={clsx("c-orangeBtn-root", className, {
        "c-orangeBtn-borderRoot": bordered === true,
        "c-orangeBtn-disableRoot": disable === true,
      })}
      onClick={!disable ? onClick : onEmpty}
    >
      {content} {children}
    </div>
  );
}
