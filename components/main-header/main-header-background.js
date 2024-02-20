import Image from "next/image";

export default function MainHeaderBackground(){
    const imgBack = 'https://drive.google.com/uc?id=1BXI_bk5rAbM7AjHn9mdj60w2ITe7p51z';
    return <>
        <div className=" hidden lg:absolute
        w-full absolute h-full -z-10">
            <Image className="saturate-100" src={imgBack} alt='Background con paisaje de montañas y colores' width={3000} height={3000}/>
        </div>
        <div className="
        w-full absolute h-full -z-10">
            <Image className="saturate-100 w-full h-full" src={imgBack} alt='Background con paisaje de montañas y colores' fill/>
        </div>
    </>
}