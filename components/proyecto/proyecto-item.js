import Link from 'next/link';
import Image from 'next/image';

export default function ProyectoItem({ title, slug, image}) {
  return (
    <article>
      <header>
        <div>
          <Image src={image} alt={title} width={100} height={100} />
        </div>
        <div>
          <h2>{title}</h2>
        </div>
      </header>
      <div>
        <div>
          <Link href={`/portfolio/${slug}`}>View Details</Link>
        </div>
      </div>
    </article>
  );
}