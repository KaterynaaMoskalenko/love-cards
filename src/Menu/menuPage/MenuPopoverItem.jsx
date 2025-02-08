import React from 'react';
import {Popover, PopoverButton, PopoverPanel} from "@headlessui/react";
import MenuItem from "./MenuItem";

const MenuPopoverItem = ({ children, labelKey, icon }) => {
    return <Popover>
        <PopoverButton className={'full-width-button'}>
            <MenuItem icon={icon} labelKey={labelKey}/>
        </PopoverButton>
        <PopoverPanel className="language-popover-panel" transition>
            {children}
        </PopoverPanel>
    </Popover>
};

export default MenuPopoverItem;