import { Drawer } from "antd";
import { useState } from "react";
import MenuIcon from "../../Icons/MenuIcon";
import Logo from "../../Icons/Logo";

const MobileDrawer = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const handleClick = () => {
        setIsDrawerOpen(!isDrawerOpen)
    };

    return (
        <>
            <button className="lg:hidden text-black" onClick={handleClick} aria-label="menu_btn">
                <MenuIcon className="text-neutral-soft-grey mr-5" />
            </button>
            <div className="lg:hidden">
                <Drawer
                    title={
                        <Logo className="max-w-[100px] h-auto" />
                    }
                    placement={"left"}
                    closable={true}
                    onClose={() => setIsDrawerOpen(false)}
                    open={isDrawerOpen}
                >
                    <ul className='grid gap-10'>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Furniture</a></li>
                        <li><a href="#">Accessories</a></li>
                        <li><a href="#">About us</a></li>
                    </ul>
                </Drawer>
            </div>
        </>
    );
};

export default MobileDrawer;