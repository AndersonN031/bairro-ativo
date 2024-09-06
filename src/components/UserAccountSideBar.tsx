'use client'

import { signOut } from "next-auth/react"

const UserAccountSideBar = () => {
    return (
        <button
            onClick={() => signOut({
                redirect: true,
                callbackUrl: `${window.location.origin}/login`
            })}
            className="button-signout"
        >Sair</button>
    )
}

export default UserAccountSideBar;