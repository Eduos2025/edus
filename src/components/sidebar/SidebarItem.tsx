
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { SidebarItemProps } from '@/types/sidebar';
import { motion, AnimatePresence } from 'framer-motion';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

const SidebarItem: React.FC<SidebarItemProps> = ({ 
  item, 
  isOpen, 
  collapsed,
  onItemClick 
}) => {
  const location = useLocation();
  const [isActive, setIsActive] = useState(false);
  
  // Check if current location matches this item's path
  useEffect(() => {
    const checkActive = () => {
      const currentPath = location.pathname;
      
      // Direct match with the item's path
      if (currentPath === item.path) {
        setIsActive(true);
        return;
      }
      
      // Check if any submenu items are active
      if (item.submenu) {
        const hasActiveChild = item.submenu.some(subItem => 
          currentPath === subItem.path || currentPath.startsWith(`${subItem.path}/`)
        );
        
        if (hasActiveChild) {
          setIsActive(true);
          return;
        }
      }
      
      // Check if the path starts with the item's path
      // For example, /teacher/assignments/add should activate /teacher/assignments
      if (currentPath.startsWith(`${item.path}/`)) {
        setIsActive(true);
        return;
      }
      
      setIsActive(false);
    };
    
    checkActive();
  }, [location.pathname, item]);
  
  const buttonClasses = `
    w-full text-left flex items-center px-3 py-2.5 rounded-lg transition-all duration-300
    ${isActive 
      ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md' 
      : 'text-gray-700 hover:bg-gray-100 hover:text-blue-700'}
  `;

  const renderMenuItem = () => {
    const IconComponent = item.icon;
    
    if (collapsed && !item.submenu) {
      return (
        <TooltipProvider delayDuration={300}>
          <Tooltip>
            <TooltipTrigger asChild>
              <motion.div whileHover={{ x: 2 }} whileTap={{ scale: 0.98 }}>
                <Link
                  to={item.path}
                  className={`${buttonClasses} justify-center`}
                >
                  {item.icon && (
                    <motion.span 
                      className="transition-transform duration-300 group-hover:scale-110" 
                      whileHover={{ scale: 1.1 }}
                    >
                      <IconComponent size={20} />
                    </motion.span>
                  )}
                </Link>
              </motion.div>
            </TooltipTrigger>
            <TooltipContent side="right">{item.title}</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      );
    }
  
    if (item.submenu) {
      return (
        <>
          <button
            className={buttonClasses}
            onClick={() => onItemClick(item)}
            aria-expanded={isOpen}
          >
            {item.icon && (
              <motion.span 
                className="mr-3 transition-transform duration-300 group-hover:scale-110 min-w-[20px]"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <IconComponent size={20} />
              </motion.span>
            )}
            {!collapsed && (
              <>
                <span className="transition-all duration-300 flex-1 text-left text-sm sm:text-base whitespace-nowrap overflow-hidden text-ellipsis">
                  {item.title}
                </span>
                <motion.span 
                  animate={{ rotate: isOpen ? 90 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="ml-auto"
                >
                  <ChevronDown size={16} className={isOpen ? 'transform rotate-180' : ''} />
                </motion.span>
              </>
            )}
          </button>
          
          <AnimatePresence>
            {isOpen && !collapsed && (
              <motion.ul
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="pl-6 sm:pl-8 mt-1 space-y-1 overflow-hidden list-none" /* Added list-none class */
              >
                {item.submenu.map((subItem) => (
                  <motion.li 
                    key={subItem.title}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2 }}
                    className="list-none" /* Added list-none class */
                  >
                    <Link
                      to={subItem.path}
                      className={`
                        px-3 py-2 rounded-md block transition-all duration-300 text-xs sm:text-sm
                        ${location.pathname === subItem.path || location.pathname.startsWith(`${subItem.path}/`) 
                          ? 'text-blue-700 font-medium bg-blue-50'
                          : 'text-gray-600 hover:text-blue-700 hover:bg-blue-50/50'}
                      `}
                    >
                      {subItem.title}
                    </Link>
                  </motion.li>
                ))}
              </motion.ul>
            )}
          </AnimatePresence>
        </>
      );
    } else {
      return (
        <motion.div whileHover={{ x: 2 }} whileTap={{ scale: 0.98 }}>
          <Link
            to={item.path}
            className={buttonClasses}
          >
            {item.icon && (
              <motion.span 
                className="mr-3 transition-transform duration-300 group-hover:scale-110 min-w-[20px]" 
                whileHover={{ scale: 1.1 }}
              >
                <IconComponent size={20} />
              </motion.span>
            )}
            {!collapsed && (
              <span className="transition-all duration-300 flex-1 text-sm sm:text-base">
                {item.title}
              </span>
            )}
          </Link>
        </motion.div>
      );
    }
  };
  
  return (
    <li className="group list-none"> {/* Added list-none class */}
      {renderMenuItem()}
    </li>
  );
};

export default SidebarItem;
