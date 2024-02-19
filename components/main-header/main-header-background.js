import Image from "next/image";

// Posible: https://drive.google.com/uc?id=1BXI_bk5rAbM7AjHn9mdj60w2ITe7p51z

export default function MainHeaderBackground(){
    const imgBack = 'https://drive.google.com/uc?id=1BXI_bk5rAbM7AjHn9mdj60w2ITe7p51z';
    return <div className="
    w-full absolute h-full -z-10">
        <Image className="saturate-100" src={imgBack} alt='Background con paisaje de montañas y colores' width={2000} height={2000}/>
    </div>
}