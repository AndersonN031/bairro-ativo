// Sidebar.tsx
import { authOptions } from '@/src/lib/auth';
import { getServerSession } from "next-auth";
import Link from "next/link";
import UserAccountSideBar from "./UserAccountSideBar";

const Sidebar = async () => {
    const session = await getServerSession(authOptions);

    return (
        <div className="sidebar">
            <h2>Menu</h2>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            {session?.user ? (
                <UserAccountSideBar /> // renderiza somente o botão, que é do cliente
            ) : (
                <Link href='/login' className='button-signin'>Login</Link>
            )}
        </div>
    )
}

export default Sidebar;
