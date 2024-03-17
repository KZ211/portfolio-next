export default function Card({titulo, subTitulo, texto, texto2}){
    return <div className="w-96 h-72 mr-5 max-w-80">
        <header className="mb-2 border-b-2 border-black">
            <h1 className="uppercase text-3xl">{titulo}</h1>
            <h3 className="text-xl opacity-20">{subTitulo}</h3>
        </header>
        <main>
            <p className="text-lg md:text-lg overflow-hidden text-center whitespace-normal">{texto}</p>
            <p className="text-lg md:text-lg overflow-hidden text-center whitespace-normal">{texto2}</p>
        </main>
    </div>
}