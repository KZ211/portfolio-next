import Image from "next/image";

export const metadata = {
  title: 'Home',
  description: 'Pagina principal del Portfolio.',
};

export default function Home() {
  return (
    <div className='font-monserrat py-10 px-2 grid grid-rows-5 grid-cols-1 zIndex'>
      <div className="self-end grid-row-span-1">
        <div className="container overflow-hidden">
          <h1 className="text-5xl font-bold font-monserrat uppercase my-0">Alexis</h1>
        </div>
      </div>
      <div className="self-start grid-row-span-1">
        <div className="container overflow-hidden">
          <h1 className="text-5xl font-bold uppercase my-0">Jares</h1>
        </div>
      </div>
      <div className="self-center grid-row-span-1">
        <div className="container text-sm max-w-sm">
          <p className="uppercase"> Lorem ipsum </p>
        </div>
      </div>
      <div className="self-start grid-row-span-1">
        <div className="container text-sm max-w-sm">
          <p className="uppercase"> React Frontend Developer </p>
        </div>
      </div>
      <div className="self-start grid-row-span-1">
        <div className="container text-lg max-w-sm">
          <Image className="h-24 w-84" src='https://assets-global.website-files.com/65bf5888f39a3740b13a154c/65bf5c5f9969f366af29ea2f_pexels-sarah-dorweiler-8968807%201.png' alt="/" width={340} height={80}/>
        </div>
      </div>
    </div>
);
}
