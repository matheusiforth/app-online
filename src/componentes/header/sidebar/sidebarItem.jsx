import { BuscaDados } from "./buscaDados";

export function SidebarItem(props) {

    return (
        props.data.map((transacao) => (
            <BuscaDados nome={transacao['descmodulo']} id={transacao['idmodulo']}></BuscaDados>
        ))
    )
}