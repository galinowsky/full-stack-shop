import { PrismaClient } from "@prisma/client";
import bcrypt from 'bcryptjs'

const genPassword = () => bcrypt.hash('admin134', 10)
console.log(genPassword())
const prisma = new PrismaClient()

await prisma.user.deleteMany()
await prisma.product.deleteMany()

await prisma.user.create({
  data: {
    email: 'kuba@prisma.com',
    name: "Jakub Galinski",
    password: await  genPassword()  }  

})
await prisma.user.create({
    data: {
      email: 'hubert@prisma.com',
      name: "hubix hendrix",
      password: await genPassword()  }  
      
  })


await prisma.product.create({
    data: {
        name: "mac book air",
        price: 4500,
        description: "super cool laptop",

    },
    
})

await prisma.product.create({
    data: {
        name: "mac book pro",
        price: 8500,
        description: "super cool laptop",

    },

})
await prisma.product.create({
    data: {
        name: "iphone 14 pro",
        price: 8500,
        description: "extra cool phone",

    },
    
})
await prisma.product.create({
    data: {
        name: "iphone 13",
        price: 4500,
        description: "super cool phone",

    },
    
})