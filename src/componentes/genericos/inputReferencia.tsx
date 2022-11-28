import { Input } from "@chakra-ui/react";

export function Referencia(){
    return(
        <div>
            <label style={{ fontWeight: 'bold' }}>Referência</label>
            <Input
                placeholder="Referência"
                size="md"
                type="text"
                color='white'
                bg='#171923'
            />
        </div>
    )
}