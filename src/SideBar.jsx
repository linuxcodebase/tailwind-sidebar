import { BsPlus, BsFillLightningFill, BsGearFill } from 'react-icons/bs';
import { FaLaptop, FaReact } from 'react-icons/fa';
const SideBar = () => {
    return (
        <div className="fixed top-0 left-0 h-screen w-16 m-0 flex flex-col bg-gray-900 text-white shadow-lg">

            <SideBarIcon icon={<BsPlus size="32" />} text='Add an item' onClick={() => console.log('Add clicked')}/>
            <SideBarIcon icon={<BsFillLightningFill size="20" />} text='Lightning bolt' onClick={() => console.log('Lightning clicked')}/>
            <SideBarIcon icon={<FaLaptop size="20" />} text='Customize your device' onClick={() => console.log('Laptop clicked')}/>
            <SideBarIcon icon={<BsGearFill size="22" />} text='Settings' onClick={() => console.log('Settings clicked')}/>
            <SideBarIcon icon={<FaReact size="22" />} text='Built with React!' onClick={() => console.log('Logo clicked')}/>
        </div>
    )
};
const SideBarIcon = ({ icon, text = 'tooltip 💡' , onClick}) => (
    <button className="sidebar-icon group" onClick={onClick}>
        {icon}
        <span className="sidebar-tooltip group-hover:scale-100">
            {text}
        </span>
    </button>
);

export default SideBar