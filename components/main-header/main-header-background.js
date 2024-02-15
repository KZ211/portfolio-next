import Image from "next/image";

export default function MainHeaderBackground(){
    const imgBack = 'https://drive.google.com/uc?id=1rDNocw-jXhWP3IlhgF_sASphGqV9rGvf';
    return <div className="
     bg-transparent
    w-full absolute h-full -z-10">
        <Image className="saturate-150" src={imgBack} alt='Background con paisaje de montañas y colores' fill/>
    </div>
}