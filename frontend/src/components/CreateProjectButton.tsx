import React, { useState } from 'react'
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ProjectForm } from "@/components/ui/ProjectForm";
import { Plus } from "lucide-react";

const CreateProjectButton = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <Dialog open={isOpen} onOpenChange={(visible) => {
            if (!visible) setIsOpen(visible)
        }}>
            <DialogTrigger onClick={() => setIsOpen(true)} asChild>
                <Button className="w-[150]" onClick={() => {}}>
                    Create Project <Plus className="ml-2 h-5 w-5" />
                </Button>
            </DialogTrigger>

            <DialogContent>
                <ProjectForm />
            </DialogContent>
        </Dialog>
    );
}

export default CreateProjectButton;