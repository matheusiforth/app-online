import { Input } from "@chakra-ui/react";

export function Referencia(){
    return(
        <div>
            <label style={{ fontWeight: 'bold' }}>ReferĂȘncia</label>
            <Input
                placeholder="ReferĂȘncia"
                size="md"
                type="text"
                color='white'
                bg='#171923'
            />
        </div>
    )
}