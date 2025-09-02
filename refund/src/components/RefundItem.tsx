export type RefundProps = {
  id: string;
  title: string;
  subtitle: string;
  amount: string;
  categoryImg: string;
};

type Props = React.ComponentProps<"a"> & {
  data: RefundProps;
};

export function RefundItem({ data, ...rest }: Props) {
  return (
    <a
      className="flex items-center gap-3 hover:bg-green-100/50 p-4 rounded-lg"
      {...rest}
    >
      <img className="w-8 h-8" src={data.categoryImg} alt={data.subtitle} />

      <div className="flex flex-col flex-1">
        <strong className="flex-1 text-sm text-gray-100">{data.title}</strong>
        <span className="text-xs text-gray-200">{data.subtitle}</span>
      </div>

      <span className="text-sm text-gray-100 font-semibold">{data.amount}</span>
    </a>
  );
}
