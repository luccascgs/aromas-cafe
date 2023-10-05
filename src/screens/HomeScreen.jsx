import RecipeLabel from "../components/RecipeLabel";

export default function HomeScreen() {
    return (
        <div>
            <div>
                <div className="content-up position-absolute w-100 h-80vh d-flex flex-column justify-content-center align-items-center ml-10vw text-white z-2">
                    <div className="w-75vw">
                        <h1><b>Bem vindo!</b></h1>
                        <h2 className="w-50">Aromas de Café, onde a magia do café acontece.</h2>
                    </div>
                </div>
                <div className="z-n1">
                    <div className="overlay-black"> </div>
                    <img className="w-100 object-fit-cover h-80vh" src="https://ideas.ted.com/wp-content/uploads/sites/3/2022/07/FINAL_Coffee.jpg" alt="Café" />
                </div>
            </div>
            <h1>Eu sou a HomeScreen Divina!</h1>
            <RecipeLabel recipe={"Capuccino"} type={"Café Quente"} time={"5"} portion={"2"} img={"https://www.mococa.com.br/wp-content/uploads/2022/07/Cappuccino-com-Mocoquinha_4-scaled.jpg"} />
        </div>
    )
}