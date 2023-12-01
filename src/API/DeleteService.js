import axios from "axios"

export default class DeleteService{
    static async deleteById(id) {
        const response = await axios.delete('http://localhost:8080?deleteId=' + id)
        console.log(response)
    } 
}