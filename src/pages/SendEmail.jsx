import { useState } from "react";
import MyButton from "../components/UI/button/MyButton";
import MyInput from "../components/UI/input/MyInput";
import CreateService from "../API/CreateService";

const SendEmail = () => {
    const [email, setEmail] = useState({body: '', subject: '', recipient: ''})

    const sendsEmail = async (e) => {
        e.preventDefault()
        await CreateService.sendEmail(email)
        setEmail({body: '', subject: '', recipient: ''})
    }
  return (
    <div>
        <h1>Send your emails here</h1>
      <form>
      <MyInput
        value={email.subject}
        onChange={e => setEmail({...email, subject: e.target.value})}
        placeholder='Subject'
        type='text'
        />
        <MyInput
        value={email.body}
        onChange={e => setEmail({...email, body: e.target.value})}
        placeholder='Body'
        type='text'
        />
        <MyInput
        value={email.recipient}
        onChange={e => setEmail({...email, recipient: e.target.value})}
        placeholder='To'
        type='text'
        />
        <MyButton onClick={sendsEmail}>Send email</MyButton>
      </form>
    </div>
  );
};

export default SendEmail;
