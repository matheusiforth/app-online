import { Input } from "@chakra-ui/react";

export function DataFinal() {
    return (
        <div>
            <label style={{ fontWeight: 'bold', textTransform: 'uppercase' }}>informe a data final</label>
            <Input
                placeholder="Selecione a data final"
                size="md"
                type="date"
                color='white'
                bg='#171923'
            />
        </div>
    )
}
