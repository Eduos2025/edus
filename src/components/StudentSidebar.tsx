
import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { menuItems } from '@/config/menuItems';
import SidebarItem from './sidebar/SidebarItem';
import { MenuItem } from '@/types/sidebar';
import { motion } from 'framer-motion';
import { useIsMobile } from '@/hooks/use-mobile';

const StudentSidebar: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [openMenus, setOpenMenus] = useState<{ [key: string]: boolean }>({});
  const location = useLocation();
  const navigate = useNavigate();
  const isMobile = useIsMobile();

  useEffect(() => {
    menuItems.forEach(item => {
      if (item.submenu) {
        const hasActiveChild = item.submenu.some(subItem => 
          location.pathname === subItem.path || location.pathname.startsWith(`${subItem.path}/`));
        
        if (hasActiveChild) {
          setOpenMenus(prev => ({ ...prev, [item.title]: true }));
        }
      }
    });
  }, [location.pathname]);

  useEffect(() => {
    const handleResize = () => {
      if (isMobile && collapsed) {
        setCollapsed(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [collapsed, isMobile]);

  const handleItemClick = (item: MenuItem) => {
    if (collapsed) {
      setCollapsed(false);
    }
    
    if (item.submenu) {
      setOpenMenus(prev => {
        const newOpenMenus = { ...prev };
        Object.keys(newOpenMenus).forEach(key => {
          if (key !== item.title) {
            newOpenMenus[key] = false;
          }
        });
        newOpenMenus[item.title] = !prev[item.title];
        return newOpenMenus;
      });
    } else {
      navigate(item.path);
    }
  };

  return (
    <motion.div 
      initial={{ x: isMobile ? -280 : 0, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
      className={`
        bg-gradient-to-b from-white to-gray-50 shadow-lg h-full 
        transition-all duration-300 flex flex-col border-r border-gray-200
        ${collapsed ? 'w-16' : 'w-full'}
      `}
    >
      <div className="p-4 flex justify-between items-center border-b border-gray-200 bg-white">
        {!collapsed && (
          <h2 className="text-xl font-bold bg-gradient-to-r from-eduos-primary to-eduos-secondary bg-clip-text text-transparent">
            EDUOS
          </h2>
        )}
        <button 
          onClick={() => setCollapsed(!collapsed)} 
          className="p-2 rounded-md hover:bg-eduos-light text-eduos-primary transition-colors duration-200 hover:shadow-md md:block hidden"
        >
          <Menu size={20} />
        </button>
      </div>
      
      <div className="overflow-y-auto flex-1 px-2 scrollbar-thin">
        <nav className="py-4">
          <ul className="space-y-1">
            {menuItems.map((item) => (
              <SidebarItem
                key={item.title}
                item={item}
                isOpen={openMenus[item.title]}
                collapsed={collapsed}
                onItemClick={handleItemClick}
              />
            ))}
          </ul>
        </nav>
      </div>
    </motion.div>
  );
};

export default StudentSidebar;
