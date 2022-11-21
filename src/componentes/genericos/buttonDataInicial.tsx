import { Input } from "@chakra-ui/react";

export function DataInicial() {
    return (
        <div>
            <label style={{ fontWeight: 'bold', textTransform: 'uppercase' }}>informe a data inicial</label>
            <Input
                placeholder="Selecione a data inicial"
                size="md"
                type="date"
                color='white'
                bg='#171923'
            />
        </div>
    )
}
