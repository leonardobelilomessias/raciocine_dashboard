import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function SearchBar(){
    return(
        <div className="flex gap-2 p-4">
            <Input type="text" placeholder="Faça sua pesquisa..." />
            <Button className="bg-primaryPalet text-white">Buscar</Button>
        </div>
    )
}