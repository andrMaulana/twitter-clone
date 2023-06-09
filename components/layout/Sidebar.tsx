import {BsHouseFill} from 'react-icons/bs';
import {FaUser} from 'react-icons/fa'
import SidebarLogo from "./SidebarLogo";
// function in the number
const Sidebar = () => {
    const items = [
        {
            label: 'Home',
            href: '/',
            icon: BsHouseFill
        },
        {
            label: 'Notifications',
            href: '/notifications',
            icon: BsHouseFill
        },
        {
            label: 'Profile',
            href: '/users/123',
            icon: FaUser
        }
    ]
    return (
        <div className="col-span-1 h-full pr-4 md:pr-6">
            <div className="flex flex-col items-end">
                <div className="space-y-2 lg:w-[2]">
                    <SidebarLogo/>
                      {items.map((item) => (
                      <Sidebar
                        key={item.href}

              />
                      ))}
                </div>
            </div>
        </div>
    )
}
export default Sidebar;
