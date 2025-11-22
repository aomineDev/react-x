import { NavLink } from 'react-router'

interface NavItemProps {
	title: string
	to: string
	Icon?: React.FC<{ size: number }>
}

const NavItem = ({ title, to, Icon }: NavItemProps) => {
	return (
		<NavLink
			to={to}
			className={({ isActive }) => `
      flex items-center gap-2 opacity-40 hover:opacity-80 transition-opacity duration-300 ${
				isActive ? ' opacity-100' : ''
			}`}
		>
			{Icon && <Icon size={16} />}
			{title}
		</NavLink>
	)
}

export default NavItem
