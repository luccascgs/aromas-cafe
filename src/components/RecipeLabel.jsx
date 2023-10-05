const RecipeLabel = (props) => {
    return (
        <div className="d-flex flex-column align-items-center mw-fit-content">
            <label className="bg-warning px-5 py-1 recipeType">{props.type}</label>
            <div className="shadow-sm d-flex flex-column align-items-center bg-white p-4 rounded-3">
                <img className="recipe-image-size object-fit-cover border rounded" src={props.img} alt={props.recipe} />
                <h4 className="font-weight-bolder mt-2">{props.recipe}</h4>
                <footer className="d-flex flex-column align-items-center">
                    <div><i className="bi bi-clock"></i> {props.time} min</div>
                    <div className="mt-2"><i className="bi bi-cup-hot"></i> {props.portion} porções</div>
                </footer>
            </div>
        </div>
    )
}
export default RecipeLabel;