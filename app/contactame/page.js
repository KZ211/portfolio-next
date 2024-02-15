import SocialSlideShow from "@/components/social/social-slideshow";

export default function ContactamePage(){
    return <header className="flex flex-col justify-center items-center text-center text-white">
        <h1 className="text-center text-4xl font-semibold mt-4 text-white">Redes Sociales</h1>
        <SocialSlideShow/>
        <p className="text-xl mt-10 backdrop-blur-lg backdrop-filter backdrop-saturate-150 rounded-xl">Muchísimas gracias por ver mi portafolio. Me llevó bastante tiempo<br/> aprender esta tecnología y desarrollarlo, aunque<br/> lo hice con mucho esmero y dedicación. 😄</p>
    </header>
}