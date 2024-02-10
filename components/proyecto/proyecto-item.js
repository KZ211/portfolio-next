import Link from 'next/link';
import Image from 'next/image';

export default function ProyectoItem({ title, slug, image, description}) {
  return (
    <Link href={`/portfolio/${slug}`}>
      <article className='flex flex-col justify-between h-full border-solid overflow-hidden hover:text-white'>
        <header className='flex justify-between'>
            <Image className='flex hover:opacity-10 justify-center absolute w-full h-full rounded-sm' src={image} alt={title} width={1000} height={1000} />
          <section className='w-full h-60 -z-10'>
            <h2 className='text-xl'>{title}</h2>
            <p className='text-base text-center m-2'>
              {description}
            </p>
          </section>
        </header>
      </article>
    </Link>
  );
}