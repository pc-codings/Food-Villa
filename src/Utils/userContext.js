import { createContext } from "react"

const userContext = createContext({
    user:{
        name:'Paritosh',
        email:'paritosh@gmail.com',
    }
})

export default userContext