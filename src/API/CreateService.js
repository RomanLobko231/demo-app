import axios from "axios";

export default class CreateService{
    static async createPost(post) {
        const response = await axios.post('http://localhost:8080', {title: post.title, content: post.body, dateCreated: Date.now()})
        console.log(response)
    }

    static async sendEmail(email) {
        const response = await axios.post('http://localhost:8080/send-email', {body: email.body, subject: email.subject, recipient: email.recipient})
        console.log(response)
    }
}