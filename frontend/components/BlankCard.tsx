import React from 'react'
import { Plus } from "lucide-react";
import { Card } from "@/components/ui/card";

const BlankCard = () => {
    return (
        <Card className="w-64 h-64 flex items-center justify-center border border-dashed border-gray-300 rounded-lg
                hover:border-gray-400 transition-colors duration-300 cursor-pointer group">

            <Plus className="w-12 h-12 text-gray-400 group-hover:text-gray-600
            transition-colors duration-300"/>
        </Card>
    )
}

export default BlankCard;