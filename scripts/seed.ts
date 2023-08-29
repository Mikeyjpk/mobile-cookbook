const { PrismaClient } = require("@prisma/client");

const db = new PrismaClient();

async function main() {
    try {
        await db.category.createMany({
            data: [
                { name: "Burgers" },
                { name: "Indian" },
                { name: "Thai" },
                { name: "Seafood" },
                { name: "Italian" },
                { name: "Dessert" },
                { name: "Healthy" },
                { name: "Mexican" },
                { name: "Chinese" },
                { name: "Japanese" },
                { name: "Asian" },
                { name: "Sides" },
            ]
        })
    } catch (error) {
        console.log("Error seeding default categories", error);
    } finally {
        await db.$disconnect();
    }
};

main();