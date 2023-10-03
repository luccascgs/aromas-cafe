import RecipeLabel from "../components/RecipeLabel";

export default function HomeScreen(){
    return(
        <div>
            <h1>Eu sou a HomeScreen Divina!</h1>
            <RecipeLabel recipe={"Capuccino"} type={"Café Quente"} time={"5"} portion={"2"} img={"https://www.mococa.com.br/wp-content/uploads/2022/07/Cappuccino-com-Mocoquinha_4-scaled.jpg"}/>
        </div>
    )
}