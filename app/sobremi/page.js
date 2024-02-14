import Image from "next/image";

export default function SobreMiPage(){
    const imageSobreMi = 'https://drive.google.com/uc?id=1km5xxzjNk4WitcvzbniCktIhn9dNX1I9';
    return <header className="flex justify-center mt-8">
        <Image className="rounded-lg"
            src={imageSobreMi} 
            alt="Alexis sentado sobre un cordon con un buzo rosa, lentes de sol y un pantalon blanco" 
            width={400} 
            height={400}
            />
    </header>
}