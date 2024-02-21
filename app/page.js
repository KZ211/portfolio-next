export const metadata = {
  title: 'Home',
  description: 'Pagina principal del Portfolio.',
};

export default function Home() {
  return (
    <div className="py-10 px-2 grid grid-cols-1 grid-rows-5 gap-0 columns-xs auto-cols-fr col-span-1">
      <div className="self-center columns-1">
        <div className="overflow-hidden">
          <h1 className="text-7xl row-start-1 uppercase my-0 font-semibold">Alexis</h1>
        </div>
        <div className="overflow-hidden">
          <h1 className="text-6xl uppercase my-0 font-semibold">Jares</h1>
        </div>
        <div className="text-lg max-w-sm row-start-2 columns-1 row-end-1 col-span-1">
          <p className="uppercase mb-2 mt-0"> Lorem Impsum </p>
        </div>
        <div className="">

        </div>
      </div>
    </div>
);
}
