import { BsPlus, BsFillLightningFill, BsGearFill } from 'react-icons/bs';
import { FaLaptop, FaAtom, FaReact } from 'react-icons/fa';
const SideBar = () => {
    return (
        <div className="fixed top-0 left-0 h-screen w-16 m-0 flex flex-col bg-gray-900 text-white shadow-lg">

            <SideBarIcon icon={<BsPlus size="32" />} text='Add an item' />
            <SideBarIcon icon={<BsFillLightningFill size="20" />} text='Lightning bolt' />
            <SideBarIcon icon={<FaLaptop size="20" />} text='Customize your device' />
            <SideBarIcon icon={<BsGearFill size="22" />} text='Settings' />
            <SideBarIcon icon={<FaReact size="22" />} text='Built with React!' />
        </div>
    )
};
const SideBarIcon = ({ icon, text = 'tooltip 💡' }) => (
    <div className="sidebar-icon group">
        {icon}
        <span class="sidebar-tooltip group-hover:scale-100">
            {text}
        </span>
    </div>
);

export default SideBar