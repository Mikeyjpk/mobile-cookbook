"use client"

import { FieldValues, SubmitHandler, useForm} from "react-hook-form";
import axios from "axios";

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface RecipeFormProps {

};

const RecipeForm = async ({} : RecipeFormProps) => {
    const [isLoading, setIsLoading] = useState(false);

    const {
        register,
        handleSubmit,
        formState: {
            errors,
        }
    } = useForm<FieldValues>({
        defaultValues: {
            name: '',
            category: '',
            modifier: '',
        }
    });

    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        try {
            setIsLoading(true)
            await axios.post(' ', data);
        }   catch (error: any) {
            const errorResponse = error.response?.data?.errorMessage
            //TODO: add toast
            console.log(errorResponse)
        }   finally {
            setIsLoading(false);
        }
    }

    return (
        <>
            <Card className="w-[350px]">
                <CardHeader>
                    <CardTitle>Create</CardTitle>
                    <CardDescription>Add a new recipe to your cookbook!</CardDescription>
                </CardHeader>
                <CardContent>
                    <form>
                        <div className="grid w-full items-center gap-4">
                            <Input id="name" placeholder="Recipe Name" />

                            <div className="flex flex-col space-y-2">
                                <Label htmlFor="category">Category</Label>
                                <Select>
                                    <SelectTrigger id="category">
                                        <SelectValue placeholder="Select" />
                                    </SelectTrigger>
                                    <SelectContent position="popper">
                                        <SelectItem value="Burgers">Burgers</SelectItem>
                                        <SelectItem value="Thai">Thai</SelectItem>
                                        <SelectItem value="Seafood">Seafood</SelectItem>
                                        <SelectItem value="Indian">Indian</SelectItem>
                                        <SelectItem value="Italian">Italian</SelectItem>
                                        <SelectItem value="Dessert">Dessert</SelectItem>
                                        <SelectItem value="Healthy">Healthy</SelectItem>
                                        <SelectItem value="Mexican">Mexican</SelectItem>
                                        <SelectItem value="Chinese">Chinese</SelectItem>
                                        <SelectItem value="Japanese">Japanese</SelectItem>
                                        <SelectItem value="Asian">Asian</SelectItem>
                                        <SelectItem value="Sides">Sides</SelectItem>
                                        <SelectItem value="Other">Other</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                            <div className="flex flex-col space-y-2">
                                <Label htmlFor="modifier">Dietairy Requirements</Label>
                                <Select>
                                    <SelectTrigger id="modifier">
                                        <SelectValue defaultValue="None" placeholder="None" />
                                    </SelectTrigger>
                                    <SelectContent position="popper">
                                        <SelectItem value="Vegan">Vegan</SelectItem>
                                        <SelectItem value="Vegetarian">Vegetarian</SelectItem>
                                        <SelectItem value="Dairy">Non Dairy</SelectItem>
                                        <SelectItem value="Gluten">Non Gluten</SelectItem>
                                        <SelectItem value="None">None</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>



                        </div>
                    </form>
                </CardContent>
                <CardFooter className="flex justify-between">
                    <Button variant="outline">Cancel</Button>
                    <Button>Continue</Button>
                </CardFooter>
            </Card>
        </>
    )
};

export default RecipeForm;