import { Input } from "@chakra-ui/react";

export function Referencia(){
    return(
        <div>
            <label style={{ fontWeight: 'bold', textTransform: 'uppercase' }}>Referência</label>
            <Input
                placeholder="Selecione a data final"
                size="md"
                type="text"
                color='white'
                bg='#171923'
            />
        </div>
    )
}