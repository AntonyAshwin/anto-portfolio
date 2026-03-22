interface Props {
  label: string;
  title: string;
}

export default function SectionHeading({ label, title }: Props) {
  return (
    <div className="mb-14 text-center">
      <span className="text-indigo-400 text-xs font-semibold tracking-widest uppercase">
        {label}
      </span>
      <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">{title}</h2>
      <div className="mt-4 mx-auto w-12 h-0.5 bg-linear-to-r from-indigo-500 to-violet-500 rounded-full" />
    </div>
  );
}
