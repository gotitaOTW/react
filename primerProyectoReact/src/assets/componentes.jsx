import React from "react";

function MostrarForm({ titulo, inputText1, inputText2, inputText3, submit}) {
    return (
        <div>
            <h2>{titulo}</h2>
            <form>
                <label>{inputText1}</label>
                <input
                    type="text"
                    name="mascota"
                    class="u-full-width"
                    placeholder={input1}
                />
                <label>{inputText2}</label>
                <input
                    type="text"
                    name="propietario"
                    class="u-full-width"
                    placeholder={inputText2}
                />
                <label>Fecha</label>
                <input
                    type="date"
                    name="fecha"
                    class="u-full-width"
                />
                <label>Hora</label>
                <input
                    type="time"
                    name="hora"
                    class="u-full-width"
                />
                <label>{inputText3}</label>
                <textarea
                    name="sintomas"
                    class="u-full-width"
                ></textarea>
                <button
                    type="submit"
                    class="u-full-width button-primary"
                >
                    {submit}
                </button>
            </form>
        </div>
    );
}

export default MostrarForm;
