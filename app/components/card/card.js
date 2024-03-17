export default function Card({titulo, subTitulo, texto, texto2}){
    return <div className="w-80 h-64 mr-5 max-w-80">
        <header className="mb-2 border-b-2 border-black">
            <h1 className="uppercase text-2xl">{titulo}</h1>
            <h3 className="text-md opacity-20">{subTitulo}</h3>
        </header>
        <main>
            <p className="text-md overflow-hidden text-center whitespace-normal">{texto}</p>
            <p className="text-md overflow-hidden text-center whitespace-normal">{texto2}</p>
        </main>
    </div>
}