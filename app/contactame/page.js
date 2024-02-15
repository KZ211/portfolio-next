import SocialSlideShow from "@/components/social/social-slideshow";

export default function ContactamePage(){
    return <header className="flex flex-col justify-center items-center text-center text-white">
        <h1 className="text-center text-4xl font-semibold underline text-white">Redes Sociales</h1>
        <SocialSlideShow/>
        <p className="text-xl mt-10 backdrop-blur-lg backdrop-filter backdrop-saturate-150 rounded-xl">Muchisimas gracias por ver mi portafolio, me llevo bastante tiempo, <br/> tanto aprender esta tecnologia y desarrollarlo, aun que <br/> lo hice con mucho esmpero y dedicacion😄</p>
    </header>
}