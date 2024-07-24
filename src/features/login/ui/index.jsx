import { useEffect } from "react"
import { EmailForm } from "../email-form"
import { PasswordForm } from "../password-form"

export const Login = ({ email, setEmail, emailConfirmed, setEmailConfirmed }) => {
  useEffect(() => {
    console.log('emailConfirmed:', emailConfirmed);
  }, [emailConfirmed])
  return (
    <>
      <EmailForm
        email={email}
        setEmail={setEmail}
        setEmailConfirmed={setEmailConfirmed}
      />

      <PasswordForm />
    </>
  )
}
