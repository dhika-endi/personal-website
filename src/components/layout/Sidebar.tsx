import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ThemeToggle } from "@/components/ThemeToggle";
import { 
  ChevronDown, 
  ChevronRight, 
  Home,
  Layers,
  Palette,
  Type,
  Grid3X3,
  Square,
  Layers2,
  Box,
  ArrowLeft,
  Coins,
  BookOpen,
  Wand2,
  FileText,
  BookMarked,
  BookA,
  MousePointerClick,
  CheckSquare,
  TextCursorInput,
  Circle,
  ListFilter,
  ToggleLeft,
  AlignLeft,
  PanelLeftClose,
  Rocket,
  Settings,
  Sun,
  Moon
} from "lucide-react";
import { LucideIcon } from "lucide-react";

interface NavItem {
  label: string;
  href?: string;
  icon?: LucideIcon;
  children?: NavItem[];
}

const navigation: NavItem[] = [
  {
    label: "Getting Started",
    icon: Rocket,
    children: [
      { label: "Home", href: "/design-system", icon: Home },
      { label: "Setup", href: "/design-system/getting-started/setup", icon: Settings },
      { label: "Learn the Basics", href: "/design-system/getting-started/learn", icon: BookOpen },
    ],
  },
  {
    label: "Foundations",
    icon: Layers,
    children: [
      { label: "Color", href: "/design-system/foundations/color", icon: Palette },
      { label: "Typography", href: "/design-system/foundations/typography", icon: Type },
      { label: "Spacing", href: "/design-system/foundations/spacing", icon: Grid3X3 },
      { label: "Radius", href: "/design-system/foundations/radius", icon: Square },
      { label: "Elevation", href: "/design-system/foundations/elevation", icon: Layers2 },
    ],
  },
  {
    label: "Tokens",
    icon: Coins,
    children: [
      { label: "Overview", href: "/design-system/foundations/tokens/overview", icon: BookOpen },
      { label: "Token Builder", href: "/design-system/foundations/tokens/builder", icon: Wand2 },
      { label: "Specifications", href: "/design-system/foundations/tokens/specifications", icon: FileText },
      { label: "Usage", href: "/design-system/foundations/tokens/usage", icon: BookMarked },
      { label: "Taxon Glossary", href: "/design-system/foundations/tokens/glossary", icon: BookA },
    ],
  },
  {
    label: "Components",
    icon: Box,
    children: [
      { label: "Button", href: "/design-system/components/button", icon: MousePointerClick },
      { label: "Checkbox", href: "/design-system/components/checkbox", icon: CheckSquare },
      { label: "Input", href: "/design-system/components/input", icon: TextCursorInput },
      { label: "Radio Button", href: "/design-system/components/radio", icon: Circle },
      { label: "Select", href: "/design-system/components/select", icon: ListFilter },
      { label: "Switch", href: "/design-system/components/switch", icon: ToggleLeft },
      { label: "Textarea", href: "/design-system/components/textarea", icon: AlignLeft },
    ],
  },
];

interface NavSectionProps {
  item: NavItem;
  level?: number;
  onLinkClick?: () => void;
}

const NavSection = ({ item, level = 0, onLinkClick }: NavSectionProps) => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(true);
  const hasChildren = item.children && item.children.length > 0;
  const isActive = item.href === location.pathname;
  const Icon = item.icon;

  if (hasChildren) {
    return (
      <div className="mb-1">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-between w-full px-3 py-2 text-xs font-medium uppercase tracking-wider text-foreground-muted hover:text-foreground transition-colors"
        >
          <span className="flex items-center gap-2">
            {Icon && <Icon className="w-4 h-4" />}
            {item.label}
          </span>
          {isOpen ? (
            <ChevronDown className="w-3 h-3" />
          ) : (
            <ChevronRight className="w-3 h-3" />
          )}
        </button>
        {isOpen && (
          <div className="ml-2 border-l border-border-subtle">
            {item.children.map((child) => (
              <NavSection key={child.label} item={child} level={level + 1} onLinkClick={onLinkClick} />
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <Link
      to={item.href || "/design-system"}
      onClick={onLinkClick}
      className={`nav-link ml-2 flex items-center gap-2 ${isActive ? "nav-link-active" : ""}`}
    >
      {Icon && <Icon className="w-4 h-4" />}
      {item.label}
    </Link>
  );
};

interface SidebarProps {
  isOpen?: boolean;
  onClose?: () => void;
  isCollapsed?: boolean;
  onCollapse?: () => void;
}

export const Sidebar = ({ isOpen, onClose, isCollapsed, onCollapse }: SidebarProps) => {
  return (
    <aside 
      className={`fixed left-0 top-0 h-screen w-64 glass-sidebar overflow-y-auto z-50 transition-transform duration-300 ${
        isCollapsed ? 'lg:-translate-x-full' : 'lg:translate-x-0'
      } ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
    >
      {/* Back to Portfolio link */}
      <div className="p-4 border-b border-border-glass/50 flex items-center justify-between">
        <Link
          to="/"
          onClick={onClose}
          className="flex items-center gap-2 text-sm text-foreground-muted hover:text-foreground transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Portfolio
        </Link>
        {/* Desktop collapse button */}
        <button
          onClick={onCollapse}
          className="hidden lg:flex p-1.5 rounded hover:bg-secondary transition-colors"
          aria-label="Collapse sidebar"
        >
          <PanelLeftClose className="w-4 h-4 text-foreground-muted" />
        </button>
      </div>
      
      <div className="p-6 border-b border-border-glass/50 flex items-center justify-between">
        <Link to="/design-system" className="block group" onClick={onClose}>
          <h1 className="text-lg font-semibold text-foreground tracking-tight group-hover:text-primary transition-colors">
            Dhika
          </h1>
          <p className="text-xs text-foreground-muted mt-0.5">Design System</p>
        </Link>
        <ThemeToggle />
      </div>
      <nav className="p-4 space-y-1">
        {navigation.map((item) => (
          <NavSection key={item.label} item={item} onLinkClick={onClose} />
        ))}
      </nav>
    </aside>
  );
};
