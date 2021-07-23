import { useState } from "react";
import Button from "../Button/Button"


export const Card = () => {

    const [value, setValue] = useState(1);

    function Adicionar() {
        setValue(value + 1)
    }

    function Subtrair() {
        setValue(value - 1)
    }



    return (
        <>
            <h1>Counter App</h1>
            <hr></hr>
            <div className="card">
                <div className="card-header">
                    <h1>{value}</h1>
                </div>
                <div className="card-body">
                    <Button
                        className="btn btn-primary"
                        onClick={Adicionar}
                    >

                        Adicionar
                    </Button>
                    <Button
                        className="btn btn-danger"
                        onClick={Subtrair}
                    >

                        Subtrair
                    </Button>
                </div>
            </div>
            <hr></hr>
            <p>Desenvolvido por Guilherme Chadt</p>
        </>
    )
}