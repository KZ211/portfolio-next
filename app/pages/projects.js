import Image from "next/image";

export default function ProjectsPage(){
    return <>
        <h2 className="ml-2 text-ms uppercase my-0 font-light">Projects</h2>
        <div className='font-monserrat py-10 px-2 grid grid-rows-4 grid-cols-1 zIndex'>
            <div className="self-end grid-row-span-1">
                <div className="container overflow-hidden">
                    <Image src='https://assets-global.website-files.com/65bf99434e8a00ec776f7cdc/65bf9afc13cac7610082a84e_rodion-kutsaiev-6W8H4puOJB0-unsplash.jpg' alt="/" width={448} height={600}/>
                        <div>
                            <h1>Project 1</h1>
                            <h3>Web Dev</h3>
                        </div>
                </div>
            </div>
            <div className="self-start grid-row-span-1">
                <div className="container overflow-hidden">
                        <Image src='https://assets-global.website-files.com/65bf99434e8a00ec776f7cdc/65bf9afc13cac7610082a84e_rodion-kutsaiev-6W8H4puOJB0-unsplash.jpg' alt="/" width={448} height={600}/>
                        <div>
                            <h1>Project 1</h1>
                            <h3>Web Dev</h3>
                        </div>
                </div>
            </div>
            <div className="self-start grid-row-span-1">
                <div className="container text-md max-w-sm">
                        <Image src='https://assets-global.website-files.com/65bf99434e8a00ec776f7cdc/65bf9afc13cac7610082a84e_rodion-kutsaiev-6W8H4puOJB0-unsplash.jpg' alt="/" width={448} height={600}/>
                        <div>
                            <h1>Project 1</h1>
                            <h3>Web Dev</h3>
                        </div>
                </div>
            </div>
            <div className="self-center grid-row-span-1">
                <div className="container text-sm max-w-sm">
                        <Image src='https://assets-global.website-files.com/65bf99434e8a00ec776f7cdc/65bf9afc13cac7610082a84e_rodion-kutsaiev-6W8H4puOJB0-unsplash.jpg' alt="/" width={448} height={600}/>
                        <div>
                            <h1>Project 1</h1>
                            <h3>Web Dev</h3>
                        </div>
                </div>
            </div>
            <div className="self-start grid-row-span-1">
                <div className="container text-lg max-w-sm">
                <Image src='https://assets-global.website-files.com/65bf99434e8a00ec776f7cdc/65bf9afc13cac7610082a84e_rodion-kutsaiev-6W8H4puOJB0-unsplash.jpg' alt="/" width={448} height={600}/>
                        <div>
                            <h1>Project 1</h1>
                            <h3>Web Dev</h3>
                        </div>
                </div>
            </div>
        </div>
    </>
}